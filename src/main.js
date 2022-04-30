import discord from 'discord.js';



const client = new discord.Client({
    intents:['GUILDS','GUILD_MESSAGES'],
});

const BreakError = {}

const answer = "WolfeWolfe"
const token = "OTY5Mzc1NTgxNzg5NjUxMDA0.YmsfXA.GYGhJpHzSceJhmFvPDHBoya8d2g";
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
    
    if(message.author.id != client.user.id){
        if (message.content.includes(answer)) {
        message.channel.send("You've Answered Correctly!");
        } else {
            message.channel.send("Please try again");
        }
    } else{
        return;
    
    }
     
}



client.on('messageCreate', onMessage);
client.on('ready',onReady);
client.login(token);