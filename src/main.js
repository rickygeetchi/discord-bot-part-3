import discord from 'discord.js';



const client = new discord.Client({
    intents:['GUILDS','GUILD_MESSAGES'],
});

const token = "";
/**
 * @param {discord.Client} ready
 */

function onReady(ready){
    if (ready){
        console.log('Online')
    }
}


/**
 * 
 * @param {discord.Message} message 
 */
function onMessage(message){
    if (message.content.includes("ping")) {
    message.channel.send("pong");
    }
}

client.on('messageCreate', onMessage);
client.on('ready',onReady);
client.login(token);