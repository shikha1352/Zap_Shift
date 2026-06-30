import React from "react";

import serviceImg from "../../../assets/service.png";
import Card from "../../../components/Cards/Card";
import ServicesContent from "./ServicesContent";

const Services = () => {
  return (
    <div>
      <div className="bg-secondary p-20 rounded-2xl items-center text-center">
        <div>
          <h1 className="text-white font-bold text-4xl mb-5">Our Services</h1>
          <p className="text-[#DADADA] my-10">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to <br /> business shipments —
            we deliver on time, every time.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {ServicesContent.map((service) => (
            <Card
              key={service.id}
              img={serviceImg}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
