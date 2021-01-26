const { StreamChat } = require('stream-chat');
require('dotenv/config');

const sendMessage = async () => {
  const client = new StreamChat(process.env.STREAM_API_KEY, process.env.STREAM_API_SECRET);

  const user = {
    id: 'daddy',
    name: 'Daddy Dan',
    role: 'admin',
  };

  const token = client.createToken('daddy');

  await client.upsertUser(user);

  const channel = client.channel('messaging', 'testing-daddy', {
    members: ['daddy'],
    created_by: user,
  });

  await channel.create({ data: { created_by_id: user.id } });

  const message = await channel.sendMessage({ text: 'message from beyond', user });

  return message;
};

sendMessage().then(console.log);
