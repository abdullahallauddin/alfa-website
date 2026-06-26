import React from "react";
import iImage from "../Assets/Images/aboutcompanyimage.jpg";
import yellowicon from "../Assets/Icons/yellowicon.svg";
import pinkicon from "../Assets/Icons/pinkicon.svg";
import { Link } from "react-router-dom";

const AboutUSComp = () => {
  const aboutdetails = [
    {
      logo: yellowicon,
      title: "Contruction Division",
      description:
        "ALFA Construction Division delivers high-quality services in Civil Construction and MEP Contracting.",
    },
    {
      logo: pinkicon,
      title: "ICT Division",
      description:
        "ALFA ICT Division as a trusted technology partner, offers end-to-end ICT, Low Current and Smart Building Solutions.",
    },
  ];

  return (
    <>
      <div className="mt-24 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-center">
          <div className="md:w-full text-center">
            <h3
              className="font-roboto text-3xl md:text-[2.75rem] font-light mb-4 text-white"
              style={{ letterSpacing: "-0.02em" }}
            >
              About <span className="text-[#2C95D2]">Company</span>
            </h3>
            <p className="font-roboto font-light text-justify text-lg text-white/75">
              ALFA Group is a trusted and steadily growing multi-division
              company (Head Quarters) based in Dammam, Saudi Arabia and
              expanding across the Middle East. Since our Inception in 2014, we
              have expanded our operations and diversified our services to meet
              the evolving needs of our clients across multiple sectors.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-16 mx-auto mb-8 px-4 md:px-16 py-8 flex flex-col md:flex-row md:justify-between">
        <div className="md:w-1/2">
          <h5
            className="inline-block font-roboto text-sm font-medium tracking-[0.18em] text-[#2C95D2] py-1"
          >
            ABOUT US
          </h5>
          <h2
            className="font-roboto text-3xl md:text-4xl font-light mb-4 mt-6 text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            Mission is: <br />
            Marine & Offshore <br />
            Division
          </h2>

          <p
            className="font-roboto font-light text-lg text-white/75 mb-4"
          >
            ALFA Group Established in 2014 and headquartered in Dammam, Saudi Arabia. ALFA Group is a steadily growing multi-division company supporting major industries across the Middle East.
          </p>

          <hr className="h-px my-8 bg-white/10 border-0" />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutdetails.map((aboutdetail) => (
              <div key={aboutdetail.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="mb-4">
                  <img
                    src={aboutdetail.logo}
                    alt={`${aboutdetail.title} Icon`}
                    loading="lazy"
                    className="h-14 w-14"
                  />
                </div>
                <h3 className="font-roboto text-lg font-medium mb-2 text-white">
                  {aboutdetail.title}
                </h3>
                <p className="font-roboto font-light text-white/70">
                  {aboutdetail.description}
                </p>
              </div>
            ))}
          </div>

          {/* <div className="mt-6 flex justify-start md:justify-start">
            <Link to="/readmoreaboutcompany">
              <button className=" text-md font-bold text-white px-10 py-4 rounded-bl-3xl rounded-tr-3xl" style={{backgroundColor:"#20376D" }}>
                More About Company
              </button>
            </Link>
          </div> */}
        </div>

        <div className="md:w-1/2 mt-4 flex justify-center md:mt-16">
          <img
            src={iImage}
            alt="About Company"
            loading="lazy"
            className="w-3/4 h-4/5"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUSComp;
