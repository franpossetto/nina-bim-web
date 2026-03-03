import axios from "axios";
import { useEffect, useState } from "react";

const MORTEROS_LAT = -30.7167;
const MORTEROS_LNG = -62.0167;
const SUNRISE_SUNSET_API = `https://api.sunrise-sunset.org/json?lat=${MORTEROS_LAT}&lng=${MORTEROS_LNG}&formatted=0`;

export interface ISunriseSunset {
  sunrise: string;
  sunset: string;
}

interface UseSunriseSunsetResult {
  sunriseSunset: ISunriseSunset | undefined;
  loading: boolean;
  error: boolean;
}

export const useSunriseSunset = (): UseSunriseSunsetResult => {
  const [sunriseSunset, setSunriseSunset] = useState<ISunriseSunset | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios
      .get(SUNRISE_SUNSET_API)
      .then((response) => {
        const { sunrise, sunset } = response.data.results;
        setSunriseSunset({ sunrise, sunset });
        try {
          localStorage.setItem("sunriseSunset", JSON.stringify({ sunrise, sunset }));
        } catch {}
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { sunriseSunset, loading, error };
};
