export default function CustomToggleButton({ isChecked, isDisabled, onclick }) {
  return (
    <button
      onClick={onclick}
      className={`w-11 p-0.5 flex items-center rounded-full duration-300 flex-shrink-0 ${
        isDisabled && "opacity-50"
      } ${
        isChecked ? "justify-end bg-[#5166EE]" : "justify-start bg-[#dbdbde]"
      }`}
    >
      <div className="size-5 rounded-full bg-white"></div>
    </button>
  );
}
