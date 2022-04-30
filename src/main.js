import discord from 'discord.js';



const client = new discord.Client({
    intents:['GUILDS','GUILD_MESSAGES'],
});

const BreakError = {}

const answer = "WolfeWolfe"
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
