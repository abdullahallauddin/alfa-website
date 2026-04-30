import MarineIcon from "../Assets/Icons/Marine.svg";
import ConstructionIcon from "../Assets/Icons/Construction.svg";
import FabricationIcon from "../Assets/Icons/Fabrication.svg";
import TradingIcon from "../Assets/Icons/Trading.svg";
import IctIcon from "../Assets/Icons/ICT.svg";
import FacilityIcon from "../Assets/Icons/Facility.svg";
import JoineryIcon from "../Assets/Icons/Joinery.svg";
import MarineImage from "../Assets/Images/marine2a.png";
import ConstructionImage from "../Assets/Images/construction2a.png";
import FabricationImage from "../Assets/Images/fabrication2a.png";
import TradingImage from "../Assets/Images/trading2a.png";
import IctImage from "../Assets/Images/ict2a.png";
import FacilityImage from "../Assets/Images/facility2a.png";
import JoineryImage from "../Assets/Images/joinery2a.png";
import DivisionMarineImage from "../Assets/Images/divisions/marine-offshore.webp";
import DivisionIndustrialImage from "../Assets/Images/divisions/industrial-services.webp";
import DivisionConstructionImage from "../Assets/Images/divisions/construction-epc.webp";
import DivisionRenewableImage from "../Assets/Images/divisions/renewable-energy.webp";
import DivisionDefenseImage from "../Assets/Images/divisions/defense-specialized.webp";
import DivisionHseImage from "../Assets/Images/divisions/hse-safety.webp";

export const sectors = [
  "Oil & Gas",
  "Marine & Offshore",
  "Defense",
  "Renewable Energy",
  "Power & Utilities",
  "Petrochemical",
  "Construction & Infrastructure",
  "Industrial Plants",
  "Commercial Projects",
  "Entertainment & Sports",
];

export const divisions = [
  {
    title: "Marine & Offshore",
    path: "/marine-and-offshore-division",
    icon: MarineIcon,
    image: MarineImage,
    summary:
      "End-to-end marine, offshore, oil & gas, renewable energy, and defense solutions, including modular buildings, living quarters, repair, refurbishment, and ship support services.",
    focus: ["Modular buildings", "Living quarters", "Rig, ship and hull repair"],
  },
  {
    title: "Construction",
    path: "/construction-division",
    icon: ConstructionIcon,
    image: ConstructionImage,
    summary:
      "Civil construction and MEP contracting for industrial, commercial, infrastructure, power, defense, and energy-sector environments.",
    focus: ["Civil works", "MEP contracting", "Temporary camp facilities"],
  },
  {
    title: "Fabrication & Machining",
    path: "/fabrication-and-machining-division",
    icon: FabricationIcon,
    image: FabricationImage,
    summary:
      "Precision fabrication, welding, machining, inspection, blasting, painting, hydraulic repair, and custom industrial component support.",
    focus: ["Steel fabrication", "CNC and machining", "Inspection and NDT"],
  },
  {
    title: "Trading",
    path: "/trading-division",
    icon: TradingIcon,
    image: TradingImage,
    summary:
      "Procurement and supply of technical products, equipment, safety materials, electrical, mechanical, marine, and industrial supplies.",
    focus: ["Industrial supplies", "Electrical materials", "Marine equipment"],
  },
  {
    title: "ICT",
    path: "/ict-division",
    icon: IctIcon,
    image: IctImage,
    summary:
      "ICT, low-current, smart building, structured cabling, network, security, AV, automation, and maintenance solutions for critical operations.",
    focus: ["Structured cabling", "Security systems", "Smart building solutions"],
  },
  {
    title: "Facility Management",
    path: "/facility-management-division",
    icon: FacilityIcon,
    image: FacilityImage,
    summary:
      "Technical operations, HVAC and MEP maintenance, office move services, soft services, landscaping, waste management, and catering support.",
    focus: ["Technical O&M", "Soft services", "Workplace support"],
  },
  {
    title: "Joinery",
    path: "/joinery-division",
    icon: JoineryIcon,
    image: JoineryImage,
    summary:
      "Bespoke joinery, interior fit-outs, custom wood products, architectural joinery, flooring, cladding, exhibition, and event joinery.",
    focus: ["Custom joinery", "Interior fit-outs", "Architectural woodwork"],
  },
];

