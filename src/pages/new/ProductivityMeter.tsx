import { EChartOption } from "echarts";
import ReactECharts from "echarts-for-react";
import _ from "lodash";
import { useWeatherData } from "../../queries/admin";
import { useState } from "react";
import { HStack, VStack } from "../../component/utils";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Icon } from "@iconify/react";
import { CardModel } from "./GenerateDashboardData";

const ProductivityMeter = ({ value }: { value: CardModel }) => {
  const deviceId = "01J2RWJH8HF0C6ZQYFJ9HHC9ZP";
  const { data: _weatherData } = useWeatherData(deviceId);
  const weatherData = _weatherData || [];
  const minTemperatureValue = _.min(weatherData.map((d) => d.temperature));
  const maxTemperatureValue = _.max(weatherData.map((d) => d.temperature));
  const minHumidityValue = _.min(weatherData.map((d) => d.humidity));
  const maxHumidityValue = _.max(weatherData.map((d) => d.humidity));

  const maxIndicators = [
    { name: "Temperature", max: 6500 },
    { name: "Humidity", max: 16000 },
    { name: "Pressure", max: 30000 },
    { name: "CO2", max: 38000 },
    { name: "VOCs", max: 52000 },
    { name: "Avg. PM", max: 25000 },
  ];
  const radaroption = {
    // legend: {
    //   data: ["Allocated Budget", "Actual Spending"],
    // },

    radar: {
      // shape: 'circle',
      indicator: maxIndicators,
    },
    series: [
      {
        name: "Budget vs spending",
        type: "radar",
        // tooltip: {
        //   trigger: 'item'
        // },
        // areaStyle: {},
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: "Allocated Budget",
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: "Actual Spending",
          },
        ],
      },
    ],
  };
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
      {
        type: "slider",
        start: 99.99,
        end: 100,
        zoomOnMouseWheel: true,
      },
      {
        type: "inside",
        start: 0,
        end: 100,
      },
    ],
  };

  return (
    <>
      <div id={value.key} className="relative flex-1 bg-white p-4 py-6 shadow-box rounded-xl">
        <HStack className="justify-between">
          <VStack className="justify-between">
            <VStack>
              <HStack className="w-full whitespace-nowrap items-center justify-between">
                <HStack className="items-center ">
                  <p className="text-sm text-secondary font-medium">
                    {value.name}
                  </p>
                  <InformationCircleIcon className="w-4 h- ml-2 text-gray-400" />
                </HStack>
                <button
                  type="button"
                  className="absolute right-4 top-4 rounded-xl bg-white px-3 py-2.5 text-xs1 font-semibold text-gray-900 shadow-box  ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  See Details
                </button>
              </HStack>
              <HStack className="gap-2 mt-6 mb-2">
                <div className="p-2 shadow-box bg-gray-50 border-gray-200 border rounded-lg">
                  <Icon
                    className="w-5 h-5 text-primary font-bold"
                    icon={"line-md:speedometer-loop"}
                  />
                </div>
                <p className="text-secondary text-3xl font-semibold">
                  {value.value}
                </p>
                <div className="p-1 shadow-box h-6 text-sm bg-green-50 text-green-500 font-semibold rounded-lg">
                  {value.change}
                </div>
              </HStack>
              <HStack className="gap-2 mt-2">
                <p className="text-gray-500 text-xs1">{value.content}</p>
              </HStack>
            </VStack>
            <VStack className="gap-4">
              <HStack className="gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-lg"></div>{" "}
                <p className="text-sm text-secondary font-medium">
                  Ideal Score
                </p>
              </HStack>
              <HStack className="gap-2">
                <div className="w-4 h-4 bg-blue-500  rounded-lg"></div>{" "}
                <p className="text-sm text-secondary font-medium">
                  Sensor Reading
                </p>
              </HStack>
            </VStack>
          </VStack>
          <div className=" w-full h-64">
            <ReactECharts option={radaroption} />
          </div>
        </HStack>
      </div>
    </>
  );
};

export default ProductivityMeter;
