import { Button } from "./ui/button";

export const About = () => {
  return (
    <section className="mt-28 flex sm:flex-row flex-col gap-20 justify-center">
      <div className="flex gap-6">
        <div className="w-[16rem] lg:mt-20 md:mt-20 mt-10">
          <img
            src="https://i.pinimg.com/736x/ec/d7/dc/ecd7dc64767d9a5e13ff80c53beca3d8.jpg"
            alt="profil"
            className="rounded-md object-cover w-full h-auto"
          />
        </div>
        <div className="w-[22rem]">
          <img
            src="https://i.pinimg.com/736x/02/5b/21/025b21ecb44e0a11b1c011794bc0d26a.jpg"
            alt="profil"
            className="rounded-md object-cover w-full h-auto"
          />
        </div>
      </div>
      <div className="sm:mt-8 mt-2">
        <h2 className="text-6xl text-sky-500 font-bold">About Us</h2>
        <p className="text-sm sm:w-[600px] mt-4 leading-relaxed text-gray-700">
          Selamat datang di{" "}
          <span className="text-sky-500 font-semibold">AyoNgopi</span>, tempat
          di mana kopi berkualitas tinggi bertemu dengan suasana yang nyaman dan
          penuh kehangatan.
          <p className="mt-4">
            Berlokasi di jantung kota Tegal, kami tidak hanya menawarkan
            secangkir kopi, tetapi juga pengalaman yang tak terlupakan.
          </p>
          <p className="mt-4">
            {" "}
            Nikmati aroma kopi segar, suasana yang cozy, dan pelayanan ramah
            yang membuat Anda merasa seperti di rumah sendiri. AyoNgopi adalah
            tempat yang sempurna untuk bersantai, bekerja, atau sekadar
            menikmati waktu bersama orang-orang tercinta.
          </p>{" "}
          <p className="mt-4">
            Mari bergabung dengan kami dan rasakan sendiri keajaiban di setiap
            tegukan!
          </p>
        </p>
        <Button className="bg-sky-400 mt-6 cursor-pointer px-8 py-5 sm:px-12 sm:py-6 text-sm rounded-full hover:bg-white hover:border-sky-400 border hover:text-black transition-all">
          Selengkapnya
        </Button>
      </div>
    </section>
  );
};
