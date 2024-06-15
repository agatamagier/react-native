import { useState, useEffect } from "react";

export const useApi = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((newData) => {
        setData(newData);
      })
      .catch((_) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return {
    data,
    isLoading,
    isError,
  };
};
