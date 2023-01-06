import { Home } from "../pages/Home";
import { Helmet } from "react-helmet-async";

export const Download = () => {
  window.location.assign(
    "https://github.com/franpossetto/Nina/releases/latest/download/Nina.exe"
  );
  return <Home />;
  <Helmet>
    <title>Download</title>
    <meta
      name="description"
      content="Direct Url to download the Nina tool for Revit."
    />
    <link rel="canonical" href="/download" />
  </Helmet>;
};
