import React from 'react';
import LOGO from '../../../assets/logo.png';
import { HOME, TERMS, LEGAL, HELP, ACCOUNT } from '../../../routes';
import appStore from '../../../assets/app-store.png';
import googlePlay from '../../../assets/google-play.png';
import './Footer.scss';

/**
 * @TODO finish styling.
 * @returns 
 */

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img className='footer-logo-img' src={LOGO} alt='footer logo' />
      </div>
      <div className='footer-menu'>
        <a href={HOME}>Home</a>
        <a href={TERMS}>Terms of Use</a>
        <a href={LEGAL}>Legal Notices</a>
        <a href={HELP}>Help</a>
        <a href={ACCOUNT}>Manage Account</a>
      </div>
      <div className='footer-icons'>
        <img src={appStore} alt='apple store download app clicable icon'></img>

        <img src={googlePlay} alt='google play download app clicable icon'></img>
      </div>
      <div className='footer-copyright'>
        Copyright 2020 Dreadful Tomato Streaming. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
