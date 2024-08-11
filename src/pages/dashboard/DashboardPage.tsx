import { useGetUserDevices } from "../../queries/admin";
import RabbitMQConsumer from "./RabbitMQConsumer";

const DashboardPage = () => {
  const {data: _devices} = useGetUserDevices();
  const devices = _devices || [];
  return <div><RabbitMQConsumer/>
  {devices.map(device => <div>Device ID: {device.identifier}</div>)}
  </div>;
};

export default DashboardPage;
