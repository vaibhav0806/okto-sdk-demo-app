"use client";
import { useState } from "react";

const CardNavtabs = () => {
  const [activeTab, setActiveTab] = useState("controls");

  return (
    <div>
      <div className="bg-[#F5F6FE] h-9 flex items-center rounded-md p-0.5 px-1">
        <button
          onClick={() => setActiveTab("controls")}
          className={`px-2 py-1.5 rounded-md text-xs font-medium  ${
            activeTab === "controls"
              ? "text-[#161616] bg-white rounded-[1.6px]"
              : "text-[#707070]"
          }`}
        >
          Onboarding
        </button>
        <button
          onClick={() => setActiveTab("customizations")}
          className={`px-2 py-1.5 rounded-sm text-xs font-medium  ${
            activeTab === "customizations"
              ? "text-[#161616] bg-white rounded-[1.6px]"
              : "text-[#707070]"
          }`}
        >
          Wallet
        </button>
      </div>
    </div>
  );
};

export default CardNavtabs;
