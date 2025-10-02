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
    // to track the interval created if we opted for the polling behavior
    let intervalId: number | undefined;
    // to cancel current request when useEffect triggers again
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setError(false);
        setIsLoading(true);

        const response = await fetch(url, { signal: abortController.signal });

        const responseData = (await response.json()) as T;

        // check if the component is still mounted before updating the state
        setData(responseData);
      } catch (error) {
        console.error(error);
        // check if the component is still mounted before updating the state
        setError(true);
      } finally {
        // check if the component is still mounted before updating the state
        setIsLoading(false);
      }
    };

    if (interval === undefined) {
      // fetch data once if no interval is provided
      fetchData();
    } else {
      // fetch data periodically if interval provided
      intervalId = setInterval(fetchData, interval);
    }

    // cleanup behavior:
    // cancel any ongoing requests
    // clear the interval to prevent further requests
    return () => {
      clearInterval(intervalId);
      abortController.abort();
    };
  }, [url, interval]);

  return {
    data,
    error,
    isLoading,
  };
};
