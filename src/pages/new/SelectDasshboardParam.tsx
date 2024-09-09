import React, { useState, useEffect } from "react";
import { X, Search, Plus } from "lucide-react";

const parameters = [
  "temperature",
  "humidity",
  "pressure",
  "co2",
  "vocs",
  "light",
  "noise",
  "pm1",
  "pm25",
  "pm4",
  "pm10",
  "aiq",
  "gas1",
  "gas2",
  "gas3",
  "gas4",
  "gas5",
  "gas6",
];

const ParameterSelector = () => {
  const [selected, setSelected] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  const filteredParameters = parameters.filter(
    (param) =>
      param.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !selected.includes(param)
  );

  const handleSelect = (param: any) => {
    if (selected.length < 6) {
      setSelected([...selected, param]);
      setError("");
      setSearchTerm("");
    } else {
      setError("You can select a maximum of 6 parameters.");
    }
  };

  const handleRemove = (param: any) => {
    setSelected(selected.filter((p: any) => p !== param));
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
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Parameter Selector
      </h2>

      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search parameters..."
            className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-3 text-gray-400" size={20} />
        </div>
      </div>

      <div className="mb-4 min-h-[100px] bg-gray-50 p-3 rounded-lg">
        {selected.map((param: any) => (
          <span
            key={param}
            className="inline-flex items-center bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 transition-all hover:bg-blue-600"
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
        {selected.length === 0 && (
          <p className="text-gray-500 italic">
            Selected parameters will appear here
          </p>
        )}
      </div>

      {error && <p className="text-red-500 mb-2 font-semibold">{error}</p>}

      <ul className="bg-gray-100 rounded-lg overflow-hidden">
        {filteredParameters.map((param) => (
          <li
            key={param}
            onClick={() => handleSelect(param)}
            className="cursor-pointer hover:bg-gray-200 p-3 flex items-center justify-between transition-colors"
          >
            <span>{param}</span>
            <Plus size={18} className="text-blue-500" />
          </li>
        ))}
        {filteredParameters.length === 0 && (
          <li className="p-3 text-gray-500 italic">
            No matching parameters found
          </li>
        )}
      </ul>

      <p className="mt-4 text-sm text-gray-600">
        Select 2-6 parameters. Currently selected: {selected.length}
      </p>
    </div>
  );
};

export default ParameterSelector;
