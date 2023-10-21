import axios from "axios";
import useSWR from "swr";

const fetcherAvgStatusInZone = ( url: string ) => axios.get(url).then(( res ) => res.data as number);

const useAvgStatusInZone = ( zone: string ) => {
    const { data, error, isLoading } = useSWR<number, Error>("/api/getAvgStatusInZone/" + zone, fetcherAvgStatusInZone, {
        refreshInterval: 3000,
    });
    
    return {
        data,
        isError: error != null,
        isLoading,
    }
};

export default useAvgStatusInZone;
