"use client";
import { useState } from "react";
import { DesktopTabIcon, MobileTabIcon } from "../common/Icon";

const NavtabIcon = ({ setView }) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="w-full">
      <ul className="scale-[0.8] flex gap-1.5">
        {[MobileTabIcon, DesktopTabIcon].map((Icon, index) => (
          <li key={index} className="mr-1">
            <button
              className={`inline-block border border-[rgba(22,22,22,0.12)] text-[#707070]  rounded-lg px-3 w-10 h-10 ${
                activeTab === index ? "bg-[#F5F6FE]  border text-[#161616]" : ""
              }`}
              onClick={() => {
                setActiveTab(index);
                setView(index === 0 ? "mobile": "web")
              }}
            >
              <Icon color={activeTab === index ? "#161616" : "#707070"} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavtabIcon;
