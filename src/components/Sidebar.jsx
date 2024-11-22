import React from 'react';
import Logo from './Logo';
import { ExtendedFab, IconButton } from './Button';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <>
      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <div className='sidebar-inner'>
          <div className='h-16 grid items-center px-4 mb-4'>
            <Logo />
          </div>
          <ExtendedFab
            href='/'
            text='Chat Baru'
            classes=''
            onClick={toggleSidebar}
          />
          <div className='overflow-y-auto -me-2 pe-1'>
            <p className='text-titleSmall h-9 grid items-center px-4'>
              Terbaru
            </p>
            <nav>
              <div className='relative group'>
                <NavLink
                  to='new-chat'
                  className='nav-link'
                  title=''
                  onClick={toggleSidebar}
                >
                  <span className='material-symbols-rounded icon-small'>
                    chat_bubble
                  </span>
                  <span className='truncate'>Percakapan Baru</span>
                  <div className='state-layer'></div>
                </NavLink>
                <IconButton
                  icon='delete'
                  size='small'
                  classes='absolute top-1/2 right-1.5 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 group:focus-within:opacity-100 hidden lg:grid'
                  title='Hapus'
                />
              </div>
            </nav>
          </div>
          <div className='mt-4 h-14 px-4 grid items-center text-labelLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant border-t border-light-surfaceContainerHigh dark:border-dark-surfaceContainerHigh truncate'>
            &copy; 2024 Digital Meta Generasi
          </div>
        </div>
      </div>
      <div
        className={`overlay ${isSidebarOpen ? 'active' : ''}`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
};

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool,
  toggleSidebar: PropTypes.func,
};

export default Sidebar;