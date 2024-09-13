import React, { useState } from "react";

const StepOne = ({ setActiveStep }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "This field is required";
    if (!formData.email) formErrors.email = "This field is required";
    if (!formData.phone) formErrors.phone = "This field is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Proceed to the next step
      setActiveStep(2);
      console.log("Form Submitted:", formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="col-span-2 md:py-[30px] md:px-[50px]">
      <div className="mb-8">
        <h1 className="font-bold text-3xl text-MarineBlue">Personal Info</h1>
        <p className="text-CoolGray text-sm mt-1">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          {/* name input */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <label className="font-semibold text-md text-MarineBlue">
                Name
              </label>
              {errors.name && (
                <p className="text-StrawberryRed font-semibold text-xs mt-1">
                  {errors.name}
                </p>
              )}
            </div>
            <input
              className={`border rounded-md p-[7px] outline-none text-MarineBlue hover:border-PurplishBlue duration-300 ${
                errors.name ? "border-StrawberryRed" : "border-gray-300"
              }`}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g. Stephen King"
            />
          </div>
          {/* email input */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <label className="font-semibold text-md text-MarineBlue">
                Email Address
              </label>
              {errors.email && (
                <p className="text-StrawberryRed font-semibold text-xs mt-1">
                  {errors.email}
                </p>
              )}
            </div>
            <input
              className={`border rounded-md p-[7px] outline-none hover:border-PurplishBlue duration-300 ${
                errors.email ? "border-StrawberryRed" : "border-gray-300"
              }`}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="e.g. stephensing@lorem.com"
            />
          </div>
          {/* phone number input */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <label className="font-semibold text-md text-MarineBlue">
                Phone Number
              </label>
              {errors.phone && (
                <p className="text-StrawberryRed font-semibold text-xs mt-1">
                  {errors.phone}
                </p>
              )}
            </div>
            <input
              className={`border rounded-md p-[7px] outline-none hover:border-PurplishBlue duration-300 ${
                errors.phone ? "border-StrawberryRed" : "border-gray-300"
              }`}
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="e.g. +1 234 567 890"
            />
          </div>
        </div>
        <div className="flex justify-end align-bottom mt-6 md:mt-16">
          <button className="bg-MarineBlue hover:bg-MarineBlue/80 duration-300 text-white py-2 px-4 rounded-lg">
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
