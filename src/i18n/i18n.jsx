import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const STORAGE_KEY = "alfa_lang";
const I18nContext = createContext({
  lang: "en",
  dir: "ltr",
  setLang: () => {},
  toggle: () => {},
});

const getInitialLang = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "ar" || saved === "en") return saved;
  } catch (e) {
    /* ignore */
  }
  return "en";
};

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang);
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = dir;
    html.classList.toggle("lang-ar", lang === "ar");
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore */
    }

    // Localized SEO metadata (title + descriptions + OG locale)
    const META = {
      en: {
        title:
          "ALFA Group | Engineering, Fabrication & Construction Solutions",
        description:
          "ALFA Group delivers integrated Engineering, Procurement, Fabrication & Construction (EPFC) solutions across Oil & Gas, Marine & Offshore, Energy and Construction sectors in Saudi Arabia and the Middle East.",
        locale: "en_US",
      },
      ar: {
        title: "مجموعة ألفا | حلول الهندسة والتصنيع والإنشاءات",
        description:
          "تقدّم مجموعة ألفا حلولاً متكاملة في الهندسة والمشتريات والتصنيع والإنشاءات (EPFC) عبر قطاعات النفط والغاز والبحرية والمنشآت البحرية والطاقة والإنشاءات في المملكة العربية السعودية والشرق الأوسط.",
        locale: "ar_SA",
      },
    };
    const m = META[lang] || META.en;
    document.title = m.title;
    const setMeta = (selector, value) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute("content", value);
    };
    setMeta('meta[name="description"]', m.description);
    setMeta('meta[property="og:title"]', m.title);
    setMeta('meta[name="twitter:title"]', m.title);
    setMeta('meta[property="og:description"]', m.description);
    setMeta('meta[name="twitter:description"]', m.description);
    setMeta('meta[property="og:locale"]', m.locale);
  }, [lang, dir]);

  const setLang = useCallback((l) => {
    if (l === "ar" || l === "en") setLangState(l);
  }, []);
  const toggle = useCallback(
    () => setLangState((l) => (l === "ar" ? "en" : "ar")),
    []
  );

  return (
    <I18nContext.Provider value={{ lang, dir, setLang, toggle }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

/**
 * Translation helper. Usage: const t = useT(); t("English", "العربية").
 * Returns the Arabic string in Arabic mode, English otherwise. Arabic falls
 * back to English only if an Arabic string is not provided.
 */
export function useT() {
  const { lang } = useContext(I18nContext);
  return useCallback((en, ar) => (lang === "ar" ? (ar ?? en) : en), [lang]);
}
