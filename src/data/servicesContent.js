import MarineHero from "../Assets/Images/services/marine-offshore.webp";
import ConstructionHero from "../Assets/Images/services/construction.webp";
import FabricationHero from "../Assets/Images/services/fabrication.webp";
import TradingHero from "../Assets/Images/services/trading.webp";
import IctHero from "../Assets/Images/services/ict.webp";
import FacilityMgmtHero from "../Assets/Images/services/facility-mgmt.webp";
import JoineryHero from "../Assets/Images/services/joinery.webp";
import CapabilityHero from "../Assets/Images/services/capability.webp";

/**
 * Each service page is driven by a config object consumed by
 * src/Components/ServicePageTemplate.jsx. Content is grounded in the
 * existing alfamarinesa.com page copy — no fake clients, certifications,
 * project names, or numbers.
 */
export const servicePages = {
  "marine-and-offshore-division": {
    eyebrow: "Division",
    title: "Marine & Offshore",
    positioning:
      "End-to-end marine, offshore, oil & gas, renewable energy, and defense support — modular buildings, living quarters, vessel and rig services.",
    heroImage: MarineHero,
    heroAlt: "Offshore oil drilling platform reflected on a calm sea",
    quickFacts: [
      { label: "Sector Focus", value: "Marine • Offshore • Oil & Gas" },
      { label: "Delivery Model", value: "Project & call-off scopes" },
      { label: "Support Type", value: "Build • Repair • Refurbish" },
      { label: "Related Division", value: "Construction & Fabrication" },
    ],
    overviewTitle: "Integrated marine and offshore service capability.",
    overviewParagraphs: [
      "ALFA's Marine & Offshore Division supports vessel, rig, and offshore-environment scopes through modular building solutions, living quarters refurbishment, and full mechanical, electrical, and HVAC support.",
      "Work is structured around safe access to floating and fixed assets, controlled fabrication and welding, surface protection, and disciplined inspection — adapted to each client's procurement and HSE requirements.",
    ],
    deliverables: [
      { icon: "Anchor", title: "Modular Building Solutions", body: "Design, fabrication, and installation of modular buildings for vessels, rigs, and shore facilities." },
      { icon: "Building2", title: "Living Quarters", body: "Refurbishment and upgrade of living quarters and crew accommodation spaces." },
      { icon: "Wrench", title: "Architectural & MEP", body: "Architectural, HVAC, electrical, plumbing, and carpentry services on board." },
      { icon: "Ship", title: "Ship Chandling", body: "Provisioning and supply support for vessel and offshore operations." },
      { icon: "Shield", title: "Thermal & Acoustic Insulation", body: "Insulation systems for accommodation, machinery spaces, and exhaust paths." },
      { icon: "Hammer", title: "Rig, Ship & Hull Repair", body: "Repair, refit, and dry-dock support for rigs, ships, and hulls." },
      { icon: "Factory", title: "Welding & Fabrication", body: "On-board and yard fabrication, structural and pipe welding to project specifications." },
      { icon: "Sparkles", title: "Blasting, Painting, Scaffolding", body: "Surface preparation, abrasive blasting, marine coatings, and scaffolding for ships, vessels, and offshore rigs." },
    ],
    workflow: [
      { title: "Survey", body: "On-site assessment of vessel/rig conditions and scope." },
      { title: "Engineer", body: "Drawings, MTOs, procurement plans, and HSE method statements." },
      { title: "Fabricate", body: "Yard or on-board fabrication and pre-assembly." },
      { title: "Install", body: "Mobilization, installation, and commissioning under permit-to-work." },
      { title: "Support", body: "Punch-list close-out, warranty, and follow-on technical support." },
    ],
    sectors: ["Marine", "Offshore", "Oil & Gas", "Defense", "Renewable Energy"],
    quality:
      "Marine and offshore work is delivered under documented HSE and quality procedures — risk assessments, permits to work, controlled access, welder qualifications, and inspection records — adapted to client and asset-owner requirements.",
    related: [
      { title: "Construction", path: "/construction-division" },
      { title: "Fabrication & Machining", path: "/fabrication-and-machining-division" },
      { title: "Trading", path: "/trading-division" },
    ],
  },

  "construction-division": {
    eyebrow: "Division",
    title: "Construction",
    positioning:
      "Civil and MEP contracting for industrial, commercial, infrastructure, power, defense, and energy environments — from temporary camp facilities to building structures.",
    heroImage: ConstructionHero,
    heroAlt: "Tower crane working on a high-rise construction site",
    quickFacts: [
      { label: "Sector Focus", value: "Industrial • Infra • Commercial" },
      { label: "Delivery Model", value: "Project & turnkey scopes" },
      { label: "Support Type", value: "Civil • MEP • Finishing" },
      { label: "Related Division", value: "Marine & Offshore" },
    ],
    overviewTitle: "Civil, MEP, and finishing contractor for industrial scopes.",
    overviewParagraphs: [
      "ALFA's Construction Division supports temporary and permanent works including camp facilities, prefab porta cabins, road works, laboratory and building structures, renovations, HVAC, firefighting, insulation, parking shades, waterproofing, and flooring.",
      "Scopes are organized around clear deliverables, controlled procurement, qualified subcontractor management where required, and HSE-led execution.",
    ],
    deliverables: [
      { icon: "HardHat", title: "Temporary Camp Facilities", body: "Construction of TCFs for project sites and remote operations." },
      { icon: "Building2", title: "Prefab Porta Cabin Buildings", body: "Fabrication of prefabricated porta cabin buildings for site offices and accommodation." },
      { icon: "Wrench", title: "Roadworks & Asphalt Paving", body: "Road construction, asphalt paving, marking, and lining services." },
      { icon: "Factory", title: "Laboratory & Building Structures", body: "Laboratory design and construction, building structure construction services." },
      { icon: "Hammer", title: "Renovation Works", body: "Renovation of commercial and industrial buildings to new operating standards." },
      { icon: "ShieldCheck", title: "HVAC & Firefighting", body: "HVAC services, duct fabrication, and firefighting system installations." },
      { icon: "Sparkles", title: "Insulation & Parking Shades", body: "Thermal insulation, exhaust system services, and parking shade fabrication." },
      { icon: "Compass", title: "Waterproofing & Flooring", body: "Waterproofing solutions and flooring systems suited to industrial and commercial environments." },
    ],
    workflow: [
      { title: "Plan", body: "Scope definition, drawings, schedule, and procurement plan." },
      { title: "Mobilize", body: "Site set-up, HSE briefings, equipment, and crew mobilization." },
      { title: "Build", body: "Civil, structural, MEP, and finishing works under quality control." },
      { title: "Commission", body: "Testing, inspection, and turnover documentation." },
      { title: "Handover", body: "Punch-list close-out, as-built records, and warranty support." },
    ],
    sectors: ["Construction", "Industrial Plants", "Commercial Projects", "Petrochemical", "Defense"],
    quality:
      "Construction scopes follow documented procedures — method statements, inspection and test plans, permits, materials approvals, and project-specific HSE controls.",
    related: [
      { title: "Fabrication & Machining", path: "/fabrication-and-machining-division" },
      { title: "Marine & Offshore", path: "/marine-and-offshore-division" },
      { title: "Facility Management", path: "/facility-management-division" },
    ],
  },

  "fabrication-and-machining-division": {
    eyebrow: "Division",
    title: "Fabrication & Machining",
    positioning:
      "Precision fabrication, welding, machining, inspection, blasting, painting, and hydraulic repair support for demanding industrial environments.",
    heroImage: FabricationHero,
    heroAlt: "Spinning lathe machine in an industrial workshop",
    quickFacts: [
      { label: "Sector Focus", value: "Industrial • O&G • Marine" },
      { label: "Delivery Model", value: "Workshop & on-site" },
      { label: "Support Type", value: "Fabricate • Machine • Coat" },
      { label: "Related Division", value: "Marine & Offshore" },
    ],
    overviewTitle: "Workshop and on-site fabrication, machining, and inspection.",
    overviewParagraphs: [
      "ALFA's Fabrication & Machining Division covers steel structures, pressure components, custom parts, welding, CNC machining, surface preparation, and hydraulic repair — supporting marine, offshore, oil & gas, and industrial-plant environments.",
      "Work is executed under controlled procedures with welder qualifications, inspection plans, and project-specific quality records.",
    ],
    deliverables: [
      { icon: "Factory", title: "Steel Structure Fabrication", body: "Fabrication of steel structures, supports, and skids to project drawings." },
      { icon: "Wrench", title: "Custom Parts & Components", body: "Custom industrial parts and components produced from supplied or sourced materials." },
      { icon: "Hammer", title: "Welding Services", body: "Structural and pipe welding by qualified welders to relevant codes." },
      { icon: "Cpu", title: "CNC Machining", body: "CNC cutting, milling, drilling, grinding, and finishing operations." },
      { icon: "Sparkles", title: "Blasting & Painting", body: "Abrasive blasting and protective coating systems for industrial and marine assets." },
      { icon: "ShieldCheck", title: "Inspection & NDT", body: "Inspection support and NDT services aligned with project requirements." },
      { icon: "Anchor", title: "Hydraulic Repair", body: "Repair and overhaul support for hydraulic components and systems." },
      { icon: "Building2", title: "On-site Fabrication", body: "Mobilization of fabrication crews to project sites where required." },
    ],
    workflow: [
      { title: "Design", body: "Review drawings, MTO preparation, and material sourcing plan." },
      { title: "Cut & Form", body: "Cutting, forming, and pre-assembly of components." },
      { title: "Weld & Machine", body: "Welding and machining under qualified procedures and traceable records." },
      { title: "Inspect", body: "Visual, dimensional, and NDT inspection per the inspection and test plan." },
      { title: "Coat & Deliver", body: "Surface preparation, coating, packaging, and delivery to site." },
    ],
    sectors: ["Oil & Gas", "Marine", "Offshore", "Industrial Plants", "Petrochemical"],
    quality:
      "Fabrication scopes follow welder qualifications, inspection and test plans, traceability records, and project-specific quality and HSE procedures.",
    related: [
      { title: "Marine & Offshore", path: "/marine-and-offshore-division" },
      { title: "Construction", path: "/construction-division" },
      { title: "Trading", path: "/trading-division" },
    ],
  },

  "trading-division": {
    eyebrow: "Division",
    title: "Trading",
    positioning:
      "Procurement and supply of technical products, equipment, safety materials, electrical, mechanical, marine, and industrial supplies.",
    heroImage: TradingHero,
    heroAlt: "Warehouse employee operating a forklift to move stocked goods",
    quickFacts: [
      { label: "Sector Focus", value: "Industrial • Marine • Commercial" },
      { label: "Delivery Model", value: "Stock & call-off supply" },
      { label: "Support Type", value: "Source • Verify • Deliver" },
      { label: "Related Division", value: "Fabrication & Machining" },
    ],
    overviewTitle: "Trading and supply support across critical product categories.",
    overviewParagraphs: [
      "ALFA's Trading Division sources and supplies technical products, equipment, safety materials, electrical, mechanical, marine, and industrial supplies from qualified manufacturers and distributors.",
      "Activity is organized around verifying technical requirements, controlling supplier qualification, managing inspection and packaging, and delivering to client sites on schedule.",
    ],
    deliverables: [
      { icon: "Factory", title: "Power & Electrical", body: "Power equipment, switchgear, circuit protection, electrical accessories, lighting and control." },
      { icon: "Wrench", title: "Valves, Pumps & Motors", body: "Valves and fittings, pumps, motors, tools and accessories." },
      { icon: "Cpu", title: "Instrumentation & Measurement", body: "Level, flow, temperature, measurement, and calibration equipment." },
      { icon: "Building2", title: "IT & Office Supplies", body: "Computers, networking and security, office furniture, and stationery." },
      { icon: "Anchor", title: "Marine & Safety Supplies", body: "Marine and offshore equipment, safety equipment, deck supplies, lifting and rigging." },
      { icon: "Sparkles", title: "Lab & Kitchen Units", body: "Piping and industrial components, laboratory equipment, kitchen and wet units, uniforms and liners." },
      { icon: "ShieldCheck", title: "Emergency & Fire", body: "Emergency response equipment, fire extinguishers, suppression systems, gas cylinders." },
      { icon: "Hammer", title: "Storage & Packaging", body: "Storage and warehousing racking, labeling and packing materials, processing and cleaning equipment." },
    ],
    workflow: [
      { title: "Source", body: "Review specs and identify qualified suppliers." },
      { title: "Verify", body: "Datasheet, certificate, and compatibility checks." },
      { title: "Stock", body: "Receive, inspect, and stock at controlled storage." },
      { title: "Deliver", body: "Pack, label, and dispatch to project site or client warehouse." },
      { title: "Support", body: "Documentation, warranty support, and follow-up replenishment." },
    ],
    sectors: ["Oil & Gas", "Marine", "Offshore", "Industrial Plants", "Construction", "Commercial Projects"],
    quality:
      "Supply scopes are managed against client specifications, supplier qualification records, inspection on receipt, and traceable delivery documentation.",
    related: [
      { title: "Fabrication & Machining", path: "/fabrication-and-machining-division" },
      { title: "ICT", path: "/ict-division" },
      { title: "Facility Management", path: "/facility-management-division" },
    ],
  },

  "ict-division": {
    eyebrow: "Division",
    title: "ICT",
    positioning:
      "ICT, low-current, smart building, structured cabling, network, security, AV, automation, and maintenance solutions for critical operations.",
    heroImage: IctHero,
    heroAlt: "Server room with managed cabling and centralized infrastructure",
    quickFacts: [
      { label: "Sector Focus", value: "Commercial • Industrial • Retail" },
      { label: "Delivery Model", value: "Design–install–maintain" },
      { label: "Support Type", value: "ELV • Network • AV" },
      { label: "Related Division", value: "Facility Management" },
    ],
    overviewTitle: "ICT, ELV, and smart-system delivery for operating buildings.",
    overviewParagraphs: [
      "ALFA's ICT Division covers structured cabling, data center infrastructure, network and wireless solutions, surveillance and access control, audio-visual and conferencing, smart building and automation, retail systems, fiber transmission, IT asset management, and consultancy.",
      "Each scope is organized around documented design, supplier qualification, controlled installation, commissioning, and ongoing maintenance through Annual Maintenance Contracts where required.",
    ],
    deliverables: [
      { icon: "Cpu", title: "Structured Cabling & Data Centers", body: "Structured cabling and data center infrastructure to international standards." },
      { icon: "Building2", title: "Network & Wireless", body: "Network infrastructure, wireless solutions, and connectivity design." },
      { icon: "Shield", title: "Surveillance & Access Control", body: "CCTV, intrusion detection, and access-control solutions." },
      { icon: "Sparkles", title: "Audio/Visual & Conferencing", body: "AV, conferencing, and media distribution solutions for boardrooms and venues." },
      { icon: "Factory", title: "Smart Building & Automation", body: "Smart-building automation, BMS integration, and control solutions." },
      { icon: "Wrench", title: "QSR & Retail Systems", body: "QSR / retail systems, point-of-sale infrastructure, and operations technology." },
      { icon: "Anchor", title: "Fiber Transmission", body: "Fiber-optic transmission line solutions for campus and inter-site links." },
      { icon: "ShieldCheck", title: "Maintenance (AMC)", body: "Annual maintenance contracts, asset management, and IT relocation services." },
    ],
    workflow: [
      { title: "Audit", body: "Review existing infrastructure, requirements, and constraints." },
      { title: "Design", body: "System design, BoQ, and integration plan." },
      { title: "Install", body: "Cabling, hardware installation, and structured commissioning." },
      { title: "Commission", body: "Testing, configuration, training, and handover." },
      { title: "Maintain", body: "Annual maintenance contracts and ongoing support." },
    ],
    sectors: ["Commercial Projects", "Industrial Plants", "Retail", "Defense"],
    quality:
      "ICT scopes are organized around documented design, manufacturer-aligned installation methods, structured testing, and traceable commissioning records.",
    related: [
      { title: "Facility Management", path: "/facility-management-division" },
      { title: "Trading", path: "/trading-division" },
      { title: "Construction", path: "/construction-division" },
    ],
  },

  "facility-management-division": {
    eyebrow: "Division",
    title: "Facility Management",
    positioning:
      "Technical operations, HVAC and MEP maintenance, office moves, soft services, landscaping, waste management, and catering support.",
    heroImage: FacilityMgmtHero,
    heroAlt: "Facility maintenance technicians servicing a building exterior",
    quickFacts: [
      { label: "Sector Focus", value: "Commercial • Industrial • Hospitality" },
      { label: "Delivery Model", value: "Operations & maintenance" },
      { label: "Support Type", value: "Hard & soft services" },
      { label: "Related Division", value: "ICT" },
    ],
    overviewTitle: "Operations and maintenance services that keep assets running.",
    overviewParagraphs: [
      "ALFA's Facility Management Division supports operational continuity through technical operations, HVAC and MEP maintenance, soft services, landscaping, waste management, catering, and workplace support.",
      "Scopes are organized around documented operating procedures, planned maintenance calendars, response targets, and customer-focused service management.",
    ],
    deliverables: [
      { icon: "Wrench", title: "Technical Operations", body: "Hard-services operations and maintenance across MEP and HVAC systems." },
      { icon: "Factory", title: "HVAC & MEP Maintenance", body: "Planned and reactive maintenance of HVAC and MEP equipment." },
      { icon: "Sparkles", title: "Soft Services", body: "Cleaning, housekeeping, and workplace soft services." },
      { icon: "Anchor", title: "Landscaping", body: "Landscape design and maintenance for commercial and industrial sites." },
      { icon: "Shield", title: "Waste Management", body: "Waste segregation, collection, and disposal coordination." },
      { icon: "Hammer", title: "Catering Support", body: "Catering and pantry support services to facility operations." },
      { icon: "Building2", title: "Office Move Services", body: "Office relocation and move services with controlled handling." },
      { icon: "Compass", title: "Workplace Support", body: "Helpdesk, reception, and front-of-house workplace support." },
    ],
    workflow: [
      { title: "Onboard", body: "Asset register, operating manuals, and risk assessments." },
      { title: "Plan", body: "Planned maintenance schedule and service-level targets." },
      { title: "Operate", body: "Day-to-day operations, hard and soft services." },
      { title: "Audit", body: "KPI tracking, audits, and customer feedback reviews." },
      { title: "Improve", body: "Continuous improvement, reporting, and renewal." },
    ],
    sectors: ["Commercial Projects", "Industrial Plants", "Hospitality", "Retail"],
    quality:
      "Facility services run on documented procedures, planned maintenance calendars, HSE method statements, and KPI-led service reviews.",
    related: [
      { title: "ICT", path: "/ict-division" },
      { title: "Joinery", path: "/joinery-division" },
      { title: "Construction", path: "/construction-division" },
    ],
  },

  "joinery-division": {
    eyebrow: "Division",
    title: "Joinery",
    positioning:
      "Bespoke joinery, interior fit-outs, custom wood products, architectural joinery, flooring, cladding, exhibition, and event joinery.",
    heroImage: JoineryHero,
    heroAlt: "Carpenter precisely cutting wood with an industrial saw",
    quickFacts: [
      { label: "Sector Focus", value: "Commercial • Hospitality • Residential" },
      { label: "Delivery Model", value: "Workshop & on-site" },
      { label: "Support Type", value: "Design • Craft • Install" },
      { label: "Related Division", value: "Construction" },
    ],
    overviewTitle: "Custom joinery and fit-out for premium commercial spaces.",
    overviewParagraphs: [
      "ALFA's Joinery Division covers custom joinery, interior fit-outs, wooden fixtures and fittings, doors and windows, kitchens and wardrobes, carpentry, repairs, flooring, cladding, architectural joinery, and exhibition and event joinery.",
      "Work is delivered through controlled workshop production and on-site installation, with material traceability and finishing standards aligned to the client brief.",
    ],
    deliverables: [
      { icon: "Hammer", title: "Custom Joinery", body: "Bespoke wood products and joinery items produced to client drawings." },
      { icon: "Building2", title: "Interior Fit-Outs", body: "Commercial and hospitality interior fit-outs delivered with finishing detail." },
      { icon: "Sparkles", title: "Fixtures & Fittings", body: "Wooden fixtures, fittings, and built-in components." },
      { icon: "Wrench", title: "Doors & Windows", body: "Door and window manufacture, supply, and installation." },
      { icon: "Factory", title: "Kitchens & Wardrobes", body: "Custom kitchens, wardrobes, and storage solutions." },
      { icon: "Anchor", title: "Repairs & Restoration", body: "Repair, refinishing, and restoration of existing wood elements." },
      { icon: "Compass", title: "Flooring & Cladding", body: "Flooring and cladding solutions for commercial and residential projects." },
      { icon: "Shield", title: "Architectural & Event", body: "Architectural joinery and exhibition / event joinery for short-run installations." },
    ],
    workflow: [
      { title: "Design", body: "Client brief, drawings, materials, and finish selection." },
      { title: "Source", body: "Material sourcing and quality verification." },
      { title: "Craft", body: "Workshop production with QA at each stage." },
      { title: "Install", body: "On-site installation with controlled handling." },
      { title: "Finish", body: "Finishing, snag close-out, and handover." },
    ],
    sectors: ["Commercial Projects", "Hospitality", "Residential", "Retail"],
    quality:
      "Joinery work is produced under shop QA, finished materials inspection, and on-site installation supervision aligned with the project brief.",
    related: [
      { title: "Construction", path: "/construction-division" },
      { title: "Facility Management", path: "/facility-management-division" },
      { title: "Trading", path: "/trading-division" },
    ],
  },

  "our-capabilities": {
    eyebrow: "Capability",
    title: "Group Capabilities",
    positioning:
      "Engineering, procurement, fabrication, construction, technology, and operations capability — across critical Saudi and regional industrial sectors.",
    heroImage: CapabilityHero,
    heroAlt: "Architectural floor plan showing engineering design and layout",
    quickFacts: [
      { label: "Operating Model", value: "Integrated multi-division" },
      { label: "Delivery Model", value: "EPFC, LSTK, & call-off" },
      { label: "Support Type", value: "Engineer • Build • Support" },
      { label: "Headquarters", value: "Dammam, Saudi Arabia" },
    ],
    overviewTitle: "One capability set across multiple specialist divisions.",
    overviewParagraphs: [
      "ALFA's group capability covers engineering, procurement, fabrication, construction, ICT, trading, facility, and joinery scopes — delivered through specialist divisions under one operating umbrella.",
      "Capability statements below are grounded in existing service descriptions across the ALFA division pages — without invented project names, certifications, or numbers.",
    ],
    deliverables: [
      { icon: "Compass", title: "EPFC", body: "Engineering, procurement, fabrication, and construction delivery." },
      { icon: "Building2", title: "Lump Sum Turnkey", body: "Lump-sum turnkey (LSTK) project execution where the scope supports it." },
      { icon: "HardHat", title: "Porta Cabin & Modular Buildings", body: "Porta cabin and modular building solutions for site offices and accommodation." },
      { icon: "Anchor", title: "Marine & Offshore Technical", body: "Marine and offshore technical services for vessels, rigs, and shore facilities." },
      { icon: "Wrench", title: "Civil, Structural & MEP", body: "Civil, structural, and MEP construction solutions for industrial and commercial environments." },
      { icon: "Factory", title: "Steel Fabrication & Machining", body: "Specialized steel fabrication and machining to project drawings." },
      { icon: "Sparkles", title: "Procurement & Industrial Supplies", body: "Procurement, trading, and industrial supplies through qualified channels." },
      { icon: "Cpu", title: "ICT, ELV & Smart Systems", body: "ICT, ELV, structured cabling, and smart-building systems integration." },
      { icon: "Shield", title: "Facility Management", body: "Facility operations and maintenance services for hard and soft scopes." },
      { icon: "Hammer", title: "Joinery & Custom Fit-Out", body: "Joinery works and custom fit-outs aligned to the project brief." },
      { icon: "ShieldCheck", title: "Heavy Equipment & Logistics", body: "Heavy equipment rental and logistics support for project mobilization." },
    ],
    workflow: [
      { title: "Engage", body: "Sector, scope, and constraint review with the client." },
      { title: "Plan", body: "Engineering, procurement plan, and HSE method statements." },
      { title: "Deliver", body: "Multi-division delivery under one program." },
      { title: "Inspect", body: "Quality inspection and test plans." },
      { title: "Support", body: "Handover, warranty, and ongoing operational support." },
    ],
    sectors: [
      "Oil & Gas",
      "Marine",
      "Offshore",
      "Defense",
      "Renewable Energy",
      "Power & Utilities",
      "Petrochemical",
      "Construction",
      "Industrial Plants",
      "Commercial Projects",
    ],
    quality:
      "Group delivery is organized around documented engineering, procurement, fabrication, and construction procedures, project-specific HSE controls, and disciplined inspection and test planning.",
    related: [
      { title: "Marine & Offshore", path: "/marine-and-offshore-division" },
      { title: "Construction", path: "/construction-division" },
      { title: "Fabrication & Machining", path: "/fabrication-and-machining-division" },
    ],
  },
};
