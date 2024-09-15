import { IWeatherData } from "../../types/device";

type TimePeriod = "1 Day" | "7 Days" | "30 Days" | "60 Days" | "90 Days";
type TimeGap = "1 hour" | "2 hour" | "6 hour" | "12 hour" | "24 hour";

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