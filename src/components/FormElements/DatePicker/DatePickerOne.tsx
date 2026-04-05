"use client";

import { Calendar } from "@/components/Layouts/sidebar/icons";
import flatpickr from "flatpickr";
import { useEffect, useRef } from "react";

interface DatePickerOneProps {
  value?: string;
  onChange?: (date: string) => void;
  label?: string;
}

const DatePickerOne = ({ value, onChange, label = "Date picker" }: DatePickerOneProps) => {
  const dateInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (dateInputRef.current) {
      flatpickr(dateInputRef.current, {
        mode: "single",
        static: true,
        monthSelectorType: "static",
        dateFormat: "M j, Y",
        defaultDate: value,
        onChange: (selectedDates, dateStr) => {
          if (onChange) {
            onChange(dateStr);
          }
        },
      });
    }
  }, [onChange, value]);

  return (
    <div>
      <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
        {label}
      </label>
      <div className="relative">
        <input
          ref={dateInputRef}
          className="form-datepicker w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:focus:border-primary"
          placeholder="mm/dd/yyyy"
          defaultValue={value}
          data-class="flatpickr-right"
        />

        <div className="pointer-events-none absolute inset-0 left-auto right-5 flex items-center">
          <Calendar className="size-5 text-[#9CA3AF]" />
        </div>
      </div>
    </div>
  );
};

export default DatePickerOne;

