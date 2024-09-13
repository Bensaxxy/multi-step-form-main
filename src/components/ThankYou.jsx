import React from "react";
import thankYou from "/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <div className=" col-span-2 flex flex-col items-center px-1 md:px-8 justify-center">
      <img alt="thankYou Icon" src={thankYou} />
      <h1 className=" text-2xl text-MarineBlue font-bold my-5">Thank you!</h1>
      <p className=" text-[15px] text-center text-CoolGray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default ThankYou;
