import { memo, useMemo } from "react";
import { COLUMN_NAMES, type ProductType } from "./constants&types";
import GridRow from "./GridRow";

interface CustomProductCardProps {
  data: ProductType;
}

const CustomProductCard = memo(({ data }: CustomProductCardProps) => {
  const cells = useMemo(() => {
    const cells: string[] = [];

    COLUMN_NAMES.forEach((cellName) => cells.push(data[cellName]));

    return cells;
  }, [data]);

  return (
    <>
      <GridRow cells={cells} />
    </>
  );
});

export default CustomProductCard;
