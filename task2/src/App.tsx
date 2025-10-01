import "./App.css";
import CustomLoadingSkeleton from "./CustomLoadingSkeleton";
import ProductGrid from "./ProductGrid";
import GridRow from "./GridRow";
import { COLUMN_NAMES, type ProductType } from "./constants&types";
import CustomProductCard from "./CustomProductCard";

function App() {
  return (
    <>
      <ProductGrid<ProductType> apiUrl="https://jsonplaceholder.typicode.com/users">
        {({ data, error, isLoading, refetchData }) => {
          if (isLoading) return <CustomLoadingSkeleton />;

          if (error) return <div>Failed to load data...</div>;

          return (
            <>
              <GridRow cells={COLUMN_NAMES} />
              {data.map((cell) => (
                <CustomProductCard data={cell} />
              ))}
              <br />
              <button onClick={refetchData} style={{ marginTop: "10px" }}>
                Refetch
              </button>
            </>
          );
        }}
      </ProductGrid>
    </>
  );
}

export default App;
