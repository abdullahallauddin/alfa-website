import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  Anchor,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Compass,
  Cpu,
  Factory,
  Hammer,
  HardHat,
  Mail,
  Phone,
  Settings,
  Shield,
  ShieldCheck,
  Ship,
  Sparkles,
  Wrench,
} from "lucide-react";
import Seo from "./Seo";

const ICON_MAP = {
  Anchor,
  Building2,
  Compass,
  Cpu,
  Factory,
  Hammer,
  HardHat,
  Settings,
  Shield,
  ShieldCheck,
  Ship,
  Sparkles,
  Wrench,
};

const motionEase = [0.22, 1, 0.36, 1];
const revealViewport = { once: true, amount: 0.18 };
const revealVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: motionEase } },
};
const staggerContainer = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: motionEase, staggerChildren: 0.06, delayChildren: 0.04 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: motionEase } },
};

const Reveal = ({ children, className = "", as = "div", ...props }) => {
  const prm = useReducedMotion();
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag className={className} variants={revealVariants} initial={prm ? false : "hidden"} whileInView={prm ? undefined : "visible"} viewport={revealViewport} {...props}>
      {children}
    </Tag>
  );
};

const StaggerGroup = ({ children, className = "", as = "div", ...props }) => {
  const prm = useReducedMotion();
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag className={className} variants={staggerContainer} initial={prm ? false : "hidden"} whileInView={prm ? undefined : "visible"} viewport={revealViewport} {...props}>
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

const ServicePageTemplate = ({ slug, page }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!page) return null;

  return (
    <main className="service-page">
      <Seo
        title={`${page.title} | ALFA Marine & Industrial Services`}
        description={page.positioning}
        path={`/${slug}`}
      />

      <section
        className="inner-hero contact-hero co-hero service-hero"
        style={{ "--inner-hero-image": `url(${page.heroImage})` }}
        aria-label={`${page.title} hero`}
      >
        <div className="section-shell inner-hero__content co-hero__content">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/group-overview">About</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{page.title}</span>
          </nav>
          <p className="eyebrow">{page.eyebrow ?? "Service"}</p>
          <h1>{page.title}</h1>
          <p>{page.positioning}</p>
          <div className="service-hero__actions">
            <Link to="/contact" className="btn btn-primary">
              Discuss Requirement
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/our-capabilities" className="btn btn-secondary btn-secondary--ghost">
              View Capabilities
            </Link>
          </div>
        </div>
      </section>

      {page.quickFacts?.length ? (
        <section className="service-facts" aria-label="Quick facts">
          <div className="section-shell">
            <StaggerGroup className="service-facts__grid" as="ul">
              {page.quickFacts.map((fact) => (
                <StaggerItem key={fact.label} as="li" className="service-fact">
                  <span className="service-fact__label">{fact.label}</span>
                  <strong className="service-fact__value">{fact.value}</strong>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      ) : null}

      <section className="section-shell section-pad service-overview">
        <Reveal className="service-overview__copy">
          <p className="eyebrow">Overview</p>
          <h2>{page.overviewTitle}</h2>
          {page.overviewParagraphs?.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
        <Reveal className="service-overview__media" variant="right">
          <div className="service-overview__frame">
            <img src={page.heroImage} alt={page.heroAlt} loading="lazy" />
          </div>
        </Reveal>
      </section>

      {page.deliverables?.length ? (
        <section className="service-deliverables section-pad">
          <div className="service-deliverables__pattern" aria-hidden="true" />
          <div className="section-shell">
            <Reveal className="company-overview__section-header">
              <p className="eyebrow">What We Deliver</p>
              <h2>Service capabilities included.</h2>
            </Reveal>
            <StaggerGroup className="service-deliverables__grid">
              {page.deliverables.map((item) => {
                const Icon = ICON_MAP[item.icon] ?? Compass;
                return (
                  <StaggerItem key={item.title} className="service-deliverable">
                    <span className="service-deliverable__icon" aria-hidden="true">
                      <Icon size={22} strokeWidth={1.5} />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>
        </section>
      ) : null}

      {page.workflow?.length ? (
        <section className="service-workflow section-pad">
          <div className="section-shell">
            <Reveal className="company-overview__section-header company-overview__section-header--center">
              <p className="eyebrow">Process</p>
              <h2>How ALFA delivers this service.</h2>
            </Reveal>
            <StaggerGroup className="service-workflow__track">
              {page.workflow.map((step, index) => (
                <StaggerItem key={step.title} className="workflow-step service-workflow__step">
                  <span className="workflow-step__index">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  {index < page.workflow.length - 1 ? (
                    <span className="workflow-step__connector" aria-hidden="true">
                      <ArrowRight size={16} />
                    </span>
                  ) : null}
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      ) : null}

      {page.sectors?.length ? (
        <section className="section-shell section-pad service-sectors">
          <Reveal className="company-overview__section-header">
            <p className="eyebrow">Applications</p>
            <h2>Sectors where this capability applies.</h2>
          </Reveal>
          <StaggerGroup className="service-sectors__grid" as="ul">
            {page.sectors.map((sector) => (
              <StaggerItem key={sector} as="li">{sector}</StaggerItem>
            ))}
          </StaggerGroup>
        </section>
      ) : null}

      {page.quality ? (
        <section className="service-quality section-pad">
          <div className="service-quality__pattern" aria-hidden="true" />
          <div className="section-shell service-quality__inner">
            <Reveal>
              <p className="eyebrow">Quality • HSE • Compliance</p>
              <h2>Built around documented procedures and disciplined controls.</h2>
              <p className="service-quality__body">{page.quality}</p>
            </Reveal>
          </div>
        </section>
      ) : null}

      {page.related?.length ? (
        <section className="section-shell section-pad service-related">
          <Reveal className="company-overview__section-header">
            <p className="eyebrow">Related</p>
            <h2>Other ALFA divisions and capabilities.</h2>
          </Reveal>
          <StaggerGroup className="service-related__grid">
            {page.related.map((item) => (
              <StaggerItem key={item.path}>
                <Link to={item.path} className="service-related__card">
                  <h3>{item.title}</h3>
                  <span aria-hidden="true">
                    <ArrowUpRight size={18} />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>
      ) : null}

      <section className="section-shell section-pad">
        <Reveal className="co-cta service-cta">
          <div className="co-cta__pattern" aria-hidden="true" />
          <div className="co-cta__copy">
            <p className="eyebrow">Need this capability?</p>
            <h2>Bring ALFA into your next industrial scope.</h2>
            <p>
              Share the sector, site context, and service requirement. ALFA will
              respond through the contact details you provide.
            </p>
          </div>
          <div className="co-cta__actions">
            <Link className="btn btn-primary" to="/contact">
              <Mail size={16} aria-hidden="true" />
              Contact ALFA
            </Link>
            <a className="btn btn-secondary btn-secondary--dark" href="tel:+966138052528">
              <Phone size={16} aria-hidden="true" />
              +966 13 805 2528
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default ServicePageTemplate;
