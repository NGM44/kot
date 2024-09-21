import { IWeatherData } from "../../types/device";

export type TimePeriod = "1 Day" | "7 Days" | "30 Days" | "60 Days" | "90 Days";
export type TimeGap = "5 min" | "10 min" | "15 min" | "30 min"| "1 hour" | "2 hour" | "6 hour" | "12 hour" | "24 hour";
export interface GapModel {
    id: string;
    name: TimeGap;
  }
  
const timeGaps: GapModel[] = [
    {id: "1", name: "5 min"},
    {id: "2", name: "10 min"},
    {id: "3", name: "15 min"},
    {id: "4", name: "30 min"},
    { id: "6", name: "1 hour" },
    { id: "7", name: "2 hour" },
    { id: "8", name: "6 hour" },
    { id: "9", name: "12 hour" },
    { id: "10", name: "24 hour" },
  ];
  
  export const calculateTimeGaps = (timePeriod: TimePeriod): GapModel[] => {
    switch (timePeriod) {
      case "1 Day":
        return timeGaps.filter(gap => ["5 min", "10 min", "15 min","30 min", "1 hour", "2 hour"].includes(gap.name));
      case "7 Days":
        return timeGaps.filter(gap => ["1 hour","2 hour", "6 hour", "12 hour"].includes(gap.name));
      case "30 Days":
        return timeGaps.filter(gap => ["6 hour", "12 hour", "24 hour"].includes(gap.name));
      case "60 Days":
      case "90 Days":
        return timeGaps.filter(gap => ["12 hour", "24 hour"].includes(gap.name));
      default:
        return [];
    }
  };

  export interface TimeModel {
    id: string;
    name: TimePeriod;
  }
  
  export const timePeriods: TimeModel[] = [
    { id: "0", name: "1 Day" },
    { id: "1", name: "7 Days" },
    { id: "2", name: "30 Days" },
    { id: "3", name: "60 Days" },
    { id: "4", name: "90 Days" },
  ];

export function filterWeatherData(weatherData: IWeatherData[], timePeriod: TimePeriod, timeGap: TimeGap): IWeatherData[] {
    const filteredData: IWeatherData[] = [];
    const endDate = new Date();

    const daysToSubtract = {
        "1 Day": 1,
        "7 Days": 7,
        "30 Days": 30,
        "60 Days": 60,
        "90 Days": 90
    }[timePeriod];

    const hoursGap = {
        "5 min": 1/12,
        "10 min": 1/6,
        "15 min": 1/4,
        "30 min": 1/2,
        "1 hour": 1,
        "2 hour": 2,
        "6 hour": 6,
        "12 hour": 12,
        "24 hour": 24
    }[timeGap];

    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);

    let lastDateIncluded = new Date(startDate);

    for (const dataPoint of weatherData) {
        const dataDate = new Date(dataPoint.dateString);

        if (dataDate >= startDate && dataDate <= endDate) {
            if (dataDate.getTime() - lastDateIncluded.getTime() >= hoursGap * 60 * 60 * 1000) {
                filteredData.push(dataPoint);
                lastDateIncluded = dataDate; // Update the last included date
            }
        }
    }

    return filteredData;
}