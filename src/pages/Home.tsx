import { IGitHubResponse, useFetch } from "../components/useFetch";
import logo from "../assets/image/logo/day/nina_logo_black.webp";
import "../styles.css";

export const Home = () => {
    
  const {release}:IGitHubResponse | any = useFetch();
  const link: string = release?.asset;
  const download = () => {
    window.location.assign(link);
  }
  return (
    <>
    <main className="hero">
      <section className="container">
        <div className="columns is-justify-content-space-between">
          <div className="column is-half is-flex is-flex-direction-column is-justify-content-space-between">
            <img src={logo} title="Are you seeing the cat?" className="animate__bounceIn" alt="Nina company logo" />
            <div>
            <h2 className="small-title-bold">Find more releases in GitHub</h2>
            <h2 className="small-subtitle">Nina 2022 | Francisco Possetto</h2>
            </div>
          </div>
          <div className="column is-one-third is-flex is-flex-direction-column is-justify-content-space-between">
            <p className="main-description">A collection of tiny tools for Autodesk Revit</p>
            <div>
            <h2 className="small-title">Download for Windows</h2>
              <button
                className="button is-rounded is-black"
                style={{ whiteSpace: "pre", height: 50 }}
                onClick={download}
              >
                Latest Release<strong> {release?.name} </strong>
              </button>
              </div>
          </div>
        </div>
      </section>

    </main>
    
      {/* <div className="container animate__animated animate__fadeIn">
        <div className="columns">

          <div className="column is-half-desktop is-half-tablet is-full-mobile">
            <img src={logo} alt="logo" title="Are you seeing the cat?" className="animate__bounceIn" style={{width: "50%"}}/>
            <h2 className="small-title-bold"> Find more releases in GitHub</h2>
            <h2 className="small-subtitle"> Nina 2022 | Francisco Possetto </h2>
          </div>

          <div className="column is-half">
            <div style={{ width: 350, margin: "auto" }}>
              <p className="main-description">
                A collection of Tiny Tools for Autodesk Revit
              </p>
              <h2 className="small-title"> Download for Windows</h2>
              <button
                className="button is-rounded is-black"
                style={{ whiteSpace: "pre", height: 50 }}
                onClick={download}
              >
                Latest Release<strong> {release?.name} </strong>
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};




