import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/about-us.png";
import aboutinnerbg from "../Assets/Images/our-solution.jpg";
import sustainability from "../Assets/Images/sustainability.png";
import innovative from "../Assets/Images/main5a.png";
import blasting from "../Assets/Images/main4.jpg";
import electrical from "../Assets/Images/main2.png";
import thermal from "../Assets/Images/main5.jpg";
import yellowicon from "../Assets/Icons/yellowicon.svg";
import pinkicon from "../Assets/Icons/pinkicon.svg";
import AboutUSComp from "../Components/AboutUSComp";
import { motion } from "framer-motion";
import { useT } from "../i18n/i18n";

// import AboutUSComp from '../Components/AboutUSComp';
const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const AboutUs = () => {
  const t = useT();

  const aboutdetails = [
    {
      logo: yellowicon,
      title: "Modular buildings solutions",
      titleAr: "حلول المباني المعيارية",
      description:
        "As trusted energy brokers and consultants, we understand the challenges of managing business energy needs.",
      descriptionAr:
        "بصفتنا وسطاء ومستشارين موثوقين في مجال الطاقة، ندرك تحديات إدارة احتياجات الطاقة للأعمال.",
    },
    {
      logo: pinkicon,
      title: "Living Quarters Refurbishment, Upgrade & Conversion solutions",
      titleAr: "حلول تجديد وحدات السكن وترقيتها وتحويلها",
      description:
        "It's no surprise that many organizations rely on experienced professionals like us for guidance and support.",
      descriptionAr:
        "ليس من المستغرب أن تعتمد العديد من المؤسسات على محترفين ذوي خبرة مثلنا للإرشاد والدعم.",
    },
    {
      logo: yellowicon,
      title: "Repair & Maintenance of HVAC, Piping & Electrical Systems",
      titleAr: "إصلاح وصيانة أنظمة التكييف والأنابيب والأنظمة الكهربائية",
      description:
        "It's no surprise that many organizations rely on experienced professionals like us for guidance and support.",
      descriptionAr:
        "ليس من المستغرب أن تعتمد العديد من المؤسسات على محترفين ذوي خبرة مثلنا للإرشاد والدعم.",
    },
    {
      logo: pinkicon,
      title: "Rig & Ship Repair solutions",
      titleAr: "حلول إصلاح الحفّارات والسفن",
      description:
        "It's no surprise that many organizations rely on experienced professionals like us for guidance and support.",
      descriptionAr:
        "ليس من المستغرب أن تعتمد العديد من المؤسسات على محترفين ذوي خبرة مثلنا للإرشاد والدعم.",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="bg-cover bg-center h-[clamp(18rem,46vh,30rem)] flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-roboto font-light text-white mb-4 text-center" style={{ letterSpacing: "-0.02em" }}>
            {t("About ", "نبذة عن ")}<span className="text-[#2C95D2]">{t("Company", "الشركة")}</span>
          </h1>
        </div>
      </div>
      <div className="w-full py-6 md:py-10">
        <h1 className="font-roboto text-4xl font-light mb-4 text-center md:text-start text-white" style={{ letterSpacing: "-0.02em" }}>
          {t("Where Sustainability & Excellence ", "حيث تلتقي الاستدامة و")}<span className="text-[#2C95D2]">{t("Converge", "التميّز")}</span>
        </h1>
        <p className="font-poppins text-justify text-lg mt-4 text-white/75">
          {t(
            "ALFA & Offshore Division, a proud part of the ALFA Group, stands as a leading ISO-certified company headquartered in Saudi Arabia. We are renowned for our expertise in Lump Sum Turnkey (LSTK) Projects, tailored to the marine, offshore, oil & gas, renewable energy, and defense sectors.",
            "يُعدّ قسم ألفا البحري والمنشآت البحرية، وهو جزء نفخر بانتمائه إلى مجموعة ألفا، شركة رائدة حاصلة على شهادة ISO ومقرّها المملكة العربية السعودية. ونحن معروفون بخبرتنا في مشاريع التسليم المفتاحي بالسعر الإجمالي (LSTK) المصمّمة لقطاعات البحرية والمنشآت البحرية والنفط والغاز والطاقة المتجددة والدفاع."
          )}
        </p>
        <p className="font-poppins text-justify text-lg mt-4 text-white/75">
          {t(
            "ALFA Group Established in 2014 and headquartered in Dammam, Saudi Arabia. ALFA Group is a steadily growing multi-division company supporting major industries across the Middle East. We specialize as a reliable subcontractor, delivering high-quality Engineering Support, Procurement Assistance, Fabrication & Construction(EPFC) services tailored to our Client's Project Needs Our capabilities span a wide range of sectors, including Oil & Gas, Renewable Energy, Marine & Offshore, Power & Utilities, Defense, Construction & Infrastructure, Petrochemical, Industrial Plants, and Commercial Projects. ALFA Group operates with a strong focus on quality, safety, and client satisfaction, backed by ISO certifications and adherence to international standards.",
            "تأسست مجموعة ألفا عام 2014 ويقع مقرها في الدمام بالمملكة العربية السعودية. ومجموعة ألفا شركة متعددة القطاعات تنمو باطّراد وتدعم الصناعات الكبرى في جميع أنحاء الشرق الأوسط. ونتخصص كمقاول من الباطن موثوق، نقدّم خدمات عالية الجودة في الدعم الهندسي والمساعدة في التوريد والتصنيع والإنشاء (EPFC) مصمّمة وفق احتياجات مشاريع عملائنا. وتمتدّ قدراتنا لتشمل مجموعة واسعة من القطاعات، بما في ذلك النفط والغاز والطاقة المتجددة والبحرية والمنشآت البحرية والطاقة والمرافق والدفاع والإنشاءات والبنية التحتية والبتروكيماويات والمنشآت الصناعية والمشاريع التجارية. وتعمل مجموعة ألفا بتركيز قوي على الجودة والسلامة ورضا العملاء، مدعومةً بشهادات ISO والالتزام بالمعايير الدولية."
          )}
        </p>
        <p className="font-poppins text-justify text-lg mt-4 text-white/75">
          {t(
            "We invest continuously in skilled manpower, advanced technologies, and operational excellence to support the success of our clients’ projects.",
            "نستثمر باستمرار في القوى العاملة الماهرة والتقنيات المتقدمة والتميّز التشغيلي لدعم نجاح مشاريع عملائنا."
          )}
        </p>
      </div>
      <AboutUSComp/>
      <div
        className="relative bg-cover bg-center pt-8 pb-8 flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutinnerbg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col p-4 md:p-24 items-center justify-center text-white">
          <h1 className="text-4xl font-roboto font-light text-white mt-8 text-center" style={{ letterSpacing: "-0.02em" }}>{t("OUR ", "")}<span className="text-[#2C95D2]">{t("SOLUTIONS", "حلولنا")}</span></h1>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutdetails.map((aboutdetail, idx) => (
              <motion.div
                key={aboutdetail.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:border-[#2C95D2]/50"
              >
                <div className="mb-4">
                  <img
                    src={aboutdetail.logo}
                    alt={`${t(aboutdetail.title, aboutdetail.titleAr)} ${t("Icon", "أيقونة")}`}
                    loading="lazy"
                    className="h-16 w-16 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-roboto font-light mb-2 text-white">
                  {t(aboutdetail.title, aboutdetail.titleAr)}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-16 md:flex-row md:justify-between p-6 mt-24 mb-16"
        >
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1
              className="text-4xl font-roboto font-light mb-4 text-center md:text-start text-white"
              style={{ letterSpacing: "-0.02em" }}
            >
              {t("Our ", "")}<span className="text-[#2C95D2]">{t("Services", "خدماتنا")}</span>
            </h1>
            <p className="text-lg mt-4 text-white/75">
              {t("The opportunity to work abroad is a popular prospect, one", "تُعدّ فرصة العمل في الخارج خيارًا مرغوبًا")}
            </p>
          </div>
          {/* <div className="md:w-1/2 mt-8 flex justify-center md:justify-end md:mt-24">
            <img
              src={sustainability}
              alt="About Us"
              className="w-auto h-auto"
            />
          </div> */}
        </motion.div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-16 md:flex-row md:justify-between p-6 mt-24 mb-16"
        >
          <div className="md:w-3/2 mb-6 md:mb-0">
            <h1
              className="text-4xl font-roboto font-light mb-4 text-center md:text-start text-white"
              style={{ letterSpacing: "-0.02em" }}
            >
              {t("Welding and Fabrication ", "خدمات ")}<span className="text-[#2C95D2]">{t("Services", "اللحام والتصنيع")}</span>
            </h1>
            <p className="text-lg mt-4 text-white/75">
              {t(
                "Precision welding and fabrication solutions for industrial, commercial, and custom projects with high-quality craftsmanship.",
                "حلول لحام وتصنيع دقيقة للمشاريع الصناعية والتجارية والمخصصة بحرفية عالية الجودة."
              )}
            </p>
          </div>
          <div className="md:w-2/2 flex justify-center md:justify-end">
            <div className="group me-24 h-48 w-48 overflow-hidden rounded-2xl ring-1 ring-white/10">
              <img src={innovative} alt={t("About Us", "نبذة عنا")} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-16 md:flex-row md:justify-between p-6 mb-16"
        >
          <div className="md:w-3/2 mb-6 md:mb-0">
            <h1
              className="text-4xl font-roboto font-light mb-4 text-center md:text-start text-white"
              style={{ letterSpacing: "-0.02em" }}
            >
              {t("Abrasive Blasting and ", "السفع الكاشط و")}<span className="text-[#2C95D2]">{t("Painting", "الطلاء")}</span>
            </h1>
            <p className="text-lg mt-4 text-white/75">
              {t(
                "Surface preparation and protective coatings using advanced abrasive blasting and industrial-grade painting techniques.",
                "تحضير الأسطح والطلاءات الواقية باستخدام تقنيات السفع الكاشط المتقدمة والطلاء الصناعي."
              )}
            </p>
          </div>
          <div className="md:w-2/2 flex justify-center md:justify-end">
            <div className="group me-24 h-48 w-48 overflow-hidden rounded-2xl ring-1 ring-white/10">
              <img src={blasting} alt={t("About Us", "نبذة عنا")} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-16 md:flex-row md:justify-between p-6 mb-16"
        >
          <div className="md:w-3/2 mb-6 md:mb-0">
            <h1
              className="font-roboto text-4xl font-light mb-4 text-center md:text-start text-white"
              style={{ letterSpacing: "-0.02em" }}
            >
              {t("Architectural, HVAC, Electrical, Plumbing, & Carpentry ", "خدمات ")}<span className="text-[#2C95D2]">{t("Services", "الأعمال المعمارية والتكييف والكهرباء والسباكة والنجارة")}</span>
            </h1>
            <p className="text-lg mt-4 text-white/75">
              {t(
                "Comprehensive building solutions, including HVAC, electrical, plumbing, carpentry, and architectural enhancements.",
                "حلول بناء شاملة تشمل التكييف والكهرباء والسباكة والنجارة والتحسينات المعمارية."
              )}
            </p>
          </div>
          <div className="md:w-2/2 flex justify-center md:justify-end">
            <div className="group me-24 h-48 w-48 overflow-hidden rounded-2xl ring-1 ring-white/10">
              <img src={electrical} alt={t("About Us", "نبذة عنا")} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-16 md:flex-row md:justify-between p-6 mb-16"
        >
          <div className="md:w-3/2 mb-6 md:mb-0">
            <h1
              className="text-4xl font-roboto font-light mb-4 text-center md:text-start text-white"
              style={{ letterSpacing: "-0.02em" }}
            >
              {t("Thermal and Acoustic Insulation ", "خدمات ")}<span className="text-[#2C95D2]">{t("Services", "العزل الحراري والصوتي")}</span>
            </h1>
            <p className="text-lg mt-4 text-white/75">
              {t(
                "Expert insulation services to improve energy efficiency and soundproofing for residential, commercial, and industrial spaces.",
                "خدمات عزل احترافية لتحسين كفاءة الطاقة والعزل الصوتي للمساحات السكنية والتجارية والصناعية."
              )}
            </p>
          </div>
          <div className="md:w-2/2 flex justify-center md:justify-end">
            <div className="group me-24 h-48 w-48 overflow-hidden rounded-2xl ring-1 ring-white/10">
              <img src={thermal} alt={t("About Us", "نبذة عنا")} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>
        </motion.div>
        <p className="font-poppins text-justify text-lg mt-4 text-white/75">
          {t(
            "With a strong commitment to excellence and innovation, ALFA provides state-of-the-art modular building solutions. These services meet rigorous industry standards ATEX, IECEx, NORSOK, NFPA, AWS or any other specific requirements. We collaborate with globally recognized certification bodies, including ABS, BV, DNV, and Lloyd’s, ensuring the highest levels of safety and quality. At ALFA, our mission is to create bespoke engineering solutions that not only meet but exceed client expectations, all while fostering sustainable practices and adhering to the strictest quality benchmarks.",
            "بالتزام راسخ بالتميّز والابتكار، تقدّم ألفا حلول مباني معيارية متطورة. وتلبّي هذه الخدمات معايير الصناعة الصارمة ATEX وIECEx وNORSOK وNFPA وAWS أو أي متطلبات محددة أخرى. ونتعاون مع جهات اعتماد معترف بها عالميًا، بما في ذلك ABS وBV وDNV وLloyd’s، بما يضمن أعلى مستويات السلامة والجودة. وفي ألفا، تتمثّل مهمتنا في ابتكار حلول هندسية مصمّمة خصيصًا لا تلبّي توقعات العملاء فحسب بل تتجاوزها، مع تعزيز الممارسات المستدامة والالتزام بأعلى معايير الجودة."
          )}{" "}
        </p>
      </div>
    </>
  );
};

export default AboutUs;
