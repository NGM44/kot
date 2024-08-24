export function generateSensorData(numReadings = 5) {
    const sensorData = [];
  
    for (let i = 0; i < numReadings; i++) {
      const now = new Date();
      // now.setMinutes(now.getMinutes() - i * 30); // Subtract 30 minutes for each previous reading
  
      const reading = {
        temperature: Math.floor(Math.random() * (35 - 25) + 25),
        humidity: Math.floor(Math.random() * (100 - 80) + 80),
        pressure: Math.floor(Math.random() * (40 - 30) + 30),
        co2: Math.floor(Math.random() * (50 - 30) + 30),
        vocs: Math.floor(Math.random() * (40 - 30) + 30),
        light: Math.floor(Math.random() * (70 - 50) + 50),
        noise: Math.floor(Math.random() * (30 - 20) + 20),
        pm1: Math.floor(Math.random() * (70 - 55) + 55),
        pm25: Math.floor(Math.random() * (50 - 40) + 40),
        pm4: Math.floor(Math.random() * (40 - 30) + 30),
        pm10: Math.floor(Math.random() * (60 - 50) + 50),
        aiq: Math.floor(Math.random() * (50 - 40) + 40),
        gas1: Math.floor(Math.random() * (30 - 20) + 20),
        gas2: Math.floor(Math.random() * (40 - 30) + 30),
        gas3: Math.floor(Math.random() * (30 - 20) + 20),
        gas4: Math.floor(Math.random() * (30 - 20) + 20),
        gas5: Math.floor(Math.random() * (50 - 40) + 40),
        gas6: Math.floor(Math.random() * (60 - 50) + 50),
        dateString: `${now.toLocaleDateString('en-US', { day: '2-digit', month: 'short',year: 'numeric' })} | ${now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, second: '2-digit' })}`,
      };
  
      sensorData.push(reading);
    }
  
    return sensorData;
  }
  