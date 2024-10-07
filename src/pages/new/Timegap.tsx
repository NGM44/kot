import React from "react";

import { useValueStore } from "../../store/useValueState";
import { CheckIcon } from "lucide-react";
import GenericDropdown from "./GenericSelection";
import { calculateTimeGaps, GapModel } from "../analytics/ContantData";

const TimeGapSelector: React.FC = () => {
  const { gap, setValue,date } = useValueStore();

  const timeGaps = calculateTimeGaps(date || "1 Day");


  const handleSelect = (selectedGap: GapModel) => {
    setValue({ gap: selectedGap.name });
  };

  const renderOption = (option: GapModel, isSelected: boolean) => (
    <div className="flex justify-between items-center">
      <span
        className={`block truncate ${
          isSelected ? "font-semibold" : "font-normal"
        }`}
      >
        {option.name}
      </span>
      {isSelected && <CheckIcon className="h-5 w-5 text-indigo-600" />}
    </div>
  );

  return (
    <GenericDropdown<GapModel>
      options={timeGaps}
      onSelect={handleSelect}
      initialSelectedId={
        timeGaps.find((g) => g.name === (gap))?.id ?? timeGaps[0].id
      }
      renderOption={renderOption}
      buttonClassName="w-32 font-semibold"
      dropdownClassName="w-32"
    />
  );
};

export default TimeGapSelector;
