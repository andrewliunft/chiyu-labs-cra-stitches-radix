import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './app/app-layout';
import AppPage from './app/app-page';
import AppError from './app/app-error';
import reportWebVitals from './report-web-vitals';
import AboutPage from './app/about/about-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <AppError />,
    children: [
      {
        index: true,
        element: <AppPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
