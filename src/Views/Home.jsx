import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSection from "../Components/HeroSection";
import Seo from "../Components/Seo";
import DivisionsCarousel from "../Components/DivisionsCarousel";
import ClientsSlider from "../Components/ClientsSlider";
import {
  capabilities,
  homepageDivisions,
  sectors,
  showcaseItems,
  whyChooseAlfa,
} from "../data/alfaContent";

const SectionHeading = ({ eyebrow, title, body, align = "left" }) => (
  <div className={`section-heading section-heading--${align}`}>
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {body ? <p>{body}</p> : null}
  </div>
);

const motionEase = [0.22, 1, 0.36, 1];
const revealViewport = { once: true, amount: 0.18, margin: "0px 0px -12% 0px" };

const getRevealState = (variant = "up") => {
  const states = {
    up: { opacity: 0, x: 0, y: 34, scale: 1 },
    left: { opacity: 0, x: -34, y: 24, scale: 1 },
    right: { opacity: 0, x: 34, y: 24, scale: 1 },
    scale: { opacity: 0, x: 0, y: 28, scale: 0.985 },
  };

  return states[variant] ?? states.up;
};

const revealVariants = {
  hidden: (variant) => getRevealState(variant),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.76, ease: motionEase },
  },
};

const staggerContainerVariants = {
  hidden: (variant) => getRevealState(variant),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.72,
      ease: motionEase,
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
};

const staggerItemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: motionEase },
  },
};

