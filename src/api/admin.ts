import { DeviceDetailsModel } from "../types/auth";
import { CustomResponse } from "./auth";
import api from "../queries/api";

export async function addDeviceToAdmin(
  deviceDetails: DeviceDetailsModel
): Promise<CustomResponse<any>> {
  return api.post(`user/device`, deviceDetails).then((res) => res.data);
}
