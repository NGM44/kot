import { Icon } from "@iconify/react";
import { useEffect, useState, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowLeftOnRectangleIcon,
  ArrowsRightLeftIcon,
  ChevronDownIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import { useLocation, useMatch, useNavigate } from "react-router";
import * as React from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { useGetUserDevices } from "../../queries/admin";
import { HStack, VStack } from "../../component/utils";
import Avatar from "./Avatar";
import LogoutModal from "../../modal/LogoutModal";
import { IDeviceModel } from "../user/CompanyPage";
import { globalFilter } from "../../utils/string";
import useMqttStore from "../../store/useMqttStore";
import { useValueStore } from "../../store/useValueState";
import { Device } from "../new/DeviceSelection";
import { topicPrefix } from "../../constant";
import { HandHelping, Settings } from "lucide-react";

export function FlyoutProfile() {
  const [dialogLogout, setDialogLogout] = useState(false);
  const [show, setShown] = useState(false);

  const { role } = useAuthStore();
  const [showDevice, setShowDevice] = useState(false);
  let isAdmin = role?.toUpperCase() === "ADMIN";

  const navigate = useNavigate();
  const { data: user } = useGetUserDevices();

  const [searchInput, setSearchInput] = useState("");

  const contextRef = React.useRef<HTMLDivElement>(null);
  const contextRef2 = React.useRef<HTMLDivElement>(null);

  const routes = isAdmin
    ? [
        {
          name: "Profile",
          onClick: () => {
            navigate("/profile");
            setShown(false);
            setShowDevice(false);
          },
          icon: UserCircleIcon,
        },

        {
          name: "Log Out",
          onClick: () => {
            setDialogLogout(true);
            setShown(false);
            setShowDevice(false);
          },
          icon: ArrowLeftOnRectangleIcon,
        },
      ]
    : [
        {
          name: "Profile",
          onClick: () => {
            navigate("/profile");
            setShown(false);
            setShowDevice(false);
          },
          icon: UserCircleIcon,
        },
        {
          name: "Device setting",
          onClick: () => {
            navigate("/setting");
            setShown(false);
            setShowDevice(false);
          },
          icon: Settings,
        },
        {
          name: "Switch Device",
          onClick: () => {},
          icon: ArrowsRightLeftIcon,
        },
        {
          name: "Support",
          onClick: () => {
            navigate("/support");
            setShown(false);
            setShowDevice(false);
          },
          icon: HandHelping,
        },
        {
          name: "Log Out",
          onClick: () => {
            setDialogLogout(true);
            setShown(false);
            setShowDevice(false);
          },
          icon: ArrowLeftOnRectangleIcon,
        },
      ];

  const [devices, setDevices] = useState<IDeviceModel[]>([]);

  useEffect(() => {
    if (devices.length > 0) handleSelect(devices[0]);
  }, [devices]);
  useEffect(() => {
    if (user?.devices) setDevices(user?.devices);
  }, [user]);
  const devicesList = React.useMemo(() => {
    if (!devices) return [];
    const filterResult = globalFilter(devices, searchInput, [
      "name",
      "location",
    ]);
    return filterResult;
  }, [searchInput, devices]);
  const profileMatch = useMatch(`/${"/user/profile".split("/")[1]}/*`);
  const { pathname } = useLocation();
  const { subscribeTopic } = useMqttStore();
  const { deviceName, setValue } = useValueStore();

  const handleSelect = (selectedDevice: Device) => {
    subscribeTopic(`${topicPrefix}/${selectedDevice.id.toString()}`);
    setValue({ deviceName: selectedDevice.name, deviceId: selectedDevice.id });
    setShown(false);
    setShowDevice(false);
  };
  return (
    <div>
      {false ? (
        <div className="items-center px-6 py-2">
          <p className="text-sm animate-pulse font-medium">Switching...</p>
        </div>
      ) : (
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
                <div className="bg-white h-72 overflow-y-scroll border divide-y w-full divide-gray-100 rounded dropdown-menu ">
                  <HStack className="sticky top-0 border rounded-b-lg border-borderColor items-center rounded justify-start bg-slate-light   text-slate-dark">
                    <Icon icon="fe:search" width="24" />
                    <input
                      type="text"
                      value={searchInput}
                      className="mt-1 py-2 px-2 bg-transparent  border block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Search Devices..."
                      onChange={(e: any) => setSearchInput(e.target.value)}
                    />
                  </HStack>
                  {devicesList.map((device: IDeviceModel, index) => (
                    <li
                      onMouseDown={(e) => {
                        e.preventDefault();
                        handleSelect(device);
                      }}
                      key={device.id}
                      className="block px-4 py-2 hover:bg-gray-100 w-full"
                    >
                      <p className="items-center justify-between w-64">
                        {device.location !== ""
                          ? `${device.name} (${device.location})`
                          : device.name}
                      </p>
                    </li>
                  ))}
                  {devicesList.length === 0 ? (
                    <ul className="bg-white rounded shadow ">
                      <li className="block px-4 py-2 hover:bg-gray-100">
                        No Device Available
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </div>
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
                className={`-ml-1.5 flex gap-2 cursor-pointer items-center p-1  ${
                  "/profile" !== pathname
                    ? "bg-white text-secondary"
                    : "bg-secondary text-white"
                } drop-shadow-box h-11 rounded-xl`}

                // className="inline-flex items-center gap-x-1 text-sm py-2 bg-white font-semibold leading-6 text-gray-900 "
              >
                <Avatar
                  isDark={"/profile" !== pathname}
                  name={user?.name || ""}
                />
                <p className="w-24 text-sm  whitespace-nowrap text-ellipsis overflow-clip">
                  {deviceName}
                </p>
                <span className="hidden lg:flex lg:items-center">
                  <ChevronDownIcon
                    className="ml-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
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
                <div className="w-screen max-w-xs flex-auto overflow-hidden rounded-lg bg-white text-sm leading-6 shadow-lg">
                  <div className="divide-x divide-gray-900/5 bg-gray-50">
                    <div className="group relative flex gap-x-2 rounded-lg p-4 hover:bg-gray-50">
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <Avatar name={user?.name || ""} />
                      </div>
                      <VStack className="w-full">
                        <HStack className="justify-between items-center w-full">
                          <p className="font-semibold text-gray-900 flex-1">
                            {user?.name}

                            <span className="absolute inset-0" />
                          </p>

                          <p className="ml-1 text-sm text-gray-500 text-ellipsis overflow-clip">
                            {role}
                          </p>
                        </HStack>

                        <p className="text-gray-600 whitespace-nowrap">
                          {user?.email}
                        </p>
                        <p className="text-sm text-gray-500 text-ellipsis overflow-clip"></p>
                      </VStack>
                    </div>
                  </div>

                  <div className="p-2  cursor-pointer">
                    {routes.map((item) => (
                      <div
                        key={item.name}
                        onClick={() =>
                          item.name === "Switch Device"
                            ? setShowDevice(!showDevice)
                            : item.onClick()
                        }
                        className="group relative flex gap-x-4 rounded-lg p-2 hover:bg-gray-50 items-center"
                      >
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className={`h-6 w-6 text-gray-600 group-hover:text-primary ${
                              profileMatch && item.name === "Profile"
                                ? "text-primary"
                                : ""
                            }`}
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <p
                            className={`font-semibold text-gray-900 group-hover:text-primary ${
                              profileMatch && item.name === "Profile"
                                ? "text-primary"
                                : ""
                            }`}
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover>
      )}
    </div>
  );
}
