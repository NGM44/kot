import DataCards from "./DataCards";
import { HStack, VStack } from "../../component/utils";
import ProductivityMeter from "./ProductivityMeter";
import GasValues from "./GasValue";
import VirtualSensor from "./AQISensor";
import {
  CardModel,
  extractDashboardCardValues,
} from "./GenerateDashboardData";
import { useGetDeviceRange, useGetUserDevices } from "../../queries/admin";
import { IWeatherData } from "../../types/device";
import { useEffect, useState } from "react";
import { useValueStore } from "../../store/useValueState";

const HomePageDashboardCard = ({ liveData }: { liveData?: IWeatherData }) => {
  const { data: user } = useGetUserDevices();
  const { deviceId } = useValueStore();
  const { data: deviceRange } = useGetDeviceRange(deviceId ?? "");
  const { data1, data2, data3, data4,data5, productivityMeter } =
    extractDashboardCardValues(liveData,user?.gasMapping,deviceRange);
  const [particulateValue, setParticulateValue] = useState(0);
  useEffect(()=> {
    if(!!liveData){
      const pmValues =[liveData.pm1, liveData.pm10, liveData.pm25, liveData.pm4];
      const totalPmValues = pmValues.reduce((sum, value) => sum + value, 0);
      setParticulateValue(totalPmValues / pmValues.length);
    }
    
  },[liveData])
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
        <VStack className="flex-1 gap-6">
         
       
         <ProductivityMeter value={productivityMeter} liveData={liveData} deviceRange={deviceRange} />
         <div className="flex flex-wrap gap-6 w-full">

         
{data5.slice(0,2).map((ele: CardModel) => (
<DataCards key={ele.name} value={ele} />
))}</div>
        </VStack>
        <HStack className="flex-1 gap-6">
          <GasValues
            value={{
              name: "Gas Meter",
              value: particulateValue.toFixed(0) || "-",
              key: "Particulate Matter",
              // change: "83.2%",
              unit: "",
              info: "Mold Growth",
              content: "Particulate Matter Value is calculated by the formula taking PM1, PM2.5 ,PM4,PM10 into Consideration",
              graph: "Line",
              iconName: "",
            }}
            liveData = {liveData}
          />
          <VirtualSensor
            value={{
              name: "Gas Meter",
              value:`${liveData?.aiq.toFixed(0) || "-"}`,
              // change: "83.2%",
              info: "Mold Growth",
              key: "Air Quality Index",
              unit: "",
              content: "0-50 is good 51-100 is moderate over 100 needs action",
              graph: "Line",
              iconName: "",
            }}
            liveData={liveData}
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
