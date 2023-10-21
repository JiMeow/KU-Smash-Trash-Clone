import { type Bin } from "@prisma/client";
import axios from "axios";
import useSWR from "swr";

const fetcherBinInZone = ( url: string ) => axios.get(url).then(( res ) => res.data as Bin[]);

const useBinInZone = ( name: string ) => {
  const { data, error, isLoading } = useSWR<Bin[], Error>(name != "" ? "/api/getBinInZone/" + name : null, fetcherBinInZone, {
    refreshInterval: 5000,
  });

  return {
    data,
    isError: error != null,
    isLoading,
  };
};

export default useBinInZone;
