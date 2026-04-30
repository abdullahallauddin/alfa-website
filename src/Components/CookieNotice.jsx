import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "alfa-cookie-preference";

const CookieNotice = () => {
  const [preference, setPreference] = useState(null);

  useEffect(() => {
    setPreference(window.localStorage.getItem(STORAGE_KEY));
  }, []);

  const savePreference = (value) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setPreference(value);
  };

  if (preference) {
    return null;
  }

  return (
    <aside className="cookie-notice" aria-label="Cookie and privacy notice">
      <div>
        <p className="eyebrow">Privacy Notice</p>
        <h2>Cookies and third-party embeds</h2>
        <p>
          This site stores an essential preference in your browser. Third-party
          embeds or forms, such as maps and inquiry providers, may set their own
          cookies only when you choose to load or use them.
        </p>
      </div>
      <div className="cookie-notice__actions">
        <button type="button" onClick={() => savePreference("essential")}>Essential only</button>
        <button type="button" onClick={() => savePreference("all")}>Accept all</button>
        <Link to="/cookies-policy">Cookie Policy</Link>
      </div>
    </aside>
  );
};

export default CookieNotice;
