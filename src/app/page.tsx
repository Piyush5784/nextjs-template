import Appbar from "@/components/custom/Appbar";
import { CarouselDemo } from "@/components/custom/CarouselWorks";
import Features from "@/components/custom/Features";
import Features2 from "@/components/custom/Features2";
import HeroSection from "@/components/custom/HeroSection";
import Logos from "@/components/custom/Logos";

const Home = () => {
  return (
    <div>
      <Appbar />
      <HeroSection />
      <Logos />
      <Features />
      <Features2 />

      <div className="flex p-10  flex-col text-center h-screen">
        <p className="text-7xl">Our clients</p>
        <p className="p-10 text-xl text-gray-600">
          Hear firsthand how our solutions have <br />
          boosted online success for users like you.
        </p>

        <CarouselDemo />
      </div>
    </div>
  );
};

export default Home;
