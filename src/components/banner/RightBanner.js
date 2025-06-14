import React from 'react'
import { bannerImg1 } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="relative flex justify-center w-full mb-16 lgl:w-1/2">
      <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10 "
        src={bannerImg1}
        alt="bannerImg1"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner
