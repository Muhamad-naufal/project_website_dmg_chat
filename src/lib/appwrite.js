import { Client, Account, Avatars } from 'appwrite';
const client = new Client();
client
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT);
const account = new Account(client);
const avatar = new Avatars(client);

export { account, avatar };
