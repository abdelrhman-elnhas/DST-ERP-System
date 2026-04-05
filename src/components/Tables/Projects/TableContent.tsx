'use client'

import { PencilSquareIcon, ReturnToWarehouseIcon, TrashIcon, TrendingUpIcon, UploadIcon, XIcon } from "@/assets/icons";
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
import { useModalStore } from "@/store/modalStore";
import { Button } from "@/components/ui-elements/button";
import { Pagination } from "@/components/ui/Pagination";
import { useState } from "react";
import { useProjects } from "@/hooks/useProjects";
import { Project } from "@/types/project";
import { CreateProjectModal } from "@/components/Modals/CreateProjectModal";

const TableContent = () => {
    const [page, setPage] = useState(1);
    const { data: projects } = useProjects(page);
    const projectsData = projects?.data?.data;
    const pagination = projects?.data;
    const { openModal } = useModalStore();
    return (
        <>
            <div className="flex justify-end mb-4 me-1">
                <Button label="Create New Project" size="xsmall" variant="primary" shape="rounded" onClick={() =>
                    openModal("New Project", <CreateProjectModal />)
                } />
            </div>
            <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
                <Table>
                    <TableHeader>
                        <TableRow className="border-none bg-[#F7F9FC] dark:bg-dark-2 [&>th]:py-4 [&>th]:text-base [&>th]:text-dark [&>th]:dark:text-white">
                            <TableHead className="min-w-[155px] xl:pl-7.5">Project Name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Project Category</TableHead>
                            <TableHead>Start Date</TableHead>
                            <TableHead>End Date</TableHead>
                            <TableHead className="text-right xl:pr-7.5">Actions</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {projectsData?.map((item: Project, index: number) => (
                            <TableRow key={index} className="border-[#eee] dark:border-dark-3">
                                <TableCell className="min-w-[155px] xl:pl-7.5">
                                    <h5 className="text-dark dark:text-white">{item.name}</h5>

                                </TableCell>

                                <TableCell>
                                    <div
                                        className={cn(
                                            "max-w-fit rounded-full px-3.5 py-1 text-sm font-medium",
                                            {
                                                "bg-[#219653]/[0.08] text-[#219653]":
                                                    item.status === "active",
                                                "bg-[#D34053]/[0.08] text-[#D34053]":
                                                    item.status === "on_hold",
                                                "bg-[#125FBA]/[0.08] text-[#125FBA]":
                                                    item.status === "completed",
                                                "bg-[#FFA70B]/[0.08] text-[#FFA70B]":
                                                    item.status === "pending",
                                            },
                                        )}
                                    >
                                        {item.status === "active" ? "Active" : item.status === "on_hold" ? "On Hold" : item.status === "completed" ? "Completed" : "Pending"}
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <p className="text-dark dark:text-white">
                                        {item.category.name}
                                    </p>
                                </TableCell>

                                <TableCell>
                                    <p className="text-dark dark:text-white">
                                        {dayjs(item.start_date).format("MMM DD, YYYY")}
                                    </p>
                                </TableCell>

                                <TableCell>
                                    <p className="text-dark dark:text-white">
                                        {dayjs(item.end_date).format("MMM DD, YYYY") === "Invalid Date" && "Not Specified Yet"}
                                    </p>
                                </TableCell>




                                <TableCell className="xl:pr-7.5">
                                    <div className="flex items-center justify-end gap-x-3.5">

                                        <button className="hover:text-primary" >
                                            <span className="sr-only">Edit</span>
                                            <PencilSquareIcon />
                                        </button>

                                        <button className="hover:text-primary">
                                            <span className="sr-only">Delete</span>
                                            <TrashIcon />
                                        </button>
                                    </div>
                                </TableCell>
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

export default TableContent