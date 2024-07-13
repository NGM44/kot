import { addDays } from "date-fns";
import {EChartOption} from "echarts";
import ReactECharts from "echarts-for-react";
import _ from "lodash";

const AnalyticsPage = () => {
  const data = [];
    const currentDate = new Date();
    while (currentDate < addDays(new Date(), 90)) {
      data.push({
        timestamp: new Date(currentDate),
        temperature: parseFloat((Math.random() * 15 + 10).toFixed(2)),
        humidity:parseFloat((Math.random() * 30 + 40).toFixed(2)),
      });
      currentDate.setSeconds(currentDate.getSeconds() + 10);
    }
  const minTemperatureValue = _.min(data.map(d => d.temperature));
  const maxTemperatureValue = _.max(data.map(d => d.temperature));
  const minHumidityValue = _.min(data.map(d => d.humidity));
  const maxHumidityValue = _.max(data.map(d => d.humidity));
  const temperature : EChartOption = {
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: data.map(d => d.timestamp.toDateString() +" "+  d.timestamp.toTimeString().split(" ")[0]),
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
        data: data.map(d => d.temperature),
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
      data: data.map(d => d.timestamp.toDateString() +" "+  d.timestamp.toTimeString().split(" ")[0]),
    },
    yAxis: {
      type: 'value',
      min: minHumidityValue,
      max: maxHumidityValue
    },
    series: [
      {
        type: 'line',
        data: data.map(d => d.humidity),
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

  return <>
  <ReactECharts option={temperature} />
  <ReactECharts option={humidity} />
  </>;
}

export default AnalyticsPage;
