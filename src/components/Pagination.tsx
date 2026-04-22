import { Button } from "./Button"

type PaginationProps = {
    page: number;
    maxPage: number;
    onClick: (page) => void;
};

export const Pagination = ({page, maxPage, onClick} : PaginationProps) => {
    return (
        <div>
            <Button onClick={() => onClick(Math.max(1, page - 1))} disabled={page===1}>
                Prev
            </Button>
            <div>
                {page}/{maxPage};
            </div>
            <Button onClick={() => onClick(Math.min(maxPage, page + 1))} disabled={page===maxPage}>
                Next
            </Button>
        </div>
    );
};