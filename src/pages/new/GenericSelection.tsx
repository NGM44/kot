import React, { useEffect, useRef, useState } from "react";
import { CheckIcon } from "lucide-react";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";

interface Option {
  id: number | string;
  name: string;
  [key: string]: any; // Allow for additional properties
}

interface GenericDropdownProps<T extends Option> {
  options: T[];
  onSelect: (option: T) => void;
  initialSelectedId?: string;
  renderOption?: (option: T, isSelected: boolean) => React.ReactNode;
  buttonClassName?: string;
  dropdownClassName?: string;
}

function GenericDropdown<T extends Option>({
  options,
  onSelect,
  initialSelectedId,
  renderOption,
  buttonClassName = "",
  dropdownClassName = "",
}: GenericDropdownProps<T>) {
  const [selected, setSelected] = useState<T>(
    () => options.find((opt) => opt.id === initialSelectedId) || options[0]
  );
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelection = (option: T) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className={`relative ${buttonClassName}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-11 cursor-pointer rounded-xl bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 ${buttonClassName}`}
      >
        <span className="block truncate font-semibold">{selected.name}</span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </button>

      {isOpen && (
        <ul
          className={`absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${dropdownClassName}`}
        >
          {options.map((option) => (
            <li
              key={option.id}
              onClick={() => handleSelection(option)}
              className={`group  relative min-w-28 items-center cursor-pointer hover:bg-indigo-600 hover:text-white select-none py-2 pl-3 pr-9 text-gray-900 ${
                selected.id === option.id ? "bg-indigo-600 text-white" : ""
              }`}
            >
              {renderOption ? (
                renderOption(option, selected.id === option.id)
              ) : (
                <div>
                  <span
                    className={`block truncate font-normal ${
                      selected.id === option.id ? "font-semibold" : ""
                    }`}
                  >
                    {option.name}
                  </span>
                  {selected.id === option.id && (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-white">
                      <CheckIcon className="h-5 w-5" />
                    </span>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GenericDropdown;
