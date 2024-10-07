import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useSendMessage } from "../queries/auth";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { queryClient } from "../queries/client";
import { toast } from "react-toastify";

export interface NotificationModel {
  email: string;
  message: string;
  includeMail: boolean;
}

export default function SendNotification({
  email,
  isOpen,
  onClose,
}: {
  email: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [message, setMessage] = useState("");
  const [sendMail, setSendMessage] = useState(true);

  const [showSuccess, setShowSuccess] = useState(false);
  const { mutate: sendMessage } = useSendMessage();

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

  function handleSendMessage() {
    const messageDto: NotificationModel = {
      email: email,
      message,
      includeMail: sendMail,
    };
    sendMessage(messageDto, {
      onSuccess() {
        queryClient.invalidateQueries("get-client-detail");
        queryClient.refetchQueries("get-client-detail");
        setShowSuccess(true);
      },
      onError() {
        toast("Something went wrong!", {
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
                        Notification Sent Successfully
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">
                        The notification has been sent to {email}.
                      </p>
                    </div>
                  </Transition>
                ) : (
                  <>
                    <div className="border-b border-gray-900/10 pb-2 mb-2 flex flex-row items-center justify-between">
                      <h2 className="text-base font-semibold leading-7 text-gray-900">
                        Send Notification
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
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Send to
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            disabled
                            name="email"
                            type="email"
                            value={email}
                            required
                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Message
                        </label>
                        <div className="mt-2">
                          <textarea
                            id="message"
                            name="message"
                            onChange={(e) => setMessage(e.target.value)}
                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="sendMail"
                          name="sendMail"
                          type="checkbox"
                          checked={sendMail}
                          onChange={() => setSendMessage(!sendMail)}
                          className="h-4 w-4 rounded cursor-pointer border-gray-300 text-indigo-600 border-2 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="sendMail"
                          className="ml-3 block text-sm cursor-pointer leading-6 text-gray-900"
                        >
                          Send Mail
                        </label>
                      </div>
                      <div>
                        <button
                          type="submit"
                          onClick={handleSendMessage}
                          className="flex w-full cursor-pointer justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Send Notification
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
