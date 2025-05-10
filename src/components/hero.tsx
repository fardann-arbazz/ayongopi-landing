import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

const itemsArray = [
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/2b/ea/41/photo0jpg.jpg?w=900&h=500&s=1",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6zwda1zXpsX5owlFVrAQewQKnWxTfEbcsg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVXSHcEh4R8JI1sLN5Msx7Yh8vo4Yn5U1kNg&s",
];

export const HeroSection = () => {
  return (
    <div className="flex flex-col sm:flex-row mt-10 sm:mt-28 items-center gap-8 sm:gap-12 justify-center">
      <div>
        <h1 className="text-sky-400 text-4xl sm:text-5xl font-bold">
          AyoNgopi is here, Guys!
        </h1>
        <p className="my-5 max-w-lg">
          Jika kamu lagi nyari cafe sekaligus tempat healing terbaik di Tegal,
          maka AyoNgopi adalah pilihan tepat! 🫰
        </p>
        <Button className="bg-sky-400 cursor-pointer py-4 px-8 sm:px-12 rounded-full sm:py-6 hover:bg-white hover:border-sky-400 border hover:text-black transition-all">
          Reservasi
        </Button>
      </div>

      {/* Responsive Carousel */}
      <Carousel className="w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-2xl h-auto">
        <CarouselContent>
          {itemsArray.map((url, index) => (
            <CarouselItem key={index}>
              <div className="p-2">
                <img
                  src={url}
                  className="object-cover w-full h-60 sm:h-72 md:h-80 lg:h-96 rounded-lg"
                  alt={`Carousel Image ${index + 1}`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer mx-4 sm:px-4 text-gray-600 hover:text-sky-400" />
        <CarouselNext className="cursor-pointer mx-4 sm:px-4 text-gray-600 hover:text-sky-400" />
      </Carousel>
    </div>
  );
};
