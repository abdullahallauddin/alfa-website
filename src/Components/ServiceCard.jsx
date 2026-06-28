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
import useDragScroll from "../hooks/useDragScroll";
import { useT } from "../i18n/i18n";

const ServiceCard = ({ carousel = false }) => {
  const t = useT();
  const trackRef = useRef(null);
  useDragScroll(trackRef);

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
      titleAr: "قطاع البحرية والمنشآت البحرية",
      description:
        "Our Marine & Offshore Division specializes in providing comprehensive services for the maritime and offshore industries. We support shipbuilding, repair, and offshore platform maintenance with a strong focus on safety and technical excellence. Our team is experienced in delivering turnkey solutions that meet international marine standards. From hull fabrication to systems integration, we ensure robust, sea-worthy performance. We serve commercial fleets, offshore drilling units, and support vessels.",
      descriptionAr:
        "يتخصص قطاع البحرية والمنشآت البحرية لدينا في تقديم خدمات شاملة للصناعات البحرية والمنشآت البحرية. نقدّم الدعم في بناء السفن وإصلاحها وصيانة المنصات البحرية مع تركيز قوي على السلامة والتميّز الفني. ويتمتّع فريقنا بالخبرة في تقديم حلول متكاملة تلبّي المعايير البحرية الدولية. ومن تصنيع الهياكل إلى تكامل الأنظمة، نضمن أداءً متيناً وصالحاً للملاحة البحرية. ونخدم الأساطيل التجارية ووحدات الحفر البحرية وسفن الدعم.",
    },
    {
      id: 2,
      link: "construction-division",
      logo: Construction,
      title: "Construction Division",
      titleAr: "قطاع الإنشاءات",
      description:
        "The Construction Division handles a wide range of civil, structural, and infrastructure development projects. We deliver end-to-end solutions for commercial, industrial, and institutional buildings. Our services include project planning, execution, and quality control to ensure timely completion and client satisfaction. We integrate sustainable construction practices with modern techniques. With a commitment to safety and compliance, we deliver durable, high-performance structures.",
      descriptionAr:
        "يتولى قطاع الإنشاءات مجموعة واسعة من مشاريع التطوير المدنية والإنشائية والبنية التحتية. ونقدّم حلولاً متكاملة للمباني التجارية والصناعية والمؤسسية. وتشمل خدماتنا تخطيط المشاريع وتنفيذها ومراقبة الجودة لضمان الإنجاز في الوقت المحدد ورضا العملاء. وندمج ممارسات البناء المستدام مع التقنيات الحديثة. وبالتزامنا بالسلامة والامتثال، نقدّم منشآت متينة وعالية الأداء.",
    },
    {
      id: 3,
      link: "fabrication-and-machining-division",
      logo: Fabrication,
      title: "Fabrication & Machining Division",
      titleAr: "قطاع التصنيع والتشكيل المعدني",
      description:
        "Our Fabrication & Machining Division offers precision metalwork, including welding, CNC machining, and custom component manufacturing. We cater to industries like oil & gas, petrochemicals, and heavy engineering. With advanced machinery and skilled technicians, we produce parts that meet strict tolerances and quality standards. We support both high-volume and specialized custom fabrication needs. From concept to completion, we guarantee structural integrity and performance.",
      descriptionAr:
        "يقدّم قطاع التصنيع والتشكيل المعدني لدينا أعمالاً معدنية دقيقة تشمل اللحام والتصنيع باستخدام آلات التحكم الرقمي (CNC) وتصنيع المكونات المخصصة. ونخدم صناعات مثل النفط والغاز والبتروكيماويات والهندسة الثقيلة. وبفضل الآلات المتطورة والفنيين المهرة، ننتج قطعاً تلبّي أدق المواصفات ومعايير الجودة. وندعم احتياجات التصنيع عالية الحجم والتصنيع المخصص المتخصص على حدٍّ سواء. ومن الفكرة إلى الإنجاز، نضمن السلامة الإنشائية والأداء.",
    },
    {
      id: 4,
      link: "trading-division",
      logo: Trading,
      title: "Trading Division",
      titleAr: "قطاع التجارة والتوريد",
      description:
        "The Trading Division provides reliable sourcing and supply chain solutions for industrial and commercial clients. We offer a broad portfolio of equipment, tools, spare parts, and raw materials. Leveraging strong supplier relationships, we ensure timely procurement and competitive pricing. Our logistics and inventory management systems enhance operational efficiency. We are committed to supporting client needs with accuracy and accountability.",
      descriptionAr:
        "يوفّر قطاع التجارة والتوريد حلولاً موثوقة للتوريد وسلاسل الإمداد للعملاء الصناعيين والتجاريين. ونقدّم مجموعة واسعة من المعدات والأدوات وقطع الغيار والمواد الخام. ومن خلال علاقاتنا القوية مع الموردين، نضمن التوريد في الوقت المناسب والأسعار التنافسية. وتعزّز أنظمتنا للخدمات اللوجستية وإدارة المخزون الكفاءة التشغيلية. ونلتزم بدعم احتياجات العملاء بدقة ومسؤولية.",
    },
    {
      id: 5,
      link: "ict-division",
      logo: ICT,
      title: "ICT Division",
      titleAr: "قطاع تقنية المعلومات والاتصالات",
      description:
        "Our ICT Division delivers innovative technology solutions for enterprise needs. Services include IT infrastructure, cybersecurity, cloud integration, and software development. We help organizations embrace digital transformation with scalable and secure solutions. From network setups to data management, our experts ensure reliable and future-ready IT ecosystems. We empower businesses to thrive in an increasingly connected world.",
      descriptionAr:
        "يقدّم قطاع تقنية المعلومات والاتصالات لدينا حلولاً تقنية مبتكرة لاحتياجات المؤسسات. وتشمل الخدمات البنية التحتية لتقنية المعلومات والأمن السيبراني وتكامل الحوسبة السحابية وتطوير البرمجيات. ونساعد المؤسسات على تبنّي التحول الرقمي بحلول آمنة وقابلة للتوسّع. ومن إعداد الشبكات إلى إدارة البيانات، يضمن خبراؤنا منظومات تقنية معلومات موثوقة وجاهزة للمستقبل. ونمكّن الشركات من الازدهار في عالمٍ متزايد الاتصال.",
    },
    {
      id: 6,
      link: "facility-management-division",
      logo: Facility,
      title: "Facility Management Division",
      titleAr: "قطاع إدارة المرافق",
      description:
        "The Facility Management Division ensures the seamless operation, maintenance, and optimization of built environments. Our services range from HVAC and electrical maintenance to cleaning, landscaping, and security. We use modern tools and smart technologies to manage facilities efficiently. Our goal is to enhance comfort, safety, and productivity within client premises. Tailored service models ensure cost-effectiveness and reliability.",
      descriptionAr:
        "يضمن قطاع إدارة المرافق التشغيل السلس والصيانة والتحسين للبيئات المبنية. وتتراوح خدماتنا من صيانة أنظمة التكييف والتهوية والكهرباء إلى التنظيف وتنسيق المساحات الخضراء والأمن. ونستخدم الأدوات الحديثة والتقنيات الذكية لإدارة المرافق بكفاءة. وهدفنا هو تعزيز الراحة والسلامة والإنتاجية داخل مقار عملائنا. وتضمن نماذج الخدمة المصمّمة خصيصاً فعالية التكلفة والموثوقية.",
    },
    {
      id: 7,
      link: "joinery-division",
      logo: Joinery,
      title: "Joinery Division",
      titleAr: "قطاع أعمال النجارة",
      description:
        "The Joinery Division specializes in custom woodwork, including doors, windows, cabinetry, and bespoke furniture. We blend craftsmanship with modern techniques to deliver high-quality interior and exterior joinery. Our team works with a variety of woods and finishes to meet architectural and design specifications. From residential to commercial projects, we provide durable and aesthetic wood solutions. Attention to detail and fine finishing are our hallmarks.",
      descriptionAr:
        "يتخصص قطاع أعمال النجارة في الأعمال الخشبية المخصصة، بما في ذلك الأبواب والنوافذ والخزائن والأثاث المصمّم حسب الطلب. ونمزج الحرفية مع التقنيات الحديثة لتقديم أعمال نجارة داخلية وخارجية عالية الجودة. ويعمل فريقنا مع مجموعة متنوعة من الأخشاب والتشطيبات لتلبية المواصفات المعمارية والتصميمية. ومن المشاريع السكنية إلى التجارية، نقدّم حلولاً خشبية متينة وجمالية. ويُعدّ الاهتمام بالتفاصيل والتشطيب الدقيق من السمات المميزة لنا.",
    },
  ];

  const renderCard = (card, inCarousel) => (
    <div
      key={card.id}
      data-card
      className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-colors duration-300 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 ${
        inCarousel ? "shrink-0 w-[82vw] sm:w-[20rem]" : ""
      }`}
    >
      <div className="mb-5 grid">
        <img
          src={card.logo}
          alt={t(card.title, card.titleAr)}
          className="justify-items-start h-14 w-14 brightness-0 invert"
        />
      </div>
      <h3 className="font-roboto text-xl font-medium mb-2 text-white">
        {t(card.title, card.titleAr)}
      </h3>
      <p className="font-roboto font-light leading-relaxed text-white/70">
        {t(card.description, card.descriptionAr)}
      </p>
    </div>
  );

  if (carousel) {
    return (
      <div className="relative mt-6">
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto no-scrollbar px-1 py-2 cursor-grab select-none"
        >
          {cards.map((card) => renderCard(card, true))}
        </div>

        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label={t("Previous divisions", "القطاعات السابقة")}
          className="absolute -left-2 top-1/2 hidden -translate-y-1/2 sm:flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#0a1428]/70 text-white backdrop-blur transition-colors duration-200 hover:border-[#2C95D2] hover:bg-[#2C95D2]"
        >
          <FaChevronLeft className="text-sm rtl-flip" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label={t("Next divisions", "القطاعات التالية")}
          className="absolute -right-2 top-1/2 hidden -translate-y-1/2 sm:flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#0a1428]/70 text-white backdrop-blur transition-colors duration-200 hover:border-[#2C95D2] hover:bg-[#2C95D2]"
        >
          <FaChevronRight className="text-sm rtl-flip" />
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