export const homepageDivisions = [
  {
    title: "Marine & Offshore",
    shortTitle: "Marine & Offshore",
    path: "/marine-and-offshore-division",
    image: DivisionMarineImage,
    imageAlt: "Offshore oil rig with cranes near the shore",
    summary:
      "Marine, offshore, oil & gas, renewable energy and defense-sector support across modular buildings, living quarters, repair and refurbishment scopes.",
    eyebrow: "Division 01",
    icon: "ship",
    position: "center",
  },
  {
    title: "Industrial Services",
    shortTitle: "Industrial Services",
    path: "/fabrication-and-machining-division",
    image: DivisionIndustrialImage,
    imageAlt: "Welder working with sparks flying in industrial workshop",
    summary:
      "Fabrication, welding, machining, inspection, blasting, painting and repair support for demanding industrial environments.",
    eyebrow: "Division 02",
    icon: "factory",
    position: "center",
  },
  {
    title: "EPC / Construction",
    shortTitle: "EPC / Construction",
    path: "/construction-division",
    image: DivisionConstructionImage,
    imageAlt: "Industrial construction crane against a clear blue sky",
    summary:
      "Civil construction, MEP contracting, temporary camp facilities and site-ready infrastructure delivery for industrial and commercial projects.",
    eyebrow: "Division 03",
    icon: "hardhat",
    position: "center",
  },
  {
    title: "Renewable Energy",
    shortTitle: "Renewable Energy",
    path: "/marine-and-offshore-division",
    image: DivisionRenewableImage,
    imageAlt: "Expansive solar farm with wind turbines under a clear sky",
    summary:
      "Support for renewable energy environments through ALFA's marine, offshore, construction and technical service capabilities.",
    eyebrow: "Division 04",
    icon: "sun",
    position: "center",
  },
  {
    title: "Defense & Specialized Services",
    shortTitle: "Defense & Specialized",
    path: "/our-capabilities",
    image: DivisionDefenseImage,
    imageAlt: "Naval warship docked at an industrial harbor at sunset",
    summary:
      "Specialized technical, construction, fabrication and support services for high-accountability defense and critical-sector scopes.",
    eyebrow: "Division 05",
    icon: "shield",
    position: "center",
  },
  {
    title: "HSE & Quality",
    shortTitle: "HSE & Quality",
    path: "/health-safety-and-environmental-policy",
    image: DivisionHseImage,
    imageAlt: "Site worker in PPE conducting a safety inspection",
    summary:
      "Risk identification, training, audits, monitoring and continuous improvement woven into every operating division and project lifecycle.",
    eyebrow: "Division 06",
    icon: "shieldcheck",
    position: "center",
  },
];

export const capabilities = [
  "Engineering, Procurement, Fabrication & Construction (EPFC)",
  "Lump Sum Turnkey (LSTK) project execution",
  "Porta cabin and modular building solutions",
  "Marine and offshore technical services",
  "Civil, structural and MEP construction solutions",
  "Specialized steel fabrication and machining",
  "Procurement, trading and industrial supplies",
  "ICT, ELV, structured cabling and smart systems",
  "Facility management and maintenance",
  "Joinery works and custom fit-outs",
  "Heavy equipment rental and logistics support",
];

export const whyChooseAlfa = [
  {
    title: "Integrated Delivery",
    body:
      "Multiple specialist divisions work under one ALFA umbrella, reducing handoff friction across engineering, procurement, fabrication, construction, technology, and maintenance scopes.",
  },
  {
    title: "Critical-Sector Mindset",
    body:
      "The service mix is shaped for high-accountability sectors such as marine, offshore, oil & gas, defense, utilities, industrial plants, and infrastructure.",
  },
  {
    title: "Quality-Led Execution",
    body:
      "Project work is guided by quality control, disciplined planning, documentation, and continuous improvement across operations.",
  },
  {
    title: "Safety and Environmental Focus",
    body:
      "HSE commitments are positioned as operational responsibilities across employees, clients, contractors, suppliers, visitors, and project sites.",
  },
];

export const showcaseItems = [
  {
    eyebrow: "Marine & Offshore",
    title: "Accommodation, technical buildings and vessel support",
    body:
      "Design, construction, refurbishment, upgrade, repair, insulation, welding, fabrication, blasting, painting, scaffolding, and ship chandling support.",
  },
  {
    eyebrow: "Industrial Fabrication",
    title: "Fabrication, machining and inspection workflows",
    body:
      "Steel structures, custom parts, welding, CNC cutting, milling, drilling, grinding, hydraulic repair, coatings, and inspection support for demanding industrial environments.",
  },
  {
    eyebrow: "Construction & MEP",
    title: "Civil, infrastructure and technical building services",
    body:
      "Temporary camp facilities, prefabricated porta cabin buildings, road works, laboratory construction, HVAC, firefighting, insulation, waterproofing, and flooring solutions.",
  },
  {
    eyebrow: "ICT & Facilities",
    title: "Operational continuity after handover",
    body:
      "Structured cabling, networks, security, smart buildings, technical maintenance, soft services, office moves, and site support keep assets operating reliably.",
  },
];
