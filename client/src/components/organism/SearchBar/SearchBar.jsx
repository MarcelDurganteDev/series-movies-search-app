import React, { useRef } from 'react';

import './SearchBar.scss';
import searchIcon from '../../../assets/icon-search.png';
import calendarIcon from '../../../assets/icon-calendar.png';

const SearchBar = props => {
  const inputRef = useRef( null );
  
  const { term, handleSearch } = props;

  const getSearchTerm = () => {
    handleSearch(inputRef.current.value);
  };
  
  return (
    <div className='search-bar'>
      <form className='search-name-form'>
        <label htmlFor='search' className='input-label'>
          <img src={searchIcon} alt='' />
          <input
            ref={inputRef}
            type='text'
            className='search-input'
            placeholder=' Name'
            onChange={getSearchTerm}
            value={term}
          />
        </label>
      </form>
      <form className='search-year-form'>
        <div className='calendar-input'>
          <img src={calendarIcon} alt='' />
          <input
            type='calendar'
            className='search-input'
            placeholder='   Year'
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
