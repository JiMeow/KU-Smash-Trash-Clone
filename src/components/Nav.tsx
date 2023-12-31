import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <div
      className="sticky top-0 z-10 flex h-[10%] w-full bg-[#489f93] text-black"
      onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
    >
      <div className="flex w-[100%] flex-row items-center justify-center transition-all duration-300 hover:text-white">
        <Image
          src="/icon.png"
          alt="trash"
          className="p-[10px]"
          width={50}
          height={50}
        />
        <div className="mx-8 w-auto text-center text-sm font-bold md:text-2xl">
          KU Smash Trash
        </div>
        <Image
          src="/icon.png"
          alt="trash"
          className="p-[10px]"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default Nav;
