import React from "react";
import {
  CrossIcon,
  HalfEyeIcon,
  LineIcon,
  NotesIcon,
  ProfileIcon,
  RefreshIcon,
} from "../common/Icon";
import ItemsNavtabs from "./ItemsNavtabs";
import Image from "next/image";

const WalletCard = ({ color, mode = "light", view="mobile" }) => {
  // Define background and text color based on the mode
  const outerBackgroundColor = mode === "dark" ? "#161616" : "#F5F6FE";
  let innerBackgroundColor = mode === "dark" ? "#1E1E1E" : "#FFFFFF";
  innerBackgroundColor = view === "mobile" ? outerBackgroundColor : innerBackgroundColor;
  const headerTextColor = mode === "dark" ? "text-[#A0A0A0]" : "text-[#161616]";
  const iconTextColor = mode === "dark" ? "#FFFFFF" : "#707070";
  const balanceTextColor =
    mode === "dark" ? "text-[#FFFFFF]" : "text-[#161616]";
  const subTextColor = mode === "dark" ? "text-[#A0A0A0]" : "text-[#707070]";

  return (
    <div
      className="max-w-[20rem] w-full mx-auto rounded-[25.6px] p-1.5 mt-[23px] duration-300"
      style={{ backgroundColor: outerBackgroundColor }}
    >
      <div className="flex justify-between pt-2 pb-2 px-2.5">
        <div className="flex items-center gap-1.5">
          <Image src="/img/okto-logo.png" height={24} width={24} alt="logo" />
          <div className={`font-semibold text-sm ${headerTextColor}`}>
            Okto Wallet
          </div>
        </div>
        <div className="flex scale-[0.8] gap-2.5 justify-end items-center">
          <button className="">
            <NotesIcon color={iconTextColor} />
          </button>
          <button className="p-0.5">
            <ProfileIcon color={iconTextColor} />
          </button>
          <div>
            <LineIcon color={iconTextColor} />
          </div>
          <button className="p-0.5 hover:rotate-[360deg] duration-300">
            <RefreshIcon color={iconTextColor} />
          </button>
          <button className="p-0.5 hover:rotate-[360deg] duration-300">
            <CrossIcon color={iconTextColor} />
          </button>
        </div>
      </div>

      {/* Updated Inner background to be darker in dark mode */}
      <div
        className="w-full pt-6.5 overflow-hidden rounded-[25.6px] flex flex-col gap-4"
        style={{ backgroundColor: innerBackgroundColor }}
      >
        <div className="flex pt-4 px-4 flex-col gap-2 items-center">
          <div className="flex gap-1.5 items-center">
            <p
              className={`font-normal text-[9.6px] leading-[133%] ${subTextColor}`}
            >
              Total balance
            </p>
            <span>
              <HalfEyeIcon className={subTextColor} />
            </span>
          </div>
          <p
            className={`font-medium text-[22.4px] leading-[142%] ${balanceTextColor}`}
          >
            ₹16,299.8
          </p>
        </div>
        <div className="flex px-4 gap-2.5">
          <button
            className={`text-white w-[128.8px] h-9 flex justify-center items-center rounded-[96px] text-center text-[11.2px] font-semibold leading-[142%] hover:scale-95 transition duration-300 ease-in-out`}
            style={{ backgroundColor: color }}
          >
            Receive
          </button>
          <button
            className={`text-white w-[128.8px] h-9 flex justify-center items-center rounded-[96px] text-center text-[11.2px] font-semibold leading-[142%] hover:scale-95 transition duration-300 ease-in-out`}
            style={{ backgroundColor: color }}
          >
            Send
          </button>
        </div>
        <div className="flex justify-center">
          <ItemsNavtabs mode={mode} />
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
