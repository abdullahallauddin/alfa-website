import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import WhiteLogo from "../Assets/Icons/white-logo.svg";
import ColorLogo from "../Assets/Icons/alfa-color-logo.svg";

const navGroups = [
  {
    label: "About",
    columns: [
      {
        title: "Company",
        items: [
          { label: "Group Overview", path: "/group-overview", description: "Group profile, divisions, mission, values, and strategy." },
          { label: "Our Facilities", path: "/our-facilities", description: "Operating facilities and infrastructure." },
          { label: "Downloads", path: "/download-center", description: "Company profile and brand downloads." },
        ],
      },
    ],
  },
  {
    label: "Services",
    columns: [
      {
        title: "Divisions",
        items: [
          { label: "Marine & Offshore", path: "/marine-and-offshore-division", description: "Marine, offshore, modular and vessel support." },
          { label: "Industrial Services", path: "/facility-management-division", description: "Operations, maintenance and site support." },
          { label: "Fabrication / Construction", path: "/fabrication-and-machining-division", description: "Fabrication, machining and construction delivery." },
          { label: "Construction Division", path: "/construction-division", description: "Civil, structural and MEP contracting." },
        ],
      },
      {
        title: "Capabilities",
        items: [
          { label: "EPFC Capabilities", path: "/our-capabilities", description: "Engineering, procurement, fabrication and construction." },
          { label: "Technical Support", path: "/ict-division", description: "ICT, ELV, low-current and smart systems." },
          { label: "Trading & Industrial Supplies", path: "/trading-division", description: "Procurement and technical material supply." },
          { label: "Joinery & Fit-Out", path: "/joinery-division", description: "Custom joinery and interior fit-out works." },
        ],
      },
    ],
  },
  {
    label: "Sectors",
    columns: [
      {
        title: "Markets Served",
        items: [
          { label: "Oil & Gas", sectionId: "sectors", description: "Industrial energy environments." },
          { label: "Marine", sectionId: "sectors", description: "Marine and offshore operations." },
          { label: "Defense", sectionId: "sectors", description: "Critical-sector support scopes." },
        ],
      },
      {
        title: "Industrial Focus",
        items: [
          { label: "Renewable Energy", sectionId: "sectors", description: "Energy transition and utility projects." },
          { label: "Construction", sectionId: "sectors", description: "Infrastructure, civil and MEP projects." },
          { label: "Petrochemical", sectionId: "sectors", description: "Plant and industrial support services." },
        ],
      },
    ],
  },
  {
    label: "HSE & Quality",
    columns: [
      {
        title: "Policies",
        items: [
          { label: "HSE Policy", path: "/health-safety-and-environmental-policy", description: "Health, safety and environmental commitments." },
          { label: "Quality Policy", path: "/quality-assurance-policy", description: "Quality assurance and continuous improvement." },
          { label: "Environmental Responsibility", path: "/environmental-responsibility", description: "Environmental stewardship and operating responsibility." },
        ],
      },
      {
        title: "Compliance",
        items: [
          { label: "Certifications / Compliance", path: "/accreditations", description: "Compliance and accreditation route." },
          { label: "Ethics & Compliance", path: "/ethics-and-compliance", description: "Ethical conduct and governance route." },
          { label: "Whistleblowing", path: "/whistle-blowing", description: "Confidential ethics reporting route." },
        ],
      },
    ],
  },
];

const contactGroup = {
  label: "Get in Touch",
  columns: [
    {
      title: "Start Here",
      items: [
        { label: "Get in Touch", path: "/contact", description: "General inquiry and office contact route." },
        { label: "Request a Quote", path: "/commercial-inquiries", description: "Commercial inquiry route." },
        { label: "Location", path: "/contact", description: "Dammam office address and map route." },
      ],
    },
    {
      title: "Partner With ALFA",
      items: [
        { label: "Careers", path: "/careers", description: "Career inquiry route." },
        { label: "Become a Supplier", path: "/become-a-supplier", description: "Supplier registration route." },
      ],
    },
  ],
};

const allGroups = [...navGroups, contactGroup];

const socialLinks = [
  { label: "ALFA on LinkedIn", href: "https://www.linkedin.com/company/afla-marine/", icon: <FaLinkedinIn aria-hidden="true" /> },
  { label: "ALFA on Instagram", href: "https://www.instagram.com/alfa_marine_sa/", icon: <FaInstagram aria-hidden="true" /> },
  { label: "ALFA on X", href: "https://x.com/alfamarinesa", icon: <FaXTwitter aria-hidden="true" /> },
];

