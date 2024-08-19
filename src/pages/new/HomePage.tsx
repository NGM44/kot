import SecondSection from "./SecondSection";
import { VStack } from "../../component/utils";
import HomePageDashboardCard from "./HomePageDashboardCard";

const HomePage = () => {
  let liveData = {
    temperature: 32,
    humidity: 98,
    pressure: 34,
    co2: 34,
    vocs: 34,
    light: 54,
    noise: 23,
    pm1: 65,
    pm25: 45,
    pm4: 34,
    pm10: 54,
    aiq: 45,
    gas1: 23,
    gas2: 34,
    gas3: 23,
    gas4: 23,
    gas5: 43,
    gas6: 54,
    dateString: "45",
  };
  return (
    <VStack className="gap-6">
      <SecondSection />
      <HomePageDashboardCard liveData={liveData} />
    </VStack>
  );
};

export default HomePage;
