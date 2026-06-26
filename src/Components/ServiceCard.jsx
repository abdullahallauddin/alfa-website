import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Marine from "../Assets/Icons/Marine.svg";
import Construction from "../Assets/Icons/Construction.svg";
import Fabrication from "../Assets/Icons/Fabrication.svg";
import Trading from "../Assets/Icons/Trading.svg";
import ICT from "../Assets/Icons/ICT.svg";
import Facility from "../Assets/Icons/Facility.svg";
import Joinery from "../Assets/Icons/Joinery.svg";

const ServiceCard = ({ carousel = false }) => {
  const trackRef = useRef(null);

  const scrollByCard = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]");
    const amount = card ? card.offsetWidth + 24 : 320;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const cards = [
    {
      id: 1,
      link: "marine-and-offshore-division",
      logo: Marine,
      title: "Marine & Offshore Division",
      description:
        "Our Marine & Offshore Division specializes in providing comprehensive services for the maritime and offshore industries. We support shipbuilding, repair, and offshore platform maintenance with a strong focus on safety and technical excellence. Our team is experienced in delivering turnkey solutions that meet international marine standards. From hull fabrication to systems integration, we ensure robust, sea-worthy performance. We serve commercial fleets, offshore drilling units, and support vessels.",
    },
    {
      id: 2,
      link: "construction-division",
      logo: Construction,
      title: "Construction Division",
      description:
        "The Construction Division handles a wide range of civil, structural, and infrastructure development projects. We deliver end-to-end solutions for commercial, industrial, and institutional buildings. Our services include project planning, execution, and quality control to ensure timely completion and client satisfaction. We integrate sustainable construction practices with modern techniques. With a commitment to safety and compliance, we deliver durable, high-performance structures.",
    },
    {
      id: 3,
      link: "fabrication-and-machining-division",
      logo: Fabrication,
      title: "Fabrication & Machining Division",
      description:
        "Our Fabrication & Machining Division offers precision metalwork, including welding, CNC machining, and custom component manufacturing. We cater to industries like oil & gas, petrochemicals, and heavy engineering. With advanced machinery and skilled technicians, we produce parts that meet strict tolerances and quality standards. We support both high-volume and specialized custom fabrication needs. From concept to completion, we guarantee structural integrity and performance.",
    },
    {
      id: 4,
      link: "trading-division",
      logo: Trading,
      title: "Trading Division",
      description:
        "The Trading Division provides reliable sourcing and supply chain solutions for industrial and commercial clients. We offer a broad portfolio of equipment, tools, spare parts, and raw materials. Leveraging strong supplier relationships, we ensure timely procurement and competitive pricing. Our logistics and inventory management systems enhance operational efficiency. We are committed to supporting client needs with accuracy and accountability.",
    },
    {
      id: 5,
      link: "ict-division",
      logo: ICT,
      title: "ICT Division",
      description:
        "Our ICT Division delivers innovative technology solutions for enterprise needs. Services include IT infrastructure, cybersecurity, cloud integration, and software development. We help organizations embrace digital transformation with scalable and secure solutions. From network setups to data management, our experts ensure reliable and future-ready IT ecosystems. We empower businesses to thrive in an increasingly connected world.",
    },
    {
      id: 6,
      link: "facility-management-division",
      logo: Facility,
      title: "Facility Management Division",
      description:
        "The Facility Management Division ensures the seamless operation, maintenance, and optimization of built environments. Our services range from HVAC and electrical maintenance to cleaning, landscaping, and security. We use modern tools and smart technologies to manage facilities efficiently. Our goal is to enhance comfort, safety, and productivity within client premises. Tailored service models ensure cost-effectiveness and reliability.",
    },
    {
      id: 7,
      link: "joinery-division",
      logo: Joinery,
      title: "Joinery Division",
      description:
        "The Joinery Division specializes in custom woodwork, including doors, windows, cabinetry, and bespoke furniture. We blend craftsmanship with modern techniques to deliver high-quality interior and exterior joinery. Our team works with a variety of woods and finishes to meet architectural and design specifications. From residential to commercial projects, we provide durable and aesthetic wood solutions. Attention to detail and fine finishing are our hallmarks.",
    },
  ];

  const renderCard = (card, inCarousel) => (
    <div
      key={card.id}
      data-card
      className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-colors duration-300 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 ${
        inCarousel ? "snap-start shrink-0 w-[82vw] sm:w-[20rem]" : ""
      }`}
    >
      <div className="mb-5 grid">
        <img
          src={card.logo}
          alt={card.title}
          className="justify-items-start h-14 w-14 brightness-0 invert"
        />
      </div>
      <h3 className="font-roboto text-xl font-medium mb-2 text-white">
        {card.title}
      </h3>
      <p className="font-roboto font-light leading-relaxed text-white/70">
        {card.description}
      </p>
    </div>
  );

  if (carousel) {
    return (
      <div className="relative mt-6">
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-1 py-2"
        >
          {cards.map((card) => renderCard(card, true))}
        </div>

        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous divisions"
          className="absolute -left-2 top-1/2 hidden -translate-y-1/2 sm:flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#0a1428]/70 text-white backdrop-blur transition-colors duration-200 hover:border-[#2C95D2] hover:bg-[#2C95D2]"
        >
          <FaChevronLeft className="text-sm" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next divisions"
          className="absolute -right-2 top-1/2 hidden -translate-y-1/2 sm:flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#0a1428]/70 text-white backdrop-blur transition-colors duration-200 hover:border-[#2C95D2] hover:bg-[#2C95D2]"
        >
          <FaChevronRight className="text-sm" />
        </button>
      </div>
    );
  }

  return (
    <div className="mt-12 container mx-auto mb-16 px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {cards.map((card) => renderCard(card, false))}
    </div>
  );
};

export default ServiceCard;
