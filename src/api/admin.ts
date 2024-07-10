import { ClientModel, DeviceDetailsModel } from "../types/auth";
import { CustomResponse } from "./auth";
import api from "../queries/api";
import { QueryFunctionContext } from "react-query";
import { ICompanyModel, IDeviceModel } from "../pages/user/CompanyPage";
import { ChangeDeviceModel, RegisterDeviceDto } from "../types/device";

export async function addDeviceToAdmin(
  deviceDetails: DeviceDetailsModel
): Promise<CustomResponse<any>> {
  return api.post(`/user/device`, deviceDetails).then((res) => res.data);
}

export async function addClient(
  clientDetail: ClientModel
): Promise<CustomResponse<any>> {
  return api.post(`/client/create`, clientDetail).then((res) => res.data);
}

export async function getAllClients(): Promise<ClientModel[]> {
  return api.get(`/client/all/details`).then((res) => res.data.data);
}

export async function getAllDevices(): Promise<IDeviceModel[]> {
  return api.get(`/device/all`).then((res) => res.data.data);
}

export async function getClientDetail(
  context: QueryFunctionContext
): Promise<ICompanyModel> {
  const id = context.queryKey[1];
  return api.get(`/client/${id}`).then((res) => res.data.data);
}

export async function registerDevice(
  registerDeviceDto: RegisterDeviceDto
): Promise<CustomResponse<any>> {
  return api.post(`device/register`, registerDeviceDto).then((res) => res.data);
}

export async function changeDeviceState(
  deviceModel: ChangeDeviceModel
): Promise<CustomResponse<any>> {
  return api
    .put(`/device/updateStatus`, deviceModel)
    .then((res) => res.data);
}


