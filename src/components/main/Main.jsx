import React, { useState } from 'react';
import Authors from '../authors/Authors';
import Pagination from '../pagination/Pagination';

import './main.scss';

const Main = ({ authors, onSortByPageviews, onSortByName }) => {
  const [searchInfo, setSearchInfo] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [authorsPerPage, setAuthorsPerPage] = useState(10);

  const handlePrev = () => {
    setPageNumber(pageNumber - 1);
  };

  const handleNext = () => {
    setPageNumber(pageNumber + 1);
  };

  const filteredAuthors = authors.filter(author => {
    if (!searchInfo) {
      return author;
    }
    return author.name.toLowerCase().includes(searchInfo.toLowerCase());
  });

  const startIndex = (pageNumber - 1) * authorsPerPage;
  const endIndex = startIndex + authorsPerPage;

  const autorsToRender = filteredAuthors.slice(startIndex, endIndex);

  return (
    <div className="main-container">
      <div className="main-container__input">
        <form className="search-form" name="searchForm">
          <div className="search-form__search-input">
            <i className="fas fa-search search-form__icon"></i>
            <input
              className="search-form__input"
              type="text"
              placeholder="Search"
              value={searchInfo}
              onChange={e => setSearchInfo(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className="main-container__authors">
        <div className="authors-block">
          <table className="authors-block-table">
            <thead>
              <tr className="authors-block-table__body-info">
                <th colSpan="3">
                  <button className="authors-block-table__btn" onClick={() => onSortByName()}>
                    <i className=" authors-block-table__btn-icon fas fa-angle-double-down"></i>
                    Sort by name
                  </button>
                </th>

                <th colSpan="2">
                  <button className="authors-block-table__btn" onClick={() => onSortByPageviews()}>
                    <i className=" authors-block-table__btn-icon fas fa-angle-double-down"></i>
                    Sort by pageviews
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="authors-block-table__body">
              {autorsToRender.map((author, index) => {
                return <Authors number={index} key={index} {...author} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination
        startIndex={startIndex}
        endIndex={endIndex}
        pageNumber={pageNumber}
        authorsCount={authors.length}
        authorsPerPage={authorsPerPage}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
};

export default Main;
