import { IWeatherData, IWeatherDataRange } from "../../types/device";
import { IGasMapping } from "../user/CompanyPage";

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
  console.log("liveData", liveData);
  const differentialPressure = liveData?.pressure.toFixed(0) || "-";

  const data1: CardModel[] = [
    {
      name: "Temperature",
      value: `${liveData?.temperature.toFixed(2) || "-"}`,
      unit: "°C",
      key: "Temperature",
      min: deviceRange?.temperatureMin ?? 20,
      max: deviceRange?.temperatureMax ?? 24,
      // change: "83.2%",
      iconName: "solar:temperature-linear",
      info: "Temperature",
      content: `${deviceRange?.temperatureMin ?? 20}-${
        deviceRange?.temperatureMax ?? 24
      }°C for optimal comfort`,
      graph: "Line",
    },
    {
      name: "Humidity",
      value: `${liveData?.humidity.toFixed(0) || "-"}`,
      unit: "%",
      min: deviceRange?.humidityMin ?? 40,
      max: deviceRange?.humidityMax ?? 60,
      key: "Humidity",
      iconName: "lets-icons:humidity-light",
      info: "Humidity",
      // change: "83.2%",
      content: `${deviceRange?.humidityMin ?? 40}-${
        deviceRange?.humidityMax ?? 60
      }% RH for optimal comfort`,
      graph: "Bar",
    },
    {
      name: "Pressure",
      unit: "hPa",
      key: "Pressure",
      min: deviceRange?.pressureMin ?? 1000,
      max: deviceRange?.pressureMax ?? 1020,
      value: `${liveData?.pressure.toFixed(0) || "-"}`,
      // change: "83.2%",
      iconName: "mdi:barometer",
      info: "Pressure",
      content: `${deviceRange?.pressureMin ?? 1000}-${
        deviceRange?.pressureMax ?? 1020
      } hPa for optimal comfort`,
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
      max: deviceRange?.co2Max ?? 1000,
      iconName: "iwwa:co2",
      info: "Carbon Dioxide(CO2)",
      content: `Below ${deviceRange?.co2Max ?? 1000} ppm for optimal comfort`,
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
      content: `Below ${deviceRange?.vocsMax ?? 300} µg/m³ for optimal comfort`,
      graph: "Line",
    },
    {
      name: "Light",
      key: "Light",
      value: `${liveData?.light.toFixed(0) || "-"}`,
      unit: "lux",
      min: deviceRange?.lightMin ?? 300,
      max: deviceRange?.lightMax ?? 500,
      // change: "83.2%",
      iconName: "ph:sun-light",
      info: "Pressure",
      content: `${deviceRange?.lightMin ?? 300}-${deviceRange?.lightMax ?? 500} lux for optimal comfort`,
      graph: "",
    },
    {
      name: "Noise",
      key: "Noise",
      value: `${liveData?.noise.toFixed(0) || "-"}`,
      unit: "dB",
      // change: "83.2%",
      min: deviceRange?.noiseMin ?? 0,
      max: deviceRange?.noiseMax ?? 55,
      info: "Differential Pressure",
      iconName: "material-symbols:noise-aware",
      content: `Below ${deviceRange?.noiseMax} dB for optimal comfort`,
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
      max: deviceRange?.gas1Max ?? 1000,
      iconName: "akar-icons:air",
      info: "Temperature",
      content: `${deviceRange?.gas1Min ?? 0}-${
        deviceRange?.gas1Max ?? 1000
      } ppm for optimal comfort`,
      graph: "Line",
    },
    {
      name: gasMapping?.gas2 ?? "Gas 2",
      key: "Gas 2",
      value: `${liveData?.gas2.toFixed(0) || "-"}`,
      unit: "ppm",
      min: deviceRange?.gas2Min ?? 0,
      max: deviceRange?.gas2Max ?? 1000,
      iconName: "akar-icons:air",
      info: "Volatile Organic Compounds (VOCs)",
      // change: "83.2%",
      content: `${deviceRange?.gas2Min ?? 0}-${
        deviceRange?.gas2Max ?? 1000
      } ppm for optimal comfort`,
      graph: "Line",
    },
    {
      name: gasMapping?.gas3 ?? "Gas 3",
      key: "Gas 3",
      min: deviceRange?.gas3Min ?? 0,
      max: deviceRange?.gas3Max ?? 1000,
      value: `${liveData?.gas3.toFixed(0) || "-"}`,
      unit: "ppm",
      // change: "83.2%",
      iconName: "akar-icons:air",
      info: "Pressure",
      content: `${deviceRange?.gas3Min ?? 0}-${
        deviceRange?.gas3Max ?? 1000
      } ppm for optimal comfort`,
      graph: "",
    },
  ];
  const data4: CardModel[] = [
    {
      name: gasMapping?.gas4 ?? "Gas 4",
      key: "Gas 4",
      min: deviceRange?.gas4Min ?? 0,
      max: deviceRange?.gas4Max ?? 1000,
      value: `${liveData?.gas4.toFixed(0) || "-"}`,
      unit: "ppm",
      // change: "83.2%",
      iconName: "akar-icons:air",
      info: "Temperature",
      content: `${deviceRange?.gas4Min ?? 0}-${
        deviceRange?.gas4Max ?? 1000
      } ppm for optimal comfort`,
      graph: "Line",
    },
    {
      name: gasMapping?.gas5 ?? "Gas 5",
      key: "Gas 5",
      min: deviceRange?.gas5Min ?? 0,
      max: deviceRange?.gas5Max ?? 1000,
      value: `${liveData?.gas5.toFixed(0) || "-"}`,
      unit: "ppm",
      iconName: "akar-icons:air",
      info: "Volatile Organic Compounds (VOCs)",
      content: `${deviceRange?.gas5Min ?? 0}-${
        deviceRange?.gas5Max ?? 1000
      } ppm for optimal comfort`,
  
      graph: "Line",
    },
    {
      name: gasMapping?.gas6 ?? "Gas 6",
      key: "Gas 6",
      min: deviceRange?.gas6Min ?? 0,
      max: deviceRange?.gas6Max ?? 1000,
      value: `${liveData?.gas6.toFixed(0) || "-"}`,
      unit: "ppm",
      // change: "83.2%",
      iconName: "akar-icons:air",
      info: "Pressure",
     
      content: `${deviceRange?.gas6Min ?? 0}-${
        deviceRange?.gas6Max ?? 1000
      } ppm for optimal comfort`,
  
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
  const data5: CardModel[] = [
    {
      name: "Odor",
      value: `${(liveData?.odor ?? 0).toFixed(0) || "-"}`,
      unit: "%",
      key: "Odor",
      min: deviceRange?.odorMin ?? 0,
      max: deviceRange?.odorMax ?? 0,
      // change: "83.2%",
      iconName: "fluent:mold-24-regular",
      info: "Odor",
      content: `${deviceRange?.odorMin ?? 0}-${
        deviceRange?.odorMax ?? 30
      } ppm for optimal comfort`,
      graph: "Line",
    },
    {
      name: "Mold Growth",
      value: `${(liveData?.moldGrowth ?? 0).toFixed(0) || "-"}`,
      unit: "%",
      min: deviceRange?.moldGrowthMin ?? 0,
      max: deviceRange?.moldGrowthMax ?? 30,
      key: "MoldGrowth",
      iconName: "fluent:mold-24-regular",
      info: "Mold Growth",
      // change: "83.2%",
      content: `${deviceRange?.moldGrowthMin ?? 0}-${
        deviceRange?.moldGrowthMax ?? 100
      } % for optimal comfort`,
      graph: "Bar",
    },
  ];
  return { data1, data2, data3, data4, data5, productivityMeter };
};
