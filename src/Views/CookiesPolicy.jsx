import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/about-us.png";
import { Accordion, AccordionItem } from "../Components/Accordion";
import { reopenCookiePreferences } from "../Components/CookieConsent";
import { useT } from "../i18n/i18n";

const LAST_UPDATED = "27 June 2026";

const CookiesPolicy = () => {
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
            {t("Cookies", "سياسة")} <span className="text-[#2C95D2]">{t("Policy", "ملفات تعريف الارتباط")}</span>
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16">
        <p className="text-sm text-white/45">{t("Last updated:", "آخر تحديث:")} {t(LAST_UPDATED, "27 يونيو 2026")}</p>
        <h2
          className="text-3xl md:text-4xl font-light mt-3 mb-4 text-white font-roboto"
          style={{ letterSpacing: "-0.02em" }}
        >
          {t("Cookies Policy", "سياسة ملفات تعريف الارتباط")}
        </h2>
        <p className="text-lg mt-4 text-white/75 leading-relaxed">
          {t("This Cookies Policy explains how ALFA Marine Industrial Services Company (“ALFA”, “we”, “our” or “us”) uses cookies and similar technologies on our website, in line with the Personal Data Protection Law of the Kingdom of Saudi Arabia (PDPL). For how we handle personal data more generally, please see our", "توضح سياسة ملفات تعريف الارتباط هذه كيفية استخدام شركة ألفا البحرية للخدمات الصناعية («ألفا» أو «نحن» أو «لنا») لملفات تعريف الارتباط والتقنيات المماثلة على موقعنا الإلكتروني، بما يتوافق مع نظام حماية البيانات الشخصية في المملكة العربية السعودية (النظام). ولمعرفة كيفية تعاملنا مع البيانات الشخصية بشكل عام، يُرجى الاطلاع على")}{" "}
          <a href="/privacy-policy" className="text-[#2C95D2] hover:underline">
            {t("Privacy Policy", "سياسة الخصوصية")}
          </a>
          {t(".", " الخاصة بنا.")}
        </p>

        <div className="mt-6">
          <button
            type="button"
            onClick={reopenCookiePreferences}
            className="rounded-full bg-[#2C95D2] px-6 py-2.5 font-roboto text-sm font-medium text-white transition-colors hover:bg-[#2C95D2]/90"
          >
            {t("Manage cookie preferences", "إدارة تفضيلات ملفات تعريف الارتباط")}
          </button>
        </div>

        <div className="mt-8">
          <Accordion allowMultiple defaultOpen={[0]}>
            <AccordionItem id={0} title={t("What are cookies?", "ما هي ملفات تعريف الارتباط؟")}>
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                {t(
                  "Cookies are small text files placed on your device when you visit a website. They help the site function, remember your preferences, and provide information to the site owners about how the site is used. Cookies may be set by us (first-party) or by third parties. Session cookies are deleted when you close your browser, while persistent cookies remain until they expire or are deleted.",
                  "ملفات تعريف الارتباط هي ملفات نصية صغيرة توضع على جهازك عند زيارتك لموقع إلكتروني. وهي تساعد على تشغيل الموقع وتذكّر تفضيلاتك وتزويد مالكي الموقع بمعلومات حول كيفية استخدامه. وقد يتم ضبط ملفات تعريف الارتباط من قِبَلنا (طرف أول) أو من قِبَل أطراف ثالثة. وتُحذف ملفات تعريف ارتباط الجلسة عند إغلاق المتصفح، بينما تبقى ملفات تعريف الارتباط الدائمة إلى أن تنتهي صلاحيتها أو يتم حذفها."
                )}
              </p>
            </AccordionItem>

            <AccordionItem id={1} title={t("Categories of cookies we use", "فئات ملفات تعريف الارتباط التي نستخدمها")}>
              <ul className="list-disc list-inside mt-2 space-y-2 text-white/75 marker:text-[#2C95D2]">
                <li>
                  <span className="text-white/90">{t("Strictly necessary", "ضرورية للغاية")}</span> {t("— required for the website to function (e.g. security, navigation and remembering your cookie choice). These are always active and do not require consent.", "— لازمة لعمل الموقع الإلكتروني (مثل الأمان والتنقل وتذكّر خيارك بشأن ملفات تعريف الارتباط). وهي نشطة دائماً ولا تتطلب موافقة.")}
                </li>
                <li>
                  <span className="text-white/90">{t("Analytics / performance", "التحليلات / الأداء")}</span> {t("— help us understand how visitors use the site so we can improve it. These are only used with your consent.", "— تساعدنا على فهم كيفية استخدام الزوار للموقع حتى نتمكن من تحسينه. ولا تُستخدم إلا بموافقتك.")}
                </li>
                <li>
                  <span className="text-white/90">{t("Functional", "الوظيفية")}</span> {t("— remember choices you make to provide a better experience. Used only with your consent where they are non-essential.", "— تتذكّر الخيارات التي تقوم بها لتوفير تجربة أفضل. ولا تُستخدم إلا بموافقتك حيثما تكون غير أساسية.")}
                </li>
              </ul>
            </AccordionItem>

            <AccordionItem id={2} title={t("Your consent", "موافقتك")}>
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                {t(
                  "When you first visit our website, we ask for your consent to use non-essential cookies through a cookie banner. Strictly necessary cookies are used without consent as they are essential to the service. You can accept or reject non-essential cookies and change your decision at any time using the “Manage cookie preferences” button above.",
                  "عند زيارتك لموقعنا الإلكتروني لأول مرة، نطلب موافقتك على استخدام ملفات تعريف الارتباط غير الأساسية من خلال شريط ملفات تعريف الارتباط. وتُستخدم ملفات تعريف الارتباط الضرورية للغاية دون موافقة لأنها أساسية للخدمة. ويمكنك قبول أو رفض ملفات تعريف الارتباط غير الأساسية وتغيير قرارك في أي وقت باستخدام زر «إدارة تفضيلات ملفات تعريف الارتباط» أعلاه."
                )}
              </p>
            </AccordionItem>

            <AccordionItem id={3} title={t("Third-party cookies", "ملفات تعريف الارتباط الخاصة بأطراف ثالثة")}>
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                {t(
                  "Where enabled with your consent, we may use third-party analytics services (such as Google Analytics) that set their own cookies to generate aggregated statistics about website use. These providers process data in accordance with their own privacy policies. We may also embed third-party content (such as maps), which may set cookies controlled by those providers.",
                  "حيثما يكون ذلك مفعّلاً بموافقتك، قد نستخدم خدمات تحليلات تابعة لأطراف ثالثة (مثل Google Analytics) تقوم بضبط ملفات تعريف الارتباط الخاصة بها لإنشاء إحصاءات مجمّعة حول استخدام الموقع. ويعالج هؤلاء المزودون البيانات وفقاً لسياسات الخصوصية الخاصة بهم. وقد نقوم أيضاً بتضمين محتوى تابع لأطراف ثالثة (مثل الخرائط)، والذي قد يضبط ملفات تعريف ارتباط يتحكم فيها هؤلاء المزودون."
                )}
              </p>
            </AccordionItem>

            <AccordionItem id={4} title={t("How to manage or disable cookies", "كيفية إدارة ملفات تعريف الارتباط أو تعطيلها")}>
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                {t(
                  "You can manage non-essential cookies through our preferences control, and you can also control cookies through your browser settings — most browsers let you block or delete cookies. Please note that disabling certain cookies may affect how the website functions.",
                  "يمكنك إدارة ملفات تعريف الارتباط غير الأساسية من خلال أداة التفضيلات لدينا، كما يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات متصفحك — إذ تتيح لك معظم المتصفحات حظر ملفات تعريف الارتباط أو حذفها. يُرجى ملاحظة أن تعطيل بعض ملفات تعريف الارتباط قد يؤثر على طريقة عمل الموقع الإلكتروني."
                )}
              </p>
            </AccordionItem>

            <AccordionItem id={5} title={t("Changes to this Cookies Policy", "التغييرات على سياسة ملفات تعريف الارتباط هذه")}>
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                {t(
                  "We may update this Cookies Policy from time to time. The “Last updated” date above shows when it was last revised. Please review it periodically.",
                  "قد نقوم بتحديث سياسة ملفات تعريف الارتباط هذه من حين لآخر. ويوضح تاريخ «آخر تحديث» أعلاه موعد آخر مراجعة لها. يُرجى مراجعتها بشكل دوري."
                )}
              </p>
            </AccordionItem>

            <AccordionItem id={6} title={t("Contact us", "اتصل بنا")}>
              <p className="text-lg mt-2 text-white/75 leading-relaxed">
                {t("For questions about our use of cookies, contact us at", "للاستفسارات حول استخدامنا لملفات تعريف الارتباط، يُرجى التواصل معنا عبر")}{" "}
                <a
                  href="mailto:info@alfamarinesa.com"
                  className="text-[#2C95D2] hover:underline"
                >
                  info@alfamarinesa.com
                </a>
                {t(".", ".")}
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default CookiesPolicy;
