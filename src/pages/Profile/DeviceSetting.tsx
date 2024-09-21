import { useState } from "react";
import ChangePasswordModal from "../../modal/ChangePasswordModal";
import LogoutFromAllDevices from "../../modal/LogoutFromAllDevicesModal";
import { useAuthStore } from "../../store/useAuthStore";
import ParameterRangeUI from "../new/SetParameterRanges";
import ParameterSelector from "../new/SelectDasshboardParam";

export default function DeviceSetting() {
  
  const [dialog, setDialog] = useState(false);

  const { role } = useAuthStore();
  const [logOutDialog, setLogoutDialog] = useState(false);

  let isAdmin = role?.toUpperCase() === "ADMIN";

  return (
    <>
      {dialog && (
        <ChangePasswordModal
          isOpen={dialog}
          onClose={() => {
            setDialog(false);
          }}
        />
      )}
      {logOutDialog && (
        <LogoutFromAllDevices
          isOpen={logOutDialog}
          onClose={() => {
            setLogoutDialog(false);
          }}
        />
      )}
      <div className="space-y-12 bg-white rounded-xl shadow-box p-8">
        {!isAdmin && (
          <div className="grid grid-cols-1 gap-x-8 gap-y-10  pb-12 md:grid-cols-3">
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Set Parameter Ranges
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Details of the optimal values of the Device
              </p>
            </div>
            <div className="grid col-span-2 gap-x-8 gap-y-10 pb-12">
              <ParameterRangeUI />
            </div>
          </div>
        )}
        {!isAdmin && (
          <div className="grid grid-cols-1 gap-x-8 gap-y-10  pb-12 md:grid-cols-3">
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Set Overview Values
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                select which values matter most for you
              </p>
            </div>
            <div className="grid col-span-2 gap-x-8 gap-y-10 pb-12">
              <ParameterSelector />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
