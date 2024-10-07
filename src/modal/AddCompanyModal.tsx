import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useAddClient } from "../queries/admin";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { UserCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { queryClient } from "../queries/client";
import { ClientModel } from "../types/user";

export default function AddCompanyModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const [clientModel, setClientModel] = useState<ClientModel>({
    name: "",
    logo: "",
    address: "",
    email: "",
    phone: "",
    website: "",
  });
  const { mutate: addClient } = useAddClient();
  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setClientModel({
          ...clientModel,
          logo: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

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
                <>
                  <div className="space-y-2">
                    <div className="border-b border-gray-900/10 pb-2 flex flex-row items-center justify-between">
                      <h2 className="text-base font-semibold leading-7 text-gray-900">
                        Add Company
                      </h2>
                      <XMarkIcon
                        className="w-6 cursor-pointer h-6"
                        onClick={() => {
                          onClose();
                        }}
                      />
                    </div>

                    <div className="border-b border-gray-900/10">
                      <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Company Name
                          </label>
                          <div className="mt-2">
                            <input
                              id="name"
                              name="name"
                              type="name"
                              autoComplete="off"
                              onChange={(e) => {
                                setClientModel({
                                  ...clientModel,
                                  name: e.target.value,
                                });
                              }}
                              className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        {/* <div className="flex flex-row sm:col-span-2"> */}
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="email"
                            className="block text-sm px-2 font-medium leading-6 text-gray-900"
                          >
                            Email address
                          </label>
                          <div className="mt-2">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              onChange={(e) => {
                                setClientModel({
                                  ...clientModel,
                                  email: e.target.value,
                                });
                              }}
                              autoComplete="email"
                              className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="contactnumber"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Contact Number
                          </label>
                          <div className="mt-2">
                            <input
                              id="contactnumber"
                              name="contactnumber"
                              type="number"
                              onChange={(e) => {
                                setClientModel({
                                  ...clientModel,
                                  phone: e.target.value,
                                });
                              }}
                              autoComplete="off"
                              className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        {/* </div> */}

                        <div className="sm:col-span-4">
                          <label
                            htmlFor="website"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Company Website
                          </label>
                          <div className="mt-2">
                            <input
                              id="website"
                              onChange={(e) => {
                                setClientModel({
                                  ...clientModel,
                                  website: e.target.value,
                                });
                              }}
                              name="website"
                              type="website"
                              autoComplete="website"
                              className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="col-span-full">
                          <label
                            htmlFor="about"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Address
                          </label>
                          <div className="mt-2">
                            <textarea
                              id="address"
                              name="address"
                              onChange={(e) => {
                                setClientModel({
                                  ...clientModel,
                                  address: e.target.value,
                                });
                              }}
                              rows={3}
                              className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                          <div className="col-span-full">
                            <label
                              htmlFor="logo"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Company Logo
                            </label>
                            <div className="mt-2 flex items-center gap-x-3">
                              {clientModel.logo ? (
                                <img className="w-12 h-12 rounded-full" src={clientModel.logo} alt="client-logo" />
                              ) : (
                                <UserCircleIcon
                                  aria-hidden="true"
                                  className="h-12 w-12 text-gray-300"
                                />
                              )}
                              <button
                                type="button"
                                onClick={handleButtonClick}
                                className="rounded-md cursor-pointer bg-white cursor-pointer px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                              >
                                <input
                                  ref={inputFileRef}
                                  className="hidden"
                                  type="file"
                                  accept="image/*"
                                  onChange={handleLogoChange}
                                />
                                Change
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                      type="button"
                      onClick={onClose}
                      className="text-sm cursor-pointer font-semibold leading-6 text-gray-900"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        addClient(clientModel, {
                          onSuccess: (data) => {
                            onClose();
                            queryClient.invalidateQueries("get-all-clients");
                            toast("Client Added Successfully", {
                              type: "success",
                              autoClose: 2000,
                            });
                          },
                          onError: (data: any) => {
                            toast(data?.error ?? "Something went wrong!", {
                              type: "error",
                              autoClose: 5000,
                            });
                          },
                        });
                      }}
                      className="rounded-md cursor-pointer bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Save
                    </button>
                  </div>
                </>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
