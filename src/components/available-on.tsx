import ShoopeLogo from "@/assets/shoope.png";
import GrabLogo from "@/assets/grab.png";
import Gofood from "@/assets/gofood.png";

export const AvailableOn = () => {
  return (
    <div className="mt-56 mb-32">
      <h2 className="text-4xl font-bold text-center text-sky-500 mb-8">
        Now Available on
      </h2>
      <div className="flex flex-col sm:flex-row justify-center mt-10 items-center gap-10">
        <img src={Gofood} alt="GoFood" className="h-20 w-auto" />
        <img src={GrabLogo} alt="GrabFood" className="h-28 w-auto" />
        <img src={ShoopeLogo} alt="ShopeeFood" className="h-20 w-auto" />
      </div>
    </div>
  );
};
