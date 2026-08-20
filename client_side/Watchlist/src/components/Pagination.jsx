import "../styles/Pagination.css"


export default function Pagination({ currentPage, totalPages, onPageChange }) {
    if (totalPages <= 1) return null;  //to not show pagination if data is just one page

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    } //this for loop pushed the number of pages for each data entry from the backend
    return (
        <div className="pagination">
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                Prev
            </button>
            {pageNumbers.map((num) => (
                <button
                    key={num}
                    className={num === currentPage ? "active" : ""}
                    onClick={() => onPageChange(num)}
                >
                    {num}
                </button>
            ))}

            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Next
            </button>
        </div>
    )
}
