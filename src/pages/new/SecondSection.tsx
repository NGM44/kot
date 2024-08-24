import React, { useState } from "react";
import { HStack, VStack } from "../../component/utils";
import DateSelector from "./DateSelector";
import DownloadExcel from "./DownloadExcel";
import DeviceSelection from "./DeviceSelection";
import ReportModal from "../../modal/ReportModal";

const SecondSection = ({date}:{date:string}) => {
  const [dialog, setDialog] = useState(false);
  const deviceId = "";
  return (
    <div>
      <HStack className="bg-white rounded-xl drop-shadow-box p-4 w-full justify-between">
      {dialog && (
          <ReportModal
            isOpen={dialog}
            onClose={() => setDialog(false)}
            deviceId={deviceId}
          />
        )}
        <VStack>
          <p className="text-xl text-secondary font-semibold">Dashboard</p>
          <p className="text-xs text-gray-600">
            Access a summary of key metrics and live status, last updated <span className="font-bold">{date}</span>
          </p>
        </VStack>
        <HStack className="gap-8">
          <DeviceSelection />
          {/* <DateSelector /> */}
          <DownloadExcel
            onClick={() => {
              setDialog(true);
            }}
          />
        </HStack>
      </HStack>
    </div>
  );
};

export default SecondSection;
