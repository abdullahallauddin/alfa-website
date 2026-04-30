/**
 * Submission layer for the ALFA custom contact form.
 *
 * The form submits to a Bigin / Zoho web-to-contact endpoint. Because Bigin
 * does not expose CORS headers for arbitrary origins, the request is sent
 * with `mode: 'no-cors'` — the browser cannot read the response body, so the
 * helper resolves with `{ ok: true }` once the network round-trip completes
 * and assumes Bigin handled the payload.
 *
 * Required environment variable:
 *   VITE_BIGIN_FORM_ACTION  — full POST URL of the Bigin web form action
 *                             (visible in the embed source; usually under
 *                             setup → "Web to Contact Form" → embed code).
 *
 * Optional environment variable:
 *   VITE_BIGIN_RETURN_URL   — URL Bigin should redirect to after success.
 *
 * Field-name mapping is in `BIGIN_FIELD_MAP`. Adjust those values to match
 * the field internal names defined inside your Bigin form. The defaults
 * follow Zoho's most common naming convention.
 */

export const BIGIN_FIELD_MAP = {
  companyName: "Company",
  firstName: "First_Name",
  lastName: "Last_Name",
  email: "Email",
  mobile: "Mobile",
  jobTitle: "Title",
  inquiryType: "Inquiry_Type",
  message: "Description",
};

const isConfigured = () => Boolean(import.meta.env.VITE_BIGIN_FORM_ACTION);

const buildPayload = (values) => {
  const data = new FormData();
  Object.entries(BIGIN_FIELD_MAP).forEach(([key, biginName]) => {
    const value = values[key];
    if (value !== undefined && value !== null && value !== "") {
      data.append(biginName, String(value));
    }
  });

  const returnUrl = import.meta.env.VITE_BIGIN_RETURN_URL;
  if (returnUrl) {
    data.append("returnURL", returnUrl);
  }

  return data;
};

export const submitContactToBigin = async (values) => {
  if (!isConfigured()) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.warn(
        "[ALFA contact] VITE_BIGIN_FORM_ACTION is not set. " +
          "Submission will not be delivered to Bigin until the env var is configured."
      );
    }
    return {
      ok: false,
      reason: "not_configured",
      message:
        "The contact form is not yet connected to a delivery endpoint. Please email info@alfamarinesa.com instead.",
    };
  }

  const action = import.meta.env.VITE_BIGIN_FORM_ACTION;
  const payload = buildPayload(values);

  try {
    await fetch(action, {
      method: "POST",
      mode: "no-cors",
      body: payload,
    });

    // `mode: 'no-cors'` returns an opaque response — we cannot read status,
    // so we trust that the request reached Bigin once fetch resolves.
    return { ok: true };
  } catch (error) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.error("[ALFA contact] submission failed:", error);
    }
    return {
      ok: false,
      reason: "network_error",
      message:
        "We couldn't reach the inquiry service. Check your connection and try again, or email info@alfamarinesa.com.",
    };
  }
};
