"use client";
import clsx from "clsx";
import { useState } from "react";

const links = ["Home", "Projects", "Deployments", "Members", "Settings"];
const FlashlightTabs = () => {
  const [selected, setSelected] = useState("Home");
  return (
    <>
      <div className="md:p-20 pt-10 px-2 overflow-hidden w-[68%] lg:w-[43%] md:w-[76%] ">
        <div className="border border-[#e6e6e6]  border-opacity-50 rounded-full flex gap-10 px-3 py-3">
          {links.map((link, i) => (
            <div key={i}>
              <div
                onClick={() => setSelected(link)}
                className={clsx(
                  `text-opacity-50 duration-100 transition-all text-white hover:text-opacity-100 cursor-pointer`,
                  link === selected && "text-opacity-100"
                )}
              >
                {link}
              </div>
            </div>
          ))}
        </div>
        <div
          className={clsx(
            `h-10 w-20 bg-[#e0e0e0] duration-500 opacity-15 rounded- relative  -top-11 rounded-full`,
            selected === "Home" && "left-1 w-[60px] rounded-r-xl",
            selected === "Projects" && "left-[85px]",
            selected === "Deployments" && "left-[177px] w-[120px]",
            selected === "Members" && "left-[317px] w-[85px]",
            selected === "Settings" && "left-[417px] rounded-l-xl"
          )}
        ></div>
        <div
          className={clsx(
            `h-10 w-20 bg-[#e0e0e0] duration-500  rounded- relative -top-20 blur-2xl rounded-full overflow-hidden`,
            selected === "Home" && "left-1 w-[60px] rounded-r-xl",
            selected === "Projects" && "left-[85px]",
            selected === "Deployments" && "left-[177px] w-[120px]",
            selected === "Members" && "left-[317px] w-[85px]",
            selected === "Settings" && "left-[420.5px] rounded-l-xl"
          )}
        ></div>
      </div>
    </>
  );
};

export default FlashlightTabs;

// shadow-[0px_20px_20px_11px_#00000024]
