import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Register from '../pages/Register';
import Login from '../pages/Login';
import registerAction from './actions/registerAction';
import loginAction from './actions/loginAction';
import registerLoaders from './loaders/registerLoaders';
import loginLoaders from './loaders/loginLoaders';
import ResetLink from '../pages/ResetLink';
import resetLinkAction from './actions/resetLinkAction';
import PasswordReset from '../pages/PasswordReset';
import resetPasswordAction from './actions/resetPasswordAction';
import resetLinkLoaders from './loaders/resetLinkLoaders';
import resetPasswordLoaders from './loaders/resetPasswordLoaders';
import appLoader from './loaders/appLouders';
import appAction from './actions/appAction';
import Conversation from '../pages/Conversation';
import conversationLoader from './loaders/conversationLoaders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: appLoader,
    action: appAction,
    children: [
      {
        path: '/:conversationId',
        element: <Conversation />,
        loader: conversationLoader,
      },
    ],
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
  {
    path: '/reset-link',
    element: <ResetLink />,
    loader: resetLinkLoaders,
    action: resetLinkAction,
  },
  {
    path: '/reset-password',
    element: <PasswordReset />,
    loader: resetPasswordLoaders,
    action: resetPasswordAction,
  },
]);

export default router;
