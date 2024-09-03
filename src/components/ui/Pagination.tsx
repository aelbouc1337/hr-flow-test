import React from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";

// Define the type for the component props
interface PaginationProps {
  totalPages: number;
  page: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  page,
  setPage,
}) => {
  const handlePreviousClick = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextClick = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="w-full flex justify-center items-center gap-4 py-4">
      <button
        onClick={handlePreviousClick}
        className={`flex items-center gap-1 lg:text-xl ${
          page === 1 ? "text-slate-400" : "text-primary"
        }`}
        disabled={page === 1}
      >
        <MdSkipPrevious /> Previous Page
      </button>
      <span className="text-primary rounded-xl shadow-lg p-2 border lg:text-xl">
        Page {page} of {totalPages}
      </span>
      <button
        onClick={handleNextClick}
        className={`flex items-center gap-1 lg:text-xl ${
          page === totalPages ? "text-slate-400" : "text-primary"
        }`}
        disabled={page === totalPages}
      >
        Next Page <MdSkipNext />
      </button>
    </div>
  );
};

export default Pagination;
