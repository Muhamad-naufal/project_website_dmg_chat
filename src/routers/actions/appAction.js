import { getAiResponse, getConversationTitle } from '../../api/googleAi';
import { account, databases } from '../../lib/appwrite';
import generateID from '../../utils/generateID';

const userPromptAction = async (formData) => {
  const userPrompt = formData.get('user_prompt');
  const user = await account.get();
  const conversetionTitle = await getConversationTitle(userPrompt);
  let conversation = null;
  try {
    conversation = await databases.createDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'coversations',
      generateID(),
      {
        title: conversetionTitle,
        user_id: user.$id,
      },
    );
  } catch (error) {
    console.error(error.message);
  }
  const aiResponse = await getAiResponse(userPrompt);
  try {
    await databases.createDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'chats',
      generateID(),
      {
        coversation: conversation.$id,
        ai_response: aiResponse,
        user_prompt: userPrompt,
      },
    );
    // await databases.createDocument(
    //   import.meta.env.VITE_APPWRITE_DATABASE_ID,
    //   'messages',
    //   generateID(),
    //   {
    //     conversation_id: conversation.$id,
    //     user_id: user.$id,
    //     message: aiResponse,
    //     is_user_message: false,
    //   },
    // );
  } catch (error) {
    console.error(error.message);
  }

  return null;
};

const appAction = async ({ request }) => {
  const formData = await request.formData();
  const requestType = formData.get('request_type');

  if (requestType === 'user_prompt') {
    return await userPromptAction(formData);
  }
};

export default appAction;
