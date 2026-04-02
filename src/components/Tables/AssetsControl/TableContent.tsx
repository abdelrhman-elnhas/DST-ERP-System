'use client'

import { CheckoutWithReturnIcon, PencilSquareIcon, ReturnToWarehouseIcon, TrashIcon, TrendingUpIcon, UploadIcon, XIcon } from "@/assets/icons";
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
import { useAssets } from "@/hooks/useAssets";
import { Asset } from "@/types/asset";
import AssetCheckoutModal from "@/components/Modals/AssetCheckoutModal";
import AssetReturnModal from "@/components/Modals/AssetReturnModal";

const TableContent = () => {
    const [page, setPage] = useState(1);
    const { data: assets } = useAssets(page);
    const assetsData = assets?.data?.data;
    const pagination = assets?.data;
    const { openModal } = useModalStore();
    return (
        <>
            <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
                <Table>
                    <TableHeader>
                        <TableRow className="border-none bg-[#F7F9FC] dark:bg-dark-2 [&>th]:py-4 [&>th]:text-base [&>th]:text-dark [&>th]:dark:text-white">
                            <TableHead className="min-w-[155px] xl:pl-7.5">Name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Serial Number</TableHead>
                            <TableHead>Purchase Date</TableHead>
                            <TableHead className="text-right xl:pr-7.5">Actions</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {assetsData?.map((item: Asset, index: number) => (
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
                                                    item.status === "available",
                                                "bg-[#D34053]/[0.08] text-[#D34053]":
                                                    item.status === "in_use",
                                                "bg-[#FFA70B]/[0.08] text-[#FFA70B]":
                                                    item.status === "Pending",
                                            },
                                        )}
                                    >
                                        {item.status === "available" ? "Available" : item.status === "in_use" ? "In Use" : "Pending"}
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <p className="text-dark dark:text-white">
                                        {item.category.name}
                                    </p>
                                </TableCell>

                                <TableCell>
                                    <p className="text-dark dark:text-white">
                                        {item.serial_number}
                                    </p>
                                </TableCell>

                                <TableCell>
                                    <p className="text-dark dark:text-white">
                                        {dayjs(item.purchase_date).format("MMM DD, YYYY")}
                                    </p>
                                </TableCell>

                                <TableCell className="xl:pr-7.5">
                                    <div className="flex items-center justify-end gap-x-3.5">

                                        <button className="hover:text-primary" onClick={() =>
                                            openModal("Asset Checkout", <AssetCheckoutModal id={Number(item.id)} name={item.name} />)
                                        }>
                                            <span className="sr-only">Asset Return</span>
                                            <CheckoutWithReturnIcon />
                                        </button>

                                        <button className="hover:text-primary" onClick={() =>
                                            openModal("Asset Return", <AssetReturnModal id={Number(item.id)} name={item.name} />)
                                        }>
                                            <span className="sr-only">Asset Checkout</span>
                                            <ReturnToWarehouseIcon />
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