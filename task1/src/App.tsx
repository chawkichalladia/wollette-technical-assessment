import PollingConsumer from "./PollingConsumer";
import SingleFetchConsumer from "./SingleFetchConsumer";

function App() {
  return (
    <>
      <div>
        <b>No polling:</b> <SingleFetchConsumer />
      </div>
      <br />
      <br />
      <div>
        <b>With polling:</b> <PollingConsumer />
      </div>
    </>
  );
}

export default App;
