"use client";

import { compactFormat } from "@/lib/format-number";
import { TaskDistribution } from "@/types/dashboard";
import type { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";


const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export function DonutChart({ data }: { data: TaskDistribution | undefined }) {



  const entries = data ? Object.entries(data) : [];

  const chartOptions: ApexOptions = {
    chart: {
      type: "donut",
      fontFamily: "inherit",
    },
    colors: ["#2a809c", "#3a9ab5", "#5ab5cc", "#8fd0e0"],
    labels: entries.map(([key]) =>
      key.split("_").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    ),
    legend: {
      show: true,
      position: "bottom",
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
      formatter: (legendName, opts: any = 0) => {
        const { seriesPercent } = opts?.w.globals;
        return `${legendName}: ${seriesPercent[opts?.seriesIndex]}%`;
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "80%",
          background: "transparent",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              label: "Total Tasks",
              fontSize: "16px",
              fontWeight: "400",
            },
            value: {
              show: true,
              fontSize: "28px",
              fontWeight: "bold",
              formatter: (val) => compactFormat(+val),
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 415,
          },
        },
      },
      {
        breakpoint: 1920,
        options: {
          chart: {
            width: 350,
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: "100%",
          },
        },
      },
      {
        breakpoint: 370,
        options: {
          chart: {
            width: 260,
          },
        },
      },
    ],
  };

  return (
    <Chart
      options={chartOptions}
      series={entries.map(([, val]) => val)}
      type="donut"
    />
  );
}
