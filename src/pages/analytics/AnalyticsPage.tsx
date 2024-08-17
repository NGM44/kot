import { EChartOption } from "echarts";
import ReactECharts from "echarts-for-react";
import _ from "lodash";
import { useWeatherData } from "../../queries/admin";
import { useState } from "react";
import ReportModal from "../../modal/ReportModal";
import AnalyticsSecondSection from "../new/AnalyticsSecondSection";
import { HStack, VStack } from "../../component/utils";
import DeviceSelection from "../new/DeviceSelection";
import ChartSelection from "../new/ChartSelection";
import { dummyData } from "./constant";

const AnalyticsPage = () => {
  const deviceId = "01J2RWJH8HF0C6ZQYFJ9HHC9ZP";
  // const { data: _weatherData } = useWeatherData(deviceId);
  const weatherData = dummyData;
  const minTemperatureValue = _.min(weatherData.map((d) => d.temperature));
  const maxTemperatureValue = _.max(weatherData.map((d) => d.temperature));
  const minHumidityValue = _.min(weatherData.map((d) => d.humidity));
  const maxHumidityValue = _.max(weatherData.map((d) => d.humidity));
  const temperature: EChartOption = {
    tooltip: {
      trigger: "axis",
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
          color: ["green", "yellow", "orange", "red"],
        },
        min: minTemperatureValue,
        max: maxTemperatureValue,
      },
    ],
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value} °C",
      },
      min: minTemperatureValue,
      max: maxTemperatureValue,
    },
    series: [
      {
        type: "line",
        data: weatherData.map((d) => d.temperature),
      },
    ],
    dataZoom: [
      // {
      //   type: "slider",
      //   start: 99.99,
      //   end: 100,
      //   zoomOnMouseWheel: true,
      // },
      {
        type: "inside",
        start: 0,
        end: 100,
      },
    ],
  };

  return (
    <>
      <VStack className="gap-6">
        <AnalyticsSecondSection />
        {/* <div onClick={() => setDialog(true)}>Download Report</div> */}
        <div className="h-96 bg-white rounded-xl shadow-box">
          <HStack className="justify-end px-4 py-4">
            <ChartSelection />
          </HStack>
          <ReactECharts option={temperature} />
        </div>

        {/* <ReactECharts option={humidity} /> */}
      </VStack>
    </>
  );
};

export default AnalyticsPage;
