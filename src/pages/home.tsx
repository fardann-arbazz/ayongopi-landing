import { About } from "@/components/about";
import { AvailableOn } from "@/components/available-on";
import { HeroSection } from "@/components/hero";
import { Service } from "@/components/service";
import { Testimoni } from "@/components/testimoni";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
      <div className="section">
        <HeroSection />
      </div>
      <div className="section">
        <About />
      </div>
      <div className="section">
        <Service />
      </div>
      <Testimoni />
      <div className="mt-32">
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-center text-sky-500 text-4xl sm:text-6xl font-bold">
            Ayo Reservasi
          </h4>
          <p className="text-center text-sky-500 font-bold text-4xl sm:text-5xl mt-1">
            Sekarang!
          </p>
          <p className="text-center w-72 sm:w-full sm:text-base my-7">
            Reservasi Sekarang dan Nikmati Momen Tak Terlupakan!
          </p>
          <Button className="bg-sky-400 py-5 cursor-pointer px-10 rounded-full hover:bg-white hover:border-sky-400 border hover:text-black transition-all">
            Reservasi
          </Button>
        </div>
      </div>
      <div className="mt-12">
        <AvailableOn />
      </div>
    </>
  );
};

export default Home;
