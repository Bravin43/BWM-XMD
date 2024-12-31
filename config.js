const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.BWM-XMD;;;H4sIAAAAAAAAA5VUbY+qOBj9L/0qcwFFEJNJFoFRwBdUBHWz2RQoWERAWlCc+N836EzmZpN7d5ZPTVvOc3rOeZ53kOWYIAs1YPgOihLXkKJ2SZsCgSEYVVGESsCAEFIIhmA2wTNC5xtX3/aCW2b3dCoJWmMdJnXXuI1YxY14e99MkzR+BXcGFJWf4uA3gDtjNWf5lEeFY86rTi/gpthV7HPAimLlGZK1r0dCeGVv8fEV3FtEiEucxXpxQCdUwtRCjQ1x+T36p3m1028rWXUs1I/tlE0Eno1WvrCR1rsFFCbmLGCz3Xns7b5HX+isO8I6kmstk+fyxhT8nbWL5mm58UaX+Qjx4aEQporZcZZP+gTHGQqNEGUU0+b7uptstRxc3HLR243F63Y+2m4v1KjDhDpXwZlNU7kidqLlPPkecb432O18PtSaTji7TosDIVesYXp10iWyAiKvtP3WmriKq/xM3C4/s3L8P7pzk9zNa9gPt5uEm+iSsMhWnY1L48PSWE6C2+xabMw9mUtj4Xv0NWVvcKqiL2gP0X3aw7HunGOkmtjcK7PqhOf1Pp8LBvtGvuhDWpW/Y0ntXgfuLV9Z+Aq7Lqo+J6D51vLk7hwdI8fy3HlTeqImG2vz1BktZcPjZ8nUGLyp+1MyF2qlOCmJe5WyJOxfp4vL0hscLq+PFx1RY4RgyN8ZUKIYE1pCivOs3RP7DIBhvUZBiehDXeCumqzqzKxCsaPjQB4Uq6peE6V7pjuxN+DUa0c65Oo566HNK2BAUeYBIgSFE0xoXjYzRAiMEQHDP/9iQIau9OlbW63HMyDCJaGbrCrSHIafpn4ewiDIq4yumyxQ2wUqwZD72kaU4iwmrYxVBsvggGukHiAlYBjBlKA7A0JU4wC1eEAx5cKrk53TX/eyfXdiob+Pg0tL+ZBnzyuhwA2QJIkvsi+JL4IccC8+D/0XThK6kOv3eQnKgAH4o2Xaf37poHvSD9EonE3CczAVk72sku1MqJfC6tkWT+lRiUIwpGWFGODD4FgVTn5E2W9wpcgSB1NHXcG48Y9ng0jnvsiNdf+y+Qn3aSkYvn+NKTUPW7z+22S347UuYMDpkUDcvrzbFySBE3qywIvDrvQH+XFphYRF8SNDFDAgg+1t4CKKSpi1hT5caCFCRCFOCRgC1Wi2QjV7000v53wyHit6rKixAr5c+0z/M14jWTMSCYfZbMAm+WA0cuuyg9NUenujwWJUWqqwkqxcOK8f8fo3CBgCa+kqis4hMa/Lpmz0ZsppXbTxNQKvg+IopYtLXmPd03p4zHPam3DDrO1MGrvyzGu+8aJNsnTtKNJ51/R8pY55R1OU17baMz0/F/M3jW8HqacWY6drjsuTd1RWFns6s5ebN5jJitovdH0qH1InpZQl6yvc2n13mgdmpfq3rYy7W9FcSX3jTYiapNM9JviwfPblYy6kH/MYP1rm/SNrEUaP8fbhwn+69RV77s78hPExMH8RrdEyWjZGR8j2N9sWRFtZur7I5sUeXVf+VothE1c6as4L65iC+/0vBhQppFFensAQkJMPAQNSSKjy1bYOPiFC4akAQ17q9UVJlMUuA06NUhRrCulntwPl8UljcP8HUHM1WggIAAA=|| '',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

