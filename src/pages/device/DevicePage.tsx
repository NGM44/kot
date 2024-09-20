import { useEffect, useMemo, useState } from "react";

import { classNames } from "../../utils/string";
import DeviceMenu from "./DeviceMenu";
import RegisterDeviceModal from "../../modal/RegisterDeviceModal";
import { useChangeDeviceState, useGetAllDevices } from "../../queries/admin";
import { EStatus } from "../../types/device";
import { queryClient } from "../../queries/client";
import { IDeviceModel } from "../user/CompanyPage";
import EmptyTable from "./EmptyTable";
import GenericSearchBar from "../new/CommonSearchBar";

export default function DevicePage() {
  const [dialog, setDialog] = useState(false);
  const [selected, setSelected] = useState("Registered");
  const [selectedKey, setSelectedKey] = useState<string[]>([]);
  const { data: deviceDs } = useGetAllDevices();
  const [deviceDetails, setDeviceDetails] = useState<IDeviceModel[]>([]);
  useEffect(() => {
    if (deviceDs) setDeviceDetails(deviceDs);
  }, [deviceDs]);
  const { mutate: changeStatus } = useChangeDeviceState();
  //TODO: get stat details from deviceDetails
  let connected = deviceDetails.filter(
    (ele: any) => ele.status.toUpperCase() === "CONNECTED"
  ).length;
  let registered = deviceDetails.filter(
    (ele: any) => ele.status.toUpperCase() === "REGISTERED"
  ).length;
  let unregistered = deviceDetails.filter(
    (ele: any) => ele.status.toUpperCase() === "UNREGISTERED"
  ).length;
  let terminated = deviceDetails.filter(
    (ele: any) => ele.status.toUpperCase() === "TERMINATED"
  ).length;
  const stats = [
    { name: "Registered", value: registered, key: ["REGISTERED"] },
    { name: "Production", value: connected, key: ["CONNECTED"] },
    { name: "Un Registered", value: unregistered, key: ["UNREGISTERED"] },
    { name: "Terminated", value: terminated, key: ["TERMINATED"] },
  ];
  const [searchTerm, setSearchTerm] = useState("");

  const filteredModels = useMemo(() => {
    return (deviceDetails ?? [])?.filter((model) => {
      const searchTermLower = searchTerm.toLowerCase();
      return (
        (model?.name ?? "").toLowerCase().includes(searchTermLower) ||
        (model?.location ?? "").toLowerCase().includes(searchTermLower) ||
        (model?.status ?? "").toLowerCase().includes(searchTermLower) ||
        (model?.modelType ?? "").toLowerCase().includes(searchTermLower) ||
        (model?.identifier ?? "").toLowerCase().includes(searchTermLower) ||
        (model?.id ?? "").toLowerCase().includes(searchTermLower)
      );
    });
  }, [deviceDetails, searchTerm]);

  return (
    <div className="flex flex-col gap-8">
      {dialog && (
        <RegisterDeviceModal
          isOpen={dialog}
          onClose={() => {
            setDialog(false);
          }}
        />
      )}
      <dl className="w-full mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4 border border-borderColor shadow-sm">
        {stats.map((stat) => (
          <div
            key={stat.name}
            onClick={() => {
              setSelected(stat.name);
              setSelectedKey(stat.key);
            }}
            className={`flex cursor-pointer flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-8 sm:px-6 xl:px-8 ${
              selected === stat.name ? "border-b-2 border-indigo-600" : ""
            }  ${
              stat.name === "Registered"
                ? "rounded-s-md"
                : stat.name === "Terminated"
                ? "rounded-e-md"
                : ""
            }`}
          >
            <dt className="text-sm font-medium leading-6 text-gray-500">
              {stat.name}
            </dt>

            <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
      <div className="px-4 sm:px-6 lg:px-8 bg-white pt-6 border border-borderColor shadow-sm rounded-md">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              {selected === "Registered"
                ? "Registered Devices"
                : selected === "Production"
                ? "Production Devices"
                : selected === "Un Registered"
                ? "Unregistered Devices"
                : "Terminated Devices"}
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              {selected === "Registered"
                ? "A list of all the device available in inventory"
                : selected === "Production"
                ? "A list of all the device rolled out to production"
                : selected === "Un Registered"
                ? "A list of product got unregister from client"
                : "A list of product which are terminated"}
            </p>
          </div>
          {
            <GenericSearchBar
              onSearch={(data) => {
                setSearchTerm(data);
              }}
            />
          }
          {selected === "Registered" && (
            <div className="mt-4 sm:ml-8 sm:mt-0 sm:flex-none">
              <button
                type="button"
                onClick={() => {
                  setDialog(true);
                }}
                className="block cursor-pointer rounded-md bg-indigo-600 px-3 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register Device
              </button>
            </div>
          )}
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
              {filteredModels.filter((device) =>
                selectedKey.includes(device.status)
              ).length === 0 ? (
                <EmptyTable />
              ) : (
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                      >
                        Device Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Device ID
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Model Type
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>

                  {filteredModels && (
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {filteredModels
                        .filter((device) => selectedKey.includes(device.status))
                        .map((device) => (
                          <tr key={device.id}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                              {device.name}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {device.identifier}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {device.modelType}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {device.status}
                            </td>
                            <td className="whitespace-nowrap absolute z-50 py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                              <DeviceMenu
                                menu={
                                  selected === "Registered"
                                    ? [
                                        {
                                          name: "Un Register",
                                          action: () => {
                                            changeStatus(
                                              {
                                                deviceId: device.id,
                                                state: EStatus.UNREGISTERED,
                                              },
                                              {
                                                onSuccess() {
                                                  queryClient.invalidateQueries(
                                                    "get-all-devices-client"
                                                  );
                                                },
                                              }
                                            );
                                          },
                                        },
                                        {
                                          name: "Terminate",
                                          action: () => {
                                            changeStatus(
                                              {
                                                deviceId: device.id,
                                                state: EStatus.TERMINATED,
                                              },
                                              {
                                                onSuccess() {
                                                  queryClient.invalidateQueries(
                                                    "get-all-devices-client"
                                                  );
                                                },
                                              }
                                            );
                                          },
                                        },
                                      ]
                                    : selected === "Production"
                                    ? [
                                        {
                                          name: "Un Register",
                                          action: () => {
                                            changeStatus(
                                              {
                                                deviceId: device.id,
                                                state: EStatus.UNREGISTERED,
                                              },
                                              {
                                                onSuccess() {
                                                  queryClient.invalidateQueries(
                                                    "get-all-devices-client"
                                                  );
                                                },
                                              }
                                            );
                                          },
                                        },
                                        {
                                          name: "Block",
                                          action: () => {
                                            changeStatus(
                                              {
                                                deviceId: device.id,
                                                state: EStatus.BLOCKED,
                                              },
                                              {
                                                onSuccess() {
                                                  queryClient.invalidateQueries(
                                                    "get-all-devices-client"
                                                  );
                                                },
                                              }
                                            );
                                          },
                                        },
                                        {
                                          name: "Terminate",
                                          action: () => {
                                            changeStatus(
                                              {
                                                deviceId: device.id,
                                                state: EStatus.TERMINATED,
                                              },
                                              {
                                                onSuccess() {
                                                  queryClient.invalidateQueries(
                                                    "get-all-devices-client"
                                                  );
                                                },
                                              }
                                            );
                                          },
                                        },
                                      ]
                                    : selected === "Un Registered"
                                    ? [
                                        {
                                          name: "Register",
                                          action: () => {
                                            changeStatus(
                                              {
                                                deviceId: device.id,
                                                state: EStatus.REGISTERED,
                                              },
                                              {
                                                onSuccess() {
                                                  queryClient.invalidateQueries(
                                                    "get-all-devices-client"
                                                  );
                                                },
                                              }
                                            );
                                          },
                                        },
                                        {
                                          name: "Block",
                                          action: () => {
                                            changeStatus(
                                              {
                                                deviceId: device.id,
                                                state: EStatus.BLOCKED,
                                              },
                                              {
                                                onSuccess() {
                                                  queryClient.invalidateQueries(
                                                    "get-all-devices-client"
                                                  );
                                                },
                                              }
                                            );
                                          },
                                        },
                                        {
                                          name: "Terminate",
                                          action: () => {
                                            changeStatus(
                                              {
                                                deviceId: device.id,
                                                state: EStatus.TERMINATED,
                                              },
                                              {
                                                onSuccess() {
                                                  queryClient.invalidateQueries(
                                                    "get-all-devices-client"
                                                  );
                                                },
                                              }
                                            );
                                          },
                                        },
                                      ]
                                    : [
                                        {
                                          name: "Register",
                                          action: () => {
                                            changeStatus(
                                              {
                                                deviceId: device.id,
                                                state: EStatus.REGISTERED,
                                              },
                                              {
                                                onSuccess() {
                                                  queryClient.invalidateQueries(
                                                    "get-all-devices-client"
                                                  );
                                                },
                                              }
                                            );
                                          },
                                        },
                                      ]
                                }
                              />
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  )}
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
