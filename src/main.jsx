import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../routes/ErrorPage.jsx';
import MoviesPage from '../routes/MoviesPage.jsx';
import PopularPage from '../routes/PopularPage.jsx';
import TrendingPage from '../routes/TrendingPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/movies',
    element: <MoviesPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/popular',
    element: <PopularPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/trending',
    element: <TrendingPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
