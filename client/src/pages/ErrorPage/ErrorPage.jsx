import React from 'react'
import {Link} from 'react-router-dom'
import { LOGIN } from '../../routes'
import './ErrorPage.scss'

function ErrorPage() {
  return (
    <div className='error-page-container'>
      <div className='error-page'>Ops...please, login!</div>
      <Link to={LOGIN} className='btn'>LOGIN</Link>
    </div>
  );
}

export default ErrorPage