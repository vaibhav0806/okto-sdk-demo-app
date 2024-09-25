import {
  CoinsChainsTokensIcon,
  ControlsWalletIcon,
  DocumentSignIcon,
  ShieldCheckIcon,
  UserSettingIcon,
} from "../common/Icon";
import AuthenticationControlInner from "./AuthenticationControlInner";
import { ChainTokenControlInner } from "./ChainTokenControlInner";
import ControlsCard from "./ControlsCard";
import UserActionControlInner from "./UserActionControlInner";
import WalletControlInner from "./WalletControlInner";

export default function Controls() {
  return (
    <div className="w-full flex flex-col gap-4">
      <ControlsCard icon={<ShieldCheckIcon />} label="Authentication">
        <AuthenticationControlInner />
      </ControlsCard>
      <ControlsCard icon={<UserSettingIcon />} label="User Actions">
        <UserActionControlInner />
      </ControlsCard>
      <ControlsCard icon={<CoinsChainsTokensIcon />} label="Chains and Tokens">
        <ChainTokenControlInner />
      </ControlsCard>
      <ControlsCard icon={<ControlsWalletIcon />} label="Embedded Wallet">
        <WalletControlInner />
      </ControlsCard>
      {/* SIGN */}
      <div className="w-full p-4 rounded-2xl bg-[#F5F6FE] flex items-start gap-2 sm:gap-3">
        <DocumentSignIcon />
        <div className="w-full flex items-start gap-2 sm:gap-3">
          <div className="flex flex-col gap-3">
            <h4 className="text-xl font-semibold leading-[28px]  text-[#161616]">
              Sign
            </h4>
            <p className="controlsPara">
              We do not recommend sending real funds to a demo wallet as the
              demo is cleared from time to time.
            </p>
          </div>
          <button className="py-2 hover:text-white hover:bg-black duration-300 px-3 sm:px-5 border border-[rgba(22,22,22,0.12)] rounded-full controlsSecondaryHeading flex-shrink-0">
            Test Signing
          </button>
        </div>
      </div>
    </div>
  );
}
