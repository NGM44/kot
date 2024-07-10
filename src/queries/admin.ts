import { useMutation, useQuery } from "react-query";
import { handleEventForTracking } from "../analytics";
import {
  addClient,
  addDeviceToAdmin,
  changeDeviceState,
  getAllClients,
  getAllDevices,
  getClientDetail,
  registerDevice,
} from "../api/admin";

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
    queryKey: "get-all-devices",
    queryFn: getAllDevices,
    onSuccess: () => {
      handleEventForTracking({
        eventName: "get-all-devices",
        success: true,
        eventType: "API",
      });
    },
    onError: () => {
      handleEventForTracking({
        eventName: "get-all-devices",
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
