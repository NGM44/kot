import React from "react";
import { HStack } from "../../component/utils";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Droplets } from "lucide-react";
import InfoRow from "./IndividualGasEntry";
import StackedBarCharts from "./StackedBarCharts";
import StackedBarChartsFullFledged from "./StackedBarChartsFullFledged";
import { Icon } from "@iconify/react";

export interface CardModel {
  name: string;
  value: string;
  change: string;
  content: string;
  info: string;
  graph: string;
}

const GasValues = ({ value }: { value: CardModel }) => {
  return (
    <div className="flex-1 bg-white p-4 shadow-box rounded-xl">
      <HStack className="w-full whitespace-nowrap items-center justify-between">
        <HStack className="items-center ">
          <p className="text-sm text-secondary font-medium">{"Particulate Matter"}</p>
          <InformationCircleIcon className="w-4 h- ml-2 text-gray-400" />
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
         
          <Icon className="w-5 h-5 text-primary font-bold" icon={"fluent:dust-28-regular"} />
        </div>
        <p className="text-secondary text-3xl font-semibold">{value.value}</p>
        <div className="p-1 shadow-box h-6 text-sm bg-green-50 text-green-500 font-semibold rounded-lg">
          {value.change}
        </div>
      </HStack>
      <HStack className="gap-2 mt-2">
        <p className="text-gray-500 text-xs1">{value.content}</p>
      </HStack>
      <StackedBarChartsFullFledged value={80} />
      <InfoRow
        title="PM1"
        subtitle="gas of gas which i dont know"
        dotColor="#6278FB"
        value="50"
      />
      <hr className={`border-t border-gray-200 my-1`} />
      <InfoRow
        title="PM2.5"
        subtitle="gas of gas which i dont know"
        dotColor="#61CBF9"
        value="50"
      />
      <hr className={`border-t border-gray-200 my-1`} />
      <InfoRow
        title="PM4"
        subtitle="gas of gas which i dont know"
        dotColor="#D9FB55"
        value="50"
      />
      <hr className={`border-t border-gray-200 my-1`} />
      <InfoRow
        title="PM10"
        subtitle="gas of gas which i dont know"
        dotColor="#F6F961"
        value="50"
      />
      {/* <hr className={`border-t border-gray-200 my-1`} /> */}
      {/* <InfoRow 
        title="Hexogen" 
        subtitle="gas of gas which i dont know" 
        dotColor="#FFC107" 
        value="12.3%" 
      /> */}
    </div>
  );
};

export default GasValues;
