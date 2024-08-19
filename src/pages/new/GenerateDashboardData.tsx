export interface CardModel {
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

export const extractDashboardCardValues = (liveData: LiveDataModel) => {
  const differentialPressure = liveData.pressure;
  const data1: CardModel[] = [
    {
      name: "Temperature",
      value: `${liveData.temperature}`,
      unit: "°C",
      change: "83.2%",
      iconName: "solar:temperature-linear",
      info: "Temperature",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "Line",
    },
    {
      name: "Humidity",
      value: `${liveData.humidity} `,
      unit: "%",
      iconName: "lets-icons:humidity-light",
      info: "Humidity",
      change: "83.2%",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "Bar",
    },
    {
      name: "Pressure",
      unit: "hPa",
      value: `${liveData.pressure}`,
      change: "83.2%",
      iconName: "mdi:barometer",
      info: "Pressure",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "",
    },
    {
      name: "Differential Pressure",
      value: `${differentialPressure}`,
      unit: "hPa",
      change: "83.2%",
      info: "Differential Pressure",
      iconName: "carbon:pressure",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "",
    },
  ];
  const data2: CardModel[] = [
    {
      name: "Carbon Dioxide (CO2)",
      value: `${liveData.co2}`,
      unit: "ppm",
      change: "83.2%",
      iconName: "iwwa:co2",
      info: "Temperature",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "Line",
    },
    {
      name: "VOCs",
      value: `${liveData.vocs}`,
      unit: "ppm",
      iconName: "material-symbols:water-voc-outline-rounded",
      info: "Volatile Organic Compounds (VOCs)",
      change: "83.2%",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "Line",
    },
    {
      name: "Light",
      value: `${liveData.light}`,
      unit: "lux",
      change: "83.2%",
      iconName: "ph:sun-light",
      info: "Pressure",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "",
    },
    {
      name: "Noise",
      value: `${liveData.noise}`,
      unit: "dB",
      change: "83.2%",
      info: "Differential Pressure",
      iconName: "material-symbols:noise-aware",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "",
    },
  ];

  const data3: CardModel[] = [
    {
      name: "Gas 1",
      value: `${liveData.gas1}`,
      unit: "ppm",
      change: "83.2%",
      iconName: "iwwa:co2",
      info: "Temperature",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "Line",
    },
    {
      name: "Gas 2",
      value: `${liveData.gas2}`,
      unit: "ppm",
      iconName: "material-symbols:water-voc-outline-rounded",
      info: "Volatile Organic Compounds (VOCs)",
      change: "83.2%",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "Line",
    },
    {
      name: "Gas 3",
      value: `${liveData.gas3}`,
      unit: "ppm",
      change: "83.2%",
      iconName: "ph:sun-light",
      info: "Pressure",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "",
    },
  ];
  const data4: CardModel[] = [
    {
      name: "Gas 4",
      value: `${liveData.gas4}`,
      unit: "ppm",
      change: "83.2%",
      iconName: "mdi:odor",
      info: "Temperature",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "Line",
    },
    {
      name: "Gas 5",
      value: `${liveData.gas5}`,
      unit: "ppm",
      iconName: "material-symbols:water-voc-outline-rounded",
      info: "Volatile Organic Compounds (VOCs)",
      change: "83.2%",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "Line",
    },
    {
      name: "Gas 6",
      value: `${liveData.gas6}`,
      unit: "ppm",
      change: "83.2%",
      iconName: "ph:sun-light",
      info: "Pressure",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "",
    },
  ];
  const productivityMeter = {
    name: "Productivity Meter",
    value: "32",
    iconName: "carbon:pressure",
    change: "83.2%",
    info: "Mold Growth",
    content: "Avg. Temp increase by 1c in last 7 days",
    graph: "Line",
    unit: "",
  };
  return { data1, data2, data3, data4,productivityMeter };
};
