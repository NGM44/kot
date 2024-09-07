import React from "react";

import { useValueStore } from "../../store/useValueState";
import { CheckIcon } from "lucide-react";
import GenericDropdown from "./GenericSelection";

type TimeGap = "1 hour" | "2 hour" | "6 hour" | "12 hour" | "24 hour";

interface GapModel {
  id: string;
  name: TimeGap;
}

const timeGaps: GapModel[] = [
  { id: "6", name: "1 hour" },
  { id: "7", name: "2 hour" },
  { id: "8", name: "6 hour" },
  { id: "9", name: "12 hour" },
  { id: "10", name: "24 hour" },
];

const TimeGapSelector: React.FC = () => {
  const { gap, setValue } = useValueStore();

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
        timeGaps.find((g) => g.name === (gap ?? "1 hour"))?.id ?? ""
      }
      renderOption={renderOption}
      buttonClassName="w-32 font-semibold"
      dropdownClassName="w-32"
    />
  );
};

export default TimeGapSelector;
