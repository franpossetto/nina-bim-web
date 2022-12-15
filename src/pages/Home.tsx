import { IGitHubResponse, useFetch } from "../components/useFetch";
// import { ISunriseResponse, useSunrise } from "../components/useSunriseSunset";
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

export const Home = () => {
  const { release }: IGitHubResponse | any = useFetch();
  const link: string = release?.asset;
  const download = () => {
    window.location.assign(link);
  };
  // const isday: boolean = false;
  // const { sunrise }: ISunriseResponse | any = useSunrise();
  // // console.log(sunrise);
  const [isDay, setIsDay] = useState<boolean>(false);
  const userTime = new Date();
  const timeValue = userTime.getHours();
  const [ninaLogo, setNinaLogo] = useState(logoday);

  useEffect(() => {
    if (9 > 6 && 9 < 20) {
      setIsDay(true);
    } else {
      setIsDay(false);
    }
  }, []);

  useEffect(() => {
    if (!isDay) {
      setNinaLogo(logonight);
    } else {
      setNinaLogo(logoday);
    }
  }, [isDay]);
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
