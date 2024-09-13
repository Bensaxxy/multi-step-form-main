import React from "react";
import arcadeIcon from "/icon-arcade.svg";
import advancedIcon from "/icon-advanced.svg";
import proIcon from "/icon-pro.svg";

const StepTwo = ({
  setActiveStep,
  selectedPlan,
  setSelectedPlan,
  isYearly,
  setIsYearly,
}) => {
  const plans = [
    {
      id: 1,
      name: "Arcade",
      monthlyPrice: "$9/mo",
      yearlyPrice: "$90/yr",
      icon: arcadeIcon,
    },
    {
      id: 2,
      name: "Advanced",
      monthlyPrice: "$12/mo",
      yearlyPrice: "$120/yr",
      icon: advancedIcon,
    },
    {
      id: 3,
      name: "Pro",
      monthlyPrice: "$15/mo",
      yearlyPrice: "$150/yr",
      icon: proIcon,
    },
  ];

  const handleNextStep = () => {
    if (selectedPlan) {
      setActiveStep(3); // Proceed to Step Three if a plan is selected
    } else {
      alert("Please select a plan to continue."); // Show an alert if no plan is selected
    }
  };

  return (
    <div className="col-span-2 md:py-[30px] md:px-[50px]">
      <div className=" mb-8">
        <h1 className=" font-bold text-2xl md:text-2xl text-MarineBlue">
          Select your plan
        </h1>
        <p className=" text-CoolGray text-[15px] md:text-sm mt-1">
          You have the option of monthly or yearly billing
        </p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-2 ">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`border-[1px] flex gap-4 md:inline-block  cursor-pointer hover:bg-LightBlue/20 hover:border-PurplishBlue duration-300 rounded-lg p-6 md:p-4 ${
              selectedPlan === plan.name
                ? "border-PurplishBlue bg-LightBlue/20"
                : ""
            }`}
            onClick={() => setSelectedPlan(plan.name)}
          >
            <img
              className=" w-full  max-w-10 md:max-w-8"
              src={plan.icon}
              alt={`${plan.name}-icon`}
            />
            <div className=" md:mt-10">
              <p className=" font-semibold text-MarineBlue text-md">
                {plan.name}
              </p>
              <p className=" text-CoolGray text-sm">
                {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              </p>
              {isYearly && (
                <p className=" text-[11px] text-MarineBlue font-semibold">
                  2 months free
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className=" mt-6 md:mt-10 bg-Magnolia py-4 md:py-2 md:px-4 w-full rounded-lg flex gap-4 justify-center items-center">
        <p
          className={`text-sm font-semibold cursor-pointer ${
            !isYearly ? "text-MarineBlue" : "text-CoolGray"
          }`}
          onClick={() => setIsYearly(false)}
        >
          Monthly
        </p>

        <div
          className={`relative w-10 h-5 bg-MarineBlue rounded-full cursor-pointer`}
          onClick={() => setIsYearly(!isYearly)}
        >
          <div
            className={`absolute w-3 h-3 mt-[3px] bg-white rounded-full transition-transform duration-300 ${
              isYearly ? "translate-x-6" : "translate-x-1 mt-[4px]"
            }`}
          ></div>
        </div>

        <p
          className={`text-sm font-semibold cursor-pointer ${
            isYearly ? "text-MarineBlue" : "text-CoolGray"
          }`}
          onClick={() => setIsYearly(true)}
        >
          Yearly
        </p>
      </div>

      {/* down button */}
      <div className="flex justify-between items-center mt-10 mb-2 md:mb-0 md:mt-[72px]">
        <p
          className="text-CoolGray hover:text-MarineBlue font-semibold duration-200 cursor-pointer"
          onClick={() => setActiveStep(1)}
        >
          Go Back
        </p>
        <button
          className="bg-MarineBlue hover:bg-MarineBlue/80 duration-300 text-white py-2 px-4 rounded-lg"
          onClick={handleNextStep}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
