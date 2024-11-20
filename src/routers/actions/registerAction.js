import { redirect } from 'react-router-dom';
import { account } from '../../lib/appwrite';
import generateID from '../../utils/generateID';

const registerAction = async ({ request }) => {
  const formData = await request.formData();

  try {
    await account.create(
      generateID(),
      formData.get('email'),
      formData.get('password'),
      formData.get('name'),
    );
  } catch (error) {
    return {
      message: error.message,
    };
  }

  try {
    await account.createEmailPasswordSession(
      formData.get('email'),
      formData.get('password'),
    );
  } catch (error) {
    console.error('Error creating session', error);
    return redirect('/login');
  }

  return redirect('/');
};

export default registerAction;
