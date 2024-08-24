import React, { useState } from "react";
import { RefreshCw } from "lucide-react";
import { useValueStore } from "../../store/useValueState";

const RotatingRefreshIcon = () => {
  const [isRotating, setIsRotating] = useState(false);
  const { isRefresh, setValue } = useValueStore();
  const handleClick = () => {
    setIsRotating(true);

    setTimeout(() => {
      setIsRotating(false);
      setValue({
        isRefresh: !isRefresh,
      });
    }, 1000); // Stop rotation after 1 second
  };

  return (
    <button
      type="button"
      className="p-3 bg-white cursor-pointer h-11 drop-shadow-box rounded-xl text-secondary hover:text-gray-500"
      onClick={handleClick}
    >
      <span className="sr-only">Refresh</span>
      <RefreshCw
        className={`h-5 w-5 text-secondary ${isRotating ? "animate-spin" : ""}`}
        aria-hidden="true"
      />
    </button>
  );
};

export default RotatingRefreshIcon;
