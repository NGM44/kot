import React from "react";

const StackedBarChartsFullFledged = ({ value }: { value: number }) => {
  const data = Array(50).fill(0);
  const point = value/2;
  console.log("object", point);
  return (
    <div className="flex flex-row gap-[3px] my-2">
      {data.map((ele, index) => (
        <div
          className={`h-10 w-[3px] ${
            point > index ? "bg-primary" : "bg-primary/30"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default StackedBarChartsFullFledged;
