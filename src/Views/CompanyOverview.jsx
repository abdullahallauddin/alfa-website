import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  Anchor,
  Building2,
  Compass,
  Cpu,
  Hammer,
  HardHat,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";
import Seo from "../Components/Seo";
import HeroImage from "../Assets/Images/facility/group-overview-hero.webp";
import { divisions, sectors } from "../data/alfaContent";

const STATEMENT_CARDS = [
  {
    key: "mission",
    eyebrow: "Mission",
    icon: Target,
    title: "Deliver integrated solutions that meet client expectations.",
    body: "Provide innovative, high-quality, and sustainable services across multiple industries through specialized divisions, with operational excellence, safety, integrity, and continuous improvement at the core.",
  },
  {
    key: "vision",
    eyebrow: "Vision",
    icon: Compass,
    title: "A reliable multi-division partner across critical sectors.",
    body: "To be recognized as a preferred one-stop solution provider across Oil & Gas, Renewable Energy, Power & Utilities, Marine & Offshore, Defense, Petrochemical, Construction, Industrial, Commercial, and Entertainment sectors.",
  },
  {
    key: "goals",
    eyebrow: "Goals",
    icon: Trophy,
    title: "Quality solutions, lasting relationships, sustainable growth.",
    body: "Deliver to global standards, build long-term client relationships through tailored services, promote sustainable practices, advance through technology and expertise, and expand into new sectors and regions.",
  },
];

const CORE_VALUES = [
  { icon: Users, title: "People", body: "We take the safety, well-being, and growth of our people seriously and partner with them to unleash collective potential." },
  { icon: ShieldCheck, title: "Accountability", body: "We take full responsibility for our actions, set clear targets, empower our teams, and hold ourselves to those targets." },
  { icon: Sparkles, title: "Collaboration", body: "We work as one — across divisions, disciplines, and project sites — to remove handoff friction and create synergy." },
  { icon: Anchor, title: "Trust", body: "Trust is the foundation of every relationship — clients, partners, employees, and communities. We never compromise on principles." },
  { icon: Trophy, title: "Excellence", body: "We deliver value through rigorous planning, disciplined execution, and critical reflection on our own practices." },
  { icon: Building2, title: "Partnerships", body: "Long-term partnerships with colleagues, customers, and suppliers are central to how ALFA operates and grows." },
];

const STRATEGY_PILLARS = [
  { number: "01", title: "Digitization", body: "Leverage current technologies and disciplined workflows to set practical industry benchmarks." },
  { number: "02", title: "Client-Centric Approach", body: "Understand each client's scope and constraints to offer tailored, cost-effective solutions." },
  { number: "03", title: "Industry Standards", body: "Adherence to internationally recognized standards for quality, safety, and reliability." },
  { number: "04", title: "Talent & Technology", body: "Develop a skilled workforce and equip them with the right technology to deliver consistent results." },
  { number: "05", title: "End-to-End Solutions", body: "Provide integrated services so engineering, procurement, fabrication, and execution flow as one program." },
  { number: "06", title: "Sustainability Integration", body: "Embed sustainable practice into operations, from material selection to project execution." },
];

const DIVISION_ICON_MAP = {
  "Marine & Offshore": Anchor,
  "Construction": HardHat,
  "Fabrication & Machining": Wrench,
  "Trading": Building2,
  "ICT": Cpu,
  "Facility Management": ShieldCheck,
  "Joinery": Hammer,
};

const motionEase = [0.22, 1, 0.36, 1];
const revealViewport = { once: true, amount: 0.18 };
const revealVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: motionEase } },
};
const staggerContainer = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: motionEase, staggerChildren: 0.07, delayChildren: 0.04 },
  },
};
const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: motionEase } },
};

const Reveal = ({ children, className = "", as = "div", ...props }) => {
  const prefersReducedMotion = useReducedMotion();
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      className={className}
      variants={revealVariants}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={revealViewport}
      {...props}
    >
      {children}
    </Tag>
  );
};

const StaggerGroup = ({ children, className = "", as = "div", ...props }) => {
  const prefersReducedMotion = useReducedMotion();
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      className={className}
      variants={staggerContainer}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={revealViewport}
      {...props}
    >
      {children}
    </Tag>
  );
};

