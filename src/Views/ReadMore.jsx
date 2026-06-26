import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import businesselectricitybg from "../Assets/Images/businesselectricitybg.png";
import electricityimage1 from "../Assets/Images/electricityimage1.png";
import electricityimage2 from "../Assets/Images/electricityimage2.png";
import electricityinnerbg from "../Assets/Images/electricityinnerbg.png";
import gasimage1 from "../Assets/Images/gasimage1.png";
import gasimage2 from "../Assets/Images/gasimage2.png";
import gasinnerbg from "../Assets/Images/gasinnerbg.png";
import telecomimage1 from "../Assets/Images/telecomimage1.png";
import telecomimage2 from "../Assets/Images/telecomimage2.png";

const services = [
  {
    id: 1,
    link: 'business_electricity',
    maintitle: "Business Electricity",
    title1: 'London Tradex: Your Premier UK Business Electricity Consultants',
    description1: 'In the complex and ever-changing landscape of business energy procurement, finding the right energy supplier for your business can be a daunting task. This is where London Tradex steps in as your trusted partner. We are dedicated to simplifying this process and ensuring that your business benefits from the best possible energy deals available in the market. Our commitment to excellence and customer satisfaction has established us as the leading business energy consultants in the UK.',
    generalimage1: electricityimage1,
    title2: "Unmatched Expertise and Extensive Comparison",
    description2: 'At London Tradex, we pride ourselves on our extensive knowledge and expertise in the energy sector. Our team of seasoned consultants works tirelessly to stay abreast of market trends, regulatory changes, and new offers from energy suppliers. This allows us to provide our clients with accurate, up-to-date information and tailored advice. We compare quotes from over 10 trusted UK business energy suppliers, ensuring that you have access to the most competitive rates and comprehensive plans available. Our comparison includes established names and innovative new entrants, giving you a broad perspective on your options.',
    generalimage2: electricityimage2,
    title3: 'Personalized Consultation and Transparent Guidance',
    description3: `What sets London Tradex apart is our commitment to personalized service. We understand that every business has unique energy needs and budget constraints. Our consultants take the time to understand your specific requirements, usage patterns, and long-term goals. This personalized approach ensures that the quotes we present to you are not only competitive but also align perfectly with your business’s operational needs and financial objectives.\n\nOnce we have gathered and analyzed the quotes, our consultants will talk you through the details right on your screen. We believe in transparency and clarity, making sure you fully understand the terms, benefits, and potential drawbacks of each option. This thorough explanation helps you make an informed decision, ensuring that you choose the energy plan that best suits your business.`.replace(/\n/g, '<br />'),
    title4: "Comprehensive Support and Ongoing Management",
    description4: `Our service doesn’t end once you’ve selected an energy supplier. At London Tradex, we provide ongoing support and management to ensure your energy needs continue to be met efficiently and cost-effectively. We monitor your energy usage and the performance of your chosen supplier, advising you on any potential adjustments or opportunities for further savings. This proactive approach helps you stay ahead of the curve and maximize your energy efficiency.`,
    generalinnerimage: electricityinnerbg,
    innertitle: "The Best in UK Business Energy Consulting",
    innerdescriptiona: "A London Tradex has earned its reputation as the best UK energy consultants by consistently delivering exceptional value and service to our clients. Our deep industry insights, comprehensive comparison tools, and personalized consultation process make us the preferred choice for businesses looking to optimize their energy procurement. Whether you are a small business looking to reduce overhead costs or a large enterprise seeking to implement sustainable energy solutions, London Tradex has the expertise and resources to support your goals.",
    innerdescriptionb: "B London Tradex has earned its reputation as the best UK energy consultants by consistently delivering exceptional value and service to our clients. Our deep industry insights, comprehensive comparison tools, and personalized consultation process make us the preferred choice for businesses looking to optimize their energy procurement. Whether you are a small business looking to reduce overhead costs or a large enterprise seeking to implement sustainable energy solutions, London Tradex has the expertise and resources to support your goals.",
    title5: `Why Choose London Tradex?`,
    description5: `
      <ul>
        <li><b><br><br>Extensive Comparison:</b> Access to quotes from over 10 trusted UK business energy suppliers.</li><br>
        <li><b>Expert Advice:</b> In-depth market knowledge and personalized consultation.</li><br>
        <li><b>Transparent Process:</b> Clear and detailed explanations of all your options.</li><br>
        <li><b>Ongoing Support:</b> Continuous management and advice to optimize your energy usage.</li><br>
        <li><b>Reputation for Excellence:</b> A proven track record of helping businesses achieve their energy goals.</li><br>
      </ul>
    `,
  },
  {
    id: 2,
    link: 'business_gas',
    maintitle: "Business Gas",
    title1: 'Guaranteed Savings: 15% to 25%',
    description1: 'Our team of expert consultants will work tirelessly to analyze your current utility and telecommunications plans and negotiate with leading suppliers to secure you the best possible rates. We guarantee that you will save between 15% and 25% compared to your existing costs. This substantial reduction in your utility expenses can significantly improve your bottom line and free up resources for other critical areas of your business.',
    generalimage1: gasimage1,
    title2: "Free Installation",
    description2: 'Switching to a new utility or telecom provider can sometimes be a hassle, but with London Tradex, it’s a seamless experience. We offer free installation services for all our new clients, ensuring that the transition is smooth and without any additional costs. Our experienced technicians will handle everything, from setting up your new systems to ensuring that they are fully operational, so you can focus on running your business without interruption.',
    generalimage2: gasimage2,
    title3: 'Additional Benefits of Partnering with London Tradex',
    description3: `<ul>
        <li><b><br><br>Comprehensive Market Comparison:</b> We compare quotes from over 10 trusted UK business energy and telecom suppliers to ensure you get the best deal.</li><br>
        <li><b>Personalized Consultation:</b> Our consultants take the time to understand your specific needs and provide tailored recommendations.</li><br>
        <li><b>Ongoing Support:</b> Enjoy continuous customer support and regular reviews to ensure your services remain optimal and cost-effective.</li><br>
        <li><b>Sustainability Focus:</b> We help you adopt energy-efficient solutions that reduce environmental impact and further your savings.</li><br>
      </ul>`,
    title4: "Free Transfer from Existing Supplier",
    description4: `We know that changing suppliers can be daunting, which is why London Tradex offers a free transfer service from your existing utility or telecom provider. Our dedicated team will manage the entire transfer process, coordinating with both your current and new suppliers to ensure a seamless switch. We handle all the paperwork and logistical details, making the transition effortless for you. This service is designed to save you time and eliminate the stress associated with switching providers.`,
    generalinnerimage: gasinnerbg,
    innertitle: "Act Now and Secure Your Savings",
    innerdescriptiona: "This special offer is a limited-time opportunity to reduce your business expenses and enhance your operational efficiency. Whether you are a new business looking to set up your utilities and telecommunications or an existing business aiming to cut costs, London Tradex is here to help. Take advantage of our guaranteed savings, free installation, and free transfer services today.",
    innerdescriptionb: "Contact us now to schedule a consultation and start saving with London Tradex. Our team is ready to assist you and answer any questions you may have. Don’t miss out on this chance to improve your business’s financial health and operational efficiency with London Tradex.",
    title5: `Special Offer for New and Existing Businesses: Unbeatable Savings with
London Tradex`,
    description5: `At London Tradex, we understand that managing business expenses efficiently is crucial for success. That’s why we are excited to announce a special offer designed to help both new and existing businesses achieve significant savings on their utility and telecommunications expenses. With our exclusive offer, you can enjoy guaranteed savings of 15% to 25% on your current rates, along with a host of additional benefits.`,
  },
  {
    id: 3,
    link: 'business_broadband',
    maintitle: "Business BroadBand",
    title1: 'Reliable and Scalable Solutions for Modern Businesses',
    description1: 'At London Tradex, we understand that reliable communication is the backbone of any successful business. That’s why we offer a comprehensive range of business telecom solutions designed to keep you connected and productive, no matter where your team is located.',
    generalimage1: telecomimage1,
    title2: "Next-Generation Fibre Connectivity",
    description2: 'Experience lightning-fast internet speeds with our next-generation fibre connectivity. We partner with all major networks to provide you with the best possible service, ensuring that your business stays ahead of the competition. Our fibre broadband services are award-winning, delivering unlimited downloads and unmatched reliability.',
    generalimage2: telecomimage2,
    title3: 'Personalized Consultation',
    description3: `Our consultants offer personalized consultation to understand your unique telecom needs. We analyze your current setup and recommend solutions that enhance your communication infrastructure.<br />We also ensure transparent and clear communication, so you understand every aspect of your plan.`,
    title4: "Reliable Service",
    description4: `Our service doesn’t end once you’ve selected an energy supplier. At London Tradex, we provide ongoing support and management to ensure your energy needs continue to be met efficiently and cost-effectively. We monitor your energy usage and the performance of your chosen supplier, advising you on any potential adjustments or opportunities for further savings. This proactive approach helps you stay ahead of the curve and maximize your energy efficiency.`,
    generalinnerimage: electricityinnerbg,
    innertitle: "The Best in UK Business Energy Consulting",
    innerdescriptiona: "A London Tradex has earned its reputation as the best UK energy consultants by consistently delivering exceptional value and service to our clients. Our deep industry insights, comprehensive comparison tools, and personalized consultation process make us the preferred choice for businesses looking to optimize their energy procurement. Whether you are a small business looking to reduce overhead costs or a large enterprise seeking to implement sustainable energy solutions, London Tradex has the expertise and resources to support your goals.",
    innerdescriptionb: "B London Tradex has earned its reputation as the best UK energy consultants by consistently delivering exceptional value and service to our clients. Our deep industry insights, comprehensive comparison tools, and personalized consultation process make us the preferred choice for businesses looking to optimize their energy procurement. Whether you are a small business looking to reduce overhead costs or a large enterprise seeking to implement sustainable energy solutions, London Tradex has the expertise and resources to support your goals.",
    title5: `Why Choose London Tradex?`,
    description5: `
      <ul>
        <li><b><br><br>Extensive Comparison:</b> Access to quotes from over 10 trusted UK business energy suppliers.</li><br>
        <li><b>Expert Advice:</b> In-depth market knowledge and personalized consultation.</li><br>
        <li><b>Transparent Process:</b> Clear and detailed explanations of all your options.</li><br>
        <li><b>Ongoing Support:</b> Continuous management and advice to optimize your energy usage.</li><br>
        <li><b>Reputation for Excellence:</b> A proven track record of helping businesses achieve their energy goals.</li><br>
      </ul>
    `,
  },
  {
    id: 4,
    link: 'business_water',
    maintitle: "Business Water",
    title1: 'Guaranteed Savings: 15% to 25%',
    description1: 'Our team of expert consultants will work tirelessly to analyze your current utility and telecommunications plans and negotiate with leading suppliers to secure you the best possible rates. We guarantee that you will save between 15% and 25% compared to your existing costs. This substantial reduction in your utility expenses can significantly improve your bottom line and free up resources for other critical areas of your business.',
    generalimage1: gasimage1,
    title2: "Free Installation",
    description2: 'Switching to a new utility or telecom provider can sometimes be a hassle, but with London Tradex, it’s a seamless experience. We offer free installation services for all our new clients, ensuring that the transition is smooth and without any additional costs. Our experienced technicians will handle everything, from setting up your new systems to ensuring that they are fully operational, so you can focus on running your business without interruption.',
    generalimage2: gasimage2,
    title3: 'Additional Benefits of Partnering with London Tradex',
    description3: `<ul>
        <li><b><br><br>Comprehensive Market Comparison:</b> We compare quotes from over 10 trusted UK business energy and telecom suppliers to ensure you get the best deal.</li><br>
        <li><b>Personalized Consultation:</b> Our consultants take the time to understand your specific needs and provide tailored recommendations.</li><br>
        <li><b>Ongoing Support:</b> Enjoy continuous customer support and regular reviews to ensure your services remain optimal and cost-effective.</li><br>
        <li><b>Sustainability Focus:</b> We help you adopt energy-efficient solutions that reduce environmental impact and further your savings.</li><br>
      </ul>`,
    title4: "Free Transfer from Existing Supplier",
    description4: `We know that changing suppliers can be daunting, which is why London Tradex offers a free transfer service from your existing utility or telecom provider. Our dedicated team will manage the entire transfer process, coordinating with both your current and new suppliers to ensure a seamless switch. We handle all the paperwork and logistical details, making the transition effortless for you. This service is designed to save you time and eliminate the stress associated with switching providers.`,
    generalinnerimage: gasinnerbg,
    innertitle: "Act Now and Secure Your Savings",
    innerdescriptiona: "This special offer is a limited-time opportunity to reduce your business expenses and enhance your operational efficiency. Whether you are a new business looking to set up your utilities and telecommunications or an existing business aiming to cut costs, London Tradex is here to help. Take advantage of our guaranteed savings, free installation, and free transfer services today.",
    innerdescriptionb: "Contact us now to schedule a consultation and start saving with London Tradex. Our team is ready to assist you and answer any questions you may have. Don’t miss out on this chance to improve your business’s financial health and operational efficiency with London Tradex.",
    title5: `Special Offer for New and Existing Businesses: Unbeatable Savings with
London Tradex`,
    description5: `At London Tradex, we understand that managing business expenses efficiently is crucial for success. That’s why we are excited to announce a special offer designed to help both new and existing businesses achieve significant savings on their utility and telecommunications expenses. With our exclusive offer, you can enjoy guaranteed savings of 15% to 25% on your current rates, along with a host of additional benefits.`,
  },
  {
    id: 5,
    link: 'business_point_of_sale',
    maintitle: "Point of Sale",
    title1: 'London Tradex: Your Premier UK Business Electricity Consultants',
    description1: 'In the complex and ever-changing landscape of business energy procurement, finding the right energy supplier for your business can be a daunting task. This is where London Tradex steps in as your trusted partner. We are dedicated to simplifying this process and ensuring that your business benefits from the best possible energy deals available in the market. Our commitment to excellence and customer satisfaction has established us as the leading business energy consultants in the UK.',
    generalimage1: electricityimage1,
    title2: "Unmatched Expertise and Extensive Comparison",
    description2: 'At London Tradex, we pride ourselves on our extensive knowledge and expertise in the energy sector. Our team of seasoned consultants works tirelessly to stay abreast of market trends, regulatory changes, and new offers from energy suppliers. This allows us to provide our clients with accurate, up-to-date information and tailored advice. We compare quotes from over 10 trusted UK business energy suppliers, ensuring that you have access to the most competitive rates and comprehensive plans available. Our comparison includes established names and innovative new entrants, giving you a broad perspective on your options.',
    generalimage2: electricityimage2,
    title3: 'Personalized Consultation and Transparent Guidance',
    description3: `What sets London Tradex apart is our commitment to personalized service. We understand that every business has unique energy needs and budget constraints. Our consultants take the time to understand your specific requirements, usage patterns, and long-term goals. This personalized approach ensures that the quotes we present to you are not only competitive but also align perfectly with your business’s operational needs and financial objectives.\n\nOnce we have gathered and analyzed the quotes, our consultants will talk you through the details right on your screen. We believe in transparency and clarity, making sure you fully understand the terms, benefits, and potential drawbacks of each option. This thorough explanation helps you make an informed decision, ensuring that you choose the energy plan that best suits your business.`.replace(/\n/g, '<br />'),
    title4: "Comprehensive Support and Ongoing Management",
    description4: `Our service doesn’t end once you’ve selected an energy supplier. At London Tradex, we provide ongoing support and management to ensure your energy needs continue to be met efficiently and cost-effectively. We monitor your energy usage and the performance of your chosen supplier, advising you on any potential adjustments or opportunities for further savings. This proactive approach helps you stay ahead of the curve and maximize your energy efficiency.`,
    generalinnerimage: electricityinnerbg,
    innertitle: "The Best in UK Business Energy Consulting",
    innerdescriptiona: "A London Tradex has earned its reputation as the best UK energy consultants by consistently delivering exceptional value and service to our clients. Our deep industry insights, comprehensive comparison tools, and personalized consultation process make us the preferred choice for businesses looking to optimize their energy procurement. Whether you are a small business looking to reduce overhead costs or a large enterprise seeking to implement sustainable energy solutions, London Tradex has the expertise and resources to support your goals.",
    innerdescriptionb: "B London Tradex has earned its reputation as the best UK energy consultants by consistently delivering exceptional value and service to our clients. Our deep industry insights, comprehensive comparison tools, and personalized consultation process make us the preferred choice for businesses looking to optimize their energy procurement. Whether you are a small business looking to reduce overhead costs or a large enterprise seeking to implement sustainable energy solutions, London Tradex has the expertise and resources to support your goals.",
    title5: `Why Choose London Tradex?`,
    description5: `
      <ul>
        <li><b><br><br>Extensive Comparison:</b> Access to quotes from over 10 trusted UK business energy suppliers.</li><br>
        <li><b>Expert Advice:</b> In-depth market knowledge and personalized consultation.</li><br>
        <li><b>Transparent Process:</b> Clear and detailed explanations of all your options.</li><br>
        <li><b>Ongoing Support:</b> Continuous management and advice to optimize your energy usage.</li><br>
        <li><b>Reputation for Excellence:</b> A proven track record of helping businesses achieve their energy goals.</li><br>
      </ul>
    `,
  },
  {
    id: 6,
    link: 'business_payments',
    maintitle: "Business Payments",
    title1: 'Guaranteed Savings: 15% to 25%',
    description1: 'Our team of expert consultants will work tirelessly to analyze your current utility and telecommunications plans and negotiate with leading suppliers to secure you the best possible rates. We guarantee that you will save between 15% and 25% compared to your existing costs. This substantial reduction in your utility expenses can significantly improve your bottom line and free up resources for other critical areas of your business.',
    generalimage1: gasimage1,
    title2: "Free Installation",
    description2: 'Switching to a new utility or telecom provider can sometimes be a hassle, but with London Tradex, it’s a seamless experience. We offer free installation services for all our new clients, ensuring that the transition is smooth and without any additional costs. Our experienced technicians will handle everything, from setting up your new systems to ensuring that they are fully operational, so you can focus on running your business without interruption.',
    generalimage2: gasimage2,
    title3: 'Additional Benefits of Partnering with London Tradex',
    description3: `<ul>
        <li><b><br><br>Comprehensive Market Comparison:</b> We compare quotes from over 10 trusted UK business energy and telecom suppliers to ensure you get the best deal.</li><br>
        <li><b>Personalized Consultation:</b> Our consultants take the time to understand your specific needs and provide tailored recommendations.</li><br>
        <li><b>Ongoing Support:</b> Enjoy continuous customer support and regular reviews to ensure your services remain optimal and cost-effective.</li><br>
        <li><b>Sustainability Focus:</b> We help you adopt energy-efficient solutions that reduce environmental impact and further your savings.</li><br>
      </ul>`,
    title4: "Free Transfer from Existing Supplier",
    description4: `We know that changing suppliers can be daunting, which is why London Tradex offers a free transfer service from your existing utility or telecom provider. Our dedicated team will manage the entire transfer process, coordinating with both your current and new suppliers to ensure a seamless switch. We handle all the paperwork and logistical details, making the transition effortless for you. This service is designed to save you time and eliminate the stress associated with switching providers.`,
    generalinnerimage: gasinnerbg,
    innertitle: "Act Now and Secure Your Savings",
    innerdescriptiona: "This special offer is a limited-time opportunity to reduce your business expenses and enhance your operational efficiency. Whether you are a new business looking to set up your utilities and telecommunications or an existing business aiming to cut costs, London Tradex is here to help. Take advantage of our guaranteed savings, free installation, and free transfer services today.",
    innerdescriptionb: "Contact us now to schedule a consultation and start saving with London Tradex. Our team is ready to assist you and answer any questions you may have. Don’t miss out on this chance to improve your business’s financial health and operational efficiency with London Tradex.",
    title5: `Special Offer for New and Existing Businesses: Unbeatable Savings with
London Tradex`,
    description5: `At London Tradex, we understand that managing business expenses efficiently is crucial for success. That’s why we are excited to announce a special offer designed to help both new and existing businesses achieve significant savings on their utility and telecommunications expenses. With our exclusive offer, you can enjoy guaranteed savings of 15% to 25% on your current rates, along with a host of additional benefits.`,
  },
  // Add more services as needed
];

