import { databases } from '../../lib/appwrite';

const conversationAction = async ({ request, params }) => {
  const { conversationId } = params;
  const formData = await request.formData('user_prompt');
  const userPrompt = formData.get('user_prompt');

  let chatHistory = [];
  let aiResponse = '';

  try {
    const { chats } = await databases.getDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'coversations',
      conversationId,
    );
    console.log(chats);
  } catch (error) {
    console.error(error.message);
  }

  return null;
};

export default conversationAction;
