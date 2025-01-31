import { IWeatherData } from "../../types/device";
import { IGasMapping } from "../user/CompanyPage";

export interface CardModelOverview {
  key: string;
  name: string;
  value: string;
  unit: string;
}

export const extractDashboardOverViewValues = (
  keys: string[],
  liveData?: IWeatherData,
  gasMapping?: IGasMapping
) => {
  const differentialPressure = liveData?.pressure.toFixed(2) || "-";

  const data: CardModelOverview[] = [
    {
      name: "Temperature",
      value: `${liveData?.temperature.toFixed(2) || "-"}`,
      unit: "°C",
      key: "Temperature",
    },
    {
      name: "Humidity",
      value: `${liveData?.humidity.toFixed(0) || "-"}`,
      unit: "%",
      key: "Humidity",
    },

    {
      name: "Pressure",
      unit: "hPa",
      key: "Pressure",
      value: `${liveData?.pressure.toFixed(0) || "-"}`,
    },

    {
      name: "Differential Pressure",
      value: `${differentialPressure}`,
      unit: "hPa",
      key: "Differential Pressure",
    },

    {
      name: "Carbon Dioxide (CO2)",
      value: `${liveData?.co2.toFixed(0) || "-"}`,
      unit: "ppm",
      key: "Carbon Dioxide",
    },

    {
      name: "VOCs",
      key: "VOCs",
      value: `${liveData?.vocs.toFixed(0) || "-"}`,
      unit: "µg/m³",
    },

    {
      name: "Light",
      key: "Light",
      value: `${liveData?.light.toFixed(0) || "-"}`,
      unit: "lux",
    },

    {
      name: "Noise",
      key: "Noise",
      value: `${liveData?.noise.toFixed(0) || "-"}`,
      unit: "dB",
    },

    {
      name: gasMapping?.gas1 ?? "Gas 1",
      key: "Gas 1",
      value: `${liveData?.gas1.toFixed(0) || "-"}`,
      unit: "ppm",
    },

    {
      name: gasMapping?.gas2 ?? "Gas 2",
      key: "Gas 2",
      value: `${liveData?.gas2.toFixed(0) || "-"}`,
      unit: "ppm",
    },
    {
      name: gasMapping?.gas3 ?? "Gas 3",
      key: "Gas 3",
      value: `${liveData?.gas3.toFixed(0) || "-"}`,
      unit: "ppm",
    },

    {
      name: gasMapping?.gas4 ?? "Gas 4",
      key: "Gas 4",
      value: `${liveData?.gas4.toFixed(0) || "-"}`,
      unit: "ppm",
    },
    {
      name: gasMapping?.gas5 ?? "Gas 5",
      key: "Gas 5",
      value: `${liveData?.gas5.toFixed(0) || "-"}`,
      unit: "ppm",
    },
    {
      name: gasMapping?.gas6 ?? "Gas 6",
      key: "Gas 6",
      value: `${liveData?.gas6.toFixed(0) || "-"}`,
      unit: "ppm",
    },

    {
      name: "AIQ",
      value: `${liveData?.aiq ?? 0}`,
      key: "AIQ",
      unit: "",
    },
    {
      name: "Productivity Meter",
      value: `${liveData?.productivityMeter ?? 0}`,
      key: "Productivity Meter",
      unit: "",
    },
    {
      name: "PM1",
      value:`${liveData?.pm1 ?? 0}`,
      key: "PM1",
      unit: "µg/m³",
    },
    {
      name: "PM2.5",
      value: `${liveData?.pm25 ?? 0}`,
      key: "PM2.5",
      unit: "µg/m³",
    },
    {
      name: "PM4",
      value: `${liveData?.pm4 ?? 0}`,
      key: "PM4",
      unit: "µg/m³",
    },
    {
      name: "PM10",
      value: `${liveData?.pm10 ?? 0}`,
      key: "PM10",
      unit: "µg/m³",
    },
  ];
  return data.filter((ele) => keys.includes(ele.key));
};
