import { useCallback, useEffect, useState } from "react";

interface UseGridDataProps {
  apiUrl: string;
}

export const useGridData = <T>({ apiUrl }: UseGridDataProps) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  // useCallback creates a new reference when the dependencies change, in this case apiUrl
  // this helps useEffect to only trigger when the reference for the function changes
  // without useCallback, the function will have a new reference for each time this hook in triggered inside the component
  const fetchData = useCallback(async () => {
    if (!apiUrl) return;

    setError(false);
    setIsLoading(true);

    try {
      const response = await fetch(apiUrl);
      const responseData = (await response.json()) as T[];

      setData(responseData ?? []);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, [apiUrl]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    error,
    isLoading,
    refetchData: fetchData,
  };
};
