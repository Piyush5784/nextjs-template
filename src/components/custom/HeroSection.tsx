import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex flex-col text-center h-auto text-white pt-28 items-center justify-center">
      <div className="rounded-full w-84 border border-white flex gap-2 border-opacity-15 px-2 pr-3 py-3">
        <div className="bg-[#9855FF] rounded-full text-black font-bold px-1 flex items-center justify-center text-sm">
          New
        </div>
        <p className="text-[#9855FF]">Latest integration just arrived</p>
      </div>

      <div className="md:h-48 md:text-[90px] text-7xl text-center font-medium leading-none text-gradient">
        Boost your <br />
        rankings with AI.
      </div>

      <p className="text-xl">
        Elevate your site’s visibility effortlessly with AI, where <br />
        smart technology meets user-friendly SEO tools.
      </p>

      <div className="absolute blur-[100px] md:blur-[224px] h-[300px] rounded-full top-96 w-[300px] md:h-[569px] md:w-[569px] bg-[#8C45FF] opacity-30"></div>
      <div className="absolute top-32 blur-3xl h-96 w-96 rounded-full bg-[#8C45FF] opacity-25"></div>

      <div className="mt-10 p-2 border rounded-xl border-opacity-15 border-white shadow-[-1px_-12px_76px_-22px_#8C45FF]">
        <Image
          className="border border-white border-opacity-15 rounded-xl cursor-pointer"
          src="/dashboardImg.png"
          height={1250}
          width={1250}
          alt="reload"
        />
      </div>

      <div className="h-96 w-full bg-gradient-to-b from-transparent to-black relative -top-80 hidden md:block"></div>
    </div>
  );
};

export default HeroSection;
