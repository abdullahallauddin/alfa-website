import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import React, { useEffect, Suspense, lazy } from "react";
import Sustainability from "./Views/OurStatement.jsx";
import OurValues from "./Views/CoreValues.jsx";
import Navbar from "./Components/Navbar.jsx";
import ScrollToTopButton from "./Components/ScrollToTopButton.jsx";
import WhatsAppButton from "./Components/WhatsAppButton.jsx";
import Loader from "./Components/Loader.jsx";
import Footer from "./Components/Footer.jsx"
// Lazy load views
const Home = lazy(() => import("./Views/Home"));
const Services = lazy(() => import("./Views/Services"));
const GroupOverview = lazy(() => import("./Views/GroupOverview"));
const OurStatement = lazy(() => import("./Views/OurStatement"));
const CoreValues = lazy(() => import("./Views/CoreValues"));
const Strategy = lazy(() => import("./Views/Strategy"));
const Leadership = lazy(() => import("./Views/Leadership"));
const OurCulture = lazy(() => import("./Views/OurCulture"));
const Facility = lazy(() => import("./Views/Facility"));
const Capability = lazy(() => import("./Views/Capability"));
const Accreditation = lazy(() => import("./Views/Accreditation"));

const MarineOffshoreDivision = lazy(() => import("./Views/MarineOffshoreDivision"));
const ConstructionDivision = lazy(() => import("./Views/ConstructionDivision"));
const FabricationDivision = lazy(() => import("./Views/FabricationDivision"));
const TradingDivision = lazy(() => import("./Views/TradingDivision"));
const ICTDivision = lazy(() => import("./Views/ICTDivision"));
const FacilityManagement = lazy(() => import("./Views/FacilityManagement"));
const Joinery = lazy(() => import("./Views/Joinery"));

const EnvironmentalResponsability = lazy(() => import("./Views/EnvironmentalResponsability"));
const HSEPolicy = lazy(() => import("./Views/HSEPolicy"));
const QualityAssurancePolicy = lazy(() => import("./Views/QualityAssurancePolicy"));
const EthicsCompliance = lazy(() => import("./Views/EthicsCompliance"));

const NewsSection = lazy(() => import("./Views/NewsSection"));
const DownloadCenter = lazy(() => import("./Views/DownloadCenter"));

const CommercialInquiries = lazy(() => import("./Views/CommercialInquiries"));
const ContactUs = lazy(() => import("./Views/ContactUs"));
const CareersInquiries = lazy(() => import("./Views/CareersInquiries"));
const Supplier = lazy(() => import("./Views/Supplier"));
const WhistleBlowing = lazy(() => import("./Views/WhistleBlowing"));

const PrivacyPolicy = lazy(() => import("./Views/PrivacyPolicy"));
const CookiesPolicy = lazy(() => import("./Views/CookiesPolicy"));
const TermsAndConditions = lazy(() => import("./Views/TermsAndConditions"));

const AboutUs = lazy(() => import("./Views/AboutUs"));
const Portfolio = lazy(() => import("./Views/Portfolio"));
const GetStarted = lazy(() => import("./Views/GetStarted"));
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
              {/* Who We are */}
              <Route exact path="/" element={<Home />} />
              <Route exact path="/services" element={<Services />} />
              <Route exact path="/groupoverview" element={<GroupOverview />} />
              <Route exact path="/our-statement" element={<OurStatement />} />
              <Route exact path="/core-values" element={<CoreValues />} />
              <Route exact path="/our-strategy" element={<Strategy />} />
              <Route
                exact
                path="/meet-our-leadership"
                element={<Leadership />}
              />
              <Route exact path="/our-culture" element={<OurCulture />} />
              <Route exact path="/our-facilities" element={<Facility />} />
              <Route exact path="/our-capabilities" element={<Capability />} />
              <Route exact path="/accreditations" element={<Accreditation />} />

              {/* Divisions Pages */}
              <Route
                exact
                path="/marine-and-offshore-division"
                element={<MarineOffshoreDivision />}
              />
              <Route
                exact
                path="/construction-division"
                element={<ConstructionDivision />}
              />
              <Route
                exact
                path="/fabrication-and-machining-division"
                element={<FabricationDivision />}
              />
              <Route
                exact
                path="/trading-division"
                element={<TradingDivision />}
              />
              <Route exact path="/ict-division" element={<ICTDivision />} />
              <Route
                exact
                path="/facility-management-division"
                element={<FacilityManagement />}
              />
              <Route exact path="/joinery-division" element={<Joinery />} />

              {/* Sustainability */}
              <Route
                exact
                path="/environmental-responsibility"
                element={<EnvironmentalResponsability />}
              />
              <Route
                exact
                path="/health-safety-and-environmental-policy"
                element={<HSEPolicy />}
              />
              <Route
                exact
                path="/quality-assurance-policy"
                element={<QualityAssurancePolicy />}
              />
              <Route
                exact
                path="/ethics-and-compliance"
                element={<EthicsCompliance />}
              />

              {/* Media Center */}
              <Route exact path="/news" element={<NewsSection />} />
              <Route
                exact
                path="/download-center"
                element={<DownloadCenter />}
              />

              {/* Contact us */}
              <Route
                exact
                path="/commercial-inquiries"
                element={<CommercialInquiries />}
              />
              <Route exact path="/contact" element={<ContactUs />} />
              <Route exact path="/careers" element={<CareersInquiries />} />
              <Route exact path="/become-a-supplier" element={<Supplier />} />
              <Route
                exact
                path="/whistle-blowing"
                element={<WhistleBlowing />}
              />

              {/* Privacy & Legal */}
              <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route exact path="/cookies-policy" element={<CookiesPolicy />} />
              <Route
                exact
                path="/terms-and-conditions"
                element={<TermsAndConditions />}
              />

              {/* Others */}
              <Route exact path="/readmoreaboutcompany" element={<AboutUs />} />
              <Route exact path="/portfolio" element={<Portfolio />} />
              <Route exact path="/getstarted" element={<GetStarted />} />
              <Route exact path="/:serviceName" element={<ReadMore />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
