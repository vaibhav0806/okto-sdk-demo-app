"use client";
import React, { useState } from "react";
import WalletCard from "./WalletCard";
import NavtabIcon from "./NavtabIcon";
import CardNavtabs from "./CardNavtabs";
import MobileContainer from "@/components/wallet/MobileContainer";

const TabsCards = ({ color, mode }) => {
  const [view, setView] = useState("web");

  return (
    <div className="w-full p-2 sm:p-4 lg:p-6 rounded-xl border border-[rgba(22,22,22,0.12)] bg-white md:max-w-xl">
      <div className="flex gap-4 justify-between items-center">
        <div>
          <CardNavtabs />
        </div>
        <div>
          <NavtabIcon setView={setView} />
        </div>
      </div>

      {view === "web" ? (
        <WalletCard color={color} mode={mode} />
      ) : (
        <div className="flex items-center justify-center">
          <MobileContainer>
            <WalletCard color={color} mode={mode} />
          </MobileContainer>
        </div>
      )}
    </div>
  );
};

export default TabsCards;
