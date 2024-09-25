import {
  CrossIcon,
  LineIcon,
  NotesIcon,
  ProfileIcon,
  RefreshIcon,
} from "../common/Icon";
import Image from "next/image";

const CustomWalletCard = () => {
  return (
    <div className="max-w-[391px]  w-full mx-auto bg-[#F5F6FE] rounded-[32px] p-2 mt-[29px]">
      <div className="pt-3 pb-5 px-3 ">
        <div className="flex gap-3 w-full justify-end items-center">
          <button className="">
            <NotesIcon />
          </button>
          <button className="p-1">
            <ProfileIcon />
          </button>
          <div>
            <LineIcon />
          </div>
          <button className="p-1 hover:rotate-[360deg] duration-300">
            <RefreshIcon />
          </button>
          <button className="p-1 hover:rotate-[360deg] duration-300">
            <CrossIcon />
          </button>
        </div>
      </div>
      <div className="w-full  pt-8 px-5 justify-center items-center bg-white h-[492px] rounded-[32px] flex flex-col gap-5">
        <button
          type="submit"
          className="w-full text-[#161616] justify-center hover:bg-black hover:text-white duration-300 rounded-[12px] border px-3 border-[rgba(22,22,22,0.12)]  items-center text-[14px] font-medium leading-[142%] h-[56px] flex gap-2.5"
        >
          <span>
            <Image
              src="/img/googlelogo.png"
              height={21}
              width={21}
              alt="googlelogo"
            />
          </span>
          Google account
        </button>
      </div>
    </div>
  );
};

export default CustomWalletCard;
