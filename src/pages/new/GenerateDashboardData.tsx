import { IGasMapping } from "../user/CompanyPage";

export interface CardModel {
  key: string;
  name: string;
  value: string;
  change: string;
  content: string;
  info: string;
  graph: string;
  unit: string;
  iconName: string;
}
export interface LiveDataModel {
  temperature: number;
  humidity: number;
  pressure: number;
  co2: number;
  vocs: number;
  light: number;
  noise: number;
  pm1: number;
  pm25: number;
  pm4: number;
  pm10: number;
  aiq: number;
  gas1: number;
  gas2: number;
  gas3: number;
  gas4: number;
  gas5: number;
  gas6: number;
  dateString: string;
}

export const extractDashboardCardValues = (
  liveData: LiveDataModel,
  gasMapping?: IGasMapping
) => {
  const differentialPressure = liveData.pressure;

  const data1: CardModel[] = [
    {
      name: "Temperature",
      value: `${liveData.temperature}`,
      unit: "°C",
      key: "Temperature",
      change: "83.2%",
      iconName: "solar:temperature-linear",
      info: "Temperature",
      content: "20-24°C for optimal comfort",
      graph: "Line",
    },
    {
      name: "Humidity",
      value: `${liveData.humidity} `,
      unit: "%",
      key: "Humidity",
      iconName: "lets-icons:humidity-light",
      info: "Humidity",
      change: "83.2%",
      content: "40-60% RH for optimal comfort",
      graph: "Bar",
    },
    {
      name: "Pressure",
      unit: "hPa",
      key: "Pressure",
      value: `${liveData.pressure}`,
      change: "83.2%",
      iconName: "mdi:barometer",
      info: "Pressure",
      content: "1000-1020 hPa for optimal comfort",
      graph: "",
    },
    {
      name: "Differential Pressure",
      value: `${differentialPressure}`,
      unit: "hPa",
      key: "Differential Pressure",
      change: "83.2%",
      info: "Differential Pressure",
      iconName: "carbon:pressure",
      content: "±5 Pa for optimal comfort",
      graph: "",
    },
  ];
  const data2: CardModel[] = [
    {
      name: "Carbon Dioxide (CO2)",
      value: `${liveData.co2}`,
      unit: "ppm",
      key: "Carbon Dioxide",
      change: "83.2%",
      iconName: "iwwa:co2",
      info: "Temperature",
      content: "Below 1000 ppm for optimal comfort",
      graph: "Line",
    },
    {
      name: "VOCs",
      key: "VOCs",
      value: `${liveData.vocs}`,
      unit: "µg/m³",
      iconName: "material-symbols:water-voc-outline-rounded",
      info: "Volatile Organic Compounds (VOCs)",
      change: "83.2%",
      content: "Below 300 µg/m³ for optimal comfort",
      graph: "Line",
    },
    {
      name: "Light",
      key: "Light",
      value: `${liveData.light}`,
      unit: "lux",
      change: "83.2%",
      iconName: "ph:sun-light",
      info: "Pressure",
      content: "300-500 lux for optimal comfort",
      graph: "",
    },
    {
      name: "Noise",
      key: "Noise",
      value: `${liveData.noise}`,
      unit: "dB",
      change: "83.2%",
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
      value: `${liveData.gas1}`,
      unit: "ppm",
      change: "83.2%",
      iconName: "akar-icons:air",
      info: "Temperature",
      content: "",
      graph: "Line",
    },
    {
      name: gasMapping?.gas2 ?? "Gas 2",
      key: "Gas 2",
      value: `${liveData.gas2}`,
      unit: "ppm",
      iconName: "akar-icons:air",
      info: "Volatile Organic Compounds (VOCs)",
      change: "83.2%",
      content: "",
      graph: "Line",
    },
    {
      name: gasMapping?.gas3 ?? "Gas 3",
      key: "Gas 3",
      value: `${liveData.gas3}`,
      unit: "ppm",
      change: "83.2%",
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
      value: `${liveData.gas4}`,
      unit: "ppm",
      change: "83.2%",
      iconName: "akar-icons:air",
      info: "Temperature",
      content: "",
      graph: "Line",
    },
    {
      name: gasMapping?.gas5 ?? "Gas 5",
      key: "Gas 5",
      value: `${liveData.gas5}`,
      unit: "ppm",
      iconName: "akar-icons:air",
      info: "Volatile Organic Compounds (VOCs)",
      change: "83.2%",
      content: "",
      graph: "Line",
    },
    {
      name: gasMapping?.gas6 ?? "Gas 6",
      key: "Gas 6",
      value: `${liveData.gas6}`,
      unit: "ppm",
      change: "83.2%",
      iconName: "akar-icons:air",
      info: "Pressure",
      content: "",
      graph: "",
    },
  ];
  const productivityMeter = {
    name: "Productivity Meter",
    value: "32",
    key: "Productivity Meter",
    iconName: "carbon:pressure",
    change: "83.2%",
    info: "Mold Growth",
    content: "Avg. Temp increase by 1c in last 7 days",
    graph: "Line",
    unit: "",
  };
  return { data1, data2, data3, data4, productivityMeter };
};
