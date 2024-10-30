import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { format } from "date-fns";
import { ReportRequestDto } from "../types/device";
import { useGenerateReport } from "../queries/admin";
import { toast } from "react-toastify";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { metrics } from "../pages/new/ChartSelection";

export default function ReportModal({
  isOpen,
  onClose,
  deviceId,
}: {
  isOpen: boolean;
  onClose: () => void;
  deviceId?: string;
}) {
  const { mutate: generateReport } = useGenerateReport();
  function handleDownloadReport() {
    if (deviceId) {
      // NGM to integrate with dropdown
      const to = format(new Date("2024-06-06"), "yyyy-MM-dd");
      const from = format(new Date("2024-06-01"), "yyyy-MM-dd");
      const reportReqDto: ReportRequestDto = { deviceId, from, to, metrics: metrics.map(m => m.name) };
      generateReport(reportReqDto, {
        onSuccess() {
          toast("Report Generated successfully", {
            autoClose: 2000,
            type: "success",
          });
        },
      });
      onClose();
    }
  }
  return (
    <Transition show={isOpen}>
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
                <div className="flex flex-col justify-between bg-white rounded h-[300px] ">
                  <div className="border-b border-gray-900/10 pb-2 mb-2 flex flex-row items-center justify-between">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Download Report
                    </h2>
                    <XMarkIcon
                      className="w-6 cursor-pointer h-6"
                      onClick={() => {
                        onClose();
                      }}
                    />
                  </div>
                  <div className="flex flex-row justify-between gap-9">
                    <button
                      onClick={() => onClose()}
                      className="text-gray-400 cursor-pointer bg-slate-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleDownloadReport}
                      className="block cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Download Report
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
