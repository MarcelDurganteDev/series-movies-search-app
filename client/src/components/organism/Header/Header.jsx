import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SIGNUP, LOGIN, LANDING, HOME } from '../../../routes';
import LOGO from '../../../assets/logo.png';
import loginIcon from '../../../assets/icon-login.png';
import lineIcon from '../../../assets/icon-line.png';
import logoutIcon from '../../../assets/icon-logout.png';
import moviesIcon from '../../../assets/icon-movies.png';
import seriesIcon from '../../../assets/icon-series.png';
import filtersIcon from '../../../assets/icon-filters.png';
import './Header.scss';

function Header() {
  const [locationPage, setLocationPage] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  let location = useLocation();

  const localStorage = window.localStorage.getItem( 'logged' ) ? true : false; 
  
  useEffect(() => {
    setIsLogged(localStorage);
  }, [localStorage]);

  useEffect(() => {
    if (location.pathname === SIGNUP) {
      setLocationPage('signup');
    } else if (location.pathname === LOGIN) {
      setLocationPage('login');
    } else if (location.pathname === LANDING) {
      setLocationPage('landing');
    } else if (location.pathname === HOME) {
      setLocationPage('home');
    }
  }, [[], location]);

  const handleLogout = () => {
    window.localStorage.clear();
    setIsLogged(false);
  };

  return (
    <header className='header'>
      {locationPage === 'landing' ? (
        <>
          <nav>
            <Link to={SIGNUP}>
              <img className='header-logo' src={LOGO} alt='logo' />
            </Link>
          </nav>
          {/* LOGIN */}
          <nav className='nav-links'>
            <div className='right-links'>
              <div className='login-links'>
                <Link to={LOGIN} className='login-icon-link'>
                  <img src={lineIcon} alt='vertical line' className='line' />
                  <div className='login'>Login</div>
                  <img
                    className='login-icon'
                    src={loginIcon}
                    alt='login icon'
                  />
                  <div className='login'>
                    <img src={lineIcon} alt='line' className='line' />
                  </div>
                </Link>
                <Link to='/signup' className='trial-button'>
                  Start your free trial
                </Link>
              </div>
            </div>
          </nav>
        </>
      ) : isLogged === true &&
        (locationPage === 'home' || 'home/movies' || 'home/series') ? (
        <>
          <nav>
            <Link to={LANDING}>
              <img className='header-logo' src={LOGO} alt='logo' />
            </Link>
          </nav>
          <nav className='search-links'>
            <div className='movies-menu'>
              <Link to='/home/movies' className='movies-icon-link'>
                <img
                  className='movies-icon'
                  src={moviesIcon}
                  alt='movies clicable icon'
                />
                <div className='movies-text-link'> Movies</div>
              </Link>
            </div>
            <div className='series-menu'>
              <Link to='/home/series' className='series-icon-link'>
                <img
                  className='series-icon'
                  src={seriesIcon}
                  alt='movies clicable icon'
                />
                <div className='series-text-link'>Series</div>
              </Link>
            </div>
          </nav>
          <nav className='nav-links'>
            <div className='filters-menu'>
              <Link to={HOME} className='filters-icon-link'>
                <img
                  className='filters-icon'
                  src={filtersIcon}
                  alt='filters clicable icon'
                />
                <div className='filters-text-link'>Filters</div>
              </Link>
            </div>
            <div className='right-links'>
              <div className='logout-links'>
                <Link to={LANDING} className='logout-icon-link'>
                  <img src={lineIcon} alt='vertical line' className='line' />
                  <div className='login logout-text-link' onClick={handleLogout}>
                    Logout
                  </div>
                  <img
                    className='logout-icon'
                    src={logoutIcon}
                    alt='logout icon'
                  />
                  <div className='logout'>
                    <img src={lineIcon} alt='line' className='line' />
                  </div>
                </Link>
                <Link to='/signup' className='become-premium-btn-gold'>
                  Enjoy Premium!
                </Link>
              </div>
            </div>
          </nav>
        </>
      ) : !isLogged && locationPage === 'signup' ? (
        <nav className='header-signup'>
          <div>
            <Link to={LANDING}>
              <img src={LOGO} alt='logo' />
            </Link>
          </div>
        </nav>
      ) : locationPage === 'login' ? (
        <>
          <nav>
            <Link to={SIGNUP}>
              <img className='header-logo' src={LOGO} alt='logo' />
            </Link>
          </nav>
          <nav className='nav-links'>
            <a href='/signup' className='become-premium-btn-gold'>
              Become Premium
            </a>
          </nav>
        </>
      ) : (
        <nav>
          <Link to={LANDING}>
            <img className='header-logo' src={LOGO} alt='logo' />
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
