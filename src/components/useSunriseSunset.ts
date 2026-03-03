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

    fetch(SUNRISE_SUNSET_API)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (data.status !== "OK" || !data.results?.sunrise || !data.results?.sunset) {
          setError(true);
          return;
        }
        const { sunrise, sunset } = data.results;
        setSunriseSunset({ sunrise, sunset });
        try {
          const date = new Date().toISOString().split("T")[0];
          localStorage.setItem("sunriseSunset", JSON.stringify({ sunrise, sunset, date }));
        } catch (e) {
          if (process.env.NODE_ENV !== "production") {
            console.error("Error setting localStorage for sunriseSunset:", e);
          }
        }
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
