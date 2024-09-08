import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import mqtt, { MqttClient } from 'mqtt';
import { IWeatherData } from '../types/device';

interface DeviceDataMap {
  [deviceId: string]: IWeatherData;
}

interface MqttState {
  client: MqttClient | null;
  isConnected: boolean;
  deviceDataMap: DeviceDataMap;
  connectMqtt: (url: string, options?: mqtt.IClientOptions) => void;
  disconnectMqtt: () => void;
  subscribeTopic: (topic: string | string[]) => void;
  setLatestDeviceData: (deviceId: string, data: IWeatherData) => void;
}

const useMqttStore = create<MqttState>()(
  devtools(
    (set, get) => ({
      client: null,
      isConnected: false,
      deviceDataMap: {},

      connectMqtt: (url, options = {}) => {
        const client = mqtt.connect(url, options);

        client.on('connect', () => {
          console.log('Connected to MQTT broker');
          set({ isConnected: true, client });
        });

        client.on('message', (topic, message) => {
          const messageString: IWeatherData = JSON.parse(message.toString());
          console.log(`Received message on topic ${topic}`);
          // validate if received object is valid
          const deviceId = topic.split('/')[1];
          get().setLatestDeviceData(deviceId,messageString);
        });

        client.on('error', (err) => {
          console.error('MQTT error:', err);
          set({ isConnected: false });
        });

        client.on('close', () => {
          console.log('MQTT connection closed');
          set({ isConnected: false });
        });
      },

      disconnectMqtt: () => {
        const { client } = get();
        if (client) {
          client.end();
          set({ client: null, isConnected: false });
        }
      },

      subscribeTopic: (topic) => {
        const { client } = get();
        if (client) {
          client.subscribe(topic, (error) => {
            if (error) {
              console.error('Subscribe error:', error);
            } else {
              console.log(`Subscribed to topic: ${topic}`);
            }
          });
        }
      },

      setLatestDeviceData: (deviceId, data) => {
        set((state) => ({
          deviceDataMap: {
            ...state.deviceDataMap,
            [deviceId]: data,
          },
        }));
      },
    })
  )
);

export default useMqttStore;