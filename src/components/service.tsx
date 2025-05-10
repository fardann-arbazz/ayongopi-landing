export const Service = () => {
  return (
    <section className="mt-14 flex flex-col items-center justify-center">
      <h3 className="text-5xl text-center font-semibold text-sky-500">
        Our Services Excellent
      </h3>
      <p className="my-6 text-base italic text-[#54595F]">
        Kami siap melayani anda dengan baik😁
      </p>
      <div className="flex flex-col sm:flex-none justify-center sm:justify-normal items-center sm:items-stretch gap-4">
        <div className="flex flex-col gap-2 justify-between">
          <div className="sm:w-[20rem] w-[22rem] h-[20rem] cursor-pointer overflow-hidden group">
            <img
              src="https://kelas-work.s3.ap-southeast-1.amazonaws.com/bucket-prod-98123hsandknaknd1u3/upload/files/img/blog_cover/blogcover-urn62e21b154e963.webp"
              alt="barista"
              className="rounded-md object-cover w-full h-full transition-transform duration-300 ease-out group-hover:scale-110"
            />
          </div>
          <p className="text-xl font-semibold">Barista Show</p>
          <p className="text-sm italic text-[#54595F] w-[350px] flex-grow">
            Saksikan keahlian barista kami meracik kopi dengan penuh seni dan
            teknik istimewa. Setiap sajian adalah karya yang memanjakan mata dan
            lidah Anda!
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-between">
          <div className="sm:w-[20rem] w-[22rem] h-[20rem] cursor-pointer overflow-hidden group">
            <img
              src="https://assets-pergikuliner.com/QATJ5EJuBFbKCluxDUtpyGlc-Is=/312x0/smart/https://assets-pergikuliner.com/uploads/image/picture/3025265/picture-1693372994.PNG"
              alt="menu"
              className="rounded-md object-cover w-full h-full transition-transform duration-300 ease-out group-hover:scale-110"
            />
          </div>
          <p className="text-xl font-semibold">Complete Menu</p>
          <p className="text-sm italic text-[#54595F] w-[350px] flex-grow">
            Temukan ragam pilihan menu kami! Dari kopi premium hingga makanan
            ringan dan hidangan utama, semua disajikan dengan kualitas terbaik.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-between">
          <div className="sm:w-[20rem] w-[22rem] h-[20rem] cursor-pointer overflow-hidden group">
            <img
              src="https://blog.sribu.com/wp-content/uploads/2024/04/daan-evers-tKN1WXrzQ3s-unsplash-scaled.jpg"
              alt="place"
              className="rounded-md object-cover w-full h-full transition-transform duration-300 ease-out group-hover:scale-110"
            />
          </div>
          <p className="text-xl font-semibold">Cozy Place</p>
          <p className="text-sm italic text-[#54595F] w-[350px] flex-grow">
            Suasana hangat dan nyaman dengan interior yang estetik. Tempat
            sempurna untuk ngobrol santai, bekerja, atau sekadar menikmati kopi
            terbaik.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-between">
          <div className="sm:w-[20rem] w-[22rem] h-[20rem] cursor-pointer overflow-hidden group">
            <img
              src="https://www.crewcoffee.hk/cdn/shop/files/IMG_3635_v2_a9c102b5-b899-440e-abd5-4e7fa17819d4_2048x.jpg?v=1645777130"
              alt="crew"
              className="rounded-md object-cover w-full h-full transition-transform duration-300 ease-out group-hover:scale-110"
            />
          </div>
          <p className="text-xl font-semibold">Great Crew</p>
          <p className="text-sm italic text-[#54595F] w-[350px] flex-grow">
            Tim kami selalu siap melayani dengan penuh senyum dan kehangatan.
            Bersama kami, nikmati pengalaman yang ramah dan menyenangkan!
          </p>
        </div>
      </div>
    </section>
  );
};
