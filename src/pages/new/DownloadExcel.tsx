import { CloudDownloadIcon } from "lucide-react";
import React from "react";

const DownloadExcel = () => {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-x-2 rounded-xl bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      <CloudDownloadIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
      Download Report
    </button>
  );
};

export default DownloadExcel;
