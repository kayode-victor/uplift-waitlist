"use client";
import React, { useRef } from "react";
import Access from "../components/Access";
import Footer from "../components/Footer";
import Grocery from "../components/Grocery";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Work from "../components/Work";

const Page = () => {
  const sectionRefs = {
    home: useRef(null),
    products: useRef(null),
    work: useRef(null),
    access: useRef(null),
  };
  const scrollToRef = (sectionId) => {
    const ref = sectionRefs[sectionId];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="flex flex-col w-full overflow-hidden bg-[#f3f5f8]">
      <Navbar scrollToRef={scrollToRef} />
      <section ref={sectionRefs.home} className="pt-10 lg:pt-20 pb-0 lg:pb-10">
        <Hero />
      </section>
      <section ref={sectionRefs.products}>
        <Grocery />
      </section>
      <section ref={sectionRefs.work}>
        <Work />
      </section>
      <section ref={sectionRefs.access}>
        <Access />
      </section>
      <Footer scrollToRef={scrollToRef} />
    </main>
  );
};

export default Page;
