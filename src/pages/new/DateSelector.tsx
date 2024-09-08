import React from 'react';
 // Assuming this is the path to our generic component
import { useValueStore } from "../../store/useValueState";
import { CheckIcon } from 'lucide-react';
import GenericDropdown from './GenericSelection';

export type TimePeriod = "1 Day" | "7 Days" | "30 Days" | "60 Days" | "90 Days";

interface TimeModel {
  id: string;
  name: TimePeriod;
}

const timePeriods: TimeModel[] = [
  { id: "0", name: "1 Day" },
  { id: "1", name: "7 Days" },
  { id: "2", name: "30 Days" },
  { id: "3", name: "60 Days" },
  { id: "4", name: "90 Days" },
];

const DateSelector: React.FC = () => {
  const { date, setValue } = useValueStore();

  const handleSelect = (selectedPeriod: TimeModel) => {
    setValue({ date: selectedPeriod.name });
  };

  const renderOption = (option: TimeModel, isSelected: boolean) => (
    <div className="flex justify-between items-center">
      <span className={`block truncate ${isSelected ? 'font-semibold' : 'font-normal'}`}>
        {option.name}
      </span>
      {isSelected && (
        <CheckIcon className="h-5 w-5 text-indigo-600" />
      )}
    </div>
  );

  return (
    <GenericDropdown<TimeModel>
      options={timePeriods}
      onSelect={handleSelect}
      initialSelectedId={timePeriods.find(period => period.name === date)?.id ?? ""}
      renderOption={renderOption}
      buttonClassName="w-32 font-semibold"
      dropdownClassName="w-32"
    />
  );
};

export default DateSelector;