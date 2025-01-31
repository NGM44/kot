import React, { useState } from "react";
import { HStack, VStack } from "../../component/utils";
import DateSelector from "./DateSelector";
import DownloadExcel from "./DownloadExcel";
import TimeGap from "./Timegap";
import DeviceSelection from "./DeviceSelection";
import ReportModal from "../../modal/ReportModal";
import { useValueStore } from "../../store/useValueState";

const AnalyticsSecondSection = ({date}:{date:string}) => {
  const [dialog, setDialog] = useState(false);
  const {deviceId} = useValueStore();
  return (
    <div>
      <HStack className="bg-white z-30 rounded-xl shadow-box p-4 w-full justify-between">
        {dialog && (
          <ReportModal
            isOpen={dialog}
            onClose={() => setDialog(false)}
            deviceId={deviceId}
          />
        )}
        <VStack>
          <p className="text-xl text-secondary font-semibold">Insights</p>
          <p className="text-xs text-gray-600">
            Access a summary of key metrics and historic data points as of {date}
          </p>
        </VStack>
        <HStack className="gap-8">
          <TimeGap />
          <DateSelector />
          {/* <DeviceSelection /> */}
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

export default AnalyticsSecondSection;
