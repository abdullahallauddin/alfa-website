import { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [consent, setConsent] = useState(false);

  return (
    <section className="section-shell section-pad">
      <div className="consent-panel modern-form">
        <p className="eyebrow">Get In Touch</p>
        <h2>Have a question? Send a short note.</h2>
        <p className="privacy-helper">
          ALFA uses the details you submit only to respond to your inquiry. Avoid
          sharing sensitive personal data. Read the{" "}
          <Link to="/privacy-policy">Privacy Policy</Link> before submitting.
        </p>

        <form
          className="modern-form__grid"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="contact-name">Full name</label>
              <input
                id="contact-name"
                name="user_name"
                type="text"
                autoComplete="name"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Email address</label>
              <input
                id="contact-email"
                name="user_email"
                type="email"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              name="user_subject"
              type="text"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="contact-message">Your message</label>
            <textarea
              id="contact-message"
              name="user_message"
              rows="5"
              required
            />
          </div>

          <label className="consent-checkbox" htmlFor="contact-consent">
            <input
              id="contact-consent"
              type="checkbox"
              checked={consent}
              onChange={(event) => setConsent(event.target.checked)}
              required
            />
            <span>
              I agree to the <Link to="/privacy-policy">Privacy Policy</Link> and
              consent to the processing of my personal data for responding to my
              inquiry.
            </span>
          </label>

          <button
            type="submit"
            className="form-submit"
            disabled={!consent}
            aria-disabled={!consent}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
