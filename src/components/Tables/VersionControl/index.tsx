"use client"
import { useState } from "react";
import { VersionControlSkeleton } from "./Skeleton";
import TableContent from "./TableContent";
import { useDocuments } from "@/hooks/useDocuments";

export function DocumentTable() {
  const [page, setPage] = useState(1);

  const { isLoading } = useDocuments(page);



  return (

    <>
      {
        isLoading ? <VersionControlSkeleton /> : <TableContent />
      }

    </>
  );
}
