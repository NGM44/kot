import { useMutation } from "react-query";
import { forgotPassword, signIn, signUp } from "../api/auth";
import { handleEventForTracking } from "../analytics";

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

export function useCaptableSignIn() {
  return useMutation({
    mutationKey: "captableSignIn",
    mutationFn: signIn,
    onSuccess: () => {
      handleEventForTracking({
        eventName: "captableSignIn",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "captableSignIn",
        success: false,
        eventType: "API",
      });
    },
  });
}

export function useCaptableSignUp() {
  return useMutation({
    mutationKey: "submitSignUp",
    mutationFn: signUp,
    onSuccess: () => {
      handleEventForTracking({
        eventName: "submitSignUp",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "submitSignUp",
        success: false,
        eventType: "API",
      });
    },
  });
}
