import React, { useState } from "react";
import { HStack, VStack } from "../../component/utils";
import DateSelector from "./DateSelector";
import DownloadExcel from "./DownloadExcel";
import DeviceSelection from "./DeviceSelection";
import ReportModal from "../../modal/ReportModal";
import { useValueStore } from "../../store/useValueState";

const SecondSection = ({ date }: { date?: string }) => {
  const [dialog, setDialog] = useState(false);
  const { deviceId } = useValueStore();
  return (
    <div>
      <HStack className="bg-white rounded-xl drop-shadow-box p-4 w-full justify-between">
        {dialog && deviceId && (
          <ReportModal
            isOpen={dialog}
            onClose={() => setDialog(false)}
            deviceId={deviceId}
          />
        )}
        <VStack>
          <p className="text-xl text-secondary font-semibold">Dashboard</p>
          <p className="text-xs text-gray-600">
            Access a summary of key metrics and live status, last updated{" "}
            <span className="font-bold">{date || "-"}</span>
          </p>
        </VStack>
        <HStack className="gap-8">
          <DeviceSelection />
        </HStack>
      </HStack>
    </div>
  );
};

export default SecondSection;
