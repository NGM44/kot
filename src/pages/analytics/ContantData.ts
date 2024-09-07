// // import { IWeatherData } from "../../types/device";

import { IWeatherData } from "../../types/device";

// // type TimePeriod = "1 Day" | "7 Days" | "30 Days" | "60 Days" | "90 Days";
// // type TimeGap = "1 hour" | "2 hour" | "6 hour" | "12 hour" | "24 hour";

// // export function generateSensorData(timePeriod: TimePeriod, timeGap: TimeGap,data: IWeatherData[]): IWeatherData[] {
// //     // const data: SensorData[] = [];
// //     const data1 =data.splice(0,100);
// //     console.log(data1);
// //     return data1;
// //     const endDate = new Date();
// //     const daysToSubtract = {
// //         "1 Day": 1,
// //         "7 Days": 7,
// //         "30 Days": 30,
// //         "60 Days": 60,
// //         "90 Days": 90
// //     }[timePeriod];

// //     const hoursGap = {
// //         "1 hour": 1,
// //         "2 hour": 2,
// //         "6 hour": 6,
// //         "12 hour": 12,
// //         "24 hour": 24
// //     }[timeGap];

// //     const startDate = new Date(endDate);
// //     startDate.setDate(startDate.getDate() - daysToSubtract);
// //     let currentDate = new Date(startDate);

// //     // while (currentDate <= endDate) {

// //     //     // const temperature = Number((Math.random() * 10 + 20).toFixed(2));
// //     //     // const humidity = Number((Math.random() * 30 + 40).toFixed(2));

// //     //     const dataPoint: SensorData = {
// //     //         temperature,
// //     //         humidity,
// //     //         dateString: currentDate.toDateString() + ' ' + currentDate.toTimeString().split(' ')[0]
// //     //     };

// //     //     data.push(dataPoint);
// //     //     currentDate.setHours(currentDate.getHours() + hoursGap);
// //     // }

// //     return data;
// // }

// import { parse, format, addDays, addHours, differenceInHours } from "date-fns";
// import { IWeatherData } from "../../types/device";

// type TimePeriod = "1 Day" | "7 Days" | "30 Days" | "60 Days" | "90 Days";
// type TimeGap = "1 hour" | "2 hour" | "6 hour" | "12 hour" | "24 hour";

// interface DataPoint {
//   temperature: number;
//   humidity: number;
//   pressure: number;
//   co2: number;
//   vocs: number;
//   light: number;
//   noise: number;
//   pm1: number;
//   pm25: number;
//   pm4: number;
//   pm10: number;
//   aiq: number;
//   gas1: number;
//   gas2: number;
//   gas3: number;
//   gas4: number;
//   gas5: number;
//   gas6: number;
//   dateString: string;
// }

// export function filterAndAggregateData(
//   timePeriod: TimePeriod,
//   timeGap: TimeGap,
//   data1: IWeatherData[]
// ): IWeatherData[] {
//   let data = data1.splice(0, 100);
//   if (data) {
//     const now = new Date();
//     const periodInDays = parseInt(timePeriod.split(" ")[0]);
//     const gapInHours = parseInt(timeGap.split(" ")[0]);

//     const startDate = new Date(
//       now.getTime() - periodInDays * 24 * 60 * 60 * 1000
//     );

//     return data.filter((point, index) => {
//       const pointDate = new Date(point.dateString);
//       const isWithinPeriod = pointDate >= startDate && pointDate <= now;
//       const isCorrectGap = index % (gapInHours * 2) === 0; // Since data points are 30 minutes apart

//       return isWithinPeriod && isCorrectGap;
//     });
//   }
//   return [];
// }

// // Example usage:
// // const filteredData = filterAndAggregateData(data, "7 Days", "6 hour");
// // console.log(filteredData);

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