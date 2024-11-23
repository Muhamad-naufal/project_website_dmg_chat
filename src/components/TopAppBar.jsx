import React from 'react';
import { Button, IconButton } from './Button.jsx';
import {
  Link,
  useLoaderData,
  useNavigate,
  useNavigation,
  useParams,
  useSubmit,
} from 'react-router-dom';
import Avatar from './Avatar.jsx';
import { avatar } from '../lib/appwrite.js';
import { Menu } from './Menu.jsx';
import { LinearProgress } from './Progress.jsx';
import MenuItem from './MenuItem.jsx';
import { AnimatePresence } from 'framer-motion';
import { useToggle } from '../hooks/useToggle.js';
import { logout } from '../utils/logout.js';
import Logo from './Logo.jsx';
import PropTypes from 'prop-types';
import { deleteConversation } from '../utils/deleteConversation.js';

const TopAppBar = ({ toggleSidebar }) => {
  const submit = useSubmit();
  const params = useParams();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isNormalLoad = navigation.state === 'loading' && !navigation.formData;
  const [showMenu, setShowMenu] = useToggle();
  const { user, conversations } = useLoaderData();

  return (
    <header className='relative flex justify-between items-center h-16 px-4'>
      <div className='flex items-center gap-1'>
        <IconButton
          icon='menu'
          title='Menu'
          classes='lg:hidden'
          onClick={toggleSidebar}
        />
        <Logo classes='lg:hidden' />
      </div>
      {params.conversationId && (
        <IconButton
          icon='delete'
          classes='ms-auto me-1 lg:hidden'
          onClick={() => {
            const { title } = conversations.documents.find(
              ({ $id }) => params.conversationId === $id,
            );
            deleteConversation({
              id: params.conversationId,
              title,
              submit,
            });
          }}
        />
      )}

      <div className='menu-wrapper'>
        <IconButton onClick={setShowMenu}>
          <Avatar name={user.name} />
        </IconButton>
        <Menu classes={showMenu ? 'active' : ''}>
          <MenuItem
            labelText='Keluar'
            onClick={() => logout(navigate)}
          />
        </Menu>
      </div>
      <AnimatePresence>
        {isNormalLoad && (
          <LinearProgress classes='absolute top-full left-0 right-0 z-10' />
        )}
      </AnimatePresence>
    </header>
  );
};

TopAppBar.propTypes = {
  toggleSidebar: PropTypes.func,
};

export default TopAppBar;
