import React from "react";

type ZoneNavProps = {
  zone: string;
};

const ZoneNav: React.FC<ZoneNavProps> = ({ zone }) => {
  return (
    <div className="mx-auto mb-8 flex h-[40px] w-[45%] items-center justify-center rounded-full bg-[#489f93] text-2xl font-black sm:h-[56px]">
      <div className="text-sm  sm:text-xl md:text-2xl">Zone : {zone}</div>
    </div>
  );
};

export default ZoneNav;
