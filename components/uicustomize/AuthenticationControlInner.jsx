"use client";

import { useState } from "react";
import { socialLoginOptions } from "../common/Helper";
import CheckboxWithIconLabel from "./CheckboxWithIconLabel";
import ComingSoon from "./ComingSoon";
import {
  ControlEmailIcon,
  ControlMessageIcon,
  ControlPasskeyIcon,
} from "../common/Icon";

export default function AuthenticationControlInner() {
  const [selectedSocialLogin, setSelectedSocialLogin] = useState(0);

  return (
    <div className="mt-4 flex flex-col gap-3">
      <h4 className="controlsSecondaryHeading">Social Login</h4>

      {/* GOOGLE, TELEGRAM AND OTHER */}
      <div className="w-full flex flex-wrap gap-4">
        {socialLoginOptions.map((element, index) => (
          <CheckboxWithIconLabel
            key={element.id}
            icon={element.icon}
            label={element.label}
            isChecked={selectedSocialLogin === index}
            isDisabled={
              selectedSocialLogin != null && selectedSocialLogin !== index
            }
            onclick={() => {
              // selectedSocialLogin === index
              //   ? setSelectedSocialLogin(null)
              //   : setSelectedSocialLogin(index);
            }}
            width={element.width}
          />
        ))}
      </div>

      {/* LINE */}
      <div className="bg-[#161616] opacity-[12%] w-full h-[1px]"></div>

      {/* COMING SOON */}
      <div className="flex items-center gap-4">
        <span className="controlsSecondaryHeading">Email/SMS/Passkeys</span>
        <ComingSoon />
      </div>

      {/* EMAIL, SMS */}
      <div className="flex items-center flex-wrap gap-4">
        <CheckboxWithIconLabel
          icon={<ControlEmailIcon />}
          label="Email"
          isChecked={false}
          isDisabled={true}
          onclick={() => {}}
          width={128}
        />
        <CheckboxWithIconLabel
          icon={<ControlMessageIcon />}
          label="SMS"
          isChecked={false}
          isDisabled={true}
          onclick={() => {}}
          width={128}
        />
        <CheckboxWithIconLabel
          icon={<ControlPasskeyIcon />}
          label="Passkeys"
          isChecked={false}
          isDisabled={true}
          onclick={() => {}}
          width={128}
        />
      </div>
    </div>
  );
}
