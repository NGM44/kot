import { useMutation, useQuery } from "react-query";
import { handleEventForTracking } from "../analytics";
import {
  addClient,
  changeDeviceState,
  connectDeviceWithClient,
  deleteUser,
  editGasMapping,
  generateCredentials,
  getAllClients,
  getAllDevices,
  getClientDetail,
  getLiveWeatherData,
  getUserDevices,
  getWeatherData,
  registerDevice,
} from "../api/admin";

export function useAddDeviceToClient() {
  return useMutation({
    mutationKey: "add-device-to-client",
    mutationFn: connectDeviceWithClient,
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

export function useConnectDeviceWithClient() {
  return useMutation({
    mutationKey: "connect-device-with-client",
    mutationFn: connectDeviceWithClient,
    onSuccess: () => {
      handleEventForTracking({
        eventName: "connect-device-with-client",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "connect-device-with-client",
        success: false,
        eventType: "API",
      });
    },
  });
}



export function useAddClient() {
  return useMutation({
    mutationKey: "add-client",
    mutationFn: addClient,
    onSuccess: () => {
      handleEventForTracking({
        eventName: "add-client",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "add-client",
        success: false,
        eventType: "API",
      });
    },
  });
}

export function useGetAllClients() {
  return useQuery({
    queryKey: "get-all-clients",
    queryFn: getAllClients,
    onSuccess: () => {
      handleEventForTracking({
        eventName: "get-all-clients",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "get-all-clients",
        success: false,
        eventType: "API",
      });
    },
  });
}

export function useGetAllDevices() {
  return useQuery({
    queryKey: "get-all-devices-client",
    queryFn: getAllDevices,
    onSuccess: () => {
      handleEventForTracking({
        eventName: "get-all-devices-client",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "get-all-devices-client",
        success: false,
        eventType: "API",
      });
    },
  });
}
export function useGetUserDevices() {
  return useQuery({
    queryKey: "get-all-devices",
    queryFn: getUserDevices,
    onSuccess: () => {
      handleEventForTracking({
        eventName: "get-user-devices",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "get-user-devices",
        success: false,
        eventType: "API",
      });
    },
  });
}

export function useGetClientsDetail(id: string) {
  return useQuery({
    queryKey: ["get-client-detail", id],
    queryFn: getClientDetail,
    onSuccess: () => {
      handleEventForTracking({
        eventName: "get-client-detail",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "get-client-detail",
        success: false,
        eventType: "API",
      });
    },
  });
}

export function useEditGasMappingDetails(){
  return useMutation({
    mutationKey: "edit-gas-mapping",
    mutationFn: editGasMapping,
    onSuccess:() => {
      handleEventForTracking({
        eventName: "edit-gas-mapping",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "delete-user",
        success: false,
        eventType: "API",
      });
    },
  })
}

export function useDeleteUser() {
  return useMutation({
    mutationKey: "delete-user",
    mutationFn: deleteUser,
    onSuccess: () => {
      handleEventForTracking({
        eventName: "delete-user",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "delete-user",
        success: false,
        eventType: "API",
      });
    },
  });
}
export function useGenerateCredentials() {
  return useMutation({
    mutationKey: "generate-credentials",
    mutationFn: generateCredentials,
    onSuccess: () => {
      handleEventForTracking({
        eventName: "generate-credentials",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "generate-credentials",
        success: false,
        eventType: "API",
      });
    },
  });
}

export function useRegisterDevice() {
  return useMutation({
    mutationKey: "registerDevice",
    mutationFn: registerDevice,
    onSuccess: () => {
      handleEventForTracking({
        eventName: "register-device",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "register-device",
        success: false,
        eventType: "API",
      });
    },
  });
}

export function useChangeDeviceState() {
  return useMutation({
    mutationKey: "change-device-state",
    mutationFn: changeDeviceState,
    onSuccess: () => {
      handleEventForTracking({
        eventName: "change-device-state",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "change-device-state",
        success: false,
        eventType: "API",
      });
    },
  });
}

export function useWeatherData(deviceId: string) {
  return useQuery({
    queryKey: ["get-weather-data", deviceId],
    queryFn: getWeatherData,
    staleTime: 10000000,
    cacheTime: 10000000,
    onSuccess: () => {
      handleEventForTracking({
        eventName: "get-weather-data",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "get-weather-data",
        success: false,
        eventType: "API",
      });
    },
  });
}

export function useGetLiveData(enabled: boolean,deviceId?: string){
  return useQuery({
    queryKey: ["get-live-weather-data", deviceId],
    queryFn: getLiveWeatherData,
    enabled,
    onSuccess: () => {
      handleEventForTracking({
        eventName: "get-live-weather-data",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "get-live-weather-data",
        success: false,
        eventType: "API",
      });
    },
  });
}