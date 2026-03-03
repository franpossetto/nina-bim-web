import { IGitHubResponse, useFetch } from "../components/useFetch";
import { useSunriseSunset } from "../components/useSunriseSunset";
import logoday from "../assets/image/logo/day/nina_logo_black.webp";
import logonight from "../assets/image/logo/night/nina_logo_white.webp";
import "../css/style.css";
import { useEffect, useState } from "react";
import {
  ninaBackground,
  ninaBtnColor,
  ninaDescriptionTitle,
  ninaSubtitleSmall,
  ninaTitleSmall,
  ninaTitleSmallBold,
} from "../helpers/style";

const isDaytimeInMorteros = (sunrise: string, sunset: string): boolean => {
  const now = new Date();
  return now > new Date(sunrise) && now < new Date(sunset);
};

export const Home = () => {
  const { release }: IGitHubResponse | any = useFetch();
  const { sunriseSunset } = useSunriseSunset();
  const link: string = release?.asset;

  const [isDay, setIsDay] = useState<boolean>(false);
  const [ninaLogo, setNinaLogo] = useState(logonight);

  useEffect(() => {
    if (!sunriseSunset) return;
    const daytime = isDaytimeInMorteros(sunriseSunset.sunrise, sunriseSunset.sunset);
    setIsDay(daytime);
  }, [sunriseSunset]);

  useEffect(() => {
    setNinaLogo(isDay ? logoday : logonight);
  }, [isDay]);

  const download = () => {
    window.location.assign(link);
  };
  return (
    <>
      <div id="nina-main" className={ninaBackground(isDay)}>
        <section className="container d-flex flex-column justify-content-between nina-container">
          <div className="row d-flex flex-column flex-lg-row flex-nowrap flex-lg-wrap justify-content-between nina-row-top">
            <div className="col-12 col-lg-6 nina-img">
              <img
                src={ninaLogo}
                title="Are you seeing the cat?"
                className="img-fluid animate__bounceIn"
                alt="Nina company logo"
              />
            </div>
            <div className="col-12 col-lg-4 nina-description">
              <h1 className={ninaDescriptionTitle(isDay)}>
                A collection of tiny tools for Autodesk Revit.
              </h1>
            </div>
          </div>
          <div className="row d-flex flex-lg-row justify-content-between align-items-lg-end align-content-lg-end flex-wrap-reverse nina-row-bottom">
            <div className="col-lg-5 text-center text-lg-start nina-title">
              <h2 className={ninaTitleSmallBold(isDay)}>
                Find more releases in GitHub
              </h2>
              <h2 className={ninaSubtitleSmall(isDay)}>
                Nina 2022 | Francisco Possetto
              </h2>
            </div>
            <div className="col-lg-4 text-center text-lg-start nina-download">
              <h2 className={ninaTitleSmall(isDay)}>Download for Windows</h2>
              <button
                type="button"
                className={ninaBtnColor(isDay)}
                onClick={download}
              >
                Latest Release<strong> {release?.name} </strong>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
