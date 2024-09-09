import React from "react";

const ResponsiveValueDisplay = ({ values }: { values: any[] }) => {
  // Ensure we have at least 2 and at most 6 values


  // Determine the grid columns based on the number of values
  const gridCols: any = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
    6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">
          Dynamic Value Display
        </h2>
      </div>
      <div className="p-6">
        <div className={`grid ${gridCols[values.length]} gap-4`}>
          {values.map((value: any, index: number) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2 text-gray-700">
                Value {index + 1}
              </h3>
              <p className="text-2xl font-bold text-gray-900">{}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveValueDisplay;
