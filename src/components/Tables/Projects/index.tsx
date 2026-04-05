"use client"
import { useState } from "react";
import { ProjectsSkeleton } from "./Skeleton";
import TableContent from "./TableContent";
import { useProjects } from "@/hooks/useProjects";

export function ProjectsTable() {
  const [page, setPage] = useState(1);
  const { isLoading, isError } = useProjects(page);

  if (isError) {
    return (
      <div className="rounded-[10px] border border-stroke bg-white p-8 text-center shadow-1 dark:border-dark-3 dark:bg-gray-dark">
        <p className="text-red-500">Failed to load Projects data. Please try again later.</p>
      </div>
    );
  }

  return (
    <>
      {
        isLoading ? <ProjectsSkeleton /> : <TableContent />
      }
    </>
  );
}
