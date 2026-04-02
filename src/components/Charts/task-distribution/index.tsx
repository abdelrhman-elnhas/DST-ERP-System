"use client"

import { PeriodPicker } from "@/components/period-picker";
import { DonutChart } from "./chart";
import { cn } from "@/lib/utils";
import { useDashboard } from "@/hooks/useDashboard";

type PropsType = {
  timeFrame?: string;
  className?: string;
};

export function TaskDistribution({
  className,
}: PropsType) {


  const dashboard = useDashboard();
  const data = dashboard?.data?.data;
  const tasks = data?.task_distribution;
  if (!tasks) return null;

  return (
    <div
      className={cn(
        "grid grid-cols-1 grid-rows-[auto_1fr] gap-9 rounded-[10px] bg-white p-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        className,
      )}    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-body-2xlg font-bold text-dark dark:text-white">
          Task Distribution
        </h2>

      </div>

      <div className="grid place-items-center">
        <DonutChart data={tasks} />
      </div>
    </div>
  );
}
