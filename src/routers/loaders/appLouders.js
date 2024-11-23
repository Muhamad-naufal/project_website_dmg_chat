import { redirect } from 'react-router-dom';
import { account, databases } from '../../lib/appwrite';
import { Query } from 'appwrite';

const appLoader = async () => {
  const data = {};

  try {
    data.user = await account.get();
  } catch (error) {
    console.error(error);
    return redirect('/login');
  }

  try {
    data.conversation = await databases.listDocuments(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'coversations',
      [
        Query.select(['$id', 'title']),
        Query.orderDesc('$createdAt'),
        Query.equal('user_id', data.user.$id),
      ],
    );
  } catch (error) {
    console.error(error.message);
  }
  return data;
};

export default appLoader;
