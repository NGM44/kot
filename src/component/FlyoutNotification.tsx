import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/20/solid";
import NotificationList from "./Notification";

export default function FlyoutNotification() {
  const [show, setShown] = useState(false);
  return (
    <Popover className="relative">
      <Popover.Button
        onMouseEnter={() => {
          setShown(true);
        }}
        onMouseLeave={() => {
          setShown(false);
        }}
        className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
      >
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </Popover.Button>

      <Transition
        show={show}
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel
          onMouseEnter={() => {
            setShown(true);
          }}
          onMouseLeave={() => {
            setShown(false);
          }}
          className="absolute z-10 mt-5 flex w-screen max-w-max  -right-8 "
        >
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg">
            <div className="bg-gray-50">
              <a
                key={"Notifications"}
                href={"Notifications"}
                className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
              >
                {"Notifications"}
              </a>
            </div>
            <div className="p-4  cursor-pointer">
              <NotificationList />
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
