import React from "react";
import { FaPlaneDeparture, FaCalendarAlt, FaMapMarkedAlt, FaCogs } from "react-icons/fa";

function Category() {
  const services = [
    {
      icon: <FaPlaneDeparture className="text-3xl text-orange-500" />,
      title: "Best Flights",
      desc: "Engrossed listening. Park gate sell they west hard for the.",
    },
    {
      icon: <FaCalendarAlt className="text-3xl text-blue-500" />,
      title: "Calculated Weather",
      desc: "Built Wicket longer admire do barton vanity itself do in it.",
    },
    {
      icon: <FaMapMarkedAlt className="text-3xl text-green-500" />,
      title: "Local Events",
      desc: "Barton vanity itself do in it. Preferred to men engrossed listening.",
    },
    {
      icon: <FaCogs className="text-3xl text-purple-500" />,
      title: "Customization",
      desc: "We deliver outsourced aviation services for military customers.",
    },
  ];

  return (
    <section className="py-20 text-center bg-white">
      <h3 className="text-sm text-gray-500 uppercase mb-2">Category</h3>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        We Offer Best Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h4 className="font-semibold text-lg mb-2">{service.title}</h4>
            <p className="text-gray-500 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Category;
