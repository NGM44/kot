import { Line } from 'react-chartjs-2';
import 'chart.js/auto';


const AnalyticsPage = () => {
  const data: any[] =[];
  const temperatureData = {
    labels: data.map((item) => `${item.timestamp.toDateString() +" "+ item.timestamp.toTimeString().split(" ")[0]}`),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: data.map(item => item.temperature),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  // Prepare data for humidity chart
  const humidityData = {
    labels: data.map((item) => `${item.timestamp.toTimeString()}`),
    datasets: [
      {
        label: 'Humidity (%)',
        data: data.map(item => item.humidity),
        borderColor: 'rgba(153,102,255,1)',
        backgroundColor: 'rgba(153,102,255,0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div>
      <h2>Temperature Chart</h2>
      <Line data={temperatureData} />

      <h2>Humidity Chart</h2>
      <Line data={humidityData} />
    </div>
  );
};

export default AnalyticsPage;
