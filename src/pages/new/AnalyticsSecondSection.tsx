import React, { useState } from "react";
import { HStack, VStack } from "../../component/utils";
import DateSelector from "./DateSelector";
import DownloadExcel from "./DownloadExcel";
import TimeGap from "./Timegap";
import DeviceSelection from "./DeviceSelection";
import ReportModal from "../../modal/ReportModal";
import RabbitMQConsumer from "../dashboard/RabbitMQConsumer";

const AnalyticsSecondSection = () => {
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
          <p className="text-xl text-secondary font-semibold">Analytics</p>
          <p className="text-xs text-gray-600">
            Access a summary of key metrics and live status
          </p>
        </VStack>
        <RabbitMQConsumer/>
        <HStack className="gap-8">
          <TimeGap />
          <DateSelector />
          <DeviceSelection />
          <DownloadExcel />
        </HStack>
      </HStack>
    </div>
  );
};

export default AnalyticsSecondSection;
