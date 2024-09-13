import React from "react";

const StepFour = ({
  selectedPlan,
  addOns,
  isYearly,
  setActiveStep,
  handleConfirm,
}) => {
  // Define base prices for plans (monthly and yearly)
  const planPrices = {
    Arcade: { monthly: 9, yearly: 90 },
    Advanced: { monthly: 12, yearly: 120 },
    Pro: { monthly: 15, yearly: 150 },
  };

  // Calculate base price based on selected plan and isYearly flag
  const basePrice = isYearly
    ? planPrices[selectedPlan]?.yearly
    : planPrices[selectedPlan]?.monthly || 0;

  // Calculate total price for add-ons
  const addOnPrice = addOns.reduce(
    (total, addOn) => total + (isYearly ? addOn.price * 12 : addOn.price),
    0
  );

  // Calculate total price
  const totalPrice = basePrice + addOnPrice;

  return (
    <div className="md:col-span-2 md:py-[30px] md:px-[50px]">
      <div className="mb-8">
        <h1 className="font-bold text-3xl text-MarineBlue">Finishing Up</h1>
        <p className="text-CoolGray text-sm mt-1">
          Double-check everything looks OK before confirming
        </p>
      </div>
      {/* finishing up details */}
      <div className="bg-Alabaster p-4 rounded-md">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold text-sm text-MarineBlue">
              {selectedPlan} ({isYearly ? "Yearly" : "Monthly"})
            </p>
            <button
              className="text-sm underline text-CoolGray"
              onClick={() => setActiveStep(2)} // Go back to the plan selection step
            >
              Change
            </button>
          </div>
          <p className="text-sm text-MarineBlue font-bold">
            ${basePrice}/{isYearly ? "yr" : "mo"}
          </p>
        </div>
        <hr className="my-4 border-CoolGray/10" />
        {addOns.length > 0 ? (
          addOns.map((addOn, index) => (
            <div key={index} className="flex justify-between items-center">
              <p className="text-sm text-CoolGray my-1">{addOn.name}</p>
              <p className="text-sm text-MarineBlue font-normal">
                +${isYearly ? addOn.price * 12 : addOn.price}/
                {isYearly ? "yr" : "mo"}
              </p>
            </div>
          ))
        ) : (
          <p className="text-sm text-CoolGray">No add-ons selected</p>
        )}
      </div>
      <div className="mt-6 flex justify-between items-center px-4">
        <p className="text-sm text-CoolGray">
          Total ({isYearly ? "per year" : "per month"})
        </p>
        <p className="text-lg text-PurplishBlue font-bold">
          +${totalPrice}/{isYearly ? "yr" : "mo"}
        </p>
      </div>
      <div className="flex justify-between items-center mt-[84px]">
        <p
          className="text-CoolGray hover:text-MarineBlue font-semibold duration-200 cursor-pointer"
          onClick={() => setActiveStep((prevStep) => prevStep - 1)}
        >
          Go Back
        </p>
        <button
          className="bg-PurplishBlue hover:bg-PurplishBlue/70 text-white py-2 px-4 rounded-lg"
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default StepFour;
