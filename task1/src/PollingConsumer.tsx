import { usePollingFetch } from "./usePollingFetch";

const Max_INDEX_RANGE = 9;

const getRandomIndex = () =>
  Math.floor(Math.random() * (Max_INDEX_RANGE + 1));

const PollingConsumer = () => {
  const { data, error, isLoading } = usePollingFetch<{ name: string }[]>({
    interval: 3000,
    url: `https://jsonplaceholder.typicode.com/users`,
  });

  if (isLoading) return <div>loading data</div>;

  if (error) return <div>failed to load data</div>;

  return <div style={{ display: "inline" }}>{data?.[getRandomIndex()]?.name ?? ""}</div>;
};

export default PollingConsumer;
