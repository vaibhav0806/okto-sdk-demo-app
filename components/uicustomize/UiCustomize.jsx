import { DesignLogoIcon } from "@/components/common/Icon";
import { useState } from "react";

export function UiCustomize({mode, setMode, color, setColor }) {
  const [colorTab, setColorTab] = useState(0);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleFixeColorClick = (color, number) => {
    setColor(color);
    setColorTab(number);
  };

  return (
    <div className="p-5 mt-5 rounded-[12.5px] bg-[#F5F6FE] w-full">
      <div className="flex gap-3 items-center">
        <DesignLogoIcon />
        <p className="text-[#161616] text-lg font-semibold leading-[140%]">
          Design
        </p>
      </div>
      <p className="text-[#161616] text-xs font-medium leading-4 pt-8">Mode</p>

      <div className="bg-[#EAEDFD] rounded-[6px] p-0.5 mt-[21px] w-fit">
        <div>
          <button
            onClick={() => setMode("light")}
            className={`p-2.5 text-sm font-medium leading-4 ${
              mode === "light"
                ? "text-[#161616] bg-white rounded-[1.5px]"
                : "text-[#707070]"
            }`}
          >
            Light
          </button>
          <button
            onClick={() => setMode("dark")}
            className={`p-2.5 text-sm font-medium leading-4 ${
              mode === "dark"
                ? "text-[#161616] bg-white rounded-[1.5px]"
                : "text-[#707070]"
            }`}
          >
            Dark
          </button>
        </div>
      </div>
      <div className="bg-[#1616161F] h-[0.8px] w-full my-3"></div>

      <div>
        <p className="text-[#161616] text-xs font-medium leading-[142%]">
          Color
        </p>
        <div className="flex gap-3 mt-3">
          <button
            onClick={() => handleFixeColorClick("#5166EE", 0)}
            className={`w-8 h-8 ${
              colorTab === 0 &&
              "border-[1.5px] border-[#5166EE] p-0.5 rounded-full"
            }`}
          >
            <div className="w-full h-full rounded-full bg-[#5166EE]"></div>
          </button>
          <button
            onClick={() => handleFixeColorClick("#37B271", 1)}
            className={`w-8 h-8 ${
              colorTab === 1 &&
              "border-[1.5px] border-[#37B271] p-0.5 rounded-full"
            }`}
          >
            <div className="w-full h-full rounded-full bg-[#37B271]"></div>
          </button>
          <button
            onClick={() => handleFixeColorClick("#F7931A", 2)}
            className={`w-8 h-8 ${
              colorTab === 2 &&
              "border-[1.5px] border-[#F7931A] p-0.5 rounded-full"
            }`}
          >
            <div className="w-full h-full rounded-full bg-[#F7931A]"></div>
          </button>
          <button
            onClick={() => handleFixeColorClick("#F75757", 3)}
            className={`w-8 h-8 ${
              colorTab === 3 &&
              "border-[1.5px] border-[#F75757] p-0.5 rounded-full"
            }`}
          >
            <div className="w-full h-full rounded-full bg-[#F75757]"></div>
          </button>

          {/* Custom color picker */}
          <div
            onClick={() => setColorTab(4)}
            className={`w-8 h-8 overflow-hidden cursor-pointer rounded-full ${
              colorTab === 4 && `border-[1.5px] p-0.5`
            }`}
            style={{ borderColor: color }}
          >
            <div className="rounded-full w-full h-full bg-no-repeat bg-cover bg-center bg-[url('/img/grdient-bg.png')]">
              <input
                type="color"
                value={color}
                onChange={handleColorChange}
                className="w-full h-full opacity-0 cursor-pointer rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
