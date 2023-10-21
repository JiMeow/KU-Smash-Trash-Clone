import useAvgStatusInZone from "@/hook/useAvgStatusInZone";
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
  const { data: percent, isError } = useAvgStatusInZone(zone);
  const color = getColorFromPercent(!isError && percent ? percent : 0);

  return (
    <path
      d={d}
      fill={color}
      id={id}
      stroke={stroke}
      strokeWidth={strokeWidth}
      transform={transform}
    ></path>
  );
};

export default ZoneButton;

function getColorFromPercent(percent: number) {
  let r = 31;
  let g = 162;
  let b = 53;

  if (percent > 50) {
    r = 255;
    g = 255 - (percent - 50) * 5.1;
    b = 0;
  } else {
    g = 162 + percent * 0.93;
    r = 31 + percent * 4;
    b = 53 - percent * 0.53;
  }

  return `rgb(${r}, ${g}, ${b})`;
}
