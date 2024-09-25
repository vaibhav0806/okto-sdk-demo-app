import React from "react";
import Image from "next/image";

function MobileContainer({ children }) {
  return (
    <div className="relative w-[22rem] mx-auto">
      {" "}
      {/* Center it horizontally */}
      <div className="w-[76%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[43%]">
        {/* Adjust position */}
        <div className="">{children}</div>
      </div>
      <Image
        alt="iPhone-12"
        src="/img/iPhone-12-Mockup.png"
        className="w-full"
        width={320}
        height={30}
      />
    </div>
  );
}

export default MobileContainer;
