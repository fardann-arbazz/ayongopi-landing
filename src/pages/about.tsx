const AboutPages = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-28 mb-20 px-6">
      <div className="w-full max-w-screen-lg relative group">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/2b/ea/41/photo0jpg.jpg?w=900&h=500&s=1"
          alt="Tentang AyoNgopi"
          className="w-full h-[30rem] object-cover rounded-xl shadow-lg transition-transform duration-300 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent rounded-xl transition-transform duration-300 ease-out group-hover:scale-105"></div>
        <h1 className="absolute bottom-4 left-4 text-4xl font-extrabold text-white drop-shadow-md">
          Tentang AyoNgopi
        </h1>
      </div>

      {/* Teks Deskripsi */}
      <div className="mt-12 text-center max-w-3xl space-y-4">
        <h2 className="text-4xl font-bold text-sky-500 mb-6 relative inline-block">
          Mengapa AyoNgopi?
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-sky-400 rounded-full"></span>
        </h2>
        <p className="sm:text-lg text-base text-gray-700 leading-relaxed">
          AyoNgopi adalah tempat terbaik untuk menikmati kopi berkualitas dengan
          suasana nyaman dan penuh kehangatan. Kami menyediakan berbagai pilihan
          kopi dari biji pilihan terbaik, disajikan dengan penuh cinta oleh
          barista handal.
        </p>
        <p className="sm:text-lg text-base text-gray-700 leading-relaxed">
          Tidak hanya kopi, kami juga menawarkan berbagai menu makanan ringan
          yang cocok menemani waktu bersantai Anda. Baik untuk bekerja,
          berkumpul bersama teman, atau sekadar menikmati waktu sendiri,
          AyoNgopi adalah tempatnya.
        </p>
      </div>
    </div>
  );
};

export default AboutPages;
