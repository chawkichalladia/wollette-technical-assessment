import { usePollingFetch } from "./usePollingFetch";

const Max_INDEX_RANGE = 9;

const getRandomIndex = () =>
  Math.floor(Math.random() * (Max_INDEX_RANGE + 1));

const PollingConsumer = () => {
  const { data, error, isLoading } = usePollingFetch<{ name: string }[]>({
    interval: 3000,
    url: `https://jsonplaceholder.typicode.com/users`,
  });

  if (isLoading) return <div style={{ display: "inline" }}>loading data</div>;

  if (error) return <div style={{ display: "inline" }}>failed to load data</div>;

  return <div style={{ display: "inline" }}>{data?.[getRandomIndex()]?.name ?? ""}</div>;
};

export default PollingConsumer;
