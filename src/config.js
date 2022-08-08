const dotenv = require('dotenv')
dotenv.config();

module.exports = {
    port: 80,
    staff: ["529815278456930314", "926929432243994626"],
    owners: ["926929432243994626", "529815278456930314"],
    mongo: process.env.mongo,
    bot: {
        id: "1004263717355126845",
        prefix: "v!",
        secret: process.env.secret,
        redirect: "http://localhost/auth/callback",
        token: process.env.token
    },
    servers: {
      prefix: "vs!",
      token: process.env.stoken
    },
    guilds: {
      main: '1006065494257848433',
      testing: '937131743205543947'
    },
    roles: {
      mod: '',
      admin: '',
      developer: '1006065897456283730',
      bots: '1004265398226657292',
      bottester: '953029305305280512'
    },
    channels: {
     weblogs: '1006247458906591372',
     modlogs: '1006247811613982791'
     }
     
}