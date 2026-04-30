import { useEffect } from "react";
import Seo from "../Components/Seo";
import backgroundImage from "../Assets/Images/about-us.png";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="policy-page">
      <Seo
        title="Privacy Policy | ALFA Marine & Industrial Services"
        description="ALFA privacy policy describing personal data collected, purposes, retention, rights, third-party services, cookies, and privacy request contact details."
        path="/privacy-policy"
      />

      <section className="inner-hero" style={{ "--inner-hero-image": `url(${backgroundImage})` }}>
        <div className="section-shell inner-hero__content">
          <p className="eyebrow">Privacy Policy</p>
          <h1>Transparent handling of inquiry data.</h1>
          <p>
            This policy explains how ALFA Marine & Industrial Services handles
            personal data collected through the website, forms, email, phone,
            and third-party service links.
          </p>
        </div>
      </section>

      <section className="section-shell section-pad policy-layout">
        <aside className="policy-sidebar">
          <p>
            Last updated: April 29, 2026. This policy is designed to support
            Saudi PDPL transparency requirements. It is not a legal guarantee of
            compliance for every processing activity.
          </p>
          <a href="mailto:info@alfamarinesa.com?subject=Privacy%20Request">Submit Privacy Request</a>
        </aside>

        <div className="policy-content">
          <article className="policy-card">
            <h2>Who We Are</h2>
            <p>
              ALFA Marine & Industrial Services operates from Dammam, Kingdom
              of Saudi Arabia. In this policy, "ALFA", "we", "our", or "us"
              refers to the ALFA organization responsible for responding to
              website inquiries and managing related business communication.
            </p>
          </article>

          <article className="policy-card">
            <h2>Data We Collect</h2>
            <p>Depending on how you use the website, we may collect:</p>
            <ul>
              <li>Name, company or organization, job role, email address, phone number, and message details submitted through inquiry forms or email.</li>
              <li>Career inquiry details, including name, email, phone number, CV file, and information included inside the CV.</li>
              <li>Supplier registration details submitted through the external supplier portal, such as business contact details, company information, and registration documents.</li>
              <li>Technical data such as IP address, browser/device details, approximate location derived from technical data, timestamps, and form submission metadata when processed by our website or service providers.</li>
              <li>Cookie or local-storage preferences used to remember your cookie notice choice.</li>
            </ul>
          </article>

          <article className="policy-card">
            <h2>Purpose of Collection</h2>
            <p>ALFA uses personal data only for relevant business purposes, including:</p>
            <ul>
              <li>Responding to commercial, technical, supplier, career, or general inquiries.</li>
              <li>Understanding requested services, sectors, project context, and communication needs.</li>
              <li>Managing recruitment correspondence and evaluating career inquiries.</li>
              <li>Reviewing supplier registration information and procurement communication.</li>
              <li>Maintaining website security, troubleshooting technical issues, and keeping business records where needed.</li>
              <li>Complying with applicable legal, regulatory, audit, or dispute-resolution requirements.</li>
            </ul>
          </article>

          <article className="policy-card">
            <h2>Method of Collection</h2>
            <p>
              Data may be collected when you submit a form, send an email, call
              ALFA, use the supplier portal, upload a CV, load a third-party map
              or embedded form, or interact with technical features of the
              website. We do not require unnecessary personal data for basic
              browsing.
            </p>
          </article>

          <article className="policy-card">
            <h2>Storage and Retention</h2>
            <p>
              ALFA keeps personal data only for as long as reasonably necessary
              for the purpose for which it was collected, including responding
              to inquiries, managing supplier or recruitment communication,
              maintaining business records, meeting legal obligations, or
              resolving disputes. CVs and recruitment data should be retained
              only for recruitment-related purposes unless you provide a later
              instruction or a longer period is required by applicable law.
            </p>
          </article>

          <article className="policy-card">
            <h2>Third-Party Sharing</h2>
            <p>
              We may share personal data with service providers only where
              needed to operate the website or respond to your request. Current
              website-related third-party surfaces include the embedded Bigin
              contact form, Getform career submission endpoint, Google Maps
              embed, Zoho supplier portal, email providers, hosting providers,
              and professional advisers where required. We may also disclose
              information to authorities when legally required.
            </p>
          </article>

          <article className="policy-card">
            <h2>Cross-Border Processing</h2>
            <p>
              Some third-party providers may host, access, or process data
              outside the Kingdom of Saudi Arabia. When you choose to submit a
              form, upload a CV, use the supplier portal, or load an embedded
              third-party service, your data may be transferred or processed in
              other jurisdictions according to the provider's infrastructure and
              terms.
            </p>
          </article>

          <article className="policy-card">
            <h2>Cookies and Analytics</h2>
            <p>
              This implementation stores an essential cookie/local-storage
              preference so the cookie notice does not repeatedly appear. The
              source code does not currently include a first-party analytics
              script or tracking pixel. Third-party embeds and portals may set
              their own cookies or collect usage data when you choose to load or
              use them. See the Cookie Policy for more detail.
            </p>
          </article>

          <article className="policy-card">
            <h2>Your Rights</h2>
            <p>
              Subject to applicable law and verification, you may request access
              to your personal data, correction of inaccurate data, deletion of
              data that is no longer needed, withdrawal of consent where
              processing is based on consent, or information about how your data
              has been used or shared.
            </p>
          </article>

          <article className="policy-card">
            <h2>Access, Correction, or Deletion Requests</h2>
            <p>
              To request access, correction, deletion, or withdrawal of consent,
              email <a href="mailto:info@alfamarinesa.com">info@alfamarinesa.com</a> with
              the subject line "Privacy Request". Please include enough
              information for ALFA to identify the relevant interaction, such as
              the form used, approximate submission date, and email address used.
            </p>
          </article>

          <article className="policy-card">
            <h2>Security</h2>
            <p>
              ALFA aims to use reasonable administrative and technical measures
              to protect personal data. No website, email, third-party form, or
              internet transmission can be guaranteed completely secure, so you
              should avoid submitting unnecessary sensitive information.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
