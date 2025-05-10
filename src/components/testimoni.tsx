import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  text: string;
  name: string;
  rating: number;
  role: string;
  level: number;
}

const testimonials: Testimonial[] = [
  {
    text: "Tempat nongkrong andalan klo lagi bingung mau kemana. Menunya variatif, harga cukup affordable, parkiran luas, tempat bersih dan nyaman...",
    name: "Raras Arum Wulandari",
    rating: 5,
    role: "Local Guide",
    level: 6,
  },
  {
    text: "Kopinya enak, suasananya cozy banget. Pelayanannya ramah dan cepat. Suka banget ngumpul di sini!",
    name: "Dimas Pratama",
    rating: 4,
    role: "Pengunjung Tetap",
    level: 3,
  },
  {
    text: "Cocok buat kerja atau sekadar nongkrong. Tempatnya luas, ada indoor dan outdoor. Recomended banget buat komunitas!",
    name: "Anindya Kusuma",
    rating: 5,
    role: "Coffee Enthusiast",
    level: 2,
  },
];

export const Testimoni = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2 className="text-4xl text-center font-bold mb-12 text-sky-500">
        What They Say
      </h2>
      <div className="relative w-full sm:max-w-5xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-full flex justify-center items-center p-6"
            >
              <div className="w-[38rem] bg-white shadow-xl p-8 rounded-xl flex flex-col items-center gap-4 transition-transform duration-300 ease-out hover:scale-105">
                <Quote className="w-8 h-8 text-sky-400" />
                <p className="text-gray-700 text-sm italic text-center">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-1 text-yellow-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5" />
                  ))}
                </div>
                <p className="text-base font-semibold text-gray-800">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500">
                  {item.role} · Level {item.level}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
