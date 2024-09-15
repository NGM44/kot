import React, { useEffect, useState } from "react";
import { useGetDeviceRange, useUpdateDeviceRange } from "../../queries/admin";
import { useValueStore } from "../../store/useValueState";
import axios from "axios";
import { toast } from "react-toastify";
import { queryClient } from "../../queries/client";
interface DataValue {
  min?: number;
  max?: number;
}

interface Data {
  [key: string]: DataValue;
}

export interface IWeatherDataRange {
  id: string;
  temperatureMin: number;
  temperatureMax: number;
  humidityMin: number;
  humidityMax: number;
  pressureMin: number;
  pressureMax: number;
  co2Min: number;
  co2Max: number;
  vocsMin: number;
  vocsMax: number;
  lightMin: number;
  lightMax: number;
  noiseMin: number;
  noiseMax: number;
  pm1Min: number;
  pm1Max: number;
  pm25Min: number;
  pm25Max: number;
  pm4Min: number;
  pm4Max: number;
  pm10Min: number;
  pm10Max: number;
  aiqMin: number;
  aiqMax: number;
  gas1Min: number;
  gas1Max: number;
  gas2Min: number;
  gas2Max: number;
  gas3Min: number;
  gas3Max: number;
  gas4Min: number;
  gas4Max: number;
  gas5Min: number;
  gas5Max: number;
  gas6Min: number;
  gas6Max: number;
  deviceId: string;
  createdAt: Date;
  updatedAt: Date;
}

const ParameterRange = ({
  label,
  unit,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  onChange: (minValue: number, maxValue: number) => void;
}) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleMinChange = (value: number) => {
    setMinValue(value);
    onChange(value, maxValue);
  };

  const handleMaxChange = (value: number) => {
    setMaxValue(value);
    onChange(minValue, value);
  };

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
          onChange={(e) => handleMinChange(Number(e.target.value))}
          className="w-20 px-2 py-1 text-sm text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="text-gray-500 text-sm">to</span>
        <input
          type="number"
          min={minValue}
          max={max}
          step={step}
          value={maxValue}
          onChange={(e) => handleMaxChange(Number(e.target.value))}
          className="w-20 px-2 py-1 text-sm text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="text-gray-500 text-sm">{unit}</span>
      </div>
    </div>
  );
};

