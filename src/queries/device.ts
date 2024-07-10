import { useMutation } from "react-query";
import { handleEventForTracking } from "../analytics";
import { registerDevice } from "../api/device";

export function useRegisterDevice() {
  return useMutation({
    mutationKey: "registerDevice",
    mutationFn: registerDevice,
    onSuccess: () => {
      handleEventForTracking({
        eventName: "registerDevice",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "registerDevice",
        success: false,
        eventType: "API",
      });
    },
  });
}
