import React from "react";
import CardNavtabs from "../wallet/CardNavtabs";
import NavtabIcon from "../wallet/NavtabIcon";
import CustomWalletCard from "./CustomWalletCard";

const CustomTabsCard = () => {
  return (
    <div className="md:max-w-[640px] w-full  p-3 sm:p-6 rounded-2xl border border-[rgba(22,22,22,0.12)] bg-white">
      <div className="flex gap-5 justify-between items-center">
        <div>
          <CardNavtabs />
        </div>
        <div>
          <NavtabIcon setView={(view) => {}}/>
        </div>
      </div>
      <CustomWalletCard />
    </div>
  );
};

export default CustomTabsCard;
