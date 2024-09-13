import React, { useState } from "react";
import SideBar from "./SideBar";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import ThankYou from "./ThankYou";

const Container = ({ activeStep, setActiveStep }) => {
  const [selectedPlan, setSelectedPlan] = useState(null); // Store selected plan
  const [isYearly, setIsYearly] = useState(false);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [isConfirmed, setIsConfirmed] = useState(false); // Track if user has confirmed

  // Handle confirm action
  const handleConfirm = () => {
    setIsConfirmed(true); // Set confirmed to true when the button is clicked
  };

  const renderStep = () => {
    if (isConfirmed) {
      return <ThankYou />; // Render ThankYou component if confirmed
    }
    switch (activeStep) {
      case 1:
        return <StepOne setActiveStep={setActiveStep} />;
      case 2:
        return (
          <StepTwo
            setActiveStep={setActiveStep}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            isYearly={isYearly}
            setIsYearly={setIsYearly} // Pass the toggle function to StepTwo
          />
        );
      case 3:
        return (
          <StepThree
            setActiveStep={setActiveStep}
            isYearly={isYearly}
            selectedAddOns={selectedAddOns}
            setSelectedAddOns={setSelectedAddOns}
          />
        );
      case 4:
        return (
          <StepFour
            setActiveStep={setActiveStep}
            selectedPlan={selectedPlan}
            addOns={selectedAddOns}
            isYearly={isYearly}
            handleConfirm={handleConfirm} // Pass the handleConfirm to StepFour
          />
        );
      default:
        return <StepOne setActiveStep={setActiveStep} />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 bg-white shadow-md md:drop-shadow-md rounded-md p-5 md:p-3 md:h-[500px] md:w-[750px] ">
      <SideBar activeStep={activeStep} setActiveStep={setActiveStep} />
      {renderStep()}
    </div>
  );
};

export default Container;
