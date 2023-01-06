import { Home } from "../pages/Home";
import { Helmet } from "react-helmet-async";

export const GitHub = () => {
  window.location.assign("https://github.com/franpossetto/Nina");
  return (
    <>
      <Helmet>
        <title>GitHub</title>
        <meta
          name="description"
          content="Official repository of the Nina tool for Revit."
        />
        <link rel="canonical" href="/github" />
      </Helmet>
      ;
    </>
  );
};
