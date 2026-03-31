import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export function TeamFollowUpSkeleton() {
    return (
        <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
            <h2 className="mb-5.5 text-body-2xlg font-bold text-dark dark:text-white">
                Team Follow Up
            </h2>

            <Table>
                <TableHeader>
                    <TableRow className="border-none bg-[#F7F9FC] dark:bg-dark-2 [&>th]:py-4 [&>th]:text-base [&>th]:text-dark [&>th]:dark:text-white">
                        <TableHead className="min-w-[155px] xl:pl-7.5">Title</TableHead>
                        <TableHead>Document Number</TableHead>
                        <TableHead>Project</TableHead>
                        <TableHead>Latest Version</TableHead>
                        <TableHead className="text-right xl:pr-7.5">Actions</TableHead>
                    </TableRow>
                </TableHeader>


                <TableBody>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <TableRow key={i}>
                            <TableCell colSpan={100}>
                                <Skeleton className="h-8" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
