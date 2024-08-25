import { useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useValueStore } from "../../store/useValueState";

const metrics = [
  { id: 0, name: "Temperature", unit: "°C" },
  { id: 1, name: "Humidity", unit: "%" },
  { id: 2, name: "Pressure", unit: "hPa" },
  { id: 3, name: "Carbon-Dioxide", unit: "ppm" },
  { id: 4, name: "VOCs", unit: "µg/m³" },
  { id: 5, name: "Light", unit: "lux" },
  { id: 6, name: "Noise", unit: "dB" },
  { id: 7, name: "PM1", unit: "" },
  { id: 8, name: "PM2.5", unit: "" },
  { id: 9, name: "PM4", unit: "" },
  { id: 10, name: "PM10", unit: "" },
  { id: 11, name: "AIQ", unit: "" },
  { id: 12, name: "Gas-1", unit: "ppm" },
  { id: 13, name: "Gas-2", unit: "ppm" },
  { id: 14, name: "Gas-3", unit: "ppm" },
  { id: 15, name: "Gas-4", unit: "ppm" },
  { id: 16, name: "Gas-5", unit: "ppm" },
  { id: 17, name: "Gas-6", unit: "ppm" },
];

export default function ChartSelection() {
  const { metric, setValue } = useValueStore();
  const [selected, setSelected] = useState(
    metrics[
      metrics.findIndex((ele) => ele.name === metric ?? "Temperature") ?? 0
    ]
  );

  return (
    <Listbox
      value={selected}
      onChange={(data: any) => {
        setValue({
          metricUnit: data.unit,
          metric: data?.name ?? "Temperature",
        });
        setSelected(data);
      }}
    >
      <div className="relative">
        <ListboxButton className="h-11 w-48 relatives cursor-default rounded-xl bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6">
          <span className="block truncate font-semibold">{selected?.name}</span>
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
          {metrics.map((metric) => (
            <ListboxOption
              key={metric.id}
              value={metric}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <span className="block truncate font-normal group-data-[selected]:font-semibold">
                {metric.name}
              </span>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
