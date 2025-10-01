import { useEffect, useState } from "react";

interface UsePollingFetchProps {
  url: string;
  interval?: number;
}

export const usePollingFetch = <T>({ url, interval }: UsePollingFetchProps) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let intervalId: number | undefined;
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setError(false);
        setIsLoading(true);

        const response = await fetch(url, { signal: abortController.signal });

        const data = (await response.json()) as T;

        if (isMounted) setData(data);
      } catch (error) {
        console.error(error);
        if (isMounted) setError(true);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    if (interval === undefined) {
      fetchData();
    } else {
      intervalId = setInterval(fetchData, interval);
    }

    return () => {
      clearInterval(intervalId);
      isMounted = false;
      abortController.abort();
    };
  }, [url, interval]);

  return {
    data,
    error,
    isLoading,
  };
};
