import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/about-us.png";
import contactuscall from "../Assets/Icons/callus.svg";
import contactusemail from "../Assets/Icons/emailus.svg";
import { Accordion, AccordionItem } from "../Components/Accordion";

// import AboutUSComp from '../Components/AboutUSComp';
const CookiesPolicy = () => {
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
            Cookies <span className="text-[#2C95D2]">Policy</span>
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16">
        <h1
          className="text-4xl font-bold mb-4 text-center md:text-left text-white font-roboto font-light"
          style={{ letterSpacing: "-0.02em" }}
        >
          Alfa Cookies Policy
        </h1>
        <Accordion allowMultiple defaultOpen={[0]}>
          <AccordionItem id={0} title="Cookies Policy">
            <p className="text-lg mt-4 text-white/75">
              This Cookies Policy explains what cookies are and how we use them.
              For further information on how we use, store and keep your personal
              data secure, see our Privacy Policy.
            </p>
          </AccordionItem>
          <AccordionItem id={1} title="What are Cookies?">
            <p className="text-lg mt-4 text-white/75">
              Cookies are small text files that are stored on the browser or hard
              drive of your computer or mobile device when you visit a webpage.
              Cookies work to make your experience browsing the site as smooth as
              possible. They can remember your preferences, so you don’t have to
              repeatedly insert your details, and they can also help the owners of
              the website to analyze how their site is being used.
              <br />
              <br />
              There are different types of cookies. Some cookies come directly
              from the website you are browsing and others come from third parties
              which place cookies on the site. Cookies can be stored for varying
              lengths of time on your browser or device. Session cookies are
              deleted from your computer or device when you close your browser.
              Persistent cookies will remain stored on your computer or device
              until deleted or until they reach their expiry date.
            </p>
          </AccordionItem>
          <AccordionItem id={2} title="How do we use Cookies?">
            <p className="text-lg mt-4 text-white/75">
              Session cookies enable us to keep track of you while you are on the
              site and to help you navigate the site better and faster. Persistent
              cookies enable the site to recognize you when you visit and keep
              track of your preferences in relation to your use of the site.
            </p>
          </AccordionItem>
          <AccordionItem id={3} title="Third-Party Cookies">
            <p className="text-lg mt-4 text-white/75">
              We use Google Analytics to analyze the use of our website. Google
              Analytics generates statistical and other information about website
              use by means of cookies which are stored on the users’ computers.
              <br />
              <br />
              We may also use other third-party cookies from time to time and for
              more information on these you can contact us at the email below:
              <br />
              <br />
              <p className="font-bold">
              info@alfamrinesa.com
              </p>
            </p>
          </AccordionItem>
          <AccordionItem id={4} title="Opting Out & Disabling Cookies">
            <p className="text-lg mt-4 text-white/75">
              You may disable cookies by changing the cookie preferences settings on your browser. However, if you do, this may affect your enjoyment of the website and it may not work as it should.
            </p>
          </AccordionItem>
          <AccordionItem id={5} title="Changes to this Cookie Policy">
            <p className="text-lg mt-4 text-white/75">
              We may update this policy periodically and you are advised check it regularly so as to be aware of the latest version.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default CookiesPolicy;
