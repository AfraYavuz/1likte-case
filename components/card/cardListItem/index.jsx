import { IoReturnUpForwardOutline } from "react-icons/io5";
import { IoCubeOutline } from "react-icons/io5";
import { FaDolly } from "react-icons/fa";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiDiscount1 } from "react-icons/ci";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { TbBorderCorners } from "react-icons/tb";
import { PiTarget } from "react-icons/pi";
import { IoAnalyticsOutline } from "react-icons/io5";
import { GiSoundWaves } from "react-icons/gi";
import { PiLightningLight } from "react-icons/pi";
import { SlLayers } from "react-icons/sl";

const iconMap = {
  right: <IoReturnUpForwardOutline />,
  cube: <IoCubeOutline />,
  dolly: <FaDolly />,
  left: <IoReturnUpBackOutline />,
  truck: <LiaShippingFastSolid />,
  discount: <CiDiscount1 />,
  square: <HiOutlineSquare2Stack />,
  corners: <TbBorderCorners />,
  target: <PiTarget />,
  analytics: <IoAnalyticsOutline />,
  sound: <GiSoundWaves />,
  light: <PiLightningLight />,
  layers: <SlLayers />,
};

export function CardListItem({ title, description, icon, articleCount }) {
  const Icon = iconMap[icon];
  return (
    <div className="transition-all hover:shadow-md w-[306.67px] h-[181px] border hover:border-[#1C1C1E] rounded-xl gap-5">
      <div className="p-6">
        <div className="space-y-2 font-inter    text-base">
          <div className=" text-black text-2xl">{Icon}</div>
          <h3 className=" text-black">{title}</h3>
          <p className=" text-[#414141]">{description}</p>
          <p className=" text-[#414141]">{articleCount} yazı</p>
        </div>
      </div>
    </div>
  );
}
