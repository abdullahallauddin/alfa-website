import { useEffect } from "react";
import Seo from "../Components/Seo";
import backgroundImage from "../Assets/Images/about-us.png";

const CookiesPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="policy-page">
      <Seo
        title="Cookie Policy | ALFA Marine & Industrial Services"
        description="ALFA cookie policy explaining essential preferences, third-party embeds, forms, maps, analytics status, and user choices."
        path="/cookies-policy"
      />

      <section className="inner-hero" style={{ "--inner-hero-image": `url(${backgroundImage})` }}>
        <div className="section-shell inner-hero__content">
          <p className="eyebrow">Cookie Policy</p>
          <h1>Clear choices for cookies and embeds.</h1>
          <p>
            This page explains how the website uses browser storage and how
            third-party embeds or forms may use cookies when you choose to load
            them.
          </p>
        </div>
      </section>

      <section className="section-shell section-pad policy-layout">
        <aside className="policy-sidebar">
          <p>
            Last updated: April 29, 2026. The cookie notice is designed to
            support Saudi PDPL transparency requirements for website visitors.
          </p>
          <a href="mailto:info@alfamarinesa.com?subject=Cookie%20Privacy%20Request">Ask About Cookies</a>
        </aside>

        <div className="policy-content">
          <article className="policy-card">
            <h2>What Cookies Are</h2>
            <p>
              Cookies are small files stored by a website or third-party service
              in your browser. Similar browser technologies, such as local
              storage, can remember preferences or support website features.
            </p>
          </article>

          <article className="policy-card">
            <h2>Essential Browser Storage</h2>
            <p>
              This website stores your cookie notice preference in browser local
              storage under an ALFA preference key. This is used only to remember
              whether you selected essential-only or accepted all cookies, so
              the notice does not repeatedly appear.
            </p>
          </article>

          <article className="policy-card">
            <h2>Third-Party Forms and Embeds</h2>
            <p>
              The website uses or links to third-party services for the contact
              form, career form submissions, supplier portal, maps, and social
              links. These providers may set cookies, collect IP/device data, or
              process usage metadata when you load an embed, submit a form, or
              open an external portal.
            </p>
            <ul>
              <li>Bigin embedded contact form may process inquiry submission data and technical metadata.</li>
              <li>Getform may process career form submissions and uploaded CV files.</li>
              <li>Google Maps may set cookies or collect usage data when the map is loaded.</li>
              <li>Zoho supplier portal may set cookies and process supplier account or registration data.</li>
              <li>External social links may use their own cookies after you leave the ALFA website.</li>
            </ul>
          </article>

          <article className="policy-card">
            <h2>Analytics and Tracking Pixels</h2>
            <p>
              The current source code does not include a first-party analytics
              script or tracking pixel. If analytics, advertising pixels, or
              similar technologies are added later, this policy and the cookie
              notice should be updated before those tools are used.
            </p>
          </article>

          <article className="policy-card">
            <h2>Your Choices</h2>
            <p>
              You can choose essential-only or accept all in the cookie notice.
              You can also avoid loading the Google Map or embedded contact form
              and use the published phone, email, and office address instead.
              Browser settings can be used to delete cookies or local storage at
              any time.
            </p>
          </article>

          <article className="policy-card">
            <h2>How to Reset the Notice</h2>
            <p>
              To reset your ALFA cookie notice choice, clear this website's site
              data in your browser settings. The notice will appear again on
              your next visit.
            </p>
          </article>

          <article className="policy-card">
            <h2>Contact</h2>
            <p>
              For cookie or privacy questions, email <a href="mailto:info@alfamarinesa.com">info@alfamarinesa.com</a> with
              the subject line "Cookie Privacy Request".
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default CookiesPolicy;
