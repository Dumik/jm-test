import {createBrowserRouter} from 'react-router-dom';

import {MainPage} from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    loader: () => ({message: 'Hello Data Router!'}),
    Component: MainPage,
  },
]);
