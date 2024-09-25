"use client";
import { useState } from "react";
import { EthereumIcon, TetherIcon } from "../common/Icon";
import CryptoTokens from "./CryptoTokens";

const ItemsNavtabs = ({ mode = "light" }) => {
  const [activeTab, setActiveTab] = useState("Crypto");

  // Define text colors based on the mode
  const activeTabTextColor = mode === "dark" ? "text-white" : "text-[#161616]";
  const inactiveTabTextColor =
    mode === "dark" ? "text-[#A0A0A0]" : "text-[#707070]";
  const buttonBgColor = mode === "dark" ? "bg-[#1E1E1E]" : "bg-white";
  const buttonHoverBgColor =
    mode === "dark"
      ? "hover:bg-[#FFFFFF] hover:text-[#161616]"
      : "hover:bg-[#161616] hover:text-white";
  const buttonBorderColor =
    mode === "dark"
      ? "border-[rgba(255,255,255,0.3)]"
      : "border-[rgba(22,22,22,0.12)]";
  const buttonHoverBorderColor =
    mode === "dark" ? "hover:border-[#161616]" : "hover:border-white";

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex gap-8 w-fit mx-auto">
        <button
          className={`py-2 relative text-[14px] leading-[142%] ${
            activeTab === "Crypto"
              ? `font-semibold ${activeTabTextColor}`
              : `${inactiveTabTextColor} font-medium`
          }`}
          onClick={() => setActiveTab("Crypto")}
        >
          Crypto
          <div
            className={`absolute bg-[#5166EE] duration-300 bottom-0 left-0 rounded-2xl h-[3px] ${
              activeTab === "Crypto" ? "w-full" : "w-0"
            }`}
          ></div>
        </button>
        <button
          className={`py-2 relative text-[14px] leading-[142%] ${
            activeTab === "NFTs"
              ? `font-semibold ${activeTabTextColor}`
              : `${inactiveTabTextColor} font-medium`
          }`}
          onClick={() => setActiveTab("NFTs")}
        >
          NFTs
          <div
            className={`absolute bg-[#5166EE] duration-300 bottom-0 left-0 rounded-2xl h-[3px] ${
              activeTab === "NFTs" ? "w-full" : "w-0"
            }`}
          ></div>
        </button>
      </div>
      <div className="h-[14rem] pb-8 px-5 overflow-auto">
        {activeTab === "Crypto" && (
          <div className="flex flex-col justify-between h-full">
            <div>
              <CryptoTokens mode={mode} />
            </div>
            <div className="w-full">
              <button
                className={`w-full h-11 text-center rounded-[42px] border ${buttonBorderColor} ${buttonBgColor} text-[14px] ${activeTabTextColor} font-semibold leading-[142%] ${buttonHoverBgColor} ${buttonHoverBorderColor} transition duration-300 ease-in-out`}
              >
                See all tokens
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemsNavtabs;
