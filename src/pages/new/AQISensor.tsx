import React from "react";
import { HStack } from "../../component/utils";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Droplets } from "lucide-react";
import InfoRow from "./IndividualGasEntry";
import StackedBarCharts from "./StackedBarCharts";
import StackedBarChartsFullFledged from "./StackedBarChartsFullFledged";
import { Icon } from "@iconify/react";
import { CardModel } from "./GenerateDashboardData";
import { IWeatherData } from "../../types/device";

const AQISensor = ({ value, liveData }: { value: CardModel, liveData?: IWeatherData }) => {
  return (
    <div id={value.key} className="flex-1 bg-white p-4 shadow-box rounded-xl">
      <HStack className="w-full whitespace-nowrap items-center justify-between">
        <HStack className="items-center ">
          <p className="text-sm text-secondary font-medium">
            {"Air Quality Index"}
          </p>
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
          <Icon
            className="w-5 h-5 text-primary font-bold"
            icon={"ph:speedometer-bold"}
          />
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
        title="Temperature"
        subtitle="Calculated value based on formula"
        dotColor="#6278FB"
        value={liveData?.temperature.toFixed(2) || "-"}
      />
      <hr className={`border-t border-gray-200 my-1`} />
      <InfoRow
        title="Humidity"
        subtitle="Calculated value based on formula"
        dotColor="#61CBF9"
        value={liveData?.humidity.toFixed(0) || "-"}
      />
      <hr className={`border-t border-gray-200 my-1`} />
      <InfoRow
        title="Atmospheric Pressure"
        subtitle="Calculated value based on formula"
        dotColor="#D9FB55"
        value={liveData?.pressure.toFixed(0) || "-"}
      />
      <hr className={`border-t border-gray-200 my-1`} />
      <InfoRow
        title="VOCs"
         subtitle="Calculated value based on formula"
        dotColor="#F6F961"
        value={liveData?.vocs.toFixed(0) || "-"}
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

export default AQISensor;
