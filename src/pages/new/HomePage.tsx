import React from "react";
import DataCards, { CardModel } from "./DataCards";
import SecondSection from "./SecondSection";
import { HStack, VStack } from "../../component/utils";
import DataCards2 from "./DataCards2";
import ProductivityMeter from "./ProductivityMeter";
import GasValues from "./GasValue";
import VirtualSensor from "./AQISensor";

const HomePage = () => {
  const data: CardModel[] = [
    {
      name: "Temperature",
      value: "32",
      change: "83.2%",
      iconName: "solar:temperature-linear",
      info: "Temperature",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "Line",
    },
    {
      name: "Humidity",
      value: "98%",
      iconName: "lets-icons:humidity-light",
      info: "Humidity",
      change: "83.2%",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "Bar",
    },
    {
      name: "Pressure",
      value: "32",
      change: "83.2%",
      iconName: "mdi:barometer",
      info: "Pressure",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "",
    },
    {
      name: "Differential Pressure",
      value: "32",
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
      value: "32",
      change: "83.2%",
      iconName: "iwwa:co2",
      info: "Temperature",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "Line",
    },
    {
      name: "VOCs",
      value: "98%",
      iconName: "material-symbols:water-voc-outline-rounded",
      info: "Volatile Organic Compounds (VOCs)",
      change: "83.2%",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "Line",
    },
    {
      name: "Light",
      value: "32",
      change: "83.2%",
      iconName: "ph:sun-light",
      info: "Pressure",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "",
    },
    {
      name: "Noise",
      value: "32",
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
      value: "32",
      change: "83.2%",
      iconName: "iwwa:co2",
      info: "Temperature",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "Line",
    },
    {
      name: "Gas 2",
      value: "98%",
      iconName: "material-symbols:water-voc-outline-rounded",
      info: "Volatile Organic Compounds (VOCs)",
      change: "83.2%",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "Line",
    },
    {
      name: "Gas 3",
      value: "32",
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
      value: "32",
      change: "83.2%",
      iconName: "mdi:odor",
      info: "Temperature",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "Line",
    },
    {
      name: "Gas 5",
      value: "98%",
      iconName: "material-symbols:water-voc-outline-rounded",
      info: "Volatile Organic Compounds (VOCs)",
      change: "83.2%",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "Line",
    },
    {
      name: "Gas 6",
      value: "32",
      change: "83.2%",
      iconName: "ph:sun-light",
      info: "Pressure",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "",
    },
    // {
    //   name: "Noise",
    //   value: "32",
    //   change: "83.2%",
    //   info: "Differential Pressure",
    //   iconName: "material-symbols:noise-aware",
    //   content: "Avg. Temp increase by 1c in last 7 days",
    //   graph: "",
    // },
  ];

  const data5 = [
    {
      name: "Noise",
      value: "32",
      change: "83.2%",
      info: "Differential Pressure",
      iconName: "material-symbols:noise-aware",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "",
    },
    {
      name: "Carbon Dioxide (CO2)",
      value: "32",
      change: "83.2%",
      iconName: "iwwa:co2",
      info: "Temperature",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "Line",
    },
    {
      name: "VOCs",
      value: "98%",
      iconName: "material-symbols:water-voc-outline-rounded",
      info: "Volatile Organic Compounds (VOCs)",
      change: "83.2%",
      content: "Avg. Temp increase by 1c in last 7 days",
      graph: "Line",
    },
  ];
  return (
    <VStack className="gap-6">
      <SecondSection />
      <div className="flex flex-wrap gap-6 w-full">
        {data.map((ele) => (
          <DataCards key={ele.name} value={ele} />
        ))}
      </div>
      <div className="flex flex-wrap gap-6 w-full">
        {data2.map((ele) => (
          <DataCards2 key={ele.name} value={ele} />
        ))}
      </div>

      <HStack className="gap-6 w-full">
        <HStack className="flex-1">
          <ProductivityMeter
            value={{
              name: "Productivity Meter",
              value: "32",
              iconName: "carbon:pressure",
              change: "83.2%",
              info: "Mold Growth",
              content: "Avg. Temp increase by 1c in last 7 days",
              graph: "Line",
            }}
          />
        </HStack>
        <HStack className="flex-1 gap-6">
          <GasValues
            value={{
              name: "Gas Meter",
              value: "32",
              change: "83.2%",
              info: "Mold Growth",
              content: "Avg. Temp increase by 1c in last 7 days",
              graph: "Line",
            }}
          />
          <VirtualSensor
            value={{
              name: "Gas Meter",
              value: "32",
              change: "83.2%",
              info: "Mold Growth",
              content: "Avg. Temp increase by 1c in last 7 days",
              graph: "Line",
            }}
          />
        </HStack>
      </HStack>
      <div className="flex flex-wrap gap-6 w-full">
        {data3.map((ele) => (
          <DataCards key={ele.name} value={ele} />
        ))}
      </div>
      <div className="flex flex-wrap gap-6 w-full">
        {data4.map((ele) => (
          <DataCards key={ele.name} value={ele} />
        ))}
      </div>
    </VStack>
  );
};

export default HomePage;
