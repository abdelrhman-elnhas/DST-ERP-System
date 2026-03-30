"use client";

interface PaginationProps {
    currentPage: number;
    lastPage: number;
    from: number;
    to: number;
    total: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    onPageChange: (page: number) => void;
}

export function Pagination({
    currentPage,
    lastPage,
    from,
    to,
    total,
    hasNextPage,
    hasPrevPage,
    onPageChange,
}: PaginationProps) {
    const getPageNumbers = () => {
        const pages: number[] = [];
        const delta = 2;

        const rangeStart = Math.max(1, currentPage - delta);
        const rangeEnd = Math.min(lastPage, currentPage + delta);

        if (rangeStart > 1) {
            pages.push(1);
            if (rangeStart > 2) pages.push(-1);
        }

        for (let i = rangeStart; i <= rangeEnd; i++) {
            pages.push(i);
        }

        if (rangeEnd < lastPage) {
            if (rangeEnd < lastPage - 1) pages.push(-1);
            pages.push(lastPage);
        }

        return pages;
    };

    return (
        <div className="flex flex-col items-center justify-between gap-4 border-t border-stroke px-6 py-4 dark:border-dark-3 ">

            {/* Showing info */}
            {/* <p className="text-body-sm text-dark-5 dark:text-dark-6">
                Showing <span className="font-medium text-dark dark:text-white">{from}</span> to{" "}
                <span className="font-medium text-dark dark:text-white">{to}</span> of{" "}
                <span className="font-medium text-dark dark:text-white">{total}</span> results
            </p> */}

            {/* Page buttons */}
            <div className="flex items-center gap-1">

                {/* Previous */}
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={!hasPrevPage}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-stroke text-dark-5 transition hover:border-primary hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-3 dark:text-dark-6 dark:hover:border-primary dark:hover:bg-primary dark:hover:text-white"
                >
                    ‹
                </button>

                {/* Page numbers */}
                {getPageNumbers().map((page, index) =>
                    page === -1 ? (
                        // Ellipsis
                        <span
                            key={`ellipsis-${index}`}
                            className="flex h-9 w-9 items-center justify-center text-dark-5 dark:text-dark-6"
                        >
                            ...
                        </span>
                    ) : (
                        <button
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-medium transition
                ${page === currentPage
                                    ? "border-primary bg-primary text-white"
                                    : "border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary dark:hover:bg-primary"
                                }`}
                        >
                            {page}
                        </button>
                    )
                )}

                {/* Next */}
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={!hasNextPage}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-stroke text-dark-5 transition hover:border-primary hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-3 dark:text-dark-6 dark:hover:border-primary dark:hover:bg-primary dark:hover:text-white"
                >
                    ›
                </button>

            </div>
        </div>
    );
}