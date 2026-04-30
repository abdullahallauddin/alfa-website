import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Factory,
  HardHat,
  MapPin,
  PackageCheck,
  Settings,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import Seo from "../Components/Seo";
import HeroImage from "../Assets/Images/facility/facility-hero.webp";
import FabricationImage from "../Assets/Images/facility/fabrication-yards.webp";
import PortaCabinsImage from "../Assets/Images/facility/porta-cabins.webp";
import WarehouseImage from "../Assets/Images/facility/warehouse-storage.webp";
import SpecializedWorkshopsImage from "../Assets/Images/facility/specialized-workshops.webp";
import TrainingHallsImage from "../Assets/Images/facility/training-halls.webp";
import HazmatStorageImage from "../Assets/Images/facility/hazmat-storage.webp";
import EquipmentFleetImage from "../Assets/Images/facility/equipment-fleet.webp";
import HseQualityImage from "../Assets/Images/facility/hse-quality.webp";

const FACILITY_HIGHLIGHTS = [
  {
    icon: Factory,
    image: FabricationImage,
    imageAlt: "Worker using an angle grinder with sparks in a metal workshop",
    title: "Fabrication Yards & Workshops",
    body: "Equipped with current machinery for steel work, custom parts, machining, blasting, and painting.",
  },
  {
    icon: HardHat,
    image: PortaCabinsImage,
    imageAlt: "Workers in high-visibility gear at a busy construction site with modular buildings",
    title: "Porta Cabin & Site Offices",
    body: "Furnished modular cabins for site offices, accommodation, and project mobilization scopes.",
  },
  {
    icon: Boxes,
    image: WarehouseImage,
    imageAlt: "Modern warehouse with pallets and storage racks",
    title: "Warehouse & Storage",
    body: "Organized material handling areas with controlled access and inventory tracking workflows.",
  },
  {
    icon: Wrench,
    image: SpecializedWorkshopsImage,
    imageAlt: "Hands adjusting a CNC machine in an industrial workshop",
    title: "Specialized Workshops",
    body: "Dedicated zones for joinery, electrical assembly, painting, and finishing operations.",
  },
  {
    icon: Settings,
    image: TrainingHallsImage,
    imageAlt: "Engineer discussing safety procedures in an industrial setting",
    title: "Training & Meeting Halls",
    body: "Spaces for project mobilization briefings, HSE training, and team coordination.",
  },
  {
    icon: ShieldCheck,
    image: HazmatStorageImage,
    imageAlt: "Industrial worker moving blue chemical barrels in a warehouse",
    title: "Compliant Hazmat Storage",
    body: "Secure and compliant storage for hazardous and non-hazardous materials.",
  },
  {
    icon: Truck,
    image: EquipmentFleetImage,
    imageAlt: "Excavator loading materials onto a heavy-duty cargo truck",
    title: "Equipment Fleet",
    body: "Vehicles, lifting equipment, and tools to support multi-site project mobilization.",
  },
  {
    icon: ShieldCheck,
    image: HseQualityImage,
    imageAlt: "Two workers in PPE discussing site plans at a construction site",
    title: "HSE & Quality Standards",
    body: "All facilities operate under documented HSE, quality, and compliance standards.",
  },
];

const WORKFLOW = [
  { icon: PackageCheck, title: "Receive", body: "Material intake, verification, and documentation." },
  { icon: Boxes, title: "Store", body: "Organized warehouse management with controlled access." },
  { icon: Factory, title: "Fabricate", body: "Workshop and yard execution under quality control." },
  { icon: Truck, title: "Mobilize", body: "Equipment, tools, and crews dispatched to project sites." },
  { icon: ShieldCheck, title: "Support", body: "Field support, maintenance, and follow-on services." },
];

const motionEase = [0.22, 1, 0.36, 1];
const revealViewport = { once: true, amount: 0.18 };
const revealVariants = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: motionEase } } };
const staggerContainer = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: motionEase, staggerChildren: 0.06 } } };
const staggerItem = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: motionEase } } };

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
  return <Tag className={className} variants={staggerItem} {...props}>{children}</Tag>;
};

