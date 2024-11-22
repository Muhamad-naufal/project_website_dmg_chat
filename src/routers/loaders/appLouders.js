import { redirect } from 'react-router-dom';
import { account } from '../../lib/appwrite';

const appLoader = async () => {
  const data = {};

  try {
    data.user = await account.get();
  } catch (error) {
    console.error(error);
    return redirect('/login');
  }
  return data;
};

export default appLoader;
