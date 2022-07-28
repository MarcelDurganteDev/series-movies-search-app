import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as route from './routes';
import LandingPage from './pages/LandingPage/LandingPage';
import SignupPage from './pages/SignupPage/SignupPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Header from './components/organism/Header/Header';
import Footer from './components/organism/Footer/Footer';
import MoviesList from './components/organism/MoviesList/MoviesList';
import SeriesList from './components/organism/MoviesList/MoviesList';

const AppRoutes = () => {


  return (
    <Router>
      <Header />
      <Routes>
        <Route path={route.LANDING} element={<LandingPage />} />
        <Route path={route.SIGNUP} element={<SignupPage />} />
        <Route path={route.LOGIN} element={<LoginPage />} />
        <Route path={route.HOME} element={<HomePage />}>
          <Route path=':movies' element={<MoviesList />} />
          <Route path=':series' element={<SeriesList />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
