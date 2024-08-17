import React from "react";
import { HStack, VStack } from "../../component/utils";
import DateSelector from "./DateSelector";
import DownloadExcel from "./DownloadExcel";
import DeviceSelection from "./DeviceSelection";

const SecondSection = () => {
  return (
    <div>
      <HStack className="bg-white rounded-xl drop-shadow-box p-4 w-full justify-between">
        <VStack>
          <p className="text-xl text-secondary font-semibold">Dashboard</p>
          <p className="text-xs text-gray-600">
            Access a summary of key metrics and live status
          </p>
        </VStack>
        <HStack className="gap-8">
          <DeviceSelection />
          {/* <DateSelector /> */}
          <DownloadExcel />
        </HStack>
      </HStack>
    </div>
  );
};

export default SecondSection;
