import { redirect } from 'react-router-dom';
import { account } from '../../lib/appwrite';

const loginLoaders = async () => {
  try {
    await account.get();
  } catch (error) {
    console.error(error.message);
    return null;
  }
  return redirect('/');
};

export default loginLoaders;
