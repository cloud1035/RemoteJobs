import React, { useState } from "react";
export default function ({
  jobsPerPage,
  totalJobs,
  paginate,
  currentPage,
  setCurrentPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i);
  }
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  console.log(maxPageNumberLimit, currentPage);

  return (
    <nav className="text-center">
      <ul className="pagination">
        {currentPage >= pageNumbers[5] && (
          <li
            className="page-item page-link"
            onClick={() => {
              setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
              setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
              paginate(maxPageNumberLimit - 5);
            }}
          >
            &hellip;
          </li>
        )}
        {currentPage != pageNumbers[0] && (
          <li className="page-item">
            <button
              href="!#"
              className="page-link"
              onClick={() => {
                setCurrentPage(currentPage - 1);
                if ((currentPage - 1) % pageNumberLimit === 0) {
                  setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
                  setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
                }
              }}
              disabled={currentPage == pageNumbers[0] ? true : false}
            >
              Previous
            </button>
          </li>
        )}

        {pageNumbers.map((number) => {
          if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
              <li
                key={number}
                className={currentPage === number ? "active" : "page-item"}
              >
                <a
                  onClick={() => paginate(number)}
                  href="!#"
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            );
          } else {
            return null;
          }
        })}
        {currentPage != pageNumbers[pageNumbers.length - 1] && (
          <li className="page-item">
            <button
              className="page-link"
              href="!#"
              disabled={
                currentPage == pageNumbers[pageNumbers.length - 1]
                  ? true
                  : false
              }
              onClick={() => {
                setCurrentPage(currentPage + 1);
                if (currentPage + 1 > maxPageNumberLimit) {
                  setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
                  setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
                }
              }}
            >
              Next
            </button>
          </li>
        )}
        {maxPageNumberLimit <= pageNumbers[pageNumbers.length - 1] && (
          <li
            className="page-item page-link"
            onClick={() => {
              setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
              setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
              paginate(minPageNumberLimit + 6);
            }}
          >
            &hellip;
          </li>
        )}
      </ul>
    </nav>
  );
}
