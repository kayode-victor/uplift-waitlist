"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Banner from "../assets/banner.png";
import Dots from "../assets/dots.png";
import { motion, useScroll, useTransform } from "framer-motion";

const heroContent = {
  intro: {
    title: "Welcome to Uplift!",
    subTitle: "Fresh Deals Await You",
    subText: "Discover the freshest produce and exclusive promotions.",
    description:
      "Join us now and be one of the first 100 to get 20% off your first order at Uplift! Sign up now to explore our fresh produce and amazing  deals.",
    image: {
      src: Banner,
      alt: "hero-image",
    },
  },
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const imgScroll2 = useTransform(scrollYProgress, [0, 1], ["100%", "50%"]);

  return (
    <section
      className="flex flex-col lg:flex-row w-full pt-16 py-10 lg:py-0 overflow-hidden"
      ref={ref}
    >
      <div className="lg:flex w-full lg:w-10/12 mx-auto h-auto lg:h-screen lg:min-h-[700px] items-center justify-between">
        <div className="lg:w-4/12 z-[3] relative">
          {heroContent.intro.title && (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.3, duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="text-gray-700 lg:bg-white/70 p-2 text-3xl sm:text-4xl md:text-5xl  lg:text-6xl w-auto lg:w-screen max-w-xl mb-4 md:mb-8"
            >
              {heroContent.intro.title}
            </motion.h1>
          )}
          {heroContent.intro.description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="leading-relaxed lg:bg-white/80 text-gray-800 p-3 w-auto lg:w-screen max-w-xl text-base lg:text-lg mb-0 lg:mb-16"
            >
              {heroContent.intro.description}
            </motion.p>
          )}
        </div>
        <div className="lg:w-7/12 relative">
          {heroContent.intro.image && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.3, duration: 0.5 },
              }}
              viewport={{ once: true }}
              style={{ y: imgScroll1 }}
              className="z-[2] relative bg-cover bg-center"
            >
              <Image
                src={heroContent.intro.image.src}
                width={828}
                height={985}
                alt={heroContent.intro.image.alt}
                className="lg:rounded-tl-[60px] lg:rounded-br-[60px]"
              />
              <div className="bg-white/50 my-5 p-5 lg:p-8">
                <h4 className="text-gray-700 text-md font-semibold">
                  {heroContent.intro.subTitle}
                </h4>
                <p className="text-gray-700 text-sm font-light">
                  {heroContent.intro.subText}
                </p>
              </div>
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.3, duration: 0.5 },
            }}
            viewport={{ once: true }}
            style={{ y: imgScroll2 }}
            className="absolute bottom-[150px] lg:bottom-[300px]  lg:-left-[200px]"
          >
            <Image
              width={200}
              height={200}
              src={Dots}
              alt="dot-decor"
              className="w-64"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
