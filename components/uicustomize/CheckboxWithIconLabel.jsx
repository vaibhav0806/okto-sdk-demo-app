import { ControlsTickIcon } from "../common/Icon";

export default function CheckboxWithIconLabel({
  icon,
  label,
  isChecked,
  isDisabled,
  onclick,
  width,
}) {
  return (
    <button
      style={{ width: `${width}px` }}
      onClick={onclick}
      className={`py-[6px] px-2 flex items-center gap-2 bg-white rounded-sm ${
        isDisabled && "opacity-50"
      }`}
    >
      <div className="flex-shrink-0">{icon}</div>
      <div className="w-full flex items-center justify-between gap-2">
        <span className="text-sm font-medium leading-[20px] text-[#161616]">
          {label}
        </span>

        {/* CHECKBOX */}
        <div
          className={`size-4 flex items-center justify-center rounded border ${
            isChecked
              ? "bg-[#5166EE] border-[#5166EE]"
              : "bg-transparent border-[#ECECF0]"
          }`}
        >
          {isChecked && <ControlsTickIcon />}
        </div>
      </div>
    </button>
  );
}
