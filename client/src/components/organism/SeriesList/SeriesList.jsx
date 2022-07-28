import React, {useState, useEffect} from 'react';
import CardItem from '../../molecules/CardItem/CardItem';
import Pagination from '../../molecules/Pagination/Pagination';

const SeriesList = props => {
  const [pageNumber, setPageNumber] = useState(0);
  const [series, setSeries] = useState([]);

  const { content } = props;

  const renderSeries = async content => {
    const seriesFiltered = await content.filter(
      cont => cont.programType === 'series'
    );
    const seriesSliced = seriesFiltered.slice(0, seriesFiltered.length);
    setSeries(seriesSliced);
  };

  useEffect(() => {
    renderSeries(content);
  }, []);

  const seriesPerPage = 10;
  const pagesVisited = pageNumber * seriesPerPage;

  const displaySeries = series
    .slice(pagesVisited, pagesVisited + seriesPerPage)
    .map((serie, index) => <CardItem key={index} {...serie} />);

  const seriesQty = series.length;
  const pageCount = Math.ceil(seriesQty / seriesPerPage);

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

  return (
    <div className='series-container'>
      {displaySeries}
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

export default SeriesList;
