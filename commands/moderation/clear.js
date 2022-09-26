const Discord = require('discord.js')
const { description } = require('./ban')
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"]}
)

module.exports = {
    name: "clear",
    description: "Elimina i messaggi",
    execute(message, args) {
        if(message.content.startsWith("!clear")){
            if(!message.member.permissions.has("MANAGE_MESSAGES")){
                message.channel.send("Non hai il permesso: MANAGE_MESSAGES");
                return;
            }
            if(!message.guild.me.permissions.has("MANAGE_CHANNELS")){
             message.channel.send("Non ho il permesso: MANAGE_MESSAGES")  
             return
            }
    
            var count = message.content.slice(7);
            count = parseInt(count);
    
            if (!count) {
                message.channel.send("Inserisci un numero");
                return
            }
    
    
            message.channel.bulkDelete(count, true);
            message.channel.send("Ho eliminato " + count + " messaggi")
            .then(mgs => {
                mgs.delete({ timeout: 2000 }) 
            })
    
     }
      }
}        