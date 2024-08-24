import SecondSection from "./SecondSection";
import { VStack } from "../../component/utils";
import HomePageDashboardCard from "./HomePageDashboardCard";
import { generateSensorData } from "./Generate";
import { useEffect, useState } from "react";
import { useValueStore } from "../../store/useValueState";

const HomePage = () => {
  let liveData1 = generateSensorData();
  const [liveData3, setLiveData3] = useState<any[]>(liveData1);

  const { index, isRefresh, setValue } = useValueStore();
  const [liveData, setLiveData] = useState(liveData3[0]);
  useEffect(() => {
    setInterval(() => {
      let liveData2 = generateSensorData();
      setLiveData3(liveData2);
    }, 60000);
  }, []);

  useEffect(() => {
    let liveData2 = generateSensorData();
    setLiveData3(liveData2);
  }, [isRefresh]);
  console.log("liveData2", liveData3);

  useEffect(() => {
    setLiveData(liveData3[index ?? 0]);
  }, [index, liveData3]);
  return (
    <VStack className="gap-6">
      <SecondSection date={liveData.dateString} />
      <HomePageDashboardCard liveData={liveData} />
    </VStack>
  );
};

export default HomePage;
