"use client";

import { useState } from "react";
import ComingSoon from "./ComingSoon";
import CustomToggleButton from "./CustomToggleButton";
import PasskeysDropDown from "./PasskeysDropDown";

export default function WalletControlInner() {
  const [delegation, setDelegation] = useState(true);

  return (
    <div className="mt-4 flex flex-col">
      {/* SPONSORSHIP */}
      <div className="w-full flex gap-3 justify-between items-start">
        <div className="max-w-[386px] flex flex-col gap-3">
          <h4 className="controlsSecondaryHeading">Sponsorship</h4>
          <p className="controlsPara">
            We do not recommend sending real funds to a demo wallet as the demo
            is cleared from time to time.
          </p>
        </div>

        <CustomToggleButton
          isChecked={true}
          isDisabled={true}
          onclick={() => {}}
        />
      </div>

      {/* LINE */}
      <div className="bg-[#161616] opacity-[12%] w-full h-[1px] my-3"></div>

      {/* DELEGATION */}
      <div className="w-full flex gap-3 justify-between items-start">
        <div className="max-w-[386px] flex flex-col gap-3">
          <h4 className="controlsSecondaryHeading">Delegation</h4>
          <p className="controlsPara">
            We do not recommend sending real funds to a demo wallet as the demo
            is cleared from time to time.
          </p>
        </div>

        <CustomToggleButton
          isChecked={delegation}
          isDisabled={false}
          // onclick={() => setDelegation(!delegation)}
        />
      </div>

      {/* LINE */}
      <div className="bg-[#161616] opacity-[12%] w-full h-[1px] my-3"></div>

      {/* MFA METHOD */}
      <div className="flex items-center gap-3">
        <span className="controlsSecondaryHeading">MFA method selection</span>
        <ComingSoon />
      </div>

      {/* DROPDOWN */}
      <PasskeysDropDown />

      <p className="controlsPara mt-[10px]">
        We do not recommend sending real funds to a demo wallet as the demo is
        cleared from time to time.
      </p>
    </div>
  );
}
