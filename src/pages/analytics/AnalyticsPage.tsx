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
  const { data: _weatherData, refetch } = useWeatherData(deviceId ?? "");
  const [weatherData, setWeatherData] = useState<IWeatherData[]>([]);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
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


  // NGM to fix this
  useEffect(() => {
    // Create a mapping of metric names to weatherData fields
    const metricDataMapping: { [key: string]: keyof typeof weatherData[0] } = {
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
  
    // Find the metric to be updated
    const metricToBeUpdated = metrics.find((m) => m.name === metric);
  
    if (metricToBeUpdated) {
      // Get the field name to map based on the metric name
      const field = metricDataMapping[metricToBeUpdated.name];
  
      if (field) {
        // Extract the relevant data based on the metric
        const dataToCalculateMinAndMax = weatherData
        .map((data) => data[field])
        .filter((value) => typeof value === 'number');

        const minValue = _.min(dataToCalculateMinAndMax);
        const maxValue = _.max(dataToCalculateMinAndMax);
  
        // Calculate the min and max values
        if(minValue && maxValue)
        {
          setMinValue(minValue);
          setMaxValue(maxValue);
        }
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
        min: minValue,
        max: maxValue,
      },
    ],
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: `{value} ${metricUnit}`,
        fontSize: 14,
      },
      min: minValue,
      max: maxValue,
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
