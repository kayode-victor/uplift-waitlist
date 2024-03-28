"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import Logo from "../assets/uplift.png";

const Navbar = ({ scrollToRef }) => {
  const navLinks = [
    { section: "home", label: "Home" },
    { section: "products", label: "Products" },
    { section: "work", label: "How we Work" },
    { section: "access", label: "Early Access" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const isTop = window.scrollY < 50;
    setIsScrolled(!isTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`flex w-full sticky-header bg-transparent p-4 lg:px-16 items-center justify-between ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="flex gap-2 items-center">
        <Image src={Logo} alt="uplift-logo" className="lg:w-32 w-24" />
      </div>
      <div className="hidden lg:flex">
        <ul className="flex gap-5 mr-10">
          {navLinks.map((link) => (
            <li className="mx-2" key={link.section}>
              <a
                className={`relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-red-500 before:origin-[100%, 50%] before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:scale-y-[1] before:scale-z-[1] before:will-change-transform hover:origin-[100%, 0%] hover:before:scale-x-[1] hover:before:scale-y-[1] hover:before:scale-z-[1] text-[12px] tracking-[2px] uppercase  font-normal cursor-pointer pb-2`}
                onClick={() => scrollToRef(link.section)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:hidden items-end">
        <FiMenu className="text-3xl cursor-pointer" onClick={toggleMenu} />
      </div>
      <div
        className={`lg:hidden fixed top-0 right-0 h-full bg-slate-50 z-50 transition-all duration-500 ${
          isMenuOpen ? "w-2/3" : "w-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className=" w-full h-full flex flex-col justify-start p-4">
          <IoCloseOutline
            className="text-3xl my-4 hover:text-red-700 cursor-pointer"
            onClick={toggleMenu}
          />
          <ul className="flex-col items-center justify-center">
            {navLinks.map((link) => (
              <li className="mt-10 mx-5" key={link.section}>
                <a
                  className={`relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:origin-[100%, 50%] before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:scale-y-[1] before:scale-z-[1] before:will-change-transform hover:origin-[100%, 0%] hover:before:scale-x-[1] hover:before:scale-y-[1] hover:before:scale-z-[1] text-[12px] tracking-[2px] uppercase  font-normal cursor-pointer pb-2`}
                  onClick={() => scrollToRef(link.section)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