const getGroupItems = (group) => group.columns.flatMap((column) => column.items);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeGroup, setActiveGroup] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState("About");
  const closeTimerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const isTransparent = isHome && !isScrolled && !isOpen;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveGroup(null);
  }, [location.pathname]);

  useEffect(() => {
    return () => window.clearTimeout(closeTimerRef.current);
  }, []);

  const openGroup = (label) => {
    window.clearTimeout(closeTimerRef.current);
    setActiveGroup(label);
  };

  const scheduleCloseGroup = () => {
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => setActiveGroup(null), 220);
  };

  const isGroupActive = (group) =>
    getGroupItems(group).some((item) => item.path && item.path === location.pathname);

  const scrollToSection = (id) => {
    const doScroll = () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
    setActiveGroup(null);

    if (!isHome) {
      navigate("/");
      window.setTimeout(doScroll, 120);
      return;
    }

    doScroll();
  };

  const renderMenuItem = (item) => {
    const isActive = item.path === location.pathname;

    if (item.sectionId) {
      return (
        <button
          type="button"
          key={item.label}
          className="mega-menu__item"
          onClick={() => scrollToSection(item.sectionId)}
        >
          <span>{item.label}</span>
          <small>{item.description}</small>
        </button>
      );
    }

    return (
      <Link
        key={`${item.path}-${item.label}`}
        to={item.path}
        className={`mega-menu__item ${isActive ? "mega-menu__item--active" : ""}`}
      >
        <span>{item.label}</span>
        <small>{item.description}</small>
      </Link>
    );
  };

  const renderDropdown = (group, variant = "default") => {
    const groupIsActive = isGroupActive(group);

    return (
      <div
        className={`nav-dropdown ${variant === "contact" ? "nav-dropdown--contact" : ""}`}
        key={group.label}
        onMouseEnter={() => openGroup(group.label)}
        onMouseLeave={scheduleCloseGroup}
        onFocus={() => openGroup(group.label)}
        onBlur={scheduleCloseGroup}
      >
        <button
          type="button"
          className={`nav-dropdown__trigger ${groupIsActive ? "nav-dropdown__trigger--active" : ""} ${variant === "contact" ? "site-header__cta" : ""}`}
          aria-expanded={activeGroup === group.label}
          onClick={() => setActiveGroup(activeGroup === group.label ? null : group.label)}
        >
          {group.label}
          <FiChevronDown aria-hidden="true" />
        </button>
        {activeGroup === group.label ? (
          <div className="nav-dropdown__menu mega-menu">
            <div className="mega-menu__grid">
              {group.columns.map((column) => (
                <div className="mega-menu__column" key={column.title}>
                  <p>{column.title}</p>
                  {column.items.map(renderMenuItem)}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <header className={`site-header ${isTransparent ? "site-header--transparent" : "site-header--solid"}`}>
      <div className="site-header__inner">
        <Link className="site-header__brand" to="/" aria-label="ALFA home">
          <img src={isTransparent ? WhiteLogo : ColorLogo} alt="ALFA Marine & Industrial Services" />
        </Link>

        <nav className="site-header__nav" aria-label="Primary navigation">
          {navGroups.map((group) => renderDropdown(group))}
        </nav>

        <div className="site-header__actions">
          <div className="site-header__social" aria-label="Social links">
            {socialLinks.map(({ label, href, icon }) => (
              <a href={href} key={label} aria-label={label} target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
            ))}
          </div>
          {renderDropdown(contactGroup, "contact")}
          <button
            type="button"
            className="site-header__menu"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="mobile-nav" id="mobile-navigation">
          <div className="mobile-nav__panel">
            <div className="mobile-nav__header">
              <p>Navigation</p>
              <button type="button" onClick={() => setIsOpen(false)} aria-label="Close navigation menu">
                <FiX aria-hidden="true" />
              </button>
            </div>
            <div className="mobile-nav__groups">
              {allGroups.map((group) => {
                const expanded = openMobileGroup === group.label;
                return (
                  <section className="mobile-nav__group" key={group.label}>
                    <button
                      type="button"
                      className={isGroupActive(group) ? "mobile-nav__group-trigger mobile-nav__group-trigger--active" : "mobile-nav__group-trigger"}
                      onClick={() => setOpenMobileGroup(expanded ? null : group.label)}
                      aria-expanded={expanded}
                    >
                      {group.label}
                      <FiChevronDown aria-hidden="true" />
                    </button>
                    {expanded ? (
                      <div className="mobile-nav__links">
                        {group.columns.map((column) => (
                          <div key={column.title}>
                            <p>{column.title}</p>
                            {column.items.map((item) =>
                              item.sectionId ? (
                                <button type="button" key={item.label} onClick={() => scrollToSection(item.sectionId)}>
                                  {item.label}
                                </button>
                              ) : (
                                <Link key={`${item.path}-${item.label}`} to={item.path}>
                                  {item.label}
                                </Link>
                              )
                            )}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
