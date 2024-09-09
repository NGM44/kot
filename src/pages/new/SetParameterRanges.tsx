import React, { useState } from "react";

const ParameterRange = ({
  label,
  unit,
  min,
  max,
  step,
}: {
  label: any;
  unit: any;
  min: any;
  max: any;
  step: any;
}) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="flex items-center space-x-2">
        <input
          type="number"
          min={min}
          max={maxValue}
          step={step}
          value={minValue}
          onChange={(e) => setMinValue(Number(e.target.value))}
          className="w-20 px-2 py-1 text-sm text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="text-gray-500 text-sm">to</span>
        <input
          type="number"
          min={minValue}
          max={max}
          step={step}
          value={maxValue}
          onChange={(e) => setMaxValue(Number(e.target.value))}
          className="w-20 px-2 py-1 text-sm text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="text-gray-500 text-sm">{unit}</span>
      </div>
    </div>
  );
};

const ParameterRangeUI = () => {
  const parameters = [
    { label: "Temperature", unit: "°C", min: -50, max: 50, step: 0.1 },
    { label: "Humidity", unit: "%", min: 0, max: 100, step: 1 },
    { label: "Pressure", unit: "hPa", min: 800, max: 1200, step: 1 },
    { label: "CO2", unit: "ppm", min: 0, max: 5000, step: 1 },
    { label: "VOCs", unit: "ppb", min: 0, max: 1000, step: 1 },
    { label: "Light", unit: "lux", min: 0, max: 10000, step: 1 },
    { label: "Noise", unit: "dB", min: 0, max: 150, step: 0.1 },
    { label: "PM1", unit: "µg/m³", min: 0, max: 1000, step: 0.1 },
    { label: "PM2.5", unit: "µg/m³", min: 0, max: 1000, step: 0.1 },
    { label: "PM4", unit: "µg/m³", min: 0, max: 1000, step: 0.1 },
    { label: "PM10", unit: "µg/m³", min: 0, max: 1000, step: 0.1 },
    { label: "AIQ", unit: "", min: 0, max: 500, step: 1 },
    { label: "Gas 1", unit: "ppm", min: 0, max: 1000, step: 1 },
    { label: "Gas 2", unit: "ppm", min: 0, max: 1000, step: 1 },
    { label: "Gas 3", unit: "ppm", min: 0, max: 1000, step: 1 },
    { label: "Gas 4", unit: "ppm", min: 0, max: 1000, step: 1 },
    { label: "Gas 5", unit: "ppm", min: 0, max: 1000, step: 1 },
    { label: "Gas 6", unit: "ppm", min: 0, max: 1000, step: 1 },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:col-span-2">
        {parameters.map((param, index) => (
          <ParameterRange key={index} {...param} />
        ))}
      </div>
      <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
        Apply Ranges
      </button>
    </div>
  );
};

export default ParameterRangeUI;
