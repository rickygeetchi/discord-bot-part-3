import discord from 'discord.js';
const token = "OTY5Mzc1NTgxNzg5NjUxMDA0.YmsfXA.XK3v3qPwoS7-XcfYnRaA-2Sn9yk"

const client = new discord.Client({
    intents:['GUILDS','GUILD_MESSAGES'],
});



/**
 * 
 * @param {discord.Message} message 
 */
function onMessage(message){
if (message.content.includes("ping")) {
    message.channel.send("pong")};
}

client.on('messageCreate', onMessage);
client.login(token);