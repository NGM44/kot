import { useMutation } from "react-query";
import { signIn } from "../api/auth";
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
