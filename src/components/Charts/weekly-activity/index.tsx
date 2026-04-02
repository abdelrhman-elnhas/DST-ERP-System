"use client"
import { cn } from "@/lib/utils";
import { WeeklyActivityChart } from "./chart";
import { useDashboard } from "@/hooks/useDashboard";

type PropsType = {
  className?: string;
};

export function WeeklyActivity({ className }: PropsType) {

  const dashboard = useDashboard();
  const data = dashboard?.data?.data;
  const weeklyActivity = data?.weekly_activity;
  console.log(weeklyActivity);

  if (!weeklyActivity) return null;

  return (
    <div
      className={cn(
        "rounded-[10px] bg-white px-7.5 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-body-2xlg font-bold text-dark dark:text-white">
          Weekly Activity
        </h2>
      </div>

      <WeeklyActivityChart data={{ sales: [{ x: "sd", y: 1 }], revenue: [{ x: "sd", y: 1 }] }} />
    </div>
  );
}
