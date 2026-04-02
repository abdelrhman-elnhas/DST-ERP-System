"use client";
import { compactFormat } from "@/lib/format-number";
import { getOverviewData } from "../../fetch";
import { OverviewCard } from "./card";
import * as icons from "./icons";
import { useDashboard } from "@/hooks/useDashboard";

export function OverviewCardsGroup() {
  const dashboard = useDashboard();
  const data = dashboard?.data?.data;
  const stats = data?.stats;

  const { total_projects, total_tasks, total_gis_points, assets_in_use, pending_tasks } = stats ?? {};
  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-5 2xl:gap-7.5">
      <OverviewCard
        label="Total Projects"
        data={total_projects}
        Icon={icons.Views}
      />

      <OverviewCard
        label="Total Tasks"
        data={total_tasks}
        Icon={icons.Profit}
      />

      <OverviewCard
        label="Total GIS Points"
        data={total_gis_points}
        Icon={icons.Product}
      />

      <OverviewCard
        label="Assets In Use"
        data={assets_in_use}
        Icon={icons.Product}
      />

      <OverviewCard
        label="Pending Tasks"
        data={pending_tasks}
        Icon={icons.Users}
      />
    </div>
  );
}
