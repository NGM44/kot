import React, { useEffect, useState } from "react";

const  AnimatedProgressBar = ({
  value,
}: {
  value: any;
}) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(0);
    const timer = setTimeout(() => {
      setWidth(value);
    }, 100);
    return () => clearTimeout(timer);
  }, [value]);


  return (
    <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-200 shadow-lg">
      <div
        className={`h-4 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-primary to-primary/50 relative overflow-hidden`}
        style={{ width: `${width}%` }}
      >
        <div className="absolute inset-0 bg-white opacity-25"></div>
        <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white drop-shadow">
          {`${Math.round(width)}%`}
        </span>
      </div>
    </div>
  );
};

export default AnimatedProgressBar;