const Discord = require('discord.js')
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"],}
)


module.exports = {
    name: "ready",
    execute() {
        console.log('Bot online')
     }
}