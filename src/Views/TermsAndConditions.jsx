import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/about-us.png";
import contactuscall from "../Assets/Icons/callus.svg";
import contactusemail from "../Assets/Icons/emailus.svg";
import { Accordion, AccordionItem } from "../Components/Accordion";
import { useT } from "../i18n/i18n";

// import AboutUSComp from '../Components/AboutUSComp';
const TermsAndConditions = () => {
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
        {/* Overlay Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold mb-4 text-center text-white font-roboto font-light" style={{ letterSpacing: "-0.02em" }}>
            {t("Terms And", "الشروط")} <span className="text-[#2C95D2]">{t("Conditions", "والأحكام")}</span>
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16">
        <h1
          className="text-4xl font-bold mb-4 text-center md:text-start text-white font-roboto font-light"
          style={{ letterSpacing: "-0.02em" }}
        >
          {t("Alfa Terms Of Service", "شروط خدمة ألفا")}
        </h1>
        <Accordion allowMultiple defaultOpen={[0]}>
          <AccordionItem id={0} title={t("General Terms", "الشروط العامة")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "By accessing and placing an order with ALFA, you confirm that you are in agreement with and bound by the terms of service contained in the Terms & Conditions outlined below. These terms apply to the entire website and any email or other type of communication between you and ALFA.",
              "بدخولك إلى ألفا وتقديمك طلباً، فإنك تؤكد موافقتك على شروط الخدمة الواردة في الشروط والأحكام المبيّنة أدناه والتزامك بها. وتنطبق هذه الشروط على الموقع الإلكتروني بأكمله وعلى أي بريد إلكتروني أو نوع آخر من التواصل بينك وبين ألفا."
            )}
            <br />
            <br />
            {t(
              "Under no circumstances shall ALFA team be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if ALFA team or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof.",
              "لا يتحمل فريق ألفا بأي حال من الأحوال المسؤولية عن أي أضرار مباشرة أو غير مباشرة أو خاصة أو عرضية أو تبعية، بما في ذلك على سبيل المثال لا الحصر فقدان البيانات أو الأرباح، الناشئة عن استخدام المواد الموجودة على هذا الموقع أو عدم القدرة على استخدامها، حتى لو أُبلغ فريق ألفا أو ممثل مفوّض بإمكانية حدوث مثل هذه الأضرار. وإذا أدى استخدامك للمواد من هذا الموقع إلى الحاجة لصيانة أو إصلاح أو تصحيح المعدات أو البيانات، فإنك تتحمل أي تكاليف مترتبة على ذلك."
            )}
            <br />
            <br />
            {t(
              "ALFA will not be responsible for any outcome that may occur during the course of usage of our resources. We reserve the right to change prices and revise the resources usage policy at any moment.",
              "لن تكون ألفا مسؤولة عن أي نتيجة قد تحدث أثناء استخدام مواردنا. ونحتفظ بالحق في تغيير الأسعار ومراجعة سياسة استخدام الموارد في أي وقت."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={1} title={t("License", "الترخيص")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "ALFA grants you a revocable, non-exclusive, non-transferable, limited license to download, install and use the website strictly in accordance with the terms of this Agreement.",
              "تمنحك ألفا ترخيصاً محدوداً قابلاً للإلغاء وغير حصري وغير قابل للتحويل لتنزيل الموقع الإلكتروني وتثبيته واستخدامه على نحو يتوافق تماماً مع شروط هذه الاتفاقية."
            )}
            <br />
            <br />
            {t(
              "These Terms & Conditions are a contract between you and ALFA (referred to in these Terms & Conditions as “ALFA”, “us”, “we” or “our”), the provider of the ALFA website and the services accessible from the ALFA website (which are collectively referred to in these Terms & Conditions as the “ALFA Service”).",
              "تُعد هذه الشروط والأحكام عقداً بينك وبين ألفا (المشار إليها في هذه الشروط والأحكام بـ«ألفا» أو «نحن» أو «لنا»)، مزوّد موقع ألفا الإلكتروني والخدمات التي يمكن الوصول إليها من موقع ألفا الإلكتروني (والمشار إليها مجتمعةً في هذه الشروط والأحكام بـ«خدمة ألفا»)."
            )}
            <br />
            <br />
            {t(
              "You agree to be bound by these Terms & Conditions. If you do not agree to these Terms & Conditions, please do not use the ALFA Service. In these Terms & Conditions, “you” refers both to you as an individual and to the entity you represent. If you violate any of these Terms & Conditions, we reserve the right to cancel your account or block access to your account without notice.",
              "أنت توافق على الالتزام بهذه الشروط والأحكام. وإذا كنت لا توافق على هذه الشروط والأحكام، فيُرجى عدم استخدام خدمة ألفا. وفي هذه الشروط والأحكام، تشير كلمة «أنت» إليك بصفتك فرداً وإلى الجهة التي تمثلها. وإذا خالفت أياً من هذه الشروط والأحكام، فإننا نحتفظ بالحق في إلغاء حسابك أو حظر الوصول إليه دون إشعار."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={2} title={t("Definitions and Key Terms", "التعريفات والمصطلحات الأساسية")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "To help explain things as clearly as possible in these Terms & Conditions, every time any of these terms are referenced, they are strictly defined as follows:",
              "للمساعدة في توضيح الأمور بأكبر قدر ممكن من الوضوح في هذه الشروط والأحكام، فإنه في كل مرة يُشار فيها إلى أي من هذه المصطلحات، فإنها تُعرّف حصراً على النحو التالي:"
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={3} title={t("Cookie", "ملف تعريف الارتباط")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "A small amount of data generated by a website and saved by your web browser. It is used to identify your browser, provide analytics, remember information about you such as your language preference or login information.",
              "كمية صغيرة من البيانات يُنشئها موقع إلكتروني ويحفظها متصفح الويب الخاص بك. وتُستخدم للتعرف على متصفحك وتوفير التحليلات وتذكّر معلومات عنك مثل تفضيل اللغة أو معلومات تسجيل الدخول."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={4} title={t("Company", "الشركة")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "When this policy mentions “Company,” “we,” “us,” or “our,” it refers to ALFA, located at Prince Mansour Street, Dammam, Eastern Province, Saudi Arabia, that is responsible for your information under this Privacy Policy.",
              "عندما تذكر هذه السياسة «الشركة» أو «نحن» أو «لنا»، فإنها تشير إلى ألفا، الكائنة في شارع الأمير منصور، الدمام، المنطقة الشرقية، المملكة العربية السعودية، وهي المسؤولة عن معلوماتك بموجب سياسة الخصوصية هذه."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={5} title={t("Country", "الدولة")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "Where ALFA or the owners/founders of ALFA are based, in this case, Saudi Arabia.",
              "حيث يقع مقر ألفا أو مالكي/مؤسسي ألفا، وهي في هذه الحالة المملكة العربية السعودية."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={6} title={t("Service", "الخدمة")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "Refers to the service provided by ALFA as described in the relative terms (if available) and on this platform.",
              "تشير إلى الخدمة التي تقدمها ألفا على النحو الموضح في الشروط ذات الصلة (إن وُجدت) وعلى هذه المنصة."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={7} title={t("Third-Party Service", "خدمة الطرف الثالث")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "Refers to advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you.",
              "تشير إلى المعلنين ورعاة المسابقات وشركاء الترويج والتسويق وغيرهم ممن يقدمون محتوانا أو الذين نعتقد أن منتجاتهم أو خدماتهم قد تهمك."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={8} title={t("You", "أنت")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "A person or entity that is registered with ALFA to use the Services.",
              "شخص أو جهة مسجّلة لدى ألفا لاستخدام الخدمات."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={9} title={t("Your Suggestions", "اقتراحاتك")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "Any feedback, comments, ideas, improvements, or suggestions (collectively, “Suggestions”) provided by you to ALFA with respect to the website shall remain the sole and exclusive property of ALFA.",
              "تظل أي ملاحظات أو تعليقات أو أفكار أو تحسينات أو اقتراحات (يُشار إليها مجتمعةً بـ«الاقتراحات») تقدمها إلى ألفا بخصوص الموقع الإلكتروني ملكاً خالصاً وحصرياً لألفا."
            )}
            <br />
            {t(
              "ALFA shall be free to use, copy, modify, publish, or redistribute the Suggestions for any purpose and in any way without any credit or compensation to you.",
              "ويحق لألفا استخدام الاقتراحات أو نسخها أو تعديلها أو نشرها أو إعادة توزيعها لأي غرض وبأي طريقة دون أي إسناد أو تعويض لك."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={10} title={t("Your Consent", "موافقتك")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "We’ve updated our Terms & Conditions to provide you with complete transparency into what is being set when you visit our site and how it’s being used. By using our website, registering an account, or making a purchase, you hereby consent to our Terms & Conditions.",
              "لقد قمنا بتحديث شروطنا وأحكامنا لنوفر لك شفافية كاملة بشأن ما يتم ضبطه عند زيارتك لموقعنا وكيفية استخدامه. وباستخدامك لموقعنا الإلكتروني أو تسجيل حساب أو إجراء عملية شراء، فإنك بموجب هذا توافق على شروطنا وأحكامنا."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={11} title={t("Links to Other Websites", "روابط لمواقع إلكترونية أخرى")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "These Terms & Conditions apply only to the Services. The Services may contain links to other websites not operated or controlled by ALFA. We are not responsible for the content, accuracy, or opinions expressed in such websites, and such websites are not investigated, monitored, or checked for accuracy or completeness by us.",
              "تنطبق هذه الشروط والأحكام على الخدمات فقط. وقد تحتوي الخدمات على روابط لمواقع إلكترونية أخرى لا تشغّلها ألفا أو تتحكم فيها. ونحن لسنا مسؤولين عن المحتوى أو الدقة أو الآراء الواردة في تلك المواقع، ولا نقوم بالتحقيق في تلك المواقع أو مراقبتها أو التحقق من دقتها أو اكتمالها."
            )}
            <br /> {t(
              "Please remember that when you use a link to go from the Services to another website, our Terms & Conditions are no longer in effect. Your browsing and interaction on any other website, including those that have a link on our platform, is subject to that website’s own rules and policies. Third parties may use their own cookies or other methods to collect information about you.",
              "يُرجى تذكّر أنه عند استخدامك لرابط للانتقال من الخدمات إلى موقع إلكتروني آخر، فإن شروطنا وأحكامنا لا تعود سارية. ويخضع تصفحك وتفاعلك على أي موقع إلكتروني آخر، بما في ذلك المواقع التي لها رابط على منصتنا، للقواعد والسياسات الخاصة بذلك الموقع. وقد تستخدم الأطراف الثالثة ملفات تعريف الارتباط الخاصة بها أو وسائل أخرى لجمع معلومات عنك."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={12} title={t("Cookies", "ملفات تعريف الارتباط")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "ALFA uses “Cookies” to identify the areas of our website that you have visited. A Cookie is a small piece of data stored on your computer or mobile device by your web browser. We use Cookies to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionalities like videos may become unavailable or you would be required to enter your login details every time you visit the website as we would not be able to remember that you had logged in previously.",
              "تستخدم ألفا «ملفات تعريف الارتباط» لتحديد مناطق موقعنا الإلكتروني التي قمت بزيارتها. وملف تعريف الارتباط هو جزء صغير من البيانات يُخزَّن على جهاز الكمبيوتر أو الجهاز المحمول الخاص بك بواسطة متصفح الويب. ونستخدم ملفات تعريف الارتباط لتعزيز أداء موقعنا الإلكتروني ووظائفه، لكنها غير أساسية لاستخدامه. ومع ذلك، بدون ملفات تعريف الارتباط هذه، قد تصبح بعض الوظائف مثل مقاطع الفيديو غير متاحة، أو سيُطلب منك إدخال بيانات تسجيل الدخول الخاصة بك في كل مرة تزور فيها الموقع لأننا لن نتمكن من تذكّر أنك قد سجّلت الدخول سابقاً."
            )}
            <br /> {t(
              "Most web browsers can be set to disable the use of Cookies. However, if you disable Cookies, you may not be able to access functionality on our website correctly or at all. We never place Personally Identifiable Information in Cookies.",
              "يمكن ضبط معظم متصفحات الويب لتعطيل استخدام ملفات تعريف الارتباط. ومع ذلك، إذا قمت بتعطيل ملفات تعريف الارتباط، فقد لا تتمكن من الوصول إلى وظائف موقعنا الإلكتروني بشكل صحيح أو على الإطلاق. ونحن لا نضع أبداً معلومات تعريف شخصية في ملفات تعريف الارتباط."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={13} title={t("Changes To Our Terms & Conditions", "التغييرات على شروطنا وأحكامنا")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "You acknowledge and agree that ALFA may stop (permanently or temporarily) providing the Service (or any features within the Service) to you or to users generally at ALFA’s sole discretion, without prior notice to you. You may stop using the Service at any time. You do not need to specifically inform ALFA when you stop using the Service. You acknowledge and agree that if ALFA disables access to your account, you may be prevented from accessing the Service, your account details, or any files or other materials which are contained in your account.",
              "تقر وتوافق على أنه يجوز لألفا التوقف (بشكل دائم أو مؤقت) عن تقديم الخدمة (أو أي ميزات ضمن الخدمة) لك أو للمستخدمين بشكل عام وفقاً لتقدير ألفا وحدها، دون إشعار مسبق لك. ويمكنك التوقف عن استخدام الخدمة في أي وقت. ولا يتعين عليك إبلاغ ألفا تحديداً عند توقفك عن استخدام الخدمة. وتقر وتوافق على أنه إذا قامت ألفا بتعطيل الوصول إلى حسابك، فقد تُمنع من الوصول إلى الخدمة أو تفاصيل حسابك أو أي ملفات أو مواد أخرى موجودة في حسابك."
            )}
            <br />
            <br />
            {t(
              "If we decide to change our Terms & Conditions, we will post those changes on this page, and/or update the Terms & Conditions modification date below.",
              "إذا قررنا تغيير شروطنا وأحكامنا، فسننشر تلك التغييرات على هذه الصفحة و/أو نحدّث تاريخ تعديل الشروط والأحكام أدناه."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={14} title={t("Modifications to Our Website", "التعديلات على موقعنا الإلكتروني")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "ALFA reserves the right to modify, suspend, or discontinue, temporarily or permanently, the website or any service to which it connects, with or without notice and without liability to you.",
              "تحتفظ ألفا بالحق في تعديل الموقع الإلكتروني أو أي خدمة يتصل بها أو تعليقه أو إيقافه، بشكل مؤقت أو دائم، بإشعار أو دون إشعار ودون أي مسؤولية تجاهك."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={15} title={t("Updates to Our Website", "تحديثات موقعنا الإلكتروني")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "ALFA may from time to time provide enhancements or improvements to the features/functionality of the website, which may include patches, bug fixes, updates, upgrades, and other modifications (“Updates”).",
              "قد تقدم ألفا من حين لآخر تعزيزات أو تحسينات على ميزات/وظائف الموقع الإلكتروني، والتي قد تشمل الترقيعات وإصلاحات الأخطاء والتحديثات والترقيات وغيرها من التعديلات («التحديثات»)."
            )}
            <br />
            <br />
            {t(
              "Updates may modify or delete certain features and/or functionalities of the website. You agree that ALFA has no obligation to (i) provide any Updates, or (ii) continue to provide or enable any particular features and/or functionalities of the website to you. You further agree that all Updates will be (a) deemed to constitute an integral part of the website, and (b) subject to the terms and conditions of this Agreement.",
              "قد تعدّل التحديثات أو تحذف بعض ميزات و/أو وظائف الموقع الإلكتروني. وأنت توافق على أن ألفا غير ملزمة بـ (1) تقديم أي تحديثات، أو (2) الاستمرار في تقديم أو تمكين أي ميزات و/أو وظائف معينة من الموقع الإلكتروني لك. كما توافق على أن جميع التحديثات (أ) ستُعتبر جزءاً لا يتجزأ من الموقع الإلكتروني، و(ب) تخضع لشروط وأحكام هذه الاتفاقية."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={16} title={t("Third-Party Services", "خدمات الأطراف الثالثة")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "We may display, include, or make available third-party content (including data, information, applications, and other products/services) or provide links to third-party websites or services (“Third-Party Services”).",
              "قد نعرض أو ندرج أو نتيح محتوى تابعاً لأطراف ثالثة (بما في ذلك البيانات والمعلومات والتطبيقات وغيرها من المنتجات/الخدمات) أو نوفر روابط لمواقع أو خدمات تابعة لأطراف ثالثة («خدمات الأطراف الثالثة»)."
            )}
            <br />
            <br />
            {t(
              "You acknowledge and agree that ALFA shall not be responsible for any Third-Party Services, including their accuracy, completeness, timeliness, validity, copyright compliance, legality, decency, quality, or any other aspect thereof. ALFA does not assume and shall not have any liability or responsibility to you or any other person or entity for any Third-Party Services.",
              "تقر وتوافق على أن ألفا لن تكون مسؤولة عن أي خدمات للأطراف الثالثة، بما في ذلك دقتها أو اكتمالها أو حسن توقيتها أو صحتها أو امتثالها لحقوق النشر أو قانونيتها أو لياقتها أو جودتها أو أي جانب آخر منها. ولا تتحمل ألفا ولن تتحمل أي مسؤولية تجاهك أو تجاه أي شخص أو جهة أخرى عن أي خدمات للأطراف الثالثة."
            )}
            <br />
            <br />
            {t(
              "Third-Party Services and links thereto are provided solely as a convenience to you, and you access and use them entirely at your own risk and subject to such third parties’ terms and conditions.",
              "تُقدَّم خدمات الأطراف الثالثة والروابط المؤدية إليها كتسهيل لك فقط، وأنت تصل إليها وتستخدمها على مسؤوليتك الكاملة ومع مراعاة شروط وأحكام تلك الأطراف الثالثة."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={17} title={t("Copyright Infringement Notice", "إشعار انتهاك حقوق النشر")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "If you are a copyright owner or such owner’s agent and believe any material on our website constitutes an infringement on your copyright, please contact us setting forth the following information: (a) a physical or electronic signature of the copyright owner or a person authorized to act on his behalf; (b) identification of the material that is claimed to be infringing; (c) your contact information, including your address, telephone number, and an email.; (d) a statement by you that you have a good faith belief that use of the material is not authorized by the copyright owners; and (e) the a statement that the information in the notification is accurate, and, under penalty of perjury you are authorized to act on behalf of the owner.",
              "إذا كنت مالكاً لحقوق النشر أو وكيلاً عن هذا المالك وتعتقد أن أي مادة على موقعنا الإلكتروني تشكّل انتهاكاً لحقوق النشر الخاصة بك، فيُرجى التواصل معنا مع تقديم المعلومات التالية: (أ) توقيع مادي أو إلكتروني لمالك حقوق النشر أو شخص مفوّض بالتصرف نيابةً عنه؛ (ب) تحديد المادة التي يُزعم أنها منتهِكة؛ (ج) معلومات الاتصال الخاصة بك، بما في ذلك عنوانك ورقم هاتفك وبريدك الإلكتروني؛ (د) إقرار منك بأن لديك اعتقاداً بحسن نية بأن استخدام المادة غير مصرّح به من قبل مالكي حقوق النشر؛ و(هـ) إقرار بأن المعلومات الواردة في الإشعار دقيقة، وأنك مفوّض بالتصرف نيابةً عن المالك تحت طائلة عقوبة الحنث باليمين."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={18} title={t("Indemnification", "التعويض")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "You agree to indemnify and hold ALFA and its parents, subsidiaries, affiliates, officers, employees, agents, partners, and licensors (if any) harmless from any claim or demand, including reasonable attorneys’ fees, due to or arising out of your: (a) use of the website; (b) violation of this Agreement or any law or regulation; or (c) violation of any right of a third party.",
              "أنت توافق على تعويض ألفا والشركات الأم والشركات التابعة والشركات الشقيقة لها ومسؤوليها وموظفيها ووكلائها وشركائها ومرخّصيها (إن وُجدوا) وإبراء ذمتهم من أي مطالبة أو طلب، بما في ذلك أتعاب المحاماة المعقولة، الناشئة عن أو بسبب: (أ) استخدامك للموقع الإلكتروني؛ (ب) مخالفتك لهذه الاتفاقية أو لأي قانون أو لائحة؛ أو (ج) انتهاكك لأي حق من حقوق الطرف الثالث."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={19} title={t("No Warranties", "إخلاء الضمانات")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "The website is provided to you “AS IS” and “AS AVAILABLE” and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, ALFA , on its own behalf and on behalf of its affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the website, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, ALFA provides no warranty or undertaking and makes no representation of any kind that the website will meet your requirements, achieve any intended results, be compatible or work with any other software, websites, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.",
              "يُقدَّم الموقع الإلكتروني لك «كما هو» و«حسبما هو متاح» وبكل العيوب والأخطاء دون أي ضمان من أي نوع. وإلى أقصى حد يسمح به القانون المعمول به، تُخلي ألفا صراحةً، عن نفسها ونيابةً عن شركاتها التابعة ومرخّصيها ومزودي خدماتها ومرخّصي ومزودي خدمات تلك الشركات، مسؤوليتها عن جميع الضمانات، سواء كانت صريحة أو ضمنية أو نظامية أو غير ذلك، فيما يتعلق بالموقع الإلكتروني، بما في ذلك جميع الضمانات الضمنية الخاصة بالرواج التجاري والملاءمة لغرض معين والملكية وعدم الانتهاك، والضمانات التي قد تنشأ عن سياق التعامل أو سياق الأداء أو الاستخدام أو العرف التجاري. ودون تقييد لما سبق، لا تقدم ألفا أي ضمان أو تعهد ولا تقدم أي إقرار من أي نوع بأن الموقع الإلكتروني سيلبي متطلباتك أو يحقق أي نتائج مقصودة أو يكون متوافقاً أو يعمل مع أي برامج أو مواقع أو أنظمة أو خدمات أخرى، أو يعمل دون انقطاع، أو يلبي أي معايير للأداء أو الموثوقية، أو يكون خالياً من الأخطاء، أو أن أي أخطاء أو عيوب يمكن أو سيتم تصحيحها."
            )}
            <br />
            <br />
            {t(
              "Without limiting the foregoing, neither ALFA nor any ALFA ‘s provider makes any representation or warranty of any kind, express or implied: (I) as to the operation or availability of the website, or the information, content, and materials or products included thereon; (ii) that the website will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the website; or (iv) that the website, its servers, the content, or e-mails sent from or on behalf of ALFA are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.",
              "ودون تقييد لما سبق، لا تقدم ألفا ولا أي من مزوّديها أي إقرار أو ضمان من أي نوع، صريح أو ضمني: (1) بشأن تشغيل الموقع الإلكتروني أو توافره، أو المعلومات والمحتوى والمواد أو المنتجات المضمّنة فيه؛ (2) بأن الموقع الإلكتروني سيكون دون انقطاع أو خالياً من الأخطاء؛ (3) بشأن دقة أو موثوقية أو حداثة أي معلومات أو محتوى يُقدَّم من خلال الموقع الإلكتروني؛ أو (4) بأن الموقع الإلكتروني أو خوادمه أو المحتوى أو رسائل البريد الإلكتروني المرسلة من ألفا أو نيابةً عنها خالية من الفيروسات أو البرامج النصية أو أحصنة طروادة أو الديدان أو البرمجيات الخبيثة أو القنابل الموقوتة أو غيرها من المكوّنات الضارة."
            )}
            <br />
            <br />
            {t(
              "Some jurisdictions do not allow the exclusion of or limitations on implied warranties or the limitations on the applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to you.",
              "لا تسمح بعض الولايات القضائية باستبعاد الضمانات الضمنية أو تقييدها أو بفرض قيود على الحقوق النظامية المعمول بها للمستهلك، لذا فقد لا تنطبق عليك بعض أو كل الاستثناءات والقيود المذكورة أعلاه."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={20} title={t("Limitation of Liability", "تحديد المسؤولية")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "Notwithstanding any damages that you might incur, the entire liability of ALFA and any of its suppliers under any provision of this Agreement and your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by you for the website.",
              "بصرف النظر عن أي أضرار قد تتكبدها، فإن المسؤولية الكاملة لألفا وأي من مورّديها بموجب أي بند من بنود هذه الاتفاقية، وتعويضك الحصري عن كل ما سبق، يقتصر على المبلغ الذي دفعته فعلياً مقابل الموقع الإلكتروني."
            )}
            <br />
            <br />
            {t(
              "To the maximum extent permitted by applicable law, in no event shall ALFA or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, for loss of data or other information, for business interruption, for personal injury, for loss of privacy arising out of or in any way related to the use of or inability to use the website, third-party software and/or third-party hardware used with the website, or otherwise in connection with any provision of this Agreement), even if ALFA or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.",
              "إلى أقصى حد يسمح به القانون المعمول به، لا تتحمل ألفا أو مورّدوها بأي حال من الأحوال المسؤولية عن أي أضرار خاصة أو عرضية أو غير مباشرة أو تبعية مهما كانت (بما في ذلك على سبيل المثال لا الحصر الأضرار الناجمة عن فقدان الأرباح أو فقدان البيانات أو غيرها من المعلومات أو توقف الأعمال أو الإصابة الشخصية أو فقدان الخصوصية الناشئة عن استخدام الموقع الإلكتروني أو عدم القدرة على استخدامه أو المتعلقة بذلك بأي شكل، أو برامج الأطراف الثالثة و/أو أجهزة الأطراف الثالثة المستخدمة مع الموقع الإلكتروني، أو غير ذلك فيما يتعلق بأي بند من بنود هذه الاتفاقية)، حتى لو أُبلغت ألفا أو أي مورّد بإمكانية حدوث مثل هذه الأضرار وحتى لو أخفق التعويض في تحقيق غرضه الأساسي."
            )}
            <br />
            <br />
            {t(
              "Some states/jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above limitation or exclusion may not apply to you.",
              "لا تسمح بعض الدول/الولايات القضائية باستبعاد أو تقييد الأضرار العرضية أو التبعية، لذا فقد لا ينطبق عليك التحديد أو الاستثناء المذكور أعلاه."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={21} title={t("Severability", "قابلية الفصل")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "If any provision of this Agreement is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.",
              "إذا اعتُبر أي بند من بنود هذه الاتفاقية غير قابل للتنفيذ أو غير صحيح، فسيتم تغيير هذا البند وتفسيره بما يحقق أهداف ذلك البند إلى أقصى حد ممكن بموجب القانون المعمول به، وستظل البنود المتبقية سارية المفعول بالكامل."
            )}
            <br />
            <br />
            {t(
              "This Agreement, together with the Privacy Policy and any other legal notices published by ALFA on the Services, shall constitute the entire agreement between you and ALFA concerning the Services. If any provision of this Agreement is deemed invalid by a court of competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of this Agreement, which shall remain in full force and effect. No waiver of any term of this Agreement shall be deemed a further or continuing waiver of such term or any other term, and ALFA’s failure to assert any right or provision under this Agreement shall not constitute a waiver of such right or provision. YOU AND ALFA AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO THE SERVICES MUST COMMENCE WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS PERMANENTLY BARRED.",
              "تشكّل هذه الاتفاقية، مع سياسة الخصوصية وأي إشعارات قانونية أخرى تنشرها ألفا على الخدمات، الاتفاقية الكاملة بينك وبين ألفا بشأن الخدمات. وإذا اعتبرت محكمة مختصة أن أي بند من بنود هذه الاتفاقية غير صحيح، فإن بطلان ذلك البند لن يؤثر على صحة البنود المتبقية من هذه الاتفاقية، التي ستظل سارية المفعول بالكامل. ولا يُعد أي تنازل عن أي بند من بنود هذه الاتفاقية تنازلاً إضافياً أو مستمراً عن ذلك البند أو أي بند آخر، ولا يشكّل إخفاق ألفا في تأكيد أي حق أو بند بموجب هذه الاتفاقية تنازلاً عن ذلك الحق أو البند. وتتفق أنت وألفا على أن أي سبب للدعوى ينشأ عن الخدمات أو يتعلق بها يجب أن يبدأ خلال سنة واحدة (1) من تاريخ نشوء سبب الدعوى. وإلا فإن سبب الدعوى هذا يسقط بشكل دائم."
            )}
            <br />
          </p>
          </AccordionItem>
          <AccordionItem id={22} title={t("Waiver", "التنازل")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "Except as provided herein, the failure to exercise a right or to require performance of an obligation under this Agreement shall not affect a party’s ability to exercise such right or require such performance at any time thereafter nor shall be the waiver of a breach constitute waiver of any subsequent breach.",
              "باستثناء ما هو منصوص عليه في هذه الاتفاقية، فإن عدم ممارسة حق أو المطالبة بأداء التزام بموجب هذه الاتفاقية لن يؤثر على قدرة الطرف على ممارسة ذلك الحق أو المطالبة بذلك الأداء في أي وقت لاحق، ولا يشكّل التنازل عن مخالفة تنازلاً عن أي مخالفة لاحقة."
            )}
            <br />
            <br />
            {t(
              "No failure to exercise, and no delay in exercising, on the part of either party, any right or any power under this Agreement shall operate as a waiver of that right or power. Nor shall any single or partial exercise of any right or power under this Agreement preclude further exercise of that or any other right granted herein. In the event of a conflict between this Agreement and any applicable purchase or other terms, the terms of this Agreement shall govern.",
              "لا يُعد عدم ممارسة أي من الطرفين لأي حق أو صلاحية بموجب هذه الاتفاقية، أو التأخر في ممارسته، تنازلاً عن ذلك الحق أو الصلاحية. كما لا تحول الممارسة الفردية أو الجزئية لأي حق أو صلاحية بموجب هذه الاتفاقية دون مواصلة ممارسة ذلك الحق أو أي حق آخر ممنوح بموجبها. وفي حال وجود تعارض بين هذه الاتفاقية وأي شروط شراء أو شروط أخرى معمول بها، فإن شروط هذه الاتفاقية هي التي تسري."
            )}
            <br />
          </p>
          </AccordionItem>
          <AccordionItem id={23} title={t("Amendments to this Agreement", "التعديلات على هذه الاتفاقية")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "ALFA reserves the right, at its sole discretion, to modify or replace this Agreement at any time. If a revision is material, we will provide at least 30 days’ notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
              "تحتفظ ألفا بالحق، وفقاً لتقديرها وحدها، في تعديل هذه الاتفاقية أو استبدالها في أي وقت. وإذا كان التعديل جوهرياً، فسنقدم إشعاراً قبل 30 يوماً على الأقل من سريان أي شروط جديدة. ويُحدَّد ما يشكّل تغييراً جوهرياً وفقاً لتقديرنا وحدنا."
            )}
            <br />
            <br />
            {t(
              "By continuing to access or use our website after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use ALFA.",
              "بمواصلتك الوصول إلى موقعنا الإلكتروني أو استخدامه بعد سريان أي تعديلات، فإنك توافق على الالتزام بالشروط المعدّلة. وإذا كنت لا توافق على الشروط الجديدة، فلم يعد مصرّحاً لك باستخدام ألفا."
            )}
            <br />
          </p>
          </AccordionItem>
          <AccordionItem id={24} title={t("Entire Agreement", "الاتفاقية الكاملة")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "The Agreement constitutes the entire agreement between you and ALFA regarding your use of the website and supersedes all prior and contemporaneous written or oral agreements between you and ALFA.",
              "تشكّل الاتفاقية الاتفاق الكامل بينك وبين ألفا بشأن استخدامك للموقع الإلكتروني وتحل محل جميع الاتفاقيات الكتابية أو الشفهية السابقة والمعاصرة بينك وبين ألفا."
            )}
            <br />
            <br />
            {t(
              "You may be subject to additional terms and conditions that apply when you use or purchase other ALFA ‘s services, which ALFA will provide you at the time of such use or purchase.",
              "قد تخضع لشروط وأحكام إضافية تنطبق عند استخدامك أو شرائك لخدمات أخرى من ألفا، والتي ستقدمها لك ألفا عند ذلك الاستخدام أو الشراء."
            )}
            <br />
          </p>
          </AccordionItem>
          <AccordionItem id={25} title={t("Updates to Our Terms", "تحديثات شروطنا")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "We may change our Service and policies, and we may need to make changes to these Terms so that they accurately reflect our Service and policies. Unless otherwise required by law, we will notify you (for example, through our Service) before we make changes to these Terms and give you an opportunity to review them before they go into effect. Then, if you continue to use the Service, you will be bound by the updated Terms. If you do not want to agree to these or any updated Terms, you can delete your account.",
              "قد نغيّر خدمتنا وسياساتنا، وقد نحتاج إلى إجراء تغييرات على هذه الشروط بحيث تعكس بدقة خدمتنا وسياساتنا. وما لم يقتضِ القانون خلاف ذلك، فإننا سنخطرك (على سبيل المثال، من خلال خدمتنا) قبل إجراء تغييرات على هذه الشروط ونمنحك فرصة لمراجعتها قبل أن تصبح سارية. وعندئذٍ، إذا واصلت استخدام الخدمة، فستكون ملتزماً بالشروط المحدّثة. وإذا لم ترغب في الموافقة على هذه الشروط أو أي شروط محدّثة، فيمكنك حذف حسابك."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={26} title={t("Intellectual Property", "الملكية الفكرية")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "The website and its entire contents, features and functionality (including but not limited to all information, software, text, displays, images, video and audio, and the design, selection and arrangement thereof), are owned by ALFA, its licensors or other providers of such material and are protected by Saudi Arabia and international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws. The material may not be copied, modified, reproduced, downloaded or distributed in any way, in whole or in part, without the express prior written permission of ALFA, unless and except as is expressly provided in these Terms & Conditions. Any unauthorized use of the material is prohibited.",
              "الموقع الإلكتروني وجميع محتوياته وميزاته ووظائفه (بما في ذلك على سبيل المثال لا الحصر جميع المعلومات والبرامج والنصوص وعناصر العرض والصور والفيديو والصوت، وكذلك تصميمها واختيارها وترتيبها) مملوكة لألفا أو مرخّصيها أو غيرهم من مزوّدي تلك المواد، وهي محمية بموجب قوانين المملكة العربية السعودية والقوانين الدولية لحقوق النشر والعلامات التجارية وبراءات الاختراع والأسرار التجارية وغيرها من قوانين الملكية الفكرية أو حقوق الملكية. ولا يجوز نسخ المواد أو تعديلها أو إعادة إنتاجها أو تنزيلها أو توزيعها بأي شكل، كلياً أو جزئياً، دون إذن كتابي مسبق وصريح من ألفا، ما لم وباستثناء ما هو منصوص عليه صراحةً في هذه الشروط والأحكام. ويُحظر أي استخدام غير مصرّح به للمواد."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={27} title={t("Agreement to Arbitrate", "الاتفاق على التحكيم")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "This section applies to any dispute EXCEPT IT DOESN’T INCLUDE A DISPUTE RELATING TO CLAIMS FOR INJUNCTIVE OR EQUITABLE RELIEF REGARDING THE ENFORCEMENT OR VALIDITY OF YOUR OR ALFA’s INTELLECTUAL PROPERTY RIGHTS. The term “dispute” means any dispute, action, or other controversy between you and ALFA concerning the Services or this agreement, whether in contract, warranty, tort, statute, regulation, ordinance, or any other legal or equitable basis. “Dispute” will be given the broadest possible meaning allowable under law.",
              "ينطبق هذا القسم على أي نزاع باستثناء أنه لا يشمل أي نزاع يتعلق بمطالبات الانتصاف القضائي أو العادل بشأن إنفاذ أو صحة حقوق الملكية الفكرية الخاصة بك أو بألفا. ويُقصد بمصطلح «النزاع» أي نزاع أو دعوى أو خلاف آخر بينك وبين ألفا بشأن الخدمات أو هذه الاتفاقية، سواء كان في إطار العقد أو الضمان أو المسؤولية التقصيرية أو النظام أو اللائحة أو القرار أو أي أساس قانوني أو عادل آخر. ويُعطى مصطلح «النزاع» أوسع معنى ممكن مسموح به بموجب القانون."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={28} title={t("Notice of Dispute", "إشعار النزاع")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "In the event of a dispute, you or ALFA must give the other a Notice of Dispute, which is a written statement that sets forth the name, address, and contact information of the party giving it, the facts giving rise to the dispute, and the relief requested. You must send any Notice of Dispute via email to: ALFA will send any Notice of Dispute to you by mail to your address if we have it, or otherwise to your email address. You and ALFA will attempt to resolve any dispute through informal negotiation within sixty (60) days from the date the Notice of Dispute is sent. After sixty (60) days, if you or ALFA do not succeed in settling the dispute, then the dispute shall be resolved according to the competent jurisdiction in Dammam, Eastern Province.",
              "في حال نشوء نزاع، يجب عليك أو على ألفا تقديم إشعار نزاع للطرف الآخر، وهو بيان كتابي يوضح اسم الطرف الذي يقدمه وعنوانه ومعلومات الاتصال به، والوقائع التي أدت إلى النزاع، والانتصاف المطلوب. ويجب عليك إرسال أي إشعار نزاع عبر البريد الإلكتروني إلى: وستقوم ألفا بإرسال أي إشعار نزاع إليك بالبريد إلى عنوانك إن كان لدينا، أو إلى عنوان بريدك الإلكتروني بخلاف ذلك. وستحاول أنت وألفا تسوية أي نزاع من خلال التفاوض غير الرسمي خلال ستين (60) يوماً من تاريخ إرسال إشعار النزاع. وبعد ستين (60) يوماً، إذا لم تنجح أنت أو ألفا في تسوية النزاع، فإن النزاع يُحل وفقاً للاختصاص القضائي المختص في الدمام، المنطقة الشرقية."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={29} title={t("Submissions and Privacy", "المشاركات والخصوصية")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "In the event that you submit or post any ideas, creative suggestions, designs, photographs, information, advertisements, data, or proposals, including ideas for new or improved products, services, features, technologies, or promotions, you expressly agree that such submissions will automatically be treated as non-confidential and non-proprietary and will become the sole property of ALFA without any compensation or credit to you whatsoever. ALFA and its affiliates shall have no obligations with respect to such submissions or posts and may use the ideas contained in such submissions or posts for any purposes in any medium in perpetuity, including, but not limited to, developing, manufacturing, and marketing products and services using such ideas.",
              "في حال قمت بتقديم أو نشر أي أفكار أو اقتراحات إبداعية أو تصاميم أو صور فوتوغرافية أو معلومات أو إعلانات أو بيانات أو مقترحات، بما في ذلك أفكار لمنتجات أو خدمات أو ميزات أو تقنيات أو عروض ترويجية جديدة أو محسّنة، فإنك توافق صراحةً على أن هذه المشاركات ستُعامَل تلقائياً على أنها غير سرية وغير مملوكة وستصبح ملكاً خالصاً لألفا دون أي تعويض أو إسناد لك على الإطلاق. ولا تتحمل ألفا والشركات التابعة لها أي التزامات فيما يتعلق بهذه المشاركات أو المنشورات، ويجوز لها استخدام الأفكار الواردة فيها لأي أغراض وبأي وسيلة وبشكل دائم، بما في ذلك على سبيل المثال لا الحصر تطوير وتصنيع وتسويق المنتجات والخدمات باستخدام تلك الأفكار."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={30} title={t("Typographical Errors", "الأخطاء المطبعية")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "In the event a product and/or service is listed at an incorrect price or with incorrect information due to typographical error, we shall have the right to refuse or cancel any orders placed for the product and/or service listed at the incorrect price. We shall have the right to refuse or cancel any such order whether or not the order has been confirmed and your credit card charged. If your credit card has already been charged for the purchase and your order is canceled, we shall immediately issue a credit to your credit card account or other payment account in the amount of the charge.",
              "في حال إدراج منتج و/أو خدمة بسعر غير صحيح أو بمعلومات غير صحيحة بسبب خطأ مطبعي، فإنه يحق لنا رفض أو إلغاء أي طلبات قُدّمت للمنتج و/أو الخدمة المدرجة بالسعر غير الصحيح. ويحق لنا رفض أو إلغاء أي طلب من هذا القبيل سواء تم تأكيد الطلب وتحصيل المبلغ من بطاقتك الائتمانية أم لا. وإذا سبق تحصيل المبلغ من بطاقتك الائتمانية مقابل الشراء وتم إلغاء طلبك، فسنصدر على الفور رصيداً لحساب بطاقتك الائتمانية أو حساب الدفع الآخر بقيمة المبلغ المحصّل."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={31} title={t("Miscellaneous", "أحكام متفرقة")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "If for any reason a court of competent jurisdiction finds any provision or portion of these Terms & Conditions to be unenforceable, the remainder of these Terms & Conditions will continue in full force and effect. Any waiver of any provision of these Terms & Conditions will be effective only if in writing and signed by an authorized representative of ALFA. ALFA will be entitled to injunctive or other equitable relief (without the obligations of posting any bond or surety) in the event of any breach or anticipatory breach by you. ALFA operates and controls the ALFA Service from its offices in Saudi Arabia. The Service is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation. Accordingly, those persons who choose to access the ALFA Service from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable. These Terms & Conditions (which include and incorporate the ALFA Privacy Policy) contain the entire understanding, and supersede all prior understandings, between you and ALFA concerning its subject matter, and cannot be changed or modified by you. The section headings used in this Agreement are for convenience only and will not be given any legal import.",
              "إذا وجدت محكمة مختصة لأي سبب أن أي بند أو جزء من هذه الشروط والأحكام غير قابل للتنفيذ، فإن باقي هذه الشروط والأحكام يظل سارياً بالكامل. ولا يكون أي تنازل عن أي بند من هذه الشروط والأحكام نافذاً إلا إذا كان كتابياً وموقّعاً من ممثل مفوّض لألفا. ويحق لألفا الحصول على انتصاف قضائي أو عادل آخر (دون أي التزام بتقديم أي كفالة أو ضمان) في حال أي مخالفة أو مخالفة متوقعة من جانبك. وتشغّل ألفا خدمة ألفا وتتحكم فيها من مكاتبها في المملكة العربية السعودية. والخدمة غير مخصصة للتوزيع على أو الاستخدام من قبل أي شخص أو جهة في أي ولاية قضائية أو دولة يكون فيها هذا التوزيع أو الاستخدام مخالفاً للقانون أو اللوائح. وبناءً عليه، فإن الأشخاص الذين يختارون الوصول إلى خدمة ألفا من مواقع أخرى يفعلون ذلك بمبادرة منهم وهم وحدهم المسؤولون عن الامتثال للقوانين المحلية، إن كانت القوانين المحلية منطبقة وبالقدر الذي تنطبق فيه. وتتضمن هذه الشروط والأحكام (التي تشمل وتدمج سياسة خصوصية ألفا) كامل الفهم، وتحل محل جميع الأفهام السابقة، بينك وبين ألفا بشأن موضوعها، ولا يمكنك تغييرها أو تعديلها. والعناوين المستخدمة لأقسام هذه الاتفاقية هي للتيسير فقط ولا تُعطى أي مدلول قانوني."
            )}
          </p>
          </AccordionItem>
          <AccordionItem id={32} title={t("Disclaimer", "إخلاء المسؤولية")}>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "ALFA is not responsible for any content, code, or any other imprecision. ALFA does not provide warranties or guarantees. In no event shall ALFA be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice. The ALFA Service and its contents are provided “as is” and “as available” without any warranty or representations of any kind, whether express or implied.",
              "ألفا غير مسؤولة عن أي محتوى أو شيفرة برمجية أو أي عدم دقة آخر. ولا تقدم ألفا أي ضمانات أو كفالات. ولا تتحمل ألفا بأي حال من الأحوال المسؤولية عن أي أضرار خاصة أو مباشرة أو غير مباشرة أو تبعية أو عرضية أو أي أضرار مهما كانت، سواء في إطار دعوى عقدية أو إهمال أو مسؤولية تقصيرية أخرى، تنشأ عن استخدام الخدمة أو محتوياتها أو فيما يتعلق بذلك. وتحتفظ الشركة بالحق في إجراء إضافات أو حذف أو تعديلات على محتويات الخدمة في أي وقت دون إشعار مسبق. وتُقدَّم خدمة ألفا ومحتوياتها «كما هي» و«حسبما هي متاحة» دون أي ضمان أو إقرارات من أي نوع، سواء كانت صريحة أو ضمنية."
            )}
            <br />
            <br /> {t(
              "ALFA is a distributor and not a publisher of the content supplied by third parties; as such, ALFA exercises no editorial control over such content and makes no warranty or representation as to the accuracy, reliability, or currency of any information, content, service, or merchandise provided through or accessible via the ALFA Service. Without limiting the foregoing, ALFA specifically disclaims all warranties and representations in any content transmitted on or in connection with the ALFA Service or on sites that may appear as links on the ALFA Service, or in the products provided as a part of, or otherwise in connection with, the ALFA Service, including without limitation any warranties of merchantability, fitness for a particular purpose, or non-infringement of third-party rights. No oral advice or written information given by ALFA or any of its affiliates, employees, officers, directors, agents, or the like will create a warranty. Price and availability information is subject to change without notice. Without limiting the foregoing, ALFA does not warrant that the ALFA Service will be uninterrupted, uncorrupted, timely, or error-free.",
              "ألفا موزّع وليست ناشراً للمحتوى المقدّم من أطراف ثالثة؛ وبناءً عليه، لا تمارس ألفا أي رقابة تحريرية على هذا المحتوى ولا تقدم أي ضمان أو إقرار بشأن دقة أو موثوقية أو حداثة أي معلومات أو محتوى أو خدمة أو بضائع تُقدَّم من خلال خدمة ألفا أو يمكن الوصول إليها عبرها. ودون تقييد لما سبق، تُخلي ألفا على وجه التحديد مسؤوليتها عن جميع الضمانات والإقرارات في أي محتوى يُبث على خدمة ألفا أو فيما يتعلق بها أو على المواقع التي قد تظهر كروابط على خدمة ألفا، أو في المنتجات المقدّمة كجزء من خدمة ألفا أو فيما يتعلق بها بخلاف ذلك، بما في ذلك على سبيل المثال لا الحصر أي ضمانات تتعلق بالرواج التجاري أو الملاءمة لغرض معين أو عدم انتهاك حقوق الأطراف الثالثة. ولا تنشئ أي مشورة شفهية أو معلومات كتابية تقدمها ألفا أو أي من شركاتها التابعة أو موظفيها أو مسؤوليها أو مديريها أو وكلائها أو ما شابه ذلك أي ضمان. وتخضع معلومات الأسعار والتوافر للتغيير دون إشعار. ودون تقييد لما سبق، لا تضمن ألفا أن تكون خدمة ألفا دون انقطاع أو غير تالفة أو في الوقت المناسب أو خالية من الأخطاء."
            )}
          </p>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default TermsAndConditions;
