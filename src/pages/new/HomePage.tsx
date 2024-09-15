import SecondSection from "./SecondSection";
import { VStack } from "../../component/utils";
import HomePageDashboardCard from "./HomePageDashboardCard";
import { useValueStore } from "../../store/useValueState";
import useMqttStore from "../../store/useMqttStore";
import { useEffect, useState } from "react";
import { IWeatherData } from "../../types/device";
import { useGetLiveData, useGetUserPreference } from "../../queries/admin";
import {
  CardModelOverview,
  extractDashboardOverViewValues,
} from "./GenerateDashboardDataOverview";

const HomePage = () => {
  const { deviceId } = useValueStore();
  const { deviceDataMap, setLatestDeviceData } = useMqttStore();
  const { data: userPreference } = useGetUserPreference();

  const [liveData, setLiveData] = useState<IWeatherData>();
  const [enabled, setEnabled] = useState(false);
  const { data: liveDataFromDb } = useGetLiveData(enabled, deviceId);
  //NGM do this in better way- it works now
  useEffect(() => {
    if (deviceId && deviceDataMap[deviceId]) {
      setLiveData(deviceDataMap[deviceId]);
    } else {
      setEnabled(true);
    }
  }, [deviceId, deviceDataMap]);

  useEffect(() => {
    if (enabled && deviceId && liveDataFromDb) {
      setTimeout(() => {
        setLatestDeviceData(deviceId, liveDataFromDb);
        setEnabled(false);
      }, 10);
    }
  }, [enabled, deviceId, liveDataFromDb, setLatestDeviceData]);

  const gridCols: any = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
    6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
  };
  const [listData, setListData] = useState<CardModelOverview[]>([]);
  useEffect(() => {
    if ((userPreference?.preference ?? []).length > 0) {
      console.log("listData", userPreference?.preference);
      const value = extractDashboardOverViewValues(
        userPreference?.preference ?? []
      );
      console.log("listDatavalue", value);
      setListData(value ?? []);
    }
  }, [userPreference]);

  return (
    <VStack className="gap-6">
      <dl
        className={`w-full mx-auto grid ${
          gridCols[listData.length]
        } gap-px bg-gray-900/5 border border-borderColor shadow-sm rounded-lg`}
      >
        {listData.map((stat) => (
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
