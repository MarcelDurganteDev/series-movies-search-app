import React from 'react';
import BannersContainer from '../../components/molecules/BannersContainer/BannersContainer';
import './LandingPage.scss';

function LandingPage ( props  ) {
    
  return (

    <div className='landing-container'>

      <BannersContainer img={props} />
      
      <div className='subtitle-banner'>
        <a href='/signup'>Movies</a>
        <a href='/signup'>Series</a>
      </div>

    </div>

  );
}

export default LandingPage;
