
//-Config Varibles-//
const config = require('./config.js');
global.config = config;
const { Client, GatewayIntentBits, Partials } = require('discord.js');

//-Other Files-//
require('./app.js');

//-Main Client-//

const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent
    ],
   partials: [
    Partials.Channel, Partials.Message
  ]
});
client.login(config.bot.token)
global.client = client;
require('./client.js');

//-ServerList Client-//

const sclient = new Client({
    intents: [
        GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent
    ],
    partials: [
        Partials.Channel, Partials.Message
    ]
});
sclient.login(config.servers.token)
global.sclient = sclient;
require('./servers/client.js');