const Facility = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="company-overview company-overview--editorial facility-page">
      <Seo
        title="Our Facilities | ALFA Marine & Industrial Services"
        description="ALFA's operating facilities in Saudi Arabia: fabrication yards, workshops, modular cabins, warehouses, and equipment fleet supporting marine, industrial, and construction projects."
        path="/our-facilities"
      />

      <section
        className="inner-hero contact-hero co-hero"
        style={{ "--inner-hero-image": `url(${HeroImage})` }}
      >
        <div className="section-shell inner-hero__content co-hero__content">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/group-overview">About</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Facilities</span>
          </nav>
          <p className="eyebrow">Our Facilities</p>
          <h1>Infrastructure built for industrial delivery.</h1>
          <p>
            Strategically located facilities in Saudi Arabia supporting
            high-volume production, logistics, and field-services operations
            across ALFA's divisions.
          </p>
          <ul className="contact-hero__chips co-hero__chips" aria-label="Facilities at a glance">
            <li><span><MapPin size={16} aria-hidden="true" /> Dammam base</span></li>
            <li><span><Factory size={16} aria-hidden="true" /> Multi-discipline yards</span></li>
            <li><span><ShieldCheck size={16} aria-hidden="true" /> HSE &amp; quality standards</span></li>
            <li><span><Truck size={16} aria-hidden="true" /> Owned equipment fleet</span></li>
          </ul>
        </div>
      </section>

      <section className="section-shell section-pad about-intro co-who-we-are">
        <Reveal className="about-intro__copy">
          <p className="eyebrow">Operating Footprint</p>
          <h2>Workshops, yards, storage, and equipment under one operating program.</h2>
          <p>
            ALFA's facilities are organized to support concurrent project scopes —
            fabrication, construction, MEP, joinery, ICT, and mobilization — from
            a single coordinated operating base.
          </p>
          <div className="about-intro__actions">
            <Link className="btn btn-primary" to="/contact">Request a Visit</Link>
            <Link className="btn btn-secondary" to="/our-capabilities">View Capabilities</Link>
          </div>
        </Reveal>
        <StaggerGroup className="co-profile-grid" as="ul" aria-label="Capability summary">
          {[
            { icon: MapPin, label: "Location", value: "Dammam, Saudi Arabia" },
            { icon: Factory, label: "Operating focus", value: "Multi-discipline industrial delivery" },
            { icon: ShieldCheck, label: "Compliance", value: "HSE, quality, material standards" },
            { icon: Truck, label: "Equipment", value: "Owned fleet for mobilization" },
          ].map(({ icon: Icon, label, value }) => (
            <StaggerItem key={label} as="li" className="co-profile-card">
              <span className="co-profile-card__icon" aria-hidden="true"><Icon size={18} /></span>
              <span className="co-profile-card__label">{label}</span>
              <strong className="co-profile-card__value">{value}</strong>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="co-divisions facility-highlights section-pad">
        <div className="co-divisions__pattern" aria-hidden="true" />
        <div className="section-shell">
          <Reveal className="company-overview__section-header company-overview__section-header--center">
            <p className="eyebrow">Facility Highlights</p>
            <h2>What ALFA's operating base supports.</h2>
          </Reveal>
          <StaggerGroup className="facility-highlights__grid">
            {FACILITY_HIGHLIGHTS.map(({ icon: Icon, title, body, image, imageAlt }) => (
              <StaggerItem key={title} className="facility-highlight">
                <div className="facility-highlight__media">
                  <img src={image} alt={imageAlt} loading="lazy" />
                  <span className="facility-highlight__icon" aria-hidden="true"><Icon size={20} strokeWidth={1.5} /></span>
                </div>
                <div className="facility-highlight__body">
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="facility-workflow section-pad">
        <div className="section-shell">
          <Reveal className="company-overview__section-header company-overview__section-header--center">
            <p className="eyebrow">Operating Workflow</p>
            <h2>Receive → Store → Fabricate → Mobilize → Support.</h2>
          </Reveal>
          <StaggerGroup className="facility-workflow__track">
            {WORKFLOW.map(({ icon: Icon, title, body }, index) => (
              <StaggerItem key={title} className="workflow-step">
                <span className="workflow-step__index">{String(index + 1).padStart(2, "0")}</span>
                <span className="workflow-step__icon" aria-hidden="true"><Icon size={22} strokeWidth={1.5} /></span>
                <h3>{title}</h3>
                <p>{body}</p>
                {index < WORKFLOW.length - 1 ? (
                  <span className="workflow-step__connector" aria-hidden="true">
                    <ArrowRight size={16} />
                  </span>
                ) : null}
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-shell section-pad">
        <Reveal className="co-cta">
          <div className="co-cta__pattern" aria-hidden="true" />
          <div className="co-cta__copy">
            <p className="eyebrow">Bring ALFA In</p>
            <h2>Discuss your project at the Dammam office.</h2>
            <p>ALFA's facilities are open to qualified clients and partners for site visits and pre-mobilization walkthroughs.</p>
          </div>
          <div className="co-cta__actions">
            <Link className="btn btn-primary" to="/contact">Contact ALFA</Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default Facility;
