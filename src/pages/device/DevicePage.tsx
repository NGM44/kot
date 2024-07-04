import { useState } from "react";

import { classNames } from "../../utils/string";
import DeviceMenu from "./DeviceMenu";
import RegisterDeviceModal from "../../modal/RegisterDeviceModal";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];

const stats = [
  { name: "Registered", value: "88", change: "+88%" },
  { name: "Production", value: "10", change: "+10%" },
  { name: "Un Registered", value: "2", change: "2%" },
  { name: "Terminated", value: "0", change: "0%" },
];

export default function DevicePage() {
  const [dialog, setDialog] = useState(false);
  const [selected, setSelected] = useState("Registered");
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
            <dd className={classNames("text-gray-700", "text-xs font-medium")}>
              {stat.change}
            </dd>
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
          {selected === "Registered" && (
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              <button
                type="button"
                onClick={() => {
                  setDialog(true);
                }}
                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register Device
              </button>
            </div>
          )}
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
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
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.title}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.role}
                      </td>
                      <td className="whitespace-nowrap absolute z-50 py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                        {/* <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit<span className="sr-only">, {person.name}</span>
                        </a> */}
                        <DeviceMenu
                          menu={
                            selected === "Registered"
                              ? [
                                  {
                                    name: "Un Register",
                                    action: () => {},
                                  },
                                  {
                                    name: "Terminate",
                                    action: () => {},
                                  },
                                ]
                              : selected === "Production"
                              ? [
                                  {
                                    name: "Un Register",
                                    action: () => {},
                                  },
                                  {
                                    name: "Block",
                                    action: () => {},
                                  },
                                  {
                                    name: "Terminate",
                                    action: () => {},
                                  },
                                ]
                              : selected === "Un Registered"
                              ? [
                                  {
                                    name: "Register",
                                    action: () => {},
                                  },
                                  {
                                    name: "Block",
                                    action: () => {},
                                  },
                                  {
                                    name: "Terminate",
                                    action: () => {},
                                  },
                                ]
                              : [
                                  {
                                    name: "Register",
                                    action: () => {},
                                  },
                                ]
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
