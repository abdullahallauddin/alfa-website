import { useEffect } from "react";
import { Link } from "react-router-dom";
import Seo from "../Components/Seo";
import backgroundImage from "../Assets/Images/supplier.png";

const Supplier = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="contact-page">
      <Seo
        title="Become a Supplier | ALFA Marine & Industrial Services"
        description="Supplier registration information for ALFA Marine & Industrial Services, including third-party portal and privacy transparency notice."
        path="/become-a-supplier"
      />

      <section className="inner-hero" style={{ "--inner-hero-image": `url(${backgroundImage})` }}>
        <div className="section-shell inner-hero__content">
          <p className="eyebrow">Supplier Registration</p>
          <h1>Build with ALFA's supplier network.</h1>
          <p>
            ALFA works with dependable suppliers to support marine, offshore,
            industrial, construction, ICT, facility, and joinery operations.
          </p>
        </div>
      </section>

      <section className="section-shell section-pad contact-grid">
        <article className="contact-card reveal-up">
          <p className="eyebrow">Supplier Relationship</p>
          <h2>Register through the supplier portal</h2>
          <p>
            Maintaining a robust and dependable supplier network is integral to
            ALFA's continued operations. Supplier registration is handled through
            the ALFA Supplier Registration Portal.
          </p>
          <p>
            Please provide only the business and contact information required to
            evaluate your supplier profile and respond to procurement-related
            communication.
          </p>
          <a
            className="btn btn-primary"
            href="https://books.zohosecure.com/portal/alfamarine/signin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Supplier Portal
          </a>
        </article>

        <aside className="consent-panel reveal-up">
          <p className="eyebrow">Privacy & Third-Party Notice</p>
          <h2>Before using the portal</h2>
          <p>
            The supplier portal is operated by a third-party service provider
            and may collect supplier contact details, company information,
            documents, login details, technical metadata, and cookies according
            to that provider's terms.
          </p>
          <p className="privacy-helper">
            ALFA uses supplier information to review vendor suitability, manage
            procurement communication, and maintain supplier records. Review the
            <Link to="/privacy-policy"> Privacy Policy</Link> and the provider's
            own notices before submitting personal data.
          </p>
        </aside>
      </section>
    </main>
  );
};

export default Supplier;
