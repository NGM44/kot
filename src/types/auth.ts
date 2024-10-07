export interface ResetPasswordDetailModel {
  newPassword: string;
  jwt: string;
}

export interface ChangePasswordDetailModel {
  newPassword: string;
  currentPassword: string;
}

export interface SignInDetailsModel {
  email: string;
  password: string;
}

export interface SignUpDetailsModel {
  email: string;
  name: string;
  clientId: string;
}

export interface ChangePasswordDetailModelAuth {
  password: string;
  id: string;
}

export interface LogoutFromAllDevicesModel {
  id: string;
}


export interface UserEmailModel {
  email: string;
}

export interface SignResponseModel {
  id: string;
  token: string;
}
