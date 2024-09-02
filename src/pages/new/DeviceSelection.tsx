import { useEffect, useRef, useState } from "react";
import { HStack, VStack } from "../../component/utils";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useValueStore } from "../../store/useValueState";
import useMqttStore from "../../store/useMqttStore";
import { topicPrefix } from "../../constant";

const devices = [
  { id: 0, name: "Gravity Sensenode", location: "Gravity 1st Floor" },
  { id: 1, name: "Arlikat Sensenode", location: "Arlikat Database" },
  { id: 2, name: "Amazon Sensenode 1", location: "Amazon Warehouse 1" },
  { id: 3, name: "Amazon Sensenode 2", location: "Amazon Warehouse 3" },
  { id: 4, name: "Sensormagics Sensenode", location: "Sensormagics Lab" },
];

export default function DeviceSelection() {
  const { index: _index, setValue } = useValueStore();
  const index = _index || 0;
  const [selected, setSelected] = useState(devices[index]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { subscribeTopic } = useMqttStore();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelection = (device: typeof devices[0]) => {
    setSelected(device);
    setIsOpen(false);
    subscribeTopic(`${topicPrefix}/${device.id.toString()}`);
    setValue({
      index: device.id,
      deviceName: device.name,
    });
  };

  return (
    <div className="relative w-48" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-11 w-full cursor-pointer rounded-xl bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
      >
        <span className="block truncate font-semibold">{selected.name}</span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </button>

      {isOpen && (
        <ul className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {devices.map((device) => (
            <li
              key={device.id}
              onClick={() => handleSelection(device)}
              className={`group relative cursor-pointer border-b border-gray-300 select-none py-2 pl-3 pr-9 text-gray-900 ${
                selected.id === device.id ? "bg-indigo-600 text-white" : ""
              }`}
            >
              <VStack>
                <HStack>
                  <span
                    className={`block truncate font-normal ${
                      selected.id === device.id ? "font-semibold" : ""
                    }`}
                  >
                    {device.name}
                  </span>
                  {selected.id === device.id && (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-white">
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  )}
                </HStack>
                <HStack>
                  <span
                    className={`block truncate text-xs font-normal ${
                      selected.id === device.id ? "font-medium" : ""
                    }`}
                  >
                    {device.location}
                  </span>
                </HStack>
              </VStack>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
