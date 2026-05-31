const fs = require('fs');
if (fs.existsSync('bot.env')) require('dotenv').config({ path: './bot.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
BOT_URL: process.env.BOT_URL || "https://raw.githubusercontent.com/ArslanMDofficial/ARSLAN-MD-DATA/refs/heads/main/datafile.json",
AUTO_SITE: process.env.AUTO_SITE || "https://arslan-apis.vercel.app",
BAND_URL: process.env.BAND_URL || "https://raw.githubusercontent.com/ArslanMDofficial/ARSLAN-MD-DATA/refs/heads/main/bandusers.json",
REPO_LINK: process.env.REPO_LINK || "https://github.com/Arslan-MD/KIRA-MD",
REPO_NAME: process.env.REPO_NAME || "SPIDER-MD",
BOT_NAME: process.env.BOT_NAME || "SPIDER-MD",
DESCRIPTION: process.env.DESCRIPTION || "SPIDER MD PAKISTANI POWERFULL WHATSAPP BOT",
OWNER_NUMBER: process.env.OWNER_NUMBER || "923207047366",
OWNER_NAME: process.env.OWNER_NAME || "RehanMD Official",
ST_SAVE: process.env.ST_SAVE || "SPIDER-MD-STATUS-SERVER",
BIO_TEXT: process.env.BIO_TEXT || "SPIDER-MD-BY-REHANMD-OFFICIAL",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*`STATUS SEEN BY SPIDER-MD`* _*POWERD BY*_ *RehanMD Official Whtsapp Bot*",
FOOTER: process.env.FOOTER || "SPIDER-MD",
COPYRIGHT: process.env.COPYRIGHT || "*㋛ SPIDER-MD BY REHAN-MD OFFICIAL*",
VERSION: process.env.VERSION || "9.0.0",
NEWSLETTER: process.env.NEWSLETTER || "120363407735077129@newsletter",
WA_CHANNEL: process.env.WA_CHANNEL || "https://whatsapp.com/channel/0029VbCVxtOBvvse4ew4Ki2Y",
INSTA: process.env.INSTA || "https://Instagram.com/arslanmdofficial",
ALIVE_IMG: process.env.ALIVE_IMG || "https://up6.cc/2026/05/17801647525761.png",
OWNER_IMG: process.env.OWNER_IMG || "https://up6.cc/2026/05/17801647525761.png",
CONVERT_IMG: process.env.CONVERT_IMG || "https://up6.cc/2026/05/17801647525761.png",
AI_IMG: process.env.AI_IMG || "https://up6.cc/2026/05/17801647525761.png",
SEARCH_IMG: process.env.SEARCH_IMG || "https://up6.cc/2026/05/17801647525761.png",
DOWNLOAD_IMG: process.env.DOWNLOAD_IMG || "https://up6.cc/2026/05/17801647525761.png",
MAIN_IMG: process.env.MAIN_IMG || "https://up6.cc/2026/05/17801647525761.png",
GROUP_IMG: process.env.GROUP_IMG || "https://up6.cc/2026/05/17801647525761.png",
FUN_IMG: process.env.FUN_IMG || "https://up6.cc/2026/05/17801647525761.png",
TOOLS_IMG: process.env.TOOLS_IMG || "https://up6.cc/2026/05/17801647525761.png",
OTHER_IMG: process.env.OTHER_IMG || "https://up6.cc/2026/05/17801647525761.png",
MOVIE_IMG: process.env.MOVIE_IMG || "https://up6.cc/2026/05/17801647525761.png",
NEWS_IMG: process.env.NEWS_IMG || "https://up6.cc/2026/05/17801647525761.png",
PP_IMG: process.env.PP_IMG || "https://up6.cc/2026/05/17801647525761.png"
};
