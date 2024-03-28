"use client";
import React, { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [state, setState] = useState("Oyo");
  const [lga, setLGA] = useState("Egbeda");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate phone number format
    const phoneRegex = /^\(\+234\)\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      alert(
        "Please enter a valid Nigerian phone number starting with (+234) and consisting of 10 digits."
      );
      return;
    }
    // Form submission logic (e.g., send data to backend)
    console.log("Full Name:", fullName);
    console.log("Phone Number:", phoneNumber);
    console.log("State:", state);
    console.log("LGA:", lga);
    // Reset form fields
    setFullName("");
    setPhoneNumber("");
    setState("Oyo");
    setLGA("Egbeda");
  };

  return (
    <div className="flex flex-col w-full h-full mx-3 lg:mx-10 my-2 lg:my-10">
      <h2 className="text-gray-800 text-2xl font-medium my-4 lg:my-10 text-center capitalize">
        Fill out the Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col lg:flex-row w-full gap-4">
          <div className="flex flex-col w-full lg:w-1/2">
            <label
              htmlFor="fullName"
              className="text-gray-700 font-normal capitalize"
            >
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col w-full lg:w-1/2">
            <label
              htmlFor="phoneNumber"
              className="text-gray-700 font-normal capitalize"
            >
              Phone Number:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none"
              pattern="^\(\+234\)\d{10}$"
              title="Please enter a Nigerian phone number starting with (+234) and consisting of 10 digits."
              required
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="state"
            className="text-gray-700 font-normal capitalize"
          >
            State:
          </label>
          <select
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none"
            required
          >
            <option value="Oyo" className="flex w-full py-3">
              Oyo
            </option>
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="lga" className="text-gray-700 font-normal capitalize">
            Local Government Area (LGA):
          </label>
          <select
            id="lga"
            value={lga}
            onChange={(e) => setLGA(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none"
            required
          >
            <option value="Egbeda">Egbeda</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white font-medium px-10 py-2 rounded-lg hover:bg-white hover:text-red-500 border border-red-500 hover:animate-pulse transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