const Reveal = ({ children, className = "", variant = "up", ...props }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={revealVariants}
      custom={variant}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={revealViewport}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const StaggerGroup = ({ children, className = "", variant = "up", ...props }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={staggerContainerVariants}
      custom={variant}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={revealViewport}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const StaggerItem = ({ children, className = "" }) => (
  <motion.div className={`stagger-item ${className}`.trim()} variants={staggerItemVariants}>
    {children}
  </motion.div>
);

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    html.classList.add("home-snap");
    body.classList.add("home-snap");
    return () => {
      html.classList.remove("home-snap");
      body.classList.remove("home-snap");
    };
  }, []);

  return (
    <main className="alfa-home">
      <Seo
        title="ALFA Marine & Industrial Services | Saudi Engineering Solutions"
        description="ALFA delivers integrated marine, offshore, industrial, construction, fabrication, trading, ICT, facility management, and joinery solutions from Dammam, Saudi Arabia."
        path="/"
      />
      <HeroSection />

      <section id="about" className="section-shell alfa-about section-pad scroll-section">
        <Reveal className="alfa-about__copy" variant="left">
          <SectionHeading
            eyebrow="About ALFA"
            title="A Saudi multi-division industrial partner built for demanding sectors."
            body="Headquartered in Dammam, ALFA Group brings together specialist divisions that support marine, offshore, oil & gas, power, defense, construction, industrial, commercial, and infrastructure environments."
          />
          <p>
            The company focuses on integrated services rather than isolated
            scopes: engineering support, procurement assistance, fabrication,
            construction, maintenance, technology, and operational services can
            be aligned under one delivery framework.
          </p>
        </Reveal>
        <StaggerGroup className="alfa-about__matrix" variant="scale" aria-label="ALFA operating approach">
          {[
            ["01", "Plan", "Define project scope, site needs, safety requirements, timelines, and delivery priorities."],
            ["02", "Engineer", "Convert requirements into practical technical plans, procurement paths, and execution methods."],
            ["03", "Build", "Deliver fabrication, construction, installation, and field services through specialist teams."],
            ["04", "Support", "Maintain continuity through technical support, facility services, maintenance, and operations."],
          ].map(([number, title, body]) => (
            <StaggerItem key={title}>
              <article className="process-card">
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section id="sectors" className="alfa-sectors section-pad scroll-section">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Sectors Served"
              title="Industrial confidence for critical Saudi and regional markets."
              body="ALFA's existing service portfolio is shaped around high-accountability sectors where safety, reliability, procurement discipline, and technical coordination matter."
              align="center"
            />
          </Reveal>
          <StaggerGroup className="sector-grid" variant="scale">
            {sectors.map((sector) => (
              <StaggerItem key={sector}>
                <span>{sector}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section id="divisions" className="alfa-divisions section-pad scroll-section">
        <div className="section-shell alfa-divisions__header">
          <Reveal className="alfa-divisions__heading">
            <p className="eyebrow">Operating Divisions</p>
            <h2>Our Divisions</h2>
          </Reveal>
          <Reveal className="alfa-divisions__intro" variant="right">
            <p>
              Integrated marine, industrial, offshore, and engineering
              divisions serving critical sectors.
            </p>
          </Reveal>
        </div>

        <Reveal className="alfa-divisions__carousel-wrap" variant="up">
          <DivisionsCarousel divisions={homepageDivisions} />
        </Reveal>
      </section>

      <section id="capabilities" className="alfa-capabilities section-pad scroll-section">
        <div className="section-shell alfa-capabilities__layout">
          <Reveal className="alfa-capabilities__sticky" variant="left">
            <SectionHeading
              eyebrow="Capabilities"
              title="From concept support to site-ready execution."
              body="The capability set is grounded in ALFA's existing division pages and service descriptions, avoiding unsupported client, award, certification, or project-name claims."
            />
            <Link className="btn btn-primary" to="/our-capabilities">
              View All Capabilities
            </Link>
          </Reveal>
          <StaggerGroup className="capability-list" variant="right">
            {capabilities.map((capability, index) => (
              <StaggerItem key={capability}>
                <article className="capability-row">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{capability}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section id="clients" className="alfa-clients trust-strip" aria-label="Clients and partners">
        <Reveal className="section-shell" variant="up">
          <ClientsSlider />
        </Reveal>
      </section>

      <section id="why" className="section-shell section-pad alfa-why scroll-section">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose ALFA"
            title="A serious partner for complex, multi-disciplinary industrial scopes."
            body="The new structure emphasizes what matters to EPC, offshore, defense, construction, and industrial buyers: integration, safety, quality, and reliable execution."
            align="center"
          />
        </Reveal>
        <StaggerGroup className="why-grid" variant="scale">
          {whyChooseAlfa.map((item) => (
            <StaggerItem key={item.title}>
              <article className="why-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section id="hse-quality" className="alfa-hse section-pad scroll-section">
        <div className="section-shell alfa-hse__layout">
          <Reveal className="alfa-hse__panel" variant="left">
            <p className="eyebrow">HSE & Quality</p>
            <h2>Safety, environmental care and quality are treated as operating responsibilities.</h2>
            <p>
              ALFA's existing HSE and quality policy content emphasizes risk
              management, awareness, communication, training, emergency
              readiness, incident learning, customer focus, and continuous
              improvement.
            </p>
            <div className="alfa-hse__actions">
              <Link to="/health-safety-and-environmental-policy">HSE Policy</Link>
              <Link to="/quality-assurance-policy">Quality Policy</Link>
            </div>
          </Reveal>
          <StaggerGroup className="hse-points" variant="right">
            {[
              "Risk identification and mitigation before work starts",
              "Clear HSE communication for employees and stakeholders",
              "Training, resources and accountability across teams",
              "Quality culture supported by monitoring and improvement",
            ].map((point) => (
              <StaggerItem key={point}>
                <div>
                  <span aria-hidden="true" />
                  <p>{point}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section id="showcase" className="section-shell section-pad alfa-showcase scroll-section">
        <Reveal>
          <SectionHeading
            eyebrow="Project & Capability Showcase"
            title="Representative workstreams without unsupported project claims."
            body="Rather than inventing project names or client logos, the showcase presents real capability categories from the current ALFA content."
          />
        </Reveal>
        <StaggerGroup className="showcase-grid" variant="scale">
          {showcaseItems.map((item) => (
            <StaggerItem key={item.title}>
              <article className="showcase-card">
                <p>{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <span />
                <p>{item.body}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section id="contact-cta" className="section-shell alfa-contact-cta section-pad scroll-section">
        <Reveal className="alfa-contact-cta__inner" variant="scale">
          <div>
            <p className="eyebrow">Start a Conversation</p>
            <h2>Bring ALFA into your next marine, industrial or infrastructure scope.</h2>
            <p>
              Share the sector, site context, and service requirement. The
              contact page includes a privacy notice and consent flow before any
              inquiry data is processed through the embedded form provider.
            </p>
          </div>
          <div className="alfa-contact-cta__actions">
            <Link className="btn btn-primary" to="/contact">
              Contact Us
            </Link>
            <a className="btn btn-secondary btn-secondary--dark" href="mailto:info@alfamarinesa.com">
              Email ALFA
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default Home;
