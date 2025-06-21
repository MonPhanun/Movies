// src/components/PaginationControls.jsx
import React from 'react';

import "./../styles/pagination.scss"

type PaginationControlsProps = {
    startPage?:number;
  totalPages?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
};

const PaginationControls: React.FC<PaginationControlsProps> = ({
startPage=0,
  totalPages = 0,
  currentPage = 0,
  onPageChange = () => {},
}) => {

  const pageNumbers = [];

  for (let i = startPage; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav className="pagination-container">
      <ul className="pagination-list">
        <li className="pagination-item">
          <button
            onClick={handlePrevClick}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="pagination-item">
            <button
              onClick={() => onPageChange(number)}
              className={`pagination-button ${
                currentPage === number ? 'active' : ''
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        <li className="pagination-item">
          <button
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationControls;