import React from "react";
import { HStack } from "../../component/utils";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Droplets } from "lucide-react";
import { Icon } from "@iconify/react";
import { CardModel } from "./GenerateDashboardData";

const DataCards = ({ value }: { value: CardModel }) => {
  return (
    <div id={value.key}  className="flex-1 bg-white p-4 shadow-box rounded-xl">
      <HStack className="w-full whitespace-nowrap items-center justify-between">
        <HStack className="items-center ">
          <p className="text-sm text-secondary font-medium">{value.name}</p>
          <InformationCircleIcon className="w-4 h-4 ml-2 text-gray-400" />
        </HStack>
        <button
          type="button"
          className="rounded-xl bg-white px-3 py-2.5 text-xs1 font-semibold text-gray-900 shadow-box  ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          See Details
        </button>
      </HStack>
      <HStack className="gap-2 mt-6 mb-2">
        <div className="p-2 shadow-box bg-gray-50 border-gray-200 border rounded-lg">
          {/* <Droplets className="w-4 h-4 text-primary" /> */}
          <Icon
            className="w-5 h-5 text-primary font-bold"
            icon={value.iconName}
          />
        </div>
        <p className="text-secondary text-3xl font-semibold">{value.value}</p>
        <p className="text-gray-400 text-lg pt-2 font-medium">{value.unit}</p>
        <div className="p-1 shadow-box h-6 text-sm bg-green-50 text-green-500 font-semibold rounded-lg">
          {value.change}
        </div>
      
      
      </HStack>
      <HStack className="gap-2 mt-2">
        <p className="text-gray-500 text-xs1">{value.content}</p>
      </HStack>
    </div>
  );
};

export default DataCards;
