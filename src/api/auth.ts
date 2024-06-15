import {
  ForgotPasswordDetailModel,
  ResetPasswordDetailModel,
  ResetPostPasswordDetailModel,
  SignInDetailsModel,
  SignResponseModel,
  SignUpModel,
  SignUpResponseModel,
} from "../types/auth";
import api from "../queries/api";

export async function forgotPassword(
  forgotPasswordDetail: ForgotPasswordDetailModel
): Promise<{ message: string; data: any }> {
  return api
    .post(`v1/auth/forgotPassword`, forgotPasswordDetail)
    .then((res) => res.data);
}

export async function signIn(
  signInDetails: SignInDetailsModel
): Promise<{ message: string; data: SignResponseModel }> {
  return api.post(`v1/auth/login`, signInDetails).then((res) => res.data);
}

export async function signUp(
  signUpDetails: SignUpModel
): Promise<{ message: string; data: SignUpResponseModel }> {
  return api
    .post(`v1/auth/globalSignUp`, signUpDetails)
    .then((res) => res.data);
}

export async function resetPassword(
    resetPasswordDetail: ResetPostPasswordDetailModel
  ): Promise<{ message: string; data: any }> {
    return api.post(
      `v1/auth/resetPassword`,
      resetPasswordDetail,
      {
        headers: { authorization: resetPasswordDetail.jwt },
      }
    );
  }
  