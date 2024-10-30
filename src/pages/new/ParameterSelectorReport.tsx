import React, { useState, useEffect } from "react";
import { X, Plus } from "lucide-react";
import {
  useGenerateReport,
} from "../../queries/admin";
import { useAuthStore } from "../../store/useAuthStore";
import { toast } from "react-toastify";
import { format } from "date-fns";
import { metricDataMapping } from "../analytics/AnalyticsPage";
import DatePicker from "./DatePicker";

const parameters = [
  "Temperature",
  "Humidity",
  "Pressure",
  "Differential Pressure",
  "Carbon Dioxide",
  "VOCs",
  "Light",
  "Noise",
  "PM1",
  "PM2.5",
  "PM4",
  "PM10",
  "AIQ",
  "Gas 1",
  "Gas 2",
  "Gas 3",
  "Gas 4",
  "Gas 5",
  "Gas 6",
  "Productivity Meter",
];

const ParameterSelectorReport: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const { id } = useAuthStore();
  const { mutate: generateReport } = useGenerateReport();
  const filteredParameters = parameters.filter(
    (param) =>
      !selected.includes(param)
  );

  useEffect(() => {
    setSelected(parameters);
  }, []);

  const handleSelect = (param: string) => {
      setSelected([...selected, param]);
  };

  const handleRemove = (param: string) => {
    setSelected(selected.filter((p) => p !== param));
  };

  const handleSelectAll = () => {
    setSelected(parameters);
  }
  const [selectedFromDate, setSelectedFromDate] = useState<string>('');
  const [selectedToDate, setSelectedToDate] = useState<string>('');
  return (
    <>
     <div className="flex space-x-4 p-4">
  <div className="flex-1">
    <DatePicker
      label="From Date"
      value={selectedFromDate}
      onChange={setSelectedFromDate}
    />
  </div>
  <div className="flex-1">
    <DatePicker
      label="To Date"
      value={selectedToDate}
      onChange={setSelectedToDate}
    />
  </div>
</div>

      <div className="mx-auto p-6 ">
        Select parameters to be included in report
        <div className="my-4 min-h-[100px] bg-gray-50 p-3 rounded-lg">
          {filteredParameters.length > 0 && (
            <button
              className="w-full flex justify-end p-4"
              onClick={handleSelectAll}
            >
              Select all
            </button>
          )}
          <div className="flex flex-wrap gap-2">
            {selected.map((param) => (
              <span
                key={param}
                className="inline-flex items-center bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold transition-all hover:bg-blue-600"
              >
                {param}
                <button
                  onClick={() => handleRemove(param)}
                  className="cursor-pointer ml-2 focus:outline-none hover:text-red-200"
                >
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
          {selected.length === 0 && (
            <p className="text-gray-500 italic">
              Selected parameters will appear here
            </p>
          )}
        </div>

        {filteredParameters.length > 0 && (
          <div className="bg-gray-100 rounded-lg p-3">
            <div className="flex flex-wrap gap-2">
              {filteredParameters.map((param) => (
                <button
                  key={param}
                  onClick={() => handleSelect(param)}
                  className="flex cursor-pointer items-center bg-white border border-gray-300 rounded-full px-3 py-1 text-sm font-semibold transition-all hover:bg-gray-50"
                >
                  <span>{param}</span>
                  <Plus size={14} className="ml-1 text-blue-500" />
                </button>
              ))}
            </div>
          </div>
        )}
        <div
          className={`mt-6 w-full ${
            selected.length >= 2 && selected.length
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-500 cursor-not-allowed"
          }  text-center text-white py-2 px-4 rounded-md  transition duration-300 ease-in-out`}
          onClick={() => {
            generateReport(
              {
                deviceId: id || "",
                from: format(selectedFromDate, "yyyy-MM-dd"),
                metrics: selected.map(
                  (selectedItem) => metricDataMapping[selectedItem]
                ),
                to: format(selectedToDate, "yyyy-MM-dd"),
              },
              {
                onSuccess() {
                  toast(
                    "Generated Report would be sent to registered email shortly",
                    {
                      type: "success",
                      autoClose: 2000,
                    }
                  );
                },
                onError() {
                  toast("Something went Wrong", {
                    type: "error",
                    autoClose: 2000,
                  });
                },
              }
            );
          }}
        >
          Generate Report
        </div>
      </div>
    </>
  );
};

export default ParameterSelectorReport;
