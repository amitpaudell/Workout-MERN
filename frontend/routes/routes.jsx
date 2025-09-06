import { createBrowserRouter } from 'react-router-dom';
import App from '../src/App';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,

    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      // {
      //   path: 'movie',
      //   element: <Movie></Movie>,
      // },
    ],
  },
  {
    path: '*',
    element: <NotFound></NotFound>,
  },
]);

export default router;
