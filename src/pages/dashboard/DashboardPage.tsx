import { useGetUserDevices } from "../../queries/admin";
import RabbitMQConsumer from "./RabbitMQConsumer";

const DashboardPage = () => {
  const {data: user} = useGetUserDevices();
  return <div><RabbitMQConsumer/>
  {user?.devices.map(device => <div>Device ID: {device.identifier}</div>)}
  </div>;
};

export default DashboardPage;
