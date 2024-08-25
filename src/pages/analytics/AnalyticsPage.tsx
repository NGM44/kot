import { EChartOption } from "echarts";
import ReactECharts from "echarts-for-react";
import _ from "lodash";
import { useWeatherData } from "../../queries/admin";
import { useEffect, useState } from "react";
import ReportModal from "../../modal/ReportModal";
import AnalyticsSecondSection from "../new/AnalyticsSecondSection";
import { HStack, VStack } from "../../component/utils";
import DeviceSelection from "../new/DeviceSelection";
import ChartSelection from "../new/ChartSelection";
import { dummyData } from "./constant";
import { useValueStore } from "../../store/useValueState";
import { generateSensorData } from "./ContantData";

const AnalyticsPage = () => {
  const deviceId = "01J2RWJH8HF0C6ZQYFJ9HHC9ZP";
  // const { data: _weatherData } = useWeatherData(deviceId);
  // const weather = generateSensorData("1 Day", "1 hour");
  const { metric, date, index, gap, deviceName, metricUnit,isRefresh } = useValueStore();
  const [weatherData, setWeatherData] = useState(dummyData);
  useEffect(() => {
    const weatherData = generateSensorData(date ?? "1 Day", gap ?? "1 hour");
    setWeatherData(weatherData);
  }, [date, gap, index, metric,isRefresh]);
  const minTemperatureValue = _.min(weatherData.map((d) => d.temperature));
  const maxTemperatureValue = _.max(weatherData.map((d) => d.temperature));
  const minHumidityValue = _.min(weatherData.map((d) => d.humidity));
  const maxHumidityValue = _.max(weatherData.map((d) => d.humidity));

  const temperatureOptions = {
    tooltip: {
      trigger: "axis",
    },
    grid: {
      top: 40,
      bottom: 80,
      left: 60,
      right: 40,
    },
    xAxis: {
      type: "category",
      data: weatherData.map((d) => d.dateString),
    },
    visualMap: [
      {
        seriesIndex: 0,
        show: false,
        dimension: 1,
        inRange: {
          color: ["#00A36C", "#FFA500", "#FF4500"],
        },
        min: minTemperatureValue,
        max: maxTemperatureValue,
      },
    ],
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: `{value} ${metricUnit}`,
        fontSize: 14,
      },
      min: minTemperatureValue,
      max: maxTemperatureValue,
    },
    series: [
      {
        type: "line",
        data: weatherData.map((d) => d.temperature),
        // symbolSize: 10,
        // lineStyle: {
        //   width: 3,
        // },
      },
    ],
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 100,
      },
    ],
  };

  const onSelection = (index: any) => {
    // setLiveData(liveData2[index]);
  };

  return (
    <>
      <VStack className="gap-6">
        <AnalyticsSecondSection date={"today"} />
        <div className="bg-white rounded-xl shadow-box p-6">
          <div className="flex justify-between items-center mb-4">
            <VStack>
              <h2 className="text-xl font-bold">{metric} Analysis</h2>
              <p className="text-xs font-medium text-gray-500 ">
                showing the historic data{" "}
                <span className="font-bold">{metric}</span> metrics of about{" "}
                <span className="font-bold">{date}</span> of{" "}
                <span className="font-bold">{deviceName}</span>
              </p>
            </VStack>

            <ChartSelection />
          </div>
          <div className="h-[500px] w-full">
            <ReactECharts
              option={temperatureOptions}
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
      </VStack>
    </>
  );
};

export default AnalyticsPage;
