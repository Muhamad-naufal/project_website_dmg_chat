import { getAiResponse } from '../../api/googleAi';
import { databases } from '../../lib/appwrite';
import generateID from '../../utils/generateID';

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
    chatHistory = chats.map(({ user_prompt, ai_response }) => {
      return { user_prompt, ai_response };
    });
    console.log(chatHistory);
  } catch (error) {
    console.error(error.message);
  }

  try {
    aiResponse = await getAiResponse(userPrompt, chatHistory);
  } catch (error) {
    console.error(error.message);
  }

  try {
    await databases.createDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'chats',
      generateID(),
      {
        user_prompt: userPrompt,
        ai_response: aiResponse,
        coversation: conversationId,
      },
    );
  } catch (error) {
    console.error(error.message);
  }

  return null;
};

export default conversationAction;
