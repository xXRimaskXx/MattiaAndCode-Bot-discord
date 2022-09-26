const Discord = require('discord.js')
const client = new Discord.Client({ 
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"],}
);
module.exports = {
    name: "invite",
    description: "manda l'invito del bot",
    execute(message, args) {
        var invitobello = new Discord.MessageEmbed()
        .setTitle("Invito")
        .setThumbnail("https://media.discordapp.net/attachments/1014465158581592124/1021087392939118602/BB7B6AC5-6122-4B8F-907C-82356974C792.png")
        .setDescription(`${message.author.username} Ecco l'invito del bot [INVITO](https://discord.com/api/oauth2/authorize?client_id=1023524322058448896&permissions=8&scope=bot)`)
        .setFooter("Overkill bot | Made by Rimask")

        message.channel.send({ embeds: [invitobello]})
    }
        
}
