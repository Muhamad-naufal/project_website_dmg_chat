import React, { useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import { Link, Form, useNavigation, useActionData } from 'react-router-dom';
import TextField from '../components/TextField';
import { Button } from '../components/Button';
import { CircularProgress, LinearProgress } from '../components/Progress';
import { useSnackbar } from '../hooks/useSnackbar';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from '../components/Logo';

const ResetLink = () => {
  const actionData = useActionData();
  const navigration = useNavigation();
  const { showSnackbar } = useSnackbar();
  useEffect(() => {
    if (actionData?.message) {
      showSnackbar({
        message: actionData.message,
        type: actionData.oke ? 'info' : 'error',
        timeOut: 8000,
      });
    }
  }, [actionData, showSnackbar]);
  return (
    <>
      <PageTitle title='Reset Link' />
      <div className='relative w-screen h-dvh p-2 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2'>
        <div className='flex flex-col p-4'>
          <Logo classes='mb-auto mx-auto lg:mx-0' />
          <div className='flex flex-col gap-2 max-w-[480px] w-full mx-auto'>
            <h2 className='text-displaySmall font-semibold text-light-onBackground dark:text-dark-onBackground text-center'>
              Lupa Password
            </h2>
            <p className='text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center p-2'>
              Masukkan email kamu untuk mendapatkan link reset password
            </p>
            <Form
              method='POST'
              className='grid grid-cols-1 gap-4'
            >
              <TextField
                type='email'
                name='email'
                label='Email Kamu'
                placeholder='Email Kamu'
                required={true}
                helperText='Masukkan email kamu yang terdaftar dan akan aktf dalam 1 jam'
                autoFocus={true}
              />
              <Button
                type='submit'
                disabled={navigration.state === 'submitting'}
              >
                {navigration.state === 'submitting' ? (
                  <CircularProgress size='small' />
                ) : (
                  'Dapatkan Link Reset Password'
                )}
              </Button>
            </Form>

            <p className='text-bodyMedium text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-center mt-4'>
              Belum punya akun?{' '}
              <Link
                to='/register'
                className='link inline-block text-labelLarge ms-1 text-light-onSurface dark:text-dark-onSurface'
              >
                Daftar
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

export default ResetLink;
