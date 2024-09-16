import { IWeatherData } from "../../types/device";
import { IGasMapping } from "../user/CompanyPage";
import { IWeatherDataRange } from "./SetParameterRanges";

export interface CardModel {
  key: string;
  name: string;
  value: string;
  change?: string;
  content: string;
  info: string;
  graph: string;
  unit: string;
  min?: number;
  max?: number;
  iconName: string;
}

export const extractDashboardCardValues = (
  liveData?: IWeatherData,
  gasMapping?: IGasMapping,
  deviceRange?: IWeatherDataRange
) => {
  const differentialPressure = liveData?.pressure.toFixed(0) || "-";

  const data1: CardModel[] = [
    {
      name: "Temperature",
      value: `${liveData?.temperature.toFixed(2) || "-"}`,
      unit: "°C",
      key: "Temperature",
      min: deviceRange?.temperatureMin ?? 0,
      max: deviceRange?.temperatureMax ?? 0,
      // change: "83.2%",
      iconName: "solar:temperature-linear",
      info: "Temperature",
      content: "20-24°C for optimal comfort",
      graph: "Line",
    },
    {
      name: "Humidity",
      value: `${liveData?.humidity.toFixed(0) || "-"}`,
      unit: "%",
      min: deviceRange?.humidityMin ?? 0,
      max: deviceRange?.humidityMax ?? 0,
      key: "Humidity",
      iconName: "lets-icons:humidity-light",
      info: "Humidity",
      // change: "83.2%",
      content: "40-60% RH for optimal comfort",
      graph: "Bar",
    },
    {
      name: "Pressure",
      unit: "hPa",
      key: "Pressure",
      min: deviceRange?.pressureMin ?? 0,
      max: deviceRange?.pressureMax ?? 0,
      value: `${liveData?.pressure.toFixed(0) || "-"}`,
      // change: "83.2%",
      iconName: "mdi:barometer",
      info: "Pressure",
      content: "1000-1020 hPa for optimal comfort",
      graph: "",
    },
    {
      name: "Differential Pressure",
      value: `${differentialPressure}`,
      unit: "hPa",
      min: 0,
      max: 999999999,
      key: "Differential Pressure",
      // change: "83.2%",
      info: "Differential Pressure",
      iconName: "carbon:pressure",
      content: "±5 Pa for optimal comfort",
      graph: "",
    },
  ];
  const data2: CardModel[] = [
    {
      name: "Carbon Dioxide (CO2)",
      value: `${liveData?.co2.toFixed(0) || "-"}`,
      unit: "ppm",
      key: "Carbon Dioxide",
      // change: "83.2%",
      min: deviceRange?.co2Min ?? 0,
      max: deviceRange?.co2Max ?? 0,
      iconName: "iwwa:co2",
      info: "Temperature",
      content: "Below 1000 ppm for optimal comfort",
      graph: "Line",
    },
    {
      name: "VOCs",
      key: "VOCs",
      value: `${liveData?.vocs.toFixed(0) || "-"}`,
      min: deviceRange?.vocsMin ?? 0,
      max: deviceRange?.vocsMax ?? 0,
      unit: "µg/m³",
      iconName: "material-symbols:water-voc-outline-rounded",
      info: "Volatile Organic Compounds (VOCs)",
      // change: "83.2%",
      content: "Below 300 µg/m³ for optimal comfort",
      graph: "Line",
    },
    {
      name: "Light",
      key: "Light",
      value: `${liveData?.light.toFixed(0) || "-"}`,
      unit: "lux",
      min: deviceRange?.lightMin ?? 0,
      max: deviceRange?.lightMax ?? 0,
      // change: "83.2%",
      iconName: "ph:sun-light",
      info: "Pressure",
      content: "300-500 lux for optimal comfort",
      graph: "",
    },
    {
      name: "Noise",
      key: "Noise",
      value: `${liveData?.noise.toFixed(0) || "-"}`,
      unit: "dB",
      // change: "83.2%",
      min: deviceRange?.noiseMin ?? 0,
      max: deviceRange?.noiseMax ?? 0,
      info: "Differential Pressure",
      iconName: "material-symbols:noise-aware",
      content: "Below 55 dB for optimal comfort",
      graph: "",
    },
  ];

  const data3: CardModel[] = [
    {
      name: gasMapping?.gas1 ?? "Gas 1",
      key: "Gas 1",
      value: `${liveData?.gas1.toFixed(0) || "-"}`,
      unit: "ppm",
      // change: "83.2%",
      min: deviceRange?.gas1Min ?? 0,
      max: deviceRange?.gas1Max ?? 0,
      iconName: "akar-icons:air",
      info: "Temperature",
      content: "",
      graph: "Line",
    },
    {
      name: gasMapping?.gas2 ?? "Gas 2",
      key: "Gas 2",
      value: `${liveData?.gas2.toFixed(0) || "-"}`,
      unit: "ppm",
      min: deviceRange?.gas2Min ?? 0,
      max: deviceRange?.gas2Max ?? 0,
      iconName: "akar-icons:air",
      info: "Volatile Organic Compounds (VOCs)",
      // change: "83.2%",
      content: "",
      graph: "Line",
    },
    {
      name: gasMapping?.gas3 ?? "Gas 3",
      key: "Gas 3",
      min: deviceRange?.gas3Min ?? 0,
      max: deviceRange?.gas3Max ?? 0,
      value: `${liveData?.gas3.toFixed(0) || "-"}`,
      unit: "ppm",
      // change: "83.2%",
      iconName: "akar-icons:air",
      info: "Pressure",
      content: "",
      graph: "",
    },
  ];
  const data4: CardModel[] = [
    {
      name: gasMapping?.gas4 ?? "Gas 4",
      key: "Gas 4",
      min: deviceRange?.gas4Min ?? 0,
      max: deviceRange?.gas4Max ?? 0,
      value: `${liveData?.gas4.toFixed(0) || "-"}`,
      unit: "ppm",
      // change: "83.2%",
      iconName: "akar-icons:air",
      info: "Temperature",
      content: "",
      graph: "Line",
    },
    {
      name: gasMapping?.gas5 ?? "Gas 5",
      key: "Gas 5",
      min: deviceRange?.gas5Min ?? 0,
      max: deviceRange?.gas5Max ?? 0,
      value: `${liveData?.gas5.toFixed(0) || "-"}`,
      unit: "ppm",
      iconName: "akar-icons:air",
      info: "Volatile Organic Compounds (VOCs)",
      // change: "83.2%",
      content: "",
      graph: "Line",
    },
    {
      name: gasMapping?.gas6 ?? "Gas 6",
      key: "Gas 6",
      min: deviceRange?.gas6Min ?? 0,
      max: deviceRange?.gas6Max ?? 0,
      value: `${liveData?.gas6.toFixed(0) || "-"}`,
      unit: "ppm",
      // change: "83.2%",
      iconName: "akar-icons:air",
      info: "Pressure",
      content: "",
      graph: "",
    },
  ];
  const productivityMeter = {
    name: "Productivity Meter",
    value: `${liveData?.productivityMeter?.toFixed(0) || "-"}`,
    key: "Productivity Meter",
    iconName: "carbon:pressure",
    // change: "83.2%",
    info: "Mold Growth",
    content: "Avg. Temp increase by 1c in last 7 days",
    graph: "Line",
    unit: "",
  };
  return { data1, data2, data3, data4, productivityMeter };
};
