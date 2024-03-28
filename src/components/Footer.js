import React from "react";
import Image from "next/image";
import Logo from "../assets/uplift-gray.png";

const Footer = ({ scrollToRef }) => {
  const navLinks = [
    { section: "home", label: "Home" },
    { section: "products", label: "Products" },
    { section: "work", label: "How we Work" },
    { section: "access", label: "Early Access" },
  ];
  const footerlabels = [
    { id: "1", label: "Privacy Policy" },
    { id: "2", label: "Terms of Service" },
    { id: "3", label: "Cookie Settings" },
  ];
  return (
    <footer className="flex w-full items-center justify-center bg-[#fefefe] overflow-hidden">
      <div className="flex-col w-full">
        <div className="flex items-center justify-center my-5">
          <Image src={Logo} alt="uplift-logo" className="w-32" />
        </div>
        <div className="flex pb-5 lg:pb-10 mx-4 lg:mx-20 border-b-2 ">
          <ul className="flex flex-col lg:flex-row w-full items-center justify-center lg:gap-10 gap-3">
            {navLinks.map((link) => (
              <li className="mx-2" key={link.section}>
                <a
                  className="capitalize text-md lg:text-sm text-gray-600 font-normal cursor-pointer"
                  onClick={() => scrollToRef(link.section)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-col lg:flex-row mx-4 lg:mx-20 py-2 lg:py-5 items-center justify-center">
          <div className="flex-col lg:hidden text-center py-2">
            {footerlabels.map((link) => (
              <div key={link.id} className="pt-2 cursor-pointer">
                <p className="underline">{link.label}</p>
              </div>
            ))}
          </div>
          <div className="flex lg:justify-between justify-center items-center">
            <div>
              <p className="lg:text-xs text-sm text-gray-500 text-center lg:text-left">
                © 2024 Uplift. All rights reserved.
              </p>
            </div>
            <div className="lg:flex hidden text-center gap-2">
              {footerlabels.map((link) => (
                <div key={link.id} className="cursor-pointer">
                  <p className="text-xs text-gray-500 underline">
                    {link.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
