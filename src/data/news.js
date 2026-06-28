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

// Arabic labels for the news categories. Keys remain the English values used
// for filtering; do not change them.
export const NEWS_CATEGORIES_AR = {
  Projects: "المشاريع",
  Operations: "العمليات",
  Industry: "القطاع",
  Company: "الشركة",
};

export const news = [
  {
    slug: "offshore-living-quarters-module-delivered",
    title: "ALFA Delivers Offshore Living-Quarters Module to International Standards",
    titleAr: "ألفا تسلّم وحدة سكن بحرية وفق المعايير الدولية",
    category: "Projects",
    categoryAr: "المشاريع",
    date: "June 12, 2026",
    image: marine,
    excerpt:
      "Our Marine & Offshore Division has handed over a fully outfitted living-quarters module built to ABS and DNV requirements.",
    excerptAr:
      "سلّم قطاع الأعمال البحرية والبحار لدينا وحدة سكن مجهّزة بالكامل مبنية وفق متطلبات ABS وDNV.",
    body: [
      "ALFA Group's Marine & Offshore Division has completed and handed over a fully outfitted offshore living-quarters module, engineered and constructed to the highest international marine standards including ABS and DNV requirements.",
      "Delivered as a Lump Sum Turnkey scope, the module covered design, fabrication, systems integration and commissioning. The project reflects our continued focus on safety, quality and on-time delivery for clients across the oil & gas and offshore sectors.",
      "Work was carried out in close coordination with recognised certification bodies, ensuring the structure met rigorous ATEX, IECEx and NORSOK criteria before sail-away.",
    ],
    bodyAr: [
      "أنجز قطاع الأعمال البحرية والبحار في مجموعة ألفا وحدة سكن بحرية مجهّزة بالكامل وسلّمها، وقد صُممت ونُفّذت وفق أعلى المعايير البحرية الدولية، بما في ذلك متطلبات ABS وDNV.",
      "نُفّذ المشروع بنطاق تسليم مفتاح باليد بمبلغ إجمالي مقطوع، وشمل التصميم والتصنيع وتكامل الأنظمة والتشغيل التجريبي. ويعكس المشروع تركيزنا المستمر على السلامة والجودة والتسليم في الموعد المحدد لعملائنا في قطاعي النفط والغاز والأعمال البحرية.",
      "أُنجز العمل بالتنسيق الوثيق مع جهات الاعتماد المعترف بها، بما يضمن استيفاء المنشأة لمعايير ATEX وIECEx وNORSOK الصارمة قبل الإبحار.",
    ],
  },
  {
    slug: "construction-division-industrial-facility-groundbreaking",
    title: "Construction Division Breaks Ground on Industrial Facility in the Eastern Province",
    titleAr: "قطاع الإنشاءات يبدأ أعمال منشأة صناعية في المنطقة الشرقية",
    category: "Projects",
    categoryAr: "المشاريع",
    date: "May 28, 2026",
    image: construction,
    excerpt:
      "A new civil and structural programme begins, combining sustainable practices with modern execution methods.",
    excerptAr:
      "انطلاق برنامج جديد للأعمال المدنية والإنشائية يجمع بين الممارسات المستدامة وأساليب التنفيذ الحديثة.",
    body: [
      "The ALFA Construction Division has commenced civil and structural works on a new industrial facility in the Eastern Province, marking another milestone in the division's growing portfolio of infrastructure projects.",
      "The scope spans project planning, execution and quality control, with sustainable construction practices integrated throughout. Our teams are applying modern methods to ensure timely completion and long-term durability.",
      "The programme reinforces ALFA's role as a reliable delivery partner for commercial, industrial and institutional developments across the Kingdom.",
    ],
    bodyAr: [
      "باشر قطاع الإنشاءات في ألفا الأعمال المدنية والإنشائية لمنشأة صناعية جديدة في المنطقة الشرقية، في إنجاز جديد يضاف إلى محفظة القطاع المتنامية من مشاريع البنية التحتية.",
      "يشمل نطاق العمل تخطيط المشروع وتنفيذه ومراقبة الجودة، مع دمج ممارسات البناء المستدام في جميع مراحله. وتطبّق فرقنا أساليب حديثة لضمان الإنجاز في الوقت المحدد والمتانة على المدى الطويل.",
      "يعزّز البرنامج دور ألفا بوصفها شريك تنفيذ موثوقًا للمشاريع التجارية والصناعية والمؤسسية في مختلف أنحاء المملكة.",
    ],
  },
  {
    slug: "fabrication-cnc-machining-capacity-expansion",
    title: "Precision Fabrication Capacity Expands with New CNC Machining Line",
    titleAr: "توسيع طاقة التصنيع الدقيق بإضافة خط تشغيل CNC جديد",
    category: "Operations",
    categoryAr: "العمليات",
    date: "May 9, 2026",
    image: fabrication,
    excerpt:
      "Additional CNC machining capability strengthens our ability to produce parts to strict tolerances at scale.",
    excerptAr:
      "تعزّز قدرات تشغيل CNC الإضافية إمكاناتنا في إنتاج القطع وفق حدود تفاوت دقيقة وعلى نطاق واسع.",
    body: [
      "ALFA's Fabrication & Machining Division has expanded its precision metalwork capacity with the addition of a new CNC machining line, increasing throughput for both high-volume and specialised custom work.",
      "The investment supports clients in oil & gas, petrochemicals and heavy engineering who require components manufactured to strict tolerances and quality standards.",
      "From welding and structural fabrication to fine machining, the division continues to guarantee structural integrity and performance from concept to completion.",
    ],
    bodyAr: [
      "وسّع قطاع التصنيع والتشغيل الآلي في ألفا طاقته في الأعمال المعدنية الدقيقة بإضافة خط تشغيل CNC جديد، ما رفع معدل الإنتاج للأعمال الكبيرة والأعمال المتخصصة المخصّصة على حد سواء.",
      "يدعم هذا الاستثمار العملاء في قطاعات النفط والغاز والبتروكيماويات والهندسة الثقيلة الذين يحتاجون إلى مكوّنات مصنّعة وفق حدود تفاوت دقيقة ومعايير جودة صارمة.",
      "من اللحام والتصنيع الإنشائي إلى التشغيل الدقيق، يواصل القطاع ضمان السلامة الإنشائية والأداء من الفكرة حتى الإنجاز.",
    ],
  },
  {
    slug: "gulf-energy-transition-industrial-opportunities",
    title: "Gulf Energy Transition Opens New Opportunities for Industrial Contractors",
    titleAr: "تحوّل الطاقة في الخليج يفتح فرصًا جديدة للمقاولين الصناعيين",
    category: "Industry",
    categoryAr: "القطاع",
    date: "April 22, 2026",
    image: gas,
    excerpt:
      "As the region accelerates investment in renewables and cleaner energy, demand grows for capable multi-division partners.",
    excerptAr:
      "مع تسارع استثمارات المنطقة في الطاقة المتجددة والأنظف، يتزايد الطلب على الشركاء متعددي القطاعات ذوي القدرات العالية.",
    body: [
      "The Gulf region's accelerating energy transition is reshaping demand across the industrial supply chain, creating new opportunities for contractors able to support both conventional and renewable energy projects.",
      "ALFA Group's diversified capabilities — spanning marine & offshore, construction, fabrication and facility management — position the company to support clients through this shift with integrated engineering, procurement and construction support.",
      "Our continued investment in skilled manpower and advanced technologies ensures readiness for the evolving needs of the energy sector.",
    ],
    bodyAr: [
      "يعيد التحوّل المتسارع في قطاع الطاقة بمنطقة الخليج تشكيل الطلب على امتداد سلسلة التوريد الصناعية، ما يتيح فرصًا جديدة للمقاولين القادرين على دعم مشاريع الطاقة التقليدية والمتجددة على حد سواء.",
      "تؤهّل القدرات المتنوعة لمجموعة ألفا — التي تشمل الأعمال البحرية والبحار والإنشاءات والتصنيع وإدارة المرافق — الشركةَ لدعم عملائها خلال هذا التحوّل عبر خدمات متكاملة في الهندسة والمشتريات والإنشاء.",
      "يضمن استثمارنا المستمر في الكوادر المؤهلة والتقنيات المتقدمة جاهزيتنا للاحتياجات المتطورة لقطاع الطاقة.",
    ],
  },
  {
    slug: "smart-building-low-current-systems-go-live",
    title: "Smart-Building and Low-Current Systems Go Live for Enterprise Client",
    titleAr: "تشغيل أنظمة المباني الذكية والتيار المنخفض لعميل مؤسسي",
    category: "Operations",
    categoryAr: "العمليات",
    date: "April 3, 2026",
    image: ict,
    excerpt:
      "Our ICT Division has commissioned an integrated smart-building and low-current solution for an enterprise facility.",
    excerptAr:
      "شغّل قطاع تقنية المعلومات والاتصالات لدينا حلًّا متكاملًا للمباني الذكية والتيار المنخفض لمنشأة مؤسسية.",
    body: [
      "ALFA's ICT Division has successfully commissioned an integrated smart-building and low-current systems solution for an enterprise client, delivering secure, scalable infrastructure designed for reliability.",
      "The deployment covered network infrastructure, structured cabling and smart-building controls, helping the client embrace digital transformation with future-ready systems.",
      "The division continues to deliver end-to-end ICT solutions that empower organisations to operate efficiently in an increasingly connected environment.",
    ],
    bodyAr: [
      "شغّل قطاع تقنية المعلومات والاتصالات في ألفا بنجاح حلًّا متكاملًا لأنظمة المباني الذكية والتيار المنخفض لعميل مؤسسي، موفّرًا بنية تحتية آمنة وقابلة للتوسّع ومصممة للموثوقية.",
      "شمل التنفيذ البنية التحتية للشبكات والكابلات المنظّمة وأنظمة التحكم في المباني الذكية، بما ساعد العميل على تبنّي التحول الرقمي بأنظمة مهيّأة للمستقبل.",
      "يواصل القطاع تقديم حلول متكاملة في تقنية المعلومات والاتصالات تمكّن المؤسسات من العمل بكفاءة في بيئة متزايدة الترابط.",
    ],
  },
  {
    slug: "facility-management-operational-milestone",
    title: "Integrated Facility Management Programme Reaches Operational Milestone",
    titleAr: "برنامج إدارة المرافق المتكامل يبلغ إنجازًا تشغيليًا",
    category: "Operations",
    categoryAr: "العمليات",
    date: "March 18, 2026",
    image: facility,
    excerpt:
      "A long-running facilities programme records consistent uptime through smart, technology-led maintenance.",
    excerptAr:
      "برنامج مرافق طويل الأمد يحقق استمرارية تشغيل ثابتة عبر صيانة ذكية تعتمد على التقنية.",
    body: [
      "ALFA's Facility Management Division has marked an operational milestone on a long-running programme, sustaining consistent uptime across the managed estate through proactive, technology-led maintenance.",
      "Services spanning HVAC, electrical maintenance, cleaning, landscaping and security are coordinated with modern tools and smart technologies to enhance comfort, safety and productivity within client premises.",
      "Tailored service models continue to ensure cost-effectiveness and reliability for every facility under management.",
    ],
    bodyAr: [
      "حقّق قطاع إدارة المرافق في ألفا إنجازًا تشغيليًا في برنامج طويل الأمد، إذ حافظ على استمرارية تشغيل ثابتة في المنشآت المُدارة عبر صيانة استباقية تعتمد على التقنية.",
      "تُنسَّق الخدمات التي تشمل التكييف والتهوية والصيانة الكهربائية والنظافة وتنسيق المواقع والأمن باستخدام أدوات حديثة وتقنيات ذكية لتعزيز الراحة والسلامة والإنتاجية داخل منشآت العملاء.",
      "تواصل نماذج الخدمة المصممة وفق الاحتياجات ضمان الجدوى الاقتصادية والموثوقية لكل منشأة قيد الإدارة.",
    ],
  },
  {
    slug: "supply-chain-resilience-regional-sourcing",
    title: "Supply-Chain Resilience: Strengthening Industrial Sourcing Across the Region",
    titleAr: "مرونة سلسلة التوريد: تعزيز التوريد الصناعي على مستوى المنطقة",
    category: "Operations",
    categoryAr: "العمليات",
    date: "February 27, 2026",
    image: trading,
    excerpt:
      "The Trading Division deepens supplier relationships to keep critical materials moving on schedule.",
    excerptAr:
      "قطاع التجارة يعمّق علاقاته مع المورّدين لضمان تدفّق المواد الحيوية في مواعيدها.",
    body: [
      "ALFA's Trading Division has further strengthened its sourcing network, deepening supplier relationships to keep equipment, spare parts and raw materials moving reliably for industrial and commercial clients.",
      "By combining strong supplier partnerships with disciplined logistics and inventory management, the division supports timely procurement and competitive pricing across the region.",
      "The result is greater supply-chain resilience for clients operating in demanding industrial environments.",
    ],
    bodyAr: [
      "عزّز قطاع التجارة في ألفا شبكة التوريد لديه بمزيد من القوة، إذ عمّق علاقاته مع المورّدين لضمان تدفّق المعدات وقطع الغيار والمواد الخام بموثوقية للعملاء الصناعيين والتجاريين.",
      "بالجمع بين الشراكات القوية مع المورّدين والإدارة المنضبطة للخدمات اللوجستية والمخزون، يدعم القطاع المشتريات في الوقت المناسب والأسعار التنافسية على مستوى المنطقة.",
      "وتتمثل النتيجة في تعزيز مرونة سلسلة التوريد للعملاء العاملين في بيئات صناعية متطلبة.",
    ],
  },
  {
    slug: "iso-certifications-renewed-all-divisions",
    title: "ALFA Group Renews ISO Certifications Across All Divisions",
    titleAr: "مجموعة ألفا تجدّد شهادات الأيزو في جميع قطاعاتها",
    category: "Company",
    categoryAr: "الشركة",
    date: "February 5, 2026",
    image: facilityPhoto,
    excerpt:
      "Renewed certifications reaffirm our commitment to quality, safety and international standards.",
    excerptAr:
      "تجديد الشهادات يؤكد من جديد التزامنا بالجودة والسلامة والمعايير الدولية.",
    body: [
      "ALFA Group has renewed its ISO certifications across all operating divisions, reaffirming a group-wide commitment to quality, safety and adherence to international standards.",
      "The certifications underpin our management systems and reflect continuous investment in operational excellence, from engineering and fabrication to construction and facility management.",
      "Maintaining these standards remains central to how ALFA delivers timely, safe and value-driven outcomes for clients.",
    ],
    bodyAr: [
      "جدّدت مجموعة ألفا شهادات الأيزو في جميع قطاعاتها التشغيلية، مؤكّدةً من جديد التزامًا على مستوى المجموعة بالجودة والسلامة والامتثال للمعايير الدولية.",
      "ترتكز أنظمتنا الإدارية على هذه الشهادات التي تعكس استثمارًا مستمرًا في التميّز التشغيلي، من الهندسة والتصنيع إلى الإنشاء وإدارة المرافق.",
      "ويظل الحفاظ على هذه المعايير محوريًا في الطريقة التي تقدّم بها ألفا نتائج آمنة وفي الوقت المناسب وذات قيمة لعملائها.",
    ],
  },
  {
    slug: "local-content-vision-2030-commitments",
    title: "ALFA Group Advances Local-Content Commitments Under Vision 2030",
    titleAr: "مجموعة ألفا تعزّز التزامات المحتوى المحلي ضمن رؤية 2030",
    category: "Company",
    categoryAr: "الشركة",
    date: "January 16, 2026",
    image: group,
    excerpt:
      "Investing in local talent, suppliers and capabilities to support the Kingdom's industrial growth agenda.",
    excerptAr:
      "استثمار في الكفاءات والمورّدين والقدرات المحلية لدعم أجندة النمو الصناعي في المملكة.",
    body: [
      "ALFA Group continues to advance its local-content commitments in line with Saudi Vision 2030, investing in local talent, suppliers and industrial capabilities across its divisions.",
      "By developing skilled manpower and strengthening regional supplier ecosystems, ALFA supports the Kingdom's broader objectives for economic diversification and industrial growth.",
      "These efforts reinforce the company's long-term role as a trusted multi-division partner contributing to national development.",
    ],
    bodyAr: [
      "تواصل مجموعة ألفا تعزيز التزاماتها في المحتوى المحلي بما يتوافق مع رؤية السعودية 2030، عبر الاستثمار في الكفاءات والمورّدين والقدرات الصناعية المحلية في مختلف قطاعاتها.",
      "ومن خلال تطوير الكوادر المؤهلة وتعزيز منظومات المورّدين الإقليمية، تدعم ألفا أهداف المملكة الأوسع في التنويع الاقتصادي والنمو الصناعي.",
      "وترسّخ هذه الجهود دور الشركة على المدى الطويل بوصفها شريكًا موثوقًا متعدد القطاعات يسهم في التنمية الوطنية.",
    ],
  },
];

export const getNewsBySlug = (slug) => news.find((n) => n.slug === slug);

const AR_MONTHS = {
  January: "يناير",
  February: "فبراير",
  March: "مارس",
  April: "أبريل",
  May: "مايو",
  June: "يونيو",
  July: "يوليو",
  August: "أغسطس",
  September: "سبتمبر",
  October: "أكتوبر",
  November: "نوفمبر",
  December: "ديسمبر",
};

// Convert an English date like "June 12, 2026" into Arabic "12 يونيو 2026".
export const formatNewsDate = (dateStr, lang) => {
  if (lang !== "ar" || !dateStr) return dateStr;
  const m = String(dateStr).match(/^([A-Za-z]+)\s+(\d+),\s*(\d+)$/);
  if (!m) return dateStr;
  const [, mon, day, year] = m;
  return `${day} ${AR_MONTHS[mon] || mon} ${year}`;
};
