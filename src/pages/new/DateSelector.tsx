import React from 'react';
 // Assuming this is the path to our generic component
import { useValueStore } from "../../store/useValueState";
import { CheckIcon } from 'lucide-react';
import GenericDropdown from './GenericSelection';
import { calculateTimeGaps, TimeModel, timePeriods } from '../analytics/ContantData';

const DateSelector: React.FC = () => {
  const { date, setValue } = useValueStore();

  const handleSelect = (selectedPeriod: TimeModel) => {
    setValue({ date: selectedPeriod.name });
    const newTimeGaps = calculateTimeGaps(selectedPeriod.name);
    setValue({gap: newTimeGaps[0].name});
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
      initialSelectedId={timePeriods.find(period => period.name === date)?.id ?? timePeriods[0].id}
      renderOption={renderOption}
      buttonClassName="w-32 font-semibold"
      dropdownClassName="w-32"
    />
  );
};

export default DateSelector;