const StaggerItem = ({ children, className = "", as = "div", ...props }) => {
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag className={className} variants={staggerItem} {...props}>
      {children}
    </Tag>
  );
};

const useScrollToHash = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      window.requestAnimationFrame(() => target.scrollIntoView({ behavior: "smooth", block: "start" }));
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);
};

const CompanyOverview = () => {
  useScrollToHash();
  const [activeStatement, setActiveStatement] = useState("mission");
  const ActiveIcon = STATEMENT_CARDS.find((c) => c.key === activeStatement)?.icon ?? Target;

  return (
    <main className="company-overview company-overview--editorial">
      <Seo
        title="Group Overview | ALFA Marine & Industrial Services"
        description="ALFA Marine & Industrial Services group profile, divisions, mission, vision, values, and strategy. Headquartered in Dammam, Saudi Arabia."
        path="/group-overview"
      />

      <section
        className="inner-hero contact-hero co-hero"
        style={{ "--inner-hero-image": `url(${HeroImage})` }}
      >
        <div className="section-shell inner-hero__content co-hero__content">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Group Overview</span>
          </nav>
          <p className="eyebrow">About ALFA</p>
          <h1>A Saudi multi-division industrial partner.</h1>
          <p>
            Headquartered in Dammam, ALFA Group brings specialist divisions together
            to support marine, offshore, oil &amp; gas, power, defense, construction,
            industrial, commercial, and infrastructure scopes.
          </p>
          <ul className="contact-hero__chips co-hero__chips" aria-label="Group at a glance">
            <li><span><MapPin size={16} aria-hidden="true" /> Dammam, Saudi Arabia</span></li>
            <li><span><Building2 size={16} aria-hidden="true" /> Multi-division operator</span></li>
            <li><span><ShieldCheck size={16} aria-hidden="true" /> Quality &amp; HSE led</span></li>
          </ul>
        </div>
      </section>

      <section className="section-shell section-pad about-intro co-who-we-are">
        <Reveal className="about-intro__copy">
          <p className="eyebrow">Who We Are</p>
          <h2>One operator. Multiple specialist divisions.</h2>
          <p>
            ALFA's value comes from how its divisions connect: engineering support,
            procurement, fabrication, construction, ICT, and field services align
            under one delivery framework so clients work with a single partner
            instead of stitching together vendors.
          </p>
          <div className="about-intro__actions">
            <Link className="btn btn-primary" to="/contact">Talk to ALFA</Link>
            <Link className="btn btn-secondary" to="/our-capabilities">View Capabilities</Link>
          </div>
        </Reveal>
        <StaggerGroup className="co-profile-grid" as="ul" aria-label="ALFA at a glance">
          {[
            { icon: MapPin, label: "Headquarters", value: "Dammam, Saudi Arabia" },
            { icon: Building2, label: "Operating model", value: "Integrated multi-division services" },
            { icon: Compass, label: "Sectors served", value: "Energy, marine, defense, construction, industry" },
            { icon: Target, label: "Delivery focus", value: "Quality, safety, reliable execution" },
          ].map(({ icon: Icon, label, value }) => (
            <StaggerItem key={label} as="li" className="co-profile-card">
              <span className="co-profile-card__icon" aria-hidden="true"><Icon size={18} /></span>
              <span className="co-profile-card__label">{label}</span>
              <strong className="co-profile-card__value">{value}</strong>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section id="divisions" className="co-divisions section-pad">
        <div className="co-divisions__pattern" aria-hidden="true" />
        <div className="section-shell">
          <Reveal className="company-overview__section-header">
            <p className="eyebrow">Operating Divisions</p>
            <h2>Specialist divisions under one delivery umbrella.</h2>
          </Reveal>
          <StaggerGroup className="co-divisions__grid">
            {divisions.map((division) => {
              const Icon = DIVISION_ICON_MAP[division.title] ?? Anchor;
              return (
                <StaggerItem key={division.title}>
                  <Link to={division.path} className="co-division-card" aria-label={`Open ${division.title}`}>
                    <span className="co-division-card__icon" aria-hidden="true"><Icon size={22} strokeWidth={1.5} /></span>
                    <h3>{division.title}</h3>
                    <p>{division.summary}</p>
                    <ul className="co-division-card__tags">
                      {division.focus?.slice(0, 3).map((f) => <li key={f}>{f}</li>)}
                    </ul>
                    <span className="co-division-card__cta">Explore →</span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <section id="sectors" className="section-shell section-pad">
        <Reveal className="company-overview__section-header">
          <p className="eyebrow">Sectors Served</p>
          <h2>Critical sectors across Saudi Arabia and the wider region.</h2>
        </Reveal>
        <StaggerGroup className="overview-sectors" as="ul">
          {sectors.map((sector) => (
            <StaggerItem key={sector} as="li">{sector}</StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section id="mission" className="co-statement section-pad">
        <div className="section-shell">
          <Reveal className="company-overview__section-header company-overview__section-header--center">
            <p className="eyebrow">Mission, Vision &amp; Goals</p>
            <h2>What ALFA is built to do.</h2>
          </Reveal>
          <Reveal className="co-statement__layout">
            <div className="co-statement__tabs" role="tablist" aria-label="Mission, Vision and Goals">
              {STATEMENT_CARDS.map((card) => {
                const isActive = activeStatement === card.key;
                const Icon = card.icon;
                return (
                  <button
                    key={card.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`co-statement__tab${isActive ? " is-active" : ""}`}
                    onClick={() => setActiveStatement(card.key)}
                  >
                    <span className="co-statement__tab-icon" aria-hidden="true"><Icon size={18} /></span>
                    <span className="co-statement__tab-label">{card.eyebrow}</span>
                  </button>
                );
              })}
            </div>
            <div className="co-statement__panel" role="tabpanel">
              {STATEMENT_CARDS.map((card) => {
                if (card.key !== activeStatement) return null;
                return (
                  <motion.div
                    key={card.key}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: motionEase }}
                    className="co-statement__content"
                  >
                    <span className="co-statement__icon-large" aria-hidden="true"><ActiveIcon size={32} strokeWidth={1.4} /></span>
                    <p className="eyebrow">{card.eyebrow}</p>
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="values" className="co-values section-pad">
        <div className="section-shell">
          <Reveal className="company-overview__section-header company-overview__section-header--center">
            <p className="eyebrow">Core Values</p>
            <h2>How ALFA teams operate every day.</h2>
          </Reveal>
          <StaggerGroup className="co-values__grid">
            {CORE_VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title} className="co-value-card">
                  <span className="co-value-card__icon" aria-hidden="true"><Icon size={22} strokeWidth={1.5} /></span>
                  <h3>{value.title}</h3>
                  <p>{value.body}</p>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <section id="strategy" className="co-strategy section-pad">
        <div className="co-strategy__pattern" aria-hidden="true" />
        <div className="section-shell">
          <Reveal className="company-overview__section-header company-overview__section-header--center">
            <p className="eyebrow">Our Strategy</p>
            <h2>Six pillars guiding ALFA's growth.</h2>
            <p className="company-overview__lead">
              Differentiated solutions for the energy and industrial sectors,
              delivered with sustainable value across all aspects of operations.
            </p>
          </Reveal>
          <StaggerGroup className="co-strategy__grid">
            {STRATEGY_PILLARS.map((pillar) => (
              <StaggerItem key={pillar.title} className="co-strategy-card">
                <span className="co-strategy-card__number" aria-hidden="true">{pillar.number}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-shell section-pad">
        <Reveal className="co-cta">
          <div className="co-cta__pattern" aria-hidden="true" />
          <div className="co-cta__copy">
            <p className="eyebrow">Next Step</p>
            <h2>Bring ALFA into your next industrial scope.</h2>
            <p>Share the sector, site context, and service requirement. ALFA will respond through the contact details you provide.</p>
          </div>
          <div className="co-cta__actions">
            <Link className="btn btn-primary" to="/contact">Contact ALFA</Link>
            <Link className="btn btn-secondary btn-secondary--dark" to="/our-capabilities">See Capabilities</Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default CompanyOverview;
