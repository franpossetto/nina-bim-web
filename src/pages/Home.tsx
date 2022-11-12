import { IGitHubResponse, useFetch } from "../components/useFetch";
import logo from "../assets/image/logo/day/nina_logo_black.webp";
import "../styles.css";

export const Home = () => {
  const { release }: IGitHubResponse | any = useFetch();
  const link: string = release?.asset;
  const download = () => {
    window.location.assign(link);
  };
  return (
    <>
      <main className="hero">
        <section className="container">
          <div className="columns is-justify-content-space-between">
            <div className="column p-0 is-half is-flex is-flex-direction-column is-justify-content-space-between">
              <img
                src={logo}
                title="Are you seeing the cat?"
                className="animate__bounceIn"
                alt="Nina company logo"
              />
              <div>
                <h2 className="small-title-bold">
                  Find more releases in GitHub
                </h2>
                <h2 className="small-subtitle">
                  Nina 2022 | Francisco Possetto
                </h2>
              </div>
            </div>
            <div className="column p-0 is-one-third is-flex is-flex-direction-column is-justify-content-space-between">
              <h1 className="main-description">
                A collection of tiny tools for Autodesk Revit.
              </h1>
              <div>
                <h2 className="small-title">Download for Windows</h2>
                <button
                  className="button is-rounded is-black small-title-btn"
                  onClick={download}
                >
                  Latest Release<strong> {release?.name}-beta </strong>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
