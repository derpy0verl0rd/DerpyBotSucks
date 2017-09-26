const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
{
  "username":"IFTTT YouTube Test",
  "avatar_url":"https://blog.eu.playstation.com/files/avatars/avatar_4364447.jpg",
  "content":"**{{AuthorName}}** uploaded **{{Title}}** at {{CreatedAt}}: {{Url}}"
}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
