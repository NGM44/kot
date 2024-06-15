export interface ResetPasswordDetailModel {
    emailId: string;
    id: string;
    newPassword: string;
    confirmPassword: string;
  }
  export interface ResetPostPasswordDetailModel {
    emailId: string;
    passwordNew: string;
    jwt: string;
  }
  
  export interface ForgotPasswordDetailModel {
    email: string;
    id: string;
    senderOrigin: string;
  }
  
  export interface SignInDetailsModel {
    email: string;
    password: string;
  }
  
  export interface SignResponseModel {
    id: string;
    setPassword: string;
    token: string;
  }
  
  export interface SignUpModel {
    email: string;
    password: string;
    confirmPassword: string;
    fullName: string;
  }
  
  export interface SignUpResponseModel {
    userId: bigint | string | number;
  }
  