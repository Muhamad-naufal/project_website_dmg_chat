import React, { useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import { useLoaderData, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import UserPrompt from '../components/UserPrompt';
import AiResponse from '../components/AiResponse';
import PromptPreloader from '../components/PromptPreloader';
import { usePromptPreloader } from '../hooks/usePromptPreloader';

const Conversation = () => {
  const {
    conversation: { title, chats },
  } = useLoaderData() || {};

  const { promptPreloaderValue } = usePromptPreloader();
  const location = useLocation();

  // Hilangkan preloader setelah ada response
  useEffect(() => {
    if (chats.length > 0 && promptPreloaderValue) {
      setTimeout(() => {
        setPromptPreloaderValue(''); // Reset preloader
      }, 500); // Tunggu sedikit sebelum menghapus
    }
  }, [chats, promptPreloaderValue]);

  return (
    <>
      <PageTitle title={`${title}`} />

      <motion.div
        className='max-w-[700px] mx-auto !will-change-auto text-justify'
        initial={!location.state ? { opacity: 0 } : {}}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.05, ease: 'easeOut' }}
      >
        {chats.map((chat) => (
          <div key={chat.$id}>
            <UserPrompt text={chat.user_prompt} />
            <AiResponse aiResponse={chat.ai_response} />
          </div>
        ))}
      </motion.div>

      {promptPreloaderValue && (
        <PromptPreloader promptValue={promptPreloaderValue} />
      )}
    </>
  );
};

export default Conversation;
