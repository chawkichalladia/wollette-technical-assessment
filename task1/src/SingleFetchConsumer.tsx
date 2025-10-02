import { usePollingFetch } from "./usePollingFetch";

const SingleFetchConsumer = () => {
  const { data, error, isLoading } = usePollingFetch<{ name: string }>({
    url: "https://jsonplaceholder.typicode.com/users/1",
  });

  if (isLoading) return <div style={{ display: "inline" }}>loading data</div>;

  if (error) return <div style={{ display: "inline" }}>failed to load data</div>;

  return <div style={{ display: "inline" }}>{data?.name ?? ""}</div>;
};

export default SingleFetchConsumer;
