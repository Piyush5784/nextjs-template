"use client";
import clsx from "clsx";
import { ReactNode } from "react";

const GradientBorder = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative inline-block p-[2px] rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-green-500">
      <button
        className={clsx(
          "bg-[#1c1c1c] hover:bg-[#2c2c2c] text-white px-6 py-2 rounded-full transition duration-200"
        )}
      >
        {children}
      </button>
    </div>
  );
};

export default GradientBorder;
