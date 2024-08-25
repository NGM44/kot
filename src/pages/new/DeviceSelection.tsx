import { useEffect, useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { HStack, VStack } from "../../component/utils";
import { useValueStore } from "../../store/useValueState";

const devices = [
  { id: 0, name: "Gravity Sensenode", location: "Gravity 1st Floor" },
  { id: 1, name: "Arlikat Sensenode", location: "Arlikat Database" },
  { id: 2, name: "Amazon Sensenode 1", location: "Amazon Warehouse 1" },
  { id: 3, name: "Amazon Sensenode 2", location: "Amazon Warehouse 3" },
  { id: 4, name: "Sensormagics Sensenode", location: "Sensormagics Lab" },
];

export default function DeviceSelection() {
  const { index, setValue } = useValueStore();
  const [selected, setSelected] = useState(devices[index ?? 0]);
  // useEffect(() => {
  //   setValue({
  //     deviceName: selected.name,
  //   });
  // }, [selected]);
  return (
    <Listbox
      value={selected}
      onChange={(data) => {
        setSelected(data);
  
        console.log("data",data);
        setValue({
          index: data.id ?? 0,
          deviceName: data.name,
        });
      }}
    >
      <div className="relative">
        <ListboxButton className="h-11 w-48 relatives cursor-default rounded-xl bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6">
          <span className="block truncate font-semibold">{selected.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              aria-hidden="true"
              className="h-5 w-5 text-gray-400"
            />
          </span>
        </ListboxButton>

        <ListboxOptions
          //   transition
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {devices.map((device) => (
            <ListboxOption
              key={device.id}
              value={device}
              className="group relative cursor-default border-b border-gray-300 select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <VStack>
                <HStack>
                  <span className="block truncate font-normal group-data-[selected]:font-semibold">
                    {device.name}
                  </span>

                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                    <CheckIcon aria-hidden="true" className="h-5 w-5" />
                  </span>
                </HStack>
                <HStack>
                  <span className="block truncate text-xs font-normal group-data-[selected]:font-medium">
                    {device.location}
                  </span>
                </HStack>
              </VStack>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
