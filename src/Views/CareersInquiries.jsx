import { useEffect } from "react";
import { Link } from "react-router-dom";
import Seo from "../Components/Seo";
import backgroundImage from "../Assets/Images/careers.jpg";

const CareersInquiries = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="contact-page">
      <Seo
        title="Careers at ALFA Marine & Industrial Services"
        description="Submit a career inquiry to ALFA Marine & Industrial Services with a clear privacy notice and consent before sending recruitment data."
        path="/careers"
      />

      <section className="inner-hero" style={{ "--inner-hero-image": `url(${backgroundImage})` }}>
        <div className="section-shell inner-hero__content">
          <p className="eyebrow">Careers</p>
          <h1>Join ALFA's industrial services teams.</h1>
          <p>
            Share only the recruitment information needed to evaluate and
            respond to your career inquiry.
          </p>
        </div>
      </section>

      <section className="section-shell section-pad contact-grid">
        <aside className="contact-card reveal-up">
          <p className="eyebrow">Recruitment Data Notice</p>
          <h2>What this form collects</h2>
          <p>
            This career form collects your name, email address, phone number,
            CV file, and any details included in your CV. ALFA uses this data to
            review your interest, contact you about suitable opportunities, and
            manage recruitment correspondence.
          </p>
          <p className="privacy-helper">
            Do not upload national IDs, financial details, medical records, or
            other unnecessary sensitive data unless ALFA specifically requests
            it for a later recruitment stage. Read the <Link to="/privacy-policy">Privacy Policy</Link>.
          </p>
        </aside>

        <form
          className="consent-panel modern-form reveal-up"
          action="https://getform.io/f/bkkndzxb"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="career-name">Full name</label>
              <input id="career-name" type="text" name="user_name" autoComplete="name" required />
              <small>Used to identify and respond to your career inquiry.</small>
            </div>
            <div className="form-field">
              <label htmlFor="career-email">Email address</label>
              <input id="career-email" type="email" name="user_email" autoComplete="email" required />
              <small>Used for recruitment correspondence only.</small>
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="career-phone">Phone number</label>
            <input id="career-phone" type="tel" name="user_phone" autoComplete="tel" required />
            <small>Used if ALFA needs to contact you about your application.</small>
          </div>

          <div className="form-field">
            <label htmlFor="career-cv">Upload CV</label>
            <input id="career-cv" type="file" name="user_cv" accept=".pdf,.doc,.docx" required />
            <small className="file-helper">Accepted formats: PDF, DOC, or DOCX.</small>
          </div>

          <label className="consent-checkbox" htmlFor="career-consent">
            <input id="career-consent" type="checkbox" name="privacy_consent" value="agreed" required />
            <span>
              I agree to the <Link to="/privacy-policy">Privacy Policy</Link> and consent to the processing of my personal data for responding to my inquiry.
            </span>
          </label>

          <button className="form-submit" type="submit">
            Submit Career Inquiry
          </button>
        </form>
      </section>
    </main>
  );
};

export default CareersInquiries;
