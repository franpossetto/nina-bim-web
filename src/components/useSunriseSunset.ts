import axios from "axios";
import { useEffect, useState } from "react";

export interface ISunriseResponse {
    sunrise: string;
    sunset: string,
}
export const useSunrise =  () => {
    const [sunrise, setSunrise] = useState<ISunriseResponse>();
    const [loading, setLoading] = useState<boolean>();
    const [error, setError] = useState<boolean>();
    


    useEffect( ()=> {
        setLoading(true);
        setError(false);
         axios.get("https://api.sunrise-sunset.org/json?lat=-38.416097&lng=-20.616672").then((response) => {
         const resp = response.data.results;
         const latestSunrise: ISunriseResponse = {
            sunrise: resp.sunrise,
            sunset: resp.sunset,
         }
         setSunrise(latestSunrise);
        }).catch( ()=> {
            setError(true);
        }).finally(()=> {
            setLoading(false);
        });
    },[])
    return {sunrise, error, loading};
    
};
