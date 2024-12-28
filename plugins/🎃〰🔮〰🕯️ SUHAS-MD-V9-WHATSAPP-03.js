//
// ░██████╗██╗░░░██╗██╗░░██╗░█████╗░░██████╗░░░░░░███╗░░░███╗██████╗░░░░░░░██╗░░░██╗░█████╗░
// ██╔════╝██║░░░██║██║░░██║██╔══██╗██╔════╝░░░░░░████╗░████║██╔══██╗░░░░░░██║░░░██║██╔══██╗
// ╚█████╗░██║░░░██║███████║███████║╚█████╗░█████╗██╔████╔██║██║░░██║█████╗╚██╗░██╔╝╚██████║
// ░╚═══██╗██║░░░██║██╔══██║██╔══██║░╚═══██╗╚════╝██║╚██╔╝██║██║░░██║╚════╝░╚████╔╝░░╚═══██║
// ██████╔╝╚██████╔╝██║░░██║██║░░██║██████╔╝░░░░░░██║░╚═╝░██║██████╔╝░░░░░░░░╚██╔╝░░░█████╔╝
// ╚═════╝░░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░░░░░░░╚═╝░░░░░╚═╝╚═════╝░░░░░░░░░░╚═╝░░░░╚════╝░
// * Project name - SUHAS-MD-V9 
// * Author - Suhas Pathsindu.
// * Team - 🇦🇴★ ͟͞  ͟͞ ̶❮ᓩＣ͔́ʏʙ͕֝́́ᴇʀ〴Ｄ֝֩ʀᴀ֞ͨͬͥɢᴏɴךＯ͕ͩꜰ͑́ꜰɪᴄ͚ͫɪᴀֹ֣֝ʟ❯ ͟͞ ̶ ͟͞★🇦🇴 
// * Version - 9.0.0
// World Best & Powerfull WhatsApp User Bot in Sri Lanka.
// Don't Copy My Codes. :(
const config = require("../config");
const {
  cmd,
  commands
} = require('../command');
const axios = require("axios");
const {
  screenshotV3
} = require("getscreenshot.js");
const crypto = require("crypto");
const cheerio = require("cheerio");
const {
  image2url
} = require("@dark-yasiya/imgbb.js");
const nima = require("@mrnima/technology_news_info");
const googleTTS = require("google-tts-api");
const fg = require('api-dylux');
const yts = require("yt-search");
cmd({
  'pattern': "24news",
  'desc': "owner the bot",
  'category': 'main',
  'react': "🗞️",
  'filename': __filename
}, async (_0x3c6ae1, _0x2d481f, _0x58b66f, {
  from: _0x4c62d7,
  quoted: _0x4b7c37,
  body: _0x2fa189,
  isCmd: _0x3579dd,
  command: _0x41fac7,
  args: _0x259475,
  q: _0x31b510,
  isGroup: _0x3d8218,
  sender: _0x342ba9,
  senderNumber: _0x4907c7,
  botNumber2: _0x1c9c0f,
  botNumber: _0x9ca35b,
  pushname: _0x437d8a,
  isMe: _0x163bd8,
  isOwner: _0x3ee933,
  groupMetadata: _0x474335,
  groupName: _0x819891,
  participants: _0x305058,
  groupAdmins: _0xbecda5,
  isBotAdmins: _0x3e2204,
  isAdmins: _0x1fb4f7,
  reply: _0x2e3671
}) => {
  try {
    await _0x3c6ae1.sendMessage(_0x4c62d7, {
      'image': {
        'url': "https://i.ibb.co/mbP3mpW/20241207-221016.jpg"
      },
      'caption': "*💞 ඔයාලට 24/7 News යන විදියට මේ බොට් හරහා News ගන්න පුලුවන්.😊*\n\n*📰 24/7 News සේවාව සක්‍රීය කිරීම සදහා මෙම විධානය පාවිච්චි කරන්න.✅*\n*.startnews*\n\n*📰 24/7 News සේවාව අක්‍රීය කිරීම සදහා මෙම විධානය පාවිච්චි කරන්න.🚫*\n*.stopnews*\n\n*_⚠️ මෙම News ගෘෘප් එකක් තුළ පමණක් වලංගු වන බව කරුණාවෙන් සළකන්න.📍_*\n\n\n*⚡ʏᴏᴜᴛᴜʙᴇ* -: https://youtube.com/@suhasbro\n*⚡ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ* -: https://whatsapp.com/channel/0029VagKNUe96H4IdMbr9f2o\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*\n"
    }, {
      'quoted': _0x2d481f
    });
    await _0x58b66f.react('✅');
  } catch (_0x17359a) {
    console.log(_0x17359a);
    _0x2e3671('' + _0x17359a);
  }
});
cmd({
  'pattern': "about",
  'desc': "About For Suhas.",
  'category': "main",
  'react': '☺',
  'filename': __filename
}, async (_0x383559, _0x8339ad, _0x3c0e97, {
  from: _0x233c7e,
  quoted: _0x45fe9f,
  body: _0x1e0dd8,
  isCmd: _0xe9af25,
  command: _0x885158,
  args: _0x562889,
  q: _0x48a880,
  isGroup: _0x47c60e,
  sender: _0x3669e7,
  senderNumber: _0x25be38,
  botNumber2: _0x26a2ca,
  botNumber: _0x338976,
  pushname: _0x28b24b,
  isMe: _0x3df473,
  isOwner: _0x424a15,
  groupMetadata: _0x372784,
  groupName: _0x3bda05,
  participants: _0x41667d,
  groupAdmins: _0x15de43,
  isBotAdmins: _0x5b502b,
  isAdmins: _0xb34261,
  reply: _0x4f170e
}) => {
  try {
    let _0x7c3e8a = "*👋 Hello " + _0x28b24b + "*\n\n *I am Suhas Pathsindu🙈*\n\n *I am 18 years old Boy🔞*\n\n *I am from Sri Lanka🏠*\n\n *I am Simple WhatsApp Bot Developer👨‍💻*\n\n\n Thank You.😊\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*";
    return await _0x383559.sendMessage(_0x233c7e, {
      'image': {
        'url': config.ALIVE_IMG
      },
      'caption': _0x7c3e8a
    }, {
      'quoted': _0x8339ad
    });
    await _0x3c0e97.react('✅');
  } catch (_0x2630a6) {
    console.log(_0x2630a6);
    _0x4f170e('' + _0x2630a6);
  }
});
cmd({
  'pattern': "alive",
  'desc': "online the bot",
  'category': 'main',
  'react': '🌟',
  'filename': __filename
}, async (_0x2dde14, _0x2d7147, _0x59b392, {
  from: _0x9db417,
  quoted: _0x53e1de,
  body: _0x24737f,
  isCmd: _0x234a1e,
  command: _0x52a9d3,
  args: _0x5a3364,
  q: _0x5f1562,
  isGroup: _0x1c44b4,
  sender: _0x2e5363,
  senderNumber: _0x3acd28,
  botNumber2: _0x1130c3,
  botNumber: _0x459a37,
  pushname: _0x270db1,
  isMe: _0x30d8a2,
  isOwner: _0x4f7bc6,
  groupMetadata: _0x3f1217,
  groupName: _0x45949e,
  participants: _0x1af371,
  groupAdmins: _0x2663ba,
  isBotAdmins: _0x376d,
  isAdmins: _0x7eb7a3,
  reply: _0x4b8125
}) => {
  try {
    let _0x3404df = "👋 𝗛𝗶 " + _0x270db1 + "\n\n ♡ _♫__♡\n║║╔║║╔╗ ♫\n╠╣╠║║║║\n║║╚╚╚╚╝ ♫  \n\n*🧚‍♂️𝙸 𝚊𝚖 𝙰𝚕𝚒𝚟𝚎 𝙽𝚘𝚠.🧚‍♂️*\n\n🧚‍♂️𝙄 𝘼𝙢 𝙎𝙪𝙝𝙖𝙨 𝙋𝙖𝙩𝙝𝙨𝙞𝙣𝙙𝙪.\n🧚‍♂️𝙎𝙐𝙃𝘼𝙎-𝙈𝘿 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥 𝘽𝙤𝙩 𝙊𝙬𝙣𝙚𝙧.\n🧚‍♂️𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚 𝙈𝙚 𝙤𝙣 𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝙁𝙤𝙧 𝙈𝙤𝙧𝙚 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣𝙨...\n\n👋Hey...! I'm Suhas Pathsindu.(Suhas Bro). Follow Us & Shere Channel.💛\n\n\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n\n*🏮ꜱᴜʙꜱᴄʀɪʙᴇ ᴜꜱ* ➟https://youtube.com/@suhasbro\n\n*💡ꜰᴏʟʟᴏᴡ ᴜꜱ* ➟https://whatsapp.com/channel/0029VagKNUe96H4IdMbr9f2o\n\n*✨ᴡᴇʙ ꜱɪᴛᴇ* ➠ https://suhas-bro.vercel.app/\n\n*🎉ᴛᴇʟᴇɢʀᴀᴍ* ➠https://t.me/suhasbro\n\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n\n\n*_🗣️Sʜᴇʀᴇ Oᴜʀ YᴏᴜTᴜʙᴇ Cʜᴀɴɴᴇʟ Lɪɴᴋ & WʜᴀᴛꜱAᴘᴘ Cʜᴀɴɴᴇʟ Lɪɴᴋ Wɪᴛʜ Yᴏᴜʀ Fʀɪᴇɴᴅꜱ...💙_*\n\n\n‎╮╰╮╮▕╲╰╮╭╯╱▏╭╭╭╭\n╰╰╮╰╭╱▔▔▔▔╲╮╯╭╯\n┏━┓┏┫╭▅╲╱▅╮┣┓╭║║║\n╰┳╯╰┫┗━╭╮━┛┣╯╯╚╬╝\n╭┻╮╱╰╮╰━━╯╭╯╲┊   ║\n╰┳┫▔╲╰┳━━┳╯╱▔┊   ║\n┈┃╰━━╲▕╲╱▏╱━━━┬╨╮\n┈╰━━╮┊▕╱╲▏┊╭━━┴╥╯\n\n> *✨ Powered By SUHAS-MD-V9 💞*\n";
    await _0x2dde14.sendMessage(_0x9db417, {
      'image': {
        'url': "https://i.ibb.co/mbP3mpW/20241207-221016.jpg"
      },
      'caption': _0x3404df
    }, {
      'quoted': _0x2d7147
    });
    await _0x59b392.react('✅');
  } catch (_0x40c438) {
    console.log(_0x40c438);
    _0x4b8125('' + _0x40c438);
  }
});
cmd({
  'pattern': 'anime',
  'desc': "anime the bot",
  'category': "main",
  'react': '🦋',
  'filename': __filename
}, async (_0x151e0f, _0x47c856, _0x31a417, {
  from: _0x2b5be2,
  quoted: _0x552580,
  body: _0x5b9b71,
  isCmd: _0x47c21d,
  command: _0x2e8d18,
  args: _0xdcb58,
  q: _0x3c25b3,
  isGroup: _0xd6ad3f,
  sender: _0x2c36a8,
  senderNumber: _0x451b9d,
  botNumber2: _0x5eb895,
  botNumber: _0x4bc081,
  pushname: _0x27352b,
  isMe: _0x19ceff,
  isOwner: _0x2cb4cd,
  groupMetadata: _0x3169e7,
  groupName: _0x45f508,
  participants: _0x3cacfe,
  groupAdmins: _0x3c0b54,
  isBotAdmins: _0x8fa36f,
  isAdmins: _0x2a156f,
  reply: _0x4d3005
}) => {
  try {
    await _0x151e0f.sendMessage(_0x2b5be2, {
      'image': {
        'url': "https://telegra.ph/file/b26f27aa5daaada031b90.jpg"
      },
      'caption': "❮❮❮ 🌈𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 4𝗞 𝗪𝗔𝗟𝗟𝗣𝗔𝗣𝗘𝗥𝗦🌈 ❯❯❯"
    }, {
      'quoted': _0x47c856
    });
    await _0x151e0f.sendMessage(_0x2b5be2, {
      'image': {
        'url': "https://telegra.ph/file/51b44e4b086667361061b.jpg"
      },
      'caption': "❮❮❮ 🌈𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 4𝗞 𝗪𝗔𝗟𝗟𝗣𝗔𝗣𝗘𝗥𝗦🌈 ❯❯❯"
    }, {
      'quoted': _0x47c856
    });
    await _0x151e0f.sendMessage(_0x2b5be2, {
      'image': {
        'url': "https://telegra.ph/file/7d165d73f914985542537.jpg"
      },
      'caption': "❮❮❮ 🌈𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 4𝗞 𝗪𝗔𝗟𝗟𝗣𝗔𝗣𝗘𝗥𝗦🌈 ❯❯❯"
    }, {
      'quoted': _0x47c856
    });
    await _0x151e0f.sendMessage(_0x2b5be2, {
      'image': {
        'url': 'https://telegra.ph/file/3d9732d2657d2d72dc102.jpg'
      },
      'caption': "❮❮❮ 🌈𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 4𝗞 𝗪𝗔𝗟𝗟𝗣𝗔𝗣𝗘𝗥𝗦🌈 ❯❯❯"
    }, {
      'quoted': _0x47c856
    });
    await _0x151e0f.sendMessage(_0x2b5be2, {
      'image': {
        'url': "https://telegra.ph/file/8daf7e432a646f3ebe7eb.jpg"
      },
      'caption': "❮❮❮ 🌈𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 4𝗞 𝗪𝗔𝗟𝗟𝗣𝗔𝗣𝗘𝗥𝗦🌈 ❯❯❯"
    }, {
      'quoted': _0x47c856
    });
    await _0x151e0f.sendMessage(_0x2b5be2, {
      'image': {
        'url': 'https://telegra.ph/file/7514b18ea89da924e7496.jpg'
      },
      'caption': "❮❮❮ 🌈𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 4𝗞 𝗪𝗔𝗟𝗟𝗣𝗔𝗣𝗘𝗥𝗦🌈 ❯❯❯"
    }, {
      'quoted': _0x47c856
    });
    await _0x151e0f.sendMessage(_0x2b5be2, {
      'image': {
        'url': "https://telegra.ph/file/ce9cb5acd2cec7693d76b.jpg"
      },
      'caption': "❮❮❮ 🌈𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 4𝗞 𝗪𝗔𝗟𝗟𝗣𝗔𝗣𝗘𝗥𝗦🌈 ❯❯❯"
    }, {
      'quoted': _0x47c856
    });
    await _0x151e0f.sendMessage(_0x2b5be2, {
      'image': {
        'url': 'https://telegra.ph/file/008937b5ef96545fab4f3.jpg'
      },
      'caption': "❮❮❮ 🌈𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 4𝗞 𝗪𝗔𝗟𝗟𝗣𝗔𝗣𝗘𝗥𝗦🌈 ❯❯❯"
    }, {
      'quoted': _0x47c856
    });
    await _0x31a417.react('✅');
  } catch (_0x399db8) {
    console.log(_0x399db8);
    _0x4d3005('' + _0x399db8);
  }
});
cmd({
  'pattern': "animegirl",
  'alias': ["animegirl1", "animegirl2", "animegirl3"],
  'desc': "Fetch a random anime girl image.",
  'category': 'fun',
  'react': '👧',
  'filename': __filename
}, async (_0x14def2, _0x2d777a, _0x5bac37, {
  from: _0x58be26,
  quoted: _0xf73e53,
  body: _0x39b36d,
  isCmd: _0x2179c7,
  command: _0xd14653,
  args: _0x2f9973,
  q: _0x36f485,
  isGroup: _0x1ebb4a,
  sender: _0xbf68b2,
  senderNumber: _0x529b83,
  botNumber2: _0x9d8739,
  botNumber: _0x38c8a7,
  pushname: _0x1382db,
  isMe: _0x4c6f61,
  isOwner: _0x1f9f33,
  groupMetadata: _0xb31e80,
  groupName: _0x5199da,
  participants: _0x5fc210,
  groupAdmins: _0x38c72e,
  isBotAdmins: _0xefe5d0,
  isAdmins: _0x2f0aab,
  reply: _0x2776b2
}) => {
  try {
    const _0x2b3b97 = await axios.get("https://api.waifu.pics/sfw/waifu");
    const _0x1febfd = _0x2b3b97.data;
    await _0x14def2.sendMessage(_0x58be26, {
      'image': {
        'url': _0x1febfd.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x2d777a
    });
    await _0x5bac37.react('✅');
  } catch (_0x1f3548) {
    console.log(_0x1f3548);
    _0x2776b2("*Error Fetching Anime Girl image*: " + _0x1f3548.message);
  }
});
cmd({
  'pattern': "apk",
  'alias': ["dlapk", 'apkdl'],
  'desc': "Download apk.",
  'category': "download",
  'filename': __filename
}, async (_0x32c78c, _0x1a9c67, _0x46e9e7, {
  from: _0x550c02,
  quoted: _0x1c4948,
  body: _0x23fdeb,
  isCmd: _0x2fbcc7,
  command: _0x4f17af,
  args: _0x470625,
  q: _0x26194c,
  isGroup: _0x22d35d,
  sender: _0x49b41a,
  senderNumber: _0x1e9b7b,
  botNumber2: _0x1ab775,
  botNumber: _0x2be8fe,
  pushname: _0x5c5303,
  isMe: _0x559cf5,
  isOwner: _0x41a7bb,
  groupMetadata: _0x4f992f,
  groupName: _0x1f38ac,
  participants: _0x45f053,
  groupAdmins: _0x5dcb10,
  isBotAdmins: _0x4d979f,
  isAdmins: _0x557f8f,
  reply: _0x9223df
}) => {
  try {
    await _0x46e9e7.react('📦');
    const _0x389382 = "http://ws75.aptoide.com/api/7/apps/search/query=" + _0x26194c + "/limit=1";
    const _0x19c91b = await axios.get(_0x389382);
    const _0x183b40 = _0x19c91b.data;
    let _0x23657a = _0x183b40.datalist.list[0x0].size % 0xf4240;
    let _0x39785c = '.' + _0x23657a;
    let _0x1ddb85 = _0x183b40.datalist.list[0x0].size / 0xf4240;
    let _0x29d01b = _0x1ddb85 - _0x39785c;
    let _0x432580 = "\n\n*🐦‍🔥 𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗔𝗣𝗞 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🐦‍🔥*\n\n*📦 SUHAS-MD APK Details 📦*\n\n*🏷️ Nᴀᴍᴇ :* " + _0x183b40.datalist.list[0x0].name + "\n\n*📦 Sɪᴢᴇ :* " + _0x29d01b + "MB\n\n*🔖 Pᴀᴄᴋᴀɢᴇ :* " + _0x183b40.datalist.list[0x0]['package'] + "\n\n*📆 Lᴀꜱᴛ Uᴘᴅᴀᴛᴇ :* " + _0x183b40.datalist.list[0x0].updated + "\n\n*👤 Dᴇᴠᴇʟᴏᴘᴇʀꜱ :* " + _0x183b40.datalist.list[0x0].developer.name + "\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*";
    await _0x32c78c.sendMessage(_0x550c02, {
      'image': {
        'url': _0x183b40.datalist.list[0x0].icon
      },
      'caption': _0x432580
    }, {
      'quoted': _0x1a9c67
    });
    await _0x32c78c.sendMessage(_0x550c02, {
      'document': {
        'url': _0x183b40.datalist.list[0x0].file.path_alt
      },
      'fileName': _0x183b40.datalist.list[0x0].name + '.apk',
      'mimetype': "application/vnd.android.package-archive",
      'caption': ''
    }, {
      'quoted': _0x1a9c67
    });
    await _0x46e9e7.react('✅');
  } catch (_0x503979) {
    console.log(_0x503979);
    _0x9223df('' + _0x503979);
  }
});
cmd({
  'pattern': "barcode",
  'alias': ["bcode"],
  'desc': "Generate barcodes.",
  'react': '🎲',
  'category': "other",
  'filename': __filename
}, async (_0x5187f8, _0x494db9, _0x7d22ec, {
  from: _0x1255b9,
  quoted: _0x591152,
  body: _0xd62db9,
  isCmd: _0x284583,
  command: _0x8c75ae,
  args: _0x31090c,
  q: _0x3e3482,
  isGroup: _0x254294,
  sender: _0x114aac,
  senderNumber: _0x56809e,
  botNumber2: _0x44bceb,
  botNumber: _0x4dc274,
  pushname: _0x33cbdd,
  isMe: _0x42dbf2,
  isOwner: _0x27dd5f,
  groupMetadata: _0x515f92,
  groupName: _0x1c6f16,
  participants: _0x5c5938,
  groupAdmins: _0x434c82,
  isBotAdmins: _0xc272dd,
  isAdmins: _0x9a002e,
  reply: _0x34a5a7
}) => {
  try {
    await _0x7d22ec.react('🎲');
    if (!_0x3e3482) {
      return _0x34a5a7("*Give me a text to generate barcode.*");
    }
    await _0x5187f8.sendMessage(_0x1255b9, {
      'text': "*You BarCode is Generating...🎲*"
    }, {
      'quoted': _0x494db9
    });
    const _0x257b1f = "https://barcode.orcascan.com/?type=code128&data=" + _0x3e3482 + '&text=' + _0x3e3482 + "&format=png";
    await _0x5187f8.sendMessage(_0x1255b9, {
      'image': {
        'url': _0x257b1f
      },
      'caption': "*✅ This is You BarCode.🎲*\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    });
    await _0x7d22ec.react('✅');
  } catch (_0x8acd3a) {
    console.log(_0x8acd3a);
    _0x34a5a7('' + _0x8acd3a);
  }
});
cmd({
  'pattern': "convert",
  'alias': ['currency'],
  'desc': "Convert an amount from one currency to another.",
  'category': "convert",
  'react': '💱',
  'filename': __filename
}, async (_0x3bc2e2, _0x462a49, _0x5509ed, {
  from: _0x355e63,
  quoted: _0x1e2500,
  body: _0x556f03,
  isCmd: _0x5c8685,
  command: _0x1381bc,
  args: _0x23cfd7,
  q: _0x8b9376,
  isGroup: _0x1989b2,
  sender: _0x3a21e2,
  senderNumber: _0x19a2f7,
  botNumber2: _0x5de38a,
  botNumber: _0x1c854c,
  pushname: _0x5b0760,
  isMe: _0x2c4b73,
  isOwner: _0x2d10b7,
  groupMetadata: _0x5ba00b,
  groupName: _0x3df149,
  participants: _0x1e8dd3,
  groupAdmins: _0x2464ff,
  isBotAdmins: _0xd175c3,
  isAdmins: _0x30857b,
  reply: _0x464417
}) => {
  try {
    if (_0x23cfd7.length < 0x3) {
      return _0x464417("Usage: .convert <amount> <from_currency> <to_currency>");
    }
    const _0x472b8b = _0x23cfd7[0x0];
    const _0x471bf = _0x23cfd7[0x1].toUpperCase();
    const _0x14cc9c = _0x23cfd7[0x2].toUpperCase();
    if (isNaN(_0x472b8b)) {
      return _0x464417("Please provide a valid amount.");
    }
    const _0x178d80 = "https://api.exchangerate-api.com/v4/latest/" + _0x471bf;
    const _0x15bf1b = await axios.get(_0x178d80);
    const _0x4023a4 = _0x15bf1b.data;
    if (!_0x4023a4.rates[_0x14cc9c]) {
      return _0x464417("Conversion rate for " + _0x14cc9c + " not found.");
    }
    const _0x54f5c7 = (_0x472b8b * _0x4023a4.rates[_0x14cc9c]).toFixed(0x2);
    let _0x113623 = "💸_*Currency Conversion*_💸\n\n";
    _0x113623 += "💵 *Amount*: " + _0x472b8b + " " + _0x471bf + "\n";
    _0x113623 += "🔄 *Converted Amount*: " + _0x54f5c7 + " " + _0x14cc9c + "\n";
    _0x113623 += "📈 *Exchange Rate*: 1 " + _0x471bf + " = " + _0x4023a4.rates[_0x14cc9c] + " " + _0x14cc9c + "\n\n        \n> *✨ Powered By SUHAS-MD-V9 💞*\n        ";
    await _0x3bc2e2.sendMessage(_0x355e63, {
      'text': _0x113623
    }, {
      'quoted': _0x462a49
    });
    await _0x5509ed.react('✅');
  } catch (_0x20be6d) {
    console.log(_0x20be6d);
    _0x464417("*Error Fetching Data*: " + _0x20be6d.message);
  }
});
cmd({
  'pattern': "define",
  'desc': "📚 Get the definition of a word",
  'react': '📚',
  'category': "other",
  'filename': __filename
}, async (_0x24f53b, _0x17003e, _0xcc5458, {
  from: _0x3d2018,
  q: _0x492414,
  reply: _0x100472
}) => {
  try {
    if (!_0x492414) {
      return _0x100472("❗ Please provide a word to define. Usage: .define [word]");
    }
    const _0x373833 = "https://api.dictionaryapi.dev/api/v2/entries/en/" + _0x492414;
    const _0x56facd = await axios.get(_0x373833);
    const _0x58c84a = _0x56facd.data[0x0];
    const _0x43e29f = _0x58c84a.meanings[0x0].definitions[0x0].definition;
    const _0x40fc7c = _0x58c84a.meanings[0x0].definitions[0x0].example || "No example available";
    const _0x4cd7a4 = _0x58c84a.meanings[0x0].definitions[0x0].synonyms.join(", ") || "No synonyms available";
    const _0x320a56 = "\n📚𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗗𝗘𝗙𝗜𝗡𝗘 𝗜𝗡𝗙𝗢📚\n\n📚 *Word*: " + _0x58c84a.word + "\n🔍 *Definition*: " + _0x43e29f + "\n📝 *Example*: " + _0x40fc7c + "\n🔗 *Synonyms*: " + _0x4cd7a4 + "\n\n> *✨ Powered By SUHAS-MD-V9 💞*";
    return _0x100472(_0x320a56);
  } catch (_0x24dc9e) {
    console.log(_0x24dc9e);
    if (_0x24dc9e.response && _0x24dc9e.response.status === 0x194) {
      return _0x100472("🚫 Word not found. Please check the spelling and try again.");
    }
    return _0x100472("⚠️ An error occurred while fetching the definition. Please try again later.");
  }
});
cmd({
  'pattern': "delete",
  'react': '❌',
  'desc': "delete message",
  'category': "group",
  'filename': __filename
}, async (_0x5626b1, _0x55fb04, _0x439a6e, {
  from: _0x1cbb03,
  l: _0x490541,
  quoted: _0x449e94,
  body: _0x30654b,
  isCmd: _0x216b49,
  command: _0x9ecb9c,
  args: _0x1da4e4,
  q: _0x10c26d,
  isGroup: _0x2c8347,
  sender: _0x159e69,
  senderNumber: _0x58bfa5,
  botNumber2: _0x180ece,
  botNumber: _0x4e40fd,
  pushname: _0x31245b,
  isMe: _0x64b4ef,
  isOwner: _0x277b48,
  groupMetadata: _0x3d2adf,
  groupName: _0x2d9c31,
  participants: _0x57a0f2,
  isItzcp: _0x183aed,
  groupAdmins: _0x32a05f,
  isBotAdmins: _0x4b0829,
  isAdmins: _0x32218b,
  reply: _0x1e4bdf
}) => {
  if (!_0x277b48 || !_0x32218b) {
    return;
  }
  try {
    if (!_0x439a6e.quoted) {
      return _0x1e4bdf(mg.notextfordel);
    }
    const _0x230373 = {
      'remoteJid': _0x439a6e.chat,
      'fromMe': false,
      'id': _0x439a6e.quoted.id,
      'participant': _0x439a6e.quoted.sender
    };
    await _0x5626b1.sendMessage(_0x439a6e.chat, {
      'delete': _0x230373
    });
  } catch (_0x4e581f) {
    console.log(_0x4e581f);
    _0x1e4bdf("successful..👨‍💻✅");
  }
});
cmd({
  'pattern': 'dog',
  'alias': ['puppy'],
  'desc': "Fetch a random dog image.",
  'category': "fun",
  'react': '🐶',
  'filename': __filename
}, async (_0x4b5afe, _0x25fd5f, _0x4f72e6, {
  from: _0x500458,
  quoted: _0x5cd5c3,
  body: _0x38299a,
  isCmd: _0x329ada,
  command: _0x53e310,
  args: _0x232c2d,
  q: _0x2d82cd,
  isGroup: _0x451163,
  sender: _0x320d93,
  senderNumber: _0x4556c5,
  botNumber2: _0x558d1a,
  botNumber: _0x1af04b,
  pushname: _0x401ab7,
  isMe: _0x55a1f0,
  isOwner: _0x4e40b4,
  groupMetadata: _0x2c1469,
  groupName: _0x4d689f,
  participants: _0x557c1c,
  groupAdmins: _0x375208,
  isBotAdmins: _0x4290a2,
  isAdmins: _0x494a2f,
  reply: _0x1fa2b7
}) => {
  try {
    const _0x5120fe = await axios.get("https://dog.ceo/api/breeds/image/random");
    const _0x15ce30 = _0x5120fe.data;
    await _0x4b5afe.sendMessage(_0x500458, {
      'image': {
        'url': _0x15ce30.message
      },
      'caption': "🐶 𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗗𝗢𝗚 𝗜𝗠𝗔𝗚𝗘𝗦🐶\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x25fd5f
    });
    await _0x4f72e6.react('✅');
  } catch (_0x239ee7) {
    console.log(_0x239ee7);
    _0x1fa2b7("Error Fetching Dog Image🤕: " + _0x239ee7.message);
  }
});
cmd({
  'pattern': "fact",
  'desc': "🧠 Get a random fun fact",
  'react': '😝',
  'category': "fun",
  'filename': __filename
}, async (_0x442c85, _0x57df47, _0x95e170, {
  from: _0x5acdd4,
  q: _0x286be3,
  reply: _0x1cf3db
}) => {
  try {
    const _0x4bf628 = await axios.get('https://uselessfacts.jsph.pl/random.json?language=en');
    const _0x2f7660 = _0x4bf628.data.text;
    const _0x13e942 = "\n👾 *ꜱᴜʜᴀꜱ-ᴍᴅ ʀᴀɴᴅᴏᴍ ꜰᴜɴ ꜰᴀᴄᴛ* 👾\n\n" + _0x2f7660 + "\n\nIsn't that interesting? 😄\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*";
    return _0x1cf3db(_0x13e942);
  } catch (_0x3d7475) {
    console.log(_0x3d7475);
    return _0x1cf3db("⚠️ An error occurred while fetching a fun fact. Please try again later🤕.");
  }
});
cmd({
  'pattern': 'githubstalk',
  'desc': "Fetch detailed GitHub user profile including profile picture.",
  'category': 'other',
  'react': '📚',
  'filename': __filename
}, async (_0x5b5528, _0x54c948, _0x516d05, {
  from: _0x3c486b,
  quoted: _0x332de1,
  body: _0x1d759b,
  isCmd: _0x3de57f,
  command: _0x1b01b0,
  args: _0x28d3e4,
  q: _0x1d16d4,
  isGroup: _0x205790,
  sender: _0x42c819,
  senderNumber: _0x5efbe6,
  botNumber2: _0x510291,
  botNumber: _0x4aafdd,
  pushname: _0x391650,
  isMe: _0x2bc062,
  isOwner: _0x29e758,
  groupMetadata: _0x5b5510,
  groupName: _0xedbe43,
  participants: _0x232122,
  groupAdmins: _0x3fc5ff,
  isBotAdmins: _0x494fc4,
  isAdmins: _0x521f13,
  reply: _0x46b15a
}) => {
  try {
    const _0x57b559 = _0x28d3e4[0x0];
    if (!_0x57b559) {
      return _0x46b15a("Please provide a GitHub username.");
    }
    const _0x5af0be = 'https://api.github.com/users/' + _0x57b559;
    const _0x25dcf2 = await axios.get(_0x5af0be);
    const _0x4d57d0 = _0x25dcf2.data;
    let _0x56ff8e = "👨‍💻 𝗦𝗨𝗛𝗔𝗦 - 𝗠𝗗 - 𝗚𝗜𝗧𝗛𝗦𝗧𝗔𝗟𝗞 👨‍💻\n        \n👤 *ᴜꜱᴇʀ ɴᴀᴍᴇ*: " + (_0x4d57d0.name || _0x4d57d0.login) + "\n\n🔗 *ɢɪᴛʜᴜʙ ᴜʀʟ*:(" + _0x4d57d0.html_url + ")\n\n📝 *ʙɪᴏ*: " + (_0x4d57d0.bio || "Not available") + "\n\n🏙️ *ʟᴏᴄᴀᴛɪᴏɴ*: " + (_0x4d57d0.location || "Unknown") + "\n\n📊 *ᴘᴜʙʟɪᴄ ʀᴇᴘᴏ*: " + _0x4d57d0.public_repos + "\n\n👥 *ꜰᴏʟʟᴏᴡᴇʀꜱ*: " + _0x4d57d0.followers + " | Following: " + _0x4d57d0.following + "\n\n📅 *ᴄʀᴇᴀᴛʀᴅ ᴅᴀᴛᴇ*: " + new Date(_0x4d57d0.created_at).toDateString() + "\n\n🔭 *ᴘᴜʙʟɪᴄ ɢɪꜱᴛꜱ*: " + _0x4d57d0.public_gists + "\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*\n";
    await _0x5b5528.sendMessage(_0x3c486b, {
      'image': {
        'url': _0x4d57d0.avatar_url
      },
      'caption': _0x56ff8e
    }, {
      'quoted': _0x54c948
    });
    await _0x516d05.react('✅');
  } catch (_0x44e00a) {
    console.log(_0x44e00a);
    _0x46b15a("Error fetching data🤕: " + (_0x44e00a.response ? _0x44e00a.response.data.message : _0x44e00a.message));
  }
});
cmd({
  'pattern': "hack",
  'desc': "Displays a dynamic and playful 'Hacking' message for fun.",
  'category': "fun",
  'react': '💀',
  'filename': __filename
}, async (_0x5b5233, _0x1c4827, _0x30d997, {
  from: _0x49c0fa,
  quoted: _0x2f29ee,
  body: _0x5418f2,
  isCmd: _0x3aef88,
  command: _0x42350c,
  args: _0x54c463,
  q: _0x11eae8,
  isGroup: _0x2dc9b6,
  sender: _0x40b1e9,
  senderNumber: _0x1c2df6,
  botNumber2: _0x4648e8,
  botNumber: _0x3e7c90,
  pushname: _0x145575,
  isMe: _0x2a53d1,
  isOwner: _0x1f667b,
  groupMetadata: _0x32336d,
  groupName: _0x4e1046,
  participants: _0x19add9,
  groupAdmins: _0x60db6b,
  isBotAdmins: _0x37f1c6,
  isAdmins: _0x1d5890,
  reply: _0x26947e
}) => {
  try {
    const _0x2b98d6 = ["💻 *HACK STARTING...* 💻", '', "*Initializing hacking tools...* 🛠️", "*Connecting to remote servers...* 🌐", '', "```[█] 10%``` ⏳", "```[██] 20%``` ⏳", "```[███] 30%``` ⏳", "```[████] 40%``` ⏳", "```[█████] 50%``` ⏳", "```[██████] 60%``` ⏳", "```[███████] 70%``` ⏳", "```[████████] 80%``` ⏳", "```[█████████] 90%``` ⏳", "```[██████████] 100%``` ✅", '', "🔒 *System Breach: Successful!* 🔓", "🚀 *Command Execution: Complete!* 🎯", '', "*📡 Transmitting data...* 📤", "*🕵️‍♂️ Ensuring stealth...* 🤫", "*🔧 Finalizing operations...* 🏁", "*🔧 SUHAS-MD Get Your All Data...* 🎁", '', "⚠️ *Note:* All actions are for demonstration purposes only.", "⚠️ *Reminder:* Ethical hacking is the only way to ensure security.", "⚠️ *Reminder:* Strong hacking is the only way to ensure security.", '', " *🐦‍🔥 𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗛𝗮𝗰𝗸𝗶𝗻𝗴 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲𝗱 🐦‍🔥*"];
    for (const _0x589228 of _0x2b98d6) {
      await _0x5b5233.sendMessage(_0x49c0fa, {
        'text': _0x589228
      }, {
        'quoted': _0x1c4827
      });
      await new Promise(_0x2918b6 => setTimeout(_0x2918b6, 0x3e8));
    }
  } catch (_0x35f106) {
    console.log(_0x35f106);
    _0x26947e("❌ *Error!* " + _0x35f106.message);
  }
});
cmd({
  'pattern': "movie",
  'desc': "Fetch detailed information about a movie.",
  'category': "utility",
  'react': '🎬',
  'filename': __filename
}, async (_0x49f4db, _0x2eaed4, _0x500d33, {
  from: _0x2fcced,
  quoted: _0x44fcab,
  body: _0x365817,
  isCmd: _0x47b03a,
  command: _0x3c68f8,
  args: _0x4e5e6c,
  q: _0x3edb54,
  isGroup: _0x4ba970,
  sender: _0x507658,
  senderNumber: _0xeaa37e,
  botNumber2: _0x49017c,
  botNumber: _0x2da2b8,
  pushname: _0x17e007,
  isMe: _0x763e40,
  isOwner: _0x315cff,
  groupMetadata: _0x452d9f,
  groupName: _0x539f05,
  participants: _0x136b26,
  groupAdmins: _0x6ae638,
  isBotAdmins: _0x37e9cf,
  isAdmins: _0x36f6a4,
  reply: _0x3ef8b2
}) => {
  try {
    const _0x449511 = _0x4e5e6c.join(" ");
    if (!_0x449511) {
      return _0x3ef8b2("📽️ Please provide the name of the movie.");
    }
    const _0x5839f5 = "http://www.omdbapi.com/?t=" + encodeURIComponent(_0x449511) + '&apikey=d3963e30';
    const _0x464821 = await axios.get(_0x5839f5);
    const _0x53268a = _0x464821.data;
    if (_0x53268a.Response === 'False') {
      return _0x3ef8b2("! Movie not found.");
    }
    const _0x5ed17a = "\n*🎬SUHAS-MD Movie Search🎬*\n\n*•ᴛɪᴛʟᴇ:* " + _0x53268a.Title + "\n*•ʏᴇᴀʀ:* " + _0x53268a.Year + "\n*•ʀᴀᴛᴇᴅ:* " + _0x53268a.Rated + "\n*•ʀᴇʟᴇᴀꜱᴇᴅ:* " + _0x53268a.Released + "\n*•ʀᴜɴᴛɪᴍᴇ:* " + _0x53268a.Runtime + "\n*•ɢᴇɴʀᴇ:* " + _0x53268a.Genre + "\n*•ᴅɪʀᴇᴄᴛᴏʀ:* " + _0x53268a.Director + "\n*•ᴡʀɪᴛᴇʀ:* " + _0x53268a.Writer + "\n*•ᴀᴄᴛᴏʀꜱ:* " + _0x53268a.Actors + "\n*•ʟᴀɴɢᴜᴀɢᴇ:* " + _0x53268a.Language + "\n*•ᴄᴏᴜɴᴛʀʏ:* " + _0x53268a.Country + "\n*•ᴀᴡᴀʀᴅꜱ:* " + _0x53268a.Awards + "\n*•ɪᴍᴅʙ ʀᴀᴛɪɴɢ:* " + _0x53268a.imdbRating + "\n\n> *✨ Powered By SUHAS-MD-V9 💞*\n";
    const _0x511187 = _0x53268a.Poster && _0x53268a.Poster !== "N/A" ? _0x53268a.Poster : config.ALIVE_IMG;
    await _0x49f4db.sendMessage(_0x2fcced, {
      'image': {
        'url': _0x511187
      },
      'caption': _0x5ed17a + "\n> SUHAS-MD🧚‍♂️"
    }, {
      'quoted': _0x2eaed4
    });
    await _0x500d33.react('✅');
  } catch (_0x2b21f4) {
    console.error(_0x2b21f4);
    _0x3ef8b2("❌ Error: " + _0x2b21f4.message);
  }
});
cmd({
  'pattern': "mute",
  'alias': ["lock"],
  'react': '🔒',
  'desc': "mute group.",
  'category': "group",
  'filename': __filename
}, async (_0x172b78, _0x50778d, _0x3613a2, {
  from: _0x3506d2,
  l: _0xb4debd,
  quoted: _0x4ac260,
  body: _0x1490f5,
  isCmd: _0x8b3923,
  command: _0x418aab,
  args: _0x40c7f1,
  q: _0x3888fc,
  isGroup: _0x72e633,
  sender: _0x31bd7f,
  senderNumber: _0x37cabe,
  botNumber2: _0x2de51,
  botNumber: _0x3c8511,
  pushname: _0x2fdc50,
  isMe: _0x4c2f40,
  isOwner: _0x417118,
  groupMetadata: _0x4dfa34,
  groupName: _0x142a14,
  participants: _0x25cbd3,
  isItzcp: _0x1a73ec,
  groupAdmins: _0x48b75d,
  isBotAdmins: _0x14ec65,
  isAdmins: _0x46c4d2,
  reply: _0x154772
}) => {
  try {
    if (!_0x417118 || !_0x46c4d2) {
      return;
    }
    if (!_0x3613a2.isGroup) {
      return _0x154772(mg.onlygroup);
    }
    if (!_0x14ec65) {
      return _0x154772(mg.needbotadmins);
    }
    await _0x172b78.groupSettingUpdate(_0x3613a2.chat, 'announcement');
    const _0x4b24fe = await _0x172b78.sendMessage(_0x3613a2.chat, {
      'text': "*Group chat muted* 🔒"
    }, {
      'quoted': _0x50778d
    });
    return await _0x172b78.sendMessage(_0x3613a2.chat, {
      'react': {
        'text': '🔒',
        'key': _0x4b24fe.key
      }
    });
    await _0x3613a2.react('✅');
  } catch (_0x2dc6d1) {
    console.log(_0x2dc6d1);
    _0x154772("*Please give me a Addmin SUHAS-MD ❗*");
  }
});
cmd({
  'pattern': "news",
  'desc': "Get the latest news headlines.",
  'category': "news",
  'react': '📌',
  'filename': __filename
}, async (_0x3c9f36, _0x3771d8, _0x2ac9aa, {
  from: _0x45955b,
  reply: _0x35ff1e
}) => {
  try {
    const _0x48ebfd = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=0f2c43ab11324578a7b1709651736382");
    const _0x150b0c = _0x48ebfd.data.articles;
    if (!_0x150b0c.length) {
      return _0x35ff1e("No news articles found.");
    }
    for (let _0x19eff9 = 0x0; _0x19eff9 < Math.min(_0x150b0c.length, 0x5); _0x19eff9++) {
      const _0x33e40c = _0x150b0c[_0x19eff9];
      let _0x2a6f40 = "📰 𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗡𝗘𝗪𝗦 𝗖𝗘𝗡𝗧𝗘𝗥 📰\n            \n◈ᴛɪᴛʟᴇ: 📰 *" + _0x33e40c.title + "*\n\n◈ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ: ⚠️ _" + _0x33e40c.description + "_\n\n◈ᴜʀʟ: 🔗 _" + _0x33e40c.url + "_\n\n> *✨ Powered By SUHAS-MD-V9 💞*\n            ";
      console.log("Article URL:", _0x33e40c.urlToImage);
      if (_0x33e40c.urlToImage) {
        await _0x3c9f36.sendMessage(_0x45955b, {
          'image': {
            'url': _0x33e40c.urlToImage
          },
          'caption': _0x2a6f40
        });
      } else {
        await _0x3c9f36.sendMessage(_0x45955b, {
          'text': _0x2a6f40
        });
      }
    }
    ;
  } catch (_0x4fed20) {
    console.error("Error fetching news🤕:", _0x4fed20);
    _0x35ff1e("Could not fetch news. Please try again later.");
  }
});
cmd({
  'pattern': "xneko",
  'alias': ["xgirl"],
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '🔞',
  'filename': __filename
}, async (_0x4dabb6, _0x48db60, _0x330f69, {
  from: _0x258fa1,
  quoted: _0x1d67c7,
  body: _0x59da0f,
  isCmd: _0x3ae65f,
  command: _0x28300d,
  args: _0x23122a,
  q: _0x233b85,
  isGroup: _0x129292,
  sender: _0x30d7db,
  senderNumber: _0x143278,
  botNumber2: _0x4cc8c7,
  botNumber: _0x143703,
  pushname: _0x29afbe,
  isMe: _0x4af098,
  isOwner: _0x312284,
  groupMetadata: _0x4ed454,
  groupName: _0x18bbe2,
  participants: _0x3c8d73,
  groupAdmins: _0x1077d6,
  isBotAdmins: _0x500962,
  isAdmins: _0x755d11,
  reply: _0x3bbd77
}) => {
  try {
    const _0x4bbc1b = await axios.get("https://api.waifu.pics/sfw/waifu");
    const _0xa94b5f = _0x4bbc1b.data;
    await _0x4dabb6.sendMessage(_0x258fa1, {
      'image': {
        'url': _0xa94b5f.url
      },
      'caption': "🔞 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗡𝗦𝗙𝗪 𝗜𝗠𝗔𝗚𝗘𝗦* 🔞\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x48db60
    });
    await _0x330f69.react('✅');
  } catch (_0x21468) {
    console.log(_0x21468);
    _0x3bbd77("*Error Fetching Anime Girl image*: " + _0x21468.message);
  }
});
cmd({
  'pattern': "blowjob",
  'alias': ["xjob"],
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '🔞',
  'filename': __filename
}, async (_0x2e0009, _0x334737, _0x5f3ce1, {
  from: _0x3a1349,
  quoted: _0x517c91,
  body: _0xf288ce,
  isCmd: _0x53f041,
  command: _0xd381b0,
  args: _0x3a20e6,
  q: _0x33c863,
  isGroup: _0x213236,
  sender: _0x58451e,
  senderNumber: _0x1bf43c,
  botNumber2: _0x2c4a5b,
  botNumber: _0x25a0af,
  pushname: _0x43d280,
  isMe: _0x19d1f5,
  isOwner: _0x499577,
  groupMetadata: _0x2d5cae,
  groupName: _0x3bc0d0,
  participants: _0x569f35,
  groupAdmins: _0x319f5a,
  isBotAdmins: _0x325082,
  isAdmins: _0x23dbc5,
  reply: _0xba3324
}) => {
  try {
    const _0x39a7d8 = await axios.get("https://api.waifu.pics/nsfw/blowjob");
    const _0x3079be = _0x39a7d8.data;
    await _0x2e0009.sendMessage(_0x3a1349, {
      'image': {
        'url': _0x3079be.url
      },
      'caption': "🔞 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗡𝗦𝗙𝗪 𝗜𝗠𝗔𝗚𝗘𝗦* 🔞\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x334737
    });
    await _0x5f3ce1.react('✅');
  } catch (_0x18d8b3) {
    console.log(_0x18d8b3);
    _0xba3324("*Error Fetching Anime Girl image*: " + _0x18d8b3.message);
  }
});
cmd({
  'pattern': "owner",
  'desc': "owner the bot",
  'category': "main",
  'react': "👨‍💻",
  'filename': __filename
}, async (_0x4611c3, _0x4d7ad9, _0x39539f, {
  from: _0x478e2d,
  quoted: _0xbc2b52,
  body: _0xc9dc23,
  isCmd: _0xccf39b,
  command: _0x5f3b48,
  args: _0x3c1815,
  q: _0x532496,
  isGroup: _0x504dad,
  sender: _0x413f5d,
  senderNumber: _0x2067e7,
  botNumber2: _0x55e601,
  botNumber: _0x58208c,
  pushname: _0x53f0ab,
  isMe: _0xc55110,
  isOwner: _0x1145d0,
  groupMetadata: _0x5cae95,
  groupName: _0x32ff33,
  participants: _0x6a4d3a,
  groupAdmins: _0x17d99d,
  isBotAdmins: _0x1780f4,
  isAdmins: _0x1a60fb,
  reply: _0x22ad1d
}) => {
  try {
    await _0x4611c3.sendMessage(_0x478e2d, {
      'image': {
        'url': "https://i.ibb.co/mbP3mpW/20241207-221016.jpg"
      },
      'caption': "*⚡𝐒𝐔𝐇𝐀𝐒-𝐌𝐃⚡*\n\n> *🌍𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢🌍* \n\n👋Hey...! I m Suhas Pathsindu.(Suhas Bro). Follow Us & Shere Channel.💛\n\n\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n\n*🐦‍🔥ᴏᴡɴᴇʀ* ➠ꜱᴜʜᴀꜱ ᴘᴀᴛʜꜱɪɴᴅᴜ.\n\n*🏮ꜱᴜʙꜱᴄʀɪʙᴇ ᴜꜱ* ➟https://youtube.com/@suhasbro\n\n*💡ꜰᴏʟʟᴏᴡ ᴜꜱ* ➟https://whatsapp.com/channel/0029VagKNUe96H4IdMbr9f2o\n\n*✨ᴡᴇʙ ꜱɪᴛᴇ* ➠ https://suhas-bro.vercel.app/\n\n*🎉ᴛᴇʟᴇɢʀᴀᴍ* ➠https://t.me/suhasbro\n\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n\n\n\n*_🗣️Sʜᴇʀᴇ Oᴜʀ YᴏᴜTᴜʙᴇ Cʜᴀɴɴᴇʟ Lɪɴᴋ & WʜᴀᴛꜱAᴘᴘ Cʜᴀɴɴᴇʟ Lɪɴᴋ Wɪᴛʜ Yᴏᴜʀ Fʀɪᴇɴᴅꜱ...💙_*\n\n> *✨ Powered By SUHAS-MD-V9 💞*\n"
    }, {
      'quoted': _0x4d7ad9
    });
    await _0x39539f.react('✅');
  } catch (_0x506fcc) {
    console.log(_0x506fcc);
    _0x22ad1d('' + _0x506fcc);
  }
});
cmd({
  'pattern': "qrcode",
  'alias': ["qcode"],
  'react': '🎲',
  'desc': "Generate qr code.",
  'category': "other",
  'filename': __filename
}, async (_0x2d3eac, _0x2b6829, _0x2a90ae, {
  from: _0x2ebd3c,
  quoted: _0x407621,
  body: _0x15122c,
  isCmd: _0x36911c,
  command: _0xc3c0ea,
  args: _0x15ddd1,
  q: _0x88fa3b,
  isGroup: _0x14a813,
  sender: _0x403b1f,
  senderNumber: _0x13ff0e,
  botNumber2: _0x4a3785,
  botNumber: _0x33a812,
  pushname: _0x3843cf,
  isMe: _0x2c3c30,
  isOwner: _0x2ce9a1,
  groupMetadata: _0x2376d3,
  groupName: _0x38ec6f,
  participants: _0x366e68,
  groupAdmins: _0x4697a1,
  isBotAdmins: _0x224941,
  isAdmins: _0x19f2f4,
  reply: _0x533316
}) => {
  try {
    await _0x2a90ae.react('🎲');
    if (!_0x88fa3b) {
      return _0x533316("*Give me a text to generate qr code.*");
    }
    await _0x2d3eac.sendMessage(_0x2ebd3c, {
      'text': "*Generating your QR Code...🎲*"
    }, {
      'quoted': _0x2b6829
    });
    const _0x5abf69 = "https://barcode.orcascan.com/?data=" + _0x88fa3b + "&text=" + _0x88fa3b + "&format=png";
    await _0x2d3eac.sendMessage(_0x2ebd3c, {
      'image': {
        'url': _0x5abf69
      },
      'caption': "*✅ This is you QR Code 🎲*\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    });
    await _0x2a90ae.react('✅');
  } catch (_0x24e1f9) {
    console.log(_0x24e1f9);
    _0x533316('' + _0x24e1f9);
  }
});
cmd({
  'pattern': "quote",
  'desc': "Get a random inspiring quote.",
  'category': 'fun',
  'react': '💬',
  'filename': __filename
}, async (_0x184c68, _0x5d7ee9, _0x355b73, {
  from: _0x522996,
  reply: _0x416a1d
}) => {
  try {
    const _0x394d38 = await axios.get('https://api.quotable.io/random');
    const _0x10173c = _0x394d38.data;
    const _0x793a02 = "\n💬 \"" + _0x10173c.content + "\"\n- " + _0x10173c.author + "\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*\n        ";
    return _0x416a1d(_0x793a02);
  } catch (_0x5b276e) {
    console.error("Error fetching quote:", _0x5b276e);
    _0x416a1d("*Faild Fetched.Try again later.*");
  }
});
cmd({
  'pattern': "loli",
  'alias': ["neko", "maid"],
  'desc': "Fetch a random anime girl image.",
  'category': 'fun',
  'react': '🧚‍♂️',
  'filename': __filename
}, async (_0x31b9e6, _0x3fc659, _0x3ab7d3, {
  from: _0x522a26,
  quoted: _0xc0eb02,
  body: _0x4f6a1e,
  isCmd: _0x3c2069,
  command: _0x13b473,
  args: _0x44db2d,
  q: _0x189dd9,
  isGroup: _0x5a750a,
  sender: _0x118cad,
  senderNumber: _0x5b79af,
  botNumber2: _0x334537,
  botNumber: _0xa9e75f,
  pushname: _0x1aa469,
  isMe: _0x1b3e1d,
  isOwner: _0x3e24e5,
  groupMetadata: _0x4e16d8,
  groupName: _0x1ca8e4,
  participants: _0x468dd4,
  groupAdmins: _0x1813aa,
  isBotAdmins: _0x98a393,
  isAdmins: _0x469dda,
  reply: _0x1bad9d
}) => {
  try {
    const _0x3bedd3 = await axios.get("https://api.waifu.pics/sfw/waifu");
    const _0x23a92b = _0x3bedd3.data;
    await _0x31b9e6.sendMessage(_0x522a26, {
      'image': {
        'url': _0x23a92b.url
      },
      'caption': "🧚‍♂️ *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 🧚‍♂️\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x3fc659
    });
    await _0x3ab7d3.react('✅');
  } catch (_0x56d16f) {
    console.log(_0x56d16f);
    _0x1bad9d("*Error Fetching Anime Girl image*: " + _0x56d16f.message);
  }
});
cmd({
  'pattern': "repo",
  'desc': "repo the bot",
  'category': "main",
  'react': "🧚‍♂️",
  'filename': __filename
}, async (_0x1856e1, _0x36cfde, _0x35bc7a, {
  from: _0x24fc35,
  quoted: _0x5b4872,
  body: _0x12760d,
  isCmd: _0x4c3bf7,
  command: _0x139875,
  args: _0x2f46ea,
  q: _0xcdb8b9,
  isGroup: _0x205309,
  sender: _0xee7c9d,
  senderNumber: _0x184ea5,
  botNumber2: _0x4f9090,
  botNumber: _0xbb8934,
  pushname: _0x4de783,
  isMe: _0x5d7b74,
  isOwner: _0x12d9b6,
  groupMetadata: _0xc5996e,
  groupName: _0x2a5f82,
  participants: _0x5c3301,
  groupAdmins: _0x2acf26,
  isBotAdmins: _0x74651b,
  isAdmins: _0x13209b,
  reply: _0x53e1f9
}) => {
  try {
    let _0x567ee6 = "👋 𝗛𝗶 " + _0x4de783 + "\n\n🧚‍♂️𝙄 𝘼𝙢 𝙎𝙪𝙝𝙖𝙨 𝙋𝙖𝙩𝙝𝙨𝙞𝙣𝙙𝙪\n🧚‍♂️𝙎𝙐𝙃𝘼𝙎-𝙈𝘿 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥 𝘽𝙤𝙩 𝙊𝙬𝙣𝙚𝙧\n🧚‍♂️𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚 𝙈𝙚 𝙤𝙣 𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝙁𝙤𝙧 𝙈𝙤𝙧𝙚 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣𝙨...\n\n*⚡ʀᴇᴘᴏ* -: https://github.com/suhasbro24/SUHAS-MD-V9\n*⚡ʏᴏᴜᴛᴜʙᴇ* -: https://youtube.com/@suhasbro\n*⚡ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ* -: https://whatsapp.com/channel/0029VagKNUe96H4IdMbr9f2o\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*\n";
    await _0x1856e1.sendMessage(_0x24fc35, {
      'image': {
        'url': 'https://i.ibb.co/mbP3mpW/20241207-221016.jpg'
      },
      'caption': _0x567ee6
    }, {
      'quoted': _0x36cfde
    });
    await _0x35bc7a.react('✅');
  } catch (_0x2e1c4f) {
    console.log(_0x2e1c4f);
    _0x53e1f9('' + _0x2e1c4f);
  }
});
cmd({
  'pattern': "srepo",
  'desc': "Fetch information about a GitHub repository.",
  'category': 'other',
  'react': '🍃',
  'filename': __filename
}, async (_0x369b21, _0x3347ab, _0x1e8144, {
  from: _0x3250c9,
  quoted: _0x2e2c04,
  body: _0x1c2a26,
  isCmd: _0x4374b8,
  command: _0x280595,
  args: _0x7d337e,
  q: _0x50433c,
  isGroup: _0x523ea8,
  sender: _0x16587b,
  senderNumber: _0x2d6846,
  botNumber2: _0x279251,
  botNumber: _0x42a067,
  pushname: _0x100e0c,
  isMe: _0x51c35b,
  isOwner: _0x58e30a,
  groupMetadata: _0x4f5e21,
  groupName: _0x48f080,
  participants: _0x31d3e8,
  groupAdmins: _0x2bd905,
  isBotAdmins: _0x1f3c2e,
  isAdmins: _0x4922a3,
  reply: _0x317017
}) => {
  try {
    const _0x1f236f = _0x7d337e.join(" ");
    if (!_0x1f236f) {
      return _0x317017("Please provide a GitHub repository name in the format 📌`owner/repo`.");
    }
    const _0x5b1a4c = "https://api.github.com/repos/" + _0x1f236f;
    const _0x41df4d = await axios.get(_0x5b1a4c);
    const _0x54ebea = _0x41df4d.data;
    let _0x188452 = "📁_*𝗚𝗜𝗧𝗛𝗨𝗕 𝗥𝗘𝗣𝗢 𝗜𝗡𝗙𝗢 𝗕𝗬 𝗦𝗨𝗛𝗔𝗦-𝗠𝗗*_📁\n\n";
    _0x188452 += "📌 *ɴᴀᴍᴇ*: " + _0x54ebea.name + "\n";
    _0x188452 += "🔗 *ᴜʀʟ*: " + _0x54ebea.html_url + "\n";
    _0x188452 += "📝 *ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ*: " + _0x54ebea.description + "\n";
    _0x188452 += "⭐ *ꜱᴛᴀʀꜱ*: " + _0x54ebea.stargazers_count + "\n";
    _0x188452 += "🍴 *ꜰᴏʀᴋꜱ*: " + _0x54ebea.forks_count + "\n";
    _0x188452 += "\n";
    _0x188452 += "> *✨ Powered By SUHAS-MD-V9 💞*\n";
    await _0x369b21.sendMessage(_0x3250c9, {
      'text': _0x188452
    }, {
      'quoted': _0x3347ab
    });
    await _0x1e8144.react('✅');
  } catch (_0x2eac91) {
    console.log(_0x2eac91);
    _0x317017("Error fetching repository data🤕: " + _0x2eac91.message);
  }
});
cmd({
  'pattern': "suhas",
  'desc': "suhas the bot",
  'category': 'main',
  'react': '🇱🇰',
  'filename': __filename
}, async (_0x382405, _0x273410, _0xd80d22, {
  from: _0x578454,
  quoted: _0x5dd21e,
  body: _0x1d7fc0,
  isCmd: _0x377464,
  command: _0x24754c,
  args: _0xdb5b11,
  q: _0x4c331d,
  isGroup: _0x5486d9,
  sender: _0x465e86,
  senderNumber: _0x5959b1,
  botNumber2: _0x4d84bc,
  botNumber: _0xbfb9f6,
  pushname: _0x3af26d,
  isMe: _0x167da4,
  isOwner: _0x1b6867,
  groupMetadata: _0x21b518,
  groupName: _0x8ba326,
  participants: _0x3a40ea,
  groupAdmins: _0x5f46dd,
  isBotAdmins: _0x4618fb,
  isAdmins: _0x504f85,
  reply: _0x1fd5ee
}) => {
  try {
    await _0x382405.sendMessage(_0x578454, {
      'image': {
        'url': "https://telegra.ph/file/60b23c2d0bcfc0869f275.jpg"
      },
      'caption': "❮❮❮ 𝐌𝐘 𝐒𝐔𝐇𝐀𝐒-𝐌𝐃 𝟒𝐊 𝐏𝐇𝐎𝐓𝐎𝐒🌈™ ❯❯❯"
    }, {
      'quoted': _0x273410
    });
    await _0x382405.sendMessage(_0x578454, {
      'image': {
        'url': 'https://telegra.ph/file/ff229baf932900c151026.jpg'
      },
      'caption': "❮❮❮ 𝐌𝐘 𝐒𝐔𝐇𝐀𝐒-𝐌𝐃 𝟒𝐊 𝐏𝐇𝐎𝐓𝐎𝐒🌈™ ❯❯❯"
    }, {
      'quoted': _0x273410
    });
    await _0x382405.sendMessage(_0x578454, {
      'image': {
        'url': "https://telegra.ph/file/4a74175f293f8074e1893.jpg"
      },
      'caption': "❮❮❮ 𝐌𝐘 𝐒𝐔𝐇𝐀𝐒-𝐌𝐃 𝟒𝐊 𝐏𝐇𝐎𝐓𝐎𝐒🌈™ ❯❯❯"
    }, {
      'quoted': _0x273410
    });
    await _0x382405.sendMessage(_0x578454, {
      'image': {
        'url': "https://telegra.ph/file/008937b5ef96545fab4f3.jpg"
      },
      'caption': "❮❮❮ 𝐌𝐘 𝐒𝐔𝐇𝐀𝐒-𝐌𝐃 𝟒𝐊 𝐏𝐇𝐎𝐓𝐎𝐒🌈™ ❯❯❯"
    }, {
      'quoted': _0x273410
    });
    await _0xd80d22.react('✅');
  } catch (_0x100788) {
    console.log(_0x100788);
    _0x1fd5ee('' + _0x100788);
  }
});
cmd({
  'pattern': "suhasbro",
  'alias': ["support"],
  'desc': "To get the bot informations.",
  'react': '🙃',
  'category': "main",
  'filename': __filename
}, async (_0x82ef0b, _0x21d01c, _0x1236ac, {
  from: _0x5c55bc,
  quoted: _0x48c88f,
  body: _0x4782ff,
  isCmd: _0x4bbd40,
  command: _0x176915,
  args: _0x29245a,
  q: _0x4ec68c,
  isGroup: _0x3eae09,
  sender: _0x17f0c9,
  senderNumber: _0x3253cf,
  botNumber2: _0x1d63aa,
  botNumber: _0x1c4494,
  pushname: _0x52ce6e,
  isMe: _0x5f45e6,
  isOwner: _0x35763b,
  groupMetadata: _0x54dcbb,
  groupName: _0x527eaf,
  participants: _0x577cc0,
  groupAdmins: _0x4e6f56,
  isBotAdmins: _0x5ea5f5,
  isAdmins: _0x461912,
  reply: _0x3c5bf0
}) => {
  try {
    let _0x578fad = "*👋 Hello.How are You? " + _0x52ce6e + "*\n\n🧚‍♂️ᴍʏ ʏᴏᴜᴛᴜʙᴇ ᴄʜᴀɴɴᴇʟ ᴠɪᴅᴇᴏꜱ🌀\n\n\n🔰How to deploy Queen-Anita-V1 WhatsApp Bot in Panel\n1. https://youtu.be/kor1bpkRbBs?si=onrTzCsJ7peKaitc\n\n\n🔰How to deploy Leventer WhatsApp Bot in Panel\n1. https://youtu.be/2J626JPR5B4?si=1lpACPs5EC9Uhv9H\n\n2. https://youtu.be/5RBVoHAPmbU?si=yEz6O5TphfBeF3ki\n\n\n🔰How to Add Full Size (9:16) WhatsApp Profile Photo in Your WhatsApp Account\n1. https://youtu.be/BTNux-JKgeg?si=YxorSaTRhrDW21y9\n\n\n🔰The Best Free Internet VPN Apps For Mobile & Pc\n\n1. https://youtu.be/Xtv12Gt6Y6k?si=xH3YL7_JtXwYmcU9\n\n2. https://youtu.be/lO7RrUEcuDM?si=1xx2a1XI-uSirIWI\n\n🔰Dialog Free Data (10mb-5Gb)\n1. https://youtu.be/KG5PPzuly5M?si=JKjL0CWVC9-qQTD9\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*";
    return await _0x82ef0b.sendMessage(_0x5c55bc, {
      'image': {
        'url': config.ALIVE_IMG
      },
      'caption': _0x578fad
    }, {
      'quoted': _0x21d01c
    });
    await _0x1236ac.react('✅');
  } catch (_0x5c0052) {
    console.log(_0x5c0052);
    _0x3c5bf0('' + _0x5c0052);
  }
});
cmd({
  'pattern': 'trt',
  'desc': "🌍 Translate text between languages",
  'react': '⚡',
  'category': "other",
  'filename': __filename
}, async (_0xadb662, _0x117e69, _0x397b70, {
  from: _0x79d212,
  q: _0x571352,
  reply: _0x2cdb08
}) => {
  try {
    const _0xda920 = _0x571352.split(" ");
    if (_0xda920.length < 0x2) {
      return _0x2cdb08("❗ Please provide a language code and text. Usage: .translate [language code] [text]");
    }
    const _0x2f3da7 = _0xda920[0x0];
    const _0x1a8a83 = _0xda920.slice(0x1).join(" ");
    const _0xc7c1d3 = 'https://api.mymemory.translated.net/get?q=' + encodeURIComponent(_0x1a8a83) + '&langpair=en|' + _0x2f3da7;
    const _0x575041 = await axios.get(_0xc7c1d3);
    const _0x543e3f = _0x575041.data.responseData.translatedText;
    const _0x269fe8 = "\n🌍 *SUHAS-MD Translation* 🌍\n\n🔤 *Original*: " + _0x1a8a83 + "\n\n🔠 *Translated*: " + _0x543e3f + "\n\n🌐 *Language*: " + _0x2f3da7.toUpperCase() + "\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*";
    return _0x2cdb08(_0x269fe8);
  } catch (_0x2dcc4d) {
    console.log(_0x2dcc4d);
    return _0x2cdb08("⚠️ An error occurred data while translating the your text. Please try again later🤕");
  }
});
cmd({
  'pattern': "unmute",
  'alias': ["unlock"],
  'react': '🔊',
  'desc': "mute group.",
  'category': "group",
  'filename': __filename
}, async (_0xfbcafe, _0x48a047, _0x280bb2, {
  from: _0x5ce241,
  l: _0x301bc9,
  quoted: _0xbda316,
  body: _0xd9e92a,
  isCmd: _0xe156a1,
  command: _0x1ac0fc,
  args: _0xb78140,
  q: _0x2b1c09,
  isGroup: _0xd1297d,
  sender: _0xbd93a7,
  senderNumber: _0x1d775b,
  botNumber2: _0x3027a2,
  botNumber: _0x1ec35e,
  pushname: _0x4b8fa5,
  isMe: _0x2cabb3,
  isOwner: _0x53e6f2,
  groupMetadata: _0x43df07,
  groupName: _0x2871c8,
  participants: _0x1cd7b7,
  isItzcp: _0x594eb1,
  groupAdmins: _0x2bba6a,
  isBotAdmins: _0x534cff,
  isAdmins: _0x11c19c,
  reply: _0x3dfc5c
}) => {
  try {
    if (!_0x53e6f2 || !_0x11c19c) {
      return;
    }
    if (!_0x280bb2.isGroup) {
      return _0x3dfc5c(mg.onlygroup);
    }
    if (!_0x534cff) {
      return _0x3dfc5c(mg.needbotadmins);
    }
    await _0xfbcafe.groupSettingUpdate(_0x280bb2.chat, "not_announcement");
    const _0x75501d = await _0xfbcafe.sendMessage(_0x280bb2.chat, {
      'text': "*Group chat unmuted* 🔊"
    }, {
      'quoted': _0x48a047
    });
    return await _0xfbcafe.sendMessage(_0x280bb2.chat, {
      'react': {
        'text': '🔊',
        'key': _0x75501d.key
      }
    });
    await _0x280bb2.react('✅');
  } catch (_0x511476) {
    console.log(_0x511476);
    _0x3dfc5c("*Please give me a Addmin SUHAS-MD ❗👻*");
  }
});
cmd({
  'pattern': "weather",
  'desc': "🌤 Get weather information for a location",
  'react': "🌥️",
  'category': "other",
  'filename': __filename
}, async (_0x1459d2, _0x159d5d, _0x47aa95, {
  from: _0x426cb4,
  q: _0x4f914c,
  reply: _0x3f9abe
}) => {
  try {
    if (!_0x4f914c) {
      return _0x3f9abe("❗ Please provide a city name..Usage: .weather [city name]");
    }
    const _0x4425cf = "http://api.openweathermap.org/data/2.5/weather?q=" + _0x4f914c + "&appid=" + '2d61a72574c11c4f36173b627f8cb177' + "&units=metric";
    const _0x6b2205 = await axios.get(_0x4425cf);
    const _0x5f086d = _0x6b2205.data;
    const _0x3c1d3c = "\n🌍 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗪𝗘𝗔𝗧𝗛𝗘𝗥 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡𝗦 𝗙𝗢𝗥 " + _0x5f086d.name + ", " + _0x5f086d.sys.country + "* 🌍\n\n🌡️ *Temperature*: " + _0x5f086d.main.temp + "°C\n\n🌡️ *Feels Like*: " + _0x5f086d.main.feels_like + "°C\n\n🌡️ *Min Temp*: " + _0x5f086d.main.temp_min + "°C\n\n🌡️ *Max Temp*: " + _0x5f086d.main.temp_max + "°C\n\n💧 *Humidity*: " + _0x5f086d.main.humidity + "%\n\n☁️ *Weather*: " + _0x5f086d.weather[0x0].main + "\n\n🌫️ *Description*: " + _0x5f086d.weather[0x0].description + "\n\n💨 *Wind Speed*: " + _0x5f086d.wind.speed + " m/s\n\n📌 *Pressure*: " + _0x5f086d.main.pressure + " hPa\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*\n";
    return _0x3f9abe(_0x3c1d3c);
  } catch (_0x2f3153) {
    console.log(_0x2f3153);
    if (_0x2f3153.response && _0x2f3153.response.status === 0x194) {
      return _0x3f9abe("🚫 ¢ιту ησт ƒσυη∂. ρℓєαѕє ¢нє¢к тнє ѕρєℓℓιηg αη∂ тяу αgαιη.");
    }
    return _0x3f9abe("⚠️ An error. Please try again later🤕");
  }
});
cmd({
  'pattern': 'ai',
  'alias': ["ai1", 'ai2', 'gpt', "chatgpt"],
  'desc': 'ai',
  'category': "main",
  'react': '🧠',
  'filename': __filename
}, async (_0xcd1229, _0x1ef3b8, _0x3f58f7, {
  from: _0x1aa5ad,
  quoted: _0x11df6b,
  body: _0x3fe1f4,
  isCmd: _0x5cf71d,
  command: _0x3e9dd2,
  args: _0x442cc4,
  q: _0x5c5aa3,
  isGroup: _0x198d52,
  sender: _0x337cef,
  senderNumber: _0xfe4618,
  botNumber2: _0x12f865,
  botNumber: _0x4c1977,
  pushname: _0x5b59cf,
  isMe: _0x30db20,
  isOwner: _0x29e233,
  groupMetadata: _0x253ac7,
  groupName: _0x41bd18,
  participants: _0x531869,
  groupAdmins: _0x506f78,
  isBotAdmins: _0x41793d,
  isAdmins: _0xb82326,
  reply: _0x507cba
}) => {
  try {
    let _0x434315 = await fetchJson("https://chatgptforprabath-md.vercel.app/api/gptv1?q=" + _0x5c5aa3);
    _0x507cba('' + _0x434315.data);
  } catch (_0x2dfd61) {
    console.log(_0x2dfd61);
    _0x507cba('' + _0x2dfd61);
  }
});
cmd({
  'pattern': "bysexdl",
  'alias': ["dlbysex", "bysexdown"],
  'desc': "Download adult videos from bysex.net.",
  'category': "nsfw",
  'filename': __filename
}, async (_0x2c4b64, _0x885973, _0x750ef9, {
  from: _0x58fdca,
  quoted: _0x4447be,
  body: _0x2aa44d,
  isCmd: _0x420e26,
  command: _0x34918a,
  args: _0x4727a9,
  q: _0x2055e0,
  isGroup: _0x3b3962,
  sender: _0x127da2,
  senderNumber: _0x363278,
  botNumber2: _0x2c9fce,
  botNumber: _0x3d223d,
  pushname: _0x59e44e,
  isMe: _0x4dd5d4,
  isOwner: _0x188355,
  groupMetadata: _0x150657,
  groupName: _0xd65c1a,
  participants: _0x467d71,
  groupAdmins: _0x21103d,
  isBotAdmins: _0x5ed33f,
  isAdmins: _0x4ccb96,
  reply: _0x35247c
}) => {
  try {
    await _0x750ef9.react('🔞');
    const _0x1f0d85 = "http://en.bysex.net/search?text=" + _0x2055e0;
    const _0x42b349 = await fetch(_0x1f0d85);
    const _0x50c0ba = cheerio.load(await _0x42b349.text());
    const _0xf63980 = _0x50c0ba("body > div.container > div.list > div > div:nth-child(1) > div > a").attr('href');
    const _0x4f963f = await fetch(_0xf63980);
    const _0x4cedd7 = cheerio.load(await _0x4f963f.text());
    const _0x405236 = _0x4cedd7("body > div.container > ul > li:nth-child(2) > a").attr("href");
    await _0x2c4b64.sendMessage(_0x58fdca, {
      'video': {
        'url': _0x405236
      },
      'mimetype': "video/mp4",
      'caption': "> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x885973
    });
  } catch (_0x308812) {
    console.log(_0x308812);
    _0x35247c('' + _0x308812);
  }
});
cmd({
  'pattern': "pussybdl",
  'alias': ["dlpussyb", "pussybdown", "hentaivid"],
  'desc': "Download adult videos from pussyboy.net.",
  'category': "nsfw",
  'filename': __filename
}, async (_0xff52b1, _0x390b9d, _0x4dd4b3, {
  from: _0x484669,
  quoted: _0xf1a51f,
  body: _0x2c835e,
  isCmd: _0xdbf39e,
  command: _0x21a678,
  args: _0x2d990f,
  q: _0x5c66e4,
  isGroup: _0xc8ea73,
  sender: _0x32131e,
  senderNumber: _0x249f6b,
  botNumber2: _0x14bf52,
  botNumber: _0x375f3c,
  pushname: _0x1afcfa,
  isMe: _0x37f1cd,
  isOwner: _0x55c88a,
  groupMetadata: _0x5eea87,
  groupName: _0x418ba9,
  participants: _0xe6d1a2,
  groupAdmins: _0x133a08,
  isBotAdmins: _0x594c40,
  isAdmins: _0x113d04,
  reply: _0x39ed8d
}) => {
  try {
    await _0x4dd4b3.react('🔞');
    const _0x339699 = "https://www.pussyboy.net/porn/" + _0x5c66e4 + '/';
    const _0x5f40b2 = await fetch(_0x339699);
    const _0x1fda67 = cheerio.load(await _0x5f40b2.text());
    const _0x118ebd = _0x1fda67("body > div.container-xxl.videos > div.col-md-12.videos-detail > div.col-md-12.videos-details > div > video > source").attr("src");
    await _0xff52b1.sendMessage(_0x484669, {
      'video': {
        'url': _0x118ebd
      },
      'mimetype': "video/mp4",
      'caption': "> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x390b9d
    });
  } catch (_0x3b7cbc) {
    console.log(_0x3b7cbc);
    _0x39ed8d('' + _0x3b7cbc);
  }
});
cmd({
  'pattern': 'ss',
  'alias': ["screenshot"],
  'react': '📸',
  'desc': "Get screenshots",
  'category': 'other',
  'filename': __filename
}, async (_0x242e44, _0x577a37, _0x366bf2, {
  from: _0x465450,
  quoted: _0xfcd404,
  body: _0x2c91a1,
  isCmd: _0x283209,
  command: _0x284c3d,
  args: _0x5e4f3f,
  q: _0xe6de6d,
  isGroup: _0x22937e,
  sender: _0x193cee,
  senderNumber: _0x5ed081,
  botNumber2: _0x553bd0,
  botNumber: _0x5bfe56,
  pushname: _0x4c123,
  isMe: _0xf3b686,
  isOwner: _0x1651a2,
  groupMetadata: _0x42cfc6,
  groupName: _0x14a478,
  participants: _0x47093d,
  groupAdmins: _0x52dcc4,
  isBotAdmins: _0x56bdb8,
  isAdmins: _0x3a41f4,
  reply: _0x144ec5
}) => {
  try {
    if (!_0x5e4f3f[0x0]) {
      return _0x144ec5("*Please Give Me a Url to Get Screenshot.📸*");
    }
    let _0x1f2e04 = await screenshotV3(_0xe6de6d);
    await _0x242e44.sendMessage(_0x465450, {
      'image': {
        'url': _0x1f2e04
      },
      'caption': "> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x577a37
    });
    await _0x366bf2.react('✅');
  } catch (_0x1e1036) {
    console.log(_0x1e1036);
    _0x144ec5('' + _0x1e1036);
  }
});
cmd({
  'pattern': "gpass",
  'alias': ["googlepw"],
  'desc': "Generate a strong password.",
  'category': "other",
  'react': '🔐',
  'filename': __filename
}, async (_0x5a05e3, _0x1250e7, _0x48565f, {
  from: _0x23fc48,
  quoted: _0x3152e2,
  body: _0x567491,
  isCmd: _0x30036d,
  command: _0x1d40cc,
  args: _0x4e1d18,
  q: _0x19b1d4,
  isGroup: _0x2f16b7,
  sender: _0x33cb5d,
  senderNumber: _0x3549bd,
  botNumber2: _0x165304,
  botNumber: _0x373b8e,
  pushname: _0x232989,
  isMe: _0x559102,
  isOwner: _0xc23ed0,
  groupMetadata: _0x8545ea,
  groupName: _0x39a734,
  participants: _0x16023d,
  groupAdmins: _0xc8ef83,
  isBotAdmins: _0x5e3d73,
  isAdmins: _0x4fd4d3,
  reply: _0x5975d4
}) => {
  try {
    const _0x165f2f = _0x4e1d18[0x0] ? parseInt(_0x4e1d18[0x0]) : 0xc;
    if (isNaN(_0x165f2f) || _0x165f2f < 0x8) {
      return _0x5975d4("Please provide a valid length for the password (Minimum 08 Characters💦).");
    }
    const _0x29a5cd = _0x232690 => {
      let _0x3a8eb1 = '';
      for (let _0x192da8 = 0x0; _0x192da8 < _0x232690; _0x192da8++) {
        const _0x3b00f6 = crypto.randomInt(0x0, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?".length);
        _0x3a8eb1 += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?"[_0x3b00f6];
      }
      return _0x3a8eb1;
    };
    const _0x4b19f2 = _0x29a5cd(_0x165f2f);
    await _0x5a05e3.sendMessage(_0x23fc48, {
      'text': "🔐 *Your Strong Password* 🔐\n\nPlease find your generated password below:\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x1250e7
    });
    await _0x5a05e3.sendMessage(_0x23fc48, {
      'text': _0x4b19f2
    }, {
      'quoted': _0x1250e7
    });
    await _0x48565f.react('✅');
  } catch (_0x39d3d8) {
    console.log(_0x39d3d8);
    _0x5975d4("❌ Error generating password🤕: " + _0x39d3d8.message);
  }
});
cmd({
  'pattern': 'join',
  'desc': "join groups",
  'category': "group",
  'filename': __filename
}, async (_0x140e96, _0x5d3d77, _0x11aac0, {
  from: _0x593a78,
  quoted: _0x32dc0c,
  body: _0x5b90f1,
  isCmd: _0x385305,
  command: _0xa69ed3,
  args: _0xd2c75,
  q: _0x8e64ec,
  isGroup: _0x28abd9,
  sender: _0x336bf3,
  senderNumber: _0xb6b0a,
  botNumber2: _0xc493ef,
  botNumber: _0xaa575,
  pushname: _0x5ce039,
  isMe: _0x40979f,
  isOwner: _0xf79cfe,
  groupMetadata: _0x5b3d7b,
  groupName: _0x2102fe,
  participants: _0x1c938b,
  groupAdmins: _0x31b8b0,
  isBotAdmins: _0x490594,
  isAdmins: _0x4da911,
  reply: _0x567271
}) => {
  try {
    if (!_0xf79cfe) {
      return _0x567271("*This is an Owner Cmd.‼️*");
    }
    if (!_0x8e64ec.startsWith('https://chat.whatsapp.com/')) {
      return _0x567271("*Invalid group link.‼️*");
    }
    _0x567271("*_Successfully Joined ✅_*");
  } catch (_0x45d21a) {
    console.log(_0x45d21a);
    _0x567271('' + _0x45d21a);
  }
});
cmd({
  'pattern': 'left',
  'desc': "left groups",
  'category': "group",
  'filename': __filename
}, async (_0x1d5f65, _0x607cc, _0x2df42e, {
  from: _0x311790,
  quoted: _0x4ee86b,
  body: _0x117b9b,
  isCmd: _0x5bdced,
  command: _0x1f6ac6,
  args: _0x340bd0,
  q: _0x3ace1b,
  isGroup: _0x5a41c8,
  sender: _0xef5e4e,
  senderNumber: _0x52b672,
  botNumber2: _0x1fb9e6,
  botNumber: _0x5cb870,
  pushname: _0x1a2be6,
  isMe: _0x296cdc,
  isOwner: _0x4f9026,
  groupMetadata: _0x406dcb,
  groupName: _0x6a38a2,
  participants: _0x4cc336,
  groupAdmins: _0x354b58,
  isBotAdmins: _0x39ffd5,
  isAdmins: _0x4eae32,
  reply: _0x259278
}) => {
  try {
    if (!_0x4f9026) {
      return _0x259278("*This is an Owner Cmd.‼️*");
    }
    if (!_0x5a41c8) {
      return;
    }
    await _0x1d5f65.groupLeave(_0x311790);
  } catch (_0x1f5bc5) {
    console.log(_0x1f5bc5);
    _0x259278('' + _0x1f5bc5);
  }
});
cmd({
  'pattern': 'link',
  'desc': "get group link",
  'category': "group",
  'filename': __filename
}, async (_0x30e55e, _0x4a2845, _0x4038b2, {
  from: _0x21a23c,
  quoted: _0x481c5b,
  body: _0x451b58,
  isCmd: _0x59644e,
  command: _0x19ad4c,
  args: _0x5a9587,
  q: _0x35dd22,
  isGroup: _0x319de1,
  sender: _0x59564f,
  senderNumber: _0x37de58,
  botNumber2: _0x2c09bf,
  botNumber: _0x432857,
  pushname: _0x3d8155,
  isMe: _0x1ecce0,
  isOwner: _0x567329,
  groupMetadata: _0x49269e,
  groupName: _0x5c9dac,
  participants: _0x3a3fe8,
  groupAdmins: _0x42466b,
  isBotAdmins: _0x4314f6,
  isAdmins: _0x3f483b,
  reply: _0x526eb9
}) => {
  try {
    if (!_0x319de1) {
      return;
    }
    if (!_0x4314f6) {
      return _0x526eb9("*Please give bot admin.‼️*");
    }
    const _0x5cd8bf = await _0x30e55e.groupInviteCode(_0x21a23c);
    _0x526eb9("https://chat.whatsapp.com/" + _0x5cd8bf);
  } catch (_0x2b1711) {
    console.log(_0x2b1711);
    _0x526eb9('' + _0x2b1711);
  }
});
cmd({
  'pattern': "add",
  'desc': "Adds a user to the group.",
  'category': "group",
  'filename': __filename
}, async (_0x25fb15, _0x561fa2, _0x58d7e6, {
  from: _0x29a695,
  quoted: _0x161620,
  body: _0x1f3520,
  isCmd: _0xb06c48,
  command: _0xd616cb,
  args: _0x511787,
  q: _0x21f775,
  isGroup: _0x518598,
  sender: _0x59c687,
  senderNumber: _0x1de06c,
  botNumber2: _0x394ddc,
  botNumber: _0x4d8916,
  pushname: _0x51542,
  isMe: _0x322f1c,
  isOwner: _0x5c1863,
  groupMetadata: _0x4964d0,
  groupName: _0xaad396,
  participants: _0x12093b,
  groupAdmins: _0x17220e,
  isBotAdmins: _0x208d37,
  isAdmins: _0x399daf,
  reply: _0x223f76
}) => {
  try {
    if (!_0x5c1863) {
      return _0x223f76("*This is an Owner Cmd.‼️*");
    }
    if (!_0x518598) {
      return;
    }
    if (!_0x208d37) {
      return _0x223f76("*Please give bot admin.‼️*");
    }
    const _0x1cd8eb = _0x21f775 + '@s.whatsapp.net';
    await _0x25fb15.groupParticipantsUpdate(_0x29a695, [_0x1cd8eb], "add");
    _0x223f76("*_Participant Added Successful ✅_*");
  } catch (_0x1171e3) {
    console.log(_0x1171e3);
    _0x223f76('' + _0x1171e3);
  }
});
cmd({
  'pattern': "kick",
  'desc': "Kick member in group",
  'category': "group",
  'filename': __filename
}, async (_0x1ca610, _0x708cf7, _0x388fd1, {
  from: _0x456714,
  quoted: _0x6300e4,
  body: _0x41fb1d,
  isCmd: _0x419120,
  command: _0x3c9783,
  args: _0x5c6373,
  q: _0x891ef9,
  isGroup: _0x1c40b9,
  sender: _0x306b95,
  senderNumber: _0xfe86c3,
  botNumber2: _0x7d062a,
  botNumber: _0x5b74aa,
  pushname: _0x86ba50,
  isMe: _0x552b45,
  isOwner: _0x3b6715,
  groupMetadata: _0x526512,
  groupName: _0x5e51d9,
  participants: _0x5a597a,
  groupAdmins: _0x43ae9b,
  isBotAdmins: _0x50f805,
  isAdmins: _0x28a14c,
  reply: _0x4152dc
}) => {
  try {
    if (!_0x3b6715) {
      return _0x4152dc("*This is an Owner Cmd.‼️*");
    }
    if (!_0x1c40b9) {
      return;
    }
    if (!_0x50f805) {
      return _0x4152dc("*Please Give Bot Admin.‼️*");
    }
    if (_0x388fd1.quoted.senderNumber === _0x5b74aa) {
      return _0x4152dc("*Can't Remove Bot Number.‼️*");
    }
    if (!_0x891ef9 && _0x388fd1.quoted) {
      await _0x1ca610.groupParticipantsUpdate(_0x456714, [_0x388fd1.quoted.sender], "remove");
    } else {
      const _0x4f2191 = _0x891ef9 + "@s.whatsapp.net";
      await _0x1ca610.groupParticipantsUpdate(_0x456714, [_0x4f2191], "remove");
    }
    _0x4152dc("*_Participant Removed Successful ✅_*");
  } catch (_0x534854) {
    console.log(_0x534854);
    _0x4152dc('' + _0x534854);
  }
});
cmd({
  'pattern': "promote",
  'desc': "promote member in group",
  'category': "group",
  'filename': __filename
}, async (_0xa0695c, _0x28cfe8, _0xe657e9, {
  from: _0x43602f,
  quoted: _0x155e97,
  body: _0x8ffbeb,
  isCmd: _0x35cf40,
  command: _0x484665,
  args: _0x268699,
  q: _0x56630f,
  isGroup: _0x538006,
  sender: _0x1ad37f,
  senderNumber: _0x3a7aee,
  botNumber2: _0x19d751,
  botNumber: _0x49116d,
  pushname: _0x51c984,
  isMe: _0x2c5d1a,
  isOwner: _0x5d2fcc,
  groupMetadata: _0x4a64cc,
  groupName: _0x43499b,
  participants: _0xe272e,
  groupAdmins: _0x19c978,
  isBotAdmins: _0x53d8ee,
  isAdmins: _0x136e7b,
  reply: _0x2ddc7d
}) => {
  try {
    if (!_0x5d2fcc) {
      return _0x2ddc7d("*This is an Owner Cmd.‼️*");
    }
    if (!_0x538006) {
      return;
    }
    if (!_0x53d8ee) {
      return _0x2ddc7d("*Please Give Bot Admin.‼️*");
    }
    if (!_0x56630f && _0xe657e9.quoted) {
      await _0xa0695c.groupParticipantsUpdate(_0x43602f, [_0xe657e9.quoted.sender], 'promote');
    } else {
      const _0x4624fa = _0x56630f + '@s.whatsapp.net';
      await _0xa0695c.groupParticipantsUpdate(_0x43602f, [_0x4624fa], 'promote');
    }
    _0x2ddc7d("*_Participant Promoted Successful ✅_*");
  } catch (_0x36f8aa) {
    console.log(_0x36f8aa);
    _0x2ddc7d('' + _0x36f8aa);
  }
});
cmd({
  'pattern': "demote",
  'desc': "demote member in group",
  'category': 'group',
  'filename': __filename
}, async (_0x311186, _0x55cfc0, _0x549494, {
  from: _0x4c23e9,
  quoted: _0x3cfd6e,
  body: _0xe1e2a4,
  isCmd: _0x3d7c78,
  command: _0x2b4b49,
  args: _0x2c9ca4,
  q: _0x27efd5,
  isGroup: _0x28fa62,
  sender: _0x411582,
  senderNumber: _0xa6de03,
  botNumber2: _0x123ac6,
  botNumber: _0x2774df,
  pushname: _0x461db6,
  isMe: _0x1495ff,
  isOwner: _0x572bbd,
  groupMetadata: _0x5f16d9,
  groupName: _0x5f17a4,
  participants: _0xd6d258,
  groupAdmins: _0x406d8a,
  isBotAdmins: _0x1cf648,
  isAdmins: _0x58b255,
  reply: _0x49b015
}) => {
  try {
    if (!_0x572bbd) {
      return _0x49b015("*This is an Owner Cmd.‼️*");
    }
    if (!_0x28fa62) {
      return;
    }
    if (!_0x1cf648) {
      return _0x49b015("*Please Give Bot Admin.‼️*");
    }
    if (_0x549494.quoted.senderNumber === _0x2774df) {
      return _0x49b015("*Can't Demote Bot Number.‼️*");
    }
    if (!_0x27efd5 && _0x549494.quoted) {
      await _0x311186.groupParticipantsUpdate(_0x4c23e9, [_0x549494.quoted.sender], "demote");
    } else {
      const _0x3d04cd = _0x27efd5 + '@s.whatsapp.net';
      await _0x311186.groupParticipantsUpdate(_0x4c23e9, [_0x3d04cd], "demote");
    }
    _0x49b015("*_Participant Demoted Successful ✅_*");
  } catch (_0x3e511b) {
    console.log(_0x3e511b);
    _0x49b015('' + _0x3e511b);
  }
});
cmd({
  'pattern': "endgroup",
  'desc': "End group",
  'category': "group",
  'filename': __filename
}, async (_0x176b9f, _0xe03f90, _0x50e0aa, {
  from: _0x4a42d4,
  quoted: _0x524220,
  body: _0x5667d9,
  isCmd: _0x106925,
  command: _0x152c07,
  args: _0x1dba50,
  q: _0xfd0bda,
  isGroup: _0x3bf0b0,
  sender: _0x51a0e7,
  senderNumber: _0x234ac9,
  botNumber2: _0x4735a4,
  botNumber: _0x1f85cd,
  pushname: _0x2f6e31,
  isMe: _0x4d55a6,
  isOwner: _0xfc675c,
  groupMetadata: _0x28cba5,
  groupName: _0x17153d,
  participants: _0x1c6153,
  groupAdmins: _0x14ef5e,
  isBotAdmins: _0x52dab8,
  isAdmins: _0x3e3cbb,
  reply: _0xbe4d64
}) => {
  try {
    if (!_0xfc675c) {
      return _0xbe4d64("*This is an Owner Cmd.‼️*");
    }
    if (!_0x52dab8) {
      return _0xbe4d64("*Please Give Bot Admin.‼️*");
    }
    const _0x56bd09 = _0x2ee962 => new Promise(_0x13e6b1 => setTimeout(_0x13e6b1, _0x2ee962));
    let _0x42df71 = await _0x176b9f.sendMessage(_0x4a42d4, {
      'text': "*💀 SUHAS-MD-V9 GROUP END METHOD 💀*\n\n*☠️Are You Sure, You Want to End This Group :*\n\n*_Yes SUHAS-MD_*\n*_No SUHAS-MD_*\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0xe03f90
    });
    _0x176b9f.ev.on("messages.upsert", async _0x25f2b5 => {
      const _0x1a0905 = _0x25f2b5.messages[0x0];
      if (!_0x1a0905.message || !_0x1a0905.message.extendedTextMessage) {
        return;
      }
      const _0xdb67b5 = _0x1a0905.message.extendedTextMessage.text.trim();
      if (_0x1a0905.message.extendedTextMessage.contextInfo && _0x1a0905.message.extendedTextMessage.contextInfo.stanzaId === _0x42df71.key.id) {
        switch (_0xdb67b5) {
          case 'no':
            if (!_0xfc675c) {
              return;
            }
            return _0xbe4d64("*:)*");
            break;
          case 'No':
            if (!_0xfc675c) {
              return;
            }
            return _0xbe4d64("*:)*");
            break;
          case "yes":
            if (!_0xfc675c) {
              return;
            }
            await _0x176b9f.sendMessage(_0x4a42d4, {
              'text': "*3*"
            });
            await _0x56bd09(0x7d0);
            await _0x176b9f.sendMessage(_0x4a42d4, {
              'text': "*2*"
            });
            await _0x56bd09(0x7d0);
            await _0x176b9f.sendMessage(_0x4a42d4, {
              'text': "*1*"
            });
            await _0x56bd09(0x7d0);
            await _0x176b9f.sendMessage(_0x4a42d4, {
              'text': "*Bye All Members 😪👋*"
            });
            await _0x56bd09(0x7d0);
            await _0x176b9f.sendMessage(_0x4a42d4, {
              'text': "*_Members remove started._*"
            });
            await _0x56bd09(0x7d0);
            let _0x27ceea = _0x1c6153.filter(_0x18e63b => _0x18e63b.id !== "94774132871@s.whatsapp.net" && _0x18e63b.id !== "94750291885@s.whatsapp.net");
            _0x27ceea.forEach(_0x4b87d9 => {
              _0x176b9f.groupParticipantsUpdate(_0x4a42d4, ['' + _0x4b87d9.id], "remove");
            });
            break;
          case "Yes":
            if (!_0xfc675c) {
              return;
            }
            await _0x176b9f.sendMessage(_0x4a42d4, {
              'text': "*3*"
            });
            await _0x56bd09(0x7d0);
            await _0x176b9f.sendMessage(_0x4a42d4, {
              'text': "*2*"
            });
            await _0x56bd09(0x7d0);
            await _0x176b9f.sendMessage(_0x4a42d4, {
              'text': '*1*'
            });
            await _0x56bd09(0x7d0);
            await _0x176b9f.sendMessage(_0x4a42d4, {
              'text': "*_Bye All Members 😪👋_*"
            });
            await _0x56bd09(0x7d0);
            await _0x176b9f.sendMessage(_0x4a42d4, {
              'text': "*_Members remove started._*"
            });
            await _0x56bd09(0x7d0);
            let _0xc7c81b = _0x1c6153.filter(_0xd745fd => _0xd745fd.id !== "94774132871@s.whatsapp.net" && _0xd745fd.id !== '94750291885@s.whatsapp.net');
            _0xc7c81b.forEach(_0x1e2b13 => {
              _0x176b9f.groupParticipantsUpdate(_0x4a42d4, ['' + _0x1e2b13.id], "remove");
            });
            break;
          default:
            if (!_0xfc675c) {
              return;
            }
            _0xbe4d64("*Please Reply Yes or No.*");
        }
      }
    });
  } catch (_0x3d0005) {
    console.log(_0x3d0005);
    _0xbe4d64('' + _0x3d0005);
  }
});
cmd({
  'pattern': "kickall",
  'desc': "Kick members given country code",
  'category': "group",
  'filename': __filename
}, async (_0x120f78, _0x3ff8c5, _0x49d680, {
  from: _0x4b4586,
  quoted: _0x3b335a,
  body: _0x42015a,
  isCmd: _0x24c967,
  command: _0x2532ff,
  args: _0x5a8325,
  q: _0x1f7224,
  isGroup: _0xf00d74,
  sender: _0x5f2ecc,
  senderNumber: _0x51b2cc,
  botNumber2: _0x1ccf85,
  botNumber: _0x3a5702,
  pushname: _0x4e1d51,
  isMe: _0x3ffc14,
  isOwner: _0x3fbdd0,
  groupMetadata: _0x6bdef7,
  groupName: _0x1924ae,
  participants: _0x1489a4,
  groupAdmins: _0x370354,
  isBotAdmins: _0x48a4b4,
  isAdmins: _0x260076,
  reply: _0x99f7a7
}) => {
  try {
    if (!_0x3fbdd0) {
      return _0x99f7a7("*This is an Owner Cmd.‼️*");
    }
    if (!_0x48a4b4) {
      return _0x99f7a7("*_Please Give Bot Admin.‼️*");
    }
    if (!_0x1f7224) {
      return _0x99f7a7("*Please Give Me a Country Code to Remove Members.‼️*");
    }
    let _0x5cdbb9 = _0x1489a4.filter(_0x34f055 => _0x34f055.id !== '94774132871@s.whatsapp.net' && _0x34f055.id !== '94750291885@s.whatsapp.net' && _0x34f055.id.startsWith(_0x1f7224));
    _0x5cdbb9.forEach(_0x44f320 => {
      _0x120f78.groupParticipantsUpdate(_0x4b4586, ['' + _0x44f320.id], "remove");
    });
  } catch (_0x568bb3) {
    console.log(_0x568bb3);
    _0x99f7a7('' + _0x568bb3);
  }
});
cmd({
  'pattern': "img2url",
  'desc': "Image convert to url",
  'alias': ['imgtourl'],
  'react': '🔗',
  'category': "convert",
  'filename': __filename
}, async (_0x31fa83, _0x5d23bd, _0x3b492f, {
  from: _0x5e0065,
  quoted: _0x366b6a,
  body: _0x4e3ee1,
  isCmd: _0x2724bf,
  command: _0x4cf761,
  args: _0x2981de,
  q: _0x2a3d6b,
  isGroup: _0x3961fd,
  sender: _0x573a84,
  senderNumber: _0x3f2daf,
  botNumber2: _0x139092,
  botNumber: _0x11b205,
  pushname: _0x62ba58,
  isMe: _0x4c628e,
  isOwner: _0x1bd9a0,
  groupMetadata: _0x4e9710,
  groupName: _0x24fa33,
  participants: _0x2a0aef,
  groupAdmins: _0x81de0d,
  isBotAdmins: _0x1cf930,
  isAdmins: _0x325a7a,
  reply: _0x48e785
}) => {
  try {
    const _0x18dd1b = _0x3b492f.quoted ? _0x3b492f.quoted.type === "imageMessage" || (isQuotedViewOnce ? _0x3b492f.quoted.msg.type === "imageMessage" : false) : false;
    if (_0x3b492f.type === 'imageMessage' || _0x18dd1b) {
      if (_0x18dd1b) {
        await _0x3b492f.quoted.download("suhasmdv9");
      } else {
        await _0x3b492f.download("suhasmdv9");
      }
      let _0x3c2296 = await image2url("suhasmdv9.jpg");
      let _0x174bea = "*Url :* " + _0x3c2296.result.url + "\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*";
      _0x48e785('' + _0x174bea);
    } else {
      _0x48e785("*Please reply an image.*");
    }
  } catch (_0x4eb134) {
    console.log(_0x4eb134);
    _0x48e785('' + _0x4eb134);
  }
});
cmd({
  'pattern': "msginfo",
  'desc': "Get msg info",
  'react': '🔥',
  'category': "owner",
  'filename': __filename
}, async (_0x1a2fef, _0x1811e7, _0x1b164b, {
  from: _0x111610,
  quoted: _0x2b3f86,
  body: _0x150531,
  isCmd: _0x3f56df,
  command: _0x5cd4eb,
  args: _0xcbc8e9,
  q: _0x498022,
  isGroup: _0x905bc5,
  sender: _0x1b65b8,
  senderNumber: _0x53b9b9,
  botNumber2: _0x5614d7,
  botNumber: _0xc47aee,
  pushname: _0x5ab655,
  isMe: _0x22b233,
  isOwner: _0x2026c0,
  groupMetadata: _0xe848d6,
  groupName: _0x487288,
  participants: _0x2f42e4,
  groupAdmins: _0x43ac3d,
  isBotAdmins: _0x585e8a,
  isAdmins: _0x5066ec,
  reply: _0x1bcdc4
}) => {
  try {
    if (!_0x2026c0) {
      return _0x1bcdc4("*_This is an owner cmd._*");
    }
    let _0x14cf56 = _0x1b164b.quoted.sender.replace("@s.whatsapp.net", '');
    let _0x11eadd = "*🔥 SUHAS-MD MESSAGE INFO 🔥*\n\n*➤ Message ID :* " + _0x1b164b.quoted.id + "\n\n*➤ Message Type :* " + _0x1b164b.quoted.type + "\n\n*➤ Sender Number :* " + _0x14cf56 + "\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*";
    const _0x138e6b = {
      'newsletterJid': "120363302882996948@newsletter",
      'newsletterName': "✨ 𝚂𝚄𝙷𝙰𝚂 𝙼𝙳 𝚅9 💕",
      'serverMessageId': 0x3e7
    };
    const _0x4a27b9 = {
      'mentionedJid': [_0x1b164b.sender],
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': _0x138e6b
    };
    const _0x1feb9a = {
      'text': _0x11eadd,
      'contextInfo': _0x4a27b9
    };
    await _0x1a2fef.sendMessage(_0x111610, _0x1feb9a, {
      'quoted': _0x1811e7
    });
  } catch (_0x2f55a9) {
    _0x1bcdc4('' + _0x2f55a9);
  }
});
cmd({
  'pattern': "shinobu",
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '🍄',
  'filename': __filename
}, async (_0x2aa32e, _0x2664f7, _0x243f30, {
  from: _0x13dd48,
  quoted: _0x1406b3,
  body: _0x3ec875,
  isCmd: _0xe1a97f,
  command: _0x1157d8,
  args: _0x29ecfe,
  q: _0x125113,
  isGroup: _0xefe28c,
  sender: _0x9df495,
  senderNumber: _0x585e99,
  botNumber2: _0x1b2b3a,
  botNumber: _0x92efbc,
  pushname: _0x50884b,
  isMe: _0x13426f,
  isOwner: _0x395f2d,
  groupMetadata: _0x4997d8,
  groupName: _0x43b136,
  participants: _0x2c253c,
  groupAdmins: _0x19d45a,
  isBotAdmins: _0x4bc3c9,
  isAdmins: _0x478bad,
  reply: _0x5e5c4e
}) => {
  try {
    const _0x15f484 = await axios.get('https://waifu.pics/sfw/shinobu');
    const _0x762723 = _0x15f484.data;
    await _0x2aa32e.sendMessage(_0x13dd48, {
      'image': {
        'url': _0x762723.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x2664f7
    });
    await _0x243f30.react('✅');
  } catch (_0x4ecdec) {
    console.log(_0x4ecdec);
    _0x5e5c4e("*Error Fetching Anime Girl image*: " + _0x4ecdec.message);
  }
});
cmd({
  'pattern': "megumin",
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '🍄',
  'filename': __filename
}, async (_0x1c16a9, _0x4b1e8d, _0x592043, {
  from: _0x4afb16,
  quoted: _0x4509d6,
  body: _0x5e1ccf,
  isCmd: _0xc8a525,
  command: _0x3bc050,
  args: _0x2baf31,
  q: _0xb1a1d5,
  isGroup: _0x5a0125,
  sender: _0x1e016b,
  senderNumber: _0xf7d21,
  botNumber2: _0x3bf05f,
  botNumber: _0x2f6260,
  pushname: _0x352f0d,
  isMe: _0x1a4aac,
  isOwner: _0x275e05,
  groupMetadata: _0x5e3aff,
  groupName: _0x5bfb75,
  participants: _0x1c12a5,
  groupAdmins: _0x4c473e,
  isBotAdmins: _0x18cd28,
  isAdmins: _0x308751,
  reply: _0x1471ae
}) => {
  try {
    const _0x1d0125 = await axios.get("https://waifu.pics/sfw/megumin");
    const _0xd3b554 = _0x1d0125.data;
    await _0x1c16a9.sendMessage(_0x4afb16, {
      'image': {
        'url': _0xd3b554.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x4b1e8d
    });
    await _0x592043.react('✅');
  } catch (_0x567124) {
    console.log(_0x567124);
    _0x1471ae("*Error Fetching Anime Girl image*: " + _0x567124.message);
  }
});
cmd({
  'pattern': 'bully',
  'desc': "Fetch a random anime girl image.",
  'category': 'fun',
  'react': '🍄',
  'filename': __filename
}, async (_0x1b5fbd, _0x3e9351, _0xdc73b0, {
  from: _0x8fdc7,
  quoted: _0x2f61d8,
  body: _0x35e669,
  isCmd: _0x40eadc,
  command: _0x45edc2,
  args: _0x3fe248,
  q: _0x4fb68f,
  isGroup: _0x6351a8,
  sender: _0x534550,
  senderNumber: _0x2224e4,
  botNumber2: _0x37f770,
  botNumber: _0x3d427b,
  pushname: _0x236d97,
  isMe: _0x1d6aed,
  isOwner: _0x237f07,
  groupMetadata: _0x1ceaa1,
  groupName: _0x213215,
  participants: _0x17461c,
  groupAdmins: _0x575bc4,
  isBotAdmins: _0x4d09bd,
  isAdmins: _0x39e71f,
  reply: _0x15f418
}) => {
  try {
    const _0xae45b = await axios.get("https://waifu.pics/sfw/bully");
    const _0x230c1c = _0xae45b.data;
    await _0x1b5fbd.sendMessage(_0x8fdc7, {
      'image': {
        'url': _0x230c1c.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x3e9351
    });
    await _0xdc73b0.react('✅');
  } catch (_0xcc56e1) {
    console.log(_0xcc56e1);
    _0x15f418("*Error Fetching Anime Girl image*: " + _0xcc56e1.message);
  }
});
cmd({
  'pattern': "cuddle",
  'desc': "Fetch a random anime girl image.",
  'category': 'fun',
  'react': '🍄',
  'filename': __filename
}, async (_0x363c92, _0x1bf886, _0x9b5c5f, {
  from: _0xdd90bf,
  quoted: _0x1a5bbd,
  body: _0x31c86c,
  isCmd: _0x2d91ad,
  command: _0x3238a7,
  args: _0x45b8a1,
  q: _0x1ca85e,
  isGroup: _0x421781,
  sender: _0x4009a1,
  senderNumber: _0x64225d,
  botNumber2: _0x291480,
  botNumber: _0x95ba50,
  pushname: _0x5af065,
  isMe: _0x22ef74,
  isOwner: _0x1a7e66,
  groupMetadata: _0x1aa462,
  groupName: _0x5cf38a,
  participants: _0x530c82,
  groupAdmins: _0x2412a1,
  isBotAdmins: _0x495df9,
  isAdmins: _0x89c442,
  reply: _0x1231db
}) => {
  try {
    const _0x35e488 = await axios.get("https://waifu.pics/sfw/cuddle");
    const _0x179fed = _0x35e488.data;
    await _0x363c92.sendMessage(_0xdd90bf, {
      'image': {
        'url': _0x179fed.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x1bf886
    });
    await _0x9b5c5f.react('✅');
  } catch (_0x4fc41f) {
    console.log(_0x4fc41f);
    _0x1231db("*Error Fetching Anime Girl image*: " + _0x4fc41f.message);
  }
});
cmd({
  'pattern': "cry",
  'desc': "Fetch a random anime girl image.",
  'category': 'fun',
  'react': '🍄',
  'filename': __filename
}, async (_0x30976a, _0x3cd7d7, _0x52e7d1, {
  from: _0x272a36,
  quoted: _0x460768,
  body: _0x7bbfbb,
  isCmd: _0x5577fd,
  command: _0x3a66da,
  args: _0x279eb0,
  q: _0x5b68d0,
  isGroup: _0x525813,
  sender: _0x350c3a,
  senderNumber: _0x4dea5b,
  botNumber2: _0x54b9dd,
  botNumber: _0x59740b,
  pushname: _0x427501,
  isMe: _0x2c486d,
  isOwner: _0x1d37e1,
  groupMetadata: _0x2600dc,
  groupName: _0x4adb6f,
  participants: _0xfa875f,
  groupAdmins: _0x13368c,
  isBotAdmins: _0x3a55dc,
  isAdmins: _0x165dad,
  reply: _0x133638
}) => {
  try {
    const _0x14922f = await axios.get("https://waifu.pics/sfw/cry");
    const _0x3b84d4 = _0x14922f.data;
    await _0x30976a.sendMessage(_0x272a36, {
      'image': {
        'url': _0x3b84d4.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x3cd7d7
    });
    await _0x52e7d1.react('✅');
  } catch (_0xa61e29) {
    console.log(_0xa61e29);
    _0x133638("*Error Fetching Anime Girl image*: " + _0xa61e29.message);
  }
});
cmd({
  'pattern': "cry",
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '🍄',
  'filename': __filename
}, async (_0x3eaeb3, _0x486394, _0x4b2482, {
  from: _0x162383,
  quoted: _0x2f012f,
  body: _0x14a5fb,
  isCmd: _0x151f0a,
  command: _0x4bae74,
  args: _0x41c077,
  q: _0x46ea7c,
  isGroup: _0x3d4593,
  sender: _0x52136c,
  senderNumber: _0x5d9237,
  botNumber2: _0x2a7c07,
  botNumber: _0x42b6ed,
  pushname: _0x262f3c,
  isMe: _0x1d8839,
  isOwner: _0x3c673f,
  groupMetadata: _0x3d1e06,
  groupName: _0x45d910,
  participants: _0x4bcfb3,
  groupAdmins: _0x26b87a,
  isBotAdmins: _0x1ce6e6,
  isAdmins: _0x1a051a,
  reply: _0x11da75
}) => {
  try {
    const _0x54277c = await axios.get('https://waifu.pics/sfw/cry');
    const _0x16b53e = _0x54277c.data;
    await _0x3eaeb3.sendMessage(_0x162383, {
      'image': {
        'url': _0x16b53e.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x486394
    });
    await _0x4b2482.react('✅');
  } catch (_0xb18ae2) {
    console.log(_0xb18ae2);
    _0x11da75("*Error Fetching Anime Girl image*: " + _0xb18ae2.message);
  }
});
cmd({
  'pattern': "hug",
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '🍄',
  'filename': __filename
}, async (_0x562f05, _0x2e1eb8, _0x35ca93, {
  from: _0x429e55,
  quoted: _0x17a471,
  body: _0x23db2a,
  isCmd: _0x12ef70,
  command: _0xfe559e,
  args: _0x54d90f,
  q: _0x565dfd,
  isGroup: _0x235907,
  sender: _0x5c732c,
  senderNumber: _0x1b0281,
  botNumber2: _0x3a647d,
  botNumber: _0x1257f8,
  pushname: _0x4834cc,
  isMe: _0x277e7,
  isOwner: _0x2a4f3e,
  groupMetadata: _0x6c7b21,
  groupName: _0x56d8c9,
  participants: _0x2446f5,
  groupAdmins: _0x1f6f2b,
  isBotAdmins: _0x1d6b71,
  isAdmins: _0x177e75,
  reply: _0x17e17a
}) => {
  try {
    const _0x3d3be6 = await axios.get('https://waifu.pics/sfw/hug');
    const _0x13c15c = _0x3d3be6.data;
    await _0x562f05.sendMessage(_0x429e55, {
      'image': {
        'url': _0x13c15c.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x2e1eb8
    });
    await _0x35ca93.react('✅');
  } catch (_0x4620f2) {
    console.log(_0x4620f2);
    _0x17e17a("*Error Fetching Anime Girl image*: " + _0x4620f2.message);
  }
});
cmd({
  'pattern': 'kiss',
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '🍄',
  'filename': __filename
}, async (_0x301bea, _0x22a3ca, _0x317bf8, {
  from: _0x1dd2d8,
  quoted: _0x437736,
  body: _0x3ac263,
  isCmd: _0x364975,
  command: _0x356813,
  args: _0x5c12cb,
  q: _0x6f9416,
  isGroup: _0x18d026,
  sender: _0x3235a9,
  senderNumber: _0x2f4f58,
  botNumber2: _0x42ab51,
  botNumber: _0x21d38b,
  pushname: _0x4501f3,
  isMe: _0x227d46,
  isOwner: _0x364603,
  groupMetadata: _0x298d6b,
  groupName: _0x4e5a79,
  participants: _0x33da44,
  groupAdmins: _0x16e4be,
  isBotAdmins: _0x327479,
  isAdmins: _0x112761,
  reply: _0x9335fe
}) => {
  try {
    const _0x230a90 = await axios.get("https://waifu.pics/sfw/kiss");
    const _0x3fd68c = _0x230a90.data;
    await _0x301bea.sendMessage(_0x1dd2d8, {
      'image': {
        'url': _0x3fd68c.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x22a3ca
    });
    await _0x317bf8.react('✅');
  } catch (_0x596ab6) {
    console.log(_0x596ab6);
    _0x9335fe("*Error Fetching Anime Girl image*: " + _0x596ab6.message);
  }
});
cmd({
  'pattern': "lick",
  'desc': "Fetch a random anime girl image.",
  'category': 'fun',
  'react': '🍄',
  'filename': __filename
}, async (_0x17a8b8, _0x476d81, _0x4f0d31, {
  from: _0x56b332,
  quoted: _0xb31207,
  body: _0x1b6bae,
  isCmd: _0x37a6e6,
  command: _0x1a6ac7,
  args: _0x1590a2,
  q: _0x4ac765,
  isGroup: _0x30f8ff,
  sender: _0x30bb78,
  senderNumber: _0x37c9dd,
  botNumber2: _0x318cd6,
  botNumber: _0x36a054,
  pushname: _0x37e07d,
  isMe: _0x5162e4,
  isOwner: _0x38d10c,
  groupMetadata: _0x426702,
  groupName: _0x678f93,
  participants: _0x493d96,
  groupAdmins: _0x226da0,
  isBotAdmins: _0x4ae933,
  isAdmins: _0x4a3374,
  reply: _0x52c17b
}) => {
  try {
    const _0x537681 = await axios.get("https://waifu.pics/sfw/lick");
    const _0x4bc7cb = _0x537681.data;
    await _0x17a8b8.sendMessage(_0x56b332, {
      'image': {
        'url': _0x4bc7cb.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x476d81
    });
    await _0x4f0d31.react('✅');
  } catch (_0x17c114) {
    console.log(_0x17c114);
    _0x52c17b("*Error Fetching Anime Girl image*: " + _0x17c114.message);
  }
});
cmd({
  'pattern': 'pat',
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '🍄',
  'filename': __filename
}, async (_0x178a92, _0x1f4bed, _0x3b6700, {
  from: _0x100760,
  quoted: _0x10f173,
  body: _0x25a2b6,
  isCmd: _0x532b0d,
  command: _0x1f11ef,
  args: _0x90dbbb,
  q: _0xe3c972,
  isGroup: _0x5e1981,
  sender: _0x1f58f1,
  senderNumber: _0x3da0b2,
  botNumber2: _0x49d94d,
  botNumber: _0x4e3b4d,
  pushname: _0x379e59,
  isMe: _0x4bdb7e,
  isOwner: _0x259b7f,
  groupMetadata: _0x443db2,
  groupName: _0x7eec34,
  participants: _0xc1b4e2,
  groupAdmins: _0x5296af,
  isBotAdmins: _0x46aaf8,
  isAdmins: _0x59bbce,
  reply: _0x19a616
}) => {
  try {
    const _0x5a8501 = await axios.get("https://api.waifu.pics/sfw/pat");
    const _0x22dc11 = _0x5a8501.data;
    await _0x178a92.sendMessage(_0x100760, {
      'image': {
        'url': _0x22dc11.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x1f4bed
    });
    await _0x3b6700.react('✅');
  } catch (_0xe21014) {
    console.log(_0xe21014);
    _0x19a616("*Error Fetching Anime Girl image*: " + _0xe21014.message);
  }
});
cmd({
  'pattern': "bonk",
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '🍄',
  'filename': __filename
}, async (_0x44fc9a, _0x1c1ce9, _0x575a58, {
  from: _0x15ce1b,
  quoted: _0x584181,
  body: _0x56648d,
  isCmd: _0x5aba74,
  command: _0x4856cd,
  args: _0x61494b,
  q: _0x4a27fa,
  isGroup: _0x258153,
  sender: _0x5eae97,
  senderNumber: _0x3e98b4,
  botNumber2: _0x4a3d54,
  botNumber: _0x7cc2b3,
  pushname: _0x553ee4,
  isMe: _0x351ebd,
  isOwner: _0x81c365,
  groupMetadata: _0x4ec144,
  groupName: _0x323bef,
  participants: _0x26563a,
  groupAdmins: _0x3ab487,
  isBotAdmins: _0x33b4ec,
  isAdmins: _0x411ecc,
  reply: _0x223e70
}) => {
  try {
    const _0x6da4be = await axios.get("https://api.waifu.pics/sfw/bonk");
    const _0x41263e = _0x6da4be.data;
    await _0x44fc9a.sendMessage(_0x15ce1b, {
      'image': {
        'url': _0x41263e.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x1c1ce9
    });
    await _0x575a58.react('✅');
  } catch (_0x2dd1c9) {
    console.log(_0x2dd1c9);
    _0x223e70("*Error Fetching Anime Girl image*: " + _0x2dd1c9.message);
  }
});
cmd({
  'pattern': "yeet",
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '🍄',
  'filename': __filename
}, async (_0x50f9e1, _0x2525e6, _0x252993, {
  from: _0x30b1d0,
  quoted: _0x29cfb4,
  body: _0x1d6c72,
  isCmd: _0xf800e9,
  command: _0x1004b5,
  args: _0x5af7d4,
  q: _0x305c36,
  isGroup: _0x5095ef,
  sender: _0x1c421a,
  senderNumber: _0x572a55,
  botNumber2: _0x3557b2,
  botNumber: _0x175a1a,
  pushname: _0x5b5c74,
  isMe: _0x67a202,
  isOwner: _0x50632a,
  groupMetadata: _0x435f37,
  groupName: _0x1605b3,
  participants: _0x382a83,
  groupAdmins: _0x37edb7,
  isBotAdmins: _0x5c67cc,
  isAdmins: _0x15582c,
  reply: _0x26c8ec
}) => {
  try {
    const _0x3030bd = await axios.get("https://api.waifu.pics/sfw/yeet");
    const _0x212522 = _0x3030bd.data;
    await _0x50f9e1.sendMessage(_0x30b1d0, {
      'image': {
        'url': _0x212522.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x2525e6
    });
    await _0x252993.react('✅');
  } catch (_0x5f2f3a) {
    console.log(_0x5f2f3a);
    _0x26c8ec("*Error Fetching Anime Girl image*: " + _0x5f2f3a.message);
  }
});
cmd({
  'pattern': "smile",
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '🍄',
  'filename': __filename
}, async (_0x321e87, _0x43e30a, _0x3ecc3d, {
  from: _0x3353d7,
  quoted: _0x864a39,
  body: _0x4c85b4,
  isCmd: _0x5dd872,
  command: _0x8f2c69,
  args: _0x18ebec,
  q: _0x339f4e,
  isGroup: _0x508c5d,
  sender: _0x3444fd,
  senderNumber: _0x54ed20,
  botNumber2: _0x115e59,
  botNumber: _0x5b6e48,
  pushname: _0x32505f,
  isMe: _0xe4480b,
  isOwner: _0x5a7d8d,
  groupMetadata: _0x3e2dc9,
  groupName: _0x458674,
  participants: _0x528343,
  groupAdmins: _0x44c195,
  isBotAdmins: _0x272bba,
  isAdmins: _0x20809b,
  reply: _0x2a0948
}) => {
  try {
    const _0x5e132d = await axios.get("https://api.waifu.pics/sfw/smile");
    const _0x851faa = _0x5e132d.data;
    await _0x321e87.sendMessage(_0x3353d7, {
      'image': {
        'url': _0x851faa.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x43e30a
    });
    await _0x3ecc3d.react('✅');
  } catch (_0x43fb8c) {
    console.log(_0x43fb8c);
    _0x2a0948("*Error Fetching Anime Girl image*: " + _0x43fb8c.message);
  }
});
cmd({
  'pattern': 'wave',
  'desc': "Fetch a random anime girl image.",
  'category': 'fun',
  'react': '🍄',
  'filename': __filename
}, async (_0x29dc9b, _0x89f45d, _0x416762, {
  from: _0x273c93,
  quoted: _0x125e65,
  body: _0x584366,
  isCmd: _0x3daee1,
  command: _0x3ff125,
  args: _0x2f35bb,
  q: _0x28433f,
  isGroup: _0x55cf2d,
  sender: _0x539471,
  senderNumber: _0x492013,
  botNumber2: _0x65af4d,
  botNumber: _0x1811af,
  pushname: _0x558e00,
  isMe: _0x2566ed,
  isOwner: _0x82ba85,
  groupMetadata: _0x441cdb,
  groupName: _0xc3d624,
  participants: _0x5c31cd,
  groupAdmins: _0x2ec7e7,
  isBotAdmins: _0x26e38e,
  isAdmins: _0x4f1b3b,
  reply: _0x2323ef
}) => {
  try {
    const _0x1ba96a = await axios.get('https://api.waifu.pics/sfw/wave');
    const _0x1442f4 = _0x1ba96a.data;
    await _0x29dc9b.sendMessage(_0x273c93, {
      'image': {
        'url': _0x1442f4.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x89f45d
    });
    await _0x416762.react('✅');
  } catch (_0xc12a91) {
    console.log(_0xc12a91);
    _0x2323ef("*Error Fetching Anime Girl image*: " + _0xc12a91.message);
  }
});
cmd({
  'pattern': "nom",
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '🍄',
  'filename': __filename
}, async (_0x3c7f13, _0x47d7a8, _0x542319, {
  from: _0x563628,
  quoted: _0x29d803,
  body: _0x55bcd0,
  isCmd: _0x408e5b,
  command: _0x540372,
  args: _0x1513af,
  q: _0x55a039,
  isGroup: _0x1209c6,
  sender: _0x4baed2,
  senderNumber: _0x541cbc,
  botNumber2: _0x12f6fb,
  botNumber: _0x4d4fc8,
  pushname: _0x227748,
  isMe: _0x12c6a1,
  isOwner: _0x13986e,
  groupMetadata: _0x3b71ba,
  groupName: _0x122efe,
  participants: _0xacc572,
  groupAdmins: _0x50f0f3,
  isBotAdmins: _0x54bc9f,
  isAdmins: _0x360a2e,
  reply: _0x555d5f
}) => {
  try {
    const _0x5c17f3 = await axios.get("https://api.waifu.pics/sfw/nom");
    const _0x499772 = _0x5c17f3.data;
    await _0x3c7f13.sendMessage(_0x563628, {
      'image': {
        'url': _0x499772.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x47d7a8
    });
    await _0x542319.react('✅');
  } catch (_0x51f6ed) {
    console.log(_0x51f6ed);
    _0x555d5f("*Error Fetching Anime Girl image*: " + _0x51f6ed.message);
  }
});
cmd({
  'pattern': 'bite',
  'desc': "Fetch a random anime girl image.",
  'category': 'fun',
  'react': '🍄',
  'filename': __filename
}, async (_0x43cf1d, _0x374604, _0x3fc524, {
  from: _0x4a2ffa,
  quoted: _0x2ce817,
  body: _0x65a17,
  isCmd: _0x22b677,
  command: _0x281675,
  args: _0x36efa0,
  q: _0xa1097e,
  isGroup: _0x1ae3f4,
  sender: _0x21eea7,
  senderNumber: _0x9e9d57,
  botNumber2: _0x28e99d,
  botNumber: _0x187a46,
  pushname: _0x257391,
  isMe: _0x2ee2e6,
  isOwner: _0x1db1db,
  groupMetadata: _0x5283ee,
  groupName: _0x587b61,
  participants: _0x47c36d,
  groupAdmins: _0x591e19,
  isBotAdmins: _0x5ed59e,
  isAdmins: _0x94e69b,
  reply: _0x557b4e
}) => {
  try {
    const _0x1cf235 = await axios.get("https://api.waifu.pics/sfw/bite");
    const _0x32f79e = _0x1cf235.data;
    await _0x43cf1d.sendMessage(_0x4a2ffa, {
      'image': {
        'url': _0x32f79e.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x374604
    });
    await _0x3fc524.react('✅');
  } catch (_0x48efd5) {
    console.log(_0x48efd5);
    _0x557b4e("*Error Fetching Anime Girl image*: " + _0x48efd5.message);
  }
});
cmd({
  'pattern': "slap",
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '🍄',
  'filename': __filename
}, async (_0x2aa0ae, _0x1fb2fd, _0x34ed8c, {
  from: _0x4d4868,
  quoted: _0x4f6f92,
  body: _0x53a5a1,
  isCmd: _0x5571aa,
  command: _0x5ef928,
  args: _0x4753ae,
  q: _0x2bb697,
  isGroup: _0x72a47d,
  sender: _0x1d3e22,
  senderNumber: _0x2f198f,
  botNumber2: _0x5a20d9,
  botNumber: _0x51de9f,
  pushname: _0x29771c,
  isMe: _0x39d2f5,
  isOwner: _0x209db7,
  groupMetadata: _0x334f36,
  groupName: _0x2559b5,
  participants: _0x224ec8,
  groupAdmins: _0x4c15d8,
  isBotAdmins: _0x427fe7,
  isAdmins: _0x290e8c,
  reply: _0x426e28
}) => {
  try {
    const _0x5608b8 = await axios.get("https://api.waifu.pics/sfw/slap");
    const _0x218c66 = _0x5608b8.data;
    await _0x2aa0ae.sendMessage(_0x4d4868, {
      'image': {
        'url': _0x218c66.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x1fb2fd
    });
    await _0x34ed8c.react('✅');
  } catch (_0x539219) {
    console.log(_0x539219);
    _0x426e28("*Error Fetching Anime Girl image*: " + _0x539219.message);
  }
});
cmd({
  'pattern': "glomp",
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '🍄',
  'filename': __filename
}, async (_0x477432, _0x1fbcd6, _0x49e0ff, {
  from: _0x1751cf,
  quoted: _0x43e5f6,
  body: _0x27797e,
  isCmd: _0x496255,
  command: _0x3e7950,
  args: _0x179afa,
  q: _0x58d06c,
  isGroup: _0x5bf5ad,
  sender: _0x2c66f1,
  senderNumber: _0x7ced20,
  botNumber2: _0x4aa1dd,
  botNumber: _0xffa2ff,
  pushname: _0x385d4f,
  isMe: _0x5d619d,
  isOwner: _0x37c666,
  groupMetadata: _0x5c6593,
  groupName: _0x16865a,
  participants: _0x5eb177,
  groupAdmins: _0x4b889d,
  isBotAdmins: _0x1376db,
  isAdmins: _0x341206,
  reply: _0x22eb16
}) => {
  try {
    const _0x3ae11d = await axios.get('https://api.waifu.pics/sfw/glomp');
    const _0x4e223b = _0x3ae11d.data;
    await _0x477432.sendMessage(_0x1751cf, {
      'image': {
        'url': _0x4e223b.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x1fbcd6
    });
    await _0x49e0ff.react('✅');
  } catch (_0x2bf97d) {
    console.log(_0x2bf97d);
    _0x22eb16("*Error Fetching Anime Girl image*: " + _0x2bf97d.message);
  }
});
cmd({
  'pattern': "kill",
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '🍄',
  'filename': __filename
}, async (_0x131f75, _0x36eddf, _0x44c58d, {
  from: _0x3cc53e,
  quoted: _0x5c9fe9,
  body: _0x5c0379,
  isCmd: _0x490ccf,
  command: _0x4ab800,
  args: _0x31133f,
  q: _0x2bc7fa,
  isGroup: _0x1cf711,
  sender: _0x5298b4,
  senderNumber: _0x318bf1,
  botNumber2: _0x36767d,
  botNumber: _0xd424e1,
  pushname: _0x231fe9,
  isMe: _0x5f42be,
  isOwner: _0x5aaf90,
  groupMetadata: _0x4e72af,
  groupName: _0xd1dbd3,
  participants: _0x51740c,
  groupAdmins: _0x529a80,
  isBotAdmins: _0x22413a,
  isAdmins: _0x1e2dc,
  reply: _0x307638
}) => {
  try {
    const _0x2f9080 = await axios.get('https://api.waifu.pics/sfw/kill');
    const _0x542437 = _0x2f9080.data;
    await _0x131f75.sendMessage(_0x3cc53e, {
      'image': {
        'url': _0x542437.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x36eddf
    });
    await _0x44c58d.react('✅');
  } catch (_0x14778a) {
    console.log(_0x14778a);
    _0x307638("*Error Fetching Anime Girl image*: " + _0x14778a.message);
  }
});
cmd({
  'pattern': 'kick',
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '🍄',
  'filename': __filename
}, async (_0xedc49a, _0x4494be, _0x348f71, {
  from: _0x1bdb81,
  quoted: _0x2b7829,
  body: _0x3703fe,
  isCmd: _0x3b39cb,
  command: _0x57ca02,
  args: _0x273b31,
  q: _0x18ab1a,
  isGroup: _0x2595a4,
  sender: _0x31c638,
  senderNumber: _0x155aef,
  botNumber2: _0x1a442d,
  botNumber: _0x3ce27d,
  pushname: _0xb8ca71,
  isMe: _0x49b272,
  isOwner: _0x529994,
  groupMetadata: _0x387827,
  groupName: _0x18e973,
  participants: _0x4b8cc5,
  groupAdmins: _0x49e5f9,
  isBotAdmins: _0x3b05d7,
  isAdmins: _0x107969,
  reply: _0x3fbebc
}) => {
  try {
    const _0xa249f9 = await axios.get("https://api.waifu.pics/sfw/kick");
    const _0x148362 = _0xa249f9.data;
    await _0xedc49a.sendMessage(_0x1bdb81, {
      'image': {
        'url': _0x148362.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x4494be
    });
    await _0x348f71.react('✅');
  } catch (_0x2d88ea) {
    console.log(_0x2d88ea);
    _0x3fbebc("*Error Fetching Anime Girl image*: " + _0x2d88ea.message);
  }
});
cmd({
  'pattern': "happy",
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '🍄',
  'filename': __filename
}, async (_0x19fa11, _0x3ee0c6, _0x1e9471, {
  from: _0x3c9930,
  quoted: _0x5444c6,
  body: _0x266e0b,
  isCmd: _0x5598aa,
  command: _0xe40632,
  args: _0x4d0070,
  q: _0x41627c,
  isGroup: _0x4a7b9d,
  sender: _0x365b31,
  senderNumber: _0x2824b6,
  botNumber2: _0x140769,
  botNumber: _0x2fd55f,
  pushname: _0x1c7a6f,
  isMe: _0x15cfa2,
  isOwner: _0x563bae,
  groupMetadata: _0x25c047,
  groupName: _0x13697a,
  participants: _0x370eef,
  groupAdmins: _0x14faa9,
  isBotAdmins: _0x12dc6e,
  isAdmins: _0x2b9750,
  reply: _0x3d6b3a
}) => {
  try {
    const _0x423c3e = await axios.get('https://api.waifu.pics/sfw/happy');
    const _0x5be806 = _0x423c3e.data;
    await _0x19fa11.sendMessage(_0x3c9930, {
      'image': {
        'url': _0x5be806.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x3ee0c6
    });
    await _0x1e9471.react('✅');
  } catch (_0x3daa6d) {
    console.log(_0x3daa6d);
    _0x3d6b3a("*Error Fetching Anime Girl image*: " + _0x3daa6d.message);
  }
});
cmd({
  'pattern': "wink",
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '🍄',
  'filename': __filename
}, async (_0x4a4d99, _0x45dff0, _0x5f5d6d, {
  from: _0x33546c,
  quoted: _0x18f48e,
  body: _0x45fbdd,
  isCmd: _0x459d7e,
  command: _0x512430,
  args: _0x1523ee,
  q: _0x37b9a3,
  isGroup: _0xa17d2d,
  sender: _0x14389e,
  senderNumber: _0x373d5f,
  botNumber2: _0x150fd2,
  botNumber: _0x454bb5,
  pushname: _0x6d0701,
  isMe: _0x2b3bb7,
  isOwner: _0x49dc02,
  groupMetadata: _0x3eb862,
  groupName: _0x295771,
  participants: _0x19458e,
  groupAdmins: _0x3c624d,
  isBotAdmins: _0xbeeb1c,
  isAdmins: _0xc4d1a2,
  reply: _0x33b9f1
}) => {
  try {
    const _0x4aa63d = await axios.get("https://api.waifu.pics/sfw/wink");
    const _0x122bd8 = _0x4aa63d.data;
    await _0x4a4d99.sendMessage(_0x33546c, {
      'image': {
        'url': _0x122bd8.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x45dff0
    });
    await _0x5f5d6d.react('✅');
  } catch (_0x1651d6) {
    console.log(_0x1651d6);
    _0x33b9f1("*Error Fetching Anime Girl image*: " + _0x1651d6.message);
  }
});
cmd({
  'pattern': "poke",
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '🍄',
  'filename': __filename
}, async (_0x496a83, _0x1c31f7, _0x19ee25, {
  from: _0x59d0e5,
  quoted: _0x2a2e32,
  body: _0x5b440f,
  isCmd: _0x26b8ac,
  command: _0x31521a,
  args: _0x1d5836,
  q: _0x24ed54,
  isGroup: _0x23c955,
  sender: _0x45550c,
  senderNumber: _0x24e8be,
  botNumber2: _0x34fd67,
  botNumber: _0x500a41,
  pushname: _0x4b236e,
  isMe: _0x3f9dcf,
  isOwner: _0x2d99e9,
  groupMetadata: _0x357f7a,
  groupName: _0x478590,
  participants: _0x41257d,
  groupAdmins: _0x33dab9,
  isBotAdmins: _0x3e71fb,
  isAdmins: _0x1f847,
  reply: _0x455a6f
}) => {
  try {
    const _0xdc63d2 = await axios.get("https://api.waifu.pics/sfw/poke");
    const _0x162c07 = _0xdc63d2.data;
    await _0x496a83.sendMessage(_0x59d0e5, {
      'image': {
        'url': _0x162c07.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x1c31f7
    });
    await _0x19ee25.react('✅');
  } catch (_0x4cd46c) {
    console.log(_0x4cd46c);
    _0x455a6f("*Error Fetching Anime Girl image*: " + _0x4cd46c.message);
  }
});
cmd({
  'pattern': "dance",
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '🍄',
  'filename': __filename
}, async (_0x2577d8, _0x2bdc4e, _0x1a6794, {
  from: _0x1f4865,
  quoted: _0x567b21,
  body: _0x1a63a4,
  isCmd: _0x3cdd70,
  command: _0x3cbf4a,
  args: _0x524778,
  q: _0x2cebd5,
  isGroup: _0x349d06,
  sender: _0x12b6c6,
  senderNumber: _0x29da1e,
  botNumber2: _0x58f629,
  botNumber: _0x3db8ea,
  pushname: _0x51c60d,
  isMe: _0x550f7d,
  isOwner: _0x1962f0,
  groupMetadata: _0x346f7a,
  groupName: _0x1c3c8c,
  participants: _0x4e2c28,
  groupAdmins: _0x1d6533,
  isBotAdmins: _0xa8ffdc,
  isAdmins: _0x24d4e4,
  reply: _0xd2e0ea
}) => {
  try {
    const _0x52b9ef = await axios.get("https://api.waifu.pics/sfw/dance");
    const _0x86b511 = _0x52b9ef.data;
    await _0x2577d8.sendMessage(_0x1f4865, {
      'image': {
        'url': _0x86b511.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x2bdc4e
    });
    await _0x1a6794.react('✅');
  } catch (_0x511f36) {
    console.log(_0x511f36);
    _0xd2e0ea("*Error Fetching Anime Girl image*: " + _0x511f36.message);
  }
});
cmd({
  'pattern': "smug",
  'desc': "Fetch a random anime girl image.",
  'category': 'fun',
  'react': '🍄',
  'filename': __filename
}, async (_0x43a438, _0xf7b06, _0x23b938, {
  from: _0x2000d7,
  quoted: _0x9620cf,
  body: _0x4bfb0d,
  isCmd: _0x248c58,
  command: _0x575e99,
  args: _0xb4e951,
  q: _0x48c802,
  isGroup: _0x5d6a82,
  sender: _0x1cb27c,
  senderNumber: _0x440472,
  botNumber2: _0x2872c3,
  botNumber: _0x36106b,
  pushname: _0x402c3d,
  isMe: _0x502c7c,
  isOwner: _0xe6c79a,
  groupMetadata: _0x39f464,
  groupName: _0x38d791,
  participants: _0x3036ab,
  groupAdmins: _0x3dc476,
  isBotAdmins: _0x227b51,
  isAdmins: _0x4d378a,
  reply: _0x23a31e
}) => {
  try {
    const _0x405821 = await axios.get("https://api.waifu.pics/sfw/smug");
    const _0x52be59 = _0x405821.data;
    await _0x43a438.sendMessage(_0x2000d7, {
      'image': {
        'url': _0x52be59.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0xf7b06
    });
    await _0x23b938.react('✅');
  } catch (_0x310ad2) {
    console.log(_0x310ad2);
    _0x23a31e("*Error Fetching Anime Girl image*: " + _0x310ad2.message);
  }
});
cmd({
  'pattern': 'cringe',
  'desc': "Fetch a random anime girl image.",
  'category': 'fun',
  'react': '🍄',
  'filename': __filename
}, async (_0x31cb85, _0x13c877, _0x2d439f, {
  from: _0xe2d0c7,
  quoted: _0x46ceb1,
  body: _0x239abb,
  isCmd: _0x5c490c,
  command: _0x31b7a8,
  args: _0x2fbc21,
  q: _0x3c0c34,
  isGroup: _0x56670f,
  sender: _0x1b4536,
  senderNumber: _0x3212de,
  botNumber2: _0x58614c,
  botNumber: _0x39220d,
  pushname: _0x2fc51e,
  isMe: _0x19ecc0,
  isOwner: _0xc62c66,
  groupMetadata: _0x50cbc4,
  groupName: _0x51a129,
  participants: _0x149c96,
  groupAdmins: _0x21fe5a,
  isBotAdmins: _0x4a1afe,
  isAdmins: _0x10bc78,
  reply: _0x1a219c
}) => {
  try {
    const _0x3daec3 = await axios.get("https://api.waifu.pics/sfw/cringe");
    const _0x8ca7fb = _0x3daec3.data;
    await _0x31cb85.sendMessage(_0xe2d0c7, {
      'image': {
        'url': _0x8ca7fb.url
      },
      'caption': "👸 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗜𝗠𝗔𝗚𝗘𝗦* 👸\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x13c877
    });
    await _0x2d439f.react('✅');
  } catch (_0x4fe758) {
    console.log(_0x4fe758);
    _0x1a219c("*Error Fetching Anime Girl image*: " + _0x4fe758.message);
  }
});
cmd({
  'pattern': "trap",
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '🔞',
  'filename': __filename
}, async (_0x114612, _0x3ec059, _0x1327fa, {
  from: _0x3ad042,
  quoted: _0xc9631,
  body: _0x3d62c8,
  isCmd: _0x33f86b,
  command: _0x4075b3,
  args: _0x20fedd,
  q: _0x204ca4,
  isGroup: _0xfe1da3,
  sender: _0x4afb05,
  senderNumber: _0x59e99a,
  botNumber2: _0x42536b,
  botNumber: _0x35d5be,
  pushname: _0x18bf26,
  isMe: _0x1eedda,
  isOwner: _0x486464,
  groupMetadata: _0x4e28ad,
  groupName: _0x427247,
  participants: _0x377bb1,
  groupAdmins: _0x4deb97,
  isBotAdmins: _0x323036,
  isAdmins: _0x5e9348,
  reply: _0x3240e0
}) => {
  try {
    const _0x1945fe = await axios.get("https://api.waifu.pics/sfw/trap");
    const _0x4c5e50 = _0x1945fe.data;
    await _0x114612.sendMessage(_0x3ad042, {
      'image': {
        'url': _0x4c5e50.url
      },
      'caption': "🔞 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗡𝗦𝗙𝗪 𝗜𝗠𝗔𝗚𝗘𝗦* 🔞\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x3ec059
    });
    await _0x1327fa.react('✅');
  } catch (_0x567e04) {
    console.log(_0x567e04);
    _0x3240e0("*Error Fetching Anime Girl image*: " + _0x567e04.message);
  }
});
cmd({
  'pattern': "sexygirl",
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '🔞',
  'filename': __filename
}, async (_0x5151cb, _0x2a0521, _0x31fe38, {
  from: _0x59c4f1,
  quoted: _0xc44a1d,
  body: _0x2305bc,
  isCmd: _0x295ff8,
  command: _0xa4f6df,
  args: _0x405d76,
  q: _0x18ae4b,
  isGroup: _0x4c6eb5,
  sender: _0x5a1164,
  senderNumber: _0x29da80,
  botNumber2: _0x3c12e1,
  botNumber: _0x5cf7e4,
  pushname: _0x383141,
  isMe: _0x33e500,
  isOwner: _0x48dcb8,
  groupMetadata: _0xb25e06,
  groupName: _0x2bfb50,
  participants: _0x4b13f7,
  groupAdmins: _0x598e33,
  isBotAdmins: _0x11fe20,
  isAdmins: _0x53db26,
  reply: _0x22b9dd
}) => {
  try {
    const _0x2b0607 = await axios.get("https://api.waifu.pics/sfw/neko");
    const _0x53e758 = _0x2b0607.data;
    await _0x5151cb.sendMessage(_0x59c4f1, {
      'image': {
        'url': _0x53e758.url
      },
      'caption': "🔞 *𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗡𝗦𝗙𝗪 𝗜𝗠𝗔𝗚𝗘𝗦* 🔞\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x2a0521
    });
    await _0x31fe38.react('✅');
  } catch (_0x383bec) {
    console.log(_0x383bec);
    _0x22b9dd("*Error Fetching Anime Girl image*: " + _0x383bec.message);
  }
});
let autoBioInterval;
cmd({
  'pattern': "setautobio",
  'desc': "Enable or disable the AutoBIO feature.",
  'category': "owner",
  'react': '⚒️',
  'filename': __filename
}, async (_0x5b5e44, _0x2adb4a, _0x6eded0, {
  from: _0x28b78c,
  isOwner: _0x5369d0,
  reply: _0xef7ce1
}) => {
  if (!_0x5369d0) {
    return _0xef7ce1("❌ You are not the owner!");
  }
  config.autoBioEnabled = !config.autoBioEnabled;
  if (config.autoBioEnabled) {
    _0xef7ce1("⚒️ AutoBIO feature has been *enabled*! 🔄");
    startAutoBio(_0x5b5e44);
  } else {
    _0xef7ce1("⚒️ AutoBIO feature has been *disabled*! 🚫");
    stopAutoBio();
  }
});
function startAutoBio(_0x84f8ee) {
  if (autoBioInterval) {
    clearInterval(autoBioInterval);
  }
  autoBioInterval = setInterval(async () => {
    const _0x2a5851 = new Date().toLocaleTimeString();
    const _0x5d030d = "👨‍💻 𝙒𝙤𝙧𝙡𝙙 𝘽𝙚𝙨𝙩 𝙒𝙝𝙖𝙩𝙨𝙖𝙥𝙥 𝘽𝙤𝙩 𝙎𝙐𝙃𝘼𝙎-𝙈𝘿🙈 𝘾𝙤𝙣𝙣𝙚𝙘𝙩𝙚𝙙 𝙎𝙪𝙘𝙨𝙨𝙚𝙨𝙛𝙪𝙡💥.𝘿𝙤𝙣'𝙩 𝙁𝙤𝙧𝙜𝙚𝙩 𝙏𝙤 𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚 𝙈𝙚 𝙞𝙣 𝙔𝙤𝙪𝙩𝙪𝙗𝙚🔔 @suhasbro [" + _0x2a5851 + "] 👨‍💻";
    await _0x84f8ee.updateProfileStatus(_0x5d030d);
  }, 60000);
}
function stopAutoBio() {
  if (autoBioInterval) {
    clearInterval(autoBioInterval);
    autoBioInterval = null;
    console.log("⚒️ AutoBIO feature stopped.");
  }
}
cmd({
  'pattern': "technews",
  'alias': ["tech"],
  'react': '🔌',
  'desc': "Wabetainfo link info get.",
  'category': "download"
}, async (_0x208a53, _0x33c18a, _0x4e2b13, {
  from: _0x40a291,
  quoted: _0xef255,
  body: _0x134f43,
  isCmd: _0x22ba68,
  command: _0x25a554,
  args: _0x39b981,
  q: _0x29f765,
  isGroup: _0x567976,
  sender: _0x1b11e2,
  senderNumber: _0x4ff6ba,
  botNumber2: _0x48141a,
  botNumber: _0xf40298,
  pushname: _0x31a1e1,
  isMe: _0x6119c1,
  isOwner: _0x5edf1c,
  groupMetadata: _0x590ee5,
  groupName: _0x149480,
  participants: _0x2ef998,
  groupAdmins: _0x15f663,
  isBotAdmins: _0x205b35,
  isAdmins: _0x3c7a6d,
  reply: _0x2970db
}) => {
  try {
    await _0x2970db("```SUHAS-MD Tech News Fetching ...```");
    var _0x310c83 = await nima.latest_news();
    const _0x1711f4 = _0x310c83.result;
    let _0x638544 = "\n*🔌 SUHAS-MD TECH NEWS 🔌*\n            \n*◈ᴛɪᴛʟᴇ: " + _0x1711f4.title + "*\n\n*◈ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ: " + _0x1711f4.desc + "*\n            \n> *✨ Powered By SUHAS-MD-V9 💞*\n            ";
    await _0x208a53.sendMessage(_0x40a291, {
      'image': {
        'url': _0x1711f4.img.split('?')[0x0] || "https://avatars.githubusercontent.com/u/108072422?v=4"
      },
      'caption': _0x638544
    }, {
      'quoted': _0x33c18a
    });
    await _0x4e2b13.react('✅');
  } catch (_0x245262) {
    console.log(_0x245262);
    _0x2970db('' + _0x245262);
  }
});
cmd({
  'pattern': 'newjid',
  'alias': ["sjid"],
  'react': '🎗',
  'desc': "text send to jid",
  'category': "owner",
  'filename': __filename
}, async (_0x50a0a5, _0x197a15, _0x3025f7, {
  from: _0x57dae3,
  quoted: _0x53fd9e,
  body: _0x5638c6,
  isCmd: _0x1e0a79,
  command: _0x1567c1,
  args: _0xf0b892,
  q: _0x2be305,
  isGroup: _0x5423b2,
  sender: _0x14a840,
  senderNumber: _0x59d363,
  botNumber2: _0x37d1ff,
  botNumber: _0x4d8e5f,
  pushname: _0x4a400c,
  isMe: _0x1f0add,
  isOwner: _0x1a51b2,
  groupMetadata: _0x13fe41,
  groupName: _0xa491d6,
  participants: _0x5d2534,
  groupAdmins: _0x54859c,
  isBotAdmins: _0x38c5d2,
  isAdmins: _0x2f56a3,
  reply: _0x33e879
}) => {
  try {
    if (!_0x1a51b2) {
      return _0x33e879("*_This is an owner cmd._*");
    }
    if (!_0x3025f7.quoted) {
      return _0x33e879("*_Please reply a text msg._*");
    }
    if (!_0x2be305) {
      return _0x33e879("*_Please give me a jid to send this text._*");
    }
    await _0x50a0a5.sendMessage(_0x2be305, {
      'text': _0x3025f7.quoted.msg
    });
  } catch (_0xf65201) {
    console.log(_0xf65201);
    _0x33e879('' + _0xf65201);
  }
});
cmd({
  'pattern': "tts",
  'alias': ["texttovoice"],
  'desc': "Text-to-speech",
  'react': '💞',
  'category': 'convert',
  'filename': __filename
}, async (_0x2e3b84, _0x8ea95b, _0x120cbd, {
  from: _0x58b5cb,
  quoted: _0x23c05f,
  body: _0x6a4534,
  isCmd: _0x4e2b2,
  command: _0x490c37,
  args: _0x36d6e7,
  q: _0x9bf09a,
  isGroup: _0x215e2d,
  sender: _0x1f1c2b,
  senderNumber: _0x299c81,
  botNumber2: _0x4a126b,
  botNumber: _0xb00d83,
  pushname: _0x1bd376,
  isMe: _0x534b72,
  isOwner: _0x45c203,
  groupMetadata: _0x29bf79,
  groupName: _0x5222a7,
  participants: _0x367459,
  groupAdmins: _0x2961fc,
  isBotAdmins: _0x5a4319,
  isAdmins: _0x486fb6,
  reply: _0x4e9fcc
}) => {
  try {
    if (!_0x9bf09a) {
      return _0x4e9fcc("*Please give me a text.*");
    }
    const _0x5934e4 = googleTTS.getAudioUrl(_0x9bf09a, {
      'lang': 'en',
      'slow': false,
      'host': "https://translate.google.com"
    });
    await _0x2e3b84.sendMessage(_0x58b5cb, {
      'audio': {
        'url': _0x5934e4
      },
      'mimetype': 'audio/mpeg'
    }, {
      'quoted': _0x8ea95b
    });
    await _0x120cbd.react('✅');
  } catch (_0x53661c) {
    console.log(_0x53661c);
    _0x4e9fcc('' + _0x53661c);
  }
});
cmd({
  'pattern': "song",
  'alias': ["song1", "play"],
  'desc': "download songs",
  'category': "download",
  'react': '📥',
  'filename': __filename
}, async (_0x5b1489, _0xb82ef, _0x21f429, {
  from: _0x54b8ea,
  quoted: _0x417652,
  body: _0x530491,
  isCmd: _0x19d5a9,
  command: _0x3a61ad,
  args: _0x422ffb,
  q: _0x549c60,
  isGroup: _0x4215f4,
  sender: _0x1c5db0,
  senderNumber: _0x37748a,
  botNumber2: _0x5d42ac,
  botNumber: _0x47fb5b,
  pushname: _0x205d0f,
  isMe: _0x428a55,
  isOwner: _0x5e8ded,
  groupMetadata: _0x4cd3db,
  groupName: _0x165b5c,
  participants: _0x24fb55,
  groupAdmins: _0x24458d,
  isBotAdmins: _0x13c589,
  isAdmins: _0x236474,
  reply: _0x18818f
}) => {
  try {
    if (!_0x549c60) {
      return _0x18818f("*Please Give me a Song Name or Link.*");
    }
    const _0x14489c = await yts(_0x549c60);
    const _0x8c1bcf = _0x14489c.videos[0x0];
    const _0x15c76a = _0x8c1bcf.url;
    let _0x343c69 = "*🎼 SUHAS-MD SONG DOWNLOADER..📥*\n\n*⚡ ᴛɪᴛʟᴇ* - " + _0x8c1bcf.title + "\n\n*👀 ᴠɪᴇᴡꜱ* - " + _0x8c1bcf.views + "\n\n*🧚‍♂️ ᴅᴇꜱᴄ* - " + _0x8c1bcf.description + "\n\n*⏰ ᴛɪᴍᴇ* - " + _0x8c1bcf.timestamp + "\n\n*📆 ᴀɢᴏ* - " + _0x8c1bcf.ago + "\n\n*🏮ꜱᴜʙꜱᴄʀɪʙᴇ ᴜꜱ* ➟https://youtube.com/@suhasbro\n\n*💡ꜰᴏʟʟᴏᴡ ᴜꜱ* ➟https://whatsapp.com/channel/0029VagKNUe96H4IdMbr9f2o\n\n> *✨ Powered By SUHAS-MD-V9 💞*\n";
    await _0x5b1489.sendMessage(_0x54b8ea, {
      'image': {
        'url': _0x8c1bcf.thumbnail
      },
      'caption': _0x343c69
    }, {
      'quoted': _0xb82ef
    });
    let _0x3e0afb = await fg.yta(_0x15c76a);
    let _0x1b57b6 = _0x3e0afb.dl_url;
    await _0x5b1489.sendMessage(_0x54b8ea, {
      'audio': {
        'url': _0x1b57b6
      },
      'mimetype': "audio/mpeg"
    }, {
      'quoted': _0xb82ef
    });
    await _0x5b1489.sendMessage(_0x54b8ea, {
      'document': {
        'url': _0x1b57b6
      },
      'mimetype': "audio/mpeg",
      'fileName': _0x8c1bcf.title + "mp3",
      'caption': "🎵 𝙈𝙖𝙙𝙚 𝘽𝙮 𝙎𝙐𝙃𝘼𝙎-𝙈𝘿-𝙑9 🎵"
    }, {
      'quoted': _0xb82ef
    });
    await _0x21f429.react('✅');
  } catch (_0x1cfed0) {
    _0x18818f('' + _0x1cfed0);
  }
});
cmd({
  'pattern': 'video',
  'alias': ["video1", "ytmp4"],
  'desc': "download video",
  'category': "download",
  'react': '📥',
  'filename': __filename
}, async (_0x26ea80, _0xe521d1, _0x3b6a32, {
  from: _0x5e86d6,
  quoted: _0xc5966c,
  body: _0x36c31e,
  isCmd: _0x3f0cbf,
  command: _0x806b12,
  args: _0x4b5fc6,
  q: _0x41a9c2,
  isGroup: _0x33d63d,
  sender: _0x35907e,
  senderNumber: _0x5bd19f,
  botNumber2: _0x1f687c,
  botNumber: _0x323572,
  pushname: _0x478527,
  isMe: _0x4e756b,
  isOwner: _0x2fb2c8,
  groupMetadata: _0x1a0d60,
  groupName: _0x264bb0,
  participants: _0x6100b7,
  groupAdmins: _0x295b44,
  isBotAdmins: _0x119e05,
  isAdmins: _0x117eb7,
  reply: _0x3eff0e
}) => {
  try {
    if (!_0x41a9c2) {
      return _0x3eff0e("*Please Give me a Video Name or Link*");
    }
    const _0x353047 = await yts(_0x41a9c2);
    const _0x4cb485 = _0x353047.videos[0x0];
    const _0x541295 = _0x4cb485.url;
    let _0x55720c = "*🎥 SUHAS-MD VIDEO DOWNLOADER..📩*\n\n*⚡ ᴛɪᴛʟᴇ* - " + _0x4cb485.title + "\n\n*👀 ᴠɪᴇᴡꜱ* - " + _0x4cb485.views + "\n\n*🧚‍♂️ ᴅᴇꜱᴄ* - " + _0x4cb485.description + "\n\n*⏰ ᴛɪᴍᴇ* - " + _0x4cb485.timestamp + "\n\n*📆 ᴀɢᴏ* - " + _0x4cb485.ago + "\n\n*🏮ꜱᴜʙꜱᴄʀɪʙᴇ ᴜꜱ* ➟https://youtube.com/@suhasbro\n\n*💡ꜰᴏʟʟᴏᴡ ᴜꜱ* ➟https://whatsapp.com/channel/0029VagKNUe96H4IdMbr9f2o\n\n> *✨ Powered By SUHAS-MD-V9 💞*                   \n";
    await _0x26ea80.sendMessage(_0x5e86d6, {
      'image': {
        'url': _0x4cb485.thumbnail
      },
      'caption': _0x55720c
    }, {
      'quoted': _0xe521d1
    });
    let _0x4a5db4 = await fg.ytv(_0x541295);
    let _0x286a67 = _0x4a5db4.dl_url;
    await _0x26ea80.sendMessage(_0x5e86d6, {
      'video': {
        'url': _0x286a67
      },
      'mimetype': "video/mp4"
    }, {
      'quoted': _0xe521d1
    });
    await _0x26ea80.sendMessage(_0x5e86d6, {
      'document': {
        'url': _0x286a67
      },
      'mimetype': "video/mp4",
      'fileName': _0x4cb485.title + "mp4",
      'caption': "🎬 𝙈𝙖𝙙𝙚 𝘽𝙮 𝙎𝙐𝙃𝘼𝙎-𝙈𝘿-𝙑9 🎬"
    }, {
      'quoted': _0xe521d1
    });
    await _0x3b6a32.react('✅');
  } catch (_0x220ce1) {
    _0x3eff0e('' + _0x220ce1);
  }
});
cmd({
  'pattern': "yts",
  'alias': ["youtubesearch", 'ytsearch'],
  'desc': "Search for YouTube videos",
  'category': "search",
  'react': '🔍',
  'filename': __filename,
  'use': "<search query>"
}, async (_0x39390c, _0x50665d, _0x23f501, {
  from: _0x1da0d6,
  args: _0x5e4b7a,
  reply: _0xb73cac
}) => {
  if (!_0x5e4b7a[0x0]) {
    return _0xb73cac("Please provide a search query !");
  }
  const _0x4c733e = _0x5e4b7a.join(" ");
  try {
    const _0x2b94a1 = await yts(_0x4c733e);
    if (!_0x2b94a1.videos.length) {
      return _0xb73cac("No videos found for the given query.");
    }
    let _0x4af433 = "*🔍 YouTube Search Results:*\n\n";
    _0x2b94a1.videos.slice(0x0, 0x14).forEach((_0x438800, _0x2bc35f) => {
      _0x4af433 += _0x2bc35f + 0x1 + ". *" + _0x438800.title + "*\n";
      _0x4af433 += "   Channel: " + _0x438800.author.name + "\n";
      _0x4af433 += "   Duration: " + _0x438800.duration.timestamp + "\n";
      _0x4af433 += "   Views: " + formatNumber(_0x438800.views) + "\n";
      _0x4af433 += "   Uploaded: " + _0x438800.ago + "\n";
      _0x4af433 += "   Link: " + _0x438800.url + "\n\n> *✨ Powered By SUHAS-MD-V9 💞*";
    });
    _0x4af433 += "\nShowing top 20 results for \"" + _0x4c733e + "\"\n";
    _0x4af433 += "To watch, click on the video link or use the command:\n";
    await _0x39390c.sendMessage(_0x1da0d6, {
      'text': _0x4af433
    }, {
      'quoted': _0x50665d
    });
  } catch (_0x19ac95) {
    console.error("Error in YouTube search:", _0x19ac95);
    _0xb73cac("❌ An error occurred while searching YouTube. Please try again later.");
  }
});
function formatNumber(_0x586ce9) {
  if (_0x586ce9 >= 0xf4240) {
    return (_0x586ce9 / 0xf4240).toFixed(0x1) + 'M';
  } else {
    if (_0x586ce9 >= 0x3e8) {
      return (_0x586ce9 / 0x3e8).toFixed(0x1) + 'K';
    }
  }
  return _0x586ce9.toString();
}
cmd({
  'pattern': "sinhalasubshere24",
  'alias': ["sinhalasubshere", "ytxms", "cinedl", "cineshere", "baiscope"],
  'desc': "owner the bot",
  'category': "main",
  'react': '🎁',
  'filename': __filename
}, async (_0x47cd06, _0x2e7d99, _0x160be5, {
  from: _0x3ff312,
  quoted: _0x32a909,
  body: _0x29e14e,
  isCmd: _0x50170f,
  command: _0x2f0be1,
  args: _0x28ccbc,
  q: _0x1fcc60,
  isGroup: _0xca8621,
  sender: _0x20e640,
  senderNumber: _0x47a7e0,
  botNumber2: _0x3d1cfa,
  botNumber: _0x1dc19c,
  pushname: _0x3bcb36,
  isMe: _0x45598b,
  isOwner: _0xa866bb,
  groupMetadata: _0x18fa9c,
  groupName: _0x2873a7,
  participants: _0x43de3e,
  groupAdmins: _0x6b74bd,
  isBotAdmins: _0x2e98d8,
  isAdmins: _0x5e196f,
  reply: _0x2d1a11
}) => {
  try {
    await _0x47cd06.sendMessage(_0x3ff312, {
      'image': {
        'url': "https://i.ibb.co/mbP3mpW/20241207-221016.jpg"
      },
      'caption': "*✨ Tʜɪꜱ Cᴏᴍᴍᴀɴᴅs Iꜱ Aᴠᴀʟɪᴀʙʟᴇ Iɴ Pʀᴇᴍɪᴜᴍ Uꜱᴇʀꜱ. 🏆*\n\n*💡𝙲𝚘𝚗𝚝𝚊𝚌𝚝  𝚃𝚑𝚎  𝙾𝚠𝚗𝚎𝚛 𝙵𝚘𝚛  𝙶𝚎𝚝  𝙿𝚛𝚎𝚖𝚒𝚞𝚖  𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜...🪄*\n\n> Premium Commands List.\n\n      1.Sinhalasubdl\n      2.Sinhalasubshere\n      3.Ytxms\n      4.Cinedl\n      5.Cineshere\n      6.Baiscope\n\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n\n*🏮ꜱᴜʙꜱᴄʀɪʙᴇ ᴜꜱ* ➟https://youtube.com/@suhasbro\n\n*💡ꜰᴏʟʟᴏᴡ ᴜꜱ* ➟https://whatsapp.com/channel/0029VagKNUe96H4IdMbr9f2o\n\n*✨ᴡᴇʙ ꜱɪᴛᴇ* ➠ https://suhas-bro.vercel.app/\n\n*🎉ᴛᴇʟᴇɢʀᴀᴍ* ➠https://t.me/suhasbro\n\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n\n\n*_🗣️Sʜᴇʀᴇ Oᴜʀ YᴏᴜTᴜʙᴇ Cʜᴀɴɴᴇʟ Lɪɴᴋ & WʜᴀᴛꜱAᴘᴘ Cʜᴀɴɴᴇʟ Lɪɴᴋ Wɪᴛʜ Yᴏᴜʀ Fʀɪᴇɴᴅꜱ...💙_*\n\n\n╔══╗ ♪\n║██║ ♫\n║ ( ● ) ♫\n╚══╝♪ ♪\n\n> *✨ Powered By SUHAS-MD-V9 💞*\n"
    }, {
      'quoted': _0x2e7d99
    });
    await _0x160be5.react('✅');
  } catch (_0x5b3374) {
    console.log(_0x5b3374);
    _0x2d1a11('' + _0x5b3374);
  }
});
