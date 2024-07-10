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
