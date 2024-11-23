const deleteConversation = ({ id, title, submit }) => {
  const deleteConfirm = confirm(
    `Apa beneran mau hapus percakapan dengan ${title}? Ntar ga bisa dibalikin loh!`,
  );
  if (!deleteConfirm) return;

  submit(
    {
      request_type: 'delete_conversation',
      conversation_id: id,
      conversation_title: title,
    },
    {
      method: 'DELETE',
      encType: 'application/x-www-form-urlencoded',
      action: '/',
    },
  );
};

export { deleteConversation };
