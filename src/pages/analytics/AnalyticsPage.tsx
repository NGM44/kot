import { EChartOption } from "echarts";
import ReactECharts from "echarts-for-react";
import _ from "lodash";
import { useWeatherData } from "../../queries/admin";
import { useEffect, useState } from "react";
import ReportModal from "../../modal/ReportModal";
import AnalyticsSecondSection from "../new/AnalyticsSecondSection";
import { HStack, VStack } from "../../component/utils";
import DeviceSelection from "../new/DeviceSelection";
import ChartSelection, { metrics } from "../new/ChartSelection";
import { useValueStore } from "../../store/useValueState";
import { filterWeatherData } from "./ContantData";
import { IWeatherData } from "../../types/device";

const metricDataMapping: { [key: string]: keyof IWeatherData } = {
  Temperature: 'temperature',
  Humidity: 'humidity',
  Pressure: 'pressure',
  'Carbon-Dioxide': 'co2',
  VOCs: 'vocs',
  Light: 'light',
  Noise: 'noise',
  PM1: 'pm1',
  'PM2.5': 'pm25',
  PM4: 'pm4',
  PM10: 'pm10',
  AIQ: 'aiq',
  'Gas-1': 'gas1',
  'Gas-2': 'gas2',
  'Gas-3': 'gas3',
  'Gas-4': 'gas4',
  'Gas-5': 'gas5',
  'Gas-6': 'gas6',
};

const AnalyticsPage = () => {
  const {
    metric,
    date,
    index,
    gap,
    deviceName,
    metricUnit,
    isRefresh,
    deviceId,
  } = useValueStore();
  //NGM add a better loader
  const { data: _weatherData, refetch, isLoading } = useWeatherData(deviceId ?? "", metricDataMapping[metric ?? 'temperature'], date ?? '1 Day');
  const [weatherData, setWeatherData] = useState<IWeatherData[]>([]);
  const [dataToBePassed, setDataToBePassed] = useState<number[]>([]);
  useEffect(() => {
    if (_weatherData) {
      const weatherData = filterWeatherData(
        _weatherData ?? [],
        date ?? "1 Day",
        gap ?? "1 hour"
      );
      setWeatherData(weatherData || []);
    }
  }, [date, gap, index, metric, isRefresh, _weatherData]);

  useEffect(() => {
    const metricToBeUpdated = metrics.find((m) => m.name === metric);
    if (metricToBeUpdated) {
      const field = metricDataMapping[metricToBeUpdated.name];
      if (field && field !== 'dateString') {
        const dataToCalculateMinAndMax = weatherData
        .map((data) => data[field])
        setDataToBePassed(dataToCalculateMinAndMax);
      }
    }
  }, [weatherData]);

  useEffect(() => {
    refetch();
  }, [deviceId]);
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
        min: _.min(dataToBePassed),
        max: _.max(dataToBePassed),
      },
    ],
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: `{value} ${metricUnit}`,
        fontSize: 14,
      },
      min: _.min(dataToBePassed),
      max: _.max(dataToBePassed),
    },
    series: [
      {
        type: "line",
        data: dataToBePassed,
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
          <div className="flex w-full justify-between items-center mb-4">
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
          {isLoading ? <>Loading</> : 
            <ReactECharts
              option={temperatureOptions}
              style={{ height: "100%", width: "100%" }}
            />
          }
          </div>

        </div>
      </VStack>
    </>
  );
};

export default AnalyticsPage;
