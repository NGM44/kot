/* eslint-disable */
import createStore from "zustand";
import { configurePersist } from "zustand-persist";
import { TimePeriod, TimeGap } from "../pages/analytics/ContantData";


const { persist: _persist } = configurePersist({
  storage: localStorage,
  rootKey: "root",
});

const persist = _persist as any;

interface Value {
  isRefresh?: boolean;
  deviceName?: string;
  deviceId?: string;
  metric?: string;
  metricUnit?: string;
  date?: TimePeriod;
  gap?: TimeGap;
  index?: number;
}
interface ValueStore extends Value {
  setValue: (auth: Value | ((auth: Value) => Value)) => void;
  clear: () => void;
}

export const useValueStore = createStore<ValueStore>(
  persist(
    {
      key: "value",
    },
    (set: any) => ({
      isRefresh: false,
      metric: "Temperature",
      metricUnit: "°C",
      index: 0,
      gap: "1 hour",
      deviceName: "",
      deviceId: "",
      date: "1 Day",
      setValue: (auth: Value | ((auth: Value) => Value)) => {
        if (typeof auth === "function") {
          set((_state: Value) => auth(_state));
        } else {
          set((_state: Value) => auth);
        }
      },
      clear: () => {
        set((_state: Value) => ({
          isRefresh: false,
          metric: "Temperature",
          metricUnit: "°C",
          date: "1 Day",
          gap: "1 Hour",
          deviceName: "",
          deviceId: "",
          index: 0,
        }));
      },
    })
  )
);