const ParameterRangeUI = () => {
  const { deviceId } = useValueStore();
  const { data: deviceRange, refetch } = useGetDeviceRange(deviceId ?? "");
  const { mutate: updateDeviceRange } = useUpdateDeviceRange();
  const [parameters, setParameters] = useState<any[]>([]);
  const [parameterValues, setParameterValues] = useState<
    Record<string, { min: number; max: number }>
  >({});

  useEffect(() => {
    refetch();
  }, [deviceId]);

  useEffect(() => {
    if (deviceRange) {
      const parameterList = [
        {
          label: "Temperature",
          unit: "°C",
          min: deviceRange.temperatureMin,
          max: deviceRange.temperatureMax,
          step: 1,
        },
        {
          label: "Humidity",
          unit: "%",
          min: deviceRange.humidityMin,
          max: deviceRange.humidityMax,
          step: 1,
        },
        {
          label: "Pressure",
          unit: "hPa",
          min: deviceRange.pressureMin,
          max: deviceRange.pressureMax,
          step: 1,
        },
        {
          label: "CO2",
          unit: "ppm",
          min: deviceRange.co2Min,
          max: deviceRange.co2Max,
          step: 1,
        },
        {
          label: "VOCs",
          unit: "ppb",
          min: deviceRange.vocsMin,
          max: deviceRange.vocsMax,
          step: 1,
        },
        {
          label: "Light",
          unit: "lux",
          min: deviceRange.lightMin,
          max: deviceRange.lightMax,
          step: 1,
        },
        {
          label: "Noise",
          unit: "dB",
          min: deviceRange.noiseMin,
          max: deviceRange.noiseMax,
          step: 1,
        },
        {
          label: "PM1",
          unit: "µg/m³",
          min: deviceRange.pm1Min,
          max: deviceRange.pm1Max,
          step: 1,
        },
        {
          label: "PM2.5",
          unit: "µg/m³",
          min: deviceRange.pm25Min,
          max: deviceRange.pm25Max,
          step: 1,
        },
        {
          label: "PM4",
          unit: "µg/m³",
          min: deviceRange.pm4Min,
          max: deviceRange.pm4Max,
          step: 1,
        },
        {
          label: "PM10",
          unit: "µg/m³",
          min: deviceRange.pm10Min,
          max: deviceRange.pm10Max,
          step: 1,
        },
        {
          label: "AIQ",
          unit: "",
          min: deviceRange.aiqMin,
          max: deviceRange.aiqMax,
          step: 1,
        },
        {
          label: "Gas 1",
          unit: "ppm",
          min: deviceRange.gas1Min,
          max: deviceRange.gas1Max,
          step: 1,
        },
        {
          label: "Gas 2",
          unit: "ppm",
          min: deviceRange.gas2Min,
          max: deviceRange.gas2Max,
          step: 1,
        },
        {
          label: "Gas 3",
          unit: "ppm",
          min: deviceRange.gas3Min,
          max: deviceRange.gas3Max,
          step: 1,
        },
        {
          label: "Gas 4",
          unit: "ppm",
          min: deviceRange.gas4Min,
          max: deviceRange.gas4Max,
          step: 1,
        },
        {
          label: "Gas 5",
          unit: "ppm",
          min: deviceRange.gas5Min,
          max: deviceRange.gas5Max,
          step: 1,
        },
        {
          label: "Gas 6",
          unit: "ppm",
          min: deviceRange.gas6Min,
          max: deviceRange.gas6Max,
          step: 1,
        },
      ];
      setParameters(parameterList);

      const initialValues: Record<string, { min: number; max: number }> = {};
      parameterList.forEach((param) => {
        initialValues[param.label] = { min: param.min, max: param.max };
      });
      setParameterValues(initialValues);
    }
  }, [deviceRange]);

  const handleParameterChange = (
    label: string,
    minValue: number,
    maxValue: number
  ) => {
    setParameterValues((prev) => ({
      ...prev,
      [label]: { min: minValue, max: maxValue },
    }));
  };
  function convertToIWeatherDataRange(data: Data) {
    const result: any = {
      id: deviceRange?.id, // You might want to generate a unique ID here
      deviceId: deviceRange?.deviceId, // You might want to set a device ID here
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    for (const [key, value] of Object.entries(data)) {
      const lowercaseKey = key.toLowerCase().replace(/\s+/g, "");
      const minKey = `${lowercaseKey}Min`;
      const maxKey = `${lowercaseKey}Max`;

      if (lowercaseKey === "pm2.5") {
        result["pm25Min"] = value?.min ?? 0;
        result["pm25Max"] = value?.max ?? 0;
      } else {
        result[minKey] = value?.min ?? 0;
        result[maxKey] = value?.max ?? 0;
      }
    }

    return result;
  }

  const handleApplyRanges = async () => {
    const data = convertToIWeatherDataRange(parameterValues);
    updateDeviceRange(data, {
      onSuccess() {
        queryClient.invalidateQueries("get-device-range");
        toast("Range value updated successfully!", {
          type: "success",
          autoClose: 2000,
        });
      },
      onError() {
        toast("Range value updated Failed!", {
          type: "error",
          autoClose: 2000,
        });
      },
    });
  };

  return (
    <>
      {parameters.length > 0 && (
        <div className="">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:col-span-2">
            {parameters.map((param: any, index: number) => (
              <ParameterRange
                key={index}
                {...param}
                onChange={(min, max) =>
                  handleParameterChange(param.label, min, max)
                }
              />
            ))}
          </div>
          <div
            className="mt-6 w-full bg-blue-500 text-center text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
            onClick={handleApplyRanges}
          >
            Apply Ranges
          </div>
        </div>
      )}
    </>
  );
};

export default ParameterRangeUI;
