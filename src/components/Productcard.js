"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ProductCard = ({ index, name, marketPrice, salePrice, image }) => {
  index *= 0.05;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: index, duration: 0.5 },
      }}
      viewport={{ once: true }}
      className="bg-white relative overflow-hidden w-60 mx-4 group border shadow-lg"
    >
      <div className="relative block overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          width={1064}
          height={644}
          className="object-cover object-center h-[240px] duration-300 transition-all ease-in-out group-hover:scale-[1.2]"
        />
      </div>
      <div className="p-2">
        <p className="text-gray-500 mb-3 uppercase text-[12px] font-medium tracking-[1px]">
          {name}
        </p>
        <p className="text-red-500 line-through uppercase text-[10px] tracking-[1px]">
          {marketPrice}
        </p>
        <p className="text-gray-700 mb-3 uppercase text-[14px] font-semibold tracking-[1px]">
          {salePrice}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
