import React from "react";

const SideBar = ({ activeStep, setActiveStep }) => {
  const buttonStyles = (step) => {
    return step === activeStep
      ? "border font-semibold text-black bg-LightBlue rounded-full w-8 h-8 duration-300 flex items-center justify-center"
      : "border font-semibold text-white rounded-full w-8 h-8  duration-300 flex items-center justify-center";
  };

  return (
    <div className=" bg-cover w-full hidden md:block bg-center md:bg-desktop bg-mobile pl-6 py-10 rounded-md">
      <div className=" flex justify-center md:flex-col gap-6">
        {/* First step */}
        <div className=" flex gap-4 items-start">
          <button aria-label="1" className={buttonStyles(1)}>
            1
          </button>
          <div className="hidden md:block">
            <p className=" text-[11px] text-LightGray">STEP 1</p>
            <p className="  text-[12px] text-white font-semibold tracking-widest">
              YOUR INFO
            </p>
          </div>
        </div>
        {/* Second step */}
        <div className=" flex gap-4 items-start">
          <button
            aria-label="2"
            className={buttonStyles(2)}
            //onClick={() => setActiveStep(2)}
          >
            2
          </button>
          <div className="hidden md:block">
            <p className=" text-[11px] text-LightGray">STEP 2</p>
            <p className=" text-[12px] text-white font-semibold tracking-widest">
              SELECT PLAN
            </p>
          </div>
        </div>
        {/* Third step */}
        <div className=" flex gap-3 items-start">
          <button
            aria-label="3"
            className={buttonStyles(3)}
            //onClick={() => setActiveStep(3)}
          >
            3
          </button>
          <div className="hidden md:block">
            <p className=" text-[11px] text-LightGray">STEP 3</p>
            <p className=" text-[12px] text-white font-semibold tracking-widest">
              ADD-ONS
            </p>
          </div>
        </div>
        {/* Fourth step */}
        <div className=" flex gap-4 items-start">
          <button
            aria-label="4"
            className={buttonStyles(4)}
            //onClick={() => setActiveStep(4)}
          >
            4
          </button>
          <div className="hidden md:block">
            <p className=" text-[11px] text-LightGray">STEP 4</p>
            <p className=" text-[12px] text-white font-semibold tracking-widest">
              SUMMARY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
