import {
  CarouselContent as CarouselC,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
const carouselContent = [
  {
    imgSrc: "/carousel/p1.jpg",
    description: (
      <>
        ”This product has completely <br /> transformed how I manage my <br />
        projects and deadlines.”
      </>
    ),
    name: "John Doe",
    position: "Product Designer",
  },
  {
    imgSrc: "/carousel/p5.jpg",
    description: (
      <>
        ”A game-changer for our team, <br /> boosting productivity and <br />
        collaboration.”
      </>
    ),
    name: "Albert Saffron",
    position: "Founder",
  },
  {
    imgSrc: "/carousel/p3.jpg",
    description: (
      <>
        ”An essential tool for our daily <br /> operations, making everything{" "}
        <br />
        smoother.”
      </>
    ),
    name: "Dave Augustus",
    position: "Backend Developer",
  },
  {
    imgSrc: "/carousel/p4.jpg",
    description: (
      <>
        ”Incredible features that <br /> streamline our workflow <br />
        effortlessly.”
      </>
    ),
    name: "Samuel Burger",
    position: "Photographer",
  },
];
const CarouselContent = () => {
  return (
    <>
      <CarouselC>
        {carouselContent.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-transparent border-none">
                <CardContent className="flex flex-col md:flex-row items-center md:items-start justify-center p-6 md:p-16 bg-transparent text-white">
                  <div className="relative after:absolute after:inset-0 after:bg-[#8C44FF] after:mix-blend-soft-light after:rounded-lg">
                    <Image
                      src={item.imgSrc}
                      className="grayscale rounded-xl"
                      alt="reload"
                      height={200}
                      width={200}
                    />
                  </div>
                  <div className="text-center md:text-start p-3">
                    <p className="text-sm md:text-lg lg:text-2xl">
                      {item.description}
                    </p>
                    <p className="pt-2 md:pt-4 text-xs md:text-sm lg:text-base text-gray-400">
                      {item.name}
                    </p>
                    <p className="text-xs md:text-sm lg:text-base text-gray-600">
                      {item.position}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselC>
      <div className="blur-3xl opacity-20 bg-[#8C44FF] h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2 md:left-96"></div>

      <CarouselPrevious className="bg-transparent opacity-50 border-none scale-125 md:scale-150" />
      <CarouselNext className="bg-transparent opacity-50 border-none scale-125 md:scale-150" />
    </>
  );
};

export default CarouselContent;
