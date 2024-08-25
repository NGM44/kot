import DataCards from "./DataCards";
import { HStack, VStack } from "../../component/utils";
import DataCards2 from "./DataCards2";
import ProductivityMeter from "./ProductivityMeter";
import GasValues from "./GasValue";
import VirtualSensor from "./AQISensor";
import {
  CardModel,
  extractDashboardCardValues,
  LiveDataModel,
} from "./GenerateDashboardData";

const HomePageDashboardCard = ({ liveData }: { liveData: LiveDataModel }) => {
  const { data1, data2, data3, data4, productivityMeter } =
    extractDashboardCardValues(liveData);
  return (
    <VStack className="gap-6">
      <div className="flex flex-wrap gap-6 w-full">
        {data1.map((ele: CardModel) => (
          <DataCards key={ele.name} value={ele} />
        ))}
      </div>
      <div className="flex flex-wrap gap-6 w-full">
        {data2.map((ele: CardModel) => (
          <DataCards key={ele.name} value={ele} />
        ))}
      </div>

      <HStack className="gap-6 w-full">
        <HStack className="flex-1">
          <ProductivityMeter value={productivityMeter} />
        </HStack>
        <HStack className="flex-1 gap-6">
          <GasValues
            value={{
              name: "Gas Meter",
              value: "32",
              key: "Particulate Matter",
              change: "83.2%",
              unit: "",
              info: "Mold Growth",
              content: "Particulate Matter Value is calculated by the formula taking PM1, PM2.5 ,PM4,PM10 into Consideration",
              graph: "Line",
              iconName: "",
            }}
          />
          <VirtualSensor
            value={{
              name: "Gas Meter",
              value: "32",
              change: "83.2%",
              info: "Mold Growth",
              key: "Air Quality Index",
              unit: "",
              content: "0-50 is good 51-100 is moderate over 100 needs action",
              graph: "Line",
              iconName: "",
            }}
          />
        </HStack>
      </HStack>
      <div className="flex flex-wrap gap-6 w-full">
        {data3.map((ele: CardModel) => (
          <DataCards key={ele.name} value={ele} />
        ))}
      </div>
      <div className="flex flex-wrap gap-6 w-full">
        {data4.map((ele: CardModel) => (
          <DataCards key={ele.name} value={ele} />
        ))}
      </div>
    </VStack>
  );
};

export default HomePageDashboardCard;
