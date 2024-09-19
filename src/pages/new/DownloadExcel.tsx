import { Icon } from "@iconify/react";
import { CloudDownloadIcon } from "lucide-react";
import React from "react";

const DownloadExcel = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      type="button"
      onClick={() => {
        onClick();
      }}
      className="inline-flex items-center gap-x-2 rounded-xl bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      <Icon className="w-5 h-5" icon={"mdi:file-report-outline"} /> Generate
      Report
    </button>
  );
};

export default DownloadExcel;
