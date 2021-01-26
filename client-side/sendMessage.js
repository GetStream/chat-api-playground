const { StreamChat } = require('stream-chat');
require('dotenv/config');

const sendMessage = async () => {
  const client = new StreamChat(process.env.STREAM_API_KEY, process.env.STREAM_API_SECRET);

  const user = {
    id: 'daddy',
    name: 'Daddy Dan',
    role: 'admin',
    language: 'fr',
  };

  const token = client.createToken(user.id);

  await client.connectUser(user, token);

  const channel = client.channel('messaging', '9608a125-0891-4f40-bdf7-a0d02bdb3551');

  await channel.query();

  const message = await channel.sendMessage({
    text: 'wut up bois',
  });

  return message;
};

sendMessage().then(console.log);
