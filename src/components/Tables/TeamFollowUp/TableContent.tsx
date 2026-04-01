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
import { CreateDocumentModal } from "@/components/Modals/CreateDocumentModal";
import { Document } from "@/types/document";
import { DeleteItemModal } from "@/components/Modals/DeleteItemModal";
import { UpdateDocumentModal } from "@/components/Modals/UpdateDocumentModal";
import { Pagination } from "@/components/ui/Pagination";
import { useState } from "react";
import { useTeam } from "@/hooks/useTeam";
import { Team } from "@/types/team";

const TableContent = () => {
    const [page, setPage] = useState(1);
    const { data: team } = useTeam(page);
    const teamData = team?.data;
    const pagination = team?.data;
    const { openModal } = useModalStore();
    return (
        <>
            <div className="flex justify-end mb-4 me-1">
                <Button label="Create New Document" size="xsmall" variant="primary" shape="rounded" onClick={() =>
                    openModal("New Document", <CreateDocumentModal />)
                } />
            </div>
            <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
                <Table>
                    <TableHeader>
                        <TableRow className="border-none bg-[#F7F9FC] dark:bg-dark-2 [&>th]:py-4 [&>th]:text-base [&>th]:text-dark [&>th]:dark:text-white">
                            <TableHead className="min-w-[155px] xl:pl-7.5">Name</TableHead>
                            <TableHead>Team Leader</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead className="text-right xl:pr-7.5">Actions</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {teamData?.map((item: Team, index: number) => (
                            <TableRow key={index} className="border-[#eee] dark:border-dark-3">
                                <TableCell className="min-w-[155px] xl:pl-7.5">
                                    <h5 className="text-dark dark:text-white">{item.name}</h5>

                                </TableCell>

                                <TableCell>
                                    <p className="text-dark dark:text-white">
                                        {item.leader.name}
                                    </p>
                                </TableCell>

                                <TableCell>
                                    <p className="text-dark dark:text-white">
                                        {item.profiles[0].department}
                                    </p>
                                </TableCell>



                                <TableCell className="xl:pr-7.5">
                                    <div className="flex items-center justify-end gap-x-3.5">

                                        <button className="hover:text-primary">
                                            <span className="sr-only">Delete Team Member</span>
                                            <TrashIcon />
                                        </button>


                                        <button className="hover:text-primary" >
                                            <span className="sr-only">Update Team Member</span>
                                            <PencilSquareIcon />
                                        </button>
                                    </div >
                                </TableCell >
                            </TableRow >
                        ))}
                    </TableBody >
                </Table >

                {/* {pagination && (
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
                )} */}
            </div >
        </>
    )
}

export default TableContent