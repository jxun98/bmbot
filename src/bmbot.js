
// import the discord.js module

var client_secret = require('../client_secret.json');
var summoner = require('./summoner.js');
const Discord = require('discord.js');

// create an instance of a Discord Client, and call it bot
const bot = new Discord.Client();

// the token of your bot - https://discordapp.com/developers/applications/me
const token = client_secret.token;

// from Discord _after_ ready is emitted.
bot.on('ready', () => {
    console.log('I am ready!');
});

bot.on('message', msg => {
    if (msg.content === 'ping') {
        summoner.gatherInformation()
            .then(function(data) {
                msg.reply(JSON.stringify(data));
            })
    }
  });

// log our bot in
bot.login(token);

//summoner.gatherInformation();