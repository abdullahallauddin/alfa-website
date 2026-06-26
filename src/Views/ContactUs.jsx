import React, { useState, useEffect } from "react";
import backgroundImage from "../Assets/Images/markup.png";
import contactuscall from "../Assets/Icons/callus.svg";
import contactusemail from "../Assets/Icons/emailus.svg";
import ContactUsInside from "../Assets/Images/contactus5.png";
import { motion } from "framer-motion";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";

import Markup from "../Assets/Images/markup.png";
const countryOptions = [
  { code: "+92", label: "pk Pakistan (+92)" },
  { code: "+966", label: "🇸🇦 Saudi Arabia (+966)" },
  { code: "+971", label: "🇦🇪 United Arab Emirates (+971)" },
  { code: "+1", label: "🇺🇸 United States (+1)" },
  { code: "+44", label: "🇬🇧 United Kingdom (+44)" },
  { code: "+91", label: "🇮🇳 India (+91)" },
  { code: "+61", label: "🇦🇺 Australia (+61)" },
  { code: "+81", label: "🇯🇵 Japan (+81)" },
  { code: "+49", label: "🇩🇪 Germany (+49)" },
  { code: "+33", label: "🇫🇷 France (+33)" },
  { code: "+39", label: "🇮🇹 Italy (+39)" },
  { code: "+7", label: "🇷🇺 Russia (+7)" },
  { code: "+55", label: "🇧🇷 Brazil (+55)" },
  { code: "+27", label: "🇿🇦 South Africa (+27)" },
  { code: "+82", label: "🇰🇷 South Korea (+82)" },
  { code: "+34", label: "🇪🇸 Spain (+34)" },
  { code: "+46", label: "🇸🇪 Sweden (+46)" },
  { code: "+64", label: "🇳🇿 New Zealand (+64)" },
  { code: "+52", label: "🇲🇽 Mexico (+52)" },
  { code: "+20", label: "🇪🇬 Egypt (+20)" },
  { code: "+62", label: "🇮🇩 Indonesia (+62)" },
];

const ContactUs = ({ embedded }) => {
  const [selectedCode, setSelectedCode] = useState("+966"); // ✅ Default to +966
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const existingScript = document.getElementById(
      "formScript6785013000000617220"
    );
    if (!existingScript) {
      <iframe
        title="Contact Us Form"
        src="https://us.bigin.online/org886525305/forms/contact-us"
        frameBorder="0"
        style={{ width: "100%", height: "800px", border: "none" }}
      ></iframe>;
    }
    return () => {
      const script = document.getElementById("formScript6785013000000617220");
      if (script) script.remove();
    };
  }, []);

  return (
    <>
      {!embedded && (
      <SectionWrapperReverse>
        <div
          className="bg-cover bg-center h-[clamp(18rem,46vh,30rem)] flex items-center justify-center"
          style={{ backgroundImage: `url(${Markup})` }}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h1 className="text-5xl text-white font-bold mb-28">Contact Us</h1>
          </motion.div>
        </div>
      </SectionWrapperReverse>
      )}
      <motion.div
        className="md:w-2/2 mb-6 md:mb-0"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="w-full py-6 md:py-10">
          <h1
            className="text-4xl font-roboto font-light mb-4 text-center md:text-left text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            CONTACT US
          </h1>

          {/* Main Flex Layout */}
          <div className="flex flex-col md:flex-row items-stretch gap-6">
            {/* Left Image Column */}
            <div className="hidden md:block md:w-[30%] rounded-2xl overflow-hidden ring-1 ring-white/10">
              <img
                src={ContactUsInside}
                alt="Contact Illustration"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Right Form Column */}
            <div className="w-full md:w-[70%] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-white p-6 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">
              <iframe
                title="Contact Us Form"
                src="https://us.bigin.online/org886525305/forms/contact-us"
                frameBorder="0"
                className="w-full"
                style={{ height: "800px", border: "none" }}
              ></iframe>
            </div>
          </div>
        </div>
      </motion.div>

      {/* map */}
      <div className="w-full mt-16">
        <h2
          className="text-3xl font-roboto font-light mb-6 text-center text-white"
          style={{ letterSpacing: "-0.02em" }}
        >
          Our Office Location
        </h2>
        <div className="w-full mt-8 -mb-20 rounded-2xl overflow-hidden ring-1 ring-white/10">
          <iframe
            title="Alfa Marine Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7716012845244!2d50.1077281!3d26.4345218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fb6d8a3e52d5%3A0x36ad5b73c9d39550!2sAlfa%20Marine%20%26%20Industrial%20Services%20Company!5e0!3m2!1sen!2s!4v1717356840000!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
