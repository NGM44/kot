import { useMutation } from "react-query";
import { handleEventForTracking } from "../analytics";
import { addDeviceToAdmin } from "../api/admin";
export function useAddDeviceToClient() {
    return useMutation({
      mutationKey: "add-device-to-client",
      mutationFn: addDeviceToAdmin,
      onSuccess: () => {
        handleEventForTracking({
          eventName: "add-device-to-client",
          success: true,
          eventType: "API",
        });
      },
      onError: () => {
        handleEventForTracking({
          eventName: "add-device-to-client",
          success: false,
          eventType: "API",
        });
      },
    });
  }