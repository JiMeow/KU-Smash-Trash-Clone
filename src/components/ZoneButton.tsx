import React from "react";

type ZoneButtonProps = {
  zone: string;
  d: string;
  id: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
  transform?: string;
};

const ZoneButton: React.FC<ZoneButtonProps> = ({
  zone,
  d,
  id,
  stroke,
  strokeWidth,
  transform,
}) => {
  return (
    <path
      d={d}
      fill="rgb(31, 162, 53)"
      id={id}
      stroke={stroke}
      strokeWidth={strokeWidth}
      transform={transform}
    ></path>
  );
};

export default ZoneButton;
