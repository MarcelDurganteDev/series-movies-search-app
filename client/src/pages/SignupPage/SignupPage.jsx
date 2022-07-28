import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_SERVER } from '../../config';
import '././SignupPage.scss';

const SignupPage = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    error: '',
    success: false
  });
  const userRef = useRef();

  let navigate = useNavigate();

  const signup = user => {
    //send data to backend
    fetch(`${API_SERVER}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then( response => {
        return response.json();
      })
      .catch(err => {
        console.log(err);
      } );
    navigate('/login');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(values);
    setValues({ ...values, error: false, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formValues = new FormData( e.target );
    const user = {
      firstName: formValues.get( 'firstName' ),
      lastName: formValues.get( 'lastName' ),
      username: formValues.get( 'username' ),
      email: formValues.get( 'email' ),
      password: formValues.get( 'password' )
    };
    // javascript object will send to signup function as 'user' object
    signup(user);
  };

  return (
    <div className='signup-container'>
      <section className='signup-form'>
        <h1>Sign Up</h1>
        <form className='signup-form-fields' onSubmit={handleSubmit}>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            ref={userRef}
            name='firstName'
            onChange={handleChange}
            required
          />
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            ref={userRef}
            name='lastName'
            onChange={handleChange}
            required
          />
          <label htmlFor='username'>Username </label>
          <input
            type='text'
            ref={userRef}
            name='username'
            onChange={handleChange}
            required
          />
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            ref={userRef}
            name='email'
            onChange={handleChange}
            required
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            onChange={handleChange}
            required
          />
          <button type='submit'>Sign me up!</button>
        </form>
      </section>
    </div>
  );
};

export default SignupPage;
