import React from "react";
// Assuming this is the path to our generic component
import { useValueStore } from "../../store/useValueState";
import { CheckIcon } from "lucide-react";
import GenericDropdown from "./GenericSelection";

interface MetricModel {
  id: string;
  name: string;
  unit: string;
}

const metrics: MetricModel[] = [
  { id: "0", name: "Temperature", unit: "°C" },
  { id: "1", name: "Humidity", unit: "%" },
  { id: "2", name: "Pressure", unit: "hPa" },
  { id: "3", name: "Carbon-Dioxide", unit: "ppm" },
  { id: "4", name: "VOCs", unit: "µg/m³" },
  { id: "5", name: "Light", unit: "lux" },
  { id: "6", name: "Noise", unit: "dB" },
  { id: "7", name: "PM1", unit: "" },
  { id: "8", name: "PM2.5", unit: "" },
  { id: "9", name: "PM4", unit: "" },
  { id: "10", name: "PM10", unit: "" },
  { id: "11", name: "AIQ", unit: "" },
  { id: "12", name: "Gas-1", unit: "ppm" },
  { id: "13", name: "Gas-2", unit: "ppm" },
  { id: "14", name: "Gas-3", unit: "ppm" },
  { id: "15", name: "Gas-4", unit: "ppm" },
  { id: "16", name: "Gas-5", unit: "ppm" },
  { id: "17", name: "Gas-6", unit: "ppm" },
];

const ChartSelection: React.FC = () => {
  const { metric, setValue } = useValueStore();

  const handleSelect = (selectedMetric: MetricModel) => {
    setValue({
      metricUnit: selectedMetric.unit,
      metric: selectedMetric.name,
    });
  };

  const renderOption = (option: MetricModel, isSelected: boolean) => (
    <div className="flex justify-between items-center">
      <span
        className={`block truncate ${
          isSelected ? "font-semibold" : "font-normal"
        }`}
      >
        {option.name}
      </span>
      {isSelected && <CheckIcon className="h-5 w-5 text-indigo-600" />}
    </div>
  );

  return (
    <GenericDropdown<MetricModel>
      options={metrics}
      onSelect={handleSelect}
      initialSelectedId={
        metrics.find((m) => m.name === (metric ?? "Temperature"))?.id ?? ""
      }
      renderOption={renderOption}
      buttonClassName="w-60 font-semibold"
      dropdownClassName="w-60"
    />
  );
};

export default ChartSelection;
