import { account } from '../lib/appwrite';

const logout = async (navigate) => {
  try {
    await account.deleteSession('current');
  } catch (error) {
    console.error(error);
  }
  return navigate('/login');
};

export { logout };
