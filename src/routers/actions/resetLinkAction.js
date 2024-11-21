import { account } from '../../lib/appwrite';

const resetLinkAction = async ({ request }) => {
  const formData = await request.formData();

  const email = formData.get('email');

  try {
    await account.createRecovery(
      email,
      `${window.location.origin}/reset-password`,
    );
    return {
      ok: true,
      message: 'Link reset password telah dikirim ke email kamu',
    };
  } catch (error) {
    console.error(error.message);
    return {
      ok: false,
      message: 'Gagal mengirim link reset password',
    };
  }
};

export default resetLinkAction;
