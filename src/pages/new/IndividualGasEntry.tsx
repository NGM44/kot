import React from "react";

const InfoRow = ({
  title,
  subtitle,
  dotColor,
  value,
}: {
  title: any;
  subtitle: any;
  dotColor: any;
  value: any;
}) => {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center space-x-3">
        <div
          className={`w-3 h-3 rounded-sm`}
          style={{ backgroundColor: dotColor }}
        />
        <div>
          <h3 className="font-semibold text-gray-900 text-xs1">{title}</h3>
          <p className="text-gray-500 text-xs">{subtitle}</p>
        </div>
      </div>
      <div className="font-semibold text-gray-900">{value}</div>
    </div>
  );
};

export default InfoRow;
