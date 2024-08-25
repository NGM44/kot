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

const people: TimeModel[] = [
  { id: 0, name: "1 Day" },
  { id: 1, name: "7 Days" },
  { id: 2, name: "30 Days" },
  { id: 3, name: "60 Days" },
  { id: 4, name: "90 Days" },
];

type TimePeriod = "1 Day" | "7 Days" | "30 Days" | "60 Days" | "90 Days";
type TimeGap = "1 hour" | "2 hour" | "6 hour" | "12 hour" | "24 hour";

export interface TimeModel {
  id: number;
  name: TimePeriod;
}



export default function DateSelector() {
  const { date, setValue } = useValueStore();
  const [selected, setSelected] = useState<TimeModel>(
    people.find((ele) => ele.name === date) ?? { id: 0, name: "1 Day" }
  );

  return (
    <Listbox
      value={selected}
      onChange={(data) => {
        setValue({
          date: data.name,
        });
        setSelected(data);
      }}
    >
      <div className="relative">
        <ListboxButton className="h-11 w-32 relatives cursor-default rounded-xl bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6">
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
          className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {people.map((person) => (
            <ListboxOption
              key={person.id}
              value={person}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <span className="block truncate font-normal group-data-[selected]:font-semibold">
                {person.name}
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
