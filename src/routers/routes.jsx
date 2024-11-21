import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Register from '../pages/Register';
import Login from '../pages/Login';
import registerAction from './actions/registerAction';
import loginAction from './actions/loginAction';
import registerLoaders from './loaders/registerLoaders';
import loginLoaders from './loaders/loginLoaders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/register',
    element: <Register />,
    loader: registerLoaders,
    action: registerAction,
  },
  {
    path: '/login',
    element: <Login />,
    loader: loginLoaders,
    action: loginAction,
  },
]);

export default router;
