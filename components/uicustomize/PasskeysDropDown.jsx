import { Select } from "@headlessui/react";
import { ControlArrowUpIcon } from "../common/Icon";

export default function PasskeysDropDown() {
  return (
    <div className="max-w-[204px]">
      <div className="relative">
        <Select className="mt-3 block w-full appearance-none rounded-lg border border-[rgba(22,22,22,0.12)] bg-white py-2 px-3 text-sm text-[#161616] focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 cursor-pointer peer">
          <option value="active">Passkeys Email OTP</option>
        </Select>
        <div
          aria-hidden="true"
          className={`group pointer-events-none absolute top-2.5 right-2.5 size-4 rotate-180 peer-focus:rotate-0 duration-300`}
        >
          <ControlArrowUpIcon />
        </div>
      </div>
    </div>
  );
}
