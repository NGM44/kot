import React from "react";

const StackedBarCharts = ({value}:{value: number}) => {
  const data = Array(20).fill(0);
  const point= value / 5;
  console.log("object",point);
  return (
    <div className="flex flex-row gap-[3px]">
      {data.map((ele, index) => (
        <div
          className={`h-5 w-[3px] ${
            point > index ? "bg-primary" : "bg-primary/30"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default StackedBarCharts;


