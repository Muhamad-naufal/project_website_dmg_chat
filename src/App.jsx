import React from 'react';
import PageTitle from './components/PageTitle';
import TopAppBar from './components/TopAppBar';
import Sidebar from './components/Sidebar';
import { useToggle } from './hooks/useToggle';

const App = () => {
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
          <div className='px-5 pb-5 flex flex-col overflow-y-auto'>
            <div className='max-w-[840px]'>Main Content</div>
          </div>

          {/* Promp Field */}
          <div>
            <p>
              Kali aja, nanti pas nampilin data ada yang salah, termasuk data
              orang atau yang lain, jadi harus di cek lagi yah responnya
            </p>
            <a
              href='http://support.google.com/gemini?p=privacy_notice'
              target='_blank'
            >
              Your Privacy and Gemini App
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
