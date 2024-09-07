import React, { useEffect, useState } from "react";
import { CheckIcon } from "lucide-react";
import GenericDropdown from "./GenericSelection";
import useMqttStore from "../../store/useMqttStore";
import { topicPrefix } from "../../constant";
import { useGetUserDevices } from "../../queries/admin";
import { IDeviceModel } from "../user/CompanyPage";
import { useValueStore } from "../../store/useValueState";

interface Device {
  id: string;
  name: string;
  location: string;
}

const DeviceSelection: React.FC = () => {
  // const devices: Device[] = [
  //   { id: "123456", name: "Gravity Sensenode", location: "Gravity 1st Floor" },
  //   { id: "7654321", name: "Arlikat Sensenode", location: "Arlikat Database" },
  //   // ... other devices
  // ];
  const [devices, setDevices] = useState<IDeviceModel[]>([]);
  const { data: user } = useGetUserDevices();

  useEffect(() => {
    if (user) {
      setDevices(user?.devices);
    }
  }, [user]);
  const { subscribeTopic } = useMqttStore();
  const { setValue } = useValueStore();

  const handleSelect = (selectedDevice: Device) => {
    subscribeTopic(`${topicPrefix}/${selectedDevice.id.toString()}`);
    setValue({ deviceName: selectedDevice.name, deviceId: selectedDevice.id });
  };

  const renderDevice = (device: Device, isSelected: boolean) => (
    <div>
      <div>{device.name}</div>
      <div className="text-xs">{device.location}</div>
      {isSelected && <CheckIcon className="absolute right-2 h-5 w-5" />}
    </div>
  );

  return (
    <>
      {devices.length > 0 ? (
        <GenericDropdown<Device>
          options={devices}
          onSelect={handleSelect}
          initialSelectedId={devices[0].id}
          renderOption={renderDevice}
          buttonClassName="w-64"
        />
      ) : (
        <div></div>
      )}
    </>
  );
};

export default DeviceSelection;
