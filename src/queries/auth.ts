import { useMutation } from "react-query";
import {
  changeNewPassword,
  changePassword,
  changePasswordAuth,
  forgotPassword,
  logOutFromAllDevices,
  resetPassword,
  sendBannerMessage,
  sendMessage,
  signIn,
  signUp,
} from "../api/auth";
import { handleEventForTracking } from "../analytics";

export function useLogin() {
  return useMutation({
    mutationKey: "signIn",
    mutationFn: signIn,
    onSuccess: () => {
      handleEventForTracking({
        eventName: "signIn",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "signIn",
        success: false,
        eventType: "API",
      });
    },
  });
}
export function useChangePassword() {
  return useMutation({
    mutationKey: "changePassword",
    mutationFn: changePassword,
    onSuccess: () => {
      handleEventForTracking({
        eventName: "changePassword",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "changePassword",
        success: false,
        eventType: "API",
      });
    },
  });
}

export function useChangeNewPassword() {
  return useMutation({
    mutationKey: "changeNewPassword",
    mutationFn: changeNewPassword,
    onSuccess: () => {
      handleEventForTracking({
        eventName: "changeNewPassword",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "changeNewPassword",
        success: false,
        eventType: "API",
      });
    },
  });
}



export function useResetPassword() {
  return useMutation({
    mutationKey: "resetPassword",
    mutationFn: resetPassword,
    onSuccess: () => {
      handleEventForTracking({
        eventName: "resetPassword",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "resetPassword",
        success: false,
        eventType: "API",
      });
    },
  });
}

export function useForgotPassword() {
  return useMutation({
    mutationKey: "forgotPassword",
    mutationFn: forgotPassword,
    onSuccess: () => {
      handleEventForTracking({
        eventName: "forgotPassword",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "forgotPassword",
        success: false,
        eventType: "API",
      });
    },
  });
}

export function useSignUp() {
  return useMutation({
    mutationKey: "signUp",
    mutationFn: signUp,
    onSuccess: () => {
      handleEventForTracking({
        eventName: "signUp",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "signUp",
        success: false,
        eventType: "API",
      });
    },
  });
}

export function useSendMessage() {
  return useMutation({
    mutationKey: "sendMessage",
    mutationFn: sendMessage,
    onSuccess: () => {
      handleEventForTracking({
        eventName: "sendMessage",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "sendMessage",
        success: false,
        eventType: "API",
      });
    },
  });
}

export function useSendBannerMessage() {
  return useMutation({
    mutationKey: "sendBannerMessage",
    mutationFn: sendBannerMessage,
    onSuccess: () => {
      handleEventForTracking({
        eventName: "sendBannerMessage",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "sendBannerMessage",
        success: false,
        eventType: "API",
      });
    },
  });
}


export function useChangePasswordAuth() {
  return useMutation({
    mutationKey: "changepassword",
    mutationFn: changePasswordAuth,
    onSuccess: () => {
      handleEventForTracking({
        eventName: "change-password-auth",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "change-password-auth",
        success: false,
        eventType: "API",
      });
    },
  });
}

export function useLogoutFromAllDevices() {
  return useMutation({
    mutationKey: "logoutFromAllDevices",
    mutationFn: logOutFromAllDevices,
    onSuccess: () => {
      handleEventForTracking({
        eventName: "logout-from-all-devices",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "logout-from-all-devices",
        success: false,
        eventType: "API",
      });
    },
  });
}
