import { Home } from "../pages/Home";

export const Download = () => {
    window.location.assign("https://github.com/franpossetto/Nina/releases/latest/download/Nina.exe");
    return(
        <Home/>
    );
}