"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Banner from "../assets/form.png";
import React from "react";
import Form from "./Form";

const content = {
  title: "Join Now",
  subtitle: "Sign up now to get 10% off your first purchase as a Corper!",
};

const Access = () => {
  return (
    <section className="flex flex-col items-center gap-4 justify-center w-full overflow-hidden pt-20 pb-12 lg:pb-20">
      <div className="flex flex-col w-full lg:w-5/12 lg:mx-10 text-center mx-3">
        {content.title && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="uppercase tracking-[3px] text-sm mb-2 lg:mb-5 inline-block text-gray-500"
          >
            {content.title}
          </motion.span>
        )}
        {content.subtitle && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="text-gray-800 text-2xl lg:text-4xl font-medium"
          >
            {content.subtitle}
          </motion.h2>
        )}
      </div>
      <div className="group flex flex-col lg:flex-row gap-2 lg:gap-0 lg:mx-20 mx-2">
        <div className=" w-full lg:w-2/5 bg-white relative block overflow-hidden">
          <Image
            src={Banner}
            alt="banner"
            className="h-full object-cover object-center duration-300 transition-all ease-in-out group-hover:scale-[1.2]"
          />
        </div>
        <div className="flex w-full lg:w-2/3 bg-white">
          <div className="flex w-full items-center justify-center">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Access;
