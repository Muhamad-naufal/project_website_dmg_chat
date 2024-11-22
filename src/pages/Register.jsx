import React, { useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import { Link, Form, useNavigation, useActionData } from 'react-router-dom';
import TextField from '../components/TextField';
import { Button } from '../components/Button';
import { CircularProgress, LinearProgress } from '../components/Progress';
import { useSnackbar } from '../hooks/useSnackbar';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from '../components/Logo';

const Register = () => {
  const error = useActionData();
  const navigration = useNavigation();
  const { showSnackbar } = useSnackbar();
  useEffect(() => {
    if (error?.message) {
      showSnackbar({
        message: error.message,
        type: 'error',
        timeOut: 5000,
      });
    }
  }, [error, showSnackbar]);
  return (
    <>
      <PageTitle title='Buat Akun' />
      <div className='relative w-screen h-dvh p-2 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2'>
        <div className='flex flex-col p-4'>
          <Logo classes='mb-auto mx-auto lg:mx-0' />
          <div className='flex flex-col gap-2 max-w-[480px] w-full mx-auto'>
            <h2 className='text-displaySmall font-semibold text-light-onBackground dark:text-dark-onBackground text-center'>
              Buat akun
            </h2>
            <p className='text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center p-2'>
              Daftar untuk mendapatkan akses ke semua fitur yang kami sediakan
            </p>
            <Form
              method='POST'
              className='grid grid-cols-1 gap-4'
            >
              <TextField
                type='text'
                name='name'
                label='Nama Lengkap'
                placeholder='Nama Lengkap'
                required={true}
                autoFocus={true}
              />
              <TextField
                type='email'
                name='email'
                label='Email Kamu'
                placeholder='Email Kamu'
                required={true}
              />
              <TextField
                type='password'
                name='password'
                label='Password Kamu'
                placeholder='Password Kamu'
                required={true}
              />
              <Button
                type='submit'
                disabled={navigration.state === 'submitting'}
              >
                {navigration.state === 'submitting' ? (
                  <CircularProgress size='small' />
                ) : (
                  'Daftar'
                )}
              </Button>
            </Form>

            <p className='text-bodyMedium text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-center mt-4'>
              Sudah punya akun?{' '}
              <Link
                to='/login'
                className='link inline-block text-labelLarge ms-1 text-light-onSurface dark:text-dark-onSurface'
              >
                Masuk
              </Link>
            </p>
          </div>

          <p className='mt-auto mx-auto text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-bodyMedium lg:mx-0'>
            &copy; 2024 Digital Meta Generasi. All rights reserved.
          </p>
        </div>
        <div className='hidden lg:block lg:relative lg:rounded-large img-box'>
          <img
            src='/banner.webp'
            className='img-cover'
          />
          <p className='absolute bottom-10 left-12 right-12 z-10 text-displayLarge font-semibold leading-tight text-right text-light-onSurface drop-shadow-sm 2xl:text-[72px]'>
            Kerja Bareng DMG Chat untuk
            <br />
            Meningkatkan Produktivitas
          </p>
        </div>
      </div>
      <AnimatePresence>
        {navigration.state === 'loading' && (
          <LinearProgress classes='absolute top-0 left-0 right-0' />
        )}
      </AnimatePresence>
    </>
  );
};

export default Register;
