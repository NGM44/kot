import create from 'zustand';
import { devtools } from 'zustand/middleware';
import mqtt, { MqttClient } from 'mqtt';

interface MqttMessage {
  topic: string;
  message: string;
}

interface MqttState {
  client: MqttClient | null;
  isConnected: boolean;
  messages: MqttMessage[];
  connectMqtt: (url: string, options?: mqtt.IClientOptions) => void;
  disconnectMqtt: () => void;
  subscribeTopic: (topic: string | string[]) => void;
}

const useMqttStore = create<MqttState>()(
  devtools(
    (set, get) => ({
      client: null,
      isConnected: false,
      messages: [],

      connectMqtt: (url, options = {}) => {
        const client = mqtt.connect(url, options);

        client.on('connect', () => {
          console.log('Connected to MQTT broker');
          set({ isConnected: true, client });
        });

        client.on('message', (topic, message) => {
          const messageString = message.toString();
          console.log(`Received message on topic ${topic}: ${messageString}`);
          set((state) => ({
            messages: [...state.messages, { topic, message: messageString }],
          }));
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
    })
  )
);

export default useMqttStore;