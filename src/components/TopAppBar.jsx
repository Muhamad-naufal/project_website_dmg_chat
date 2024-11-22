import React from 'react';
import { Button, IconButton } from './Button.jsx';
import {
  Link,
  useLoaderData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import Avatar from './Avatar.jsx';
import { avatar } from '../lib/appwrite.js';
import { Menu } from './Menu.jsx';
import { LinearProgress } from './Progress.jsx';
import MenuItem from './MenuItem.jsx';
import { AnimatePresence } from 'framer-motion';
import { useToggle } from '../hooks/useToggle.js';
import { logout } from '../utils/logout.js';

const TopAppBar = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isNormalLoad = navigation.state === 'loading' && !navigation.formData;
  const [showMenu, setShowMenu] = useToggle();
  const { user } = useLoaderData();

  return (
    <header className='relative flex justify-between items-center h-16 px-4'>
      <div className='flex items-center gap-1'>
        <IconButton
          icon='menu'
          title='Menu'
          classes='lg:hidden'
        />
        <Link
          to='/'
          className='min-w-max max-w-max h-[24px] lg:hidden'
        >
          <img
            width={133}
            height={24}
            src='/logo_tulisan.png'
            alt=''
          />
        </Link>
      </div>
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
      <AnimatePresence>{isNormalLoad && <LinearProgress />}</AnimatePresence>
    </header>
  );
};

export default TopAppBar;
