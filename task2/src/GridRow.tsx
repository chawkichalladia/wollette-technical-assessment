import { memo } from "react";

interface GridRowProps {
  cells: readonly string[];
}

const GridRow = memo(({ cells }: GridRowProps) => {
  console.warn("GridRow");
  return (
    <div
      style={{
        display: "inline-flex",
        borderBlock: "1px solid black",
        paddingBlock: "3px",
      }}
    >
      {cells.map((cell, index) => (
        <div
          style={{
            width: "250px",
            borderLeft: "1px solid black",
            ...(index === cells.length - 1
              ? { borderRight: "1px solid black" }
              : {}),
          }}
        >
          {cell}
        </div>
      ))}
    </div>
  );
});

export default GridRow;
