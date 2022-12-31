import {
    createBrowserRouter, RouteObject
  } from "react-router-dom";
import { Download } from "./components/download";
import { GitHub } from "./components/github";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <ErrorPage />
    },
    {
        path: "/download", 
        element: <Download/>,
        errorElement: <ErrorPage />

    },
    {
        path: "/github", 
        element: <GitHub/>,
        errorElement: <ErrorPage />

    }
    
]);