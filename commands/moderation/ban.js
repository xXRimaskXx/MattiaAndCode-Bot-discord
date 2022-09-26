const Discord = require('discord.js')
const client = new Discord.Client({ 
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"],}
);
module.exports = {
    name: "ban",
    description: "banna un utente",
    execute(message, args) {
        var utenteBan = message.mentions.members.first();
    
            if (!message.member.permissions.has("BAN_MEMBERS")) {
                var banned = new Discord.MessageEmbed()
                .setTitle("Errore")
                .setDescription("**Non hai il permesso**")
                message.channel.send({ embeds: [banned]});
                return;
            }
    
            if (!utenteBan) {
                var banno = new Discord.MessageEmbed()
                .setTitle("Errore")
                .setDescription("**Non hai menzionato nessuno**")
                message.channel.send({ embeds: [banno]});
                return;
            }
    
            if (!utenteBan.kickable) {
                message.channel.send('Io non ho il permesso');
                return
            }
    
            utenteBan.ban()
            var bannato = new Discord.MessageEmbed()
            .setTitle("Utente bannato con successo!")
            .setDescription("<@" + utenteBan + ">" + " è stato bannato!")
            message.channel.send({ embeds: [bannato]})
    
        }

    
}