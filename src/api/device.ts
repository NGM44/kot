import api from "../queries/api";
import { CustomResponse } from "./auth";
import { RegisterDeviceDto } from "../types/device";


export async function registerDevice(
  registerDeviceDto: RegisterDeviceDto
): Promise<CustomResponse<any>> {
  return api.post(`device/register`, registerDeviceDto).then((res) => res.data);
}