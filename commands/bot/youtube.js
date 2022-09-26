const Discord = require('discord.js')
const client = new Discord.Client({ 
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"],}
);

module.exports = {
    name: "youtube",
    description: "manda il canale youtube del developer del bot",
    execute(message, args) {
        var embed = new Discord.MessageEmbed()
        .setTitle("**Ecco il canale youtube di Rimask**")
        .setDescription(`${message.author.username} **Ecco il canale youtube di Rimask:** [Canale youtube](https://www.youtube.com/channel/UCRCzZEjhXbQWIEuMZMLHT3Q)`)
        .setThumbnail("https://media.discordapp.net/attachments/1014465158581592124/1021087392939118602/BB7B6AC5-6122-4B8F-907C-82356974C792.png")
        .setTimestamp()
        .setFooter(" Overkill bot | Made by Rimask")


        message.channel.send({ embeds: [embed]})
    }
    
}
