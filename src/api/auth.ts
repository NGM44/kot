import {
  UserEmailModel,
  SignInDetailsModel,
  SignResponseModel,
  UserData,
  ResetPasswordDetailModel,
  SignUpDetailsModel,
} from "../types/auth";
import api from "../queries/api";

export type CustomResponse<T> = {
  message: string;
  data: T;
};

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

export async function changePassword(
  resetPasswordDetail: ResetPasswordDetailModel
): Promise<CustomResponse<string>> {
  return api.post(`user/changePassword`, resetPasswordDetail, {
    headers: { authorization: resetPasswordDetail.jwt },
  });
}

export async function forgotPassword(
  email: string
): Promise<CustomResponse<string>> {
  return api.post(`user/forgotPassword`, {email});
}
