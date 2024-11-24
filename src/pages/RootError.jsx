import React from 'react';
import { Link, useNavigation, useRouteError } from 'react-router-dom';
import { LinearProgress } from '../components/Progress';

const RootError = () => {
  const error = useRouteError();
  const navigation = useNavigation();
  return (
    <>
      <div className='h-dvh grid grid-cols-1 justify-items-center content-center'>
        <p className='text-displayLarge font-serif'>{error.status}</p>
        <p className='text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1 mb-4'>
          Kayaknya halaman yang kamu cari nggak ada nih. Yuk,
        </p>
        <Link
          to='/'
          className='btn filled primary'
        >
          balik ke Chat Baru
          <div className='state-layer'></div>
        </Link>
      </div>
      {navigation.state === 'loading' && (
        <LinearProgress classes='fixed top-0 left-0 right-0' />
      )}
    </>
  );
};

export default RootError;
