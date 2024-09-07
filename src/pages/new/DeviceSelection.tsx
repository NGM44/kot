import React from "react";
import { CheckIcon } from "lucide-react";
import GenericDropdown from "./GenericSelection";
import useMqttStore from "../../store/useMqttStore";
import { topicPrefix } from "../../constant";

interface Device {
  id: string;
  name: string;
  location: string;
}

const DeviceSelection: React.FC = () => {
  const devices: Device[] = [
    { id: "123456", name: "Gravity Sensenode", location: "Gravity 1st Floor" },
    { id: "7654321", name: "Arlikat Sensenode", location: "Arlikat Database" },
    // ... other devices
  ];
  const { subscribeTopic } = useMqttStore();

  const handleSelect = (selectedDevice: Device) => {
    // Handle the selection, e.g., update state, make API calls, etc.
    console.log("Selected device:", selectedDevice);

    // subscribeTopic("weather_data/01J5B30RPFBVZXFNSC2323DXPQ");
    subscribeTopic(`${topicPrefix}/${selectedDevice.id.toString()}`);
  };

  const renderDevice = (device: Device, isSelected: boolean) => (
    <div>
      <div>{device.name}</div>
      <div className="text-xs">{device.location}</div>
      {isSelected && <CheckIcon className="absolute right-2 h-5 w-5" />}
    </div>
  );

  return (
    <GenericDropdown<Device>
      options={devices}
      onSelect={handleSelect}
      initialSelectedId={devices[0].id}
      renderOption={renderDevice}
      buttonClassName="w-64"
    />
  );
};

export default DeviceSelection;
