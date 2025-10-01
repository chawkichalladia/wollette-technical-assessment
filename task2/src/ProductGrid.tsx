import type { ReactNode } from "react";
import { useGridData } from "./useGridData";

interface ProductGridProps<T> {
  apiUrl: string;
  children: (data: ReturnType<typeof useGridData<T>>) => ReactNode;
}

const ProductGrid = <T,>({ apiUrl, children }: ProductGridProps<T>) => {
  const data = useGridData<T>({ apiUrl });

  return <>{children(data)}</>;
};

export default ProductGrid;
