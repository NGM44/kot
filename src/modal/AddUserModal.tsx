import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { SignUpDetailsModel } from "../types/auth";
import { useSignUp } from "../queries/auth";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { queryClient } from "../queries/client";
import { toast } from "react-toastify";

export default function AddUserModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { id } = useParams();

  const [showSuccess, setShowSuccess] = useState(false);
  const { mutate: signUp } = useSignUp();

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

  function handleSignUp() {
    const addUserDto: SignUpDetailsModel = { email, name, clientId: id ?? "" };
    signUp(addUserDto, {
      onSuccess() {
        queryClient.invalidateQueries("get-client-detail");
        queryClient.refetchQueries("get-client-detail");
        setShowSuccess(true);
      },
      onError(err: any) {
        toast(err.response.data.errorMessage, {
          type: "error",
          autoClose: 2000,
        });
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
                        User Added Successfully
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">
                        The new user has been added to your system.
                      </p>
                    </div>
                  </Transition>
                ) : (
                  <>
                    <div className="border-b border-gray-900/10 pb-2 mb-2 flex flex-row items-center justify-between">
                      <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Add User
                      </h2>
                      <XMarkIcon
                        className="w-6 cursor-pointer h-6"
                        onClick={() => {
                          onClose();
                        }}
                      />
                    </div>
                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Name
                        </label>
                        <div className="mt-2">
                          <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          onClick={handleSignUp}
                          className="flex w-full cursor-pointer justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Add User
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
