export interface SensorData {
    temperature: number;
    humidity: number;
    dateString: string;
}

type TimePeriod = "1 Day" | "7 Days" | "30 Days" | "60 Days" | "90 Days";
type TimeGap = "1 hour" | "2 hour" | "6 hour" | "12 hour" | "24 hour";

export function generateSensorData(timePeriod: TimePeriod, timeGap: TimeGap): SensorData[] {
    const data: SensorData[] = [];
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
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        const temperature = Number((Math.random() * 10 + 20).toFixed(2));
        const humidity = Number((Math.random() * 30 + 40).toFixed(2));

        const dataPoint: SensorData = {
            temperature,
            humidity,
            dateString: currentDate.toDateString() + ' ' + currentDate.toTimeString().split(' ')[0]
        };

        data.push(dataPoint);
        currentDate.setHours(currentDate.getHours() + hoursGap);
    }

    return data;
}

// // Example usage
// const timePeriods: TimePeriod[] = ["1 Day", "7 Days", "30 Days", "60 Days", "90 Days"];
// const timeGaps: TimeGap[] = ["1 hour", "2 hour", "6 hour", "12 hour", "24 hour"];

// timePeriods.forEach(period => {
//     timeGaps.forEach(gap => {
//         const sensorData = generateSensorData(period, gap);
//         console.log(`Data for ${period} with ${gap} gap:`);
//         console.log(`Number of data points: ${sensorData.length}`);
//         console.log("First data point:", sensorData[0]);
//         console.log("Last data point:", sensorData[sensorData.length - 1]);
//         console.log("\n");
//     });
// });