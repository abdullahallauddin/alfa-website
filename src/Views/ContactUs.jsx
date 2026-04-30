import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Building2, ExternalLink, Briefcase, Handshake, FileText, Headphones } from "lucide-react";
import Seo from "../Components/Seo";
import HeroImage from "../Assets/Images/divisions/marine-offshore.webp";
import { submitContactToBigin } from "../lib/bigin";

const MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.657813909496!2d50.110302999999995!3d26.434517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fb6d8a3e52d5%3A0x36ad5b73c9d39550!2sAlfa%20Marine%20%26%20Industrial%20Services%20Company!5e0!3m2!1sen!2ssa!4v1777536267805!5m2!1sen!2ssa";

const MAP_DIRECTIONS_URL =
  "https://www.google.com/maps/place/Alfa+Marine+%26+Industrial+Services+Company/@26.434517,50.110303,17z";

const INQUIRY_TYPES = [
  "Commercial Inquiry",
  "Marine & Offshore Services",
  "Industrial Services",
  "EPC / Construction",
  "Fabrication & Machining",
  "Facility Management",
  "Supplier / Vendor Inquiry",
  "Careers / HR",
  "General Inquiry",
];

const RESPONSE_EXPECTATIONS = [
  {
    icon: Briefcase,
    title: "Commercial Inquiries",
    body: "Quotations, scope clarifications, and pre-qualification requests handled by the commercial desk.",
  },
  {
    icon: FileText,
    title: "Project Requirements",
    body: "Engineering, fabrication, construction, and field-services scopes routed to the right division.",
  },
  {
    icon: Handshake,
    title: "Supplier Communication",
    body: "Vendor coordination and procurement follow-ups handled through the supplier channel.",
  },
  {
    icon: Headphones,
    title: "Corporate Support",
    body: "General corporate, media, and partnership communication routed to the appropriate team.",
  },
];

const INITIAL_FORM = {
  companyName: "",
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  jobTitle: "",
  inquiryType: "",
  message: "",
};

