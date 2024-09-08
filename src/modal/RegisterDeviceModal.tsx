import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useState } from "react";
import { useRegisterDevice } from "../queries/admin";
import { toast } from "react-toastify";
import { queryClient } from "../queries/client";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function RegisterDeviceModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [modelType, setModelType] = useState("");
  const [location, setLocation] = useState("");

  const [identifier, setIdentifier] = useState("");
  const { mutate: registerDevice } = useRegisterDevice();
  function handleRegisterDevice() {
    registerDevice(
      { identifier, modelType, name,location },
      {
        onSuccess: () => {
          toast("Registered successfully", {
            autoClose: 2000,
            type: "success",
          });
          queryClient.invalidateQueries("get-all-devices-client");
          onClose();
        },
      }
    );
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
                <div className="sm:mx-auto sm:w-full sm:max-w-md pb-4 flex flex-row items-center justify-between">
                  <h2 className="text-left text-2xl -ml-2 font-bold leading-9 tracking-tight text-gray-900">
                    Add Device
                  </h2>
                  <XMarkIcon className="w-6 h-6" onClick={()=>{
                    onClose()
                  }} />
                </div>
                <div className="space-y-6">
                  <div className="flex flex-col">
                    <div>Device Name</div>
                    <input
                      type="text"
                      className=" mt-2 block px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    <div>Device Identifier</div>
                    <input
                      type="text"
                      className=" mt-2 block px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setIdentifier(e.target.value)}
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    <div>Model type</div>
                    <input
                      type="text"
                      className=" mt-2 block px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setModelType(e.target.value)}
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    <div>Device location</div>
                    <input
                      type="text"
                      className=" mt-2 block px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setLocation(e.target.value)}
                    ></input>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    onClick={handleRegisterDevice}
                    className="mt-6 flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Confirm
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
