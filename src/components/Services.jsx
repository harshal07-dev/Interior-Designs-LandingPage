// src/components/Services.jsx

import { SERVICES_CONTENT } from "../constants"; // Make sure this path is correct

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2" id="services">
        <div className="my-20">
            <h2 className="text-xl lg:text-3xl tracking-tight uppercase text-center mb-20">Our Home Renovation Services</h2>
            {SERVICES_CONTENT.map((service, index) => (
                <div
                    key={index}
                    // Apply flex-row for large screens, and ensure proper spacing
                    className="mb-12 mx-4 flex flex-col lg:flex-row items-center" // Added items-center for vertical alignment
                >
                    {/* Image Column */}
                    <div
                        className={`lg:w-1/2 mb-4 lg:mb-0 ${
                            index % 2 === 0 ? "" : "lg:order-2" // Alternates image position
                        }`}
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-auto object-cover rounded-lg" // Added rounded-lg for the image
                        />
                    </div>

                    {/* Text Content Column */}
                    <div
                        className={`lg:w-1/2 flex flex-col justify-center ${ // Added justify-center for vertical centering of text
                            index % 2 === 0 ? "lg:pl-12" : "lg:pr-12" // Alternates text padding
                        }`}
                    >
                        <h3 className="text-xl lg:text-2xl font-medium mb-2">{service.title}</h3> {/* Corrected lg:2xl to lg:text-2xl */}
                        <p className="mb-4 lg:tracking-wide text-lg lg:text-xl lg:leading-9">
                            {service.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Services;