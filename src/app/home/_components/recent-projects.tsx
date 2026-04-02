"use client";
import { DotIcon } from "@/assets/icons";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useDashboard } from "@/hooks/useDashboard";
import { formatMessageTime } from "@/lib/format-message-time";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import Link from "next/link";

export function RecentProjects() {

  const dashboard = useDashboard();
  const data = dashboard?.data?.data;
  const recentProjects = data?.recent_projects;

  if (!recentProjects) return null;

  return (
    <div className="col-span-12 rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h2 className=" px-4 sm:px-7.5 text-body-2xlg font-bold text-dark dark:text-white">
        Recent Projects
      </h2>

      <div className="rounded-[10px]  bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
        <Table className="scroll-x">
          <TableHeader>
            <TableRow className="border-none bg-[#F7F9FC] dark:bg-dark-2 [&>th]:py-4 [&>th]:text-base [&>th]:text-dark [&>th]:dark:text-white">
              <TableHead className="min-w-[155px] xl:pl-7.5">Name</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Start Date</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {recentProjects?.map((project) => (
              <TableRow key={project.name} className="border-[#eee] dark:border-dark-3">
                <TableCell className="min-w-[155px] xl:pl-7.5">
                  <h5 className="text-dark dark:text-white">{project.name}</h5>
                </TableCell>

                <TableCell>
                  <p className="text-dark dark:text-white">
                    {project.client.name}
                  </p>
                </TableCell>

                <TableCell>
                  <p className="text-dark dark:text-white">
                    {project.status}
                  </p>
                </TableCell>

                <TableCell>
                  <p className="text-dark dark:text-white">
                    {dayjs(project.start_date).format("MMM DD, YYYY")}
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div >
  );
}
