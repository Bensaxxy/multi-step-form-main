import React from "react";

const StepThree = ({
  setActiveStep,
  isYearly,
  selectedAddOns,
  setSelectedAddOns,
}) => {
  const addOns = [
    {
      id: 1,
      name: "Online Services",
      description: "Access to multiplayer games",
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
    {
      id: 2,
      name: "Larger Storage",
      description: "Extra 1TB of cloud save",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
    {
      id: 3,
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  ];

  const handleCheckboxChange = (addOn) => {
    setSelectedAddOns((prevSelected) => {
      const isAlreadySelected = prevSelected.some(
        (selectedAddOn) => selectedAddOn.id === addOn.id
      );
      if (isAlreadySelected) {
        return prevSelected.filter(
          (selectedAddOn) => selectedAddOn.id !== addOn.id
        );
      } else {
        return [
          ...prevSelected,
          {
            id: addOn.id,
            name: addOn.name,
            price: isYearly ? addOn.yearlyPrice : addOn.monthlyPrice,
          },
        ];
      }
    });
  };

  return (
    <div className="md:col-span-2 md:py-[30px] md:px-[50px]">
      <div className="mb-8">
        <h1 className="font-bold text-3xl text-MarineBlue">Pick add-ons</h1>
        <p className="text-CoolGray text-sm mt-1">
          Add-ons help enhance your gaming experience
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {addOns.map((addOn) => (
          <div
            key={addOn.id}
            className={`border cursor-pointer border-CoolGray py-3 px-5 rounded-lg flex justify-between items-center ${
              selectedAddOns.some(
                (selectedAddOn) => selectedAddOn.id === addOn.id
              )
                ? "bg-LightBlue/20 border-PurplishBlue"
                : ""
            }`}
          >
            <div className="flex gap-5 items-center">
              <input
                type="checkbox"
                checked={selectedAddOns.some(
                  (selectedAddOn) => selectedAddOn.id === addOn.id
                )}
                onChange={() => handleCheckboxChange(addOn)}
              />
              <div>
                <p className="text-MarineBlue text-sm font-semibold">
                  {addOn.name}
                </p>
                <p className="text-CoolGray text-[12px]">{addOn.description}</p>
              </div>
            </div>
            <p className="text-PurplishBlue font-semibold text-[12px]">
              {isYearly
                ? `+$${addOn.yearlyPrice}/yr`
                : `+$${addOn.monthlyPrice}/mo`}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-[67px]">
        <p
          className="text-CoolGray hover:text-MarineBlue font-semibold duration-200 cursor-pointer"
          onClick={() => setActiveStep((prevStep) => prevStep - 1)}
        >
          Go Back
        </p>
        <button
          className="bg-MarineBlue hover:bg-MarineBlue/80 duration-300 text-white py-2 px-4 rounded-lg"
          onClick={() => setActiveStep((prevStep) => prevStep + 1)}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default StepThree;
