import React from 'react';

const EmptyTable = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 bg-white rounded-xl">
      <svg
        className="w-24 h-24 mb-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
      <div className="text-gray-500">No data available</div>
    </div>
  );
};

export default EmptyTable;