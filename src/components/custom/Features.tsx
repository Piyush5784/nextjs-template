import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { Card3 } from "./Card";

const Features = () => {
  return (
    <div>
      {" "}
      <div className=" pt-20 h-screen font-medium  text-white">
        <p className="text-4xl text-center">
          Harness the power of AI, making <br /> search engine optimization
          intuitive <br /> and effective for all skill levels.
        </p>
        <div className="flex items-center md:items-start  flex-col md:flex-row justify-center pt-10 px-2 gap-20">
          <Card3
            src="/Visual.png"
            title="SEO goal setting"
            description={
              <>
                Helps you set and achieve SEO
                <br /> goals with guided assistance.
              </>
            }
          />
          <div className="md:w-[50%] hidden md:block">
            <div className="bg-gradient-to-b from-transparent to-purple-600   md:w-[45rem] flex items-center justify-center rounded-xl md:h-[26rem]">
              <div>
                <Image
                  src="/sideImage.png"
                  alt="reload"
                  height={600}
                  width={600}
                  className="mask-gradient px-2"
                />
              </div>
            </div>
            <div className="relative md:-top-36 md:left-20 top-10 left-1">
              <p className="md:text-xl">User-friendly dashboard</p>
              <p className=" pt-5 opacity-70">
                Perform complex SEO audits and <br /> optimizations with a
                single click.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-20 h-screen font-medium  text-white">
        <div className="flex items-center md:items-start  flex-col md:flex-row justify-center  pt-10 px-2 mt-5 gap-20">
          <div className="md:w-[50%] hidden md:block">
            <div className="bg-gradient-to-b from-transparent to-purple-600  w-[25rem] md:w-[45rem] flex items-center justify-center rounded-xl h-[26rem]">
              <div>
                <Image
                  src="/sideImage2.png"
                  alt="reload"
                  height={600}
                  width={600}
                  className="mask-gradient"
                />
              </div>
            </div>
            <div className="relative -top-36 left-20 ">
              <p className="text-xl">Visual reports</p>
              <p className=" pt-5 opacity-70">
                Visual insights into your <br /> site’s performance.
              </p>
            </div>
          </div>

          <div
            className={clsx(
              `p-10 px-14 rounded-xl border border-white border-opacity-15`
            )}
          >
            <Image
              src={"/Visual-1.png"}
              height={250}
              width={250}
              alt="reload"
            />
            <p className="text-xl font-medium">Smart Keyword Generator</p>
            <p className="opacity-70 pt-5">
              Automatic suggestions and <br /> the best keywords to target.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
