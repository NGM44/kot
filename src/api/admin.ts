import { ClientModel, DeviceDetailsModel } from "../types/auth";
import { CustomResponse } from "./auth";
import api from "../queries/api";
import { QueryFunctionContext } from "react-query";

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

export async function getAllClients(): Promise<CustomResponse<any>> {
  return api.get(`/client/all/details`).then((res) => res.data);
}

export async function getClientDetail(
  context: QueryFunctionContext
): Promise<CustomResponse<any>> {
  const id = context.queryKey[1];
  return api.get(`/client`, { params: { id } }).then((res) => res.data);
}
