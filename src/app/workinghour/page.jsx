import Image from "next/image";
import React from "react";

const WorkingHourPage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[url('/offerBg.png')]">
      <div className="flex justify-center items-center flex-1 text-3xl font-bold md:text-5xl lg:text-7xl text-red-500 animate-[blink_1.5s_infinite] hover:animate-none cursor-pointer">
        Working Hours: 8 am - 10 pm
      </div>
      <div className="flex-1 w-full h-1/2 relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default WorkingHourPage;
