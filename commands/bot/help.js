const Discord = require('discord.js')
const client = new Discord.Client({ 
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"],}
);
module.exports = {
    name: "help",
    description: "manda tutti i comandi del bot",
    execute(message, args) {

  var server = message.member.guild;

 var help = new Discord.MessageEmbed()
 .setTitle(server.name)
 .setThumbnail("https://media.discordapp.net/attachments/1014465158581592124/1021087392939118602/BB7B6AC5-6122-4B8F-907C-82356974C792.png")
 .addField("!youtube" ,"per mandare il canale youtube di Rimask")
 .addField("!invite", "manda l'invito del bot")
 .addField("!userinfo utente", "vedi le info dell\'utente selezionato")
 .addField("!clear + numero", "per eliminare i messaggi")
 .addField("!kick + utente", "per kiccare un utente")
 .addField("!ban + utente", "per bannare un utente")
 .setFooter("Overkill bot | Made by Rimask")


 message.channel.send({ embeds: [help]})
    }    

}

