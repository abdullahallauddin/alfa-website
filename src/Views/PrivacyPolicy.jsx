import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/about-us.png";
import { Accordion, AccordionItem } from "../Components/Accordion";
import { useT } from "../i18n/i18n";

const LAST_UPDATED = "27 June 2026";

const PrivacyPolicy = () => {
  const t = useT();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className="bg-cover bg-center h-[clamp(18rem,46vh,30rem)] flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1
            className="text-5xl font-light mb-4 text-center text-white font-roboto"
            style={{ letterSpacing: "-0.02em" }}
          >
            {t("Privacy", "سياسة")} <span className="text-[#2C95D2]">{t("Policy", "الخصوصية")}</span>
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16">
        <p className="text-sm text-white/45">{t("Last updated:", "آخر تحديث:")} {t(LAST_UPDATED, "27 يونيو 2026")}</p>
        <h2
          className="text-3xl md:text-4xl font-light mt-3 mb-4 text-white font-roboto"
          style={{ letterSpacing: "-0.02em" }}
        >
          {t("Privacy Policy", "سياسة الخصوصية")}
        </h2>
        <p className="text-lg mt-4 text-white/75 leading-relaxed">
          {t(
            "ALFA Marine Industrial Services Company (“ALFA”, “we”, “our” or “us”) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, store and protect personal data when you visit our website or interact with us, and the rights available to you. We process personal data in accordance with the Personal Data Protection Law of the Kingdom of Saudi Arabia (Royal Decree No. M/19 of 1443H) and its Implementing Regulations (“PDPL”).",
            "تحترم شركة ألفا البحرية للخدمات الصناعية («ألفا» أو «نحن» أو «لنا») خصوصيتك وتلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمعنا للبيانات الشخصية واستخدامها والإفصاح عنها وتخزينها وحمايتها عند زيارتك لموقعنا الإلكتروني أو تعاملك معنا، والحقوق المتاحة لك. نقوم بمعالجة البيانات الشخصية وفقاً لنظام حماية البيانات الشخصية في المملكة العربية السعودية (المرسوم الملكي رقم م/19 لعام 1443هـ) ولائحته التنفيذية («النظام»)."
          )}
        </p>

        {/* Data controller summary */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-roboto text-lg font-medium text-white">
            {t("Data Controller", "المتحكم في البيانات")}
          </h3>
          <span className="mt-3 mb-4 block h-px w-10 bg-[#2C95D2]" />
          <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-2 text-[15px] text-white/75">
            <div>
              <dt className="text-white/45">{t("Entity", "الجهة")}</dt>
              <dd className="text-white/85">
                {t(
                  "ALFA Marine Industrial Services Company",
                  "شركة ألفا البحرية للخدمات الصناعية"
                )}
              </dd>
            </div>
            <div>
              <dt className="text-white/45">
                {t("Unified National / CR Number", "الرقم الوطني الموحد / السجل التجاري")}
              </dt>
              <dd className="text-white/85">7028203037</dd>
            </div>
            <div>
              <dt className="text-white/45">
                {t("VAT Registration Number", "رقم التسجيل في ضريبة القيمة المضافة")}
              </dt>
              <dd className="text-white/85">312214760200003</dd>
            </div>
            <div>
              <dt className="text-white/45">{t("Registered Address", "العنوان المسجل")}</dt>
              <dd className="text-white/85">
                {t(
                  "Building 4855, Prince Mansour Street, Prince Muhammad Ibn Saud District, Dammam 32241, Kingdom of Saudi Arabia",
                  "مبنى 4855، شارع الأمير منصور، حي الأمير محمد بن سعود، الدمام 32241، المملكة العربية السعودية"
                )}
              </dd>
            </div>
            <div>
              <dt className="text-white/45">{t("Email", "البريد الإلكتروني")}</dt>
              <dd>
                <a
                  href="mailto:info@alfamarinesa.com"
                  className="text-[#2C95D2] hover:underline"
                >
                  info@alfamarinesa.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-white/45">{t("Phone", "الهاتف")}</dt>
              <dd>
                <a
                  href="tel:+966138052528"
                  className="text-[#2C95D2] hover:underline"
                >
                  <bdi dir="ltr">+966 13 805 2528</bdi>
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-8">
          <Accordion allowMultiple defaultOpen={[0]}>
            <AccordionItem
              id={0}
              title={t("1. Scope of this Policy", "1. نطاق هذه السياسة")}
            >
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                {t(
                  "This Policy applies to personal data we process about visitors to our website, individuals who contact us or submit enquiries, prospective clients, suppliers, job applicants, and other individuals whose personal data we handle. It covers our website and its subdomains. Third-party websites linked from our site are governed by their own privacy policies.",
                  "تنطبق هذه السياسة على البيانات الشخصية التي نعالجها عن زوار موقعنا الإلكتروني، والأفراد الذين يتواصلون معنا أو يقدمون استفسارات، والعملاء المحتملين، والموردين، والمتقدمين للوظائف، وغيرهم من الأفراد الذين نتعامل مع بياناتهم الشخصية. وتشمل موقعنا الإلكتروني ونطاقاته الفرعية. أما المواقع الإلكترونية التابعة لأطراف ثالثة والمرتبطة من موقعنا فتخضع لسياسات الخصوصية الخاصة بها."
                )}
              </p>
            </AccordionItem>

            <AccordionItem
              id={1}
              title={t("2. Personal Data We Collect", "2. البيانات الشخصية التي نجمعها")}
            >
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                {t(
                  "Depending on how you interact with us, we may collect:",
                  "بناءً على طريقة تعاملك معنا، قد نجمع ما يلي:"
                )}
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-white/75 marker:text-[#2C95D2]">
                <li>
                  {t(
                    "Identity & contact data — name, email address, phone number, company/organization name.",
                    "بيانات الهوية والاتصال — الاسم، وعنوان البريد الإلكتروني، ورقم الهاتف، واسم الشركة/المؤسسة."
                  )}
                </li>
                <li>
                  {t(
                    "Enquiry & correspondence data — the content of messages, inquiries, applications, supplier registrations, or complaints you send us.",
                    "بيانات الاستفسارات والمراسلات — محتوى الرسائل والاستفسارات والطلبات وتسجيلات الموردين أو الشكاوى التي ترسلها إلينا."
                  )}
                </li>
                <li>
                  {t(
                    "Technical & usage data — IP address, device and browser type, pages visited, and similar information collected through cookies and analytics.",
                    "البيانات التقنية وبيانات الاستخدام — عنوان بروتوكول الإنترنت، ونوع الجهاز والمتصفح، والصفحات التي تمت زيارتها، والمعلومات المماثلة التي يتم جمعها من خلال ملفات تعريف الارتباط وأدوات التحليلات."
                  )}
                </li>
              </ul>
              <p className="text-lg mt-3 text-white/75 leading-relaxed">
                {t(
                  "We do not intentionally collect sensitive personal data through our website. Please do not submit such data unless specifically requested and necessary.",
                  "لا نقوم بجمع البيانات الشخصية الحساسة عمداً من خلال موقعنا الإلكتروني. يُرجى عدم تقديم مثل هذه البيانات ما لم يُطلب منك ذلك تحديداً وعند الضرورة."
                )}
              </p>
            </AccordionItem>

            <AccordionItem
              id={2}
              title={t("3. How We Collect Personal Data", "3. كيفية جمعنا للبيانات الشخصية")}
            >
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                {t("We collect personal data: (a) directly from you when you complete a form, email us, call us, or otherwise communicate with us; and (b) automatically through cookies and similar technologies when you use our website. See our", "نجمع البيانات الشخصية: (أ) مباشرةً منك عند تعبئتك لنموذج، أو مراسلتنا عبر البريد الإلكتروني، أو الاتصال بنا، أو التواصل معنا بأي وسيلة أخرى؛ و(ب) تلقائياً من خلال ملفات تعريف الارتباط والتقنيات المماثلة عند استخدامك لموقعنا الإلكتروني. للمزيد من التفاصيل، يُرجى الاطلاع على")}{" "}
                <a href="/cookies-policy" className="text-[#2C95D2] hover:underline">
                  {t("Cookies Policy", "سياسة ملفات تعريف الارتباط")}
                </a>{" "}
                {t("for details.", "الخاصة بنا.")}
              </p>
            </AccordionItem>

            <AccordionItem
              id={3}
              title={t("4. Purposes of Processing", "4. أغراض المعالجة")}
            >
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                {t("We process personal data to:", "نعالج البيانات الشخصية من أجل:")}
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-white/75 marker:text-[#2C95D2]">
                <li>
                  {t(
                    "Respond to your enquiries, requests and complaints.",
                    "الرد على استفساراتك وطلباتك وشكاواك."
                  )}
                </li>
                <li>
                  {t(
                    "Provide, manage and improve our services and our relationship with clients and suppliers.",
                    "تقديم خدماتنا وإدارتها وتحسينها وكذلك علاقتنا بالعملاء والموردين."
                  )}
                </li>
                <li>
                  {t(
                    "Evaluate job applications and supplier registrations.",
                    "تقييم طلبات التوظيف وتسجيلات الموردين."
                  )}
                </li>
                <li>
                  {t(
                    "Operate, secure, maintain and improve our website and analyze its usage.",
                    "تشغيل موقعنا الإلكتروني وتأمينه وصيانته وتحسينه وتحليل استخدامه."
                  )}
                </li>
                <li>
                  {t(
                    "Comply with legal, regulatory and contractual obligations.",
                    "الامتثال للالتزامات القانونية والتنظيمية والتعاقدية."
                  )}
                </li>
              </ul>
            </AccordionItem>

            <AccordionItem
              id={4}
              title={t("5. Legal Basis for Processing", "5. الأساس النظامي للمعالجة")}
            >
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                {t(
                  "Under the PDPL, we rely on one or more of the following legal bases: your consent; the processing being necessary to enter into or perform a contract to which you are or intend to be a party; compliance with a legal obligation; and our legitimate interests (where these are not overridden by your rights and interests), such as responding to enquiries and securing our website. Where we rely on consent, you may withdraw it at any time as described below.",
                  "بموجب النظام، نعتمد على واحد أو أكثر من الأسس النظامية التالية: موافقتك؛ أو كون المعالجة ضرورية لإبرام أو تنفيذ عقد أنت طرف فيه أو تعتزم أن تكون طرفاً فيه؛ أو الامتثال لالتزام نظامي؛ ومصالحنا المشروعة (حيث لا تتغلب عليها حقوقك ومصالحك)، مثل الرد على الاستفسارات وتأمين موقعنا الإلكتروني. وحيثما نعتمد على الموافقة، يجوز لك سحبها في أي وقت على النحو الموضح أدناه."
                )}
              </p>
            </AccordionItem>

            <AccordionItem
              id={5}
              title={t("6. Cookies & Analytics", "6. ملفات تعريف الارتباط والتحليلات")}
            >
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                {t("We use strictly necessary cookies to operate the website and, with your consent, analytics cookies to understand how the site is used. You can accept or reject non-essential cookies through our cookie banner and manage your preferences at any time. For full details, see our", "نستخدم ملفات تعريف الارتباط الضرورية للغاية لتشغيل الموقع الإلكتروني، وبموافقتك، نستخدم ملفات تعريف ارتباط التحليلات لفهم كيفية استخدام الموقع. يمكنك قبول أو رفض ملفات تعريف الارتباط غير الأساسية من خلال شريط ملفات تعريف الارتباط لدينا وإدارة تفضيلاتك في أي وقت. للاطلاع على التفاصيل الكاملة، يُرجى مراجعة")}{" "}
                <a href="/cookies-policy" className="text-[#2C95D2] hover:underline">
                  {t("Cookies Policy", "سياسة ملفات تعريف الارتباط")}
                </a>
                {t(".", " الخاصة بنا.")}
              </p>
            </AccordionItem>

            <AccordionItem
              id={6}
              title={t("7. Disclosure of Personal Data", "7. الإفصاح عن البيانات الشخصية")}
            >
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                {t(
                  "We do not sell your personal data. We may share it with: trusted service providers who process data on our behalf (such as website hosting, email and analytics providers) under appropriate agreements; our affiliates and business partners where necessary to provide services; and competent government, regulatory or law enforcement authorities where required by applicable law or to protect our legal rights. Any data processor acting on our behalf is bound to process personal data only on our instructions and to apply appropriate safeguards.",
                  "نحن لا نبيع بياناتك الشخصية. وقد نشاركها مع: مزودي خدمات موثوقين يعالجون البيانات نيابةً عنا (مثل مزودي استضافة المواقع والبريد الإلكتروني والتحليلات) بموجب اتفاقيات مناسبة؛ والشركات التابعة لنا وشركائنا التجاريين عند الضرورة لتقديم الخدمات؛ والجهات الحكومية أو التنظيمية أو جهات إنفاذ القانون المختصة عندما يقتضي ذلك النظام المعمول به أو لحماية حقوقنا النظامية. ويلتزم أي معالج للبيانات يعمل نيابةً عنا بمعالجة البيانات الشخصية وفقاً لتعليماتنا فقط وبتطبيق الضمانات المناسبة."
                )}
              </p>
            </AccordionItem>

            <AccordionItem
              id={7}
              title={t("8. Cross-Border Transfers", "8. النقل عبر الحدود")}
            >
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                {t(
                  "Where personal data is transferred outside the Kingdom of Saudi Arabia (for example to service providers), we will only do so in accordance with the conditions and safeguards required by the PDPL and its Implementing Regulations, ensuring an adequate level of protection for your personal data.",
                  "في حال نقل البيانات الشخصية خارج المملكة العربية السعودية (على سبيل المثال إلى مزودي الخدمات)، فلن نقوم بذلك إلا وفقاً للشروط والضمانات التي يقتضيها النظام ولائحته التنفيذية، بما يكفل مستوى ملائماً من الحماية لبياناتك الشخصية."
                )}
              </p>
            </AccordionItem>

            <AccordionItem
              id={8}
              title={t("9. Data Retention", "9. الاحتفاظ بالبيانات")}
            >
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                {t(
                  "We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy any legal, regulatory, accounting or reporting requirements. When personal data is no longer required, we will securely delete or anonymize it.",
                  "نحتفظ بالبيانات الشخصية للمدة اللازمة فقط لتحقيق الأغراض التي جُمعت من أجلها، بما في ذلك الوفاء بأي متطلبات نظامية أو تنظيمية أو محاسبية أو متعلقة بإعداد التقارير. وعندما لا تعود البيانات الشخصية مطلوبة، سنقوم بحذفها أو جعلها مجهولة المصدر بشكل آمن."
                )}
              </p>
            </AccordionItem>

            <AccordionItem
              id={9}
              title={t("10. Data Security", "10. أمن البيانات")}
            >
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                {t(
                  "We implement appropriate organizational and technical measures to protect personal data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure or access. While we take reasonable steps to protect your data, no method of transmission or storage is completely secure. In the event of a personal data breach, we will notify the competent authority and affected individuals where required by the PDPL.",
                  "نطبق التدابير التنظيمية والتقنية المناسبة لحماية البيانات الشخصية من الإتلاف أو الفقدان أو التغيير العرضي أو غير المشروع، أو الإفصاح عنها أو الوصول إليها دون تصريح. وعلى الرغم من اتخاذنا خطوات معقولة لحماية بياناتك، فلا توجد وسيلة نقل أو تخزين آمنة تماماً. وفي حال وقوع انتهاك للبيانات الشخصية، سنقوم بإخطار الجهة المختصة والأفراد المتأثرين عندما يقتضي النظام ذلك."
                )}
              </p>
            </AccordionItem>

            <AccordionItem
              id={10}
              title={t("11. Your Rights Under the PDPL", "11. حقوقك بموجب النظام")}
            >
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                {t("Subject to the PDPL, you have the right to:", "مع مراعاة أحكام النظام، يحق لك:")}
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-white/75 marker:text-[#2C95D2]">
                <li>
                  <span className="text-white/90">{t("Be informed", "الحق في العلم")}</span> {t("— about how and why your personal data is collected and used.", "— بشأن كيفية وأسباب جمع بياناتك الشخصية واستخدامها.")}
                </li>
                <li>
                  <span className="text-white/90">{t("Access", "الوصول")}</span> {t("— request access to your personal data held by us.", "— طلب الوصول إلى بياناتك الشخصية المحفوظة لدينا.")}
                </li>
                <li>
                  <span className="text-white/90">{t("Obtain a copy", "الحصول على نسخة")}</span> {t("— request a copy of your personal data in a readable format.", "— طلب نسخة من بياناتك الشخصية بصيغة مقروءة.")}
                </li>
                <li>
                  <span className="text-white/90">{t("Correct", "التصحيح")}</span> {t("— request correction of inaccurate, incomplete or outdated data.", "— طلب تصحيح البيانات غير الدقيقة أو غير المكتملة أو القديمة.")}
                </li>
                <li>
                  <span className="text-white/90">{t("Destroy", "الإتلاف")}</span> {t("— request deletion of your personal data where it is no longer needed.", "— طلب حذف بياناتك الشخصية عندما لا تعود هناك حاجة إليها.")}
                </li>
                <li>
                  <span className="text-white/90">{t("Withdraw consent", "سحب الموافقة")}</span> {t("— where processing is based on consent, withdraw it at any time.", "— حيثما تستند المعالجة إلى الموافقة، سحبها في أي وقت.")}
                </li>
              </ul>
              <p className="text-lg mt-3 text-white/75 leading-relaxed">
                {t("To exercise any of these rights, contact us at", "لممارسة أي من هذه الحقوق، يُرجى التواصل معنا عبر")}{" "}
                <a
                  href="mailto:info@alfamarinesa.com"
                  className="text-[#2C95D2] hover:underline"
                >
                  info@alfamarinesa.com
                </a>
                {t(". We will respond within the period required by the PDPL. Exercising your rights will not affect the lawfulness of processing carried out before your request.", ". وسنرد عليك خلال المدة التي يقتضيها النظام. ولن تؤثر ممارستك لحقوقك على مشروعية المعالجة التي تمت قبل طلبك.")}
              </p>
            </AccordionItem>

            <AccordionItem id={11} title={t("12. Complaints", "12. الشكاوى")}>
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                {t(
                  "If you have a concern about how we handle your personal data, please contact us first so we can address it. You also have the right to lodge a complaint with the competent supervisory authority in the Kingdom of Saudi Arabia — the Saudi Data & AI Authority (SDAIA).",
                  "إذا كان لديك أي قلق بشأن كيفية تعاملنا مع بياناتك الشخصية، فيُرجى التواصل معنا أولاً حتى نتمكن من معالجته. كما يحق لك تقديم شكوى إلى الجهة الإشرافية المختصة في المملكة العربية السعودية — الهيئة السعودية للبيانات والذكاء الاصطناعي (SDAIA)."
                )}
              </p>
            </AccordionItem>

            <AccordionItem id={12} title={t("13. Children’s Privacy", "13. خصوصية الأطفال")}>
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                {t(
                  "Our website and services are not directed to children. We do not knowingly collect personal data from children without appropriate consent from a guardian. If you believe we have collected such data, please contact us and we will take appropriate action.",
                  "موقعنا الإلكتروني وخدماتنا غير موجهة للأطفال. ولا نقوم عن علم بجمع البيانات الشخصية من الأطفال دون الحصول على الموافقة المناسبة من ولي الأمر. وإذا كنت تعتقد أننا قد جمعنا مثل هذه البيانات، فيُرجى التواصل معنا وسنتخذ الإجراء المناسب."
                )}
              </p>
            </AccordionItem>

            <AccordionItem id={13} title={t("14. Changes to this Policy", "14. التغييرات على هذه السياسة")}>
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                {t(
                  "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The “Last updated” date above indicates when it was last revised. We encourage you to review it periodically.",
                  "قد نقوم بتحديث سياسة الخصوصية هذه من حين لآخر لتعكس التغييرات في ممارساتنا أو المتطلبات النظامية. ويشير تاريخ «آخر تحديث» أعلاه إلى موعد آخر مراجعة لها. ونشجعك على مراجعتها بشكل دوري."
                )}
              </p>
            </AccordionItem>

            <AccordionItem id={14} title={t("15. Contact Us", "15. اتصل بنا")}>
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                {t(
                  "For any questions about this Policy or our handling of personal data, contact the Data Controller:",
                  "لأي استفسارات بخصوص هذه السياسة أو تعاملنا مع البيانات الشخصية، يُرجى التواصل مع المتحكم في البيانات:"
                )}
              </p>
              <p className="text-lg mt-3 text-white/85">
                {t(
                  "ALFA Marine Industrial Services Company",
                  "شركة ألفا البحرية للخدمات الصناعية"
                )}
                <br />
                {t(
                  "Building 4855, Prince Mansour Street, Prince Muhammad Ibn Saud District, Dammam 32241, Kingdom of Saudi Arabia",
                  "مبنى 4855، شارع الأمير منصور، حي الأمير محمد بن سعود، الدمام 32241، المملكة العربية السعودية"
                )}
                <br />
                {t("Email:", "البريد الإلكتروني:")}{" "}
                <a
                  href="mailto:info@alfamarinesa.com"
                  className="text-[#2C95D2] hover:underline"
                >
                  info@alfamarinesa.com
                </a>{" "}
                · {t("Phone:", "الهاتف:")}{" "}
                <a
                  href="tel:+966138052528"
                  className="text-[#2C95D2] hover:underline"
                >
                  <bdi dir="ltr">+966 13 805 2528</bdi>
                </a>
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
