import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { hopscotch, coy } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { IconButton } from './Button';
import toTitleCase from '../utils/toTitleCase';
import { useSnackbar } from '../hooks/useSnackbar';

const AiResponse = ({ aiResponse, children }) => {
  const { showSnackbar, hideSnackbar } = useSnackbar();

  const [codeTheme, setCodeTheme] = useState();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    setCodeTheme(mediaQuery.matches ? hopscotch : coy);

    const themeListener = mediaQuery.addEventListener('change', (event) => {
      setCodeTheme(event.matches ? hopscotch : coy);
    });

    return () => mediaQuery.removeEventListener('change', themeListener);
  }, []);

  const handleCopy = useCallback(
    async (text) => {
      hideSnackbar();
      try {
        await navigator.clipboard.writeText(text);
        showSnackbar({ message: 'Kode berhasil disalin', timeOut: 2500 });
      } catch (error) {
        showSnackbar({ message: 'Gagal menyalin kode', timeOut: 2500 });
        console.log(error.message);
        return redirect('/login');
      }
    },
    [showSnackbar, hideSnackbar],
  );

  const code = ({ children, className, ...rest }) => {
    const match = className?.match(/language-(\w+)/);

    return match ? (
      <>
        <div className='code-block'>
          <div className='p-4 pb-0 font-sans'>{toTitleCase(match[1])}</div>
          <SyntaxHighlighter
            {...rest}
            PreTag='div'
            language={match[1]}
            style={codeTheme}
            customStyle={{
              marginBlock: '0',
              padding: '2px',
            }}
            codeTagProps={{
              style: {
                padding: '14px',
                fontWeight: '600',
              },
            }}
          >
            {children}
          </SyntaxHighlighter>
        </div>

        <div className='bg-light-surfaceContainer dark:bg-dark-surfaceContainer rounded-t-extraSmall rounded-b-medium flex justify-between items-center h-11 font-sans text-bodyMedium ps-4 pe-2'>
          <p>
            Gunakan kode ini
            <a
              href='https://gemini.google.com/faq#coding'
              target='_black'
              className='link ms-2'
            >
              dengan hati - hati
            </a>
          </p>

          <IconButton
            icon='content_copy'
            size='small'
            title='Salin'
            onClick={handleCopy.bind(null, children)}
          />
        </div>
      </>
    ) : (
      <code className={className}>{children}</code>
    );
  };

  return (
    <div className='grid grid-cols-1 items-start gap-1 py-4 md:grid-cols-[max-content,minmax(0,1fr)] md:gap-5'>
      <figure className='w-8 h-8 grid place-items-center'>
        <img
          src='/logo.png'
          width={32}
          height={32}
          alt='DMG'
        />
      </figure>
      {children}
      <div className='markdown-content'>
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{ code }}
        >
          {aiResponse}
        </Markdown>
      </div>
    </div>
  );
};

AiResponse.propTypes = {
  aiResponse: PropTypes.string,
  children: PropTypes.any,
};

export default AiResponse;
