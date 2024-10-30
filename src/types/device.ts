export interface RegisterDeviceDto {
  name: string;
  identifier: string;
  modelType: string;
  location: string;
}

export interface ChangeDeviceModel {
  deviceId: string;
  state: EStatus;
}

export enum EStatus {
  REGISTERED = "REGISTERED",
  CONNECTED = "CONNECTED",
  ACTIVATED = "ACTIVATED",
  DEACTIVATED = "DEACTIVATED",
  BLOCKED = "BLOCKED",
  UNREGISTERED = "UNREGISTERED",
  TERMINATED = "TERMINATED",
}

export interface ConnectDeviceModel {
  deviceId: string;
  name: string;
  modelType: string;
  location: string;
  clientId: string;
}

export interface IWeatherData {
  temperature: number;
  humidity: number;
  pressure: number;
  co2: number;
  vocs: number;
  light: number;
  noise: number;
  odor: number;
  moldGrowth: number;
  pm1: number;
  pm25: number;
  pm4: number;
  pm10: number;
  aiq: number;
  gas1: number;
  gas2: number;
  gas3: number;
  gas4: number;
  gas5: number;
  gas6: number;
  dateString: string;
  productivityMeter: number;
  deviceHealth: string;
}

export interface DataValue {
  min?: number;
  max?: number;
}

export interface Data {
  [key: string]: DataValue;
}

export interface IWeatherDataRange {
  id: string;
  temperatureMin: number;
  temperatureMax: number;
  humidityMin: number;
  humidityMax: number;
  odorMin: number;
  odorMax: number;
  moldGrowthMin: number;
  moldGrowthMax: number;
  pressureMin: number;
  pressureMax: number;
  co2Min: number;
  co2Max: number;
  vocsMin: number;
  vocsMax: number;
  lightMin: number;
  lightMax: number;
  noiseMin: number;
  noiseMax: number;
  pm1Min: number;
  pm1Max: number;
  pm25Min: number;
  pm25Max: number;
  pm4Min: number;
  pm4Max: number;
  pm10Min: number;
  pm10Max: number;
  aiqMin: number;
  aiqMax: number;
  gas1Min: number;
  gas1Max: number;
  gas2Min: number;
  gas2Max: number;
  gas3Min: number;
  gas3Max: number;
  gas4Min: number;
  gas4Max: number;
  gas5Min: number;
  gas5Max: number;
  gas6Min: number;
  gas6Max: number;
  deviceId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ReportRequestDto {
  deviceId: string;
  metrics: string[];
  to: string;
  from: string;
}

export interface SendEmailDto {
  subject: string;
  html: string;
}


export interface Device {
  id: string;
  clientId: string;
  createdAt: string;
  identifier: string;
  modelType: string;
  name: string;
  status: string; // You might want to define other possible statuses
  updatedAt: string;
}

export interface IPreference {
  id?: string;
  userId: string;
  preference: string[];
}

