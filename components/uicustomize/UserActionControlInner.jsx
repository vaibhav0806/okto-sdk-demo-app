"use client";

import ComingSoon from "./ComingSoon";
import CustomToggleButton from "./CustomToggleButton";

export default function UserActionControlInner() {
  return (
    <div className="mt-4 flex flex-col">
      <div className="w-full flex gap-3 justify-between items-start">
        <div className="max-w-[386px] flex flex-col gap-3">
          <h4 className="controlsSecondaryHeading">Send & Recieve</h4>
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

      {/* COMING SOON */}
      <div className="w-full flex items-center gap-3 justify-between">
        <div className="flex items-center justify-center gap-3">
          <span className="controlsSecondaryHeading">Onramp</span>
          <ComingSoon />
        </div>
        <CustomToggleButton
          isChecked={false}
          isDisabled={true}
          onclick={() => {}}
        />
      </div>
    </div>
  );
}
