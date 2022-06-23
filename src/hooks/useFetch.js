import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        const resp = await fetch(url);

        if (!resp.ok) {
          throw {
            err: true,
            status: resp.status,
            statusText: resp.statusText ? resp.statusText : "Ocurrió un error",
          };
        }

        const data = await resp.json();

        setData(data);
        setIsPending(false);
        setError({ err: false });

      } catch (err) {
        setIsPending(true);
        setError(err);
      }
    };

    getData(url);
  }, [url]);

  return { data, isPending, error };
};
