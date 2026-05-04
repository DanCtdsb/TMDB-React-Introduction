import { Button } from "./Button"

type PaginationProps = {
    page: number;
    maxPage: number;
    onClick: (page: number) => void;
};

export const Pagination = ({ page, maxPage, onClick }: PaginationProps) => {
    return (
        <div className="flex items-center gap-3">
            <Button onClick={() => onClick(Math.max(1, page - 1))} disabled={page === 1}>
                Prev
            </Button>
            <span className="text-[13px] text-white/40">{page}/{maxPage}</span>
            <Button onClick={() => onClick(Math.min(maxPage, page + 1))} disabled={page === maxPage}>
                Next
            </Button>
        </div>
    );
};