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
const {
  cmd,
  commands
} = require('../command');
const {
  runtime
} = require("../lib/functions");
const os = require('os');
cmd({
  'pattern': "runtime",
  'alias': ["uptime"],
  'desc': "check up time",
  'category': "main",
  'react': '⏰',
  'filename': __filename
}, async (_0x188523, _0x52ab08, _0x1a8d95, {
  from: _0x2d72ef,
  quoted: _0x5e1ee0,
  body: _0x391dc2,
  isCmd: _0x45d5e1,
  command: _0x4d4498,
  args: _0x2cef10,
  q: _0x3ad41b,
  isGroup: _0x3fe88d,
  sender: _0x4b7e37,
  senderNumber: _0x21adae,
  botNumber2: _0x27c836,
  botNumber: _0x562d51,
  pushname: _0x2524c2,
  isMe: _0x1cf20c,
  isOwner: _0x1a1079,
  groupMetadata: _0x380595,
  groupName: _0x55bf72,
  participants: _0x58d246,
  groupAdmins: _0x3813a1,
  isBotAdmins: _0x588d55,
  isAdmins: _0x28ec94,
  reply: _0x3cc0d0
}) => {
  try {
    let _0x4f59f6 = " *🚀 Runtime:-  " + runtime(process.uptime()) + "*\n\n> *✨ Powered By SUHAS-MD-V9 💞* ";
    return _0x3cc0d0('' + _0x4f59f6);
  } catch (_0x2f5e4f) {
    console.log(_0x2f5e4f);
    _0x3cc0d0('' + _0x2f5e4f);
  }
});
cmd({
  'pattern': 'system',
  'alias': ["status", "botinfo"],
  'desc': "check up time",
  'category': "main",
  'react': '⚙️',
  'filename': __filename
}, async (_0x4e0815, _0x2b4658, _0x1fdd21, {
  from: _0x57755f,
  quoted: _0x19dbc4,
  body: _0x3ca9df,
  isCmd: _0x3dd0d2,
  command: _0xc64ac9,
  args: _0x26bc0b,
  q: _0x24bc60,
  isGroup: _0x466ad5,
  sender: _0x38de97,
  senderNumber: _0x11b9f7,
  botNumber2: _0x5e0080,
  botNumber: _0x54f2af,
  pushname: _0x234716,
  isMe: _0x6afc1b,
  isOwner: _0x1fa017,
  groupMetadata: _0x43f455,
  groupName: _0x38d880,
  participants: _0x5da15b,
  groupAdmins: _0x322a2e,
  isBotAdmins: _0x3bcc5a,
  isAdmins: _0xb61ee8,
  reply: _0x540452
}) => {
  try {
    let _0x157148 = "\n*┌──────────────────➤*\n*├ ⏳Uptime:-  " + runtime(process.uptime()) + "*    \n*├ 📟Ram Usage:- " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB*\n*├ ⚙️Host Name:- " + os.hostname() + "*\n*├ 👨‍💻Owner:- SUHAS-MD*   \n*├ 🤖version: 9.0.0*\n*└──────────────────────➤*\n    \n> *✨ Powered By SUHAS-MD-V9 💞*\n";
    return _0x540452('' + _0x157148);
  } catch (_0x25c2df) {
    console.log(_0x25c2df);
    _0x540452('' + _0x25c2df);
  }
});
cmd({
  'pattern': 'ping',
  'desc': "Check bot ping.",
  'category': "main",
  'filename': __filename
}, async (_0x56f806, _0x204d86, _0x320d30, {
  from: _0x3a9c66,
  quoted: _0x575894,
  body: _0x1d8b0f,
  isCmd: _0x4b3176,
  command: _0x11368a,
  args: _0x43b1be,
  q: _0x12bed2,
  isGroup: _0x50592f,
  sender: _0x37d13e,
  senderNumber: _0x3476e5,
  botNumber2: _0x4247e5,
  botNumber: _0x36a00a,
  pushname: _0x1dfd7f,
  isMe: _0x531074,
  isOwner: _0x3f07e4,
  groupMetadata: _0x11c90d,
  groupName: _0xb601fa,
  participants: _0x401adf,
  groupAdmins: _0x2d07cb,
  isBotAdmins: _0x4c1b15,
  isAdmins: _0x25a6cc,
  reply: _0x2a0ea0
}) => {
  try {
    const _0x5a4892 = Date.now();
    const _0x461d88 = await _0x56f806.sendMessage(_0x3a9c66, {
      'text': "*🐦‍🔥 𝚂𝚄𝙷𝙰𝚂-𝙼𝙳-𝚅9 𝙿𝚒𝚗𝚐𝚒𝚗𝚐...*"
    }, {
      'quoted': _0x204d86
    });
    const _0x309095 = Date.now();
    const _0x400626 = _0x309095 - _0x5a4892;
    const _0x290732 = _0x3b72b6 => new Promise(_0x24f9c4 => setTimeout(_0x24f9c4, _0x3b72b6));
    await _0x290732(0x3e8);
    await _0x56f806.sendMessage(_0x3a9c66, {
      'text': "*🐦‍🔥 𝚂𝚄𝙷𝙰𝚂-𝙼𝙳-𝚅9 𝚂𝚙𝚎𝚎𝚍 ⚡ :* _" + _0x400626 + " ms_",
      'edit': _0x461d88.key
    });
  } catch (_0x1fcbc4) {
    console.log(_0x1fcbc4);
    _0x2a0ea0('' + _0x1fcbc4);
  }
});
