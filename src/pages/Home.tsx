import { IGitHubResponse, useFetch } from "../components/useFetch";
import logo from "../assets/image/logo/day/nina_logo_black.png";
import "../styles.css";

export const Home = () => {
  const { release }: IGitHubResponse | any = useFetch();
  const link: string = release?.asset;
  const download = () => {
    window.location.assign(link);
  };

  return (
    <>
      <main id="mainHome" className="container">
        <section className="container d-flex flex-column justify-content-between mainHomeContainer">
          <div className="row d-flex flex-column flex-lg-row flex-nowrap flex-lg-wrap justify-content-between mainHomeRow1">
            <div className="col-12 col-lg-6 mainHomeImg">
              <img
                src={logo}
                title="Are you seeing the cat?"
                className="img-fluid animate__bounceIn"
                alt="Nina company logo"
              />
            </div>
            <div className="col-12 col-lg-4 mainHomeDescription">
              <h1 className="text-center text-lg-start mainDescription">
                A collection of tiny tools for Autodesk Revit.
              </h1>
            </div>
          </div>
          {/*  */}
          <div className="row d-flex flex-lg-row justify-content-between align-items-lg-end align-content-lg-end flex-wrap-reverse mainHomeRow2">
            <div className="col-lg-5 text-center text-lg-start  mainHomeTitle">
              <h2 className="small-title-bold">Find more releases in GitHub</h2>
              <h2 className="small-subtitle">Nina 2022 | Francisco Possetto</h2>
            </div>
            <div className="col-lg-4 text-center text-lg-start mainHomeDownload">
              <h2 className="text-center text-lg-start small-title">
                Download for Windows
              </h2>
              <button
                type="button"
                className="btn btn-dark small-title-btn"
                onClick={download}
              >
                Latest Release<strong> {release?.name}-beta </strong>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
