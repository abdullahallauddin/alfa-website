import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { I18nProvider } from './i18n/i18n';

// Safari (incl. iOS) handles `scroll-snap-type: mandatory` + wheel-jacking
// poorly, which can lock scrolling. Tag the document so we can relax those.
if (typeof navigator !== 'undefined') {
  const ua = navigator.userAgent;
  const isSafari =
    (/safari/i.test(ua) && !/chrome|chromium|crios|fxios|android|edg/i.test(ua)) ||
    /iphone|ipad|ipod/i.test(ua);
  if (isSafari) document.documentElement.classList.add('is-safari');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
