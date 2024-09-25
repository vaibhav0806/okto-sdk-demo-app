"use client";

import { useState } from "react";
import { ControlArrowUpIcon } from "../common/Icon";
import AnimateHeight from "react-animate-height";

export default function ControlsCard({ icon, label, children }) {
  const [height, setHeight] = useState("auto");

  return (
    <div className="w-full p-4 rounded-2xl bg-[#F5F6FE]">
      {/* BUTTON TO OPEN AND CLOSE THE CONTROLS CARD */}
      <button
        aria-expanded={height != 0}
        aria-controls="control-tab"
        onClick={() => setHeight(height === 0 ? "auto" : 0)}
        className="w-full flex items-center gap-2 sm:gap-4"
      >
        <div className="flex-shrink-0">{icon}</div>
        <div className="w-full flex items-center justify-between gap-2">
          <span className="text-lg sm:text-xl font-semibold leading-[28px]  text-[#161616]">
            {label}
          </span>
          <span
            className={`duration-300 ${
              height == 0 ? "rotate-180" : "rotate-0"
            }`}
          >
            <ControlArrowUpIcon />
          </span>
        </div>
      </button>

      {/* INNER COMPONENT */}
      <AnimateHeight duration={300} id="control-tab" height={height}>
        {children}
      </AnimateHeight>
    </div>
  );
}