const ReadMore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { serviceName } = useParams();
  const service = services.find(service => service.link === serviceName);

  if (!service) {
    return <div className="text-white p-24">Service not found</div>;
  }


  return (
    <>
      <div
        className="bg-cover bg-center pt-8 pb-8 h-96 flex items-center justify-center"
        style={{ backgroundImage: `url(${businesselectricitybg})` }}
      >
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold mt-24 mb-4 text-center md:text-left">{service.maintitle}</h1>
        </div>
      </div>
      <div className="container mx-auto p-4">

        <motion.div
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-16 md:flex-row md:justify-between p-6 mt-24 mb-16"
        >
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl font-roboto font-light mb-4 text-white" style={{ letterSpacing: "-0.02em" }}>{service.title1}</h1>
            <p className="text-lg text-white/75" dangerouslySetInnerHTML={{ __html: service.description1 }}></p>
          </div>
          <div className="md:w-1/2 mt-8 flex justify-center md:justify-end md:mt-24">
            <div className="group overflow-hidden rounded-2xl ring-1 ring-white/10">
              <img src={service.generalimage1} alt="About Us" className="w-auto h-auto transition-transform duration-500 group-hover:scale-105" />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-16 md:flex-row md:justify-between p-6 mt-24 mb-16"
        >
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl font-roboto font-light mb-4 text-white" style={{ letterSpacing: "-0.02em" }}>{service.title2}</h1>
            <p className="text-lg text-white/75" dangerouslySetInnerHTML={{ __html: service.description2 }}></p>
          </div>
          <div className="md:w-1/2 mt-8 flex justify-center md:justify-end md:mt-24">
            <div className="group overflow-hidden rounded-2xl ring-1 ring-white/10">
              <img src={service.generalimage2} alt="About Us" className="w-auto h-auto transition-transform duration-500 group-hover:scale-105" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="w-full py-6 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full mb-6"
        >
          <h1 className="text-4xl font-roboto font-light mb-4 text-white" style={{ letterSpacing: "-0.02em" }}>{service.title3}</h1>
          <p className="text-lg w-full text-white/75" dangerouslySetInnerHTML={{ __html: service.description3 }}></p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="w-full mb-6"
        >
          <h1 className="text-4xl font-roboto font-light mb-4 text-white" style={{ letterSpacing: "-0.02em" }}>{service.title4}</h1>
          <p className="text-lg w-full text-white/75" dangerouslySetInnerHTML={{ __html: service.description4 }}></p>
        </motion.div>
      </div>

      <div
        className="bg-cover bg-center pt-8 pb-8 flex items-center justify-center"
        style={{ backgroundImage: `url(${electricityinnerbg})` }}
      >
        <div className="relative flex flex-col p-4 md:p-24 justify-start h-full text-white">
          <h1 className="text-5xl font-bold mt-24 text-center md:text-left" dangerouslySetInnerHTML={{ __html: service.innertitle }}></h1>
          <p className="text-1xl font-normal mt-12" dangerouslySetInnerHTML={{ __html: service.innerdescriptiona }}></p>
          <p className="text-1xl font-normal mt-12 mb-24" dangerouslySetInnerHTML={{ __html: service.innerdescriptionb }}></p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full py-6 md:py-10"
      >
        <h1 className="text-4xl font-roboto font-light mb-4 text-white" style={{ letterSpacing: "-0.02em" }} dangerouslySetInnerHTML={{ __html: service.title5 }}></h1>
        <p className="text-lg text-white/75" dangerouslySetInnerHTML={{ __html: service.description5 }}></p>
      </motion.div>
    </>

  );
}

export default ReadMore;
