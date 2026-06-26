import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceCopm = () => {
    return (
        <>
            <div className="mt-24 flex items-center justify-center">
                <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-center">
                    <div className="md:w-2/3 text-center">
                        {/* <h5 className="text-lg text-custom-blue font-bold mb-2">OUR SERVICES</h5> */}
                        <h3 className="font-roboto text-3xl md:text-[2.75rem] font-light mb-4 text-white" style={{ letterSpacing: "-0.02em" }}>Our Services</h3>
                        <p className="font-roboto font-light text-lg text-white/70">
                            At London Tradex, we prioritize saving our clients' valuable time and hard-earned money. We understand that securing the most competitive rates for business utilities is crucial.
                        </p>
                    </div>
                    {/* <div className="md:w-1/3 mt-4 md:mt-0 flex justify-end">
      <button className="bg-custom-blue text-lg font-bold text-white px-10 py-3 rounded-bl-3xl rounded-tr-3xl border-2 border-sky-500 hover:border-2 hover:border-sky-500 hover:text-sky-500 hover:transition hover:duration-500 hover:from-transparent hover:bg-transparent hover:to-sky-500">
        See All Services
      </button>
    </div> */}
                </div>
            </div>
            <div className='container mx-auto px-4 md:px-16'>
                <ServiceCard />
            </div>
        </>
    );
}

export default ServiceCopm;
