import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_SERVER } from '../../config';
import Header from '../../components/organism/Header/Header';
import './LoginPage.scss';

function LoginPage() {
  const userRef = useRef();
  const [logged, setLogged] = useState(false);

  let navigate = useNavigate();

  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const login = user => {
    //send data to backend
    fetch(`${API_SERVER}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log(err);
      });
    setLogged( true );
    window.localStorage.setItem('logged', true);
    navigate('/home');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, error: false, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('hi');
    const formValues = new FormData(e.target);
    console.log(formValues);
    const user = {
      email: formValues.get('email'),
      password: formValues.get('password')
    };
    console.log(user);

    // javascript object will send to signup function as 'user' object
    login(user);
  };

  return (
    <>
      <Header logged={logged} />
      <div className='login-container'>
        <section className='login-form'>
          <h1>Log In</h1>
          <form className='login-form-fields' onSubmit={handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              type='email'
              ref={userRef}
              onChange={handleChange}
              required
            />
            <label htmlFor='password'>Password</label>
            <input
              name='password'
              type='password'
              onChange={handleChange}
              required
            />
            {/*           {errorMsg && <p className='errmsg'>{errorMsg}</p>}
             */}
            <button type='submit'>Log me in!</button>
          </form>
          <div className='need-account'>
            <div>Need an Account?</div>
            <div className='login-signup-btn'>
              {/* TODO PUT ROUTER LINK HERE */}
              <a  href='./signup'>
                Sign Up
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default LoginPage;
