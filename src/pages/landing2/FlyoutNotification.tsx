import { useState, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import * as React from "react";
import { useAuthStore } from "../../store/useAuthStore";
import LogoutModal from "../../modal/LogoutModal";
import { BellIcon } from "lucide-react";
import NotificationPopUP from "../analytics/Notification";

export function FlyoutNotification({ notifcation }: { notifcation: any }) {
  const [dialogLogout, setDialogLogout] = useState(false);
  const [show, setShown] = useState(false);
  const { setAuth, role } = useAuthStore();
  const [showDevice, setShowDevice] = useState(false);
  const contextRef = React.useRef<HTMLDivElement>(null);
  const contextRef2 = React.useRef<HTMLDivElement>(null);

  let isAdmin = role?.toUpperCase() === "ADMIN";

  return (
    <div>
      <Popover className="relative">
        {dialogLogout && (
          <LogoutModal
            isOpen={dialogLogout}
            onClose={() => {
              setDialogLogout(false);
            }}
          />
        )}
        <Transition
          show={showDevice}
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
              setShowDevice(true);
              setShown(true);
            }}
            onMouseLeave={() => {
              setShowDevice(false);
              setShown(false);
            }}
            ref={contextRef2}
            className="absolute z-20 mt-48 mr-80 flex w-screen max-w-max  right-0 "
          >
            {showDevice && (
              <NotificationPopUP
                activities={notifcation.map((ele: any) => ({
                  id: ele.id,
                  name: "ADMIN",
                  date: ele.createdAt,
                  comment: ele.notification,
                }))}
              />
            )}
          </Popover.Panel>
        </Transition>
        <Popover className="relative">
          <div>
            <Popover.Button
              onClick={() => setShown(!show)}
              onMouseEnter={() => {
                setShown(true);
              }}
              onMouseLeave={() => {
                setShown(false);
                setShowDevice(false);
              }}
              className={`-ml-1.5 flex gap-2 cursor-pointer items-center p-1 bg-white text-secondary drop-shadow-box h-11 rounded-xl`}
            >
              <button
                type="button"
                className="p-2 cursor-pointer h-11 rounded-xl text-secondary hover:text-gray-500"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon
                  className="h-5 w-5 text-secondary"
                  aria-hidden="true"
                />
              </button>
            </Popover.Button>
          </div>
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
                setShowDevice(false);
              }}
              ref={contextRef}
              className="absolute z-10 mt-5 flex w-screen max-w-max  right-0 "
            >
              {notifcation && (
                <NotificationPopUP
                  activities={notifcation.map((ele: any) => ({
                    id: ele.id,
                    name: "ADMIN",
                    date: ele.createdAt,
                    comment: ele.notification,
                  }))}
                />
              )}
            </Popover.Panel>
          </Transition>
        </Popover>
      </Popover>
    </div>
  );
}
