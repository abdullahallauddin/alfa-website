// Original ALFA Group news/insight content (sample editorial, authored in-house).
// Images reuse existing project assets.
import marine from "../Assets/Images/marine2a.png";
import construction from "../Assets/Images/construction2a.png";
import fabrication from "../Assets/Images/fabrication2a.png";
import trading from "../Assets/Images/trading2a.png";
import ict from "../Assets/Images/ict2a.png";
import facility from "../Assets/Images/facility2a.png";
import gas from "../Assets/Images/gasimage1.png";
import facilityPhoto from "../Assets/Images/our-facility.png";
import group from "../Assets/Images/GroupOverview.jpeg";

export const NEWS_CATEGORIES = ["Projects", "Operations", "Industry", "Company"];

export const news = [
  {
    slug: "offshore-living-quarters-module-delivered",
    title: "ALFA Delivers Offshore Living-Quarters Module to International Standards",
    category: "Projects",
    date: "June 12, 2026",
    image: marine,
    excerpt:
      "Our Marine & Offshore Division has handed over a fully outfitted living-quarters module built to ABS and DNV requirements.",
    body: [
      "ALFA Group's Marine & Offshore Division has completed and handed over a fully outfitted offshore living-quarters module, engineered and constructed to the highest international marine standards including ABS and DNV requirements.",
      "Delivered as a Lump Sum Turnkey scope, the module covered design, fabrication, systems integration and commissioning. The project reflects our continued focus on safety, quality and on-time delivery for clients across the oil & gas and offshore sectors.",
      "Work was carried out in close coordination with recognised certification bodies, ensuring the structure met rigorous ATEX, IECEx and NORSOK criteria before sail-away.",
    ],
  },
  {
    slug: "construction-division-industrial-facility-groundbreaking",
    title: "Construction Division Breaks Ground on Industrial Facility in the Eastern Province",
    category: "Projects",
    date: "May 28, 2026",
    image: construction,
    excerpt:
      "A new civil and structural programme begins, combining sustainable practices with modern execution methods.",
    body: [
      "The ALFA Construction Division has commenced civil and structural works on a new industrial facility in the Eastern Province, marking another milestone in the division's growing portfolio of infrastructure projects.",
      "The scope spans project planning, execution and quality control, with sustainable construction practices integrated throughout. Our teams are applying modern methods to ensure timely completion and long-term durability.",
      "The programme reinforces ALFA's role as a reliable delivery partner for commercial, industrial and institutional developments across the Kingdom.",
    ],
  },
  {
    slug: "fabrication-cnc-machining-capacity-expansion",
    title: "Precision Fabrication Capacity Expands with New CNC Machining Line",
    category: "Operations",
    date: "May 9, 2026",
    image: fabrication,
    excerpt:
      "Additional CNC machining capability strengthens our ability to produce parts to strict tolerances at scale.",
    body: [
      "ALFA's Fabrication & Machining Division has expanded its precision metalwork capacity with the addition of a new CNC machining line, increasing throughput for both high-volume and specialised custom work.",
      "The investment supports clients in oil & gas, petrochemicals and heavy engineering who require components manufactured to strict tolerances and quality standards.",
      "From welding and structural fabrication to fine machining, the division continues to guarantee structural integrity and performance from concept to completion.",
    ],
  },
  {
    slug: "gulf-energy-transition-industrial-opportunities",
    title: "Gulf Energy Transition Opens New Opportunities for Industrial Contractors",
    category: "Industry",
    date: "April 22, 2026",
    image: gas,
    excerpt:
      "As the region accelerates investment in renewables and cleaner energy, demand grows for capable multi-division partners.",
    body: [
      "The Gulf region's accelerating energy transition is reshaping demand across the industrial supply chain, creating new opportunities for contractors able to support both conventional and renewable energy projects.",
      "ALFA Group's diversified capabilities — spanning marine & offshore, construction, fabrication and facility management — position the company to support clients through this shift with integrated engineering, procurement and construction support.",
      "Our continued investment in skilled manpower and advanced technologies ensures readiness for the evolving needs of the energy sector.",
    ],
  },
  {
    slug: "smart-building-low-current-systems-go-live",
    title: "Smart-Building and Low-Current Systems Go Live for Enterprise Client",
    category: "Operations",
    date: "April 3, 2026",
    image: ict,
    excerpt:
      "Our ICT Division has commissioned an integrated smart-building and low-current solution for an enterprise facility.",
    body: [
      "ALFA's ICT Division has successfully commissioned an integrated smart-building and low-current systems solution for an enterprise client, delivering secure, scalable infrastructure designed for reliability.",
      "The deployment covered network infrastructure, structured cabling and smart-building controls, helping the client embrace digital transformation with future-ready systems.",
      "The division continues to deliver end-to-end ICT solutions that empower organisations to operate efficiently in an increasingly connected environment.",
    ],
  },
  {
    slug: "facility-management-operational-milestone",
    title: "Integrated Facility Management Programme Reaches Operational Milestone",
    category: "Operations",
    date: "March 18, 2026",
    image: facility,
    excerpt:
      "A long-running facilities programme records consistent uptime through smart, technology-led maintenance.",
    body: [
      "ALFA's Facility Management Division has marked an operational milestone on a long-running programme, sustaining consistent uptime across the managed estate through proactive, technology-led maintenance.",
      "Services spanning HVAC, electrical maintenance, cleaning, landscaping and security are coordinated with modern tools and smart technologies to enhance comfort, safety and productivity within client premises.",
      "Tailored service models continue to ensure cost-effectiveness and reliability for every facility under management.",
    ],
  },
  {
    slug: "supply-chain-resilience-regional-sourcing",
    title: "Supply-Chain Resilience: Strengthening Industrial Sourcing Across the Region",
    category: "Operations",
    date: "February 27, 2026",
    image: trading,
    excerpt:
      "The Trading Division deepens supplier relationships to keep critical materials moving on schedule.",
    body: [
      "ALFA's Trading Division has further strengthened its sourcing network, deepening supplier relationships to keep equipment, spare parts and raw materials moving reliably for industrial and commercial clients.",
      "By combining strong supplier partnerships with disciplined logistics and inventory management, the division supports timely procurement and competitive pricing across the region.",
      "The result is greater supply-chain resilience for clients operating in demanding industrial environments.",
    ],
  },
  {
    slug: "iso-certifications-renewed-all-divisions",
    title: "ALFA Group Renews ISO Certifications Across All Divisions",
    category: "Company",
    date: "February 5, 2026",
    image: facilityPhoto,
    excerpt:
      "Renewed certifications reaffirm our commitment to quality, safety and international standards.",
    body: [
      "ALFA Group has renewed its ISO certifications across all operating divisions, reaffirming a group-wide commitment to quality, safety and adherence to international standards.",
      "The certifications underpin our management systems and reflect continuous investment in operational excellence, from engineering and fabrication to construction and facility management.",
      "Maintaining these standards remains central to how ALFA delivers timely, safe and value-driven outcomes for clients.",
    ],
  },
  {
    slug: "local-content-vision-2030-commitments",
    title: "ALFA Group Advances Local-Content Commitments Under Vision 2030",
    category: "Company",
    date: "January 16, 2026",
    image: group,
    excerpt:
      "Investing in local talent, suppliers and capabilities to support the Kingdom's industrial growth agenda.",
    body: [
      "ALFA Group continues to advance its local-content commitments in line with Saudi Vision 2030, investing in local talent, suppliers and industrial capabilities across its divisions.",
      "By developing skilled manpower and strengthening regional supplier ecosystems, ALFA supports the Kingdom's broader objectives for economic diversification and industrial growth.",
      "These efforts reinforce the company's long-term role as a trusted multi-division partner contributing to national development.",
    ],
  },
];

export const getNewsBySlug = (slug) => news.find((n) => n.slug === slug);
