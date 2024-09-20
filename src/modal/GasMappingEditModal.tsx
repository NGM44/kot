import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useEffect, useState } from "react";
import { queryClient } from "../queries/client";
import { IGasMapping } from "../pages/user/CompanyPage";
import { useEditGasMappingDetails } from "../queries/admin";
import { toast } from "react-toastify";

export default function GasMappingEditModal({
  gasNameToBeUpdated,
  gasMapping,
  onClose,
}: {
  gasNameToBeUpdated: string;
  gasMapping: IGasMapping;
  onClose: () => void;
}) {
  const [updatedGasMappedName, setUpdatedGasMappedName] = useState("");
  const [updatedGasMapping, setUpdatedGasMapping] = useState(gasMapping);
  const [showSuccess, setShowSuccess] = useState(false);
  const { mutate: editGasMappingDetails } = useEditGasMappingDetails();

  useEffect(() => {
    switch (gasNameToBeUpdated) {
      case "Gas 1":
        setUpdatedGasMappedName(gasMapping.gas1);
        break;
      case "Gas 2":
        setUpdatedGasMappedName(gasMapping.gas2);
        break;
      case "Gas 3":
        setUpdatedGasMappedName(gasMapping.gas3);
        break;
      case "Gas 4":
        setUpdatedGasMappedName(gasMapping.gas4);
        break;
      case "Gas 5":
        setUpdatedGasMappedName(gasMapping.gas5);
        break;
      case "Gas 6":
        setUpdatedGasMappedName(gasMapping.gas6);
        break;
      default:
        break;
    }
  }, [gasMapping, gasNameToBeUpdated]);

  useEffect(()=> {
    switch (gasNameToBeUpdated) {
      case "Gas 1":
       setUpdatedGasMapping({ ...updatedGasMapping ,gas1:updatedGasMappedName});
        break;
      case "Gas 2":
       setUpdatedGasMapping({ ...updatedGasMapping ,gas2:updatedGasMappedName});
        break;
      case "Gas 3":
       setUpdatedGasMapping({ ...updatedGasMapping ,gas3:updatedGasMappedName});
        break;
      case "Gas 4":
       setUpdatedGasMapping({ ...updatedGasMapping ,gas4:updatedGasMappedName});
        break;
      case "Gas 5":
       setUpdatedGasMapping({ ...updatedGasMapping ,gas5:updatedGasMappedName});
        break;
      case "Gas 6":
       setUpdatedGasMapping({ ...updatedGasMapping ,gas6:updatedGasMappedName});
        break;
      default:
        break;
    }

  },[updatedGasMappedName])
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showSuccess) {
      timer = setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showSuccess, onClose]);

  function handleEditGasMappingDetails() {
    editGasMappingDetails(updatedGasMapping, {
      onSuccess: () => {
        onClose();
        queryClient.invalidateQueries("get-client-detail");
        toast("Client Gas Mapping updated Successfully", {
          type: "success",
          autoClose: 2000,
        });
      },
      onError(err: any) {
        toast(err.response.data.errorMessage, {
          type: "error",
          autoClose: 2000,
        });
      },
    });
  }

  return (
    <Transition show={!!gasNameToBeUpdated}>
      <Dialog className="relative z-50" onClose={onClose}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <>
                  <div className="sm:mx-auto sm:w-full sm:max-w-md pb-4">
                    <h2 className="text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      Edit Gas Mapping
                    </h2>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="gasName"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Gas Name
                      </label>
                      <div className="mt-2">{gasNameToBeUpdated}</div>
                    </div>
                    <div>
                      <label
                        htmlFor="updatedGasMappedName"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Mapped Name
                      </label>
                      <div className="mt-2">
                        <input
                          id="updatedGasMappedName"
                          name="updatedGasMappedName"
                          value={updatedGasMappedName}
                          type="text"
                          onChange={(e) =>
                            setUpdatedGasMappedName(e.target.value)
                          }
                          required
                          className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        onClick={handleEditGasMappingDetails}
                        disabled={updatedGasMapping === gasMapping}
                        className="flex w-full cursor-pointer justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Edit details
                      </button>
                    </div>
                  </div>
                </>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
