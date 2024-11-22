import React from 'react';
import PageTitle from './components/PageTitle';
import TopAppBar from './components/TopAppBar';

const App = () => {
  return (
    <>
      {/* Title Meta */}
      <PageTitle title='Chat' />

      <div>
        {/* Sidebar */}
        <div>
          {/* top App bar */}
          <TopAppBar />

          {/* Main Content */}
          <div>
            <div></div>
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
