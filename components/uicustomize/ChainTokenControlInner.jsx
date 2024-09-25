"use client";

import { useState } from "react";
import {
  ControlAptosIcon,
  ControlEvmIcon,
  ControlSolanaIcon,
} from "../common/Icon";
import CheckboxWithIconLabel from "./CheckboxWithIconLabel";

export const ChainTokenControlInner = () => {
  const [selectEVM, setSelectEVM] = useState(true);
  const [selectSolana, setSelectSolana] = useState(true);
  const [selectAptos, setSelectAptos] = useState(true);

  return (
    <div className="mt-4 flex flex-col gap-3">
      <h4 className="controlsSecondaryHeading">
        Select chains and tokens to be enabled
      </h4>

      {/* EVM, SOLANA, APTOS */}
      <div className="flex items-center flex-wrap gap-3">
        <CheckboxWithIconLabel
          icon={<ControlEvmIcon />}
          label="EVM"
          isChecked={selectEVM}
          isDisabled={false}
          // onclick={() => setSelectEVM(!selectEVM)}
          width={136}
        />
        <CheckboxWithIconLabel
          icon={<ControlSolanaIcon />}
          label="Solana"
          isChecked={selectSolana}
          isDisabled={false}
          // onclick={() => setSelectSolana(!selectSolana)}
          width={136}
        />
        <CheckboxWithIconLabel
          icon={<ControlAptosIcon />}
          label="Aptos"
          isChecked={selectAptos}
          isDisabled={false}
          // onclick={() => setSelectAptos(!selectAptos)}
          width={136}
        />
      </div>
    </div>
  );
};
