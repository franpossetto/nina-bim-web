import axios from "axios";
import { useEffect, useState } from "react";

export interface IGitHubResponse {
    name: string;
    tag: string,
    asset: string
}
export const useFetch =  () => {
    const [release, setRelease] = useState<IGitHubResponse>();
    const [loading, setLoading] = useState<boolean>();
    const [error, setError] = useState<boolean>();


    useEffect( ()=> {
        setLoading(true);
        setError(false);
         axios.get("https://api.github.com/repos/franpossetto/Nina/releases").then((response) => {
         const resp = response.data[0];
         const latestRelease: IGitHubResponse = {
            name: resp.name,
            tag: resp.tag_name,
            asset: resp.assets[0].browser_download_url
         }
         setRelease(latestRelease);
        }).catch( ()=> {
            setError(true);
        }).finally(()=> {
            setLoading(false);
        });
    },[])
    return {release, error, loading};
    
};
