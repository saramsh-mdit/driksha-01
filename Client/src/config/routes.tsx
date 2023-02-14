import React from 'react';

import About from '../pages/About';
import FormPage from '../pages/Forms';
import Home from '../pages/Home';
import VideoDetails from '../pages/Video';

const ROUTES = [
  {
    path: '/',
    key: 'HOME_PAGE',
    exact: true,
    component: <Home />,
  },
  {
    path: '/about',
    key: 'ABOUT_PAGE',
    exact: true,
    component: <About />,
  },
  {
    path: '/video/:id',
    key: 'VIDEO_PAGE',
    exact: true,
    component: <VideoDetails />,
  },
  {
    path: '/form',
    key: 'FORM_PAGE',
    exact: true,
    component: <FormPage />,
  }
];

export default ROUTES;
