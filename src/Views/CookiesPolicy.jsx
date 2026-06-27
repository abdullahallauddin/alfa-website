import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/about-us.png";
import { Accordion, AccordionItem } from "../Components/Accordion";
import { reopenCookiePreferences } from "../Components/CookieConsent";

const LAST_UPDATED = "27 June 2026";

const CookiesPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className="bg-cover bg-center h-[clamp(18rem,46vh,30rem)] flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1
            className="text-5xl font-light mb-4 text-center text-white font-roboto"
            style={{ letterSpacing: "-0.02em" }}
          >
            Cookies <span className="text-[#2C95D2]">Policy</span>
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16">
        <p className="text-sm text-white/45">Last updated: {LAST_UPDATED}</p>
        <h2
          className="text-3xl md:text-4xl font-light mt-3 mb-4 text-white font-roboto"
          style={{ letterSpacing: "-0.02em" }}
        >
          Cookies Policy
        </h2>
        <p className="text-lg mt-4 text-white/75 leading-relaxed">
          This Cookies Policy explains how ALFA Marine Industrial Services
          Company (“ALFA”, “we”, “our” or “us”) uses cookies and similar
          technologies on our website, in line with the Personal Data Protection
          Law of the Kingdom of Saudi Arabia (PDPL). For how we handle personal
          data more generally, please see our{" "}
          <a href="/privacy-policy" className="text-[#2C95D2] hover:underline">
            Privacy Policy
          </a>
          .
        </p>

        <div className="mt-6">
          <button
            type="button"
            onClick={reopenCookiePreferences}
            className="rounded-full bg-[#2C95D2] px-6 py-2.5 font-roboto text-sm font-medium text-white transition-colors hover:bg-[#2C95D2]/90"
          >
            Manage cookie preferences
          </button>
        </div>

        <div className="mt-8">
          <Accordion allowMultiple defaultOpen={[0]}>
            <AccordionItem id={0} title="What are cookies?">
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                Cookies are small text files placed on your device when you visit
                a website. They help the site function, remember your preferences,
                and provide information to the site owners about how the site is
                used. Cookies may be set by us (first-party) or by third parties.
                Session cookies are deleted when you close your browser, while
                persistent cookies remain until they expire or are deleted.
              </p>
            </AccordionItem>

            <AccordionItem id={1} title="Categories of cookies we use">
              <ul className="list-disc list-inside mt-2 space-y-2 text-white/75 marker:text-[#2C95D2]">
                <li>
                  <span className="text-white/90">Strictly necessary</span> —
                  required for the website to function (e.g. security, navigation
                  and remembering your cookie choice). These are always active and
                  do not require consent.
                </li>
                <li>
                  <span className="text-white/90">Analytics / performance</span> —
                  help us understand how visitors use the site so we can improve
                  it. These are only used with your consent.
                </li>
                <li>
                  <span className="text-white/90">Functional</span> — remember
                  choices you make to provide a better experience. Used only with
                  your consent where they are non-essential.
                </li>
              </ul>
            </AccordionItem>

            <AccordionItem id={2} title="Your consent">
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                When you first visit our website, we ask for your consent to use
                non-essential cookies through a cookie banner. Strictly necessary
                cookies are used without consent as they are essential to the
                service. You can accept or reject non-essential cookies and change
                your decision at any time using the “Manage cookie preferences”
                button above.
              </p>
            </AccordionItem>

            <AccordionItem id={3} title="Third-party cookies">
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                Where enabled with your consent, we may use third-party analytics
                services (such as Google Analytics) that set their own cookies to
                generate aggregated statistics about website use. These providers
                process data in accordance with their own privacy policies. We may
                also embed third-party content (such as maps), which may set
                cookies controlled by those providers.
              </p>
            </AccordionItem>

            <AccordionItem id={4} title="How to manage or disable cookies">
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                You can manage non-essential cookies through our preferences
                control, and you can also control cookies through your browser
                settings — most browsers let you block or delete cookies. Please
                note that disabling certain cookies may affect how the website
                functions.
              </p>
            </AccordionItem>

            <AccordionItem id={5} title="Changes to this Cookies Policy">
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                We may update this Cookies Policy from time to time. The “Last
                updated” date above shows when it was last revised. Please review
                it periodically.
              </p>
            </AccordionItem>

            <AccordionItem id={6} title="Contact us">
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                For questions about our use of cookies, contact us at{" "}
                <a
                  href="mailto:info@alfamarinesa.com"
                  className="text-[#2C95D2] hover:underline"
                >
                  info@alfamarinesa.com
                </a>
                .
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default CookiesPolicy;
