var c = require("chalk");
var chalk = new c.constructor({enabled: true});

class Logger{
    constructor(logTimestamp){
        this.logTimestamp = !!logTimestamp;
    }

    get timestamp(){
        return `[${new Date().toLocaleString()}] `;
    }

    logCommand(msg){
        if(msg.guild) console.log(this.timestamp + chalk.bold.magenta(msg.channel.guild.name)+" : "+chalk.yellow("#"+msg.channel.name)+" : "+chalk.bold.green(msg.author.username)+" : "+chalk.bold.cyan(msg.cleanContent.replace(/\n/g, " ")));
		else console.log(this.timestamp + chalk.bold.green(msg.author.username)+" : "+chalk.bold.cyan(msg.cleanContent.replace(/\n/g, " ")));
    }

    debug(message){
        console.log(`${this.timestamp} ${chalk.bgBlue.black("DEBUG")}: ${message}`);
    }

    warn(message){
        console.log(`${this.timestamp} ${chalk.bgYellow.black("WARN")}: ${message}`);
    }

    info(message){
        console.log(`${this.timestamp} ${chalk.byCyan.black("INFO")}: ${message}`)
    }

    error(message){
        console.log(`${this.timestamp} ${chalk.bgRed.black("ERROR")}: ${message}`);
    }

    log(message){
        console.log(`this.timestamp ${message}`);
    }

    logFileLoaded(file){
        console.log(`${chalk.blue(file)} ${chalk.green("Loaded!")}`);
    }

    logFileError(file, error){
        console.log(`${chalk.blue(file)} ${chalk.yellow("Unable to load! ->")} ${chalk.red(error.message)}`);
    }

    logEnd(thing, count, total){
        if(count == total){
            console.log(`${chalk.black.bgCyan(thing)}: ${chalk.magenta("All Files Loaded! ("+count+"/"+total+")")}`);
        }else{
            console.log(`${chalk.black.bgCyan(thing)}: ${chalk.red("Not All Files Loaded! ("+count+"/"+total+")")}`)
        }
    }

    logReady(username, guilds){
        console.log(`${chalk.yellow("Ready to begin! Currently logged in as ")} ${chalk.green(username)} ${chalk.yellow("connected to")} ${chalk.green(guilds)} ${chalk.yellow("guilds!")}`)
    }

    logGuildCreate(guild, count){
        console.log(`${this.timestamp} ${chalk.bgGreen.black("GUILD CREATE")}: ${chalk.yellow("Added to")} ${chalk.green(guild)} ${chalk.yellow(", New guild count:")} ${chalk.green(count)}`);
    }

    logGuildDelete(guild, count){
        console.log(`${this.timestamp} ${chalk.bgRed.black("GUILD DELETE")}: ${chalk.yellow("Removed from")} ${chalk.green(guild)} ${chalk.yellow(", New guild count:")} ${chalk.green(count)}`);
    }
}

module.exports = Logger;