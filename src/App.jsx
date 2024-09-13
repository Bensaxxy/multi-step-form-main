import React, { useState } from "react";
import Container from "./components/Container";
import MobileSideBar from "./components/MobileSideBar";

const App = () => {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <div className=" font-primary bg-LightBlue h-[90vh] md:h-screen w-screen md:flex md:pt-10 flex-col justify-center items-center">
      <MobileSideBar activeStep={activeStep} setActiveStep={setActiveStep} />
      <div className="px-4 -mt-16">
        <Container activeStep={activeStep} setActiveStep={setActiveStep} />
      </div>
      <div class="text-center mt-2">
        Challenge by{" "}
        <a
          className=" hover:text-StrawberryRed font-bold duration-300"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className=" hover:text-StrawberryRed font-bold duration-300"
          href="https://www.frontendmentor.io/profile/Bensaxxy"
        >
          Bensaxxy
        </a>
        .
      </div>
    </div>
  );
};

export default App;
