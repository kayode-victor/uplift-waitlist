"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCreditCard,
} from "react-icons/fa";

const content = {
  heading: {
    title: "How It Works",
    subtitle:
      "Uplift works on a simple but effective model to make sure you're happy.",
  },
  steps: [
    {
      number: "01",
      icon: FaShoppingCart,
      title: "Add Items to Cart",
      description:
        "Browse through the app's selection of grocery items and add them to your cart. Make sure to select the quantities and variations you need.",
    },
    {
      number: "02",
      icon: FaCalendarAlt,
      title: "Choose Delivery Date",
      description:
        "Select a convenient date for your grocery delivery. The app will provide available delivery slots to choose from.",
    },
    {
      number: "03",
      icon: FaMapMarkerAlt,
      title: "Select Pickup Location",
      description:
        "During checkout, choose the option for pickup delivery. Select the designated LGA office as your pickup location.",
    },
    {
      number: "04",
      icon: FaCreditCard,
      title: "Make Payment",
      description:
        "Complete your order by making payment through the app's secure payment gateway. Once payment is confirmed, your order will be processed.",
    },
  ],
};

const Work = () => {
  return (
    <section className="flex flex-col gap-2 w-full overflow-hidden pt-20 pb-12 lg:pb-20">
      <div className="flex flex-col w-full lg:w-2/5 lg:mx-10 mx-3">
        {content.heading.title && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="uppercase tracking-[3px] text-sm mb-5 inline-block text-gray-500"
          >
            {content.heading.title}
          </motion.span>
        )}
        {content.heading.subtitle && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="text-gray-800 text-3xl lg:text-4xl font-medium"
          >
            {content.heading.subtitle}
          </motion.h2>
        )}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 my-10 mx-5 lg:mx-10">
        {content.steps.map((char, i) => {
          i *= 0.3;
          return (
            <motion.div
              key={char.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: i, duration: 0.5 },
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: 0.1 }}
              className="group duration-300 pt-24 px-5 pb-16 bg-white relative overflow-hidden hover:bg-red-300 hover:shadow-2xl"
            >
              <span className="text-[200px] inline-block z-[1] font-semibold absolute -top-[120px] opacity-5 left-0 leading-0">
                {char.number}
              </span>
              <div className="absolute top-10 right-10">
                <span className="text-3xl text-red-700 duration-300 transition-all ease-in-out group-hover:text-white">
                  <char.icon />
                </span>
              </div>
              <div className="relative z-40 flex gap-3 items-start">
                <div className="font-semibold duration-300 transition-all ease-in-out group-hover:text-white group-hover:text-opacity-50">
                  {char.number}
                </div>
                <div>
                  <h3 className="text-[18px] mb-4 duration-300 transition-all ease-in-out group-hover:text-white">
                    {char.title}
                  </h3>
                  <p className="leading-relaxed text-[14px] duration-300 transition-all ease-in-out group-hover:text-white">
                    {char.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
