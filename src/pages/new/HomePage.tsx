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
  //NGM fetch and refetech logic...
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
  },[enabled]);
  return ( 
    <VStack className="gap-6">
      <SecondSection date={liveData && liveData.dateString} />
      <HomePageDashboardCard liveData={liveData} />
    </VStack>
  );
};

export default HomePage;
