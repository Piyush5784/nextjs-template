"use client";
import { Carousel } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import CarouselContent from "./CarouselContent";

export function CarouselDemo() {
  return (
    <div className="flex items-center justify-center">
      <Carousel
        className="w-[90%] h-96"
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent />
      </Carousel>
    </div>
  );
}