const ContactUs = () => {
  const [values, setValues] = useState(INITIAL_FORM);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState(null);
  const inFlightRef = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateField = (name) => (event) =>
    setValues((prev) => ({ ...prev, [name]: event.target.value }));

  const submitDisabled = !consent || status === "loading" || status === "success";

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitDisabled || inFlightRef.current) return;
    inFlightRef.current = true;
    setStatus("loading");
    setErrorMessage(null);

    const result = await submitContactToBigin(values);

    if (result.ok) {
      setStatus("success");
      setValues(INITIAL_FORM);
      setConsent(false);
    } else {
      setStatus("error");
      setErrorMessage(result.message ?? "Submission failed. Please try again.");
    }
    inFlightRef.current = false;
  };

  return (
    <main className="contact-page contact-v2">
      <Seo
        title="Contact ALFA Marine & Industrial Services"
        description="Contact ALFA Marine & Industrial Services in Dammam, Saudi Arabia for commercial, marine, offshore, industrial, construction, fabrication, ICT, facility, and joinery inquiries."
        path="/contact"
      />

      <section
        className="inner-hero contact-hero"
        style={{ "--inner-hero-image": `url(${HeroImage})` }}
      >
        <div className="section-shell inner-hero__content contact-hero__content">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Contact</span>
          </nav>
          <p className="eyebrow">Contact ALFA</p>
          <h1>Let's discuss your next marine, industrial, or EPC requirement.</h1>
          <p>
            Reach the right team for commercial inquiries, project discussions,
            supplier coordination, and corporate communication.
          </p>
          <ul className="contact-hero__chips" aria-label="Quick contact options">
            <li>
              <a href="tel:+966138052528">
                <Phone aria-hidden="true" size={16} />
                +966 13 805 2528
              </a>
            </li>
            <li>
              <a href="mailto:info@alfamarinesa.com">
                <Mail aria-hidden="true" size={16} />
                info@alfamarinesa.com
              </a>
            </li>
            <li>
              <a href="mailto:sales@alfamarinesa.com">
                <Mail aria-hidden="true" size={16} />
                sales@alfamarinesa.com
              </a>
            </li>
            <li>
              <span>
                <MapPin aria-hidden="true" size={16} />
                Dammam, Saudi Arabia
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-shell section-pad contact-grid">
        <div className="contact-page__left">
          <aside className="office-card reveal-up" aria-labelledby="office-title">
            <div className="office-card__header">
              <p className="eyebrow">Dammam Office</p>
              <h2 id="office-title">ALFA Marine &amp; Industrial Services</h2>
              <p>
                Prince Muhammad Ibn Saud District, Dammam, Kingdom of Saudi
                Arabia.
              </p>
            </div>

            <ul className="office-card__contacts" aria-label="Office contact methods">
              <li>
                <a href="tel:+966138052528" className="office-contact">
                  <span className="office-contact__icon" aria-hidden="true">
                    <Phone size={18} />
                  </span>
                  <span className="office-contact__body">
                    <small>Phone</small>
                    <strong>+966 13 805 2528</strong>
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:info@alfamarinesa.com" className="office-contact">
                  <span className="office-contact__icon" aria-hidden="true">
                    <Mail size={18} />
                  </span>
                  <span className="office-contact__body">
                    <small>General</small>
                    <strong>info@alfamarinesa.com</strong>
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:sales@alfamarinesa.com" className="office-contact">
                  <span className="office-contact__icon" aria-hidden="true">
                    <Building2 size={18} />
                  </span>
                  <span className="office-contact__body">
                    <small>Commercial</small>
                    <strong>sales@alfamarinesa.com</strong>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={MAP_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="office-contact"
                >
                  <span className="office-contact__icon" aria-hidden="true">
                    <MapPin size={18} />
                  </span>
                  <span className="office-contact__body">
                    <small>Address</small>
                    <strong>Prince Muhammad Ibn Saud District, Dammam</strong>
                  </span>
                </a>
              </li>
            </ul>

            <p className="privacy-helper">
              Please avoid submitting unnecessary personal data, financial
              details, or sensitive information. Read the{" "}
              <Link to="/privacy-policy">Privacy Policy</Link>.
            </p>
          </aside>

          <article className="map-card reveal-up" aria-labelledby="contact-map-title">
            <div className="map-card__header">
              <div>
                <p className="eyebrow">Office Location</p>
                <h2 id="contact-map-title">Visit Our Dammam Office</h2>
                <p>
                  Embedded map provided by Google Maps and may set third-party
                  cookies.
                </p>
              </div>
              <a
                className="btn btn-secondary map-card__open"
                href={MAP_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Maps
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
            <div className="map-card__frame">
              <iframe
                title="ALFA Marine & Industrial Services — Dammam office map"
                src={MAP_URL}
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </article>
        </div>

        <div className="contact-page__right reveal-up">
          <section className="consent-panel modern-form contact-form-card" aria-labelledby="contact-form-title">
            <header className="modern-form__header">
              <p className="eyebrow">Inquiry Form</p>
              <h2 id="contact-form-title">Send a message to ALFA</h2>
              <p>
                Share what your project or inquiry is about. ALFA reviews
                messages during Saudi business hours and responds via the
                contact details you provide.
              </p>
            </header>

            <form
              className="modern-form__grid"
              onSubmit={handleSubmit}
              aria-busy={status === "loading"}
            >
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="contact-company">Company name</label>
                  <input
                    id="contact-company"
                    name="companyName"
                    type="text"
                    autoComplete="organization"
                    value={values.companyName}
                    onChange={updateField("companyName")}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-job-title">Job title</label>
                  <input
                    id="contact-job-title"
                    name="jobTitle"
                    type="text"
                    autoComplete="organization-title"
                    value={values.jobTitle}
                    onChange={updateField("jobTitle")}
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="contact-first-name">First name</label>
                  <input
                    id="contact-first-name"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    value={values.firstName}
                    onChange={updateField("firstName")}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-last-name">Last name</label>
                  <input
                    id="contact-last-name"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    value={values.lastName}
                    onChange={updateField("lastName")}
                    required
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={updateField("email")}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-mobile">Mobile</label>
                  <input
                    id="contact-mobile"
                    name="mobile"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    value={values.mobile}
                    onChange={updateField("mobile")}
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="contact-inquiry-type">Inquiry type</label>
                <select
                  id="contact-inquiry-type"
                  name="inquiryType"
                  value={values.inquiryType}
                  onChange={updateField("inquiryType")}
                  required
                >
                  <option value="" disabled>
                    Select an inquiry type
                  </option>
                  {INQUIRY_TYPES.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="contact-message">Message / description</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  value={values.message}
                  onChange={updateField("message")}
                  required
                />
                <small>
                  Please avoid submitting unnecessary personal data, financial
                  details, or sensitive information.
                </small>
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
                  I agree to the{" "}
                  <Link to="/privacy-policy">Privacy Policy</Link> and consent
                  to the processing of my personal data for responding to my
                  inquiry.
                </span>
              </label>

              {status === "success" ? (
                <div className="form-status form-status--success" role="status">
                  <strong>Thank you.</strong>
                  <span>
                    Your message has been sent. ALFA will respond via the email
                    or phone you provided.
                  </span>
                </div>
              ) : null}

              {status === "error" && errorMessage ? (
                <div className="form-status form-status--error" role="alert">
                  <strong>Submission failed.</strong>
                  <span>{errorMessage}</span>
                </div>
              ) : null}

              <button
                type="submit"
                className="form-submit form-submit--primary"
                disabled={submitDisabled}
                aria-disabled={submitDisabled}
              >
                {status === "loading" ? "Sending…" : "Send Inquiry"}
              </button>
            </form>
          </section>
        </div>
      </section>

      <section className="section-shell response-strip">
        <div className="company-overview__section-header company-overview__section-header--center">
          <p className="eyebrow">What ALFA Handles</p>
          <h2>Where your message gets routed.</h2>
        </div>
        <div className="response-grid">
          {RESPONSE_EXPECTATIONS.map(({ icon: Icon, title, body }) => (
            <article key={title} className="response-card">
              <span className="response-card__icon" aria-hidden="true">
                <Icon size={20} strokeWidth={1.6} />
              </span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
