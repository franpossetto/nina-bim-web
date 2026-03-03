import { useEffect, useState } from "react";

export interface IGitHubResponse {
    name: string;
    tag: string,
    asset: string
}
export const useFetch = () => {
    const [release, setRelease] = useState<IGitHubResponse>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        fetch("https://api.github.com/repos/franpossetto/Nina/releases")
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then((data) => {
                if (!Array.isArray(data) || data.length === 0) return;
                const resp = data[0];
                if (!resp?.assets || resp.assets.length === 0 || !resp.assets[0]?.browser_download_url) return;
                const latestRelease: IGitHubResponse = {
                    name: resp.name,
                    tag: resp.tag_name,
                    asset: resp.assets[0].browser_download_url
                };
                setRelease(latestRelease);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    return { release, error, loading };
};
