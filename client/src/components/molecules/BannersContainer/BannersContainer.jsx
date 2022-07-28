import React from 'react';
// import { MOVIES, SERIES } from '../../../routes';
import moviesBanner from '../../../assets/poster-movies.png';
import seriesBanner from '../../../assets/poster-series.png';
import './BannersContainer.scss';

function BannersContainer(props) {
  return (
    <>
      <div className='banners-container'>
          <img
            src={moviesBanner}
            alt='avengers movie poster'
            className='movies-banner'
          />
          <img
            src={seriesBanner}
            alt='ramdom movies poster'
            className='series-banner'
          />
      </div>
    </>
  );
}

export default BannersContainer;
