
import { useEffect, useState } from 'react';
import { IWeatherData } from '../../types/device';

const RabbitMQConsumer = () => {
  const [messages, setMessages] = useState<IWeatherData>();

  useEffect(() => {
    const ws = new WebSocket(`ws://128.199.21.134:8080`);

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = event => {
      const data: IWeatherData = JSON.parse(event.data);
      setMessages(data);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className='flex flex-col'>
      <h2>Received Messages: as of {messages?.dateString}</h2>
      
        <div>Temperature:{messages?.temperature}</div>
        <div>Humidity:{messages?.humidity}</div>
    </div>
  );
};

export default RabbitMQConsumer;
