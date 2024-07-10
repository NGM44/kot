import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { DeviceDetailsModel } from "../types/auth";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useAddDeviceToClient, useGetAllDevices } from "../queries/admin";
import { ConnectDeviceModel } from "../types/device";
import { queryClient } from "../queries/client";
import { useParams } from "react-router-dom";

export default function AddDeviceModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [deviceName, setDeviceName] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const { mutate: addDeviceToClient } = useAddDeviceToClient();
  const { id } = useParams();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showSuccess) {
      timer = setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showSuccess, onClose]);

  const { data: deviceDetails } = useGetAllDevices();

  function handleAddDevice() {
    const deviceDetails: ConnectDeviceModel = {
      deviceId,
      modelType: deviceType,
      name: deviceName,
      clientId: id ?? "",
    };
    addDeviceToClient(deviceDetails, {
      onSuccess() {
        setShowSuccess(true);
        queryClient.invalidateQueries("get-client-detail");
      },
    });
  }

  return (
    <Transition show={isOpen}>
      <Dialog className="relative z-50" onClose={onClose}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                {showSuccess ? (
                  <Transition
                    show={showSuccess}
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <CheckIcon
                          className="h-6 w-6 text-green-600 animate-pulse"
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="mt-2 text-lg font-medium text-gray-900">
                        Device Added Successfully
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">
                        The new device has been added to your system.
                      </p>
                    </div>
                  </Transition>
                ) : (
                  <>
                    <div className="sm:mx-auto sm:w-full sm:max-w-md pb-4">
                      <h2 className="text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Add Device
                      </h2>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Device Name
                        </label>
                        <div className="mt-2">
                          <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={(e) => setDeviceName(e.target.value)}
                            required
                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="deviceType"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Device Type
                        </label>
                        <select
                          id="deviceType"
                          name="deviceType"
                          autoComplete="off"
                          onChange={(e) => setDeviceType(e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option>--Select Device Type---</option>
                          {deviceDetails?.map((options) => (
                            <option>{options.modelType}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="deviceType"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Device ID
                        </label>
                        <select
                          id="deviceId"
                          name="deviceId"
                          autoComplete="off"
                          onChange={(e) => setDeviceId(e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option>--Select Device ID---</option>
                          {deviceDetails?.map((options) => (
                            <option>{options.id}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <button
                          type="submit"
                          onClick={handleAddDevice}
                          className="flex w-full justify-center rounded-md bg-primary-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Add Device
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
