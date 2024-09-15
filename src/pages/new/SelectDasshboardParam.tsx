import React, { useState, useEffect } from "react";
import { X, Search, Plus } from "lucide-react";
import {
  useGetUserPreference,
  useUpdateUserPreference,
} from "../../queries/admin";
import { useAuthStore } from "../../store/useAuthStore";
import { toast } from "react-toastify";
import { queryClient } from "../../queries/client";

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

const ParameterSelector: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const { id } = useAuthStore();
  const { data: userPred } = useGetUserPreference();
  const { mutate: updateUserPreference } = useUpdateUserPreference();
  // const { data: userPreference } = useGetUserPreference(id ?? "");
  const filteredParameters = parameters.filter(
    (param) =>
      param.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !selected.includes(param)
  );

  useEffect(() => {
    if (userPred) setSelected(userPred.preference);
  }, [userPred]);

  const handleSelect = (param: string) => {
    if (selected.length < 6) {
      setSelected([...selected, param]);
      setError("");
      setSearchTerm("");
    } else {
      setError("You can select a maximum of 6 parameters.");
    }
  };

  const handleRemove = (param: string) => {
    setSelected(selected.filter((p) => p !== param));
    setError("");
  };

  useEffect(() => {
    if (selected.length < 2) {
      setError("Please select at least 2 parameters.");
    } else {
      setError("");
    }
  }, [selected]);

  return (
    <div className="mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-4 min-h-[100px] bg-gray-50 p-3 rounded-lg">
        <div className="flex flex-wrap gap-2">
          {selected.map((param) => (
            <span
              key={param}
              className="inline-flex items-center bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold transition-all hover:bg-blue-600"
            >
              {param}
              <button
                onClick={() => handleRemove(param)}
                className="ml-2 focus:outline-none hover:text-red-200"
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

      {error && <p className="text-red-500 mb-2 font-semibold">{error}</p>}

      <div className="bg-gray-100 rounded-lg p-3">
        <div className="flex items-center mb-2">
          <Search size={20} className="text-gray-400 mr-2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search parameters..."
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {filteredParameters.map((param) => (
            <button
              key={param}
              onClick={() => handleSelect(param)}
              className="flex items-center bg-white border border-gray-300 rounded-full px-3 py-1 text-sm font-semibold transition-all hover:bg-gray-50"
            >
              <span>{param}</span>
              <Plus size={14} className="ml-1 text-blue-500" />
            </button>
          ))}
        </div>
        {filteredParameters.length === 0 && (
          <p className="text-gray-500 italic">No matching parameters found</p>
        )}
      </div>

      <p className="mt-4 text-sm text-gray-600">
        Select 2-6 parameters. Currently selected: {selected.length}
      </p>
      <div
        className="mt-6 w-full bg-blue-500 text-center text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
        onClick={() => {
          updateUserPreference(
            {
              userId: id ?? "",
              preference: selected,
            },
            {
              onSuccess() {
                toast("Preference Updated", {
                  type: "success",
                  autoClose: 2000,
                });
                queryClient.invalidateQueries("get-user-preference");
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
        Update Parameter
      </div>
    </div>
  );
};

export default ParameterSelector;
