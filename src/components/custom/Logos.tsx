import { Card2 } from "./Card";

const Logos = () => {
  return (
    <div className="text-center text-white">
      <p className="pt-10 mdLpt-0">
        Trusted by the world's best innovative teams
      </p>
      <div className="flex items-center justify-center md:gap-10 gap-2 pt-10 flex-wrap">
        <Card2 src="/Logo/acme 1-5.png" />
        <Card2 src="/Logo/acme 1-7.png" />
        <Card2 src="/Logo/acme 1.png" />
        <Card2 src="/Logo/acme 1-6.png" />
      </div>
      <div className="flex items-center justify-center md:gap-10 gap-2 pt-10 flex-wrap">
        <Card2 src="/Logo/acme 1-1.png" />
        <Card2 src="/Logo/acme 1-2.png" />
        <Card2 src="/Logo/acme 1-3.png" />
        <Card2 src="/Logo/acme 1-4.png" />
      </div>
    </div>
  );
};

export default Logos;
