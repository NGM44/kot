import {EChartOption} from "echarts";
import ReactECharts from "echarts-for-react";
import _ from "lodash";
import { useWeatherData } from "../../queries/admin";
import { useState } from "react";
import ReportModal from "../../modal/ReportModal";

const AnalyticsPage = () => {
  const deviceId = '01J2RWJH8HF0C6ZQYFJ9HHC9ZP';
  const {data: _weatherData} = useWeatherData(deviceId);
  const weatherData = _weatherData || [];
  const minTemperatureValue = _.min(weatherData.map(d => d.temperature));
  const maxTemperatureValue = _.max(weatherData.map(d => d.temperature));
  const minHumidityValue = _.min(weatherData.map(d => d.humidity));
  const maxHumidityValue = _.max(weatherData.map(d => d.humidity));
  const temperature : EChartOption = {
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: weatherData.map(d => d.dateString),
    },
    visualMap: [{
      seriesIndex: 0,
      show: false,
      dimension:1,
      inRange:{
        color:['green', 'yellow', 'orange', 'red'],
      },
      min: minTemperatureValue,
      max: maxTemperatureValue
    }],
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C',
      },
      min: minTemperatureValue,
      max: maxTemperatureValue
    },
    series: [
      {
        type: 'line',
        data: weatherData.map(d => d.temperature),
      },
    ],
    dataZoom:[
      {
        type: 'slider',
        start: 99.99,
        end: 100,
        zoomOnMouseWheel: true,
      },
      {
        type: 'inside',
        start: 0,
        end: 100,
      },
    ],
  };
  const humidity : EChartOption = {
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: weatherData.map(d => d.dateString),
    },
    yAxis: {
      type: 'value',
      min: minHumidityValue,
      max: maxHumidityValue
    },
    series: [
      {
        type: 'line',
        data: weatherData.map(d => d.humidity),
      },
    ],
    visualMap: [{
      seriesIndex: 0,
      show: false,
      dimension:1,
      inRange:{
        color:['green', 'yellow', 'orange', 'red'],
      },
      min: minHumidityValue,
      max: maxHumidityValue
    }],
    dataZoom:[
      {
        type: 'slider',
        start: 99.99,
        end: 100,
        zoomOnMouseWheel: true,
      },
      {
        type: 'inside',
        start: 0,
        end: 100,
      },
    ],
  };
  const [dialog, setDialog] = useState(false);
  return <>
  <div onClick={() => setDialog(true)}>Download Report</div>
  <ReactECharts option={temperature} />
  <ReactECharts option={humidity} />
  {dialog && <ReportModal isOpen={dialog} onClose={() => setDialog(false)} deviceId = {deviceId} />}
  </>;
}

export default AnalyticsPage;
