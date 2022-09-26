const Discord = require('discord.js')
const client = new Discord.Client({ 
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"],}
);
module.exports = {
    name: "kick",
    description: "Kicca un utente",
    execute(message, args) {
        var utenteKick = message.mentions.members.first();

        if (!message.member.permissions.has("KICK_MEMBERS")) {
            var kicko = new Discord.MessageEmbed()
            .setTitle("Errore")
            .setDescription("**Non hai il permesso**")
            message.channel.send({ embeds: [kicko]});
            return;
        }

        if (!utenteKick) {
            var nessuno = new Discord.MessageEmbed()
            .setTitle("Errore")
            .setDescription("**Non hai menzionato nessuno**")
            message.channel.send({ embeds: [nessuno]});
            return;
        }

        if (!message.mentions.members.first().kickable) {
            var bot = new Discord.MessageEmbed()
            .setTitle("**Errore**")
            .setDescription("**Dammi i permessi per esequire il comando**")
            message.channel.send({ embeds: [bot] });
            return
        }

        utenteKick.kick()
         var kiccato = new Discord.MessageEmbed()
         .setTitle("l'utente è stato kiccato!")
         .setDescription("<@" + utenteKick + ">" + "è stato kiccato!")
         message.channel.send({ embeds: [kiccato] })
    }
    
}