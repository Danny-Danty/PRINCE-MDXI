
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA61U2Y6jSBD8l3rFGnMYDJZaGsAX+MA2mLa92odqKA5zdlUBxiP/+wq7e3pWOzvTKy1PRUJmREZF5jeQFzFBC9SC0TdQ4riGFHVH2pYIjIBWBQHCoAd8SCEYAUk9P+/HetBwU8+NDlfC7kRRPlZoYcBa3lzYmdU4plGbvPoEbj1QVi9p7P2iYMVki7Oix7IdGeNl5BDWqOnAGpTXOGndJEncnLvktnK+Jk/g1lWEMY7zcFJGKEMYpgvUbmCMP0ffHu+mJzlZuhYz0Fu/vVC4Z07OMbQZv8i0w7ERYZS7QibIn6O/bZZjzVs6CtIaX4PndZVybd/E9oy13eWckdLnYjghsZKpD/okDnPkGz7KaUzbT+u+mumFR85rM5sdMJ2RupSW87ygkbx4nnuKFRzbCzuVZy+zTxLPNL+/nHHjNRU3h7O4e5Xsk5wrCookFWmS7rDNnEmswt42PxLf4HevJP9F98RUDFfT+s2r7TKnQIfPxbDQpEwyanpyQ1V6puaLJu094fg5+q/imuqZduWJtru4EW+sGtcUdVhoqlOYOnaq1Epe9kz/PPmgD2mFf8XyyNiCmHnly3rv+k4ws8bh0jMCbte+HNdORlRM/Ki4GsJuvXDK6YVazcUimWxWJBX7K7ZfM/LAL2u9NWvmTJzmaMRR+HTvKEGt4YMRd+sBjMKYUAxpXORdjOe5HoB+bSMPI3qXFxwsN2TVNqysK/aEjSPN5ayvO3pVMyhdTiRYGTXdasN4Hj6BHihx4SFCkD+PCS1wu0KEwBARMPrjflNd0xhlBUVm7IMR4IWBzPGiIAwHrPyVfGkiSAksyy85oqAHAlxkKwRGFFeoB+4ZnChoOqdMJEWYDnVVkFiNU7WxwgmqrE6nXNdj9kB14gwRCrMSjLihKHH8QBbEW+9/IiJq04k+FfkJz6nSWBbFsTIWJE5TBFVWhtrkN0Sk2589kKMLfTi501/geiCIMaH7vCrTAvrvNn//CD2vqHJqt7mndweEweiHMKI0zkPStVblEHtRXCO96wOMApgS9P3KEUb+W+x7dpflIwrjlIAR0Ne8nlrH6cTUKfH2s5k6CVU9VMEH2ruPHz5BWzavE7gYQktoV+bcDzgfXUxDy5NynDmbq3ORrttmqHDq00+KgBGI6mhtczhyzs50sdM8d+ufqCEWr3a0OA2EMrXG2caB7HkwoFcszwyW6Stbo2+Y5+qFr6CREszsk6xtClNarVZxiTldferQfFTHHvob2NzJsuE4k0Q+KQaSMmeYnb3b7PbLGtfBSRkeAr90lhw6EneZIMOS9sp+uz+qu1CzM+KZO/F5WUA4nbI6+7prZql+PDePCcvuo/1PV41+4qv04emBLPKsKEoCyw+4wUj+2sV7IIddLaCe9ru7ne67I33b2fHbVMX31yBG9xX4lvJb4IcknbHYW++HGm9L9V8Wk3ZI1uZQnMUVf6byWd8JB+VwILatnsTFVkyuMisjwq6svr8Ft87hZQppUOAMjADMfVzc+8JF1TnVyIPiF2C6ujfG24emKSRU/XD/zwaKffy1wUU5hyTqRNhwxygAPZC1alnaFNL3YQJq9+hwCW5/ARsQvh95CAAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "2348148099134", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by Azure", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "2348125337408", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "Azure", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "Azure tech", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot, mumu, gay", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "true", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
