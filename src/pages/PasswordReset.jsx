import React, { useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import { Link, Form, useNavigation, useActionData } from 'react-router-dom';
import TextField from '../components/TextField';
import { Button } from '../components/Button';
import { CircularProgress, LinearProgress } from '../components/Progress';
import { useSnackbar } from '../hooks/useSnackbar';
import { AnimatePresence, motion } from 'framer-motion';

const PasswordReset = () => {
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
      <PageTitle title='Password Baru' />
      <div className='relative w-screen h-dvh p-2 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2'>
        <div className='flex flex-col p-4'>
          <Link
            to='/'
            className='max-w-max mb-auto mx-auto lg:mx-0'
          >
            <img
              src='/logo_tulisan.png'
              alt='logo'
              className=''
              width={133}
              height={24}
            />
          </Link>
          <div className='flex flex-col gap-2 max-w-[480px] w-full mx-auto'>
            <h2 className='text-displaySmall font-semibold text-light-onBackground dark:text-dark-onBackground text-center'>
              Masukkan Password Baru
            </h2>
            <p className='text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center p-2'>
              Masukkan password baru untuk melanjutkan. Password minimal 8
              karakter dan kombinasi huruf dan angka
            </p>
            <Form
              method='POST'
              className='grid grid-cols-1 gap-4'
            >
              <TextField
                type='password'
                name='password'
                label='Password Kamu'
                placeholder='Password Baru Kamu'
                required={true}
                autoFocus={true}
              />
              <Button
                type='submit'
                disabled={navigration.state === 'submitting'}
              >
                {navigration.state === 'submitting' ? (
                  <CircularProgress size='small' />
                ) : (
                  'Reset Password'
                )}
              </Button>
            </Form>
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

export default PasswordReset;
