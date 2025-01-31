
import api from "../queries/api";
import { QueryFunctionContext } from "react-query";
import {
  ICompanyModel,
  IDeviceModel,
  IGasMapping,
  UserModel,
} from "../pages/user/CompanyPage";
import {
  ChangeDeviceModel,
  ConnectDeviceModel,
  IPreference,
  IWeatherData,
  IWeatherDataRange,
  RegisterDeviceDto,
  ReportRequestDto,
  SendEmailDto,
} from "../types/device";
import { ClientDetailModel, ClientModel, CustomResponse } from "../types/user";

export async function addClient(
  clientDetail: ClientModel
): Promise<CustomResponse<any>> {
  return api.post(`/client/create`, clientDetail).then((res) => res.data);
}

export async function editClient(
  clientDetail: ClientModel
): Promise<CustomResponse<any>> {
  return api.post(`/client/update`, clientDetail).then((res) => res.data);
}

export async function getAllClients(): Promise<ClientDetailModel[]> {
  return api.get(`/client/all/details`).then((res) => res.data.data);
}

export async function getAllDevices(): Promise<IDeviceModel[]> {
  return api.get(`/device/all`).then((res) => res.data.data);
}

export async function getDevicesRange(
  context: QueryFunctionContext
): Promise<IWeatherDataRange> {
  const id = context.queryKey[1];
  return api.get(`/device/range?id=${id}`).then((res) => res.data.data);
}

export async function getUserDevices(): Promise<UserModel> {
  return api.get(`/device/user`).then((res) => res.data.data);
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
  return api
    .post(`/device/register`, registerDeviceDto)
    .then((res) => res.data);
}

export async function deleteUser(id: string): Promise<CustomResponse<any>> {
  return api.delete(`/user/${id}`).then((res) => res.data);
}

export async function editGasMapping(
  gasMapping: IGasMapping
): Promise<CustomResponse<string>> {
  return api.put(`/client/mapping`, gasMapping).then((res) => res.data);
}

export async function updateDeviceRange(
  whetherData: IWeatherDataRange
): Promise<CustomResponse<string>> {
  return api.put(`/device/range`, whetherData).then((res) => res.data);
}

export async function getUserPreference(
  context: QueryFunctionContext
): Promise<IPreference> {
  const id = context.queryKey[1];
  return api.get(`/user/preference?id=${id}`).then((res) => res.data.data);
}

export async function updatePreference(
  whetherData: IPreference
): Promise<CustomResponse<string>> {
  return api.put(`/user/preference`, whetherData).then((res) => res.data);
}

export async function generateCredentials(email: string): Promise<any> {
  return api
    .post(`/user/generateCredentials`, { email })
    .then((res) => res.data);
}

export async function connectDeviceWithClient(
  connectDevice: ConnectDeviceModel
): Promise<any> {
  return api
    .post(`/device/connectDeviceWithClient`, connectDevice)
    .then((res) => res.data);
}

export async function changeDeviceState(
  deviceModel: ChangeDeviceModel
): Promise<CustomResponse<any>> {
  return api.put(`/device/updateStatus`, deviceModel).then((res) => res.data);
}

export async function getWeatherData(
  context: QueryFunctionContext
): Promise<IWeatherData[]> {
  const deviceId = context.queryKey[1] as string;
  const metric = context.queryKey[2] as string;
  const days = context.queryKey[3] as number;
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - days);
  return api
    .get(
      `/weather/data/${deviceId}/${startDate.toISOString()}/${endDate.toISOString()}/${metric}`
    )
    .then((res) => res.data.data);
}

export async function getLiveWeatherData(
  context: QueryFunctionContext
): Promise<IWeatherData> {
  const deviceId = context.queryKey[1] as string;
  return api.get(`/weather/latest/${deviceId}`).then((res) => res.data.data);
}

export async function generateReport(
  reportReqDto: ReportRequestDto
): Promise<string> {
  return api.post(`/weather/report`, reportReqDto).then((res) => res.data.data);
}

export async function sendEmail(sendEmailDto: SendEmailDto) {
  return api.post("/email/sendEmail", sendEmailDto);
}
