import { useEffect, useState } from 'react';
import { useNavigation } from 'react-router-dom';

const usePromptPreloader = () => {
  const navigation = useNavigation();
  const [promptPreloaderValue, setPromptPreloaderValue] = useState('');

  useEffect(() => {
    if (navigation.formData) {
      // Saat formData ada, ambil prompt dari data tersebut
      setPromptPreloaderValue(navigation.formData.get('user_prompt'));
    } else if (navigation.state === 'idle') {
      // Reset nilai saat navigation selesai
      setPromptPreloaderValue('');
    }
  }, [navigation]);

  return { promptPreloaderValue };
};

export { usePromptPreloader };
