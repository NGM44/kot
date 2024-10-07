import {
  UserEmailModel,
  SignInDetailsModel,
  SignResponseModel,
  ResetPasswordDetailModel,
  SignUpDetailsModel,
  ChangePasswordDetailModelAuth,
  LogoutFromAllDevicesModel,
} from "../types/auth";
import api from "../queries/api";
import { NotificationModel } from "../modal/SendNotification";
import { BannerMessage, CustomResponse, UserData } from "../types/user";

export async function signIn(
  signInDetails: SignInDetailsModel
): Promise<CustomResponse<SignResponseModel>> {
  return api.post(`user/login`, signInDetails).then((res) => res.data);
}

export async function signUp(
  signUpDetailsModel: SignUpDetailsModel
): Promise<CustomResponse<SignResponseModel>> {
  return api.post(`user/signUp`, signUpDetailsModel).then((res) => res.data);
}

export async function sendMessage(
  message: NotificationModel
): Promise<CustomResponse<SignResponseModel>> {
  return api.post(`user/message`, message).then((res) => res.data);
}

export async function getMessage(): Promise<any> {
  return api.get(`user/message`).then((res) => res.data.data);
}

export async function sendBannerMessage(
  message: BannerMessage
): Promise<CustomResponse<SignResponseModel>> {
  return api.put(`client/bannerMessage`, message).then((res) => res.data);
}

export async function changePasswordAuth(
  changePasswordAuth: ChangePasswordDetailModelAuth
): Promise<CustomResponse<SignResponseModel>> {
  return api
    .post(`user/changePasswordAuth`, changePasswordAuth)
    .then((res) => res.data);
}

export async function logOutFromAllDevices(
  logoutFromAllDevices: LogoutFromAllDevicesModel
): Promise<CustomResponse<SignResponseModel>> {
  return api
    .post(`user/logoutFromAllDevices`, logoutFromAllDevices)
    .then((res) => res.data);
}

export async function generateCredentials(userDetails: UserEmailModel) {
  return api
    .post("user/generateCredentials", userDetails)
    .then((res) => res.data);
}

export async function deleteUser() {
  api.delete("user/", { params: { id: "1" } }).then((res) => res.data);
}

export async function getAllUsers(): Promise<CustomResponse<UserData[]>> {
  return api.get("user/all").then((res) => res.data);
}

export async function deactiveUser(deactiveUserDetails: UserEmailModel) {
  return api.get(
    `user/deactive?email=${deactiveUserDetails.email}?deactivated=true`
  );
}

export async function activateUser(deactiveUserDetails: UserEmailModel) {
  return api.get(
    `user/deactive?email=${deactiveUserDetails.email}?deactivated=false`
  );
}

export async function resetPassword(
  resetPasswordDetail: ResetPasswordDetailModel
): Promise<CustomResponse<string>> {
  return api.post(`user/resetPassword`, resetPasswordDetail, {
    headers: { accessToken: `Bearer ${resetPasswordDetail.jwt}` },
  });
}

export async function changePassword(
  resetPasswordDetail: ResetPasswordDetailModel
): Promise<CustomResponse<string>> {
  return api.post(`user/changePassword`, resetPasswordDetail);
}

export async function changeNewPassword(
  resetPasswordDetail: ResetPasswordDetailModel
): Promise<CustomResponse<string>> {
  return api.post(`user/changeNewPassword`, resetPasswordDetail);
}

export async function forgotPassword(
  email: string
): Promise<CustomResponse<string>> {
  return api.post(`user/forgotPassword`, { email });
}
