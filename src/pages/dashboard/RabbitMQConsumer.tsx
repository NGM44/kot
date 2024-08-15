
import { useEffect, useState } from 'react';
import { IWeatherData } from '../../types/device';

const RabbitMQConsumer = () => {
  const [messages, setMessages] = useState<IWeatherData>();

  useEffect(() => {
    const ws = new WebSocket(`wss://api.sensormagics.com:51001`);

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = event => {
      try {
        const data: IWeatherData = JSON.parse(event.data);
        setMessages(data);
      } catch (error) {
        console.error('Failed to parse message:', error);
      }
    };
  
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  
    ws.onclose = (event) => {
      console.log('WebSocket connection closed:', event.reason);
    };  
    return () => {
      if(ws.readyState === 1)
        {ws.close();}
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
