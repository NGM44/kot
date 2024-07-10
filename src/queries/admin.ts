import { useMutation, useQuery } from "react-query";
import { handleEventForTracking } from "../analytics";
import {
  addClient,
  addDeviceToAdmin,
  getAllClients,
  getClientDetail,
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
