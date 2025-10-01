import { usePollingFetch } from "./usePollingFetch";

const SingleFetchConsumer = () => {
  const { data, error, isLoading } = usePollingFetch<{ name: string }>({
    url: "https://jsonplaceholder.typicode.com/users/1",
  });

  if (isLoading) return <div>loading data</div>;

  if (error) return <div>failed to load data</div>;

  return <div style={{ display: "inline" }}>{data?.name ?? ""}</div>;
};

export default SingleFetchConsumer;
