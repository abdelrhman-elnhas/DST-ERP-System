"use client"
import { useState } from "react";
import { AssetsControlSkeleton } from "./Skeleton";
import TableContent from "./TableContent";
import { useAssets } from "@/hooks/useAssets";

export function AssetsControlTable() {
  const [page, setPage] = useState(1);
  const { isLoading, isError } = useAssets(page);

  if (isError) {
    return (
      <div className="rounded-[10px] border border-stroke bg-white p-8 text-center shadow-1 dark:border-dark-3 dark:bg-gray-dark">
        <p className="text-red-500">Failed to load team data. Please try again later.</p>
      </div>
    );
  }

  return (
    <>
      {
        isLoading ? <AssetsControlSkeleton /> : <TableContent />
      }
    </>
  );
}
