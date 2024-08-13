import { AppContext } from "../context/AppContext";
import { useContext } from "react";

function Pagination() {
    const { page, totalPages, handlePageChange } = useContext(AppContext);

    return (
        <div className="border-2 py-3 flex justify-center items-center space-x-6">
            <div className="flex space-x-4 ">
                {page > 1 && (
                    <button
                        onClick={() => handlePageChange(page - 1)}
                        className="mx-2 px-4 py-2   "
                    >
                        Previous
                    </button>
                )}
                {page < totalPages && (
                    <button
                        onClick={() => handlePageChange(page + 1)}
                        className="mx-2 px-4 py-2"
                    >
                        Next
                    </button>
                )}
            </div>

            <div>
                <p className="text-gray-700">
                    Page {page} of {totalPages}
                </p>
            </div>
        </div>
    );
}

export default Pagination;
