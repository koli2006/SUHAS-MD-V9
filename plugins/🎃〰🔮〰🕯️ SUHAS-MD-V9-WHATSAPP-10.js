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
} = require("../command");
const {
  sleep
} = require("../lib/functions");
cmd({
  'pattern': "restart",
  'desc': "restart the bot SUHAS-MD🔥",
  'category': 'owner',
  'react': '♻️',
  'filename': __filename
}, async (_0x3ad085, _0x3d129f, _0x405919, {
  from: _0x87b32a,
  quoted: _0x157347,
  body: _0x23583f,
  isCmd: _0xf5f98f,
  command: _0x44695e,
  args: _0x325909,
  q: _0xe0827c,
  isGroup: _0x4b4ec8,
  sender: _0x279cc4,
  senderNumber: _0x88f0aa,
  botNumber2: _0x1aa591,
  botNumber: _0x40d59f,
  pushname: _0x16031d,
  isMe: _0x44347a,
  isOwner: _0x35fcc5,
  groupMetadata: _0x2cd728,
  groupName: _0x469a1c,
  participants: _0x2ccfab,
  groupAdmins: _0x3d1781,
  isBotAdmins: _0x12c377,
  isAdmins: _0xf6a048,
  reply: _0x59e79c
}) => {
  try {
    const {
      exec: _0x1cb69a
    } = require('child_process');
    _0x59e79c("♻️ SUHAS-MD-V9 Restarting...");
    await sleep(0x5dc);
    _0x1cb69a("pm2 restart all");
  } catch (_0x5d33b6) {
    console.log(_0x5d33b6);
    _0x59e79c('' + _0x5d33b6);
  }
});
