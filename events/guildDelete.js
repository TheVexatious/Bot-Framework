/*
guildDelete event, autogenerated by the framework, coded by Vex
*/

module.exports = {
    execute: function(bot, guild){
        bot.logger.logGuildDelete(guild.name, bot.guilds.size);
    }
}
