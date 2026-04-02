'use client'

import { PencilSquareIcon, TrashIcon } from "@/assets/icons";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import { PreviewIcon } from "../icons";
import { useModalStore } from "@/store/modalStore";
import { Button } from "@/components/ui-elements/button";

import { Pagination } from "@/components/ui/Pagination";
import { useState } from "react";
import { useReports } from "@/hooks/useReports";
import { Report, ReportResponse } from "@/types/report";
import { CreateReportModal } from "@/components/Modals/CreateReport";

const FieldReportsTable = () => {
    const [page, setPage] = useState(1);
    const { data }: { data: ReportResponse | undefined } = useReports(page)
    const reports = data?.data?.data;
    console.log("reports", reports);
    const pagination = data?.data;
    const { openModal } = useModalStore();
    return (
        <>
            <div className="flex justify-end mb-4 me-1">
                <Button label="Create New Report" size="xsmall" variant="primary" shape="rounded" onClick={() => openModal("Create New Report", <CreateReportModal />)} />
            </div>
            <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
                <Table>
                    <TableHeader>
                        <TableRow className="border-none bg-[#F7F9FC] dark:bg-dark-2 [&>th]:py-4 [&>th]:text-base [&>th]:text-dark [&>th]:dark:text-white">
                            <TableHead className="min-w-[155px] xl:pl-7.5">Project Name</TableHead>
                            <TableHead>Author Name</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Report Summary</TableHead>
                            <TableHead>Weather Conditions</TableHead>
                            {/* <TableHead className="text-right xl:pr-7.5">Actions</TableHead> */}
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {reports && reports?.map((report: Report, index: number) => (
                            <TableRow key={index} className="border-[#eee] dark:border-dark-3">
                                <TableCell className="min-w-[155px] xl:pl-7.5">
                                    <h5 className="text-dark dark:text-white">{report.project?.name}</h5>

                                </TableCell>

                                <TableCell>
                                    <p className="text-dark dark:text-white">
                                        {report.author?.name}
                                    </p>
                                </TableCell>

                                <TableCell>
                                    <p className="text-dark dark:text-white">
                                        {dayjs(report.report_date).format("MMM DD, YYYY")}
                                    </p>
                                </TableCell>

                                <TableCell>
                                    <p className="text-dark dark:text-white">
                                        {report.summary}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className="text-dark dark:text-white">
                                        {report.weather_conditions}
                                    </p>
                                </TableCell>

                                {/* <TableCell>
                <div
                  className={cn(
                    "max-w-fit rounded-full px-3.5 py-1 text-sm font-medium",
                    {
                      "bg-[#219653]/[0.08] text-[#219653]":
                        item.status === "Paid",
                      "bg-[#D34053]/[0.08] text-[#D34053]":
                        item.status === "Unpaid",
                      "bg-[#FFA70B]/[0.08] text-[#FFA70B]":
                        item.status === "Pending",
                    },
                  )}
                >
                  {item.status === "Paid" ? "Active" : item.status === "Unpaid" ? "Inactive" : "Pending"}
                </div>
              </TableCell> */}



                                {/* <TableCell className="xl:pr-7.5">
                                    <div className="flex items-center justify-end gap-x-3.5">
                                        <button className="hover:text-primary" >
                                            <span className="sr-only">View Project File</span>
                                            <PreviewIcon />
                                        </button>

                                        <button className="hover:text-primary" >
                                            <span className="sr-only">Delete Document</span>
                                            <TrashIcon />
                                        </button> */}

                                {/* <button className="hover:text-primary" onClick={() => window.open(`https://lightcoral-kingfisher-539840.hostingersite.com/${item.versions[item.versions.length - 1].file_path}`, "_blank", "download")}>
                      <span className="sr-only">Download Document</span>
                      <DownloadIcon />
                    </button> */}
                                {/* <button className="hover:text-primary">
                                            <span className="sr-only">Update Document Version</span>
                                            <PencilSquareIcon />
                                        </button>
                                    </div>
                                </TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {pagination && (
                    <Pagination
                        currentPage={pagination.current_page}
                        lastPage={pagination.last_page}
                        from={pagination.from}
                        to={pagination.to}
                        total={pagination.total}
                        hasNextPage={!!pagination.next_page_url}
                        hasPrevPage={!!pagination.prev_page_url}
                        onPageChange={(newPage) => setPage(newPage)}
                    />
                )}
            </div>
        </>
    )
}

export default FieldReportsTable;