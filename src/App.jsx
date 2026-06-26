import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Navbar from "./Components/Navbar.jsx";
import ScrollToTopButton from "./Components/ScrollToTopButton.jsx";
import WhatsAppButton from "./Components/WhatsAppButton.jsx";
import Loader from "./Components/Loader.jsx";
import Footer from "./Components/Footer.jsx";
import InnerLayout from "./Components/InnerLayout.jsx";

// Lazy load views
const Home = lazy(() => import("./Views/Home"));

// Combined section-level pages
const WhoWeAre = lazy(() => import("./Views/WhoWeAre"));
const WhatWeDo = lazy(() => import("./Views/WhatWeDo"));
const Sustainability = lazy(() => import("./Views/Sustainability"));
const MediaCenter = lazy(() => import("./Views/MediaCenter"));
const GetInTouch = lazy(() => import("./Views/GetInTouch"));

// Standalone pages kept as-is
const Services = lazy(() => import("./Views/Services"));
const PrivacyPolicy = lazy(() => import("./Views/PrivacyPolicy"));
const CookiesPolicy = lazy(() => import("./Views/CookiesPolicy"));
const TermsAndConditions = lazy(() => import("./Views/TermsAndConditions"));
const AboutUs = lazy(() => import("./Views/AboutUs"));
const Portfolio = lazy(() => import("./Views/Portfolio"));
const GetStarted = lazy(() => import("./Views/GetStarted"));
const NewsArticle = lazy(() => import("./Views/NewsArticle"));
const ReadMore = lazy(() => import("./Views/ReadMore"));

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <ScrollToTopButton />
          <WhatsAppButton />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route element={<InnerLayout />}>
                {/* ===== Combined section-level pages ===== */}
                <Route path="/who-we-are" element={<WhoWeAre />} />
                <Route path="/what-we-do" element={<WhatWeDo />} />
                <Route path="/sustainability" element={<Sustainability />} />
                <Route path="/media-center" element={<MediaCenter />} />
                <Route path="/get-in-touch" element={<GetInTouch />} />

                {/* ===== Standalone pages ===== */}
                <Route path="/services" element={<Services />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/cookies-policy" element={<CookiesPolicy />} />
                <Route
                  path="/terms-and-conditions"
                  element={<TermsAndConditions />}
                />
                <Route path="/readmoreaboutcompany" element={<AboutUs />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/getstarted" element={<GetStarted />} />

                {/* ===== Redirects: old subpages → combined page + anchor ===== */}
                {/* Who We Are */}
                <Route path="/groupoverview" element={<Navigate to="/who-we-are#group-overview" replace />} />
                <Route path="/our-statement" element={<Navigate to="/who-we-are#mission-vision-goals" replace />} />
                <Route path="/core-values" element={<Navigate to="/who-we-are#core-values" replace />} />
                <Route path="/our-strategy" element={<Navigate to="/who-we-are#our-strategy" replace />} />
                <Route path="/meet-our-leadership" element={<Navigate to="/who-we-are" replace />} />
                <Route path="/our-culture" element={<Navigate to="/who-we-are#our-culture" replace />} />
                <Route path="/our-facilities" element={<Navigate to="/who-we-are#our-facilities" replace />} />
                <Route path="/our-capabilities" element={<Navigate to="/who-we-are#our-capabilities" replace />} />
                <Route path="/accreditations" element={<Navigate to="/who-we-are#accreditations" replace />} />

                {/* What We Do */}
                <Route path="/marine-and-offshore-division" element={<Navigate to="/what-we-do#marine-offshore" replace />} />
                <Route path="/construction-division" element={<Navigate to="/what-we-do#construction" replace />} />
                <Route path="/fabrication-and-machining-division" element={<Navigate to="/what-we-do#fabrication-machining" replace />} />
                <Route path="/trading-division" element={<Navigate to="/what-we-do#trading" replace />} />
                <Route path="/ict-division" element={<Navigate to="/what-we-do#ict" replace />} />
                <Route path="/facility-management-division" element={<Navigate to="/what-we-do#facility-management" replace />} />
                <Route path="/joinery-division" element={<Navigate to="/what-we-do#joinery" replace />} />

                {/* Sustainability */}
                <Route path="/environmental-responsibility" element={<Navigate to="/sustainability#environmental-responsibility" replace />} />
                <Route path="/health-safety-and-environmental-policy" element={<Navigate to="/sustainability#hse-policy" replace />} />
                <Route path="/quality-assurance-policy" element={<Navigate to="/sustainability#quality-assurance" replace />} />
                <Route path="/ethics-and-compliance" element={<Navigate to="/sustainability#ethics-compliance" replace />} />

                {/* Media Center */}
                <Route path="/news" element={<Navigate to="/media-center#news" replace />} />
                <Route path="/download-center" element={<Navigate to="/media-center#downloads" replace />} />

                {/* Get In Touch */}
                <Route path="/commercial-inquiries" element={<Navigate to="/get-in-touch#commercial-inquiries" replace />} />
                <Route path="/contact" element={<Navigate to="/get-in-touch#contact" replace />} />
                <Route path="/careers" element={<Navigate to="/get-in-touch#careers" replace />} />
                <Route path="/become-a-supplier" element={<Navigate to="/get-in-touch#become-a-supplier" replace />} />
                <Route path="/whistle-blowing" element={<Navigate to="/get-in-touch#whistleblowing" replace />} />

                {/* News article detail */}
                <Route path="/news/:slug" element={<NewsArticle />} />

                {/* Dynamic service detail (keep last) */}
                <Route path="/:serviceName" element={<ReadMore />} />
              </Route>
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
