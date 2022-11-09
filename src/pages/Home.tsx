import { IGitHubResponse, useFetch } from "../components/useFetch";
import logo from "../logo-BLACK.webp";
import "../styles.css";

export const Home = () => {
    
  const {release}:IGitHubResponse | any = useFetch();
  const link: string = release?.asset;
  const download = () => {
    window.location.assign(link);
  }
  return (
    <>
      <div className="container animate__animated animate__fadeIn">
        <div className="columns" style={{ paddingTop: 120 }}>
          <div className="column">
            <img src={logo} alt="logo" title="Are you seeing the cat?" className="animate__bounceIn" style={{width: "50%"}}/>
            <h2 className="small-title-bold"> Find more releases in GitHub</h2>
            <h2 className="small-subtitle"> Nina 2022 | Francisco Possetto </h2>
          </div>
          <div className="column">
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
      </div>
    </>
  );
};
