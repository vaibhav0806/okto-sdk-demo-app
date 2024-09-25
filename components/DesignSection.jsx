"use client";

import { useEffect, useState } from "react";
import Controls from "./uicustomize/Controls";
import TabsCards from "./wallet/TabsCards";
import CustomTabsCard from "./wallet/CustomTabsCard";
import { UiCustomize } from "@/components/uicustomize/UiCustomize";

const DesignSection = () => {
  const [activeTab, setActiveTab] = useState("customizations");
  const [color, setColor] = useState("#5166EE");
  const [mode, setMode] = useState("light");

  return (
    <div className="flex gap-3 md:flex-row flex-col lg:gap-6 xl:gap-12 w-full h-full">
      <div className="md:max-w-[30rem] h-full md:overflow-auto no-scrollbar md:pb-8 md:pr-2.5 w-full">
        {/* navtabs */}
        <div className="bg-[#F5F6FE] rounded-[6px] p-0.5 w-fit">
          <button
            onClick={() => setActiveTab("controls")}
            className={`p-2.5 text-sm font-medium leading-4 ${
              activeTab === "controls"
                ? "text-[#161616] bg-white rounded-[1.5px]"
                : "text-[#707070]"
            }`}
          >
            Controls
          </button>
          <button
            onClick={() => setActiveTab("customizations")}
            className={`p-2.5 text-sm font-medium leading-4 ${
              activeTab === "customizations"
                ? "text-[#161616] bg-white rounded-[1.5px]"
                : "text-[#707070]"
            }`}
          >
            UI Customizations
          </button>
        </div>

        <div>
          {activeTab === "customizations" && (
            <UiCustomize
              mode={mode}
              setMode={setMode}
              color={color}
              setColor={setColor}
            />
          )}

          {activeTab === "controls" && (
            <div className="mt-5">
              <Controls />
            </div>
          )}
        </div>
      </div>
      <div className="h-full md:overflow-auto md:pb-8 w-full">
        {activeTab === "customizations" && (
          <TabsCards color={color} mode={mode} />
        )}
        {activeTab === "controls" && <CustomTabsCard />}
      </div>
    </div>
  );
};

export default DesignSection;
