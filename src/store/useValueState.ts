/* eslint-disable */
import createStore from "zustand";
import { configurePersist } from "zustand-persist";


const { persist: _persist } = configurePersist({
  storage: localStorage,
  rootKey: "value",
});

const persist = _persist as any;
type TimePeriod = "1 Day" | "7 Days" | "30 Days" | "60 Days" | "90 Days";
type TimeGap = "1 hour" | "2 hour" | "6 hour" | "12 hour" | "24 hour";

interface Value {
  isRefresh?: boolean;
  deviceName?: string;
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
      gap: "1 Hour",
      deviceName: "",
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
          index: 0,
        }));
      },
    })
  )
);
