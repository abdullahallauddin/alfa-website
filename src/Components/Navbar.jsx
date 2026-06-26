import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../Assets/Icons/white-logo.svg";
import ColorLogo from "../Assets/Icons/alfa-color-logo.svg";
import {
  FaSearch,
  FaChevronDown,
  FaLinkedinIn,
  FaInstagram,
  FaUser,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import menuBg from "../Assets/Images/main-background.jpg";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [overlayMenu, setOverlayMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => {
    setIsOpen(false);
    setOverlayMenu(null);
  };

  // Logo → always return to the home #banner, from any page
  const goHome = (e) => {
    e.preventDefault();
    closeMenu();
    const toBanner = () => {
      const el = document.getElementById("banner");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    };
    if (location.pathname !== "/") {
      navigate("/");
      // let the lazy-loaded home mount, then settle at the banner
      setTimeout(toBanner, 400);
    } else {
      toBanner();
    }
  };

  const links = [
    {
      name: "WHO WE ARE",
      path: "/who-we-are",
      submenu: [
        { name: "Group Overview", path: "/who-we-are#group-overview" },
        { name: "Mission, Vision & Goals", path: "/who-we-are#mission-vision-goals" },
        { name: "Core Values", path: "/who-we-are#core-values" },
        { name: "Our Strategy", path: "/who-we-are#our-strategy" },
        { name: "Our Culture", path: "/who-we-are#our-culture" },
        { name: "Our Facilities", path: "/who-we-are#our-facilities" },
        { name: "Our Capabilities", path: "/who-we-are#our-capabilities" },
        { name: "Accreditations", path: "/who-we-are#accreditations" },
      ],
    },
    {
      name: "WHAT WE DO",
      path: "/what-we-do",
      submenu: [
        {
          name: "Marine & Offshore Division",
          path: "/what-we-do#marine-offshore",
        },
        { name: "Construction Division", path: "/what-we-do#construction" },
        {
          name: "Fabrication & Machining Division",
          path: "/what-we-do#fabrication-machining",
        },
        { name: "Trading Division", path: "/what-we-do#trading" },
        { name: "ICT Division", path: "/what-we-do#ict" },
        {
          name: "Facility Management Division",
          path: "/what-we-do#facility-management",
        },
        { name: "Joinery Division", path: "/what-we-do#joinery" },
      ],
    },
    {
      name: "SUSTAINABILITY",
      path: "/sustainability",
      submenu: [
        {
          name: "Environmental Responsibility",
          path: "/sustainability#environmental-responsibility",
        },
        {
          name: "Health, Safety & Environmental Policy",
          path: "/sustainability#hse-policy",
        },
        { name: "Quality Assurance Policy", path: "/sustainability#quality-assurance" },
        { name: "Ethics and Compliance", path: "/sustainability#ethics-compliance" },
      ],
    },
    {
      name: "MEDIA CENTER",
      path: "/media-center",
      submenu: [
        { name: "News", path: "/media-center#news" },
        { name: "Download Center", path: "/media-center#downloads" },
      ],
    },
    {
      name: "GET IN TOUCH",
      path: "/get-in-touch",
      submenu: [
        { name: "Commercial Inquiries", path: "/get-in-touch#commercial-inquiries" },
        { name: "Contact us", path: "/get-in-touch#contact" },
        { name: "Careers", path: "/get-in-touch#careers" },
        { name: "Become a Supplier", path: "/get-in-touch#become-a-supplier" },
        { name: "Whistleblowing", path: "/get-in-touch#whistleblowing" },
      ],
    },
  ];

  const topTextColor = isSticky ? "text-[#11234B]" : "text-white";
  // line color for the hamburger / X icon
  const lineColor = isOpen
    ? "bg-white"
    : isSticky
    ? "bg-[#11234B]"
    : "bg-white";
  const iconColor = isOpen ? "text-white" : topTextColor;

  return (
    <>
      {/* ===== Persistent Top Bar (stays mounted so the icon can morph) ===== */}
      <header
        className={`fixed top-0 left-0 w-full z-[1001] transition-colors duration-300 ${
          isOpen
            ? "bg-transparent"
            : isSticky
            ? "bg-white shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] px-5 md:px-9 h-[76px]">
          {/* Left: logo (colored at home-page size when overlay is open) */}
          <div className="flex items-center justify-self-start">
            <Link
              to="/"
              onClick={goHome}
              className="flex items-center shrink-0"
            >
              <img
                src={isOpen || isSticky ? ColorLogo : logo}
                alt="Alfa Group"
                className="h-auto w-32 md:w-36 transition-transform duration-300 ease-in-out hover:scale-95"
              />
            </Link>
          </div>

          {/* Center: inline menu (hidden while overlay is open) */}
          {!isOpen && (
            <ul className="hidden lg:flex items-center justify-center gap-9 font-roboto font-normal text-[15px] tracking-[0.3px] p-0 m-0 justify-self-center">
              {links.map((menu, idx) => (
                <li
                  key={idx}
                  className="relative flex items-center h-[76px]"
                  onMouseEnter={() => setOpenMenu(menu.name)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link
                    to={menu.path || "#"}
                    onClick={closeMenu}
                    className={`flex items-center gap-1 cursor-pointer capitalize whitespace-nowrap transition-colors duration-200 ${topTextColor} hover:text-[#2C95D2] ${
                      openMenu === menu.name ? "text-[#2C95D2]" : ""
                    }`}
                  >
                    {menu.name.toLowerCase()}
                  </Link>

                  <ul
                    className={`absolute left-1/2 -translate-x-1/2 top-full min-w-[230px] bg-[#11234B]/70 backdrop-blur-xl ring-1 ring-white/10 text-white font-light shadow-2xl origin-top transition-all duration-200 ${
                      openMenu === menu.name
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-1"
                    }`}
                  >
                    {menu.submenu.map((sub, subIdx) => (
                      <li key={subIdx}>
                        <Link
                          to={sub.path || "#"}
                          onClick={closeMenu}
                          className="block whitespace-nowrap px-5 py-3 text-[14px] hover:bg-[#2C95D2] transition-colors duration-150"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
          {isOpen && <span className="justify-self-center" />}

          {/* Right: socials + login + search + morphing hamburger/close */}
          <div className="flex items-center gap-4 justify-self-end">
            {!isOpen && (
              <div className="hidden md:flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/afla-marine/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn
                    className={`text-[15px] transition-colors duration-200 ${topTextColor} hover:text-[#2C95D2]`}
                  />
                </a>
                <a
                  href="https://www.instagram.com/alfa_marine_sa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram
                    className={`text-[15px] transition-colors duration-200 ${topTextColor} hover:text-[#2C95D2]`}
                  />
                </a>
                <a
                  href="https://x.com/alfamarinesa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                >
                  <FaXTwitter
                    className={`text-[15px] transition-colors duration-200 ${topTextColor} hover:text-[#2C95D2]`}
                  />
                </a>
                <span
                  className={`w-px h-5 ${
                    isSticky ? "bg-[#11234B]/40" : "bg-white/40"
                  }`}
                />
                <a
                  href="https://outlook.com/alfamarinesa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Login"
                >
                  <FaUser
                    className={`text-[15px] transition-colors duration-200 ${topTextColor} hover:text-[#2C95D2]`}
                  />
                </a>
              </div>
            )}
            <FaSearch
              className={`text-[16px] cursor-pointer transition-colors duration-200 ${iconColor} hover:text-[#2C95D2]`}
            />
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="group relative w-7 h-[18px] cursor-pointer"
            >
              <span
                className={`absolute left-0 h-[2px] w-7 rounded-full transition-all duration-300 ease-in-out group-hover:bg-[#2C95D2] ${lineColor} ${
                  isOpen
                    ? "top-1/2 -translate-y-1/2 rotate-45"
                    : "top-0 rotate-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-7 rounded-full transition-all duration-200 ease-in-out group-hover:bg-[#2C95D2] ${lineColor} ${
                  isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                }`}
              />
              <span
                className={`absolute left-0 h-[2px] w-7 rounded-full transition-all duration-300 ease-in-out group-hover:bg-[#2C95D2] ${lineColor} ${
                  isOpen
                    ? "top-1/2 -translate-y-1/2 -rotate-45"
                    : "bottom-0 rotate-0"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* ===== Full-screen Overlay Menu ===== */}
      {isOpen && (
        <div className="fixed inset-0 z-[999] bg-black animate-fadeScaleIn overflow-y-auto">
          {/* Background image */}
          <div
            className="fixed inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${menuBg})` }}
          />
          {/* Gradient on top of the image for readability */}
          <div className="fixed inset-0 bg-gradient-to-br from-[#0a1428]/95 via-[#11234B]/80 to-black/90" />

          {/* Menu: accordion on mobile, grid + hover on desktop */}
          <div className="relative min-h-screen flex items-start lg:items-center px-6 md:px-10 lg:px-16 pt-24 lg:pt-32 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-10 lg:gap-y-28 w-full max-w-6xl mx-auto">
              {links.map((menu, idx) => {
                const active = overlayMenu === menu.name;
                const anyActive = overlayMenu !== null;
                return (
                  <div
                    key={idx}
                    className="relative border-b border-white/10 lg:border-0"
                    onMouseEnter={() => setOverlayMenu(menu.name)}
                    onMouseLeave={() => setOverlayMenu(null)}
                  >
                    {/* Top-level option */}
                    <button
                      type="button"
                      onClick={() => setOverlayMenu(active ? null : menu.name)}
                      className="w-full flex items-center justify-between gap-3 py-4 text-left lg:w-auto lg:py-0 lg:cursor-default"
                    >
                      <h3
                        className={`font-roboto capitalize whitespace-nowrap text-2xl lg:text-[38px] leading-tight transition-all duration-300 text-white ${
                          active
                            ? "text-[#2C95D2] lg:text-white lg:font-normal"
                            : anyActive
                            ? "lg:text-white/10 lg:blur-[3px] font-light"
                            : "lg:text-white/60 font-light"
                        }`}
                      >
                        {menu.name.toLowerCase()}
                      </h3>
                      <FaChevronDown
                        className={`lg:hidden shrink-0 text-base transition-all duration-300 ${
                          active
                            ? "rotate-180 text-[#2C95D2]"
                            : "text-white/50"
                        }`}
                      />
                    </button>

                    {/* Underline (desktop, on hover) */}
                    <div
                      className={`hidden lg:block mt-3 w-44 transition-opacity duration-300 ${
                        active ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <span className="block h-[1px] w-full bg-white/50" />
                    </div>

                    {/* Submenu: accordion on mobile, absolute reveal on desktop */}
                    <ul
                      className={`overflow-hidden pl-1 space-y-3 transition-all duration-300 ease-in-out lg:pl-0 lg:overflow-visible lg:absolute lg:left-0 lg:top-full lg:mt-2 lg:w-72 ${
                        active
                          ? "max-h-[600px] opacity-100 pb-5"
                          : "max-h-0 opacity-0"
                      } lg:max-h-none lg:pb-0 ${
                        active
                          ? "lg:opacity-100 lg:visible lg:translate-y-0"
                          : "lg:opacity-0 lg:invisible lg:-translate-y-2"
                      }`}
                    >
                      {menu.submenu.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <Link
                            to={sub.path || "#"}
                            onClick={closeMenu}
                            className="block font-roboto font-light text-[15px] text-white/75 hover:text-[#2C95D2] transition-colors duration-200"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
