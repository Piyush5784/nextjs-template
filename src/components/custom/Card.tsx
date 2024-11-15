import clsx from "clsx";
import Image from "next/image";
import { ReactNode } from "react";

interface cardProps {
  logo: ReactNode;
  text: string;
  classNames: string;
}

export const Card = ({ logo, text, classNames }: cardProps) => {
  return (
    <div
      className={clsx(
        `border rounded-xl border-white border-opacity-15 md:px-20 px-10 py-10  flex gap-2 items-center justify-center`,
        classNames
      )}
    >
      {logo}
      {text}
    </div>
  );
};

export const Card2 = ({ src }: { src: string }) => {
  return (
    <div className="border border-white border-opacity-15 px-2 md:px-10 py-8 rounded-xl">
      <Image height={150} width={150} alt="reload" src={src} />
    </div>
  );
};

export const Card3 = ({
  src,
  title,
  description,
  classNames,
}: {
  src: string;
  classNames?: string;
  title: string;
  description: ReactNode;
}) => {
  return (
    <div
      className={clsx(
        `p-10 rounded-xl border border-white border-opacity-15`,
        classNames
      )}
    >
      <Image src={src} height={300} width={300} alt="reload" />
      <p className="text-xl font-medium">{title}</p>
      <p className="opacity-70 pt-5"> {description}</p>
    </div>
  );
};

export const Card4 = ({
  logo,
  title,
  description,
}: {
  logo: ReactNode;
  title: string;
  description: ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        {logo} {title}
      </div>
      <div className="text-white opacity-70">{description}</div>
    </div>
  );
};
