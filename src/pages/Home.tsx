import { IGitHubResponse, useFetch } from "../components/useFetch";
import logo from "../assets/image/logo/day/nina_logo_black.webp";
import "../css/style.css";

export const Home = () => {
  const { release }: IGitHubResponse | any = useFetch();
  const link: string = release?.asset;
  const download = () => {
    window.location.assign(link);
  };

  return (
    <>
      <div
        id="nina-main"
        className="container animate__animated animate__fadeIn"
      >
        <section className="container d-flex flex-column justify-content-between nina-container">
          <div className="row d-flex flex-column flex-lg-row flex-nowrap flex-lg-wrap justify-content-between nina-row-top">
            <div className="col-12 col-lg-6 nina-img">
              <img
                src={logo}
                title="Are you seeing the cat?"
                className="img-fluid animate__bounceIn"
                alt="Nina company logo"
              />
            </div>
            <div className="col-12 col-lg-4 nina-description">
              <h1 className="text-center text-lg-start nina-description-title">
                A collection of tiny tools for Autodesk Revit.
              </h1>
            </div>
          </div>
          <div className="row d-flex flex-lg-row justify-content-between align-items-lg-end align-content-lg-end flex-wrap-reverse nina-row-bottom">
            <div className="col-lg-5 text-center text-lg-start nina-title">
              <h2 className="nina-title-small-bold">
                Find more releases in GitHub
              </h2>
              <h2 className="nina-subtitle-small">
                Nina 2022 | Francisco Possetto
              </h2>
            </div>
            <div className="col-lg-4 text-center text-lg-start nina-download">
              <h2 className="text-center text-lg-start nina-title-small">
                Download for Windows
              </h2>
              <button
                type="button"
                className="btn btn-dark nina-title-small-btn"
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
