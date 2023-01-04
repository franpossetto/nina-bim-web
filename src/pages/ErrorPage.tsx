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


export const ErrorPage = () => {
    const { release }: IGitHubResponse | any = useFetch();
  const link: string = release?.asset;
  const download = () => {
    window.location.assign(link);
  };
  
  const [isDay, setIsDay] = useState<boolean>(false);
  const userTime = new Date();
  const timeValue = userTime.getHours();
  const [ninaLogo, setNinaLogo] = useState(logoday);

  useEffect(() => {
    if (timeValue > 6 && timeValue < 20) {
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
    return(
        <>
            <div id="nina-main" className={ninaBackground(isDay)}>
                <section className="container d-flex flex-column justify-content-between nina-container">
                    <div className="col-12 col-lg-6 nina-img">
                    <img
                        src={ninaLogo}
                        title="Are you seeing the cat?"
                        className="img-fluid animate__bounceIn"
                        alt="Nina company logo"
                    />
                </div>
                <h1>That page does not exist :(</h1>
                </section>
            </div>
        </>
    )
}