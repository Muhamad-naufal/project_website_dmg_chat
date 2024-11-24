import React, { useEffect, useRef } from 'react';
import PageTitle from './components/PageTitle';
import TopAppBar from './components/TopAppBar';
import Sidebar from './components/Sidebar';
import { useToggle } from './hooks/useToggle';
import Greetings from './pages/Greetings';
import { motion } from 'framer-motion';
import PromptField from './components/PromptField';
import {
  Outlet,
  useActionData,
  useNavigation,
  useParams,
} from 'react-router-dom';
import { useSnackbar } from './hooks/useSnackbar';
import { usePromptPreloader } from './hooks/usePromptPreloader';

const App = () => {
  const actionData = useActionData();
  const { showSnackbar } = useSnackbar();
  const navigation = useNavigation();
  const isNormalLoad = navigation.state === 'loading' && !navigation.formData;
  const params = useParams();
  const chatHistoryRef = useRef();
  const { promptPreloaderValue } = usePromptPreloader();

  useEffect(() => {
    const chatHistory = chatHistoryRef.current;
    if (promptPreloaderValue) {
      chatHistory.scroll({
        top: chatHistory.scrollHeight - chatHistory.clientHeight,
        behavior: 'smooth',
      });
    }
  }, [promptPreloaderValue, chatHistoryRef]);

  useEffect(() => {
    if (actionData?.conversationTitle) {
      showSnackbar({
        message: `Chat yang judulnya '${actionData.conversationTitle}' udah dihapus yah 😢`,
      });
    }
  }, [actionData, showSnackbar]);

  const [isSidebarOpen, toggleSidebar] = useToggle();
  return (
    <>
      {/* Title Meta */}
      <PageTitle title='Chat' />

      <div className='lg:grid lg:grid-cols-[320px,1fr]'>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <div className='h-dvh grid grid-rows-[max-content,minmax(0,1fr),max-content]'>
          {/* top App bar */}
          <TopAppBar toggleSidebar={toggleSidebar} />

          {/* Main Content */}
          <div
            ref={chatHistoryRef}
            className='px-5 pb-5 flex flex-col overflow-y-auto'
          >
            <div className='max-w-[840px] w-full mx-auto grow'>
              {isNormalLoad ? null : params.conversationId ? (
                <Outlet />
              ) : (
                <Greetings />
              )}
            </div>
          </div>

          {/* Promp Field */}
          <div className='bg-light-background dark:bg-dark-background'>
            <div className='max-w-[870px] px-5 w-full mx-auto'>
              <PromptField />
              <motion.p
                initial={{ opacity: 0, translateY: '-4px' }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.2, delay: 0.8, ease: 'easeOut' }}
                className='text-bodySmall text-center text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant p-3'
              >
                Kali aja, nanti pas nampilin data ada yang salah, termasuk data
                orang atau yang lain, jadi harus di cek lagi yah responnya
                <br />
                <a
                  href='http://support.google.com/gemini?p=privacy_notice'
                  target='_blank'
                  className='inline underline ms-1'
                >
                  Your Privacy and Gemini App
                </a>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
