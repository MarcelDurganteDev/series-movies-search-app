import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { API_CONTENT } from '../../config';
import SearchBar from '../../components/organism/SearchBar/SearchBar';
import MoviesList from '../../components/organism/MoviesList/MoviesList';
import SeriesList from '../../components/organism/SeriesList/SeriesList';
import MoviesAndSeries from '../../components/organism/MoviesAndSeries/MoviesAndSeries';
import ErrorPage from '../ErrorPage/ErrorPage';
import './HomePage.scss';

function HomePage() {
  const [content, setContent] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation().pathname;
  const pathname = location;

  const fetchMovies = async () => {
    try {
      setIsError(null);
      setIsLoading(true);
      const response = await fetch(API_CONTENT);
      const data = await response.json();
      setContent(data.entries);
      setIsLoading(false);
      window.localStorage.getItem('logged')
        ? setIsLogged(true)
        : setIsLogged(false);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  function handleSearch(searchTerm) {
    setSearchTerm(searchTerm);
    if (searchTerm !== '') {
      const results = content.filter(movie => {
        return Object.values(movie)
          .join('')
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(results);
    } else {
      setSearchResults(content);
    }
  }

  return (
    <div className='homepage-wrapper'>
      {isLogged && (
        <SearchBar
          term={searchTerm}
          handleSearch={handleSearch}
          searchTerm={setSearchTerm}
        />
      )}
      {isLogged && pathname === '/home' ? (
        <MoviesAndSeries
          setContent={setContent}
          isError={isError}
          isLoading={isLoading}
          content={searchResults.length < 1 ? content : searchResults}
          term={searchTerm}
          results={searchResults}
        />
      ) : isLogged && pathname === '/home/movies' ? (
        <MoviesList
          setContent={setContent}
          isError={isError}
          isLoading={isLoading}
          content={searchTerm.length < 1 ? content : searchResults}
          term={searchTerm}
          results={searchResults}
        />
      ) : isLogged && pathname === '/home/series' ? (
        <SeriesList
          setContent={setContent}
          isError={isError}
          isLoading={isLoading}
          content={searchTerm.length < 1 ? content : searchResults}
          term={searchTerm}
          results={searchResults}
        />
      ) : 
        <ErrorPage />
      }
    </div>
  );
}

export default HomePage;
