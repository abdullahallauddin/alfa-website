import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../Assets/Icons/white-logo.svg";

const footerGroups = [
  {
    title: "Company",
    links: [
      { label: "Home", path: "/" },
      { label: "Group Overview", path: "/group-overview" },
      { label: "Our Facilities", path: "/our-facilities" },
      { label: "Downloads", path: "/download-center" },
    ],
  },
  {
    title: "Divisions",
    links: [
      { label: "Marine & Offshore", path: "/marine-and-offshore-division" },
      { label: "Construction", path: "/construction-division" },
      { label: "Fabrication & Machining", path: "/fabrication-and-machining-division" },
      { label: "ICT", path: "/ict-division" },
      { label: "Facility Management", path: "/facility-management-division" },
    ],
  },
  {
    title: "Governance",
    links: [
      { label: "HSE Policy", path: "/health-safety-and-environmental-policy" },
      { label: "Quality Assurance Policy", path: "/quality-assurance-policy" },
      { label: "Ethics & Compliance", path: "/ethics-and-compliance" },
      { label: "Privacy Policy", path: "/privacy-policy" },
      { label: "Cookie Policy", path: "/cookies-policy" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Commercial Inquiries", path: "/commercial-inquiries" },
      { label: "Contact Us", path: "/contact" },
      { label: "Careers", path: "/careers" },
      { label: "Become a Supplier", path: "/become-a-supplier" },
      { label: "Whistleblowing", path: "/whistle-blowing" },
    ],
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/afla-marine/", icon: <FaLinkedinIn aria-hidden="true" /> },
  { label: "Instagram", href: "https://www.instagram.com/alfa_marine_sa/", icon: <FaInstagram aria-hidden="true" /> },
  { label: "X", href: "https://x.com/alfamarinesa", icon: <FaXTwitter aria-hidden="true" /> },
];

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="section-shell site-footer__inner">
        <div className="site-footer__lead">
          <Link to="/" aria-label="ALFA home">
            <img src={Logo} alt="ALFA Marine & Industrial Services" />
          </Link>
          <p>
            Premium marine, offshore, industrial, construction, fabrication,
            ICT, facility management, trading, and joinery services from Dammam,
            Kingdom of Saudi Arabia.
          </p>
          <address>
            Prince Muhammad Ibn Saud District, Dammam, Kingdom of Saudi Arabia
          </address>
          <div className="site-footer__contact">
            <a href="tel:+966138052528">+966 13 805 2528</a>
            <a href="mailto:info@alfamarinesa.com">info@alfamarinesa.com</a>
          </div>
          <div className="site-footer__social" aria-label="Social links">
            {socialLinks.map(({ label, href, icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`ALFA on ${label}`}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="site-footer__links">
          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={`${group.title} footer links`}>
              <h2>{group.title}</h2>
              {group.links.map((link) => (
                <Link key={link.path} to={link.path}>
                  {link.label}
                </Link>
              ))}
            </nav>
          ))}
        </div>

        <div className="site-footer__bottom">
          <p>Copyright © {new Date().getFullYear()} ALFA Marine & Industrial Services. All rights reserved.</p>
          <div>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/cookies-policy">Cookie Policy</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
