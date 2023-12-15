import Image from "next/image";
import React, { Suspense } from "react";

type CardProps = {
  imagePath?: string;
  percent?: number;
  location?: string;
};

const Card: React.FC<CardProps> = ({
  imagePath = "Photo/EconomicFaculty.png",
  percent = 50,
  location = "Building 2",
}) => {
  const percentColor = getColorFromPercent(percent);
  return (
    <div className="relative flex h-[32vw] w-[24vw] flex-col items-center rounded-md border-2 border-solid border-black bg-[#489f93] md:h-[24vw] md:w-[16vw] md:rounded-xl">
      <Suspense fallback={<TempImg imagePath={imagePath} />}>
        <Image
          height={1000}
          width={1000}
          src={`/${imagePath}`}
          className="mt-[5%] h-[50%] w-[90%] rounded-2xl"
          alt="Building Image"
        />
      </Suspense>
      <div className="flex h-full w-full flex-col items-center justify-center gap-0 sm:gap-1 lg:gap-2">
        <div className="md:text-md text-[10px] sm:text-sm lg:text-lg">
          Status :{" "}
          <span
            style={{
              color: percentColor,
            }}
          >
            {percent} %
          </span>{" "}
        </div>
        <div className="md:text-md text-[10px] sm:text-sm lg:text-lg">
          Location
        </div>
        <div className="md:text-md text-[10px] sm:text-sm lg:text-lg">
          Building {location}
        </div>
      </div>
    </div>
  );
};

export default Card;

type TempImgProps = {
  imagePath?: string;
};

const TempImg: React.FC<TempImgProps> = ({ imagePath }) => {
  return (
    <Image
      height={100}
      width={100}
      src={`/${imagePath}`}
      className="mt-[5%] h-[50%] w-[90%] rounded-2xl brightness-50"
      alt="Building Image"
    />
  );
};

function getColorFromPercent(percent: number) {
  let r = 50;
  let g = 255;
  let b = 50;

  if (percent > 50) {
    r = 210;
    g = 255 - (percent - 50) * 5;
    b = 0;
  } else {
    r = 50 + percent * 4;
    b = 50 - percent * 0.5;
  }

  return `rgb(${r}, ${g}, ${b})`;
}
