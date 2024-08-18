export interface RegisterDeviceDto {
  name: string;
  identifier: string;
  modelType: string;
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
  pm1: number;
  pm25 : number;
  pm4 : number;
  pm10 : number;
  aiq: number;
  gas1: number;
  gas2: number;
  gas3: number;
  gas4: number;
  gas5: number;
  gas6: number;
  dateString: string;
}