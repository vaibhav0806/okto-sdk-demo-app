import React from "react";
import { EthereumIcon, TetherIcon } from "../common/Icon";
import { cryptoToken } from "../common/Helper";

const CryptoTokens = ({ mode = "light" }) => {
  // Define text colors based on the mode
  const nameTextColor = mode === "dark" ? "text-white" : "text-[#161616]";
  const descTextColor = mode === "dark" ? "text-[#A0A0A0]" : "text-[#707070]";
  const priceTextColor = mode === "dark" ? "text-white" : "text-[#161616]";

  return (
    <div className="flex flex-col gap-5 h-[8rem] pr-2 overflow-auto">
      {cryptoToken.map((item, index) => (
        <div key={index} className="flex gap-3 w-full items-center">
          <span>{item.Icon}</span>
          <div className="flex flex-col gap-2 w-full">
            <p
              className={`text-[14px] font-semibold leading-[143%] ${nameTextColor}`}
            >
              {item.name}
            </p>
            <p
              className={`text-[12px] font-normal leading-[135%] ${descTextColor}`}
            >
              {item.decs}
            </p>
          </div>
          <p
            className={`text-[14px] font-normal leading-[171%] ${priceTextColor}`}
          >
            ₹{item.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CryptoTokens;
