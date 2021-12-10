import React from 'react';

import './pagination.scss';

const Pagination = ({
  startIndex,
  endIndex,
  pageNumber,
  handlePrev,
  handleNext,
  authorsCount,
  authorsPerPage,
}) => {
  const isPrevDisable = pageNumber > 1;
  const lastPageNumber = Math.ceil(authorsCount / authorsPerPage);
  const isNextDisable = pageNumber === lastPageNumber;
  const spanInfo =
    pageNumber !== lastPageNumber
      ? `${startIndex + 1} - ${endIndex}`
      : `${startIndex + 1} - ${authorsCount}`;

  return (
    <div className="pagination">
      <button onClick={handlePrev} className="btn" disabled={!isPrevDisable}>
        {isPrevDisable && '←'}
      </button>
      <span className="pagination__page">{spanInfo}</span>
      <button onClick={handleNext} className="btn" disabled={isNextDisable}>
        {isNextDisable ? '' : '→'}
      </button>
    </div>
  );
};
export default Pagination;
