"use client";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { motion } from "framer-motion";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
const Appbar = () => {
  const links = ["Features", "Developers", "Company", "Blog", "Changelog"];

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="w-full flex justify-center border-b border-white border-opacity-15">
        <div className="p-5 pb-3 md:px-20 text-white text-xs flex w-full  md:w-[85%] items-center justify-between ">
          <div className=" ">
            <Image src={"/Logo.png"} alt="reload" height={35} width={35} />
          </div>
          <div className=" gap-10 border px-10 py-3 hidden md:flex rounded-full opacity-60 border-white border-opacity-15">
            {links.map((link: string, index: number) => (
              <div
                key={index}
                className="flex gap-1 items-center justify-center"
              >
                {link}
                {(link == "Features" || link == "Company") && (
                  <ChevronDownIcon />
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="border-white border-opacity-15 border rounded-xl p-1">
              <div className="min-w-[100px] border rounded-lg border-white border-opacity-70">
                <motion.div className=" py-[6px] space-x-1 button-primary duration-100 cursor-pointer rounded-lg text-center text-white">
                  Join waitlist
                </motion.div>
              </div>
            </div>
            <AlignJustify
              size={30}
              className="md:hidden "
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>{" "}
        </div>
      </div>
      {/* mobile nav */}
      <div
        className={`absolute w-full  dark:text-black duration-300 ${
          showMenu ? "top-30" : "-top-90"
        }`}
      >
        <div className="flex justify-center items-center">
          <div
            className={clsx(
              "relative  w-[80%] rounded-xl bg-black duration-300 transition-all mt-5 text-white border border-white border-opacity-15",
              showMenu ? "top-0" : "top-[-500px]"
            )}
          >
            {links.map((link: string, index: number) => (
              <div
                key={index}
                className={clsx(
                  "flex gap-1 py-5  items-center justify-center",
                  link !== "Features" &&
                    "border-t border-white border-opacity-15"
                )}
              >
                {link}
                {(link == "Features" || link == "Company") && (
                  <ChevronDownIcon />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Appbar;
