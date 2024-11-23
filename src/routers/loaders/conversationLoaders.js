import { redirect } from 'react-router-dom';
import { account, databases } from '../../lib/appwrite';

const conversationLoader = async ({ params }) => {
  const { conversationId } = params;
  const data = {};
  try {
    data.user = await account.get();
  } catch (error) {
    console.log(error.message);
    return redirect('/login');
  }

  try {
    data.conversation = await databases.getDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'coversations',
      conversationId,
    );
  } catch (error) {
    console.log(error.message);
    throw error;
  }
  return data;
};

export default conversationLoader;
