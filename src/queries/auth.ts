import { useMutation } from "react-query";
import { changePassword, forgotPassword, signIn, signUp } from "../api/auth";
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
