import React, { useState } from 'react';

type DatePickerProps = {
  label?: string;
  value?: string;
  onChange: (date: string) => void;
};

const DatePicker: React.FC<DatePickerProps> = ({ label, value, onChange }) => {
  const [selectedDate, setSelectedDate] = useState(value || '');

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = e.target.value;
    setSelectedDate(dateValue);
    onChange(dateValue);
  };

  return (
    <div className="flex flex-col space-y-2">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default DatePicker;
