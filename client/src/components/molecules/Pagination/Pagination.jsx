import React, { useEffect, useState } from 'react';
import leftArrow from '../../../assets/icon-left-arrow.png';
import rightArrow from '../../../assets/icon-right-arrow.png';

import './Pagination.scss';

function Pagination(props) {
  const [range, setRange] = useState( [] );
  
  const {
    pageCount,
    pageNumber,
    changeCurrentPage,
    changePreviousPage,
    changeNextPage
  } = props;

  const pageNumbers = pageCount;

  useEffect(() => {
    let length = pageNumbers;
    const range = Array.from({ length }, (_, idx) => idx);
    setRange(range);
  }, [pageCount]);

  return (
    <div className='pagination-container'>
      <button onClick={changePreviousPage} {...{ disabled: pageNumber === 0 }}>
        <img src={leftArrow} alt='left arrow' className='left-arrow' />
      </button>
      {range.map( page => (
        <button onClick={changeCurrentPage} className='page-number' key={page}>
          {page + 1}
      </button>
      ) )}
      <button onClick={changeNextPage} {...{ disabled: pageNumber === 3 }}>
        <img src={rightArrow} alt='right arrow' className='right-arrow' />
      </button>
    </div>
  );
}

export default Pagination;
