import SecondSection from "./SecondSection";
import { VStack } from "../../component/utils";
import HomePageDashboardCard from "./HomePageDashboardCard";
import { useValueStore } from "../../store/useValueState";
import useMqttStore from "../../store/useMqttStore";
import { useEffect, useState } from "react";
import { IWeatherData } from "../../types/device";
import { useGetLiveData } from "../../queries/admin";

const HomePage = () => {
  const { deviceId } = useValueStore();
  const {deviceDataMap , setLatestDeviceData} = useMqttStore();
  const [liveData, setLiveData] = useState<IWeatherData>();
  const [enabled, setEnabled] = useState(false);
  const {data: liveDataFromDb} = useGetLiveData(enabled, deviceId);
  //NGM do this in better way- it works now
  useEffect(() => {
    if(deviceId && deviceDataMap[deviceId]){
      setLiveData(deviceDataMap[deviceId])
    }
    else{
      setEnabled(true);
    }
    
  },[deviceId,deviceDataMap]);

  useEffect(() => {
    if(enabled && deviceId && liveDataFromDb){
      setTimeout(() => {
        setLatestDeviceData(deviceId, liveDataFromDb);
      setEnabled(false);
      },10);
    }
  },[enabled,deviceId,liveDataFromDb, setLatestDeviceData]);

  const gridCols: any = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
    6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
  };
  const listOfValues = [
    {
      name: "Temperature",
      value: liveData?.temperature.toFixed(2) || "-",
      unit: "C",
    },
    {
      name: "Humidity",
      value: liveData?.humidity.toFixed(0) || "-",
      unit: "%",
    },
    {
      name: "VOC",
      value: liveData?.vocs.toFixed(0) || "-",
      unit: "m2c",
    },
    {
      name: "Productivity Meter",
      value: liveData?.productivityMeter?.toFixed(0) || "-",
      unit: "%",
    },
    {
      name: "Light",
      value: liveData?.light.toFixed(0) || "-",
      unit: "lux",
    },
    {
      name: "gas 1",
      value: liveData?.gas1.toFixed(0) || "-",
      unit: "ppm",
    },
  ];
  return (
    <VStack className="gap-6">
      {/* <SecondSection date={liveData.dateString} /> */}
      {/* <ResponsiveValueDisplay /> */}
      <dl
        className={`w-full mx-auto grid ${
          gridCols[listOfValues.length]
        } gap-px bg-gray-900/5 border border-borderColor shadow-sm rounded-lg`}
      >
        {listOfValues.map((stat) => (
          <div
            key={stat.name}
            className={`flex cursor-pointer flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-8 sm:px-6 xl:px-8
             
              `}
          >
            <dt className="text-sm font-medium leading-6 text-gray-500">
              {stat.name}
            </dt>

            <dd className="w-full flex gap-2 flex-row text-3xl font-medium leading-10 tracking-tight text-gray-900">
              <p className="text-secondary text-3xl font-semibold">
                {stat.value}
              </p>
              <p className="text-gray-400 text-lg pt-2 font-medium">
                {stat.unit}
              </p>
            </dd>
          </div>
        ))}
      </dl>
      {/* <SecondSection date={liveData && liveData.dateString} /> */}
      <HomePageDashboardCard liveData={liveData} />
    </VStack>
  );
};

export default HomePage;
