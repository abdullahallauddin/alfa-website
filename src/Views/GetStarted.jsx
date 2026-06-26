import React, {useEffect} from 'react';
import backgroundImage from "../Assets/Images/contactusbg.jpg";
import contactuscall from "../Assets/Icons/contactuscall.svg";
import contactusemail from "../Assets/Icons/contactusemail.svg";

// import ContactUsOurOffic from '../Components/ContactUsOurOffic';
// import Form from '../Components/Form';

const GetStarted = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const contactusdetails = [
    { id: 1, logo: contactuscall, title: 'Call Us', description: '(+44) 7883478487' },
    { id: 2, logo: contactusemail, title: 'Mail Us', description: 'admin@londonsenergy.com' },
  ];

  return (
    <>
      <div
        className="bg-cover bg-center h-[clamp(18rem,46vh,30rem)] flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >

        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-roboto font-light mt-24 mb-4" style={{ letterSpacing: "-0.02em" }}>Get <span className="text-[#2C95D2]">Started</span></h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="container px-4 py-8 flex flex-wrap justify-center gap-12">
          {contactusdetails.map(contactusdetail => (
            <div key={contactusdetail.id} className="flex justify-center w-full md:w-auto">
              <div
                className="group w-96 p-4 rounded-lg shadow-xl rounded-bl-3xl rounded-tr-3xl border border-white/10 bg-white/5 backdrop-blur-sm text-white hover:bg-white/[0.08] hover:border-[#2C95D2]/50 hover:-translate-y-1 transition duration-300"
              >
                <div className="mb-8 flex align-left ml-4 mt-4">
                  <img
                    src={contactusdetail.logo}
                    alt={contactusdetail.title}
                    className="h-16 w-16 group-hover:filter group-hover:brightness-0 group-hover:invert"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white align-left ml-4">{contactusdetail.title}</h3>
                <p className="mt-6 mb-8 text-white align-left ml-4">{contactusdetail.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default GetStarted;
