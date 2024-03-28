"use client";
import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./Productcard";
import Rice from "../assets/rice.png";
import Bean from "../assets/bean.png";
import Spaghetti from "../assets/spaghetti.png";
import Indomie from "../assets/indomie.png";
import Pasta from "../assets/pasta.png";
import Garri from "../assets/garri.png";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation } from "swiper/modules";

// add to the product data
const productdata = [
  {
    name: "Foreign Rice (per Congo )",
    marketPrice: "₦2800.00",
    salePrice: "₦2300.00",
    image: { src: Rice, alt: "rice" },
  },
  {
    name: "Beans (per Congo )",
    marketPrice: "₦2100.00",
    salePrice: "₦1900.00",
    image: { src: Bean, alt: "rice" },
  },
  {
    name: "White Garri (per Congo )",
    marketPrice: "₦1100.00",
    salePrice: "₦950.00",
    image: { src: Garri, alt: "rice" },
  },
  {
    name: "3 Peices of Spaghetti(500g)",
    marketPrice: "₦2700.00",
    salePrice: "₦2400.00",
    image: { src: Spaghetti, alt: "rice" },
  },
  {
    name: "6 Peices of Noodle(70g)",
    marketPrice: "₦2700.00",
    salePrice: "₦2400.00",
    image: { src: Indomie, alt: "rice" },
  },
  {
    name: "2 Peices of Macroni Pasta(500g)",
    marketPrice: "₦2200.00",
    salePrice: "₦1800.00",
    image: { src: Pasta, alt: "rice" },
  },
];

const content = {
  subtext: "Fresh Deal",
  heding: "Check out our great selection!",
  description:
    "Explore our quality food products, from premium rice to pantry staples like beans and garri. Enjoy competitive prices and unbeatable value with Uplift.",
};

const Grocery = () => {
  return (
    <section className="flex flex-col gap-2 bg-white w-full overflow-hidden pt-20 pb-12 lg:pb-20">
      <div className="flex gap-2 flex-col w-full lg:w-1/2 justify-start lg:px-5 px-2">
        {content.subtext && (
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
            {content.subtext}
          </motion.span>
        )}
        {content.heding && (
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
            {content.heding}
          </motion.h2>
        )}
        {content.description && (
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.3, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="text-gray-800 text-sm font-normal py-2"
          >
            {content.description}
          </motion.p>
        )}
      </div>
      <div>
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 10000 }}
          breakpoints={{
            100: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            450: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 6.5,
              spaceBetween: 20,
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className=""
        >
          {productdata.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-end items-center px-4">
          <div className="flex gap-4 mt-4">
            <button className="swiper-button-prev text-3xl lg:text-2xl text-gray-200 hover:text-gray-600">
              <FaRegArrowAltCircleLeft />
            </button>

            <button className="swiper-button-next text-3xl lg:text-2xl text-gray-200 hover:text-gray-600">
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grocery;
