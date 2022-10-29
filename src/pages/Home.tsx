import logo from "../nina_logo.png";
import "../styles.css";

export const Home = () => {
  return (
    <>
      <div className="container">
        <div className="columns" style={{ paddingTop: 120 }}>
          <div className="column">
            <img src={logo} alt="logo" title="Are you seeing the cat?" />
            <h2 className="small-title-bold"> Find more releases in GitHub</h2>
            <h2 className="small-subtitle"> Nina 2022 | Francisco Possetto </h2>
          </div>
          <div className="column">
            <div style={{ width: 350, margin: "auto" }}>
              <h1 className="main-description">
                A collection of Tiny Tools for Autodesk Revit
              </h1>
              <h2 className="small-title"> Download for Windows</h2>
              <button
                className="button is-rounded is-black"
                style={{ whiteSpace: "pre", height: 50 }}
              >
                Latest Release<strong> Nina v2.0.1-beta</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
