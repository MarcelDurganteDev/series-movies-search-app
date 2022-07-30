import React, { useState, useEffect } from 'react';
import CardItem from '../../molecules/CardItem/CardItem';
import Pagination from '../../molecules/Pagination/Pagination';

const MoviesList = props => {
  const [pageNumber, setPageNumber] = useState(0);
  const [movies, setMovies] = useState([]);

  const { content } = props;

  const renderMovies = async content => {
    const moviesFiltered = await content.filter(
      cont => cont.programType === 'movie'
    );
    const moviesSliced = moviesFiltered.slice(0, moviesFiltered.length);
    setMovies(moviesSliced);
  };

  useEffect(() => {
    renderMovies(content);
  });

  const moviesPerPage = 10;
  const pagesVisited = pageNumber * moviesPerPage;

  const displayMovies = movies
    .slice(pagesVisited, pagesVisited + moviesPerPage)
    .map((movie, index) => <CardItem key={index} {...movie} />);

  const moviesQty = movies.length;
  const pageCount = Math.ceil(moviesQty / moviesPerPage);

  const changeNextPage = () => {
    if (pageNumber < pageCount - 1) {
      setPageNumber(pageNumber + 1);
    }
  };

  const changeCurrentPage = ( e ) => {
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
  console.log('MOVIES PER PAGE', moviesPerPage);

  return (
    <div className='movies-container'>
      {displayMovies}
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

export default MoviesList;
