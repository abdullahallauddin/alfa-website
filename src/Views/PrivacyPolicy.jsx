import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/about-us.png";
import { Accordion, AccordionItem } from "../Components/Accordion";

const LAST_UPDATED = "27 June 2026";

const PrivacyPolicy = () => {
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
            Privacy <span className="text-[#2C95D2]">Policy</span>
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16">
        <p className="text-sm text-white/45">Last updated: {LAST_UPDATED}</p>
        <h2
          className="text-3xl md:text-4xl font-light mt-3 mb-4 text-white font-roboto"
          style={{ letterSpacing: "-0.02em" }}
        >
          Privacy Policy
        </h2>
        <p className="text-lg mt-4 text-white/75 leading-relaxed">
          ALFA Marine Industrial Services Company (“ALFA”, “we”, “our” or “us”)
          respects your privacy and is committed to protecting your personal
          data. This Privacy Policy explains how we collect, use, disclose, store
          and protect personal data when you visit our website or interact with
          us, and the rights available to you. We process personal data in
          accordance with the Personal Data Protection Law of the Kingdom of
          Saudi Arabia (Royal Decree No. M/19 of 1443H) and its Implementing
          Regulations (“PDPL”).
        </p>

        {/* Data controller summary */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-roboto text-lg font-medium text-white">
            Data Controller
          </h3>
          <span className="mt-3 mb-4 block h-px w-10 bg-[#2C95D2]" />
          <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-2 text-[15px] text-white/75">
            <div>
              <dt className="text-white/45">Entity</dt>
              <dd className="text-white/85">
                ALFA Marine Industrial Services Company
              </dd>
            </div>
            <div>
              <dt className="text-white/45">Unified National / CR Number</dt>
              <dd className="text-white/85">7028203037</dd>
            </div>
            <div>
              <dt className="text-white/45">VAT Registration Number</dt>
              <dd className="text-white/85">312214760200003</dd>
            </div>
            <div>
              <dt className="text-white/45">Registered Address</dt>
              <dd className="text-white/85">
                Building 4855, Prince Mansour Street, Prince Muhammad Ibn Saud
                District, Dammam 32241, Kingdom of Saudi Arabia
              </dd>
            </div>
            <div>
              <dt className="text-white/45">Email</dt>
              <dd>
                <a
                  href="mailto:info@alfamarinesa.com"
                  className="text-[#2C95D2] hover:underline"
                >
                  info@alfamarinesa.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-white/45">Phone</dt>
              <dd>
                <a
                  href="tel:+966138052528"
                  className="text-[#2C95D2] hover:underline"
                >
                  +966 13 805 2528
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-8">
          <Accordion allowMultiple defaultOpen={[0]}>
            <AccordionItem id={0} title="1. Scope of this Policy">
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                This Policy applies to personal data we process about visitors to
                our website, individuals who contact us or submit enquiries,
                prospective clients, suppliers, job applicants, and other
                individuals whose personal data we handle. It covers our website
                and its subdomains. Third-party websites linked from our site are
                governed by their own privacy policies.
              </p>
            </AccordionItem>

            <AccordionItem id={1} title="2. Personal Data We Collect">
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                Depending on how you interact with us, we may collect:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-white/75 marker:text-[#2C95D2]">
                <li>
                  Identity &amp; contact data — name, email address, phone
                  number, company/organization name.
                </li>
                <li>
                  Enquiry &amp; correspondence data — the content of messages,
                  inquiries, applications, supplier registrations, or complaints
                  you send us.
                </li>
                <li>
                  Technical &amp; usage data — IP address, device and browser
                  type, pages visited, and similar information collected through
                  cookies and analytics.
                </li>
              </ul>
              <p className="text-lg mt-3 text-white/75 leading-relaxed">
                We do not intentionally collect sensitive personal data through
                our website. Please do not submit such data unless specifically
                requested and necessary.
              </p>
            </AccordionItem>

            <AccordionItem id={2} title="3. How We Collect Personal Data">
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                We collect personal data: (a) directly from you when you complete
                a form, email us, call us, or otherwise communicate with us; and
                (b) automatically through cookies and similar technologies when
                you use our website. See our{" "}
                <a href="/cookies-policy" className="text-[#2C95D2] hover:underline">
                  Cookies Policy
                </a>{" "}
                for details.
              </p>
            </AccordionItem>

            <AccordionItem id={3} title="4. Purposes of Processing">
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                We process personal data to:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-white/75 marker:text-[#2C95D2]">
                <li>Respond to your enquiries, requests and complaints.</li>
                <li>
                  Provide, manage and improve our services and our relationship
                  with clients and suppliers.
                </li>
                <li>
                  Evaluate job applications and supplier registrations.
                </li>
                <li>
                  Operate, secure, maintain and improve our website and analyze
                  its usage.
                </li>
                <li>
                  Comply with legal, regulatory and contractual obligations.
                </li>
              </ul>
            </AccordionItem>

            <AccordionItem id={4} title="5. Legal Basis for Processing">
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                Under the PDPL, we rely on one or more of the following legal
                bases: your consent; the processing being necessary to enter into
                or perform a contract to which you are or intend to be a party;
                compliance with a legal obligation; and our legitimate interests
                (where these are not overridden by your rights and interests),
                such as responding to enquiries and securing our website. Where we
                rely on consent, you may withdraw it at any time as described
                below.
              </p>
            </AccordionItem>

            <AccordionItem id={5} title="6. Cookies & Analytics">
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                We use strictly necessary cookies to operate the website and,
                with your consent, analytics cookies to understand how the site is
                used. You can accept or reject non-essential cookies through our
                cookie banner and manage your preferences at any time. For full
                details, see our{" "}
                <a href="/cookies-policy" className="text-[#2C95D2] hover:underline">
                  Cookies Policy
                </a>
                .
              </p>
            </AccordionItem>

            <AccordionItem id={6} title="7. Disclosure of Personal Data">
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                We do not sell your personal data. We may share it with: trusted
                service providers who process data on our behalf (such as website
                hosting, email and analytics providers) under appropriate
                agreements; our affiliates and business partners where necessary
                to provide services; and competent government, regulatory or law
                enforcement authorities where required by applicable law or to
                protect our legal rights. Any data processor acting on our behalf
                is bound to process personal data only on our instructions and to
                apply appropriate safeguards.
              </p>
            </AccordionItem>

            <AccordionItem id={7} title="8. Cross-Border Transfers">
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                Where personal data is transferred outside the Kingdom of Saudi
                Arabia (for example to service providers), we will only do so in
                accordance with the conditions and safeguards required by the PDPL
                and its Implementing Regulations, ensuring an adequate level of
                protection for your personal data.
              </p>
            </AccordionItem>

            <AccordionItem id={8} title="9. Data Retention">
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                We retain personal data only for as long as necessary to fulfil
                the purposes for which it was collected, including to satisfy any
                legal, regulatory, accounting or reporting requirements. When
                personal data is no longer required, we will securely delete or
                anonymize it.
              </p>
            </AccordionItem>

            <AccordionItem id={9} title="10. Data Security">
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                We implement appropriate organizational and technical measures to
                protect personal data against accidental or unlawful destruction,
                loss, alteration, unauthorized disclosure or access. While we take
                reasonable steps to protect your data, no method of transmission
                or storage is completely secure. In the event of a personal data
                breach, we will notify the competent authority and affected
                individuals where required by the PDPL.
              </p>
            </AccordionItem>

            <AccordionItem id={10} title="11. Your Rights Under the PDPL">
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                Subject to the PDPL, you have the right to:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-white/75 marker:text-[#2C95D2]">
                <li>
                  <span className="text-white/90">Be informed</span> — about how
                  and why your personal data is collected and used.
                </li>
                <li>
                  <span className="text-white/90">Access</span> — request access
                  to your personal data held by us.
                </li>
                <li>
                  <span className="text-white/90">Obtain a copy</span> — request a
                  copy of your personal data in a readable format.
                </li>
                <li>
                  <span className="text-white/90">Correct</span> — request
                  correction of inaccurate, incomplete or outdated data.
                </li>
                <li>
                  <span className="text-white/90">Destroy</span> — request
                  deletion of your personal data where it is no longer needed.
                </li>
                <li>
                  <span className="text-white/90">Withdraw consent</span> — where
                  processing is based on consent, withdraw it at any time.
                </li>
              </ul>
              <p className="text-lg mt-3 text-white/75 leading-relaxed">
                To exercise any of these rights, contact us at{" "}
                <a
                  href="mailto:info@alfamarinesa.com"
                  className="text-[#2C95D2] hover:underline"
                >
                  info@alfamarinesa.com
                </a>
                . We will respond within the period required by the PDPL.
                Exercising your rights will not affect the lawfulness of
                processing carried out before your request.
              </p>
            </AccordionItem>

            <AccordionItem id={11} title="12. Complaints">
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                If you have a concern about how we handle your personal data,
                please contact us first so we can address it. You also have the
                right to lodge a complaint with the competent supervisory
                authority in the Kingdom of Saudi Arabia — the Saudi Data &amp; AI
                Authority (SDAIA).
              </p>
            </AccordionItem>

            <AccordionItem id={12} title="13. Children’s Privacy">
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                Our website and services are not directed to children. We do not
                knowingly collect personal data from children without appropriate
                consent from a guardian. If you believe we have collected such
                data, please contact us and we will take appropriate action.
              </p>
            </AccordionItem>

            <AccordionItem id={13} title="14. Changes to this Policy">
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or legal requirements. The “Last updated”
                date above indicates when it was last revised. We encourage you to
                review it periodically.
              </p>
            </AccordionItem>

            <AccordionItem id={14} title="15. Contact Us">
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                For any questions about this Policy or our handling of personal
                data, contact the Data Controller:
              </p>
              <p className="text-lg mt-3 text-white/85">
                ALFA Marine Industrial Services Company
                <br />
                Building 4855, Prince Mansour Street, Prince Muhammad Ibn Saud
                District, Dammam 32241, Kingdom of Saudi Arabia
                <br />
                Email:{" "}
                <a
                  href="mailto:info@alfamarinesa.com"
                  className="text-[#2C95D2] hover:underline"
                >
                  info@alfamarinesa.com
                </a>{" "}
                · Phone:{" "}
                <a
                  href="tel:+966138052528"
                  className="text-[#2C95D2] hover:underline"
                >
                  +966 13 805 2528
                </a>
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
