import useBinInZone from "@/hook/useBinInZone";
import React from "react";
import Card from "./Card";
import { type Bin } from "@prisma/client";

type CardListProps = {
  zone: string;
  dataInit?: Bin[];
};

const CardList: React.FC<CardListProps> = ({ zone, dataInit }) => {
  const { data, isError, isLoading } = useBinInZone(zone);
  return (
    <div className="mb-8">
      {!isError && (
        <div className="grid grid-cols-3 place-items-center gap-10 px-[10vw] md:grid-cols-4">
          {data
            ?.sort((a, b) => parseInt(a.location) - parseInt(b.location))
            ?.map((bin) => (
              <Card
                key={bin.id}
                imagePath={bin.locationImagePath}
                percent={bin.percentageFull}
                location={bin.location}
              />
            ))}
        </div>
      )}
      {isLoading && (
        <div className="grid grid-cols-3 place-items-center gap-10 px-[10vw] md:grid-cols-4">
          {dataInit
            ?.sort((a, b) => parseInt(a.location) - parseInt(b.location))
            ?.map((bin) => (
              <Card
                key={bin.id}
                imagePath={bin.locationImagePath}
                percent={bin.percentageFull}
                location={bin.location}
              />
            ))}
        </div>
      )}
      {data?.length == 0 && (
        <div className="mx-auto mb-8 text-center">
          <h1 className="md:text-md text-[10px] sm:text-sm lg:text-lg">
            Bin Not Found
          </h1>
        </div>
      )}
    </div>
  );
};

export default CardList;
