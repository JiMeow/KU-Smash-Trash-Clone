import { type Bin } from "@prisma/client";
import axios from "axios";
import useSWR from "swr";
  
type BinInAllZone = Record<string, Bin[]>;

const fetcherBinInAllZone = ( url: string ) => axios.get(url).then(( res ) => res.data as BinInAllZone);

const useBinInAllZone = () => {
    const { data, error, isLoading } = useSWR<BinInAllZone, Error>("/api/getBinInAllZone", fetcherBinInAllZone, {
        revalidateIfStale: false,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnReconnect: true,
        refreshInterval: 0,
        shouldRetryOnError: true,
    });
    
    return {
        data,
        isError: error != null,
        isLoading,
    }
};

export default useBinInAllZone;
