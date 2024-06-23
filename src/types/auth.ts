export interface ResetPasswordDetailModel {
  newPassword: string;
  currentPassword: string;
}

export interface SignInDetailsModel {
  email: string;
  password: string;
}

export interface UserEmailModel {
  email: string;
}

export interface SignResponseModel {
  id: string;
  token: string;
}

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface UserData {
  id: string;
  name: string;
  email: string;
  role: Role;
}
