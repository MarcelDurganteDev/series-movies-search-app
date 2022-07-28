import React, { useState } from 'react';
import CardItem from '../../molecules/CardItem/CardItem';
import Pagination from '../../molecules/Pagination/Pagination';

const MoviesAndSeries = props => {
  const [pageNumber, setPageNumber] = useState(0);

  const { content } = props;

  const allPerPage = 10;
  const pagesVisited = pageNumber * allPerPage;

  const displayAll = content
    .slice(pagesVisited, pagesVisited + allPerPage)
    .map((movie, index) => <CardItem key={index} {...movie} />);

  const allQty = content.length;
  const pageCount = Math.ceil(allQty / allPerPage);

  const changeNextPage = () => {
    if (pageNumber < pageCount - 1) {
      setPageNumber(pageNumber + 1);
    }
  };

  const changeCurrentPage = e => {
    const page = e.target.innerText;
    setPageNumber(page - 1);
  };

  const changePreviousPage = () => {
    if (pageNumber < pageCount) {
      setPageNumber(pageNumber - 1);
    }
  };


  console.log('PAGE COUNT', pageCount);
  console.log('PAGE NUMBER', pageNumber);
  console.log('PAGES VISITED', pagesVisited);
  console.log('ALL PER PAGE', allPerPage);

  return (
    <div className='movies-series-container'>
      {displayAll}
      <Pagination
        pageCount={pageCount}
        pageNumber={pageNumber}
        changeNextPage={changeNextPage}
        changePreviousPage={changePreviousPage}
        changeCurrentPage={changeCurrentPage}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

export default MoviesAndSeries;
