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
cmd({
  'pattern': 'menu',
  'alias': ["list", "help"],
  'desc': "menu the bot",
  'react': "🗒️",
  'category': "main"
}, async (_0x3522ce, _0x19de2d, _0x443ef1, {
  from: _0x514ee8,
  quoted: _0x1674ab,
  body: _0x1a2aab,
  isCmd: _0x21a623,
  command: _0x3dcc2b,
  args: _0x5b7ccd,
  q: _0x451c29,
  isGroup: _0x2606b2,
  sender: _0x14f36e,
  senderNumber: _0x1ccf94,
  botNumber2: _0x2bc9cc,
  botNumber: _0x45f4d9,
  pushname: _0x11b82c,
  isMe: _0x1a2f02,
  isOwner: _0xeda0bf,
  groupMetadata: _0x296993,
  groupName: _0x3c0ef4,
  participants: _0x3f9d7c,
  groupAdmins: _0x149f0a,
  isBotAdmins: _0x306f2e,
  isAdmins: _0x317f80,
  reply: _0x1b2926
}) => {
  try {
    let _0x34a2e5 = "*👋 Hello " + _0x11b82c + "*\n\n*╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」─────○●►*\n*│◈ ʀᴜɴᴛɪᴍᴇ : " + runtime(process.uptime()) + "*\n*│◈ ʀᴀᴍ ᴜꜱᴀɢᴇ : " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB*\n*╰─────────────────────○●►*\n\n*_🔢 𝗥𝗲𝗽𝗹𝘆 𝘁𝗵𝗲 𝗡𝘂𝗺𝗯𝗲𝗿 𝗬𝗼𝘂 𝗪𝗮𝗻𝘁 ✨_*\n\n*╭────乂 🗒️𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮  乂──── ➻*\n*╎ 🐦‍🔥 1  AI MENU*                    \n*╎ 🐦‍🔥 2  FUN MENU*      \n*╎ 🐦‍🔥 3  LOGO MENU*\n*╎ 🐦‍🔥 4  NSFW MENU*\n*╎ 🐦‍🔥 5  NEWS MENU* \n*╎ 🐦‍🔥 6  OTHER MENU*\n*╎ 🐦‍🔥 7  GROUP MENU*\n*╎ 🐦‍🔥 8  OWNER MENU*\n*╎ 🐦‍🔥 9  SERACH MENU*  \n*╎ 🐦‍🔥 10  RANDOM MENU*\n*╎ 🐦‍🔥 11 CONVERT MENU*\n*╎ 🐦‍🔥 12 DOWNLOAD MENU*\n*╎ 🐦‍🔥 13 MOVIE DOWN MENU*\n*╰───────────────────── ➻*\n\n🎉Sᴜʜᴀꜱ Mᴅ Bᴏᴛ Dᴇᴘʟᴏʏ Vɪᴅᴇᴏ.\nhttps://youtu.be/k0Jwrx1j5v4?si=Yy74MV41TvXVErsz\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*";
    await _0x3522ce.sendMessage(_0x514ee8, {
      'audio': {
        'url': 'media/menu.mp3'
      },
      'mimetype': "audio/mpeg",
      'ptt': true
    }, {
      'quoted': _0x19de2d
    });
    const _0x516ca4 = await _0x3522ce.sendMessage(_0x514ee8, {
      'image': {
        'url': 'https://i.ibb.co/mbP3mpW/20241207-221016.jpg'
      },
      'caption': _0x34a2e5
    }, {
      'quoted': _0x19de2d
    });
    await _0x443ef1.react('✅');
    _0x3522ce.ev.on("messages.upsert", async _0x57057e => {
      const _0x278dcf = _0x57057e.messages[0x0];
      if (!_0x278dcf.message || !_0x278dcf.message.extendedTextMessage) {
        return;
      }
      const _0x3e7ef8 = _0x278dcf.message.extendedTextMessage.text.trim();
      if (_0x278dcf.message.extendedTextMessage.contextInfo && _0x278dcf.message.extendedTextMessage.contextInfo.stanzaId === _0x516ca4.key.id) {
        switch (_0x3e7ef8) {
          case '1':
            _0x1b2926("\n> 🧬𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗔𝗜 𝗠𝗘𝗡𝗨💗\n\n🧬◦ *ᴄʀᴇᴀᴛᴏʀ* : ꜱᴜʜᴀꜱ ᴘᴀᴛʜꜱɪɴᴅᴜ⚡\n🧬◦ *ᴠᴇʀsɪᴏɴs* : ᴠ.9.0.0⚡\n🧬◦ *ᴍᴇɴᴜ ᴄᴍᴅ* : ᴍᴇɴᴜ⚡\n🧬◦ *ꜱᴜʙꜱᴄʀɪʙᴇ ᴍʏ ʏᴛ ᴄʜᴀɴɴᴇʟ* :  https://youtube.com/@suhasbro\n🧬◦ *ᴊᴏɪɴ ᴍʏ ᴄʜᴀɴɴᴇʟ* :  https://whatsapp.com/channel/0029VagKNUe96H4IdMbr9f2o\n\n\n*╭─ 乂 🧠 ＡＩ 🧠 ── ◦•◦❥•*\n*╎*\n*╎🏷️Cᴍᴅ -  .aiimg*\n*╎🔖 Dᴇꜱᴄ-  Create a Image Using AI.*\n*╎*\n*╎🏷️Cᴍᴅ -  .aiimg1/.aiimg2/.aimg3*\n*╎🔖 Dᴇꜱᴄ-  Create a Image Using AI.*\n*╎*\n*╎🏷️Cᴍᴅ -  .imaggen/.imggen1/.imggen2*\n*╎🔖 Dᴇꜱᴄ-  Create a Image Using AI.*\n*╎*\n*╎🏷️Cᴍᴅ -  .imggen3/.imggen4/.imggen5*\n*╎🔖 Dᴇꜱᴄ-  Create a Image Using AI.*\n*╎*\n*╎🏷️Cᴍᴅ -  .ai/.ai1/.ai2*\n*╎🔖 Dᴇꜱᴄ-  Chat with AI.*\n*╎*\n*╎🏷️Cᴍᴅ -  .gpt/.chatgpt*\n*╎🔖 Dᴇꜱᴄ-  Chat with Gpt4*\n*╎*\n*╎🏷️Cᴍᴅ -  .dalle*\n*╎🔖 Dᴇꜱᴄ-  Chat with Black Box*\n*╎*\n*╰───────────────────◦•◦❥•*\n\n🎉Sᴜʜᴀꜱ Mᴅ Bᴏᴛ Dᴇᴘʟᴏʏ Vɪᴅᴇᴏ.\nhttps://youtu.be/k0Jwrx1j5v4?si=Yy74MV41TvXVErsz\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*");
            break;
          case '2':
            _0x1b2926("\n> 🧬𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨💗\n\n🧬◦ *ᴄʀᴇᴀᴛᴏʀ* : ꜱᴜʜᴀꜱ ᴘᴀᴛʜꜱɪɴᴅᴜ⚡\n🧬◦ *ᴠᴇʀsɪᴏɴs* : ᴠ.9.0.0⚡\n🧬◦ *ᴍᴇɴᴜ ᴄᴍᴅ* : ᴍᴇɴᴜ⚡\n🧬◦ *ꜱᴜʙꜱᴄʀɪʙᴇ ᴍʏ ʏᴛ ᴄʜᴀɴɴᴇʟ* :  https://youtube.com/@suhasbro\n🧬◦ *ᴊᴏɪɴ ᴍʏ ᴄʜᴀɴɴᴇʟ* :  https://whatsapp.com/channel/0029VagKNUe96H4IdMbr9f2o\n\n\n*╭─ 乂 🤭 F U N 🤭 ── ◦•◦❥•*\n*╎*\n*╎🏷️Cᴍᴅ -  .fact* \n*╎🔖 Dᴇꜱᴄ-  Random Fun Fact.*\n*╎*\n*╎🏷️Cᴍᴅ -  .hack*\n*╎🔖 Dᴇꜱᴄ-  Hacking Your System.*\n*╎*\n*╎🏷️Cᴍᴅ -  .quote*\n*╎🔖 Dᴇꜱᴄ-  Random Quote Text.*\n*╎*\n*╰───────────────────◦•◦❥•*\n\n🎉Sᴜʜᴀꜱ Mᴅ Bᴏᴛ Dᴇᴘʟᴏʏ Vɪᴅᴇᴏ.\nhttps://youtu.be/k0Jwrx1j5v4?si=Yy74MV41TvXVErsz\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*");
            break;
          case '4':
            _0x1b2926("\n> 🧬𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨💗\n\n🧬◦ *ᴄʀᴇᴀᴛᴏʀ* : ꜱᴜʜᴀꜱ ᴘᴀᴛʜꜱɪɴᴅᴜ⚡\n🧬◦ *ᴠᴇʀsɪᴏɴs* : ᴠ.9.0.0⚡\n🧬◦ *ᴍᴇɴᴜ ᴄᴍᴅ* : ᴍᴇɴᴜ⚡\n🧬◦ *ꜱᴜʙꜱᴄʀɪʙᴇ ᴍʏ ʏᴛ ᴄʜᴀɴɴᴇʟ* :  https://youtube.com/@suhasbro\n🧬◦ *ᴊᴏɪɴ ᴍʏ ᴄʜᴀɴɴᴇʟ* :  https://whatsapp.com/channel/0029VagKNUe96H4IdMbr9f2o\n\n\n*╭─ 乂 🔞 N S F W 🔞 ── ◦•◦❥•*\n*╎*\n*╎🏷️Cᴍᴅ -  .bysexdl/.dlbysex/.bysexdown*\n*╎🔖 Dᴇꜱᴄ-  Download 18+ Videos in www.bysex.com.*\n*╎*\n*╎🏷️Cᴍᴅ -  .pussybdl/.pussydown*\n*╎🔖 Dᴇꜱᴄ-  Download 18+ Videos in www.pussy.com*\n*╎*\n*╎🏷️Cᴍᴅ -  .hentaivid*\n*╎🔖 Dᴇꜱᴄ-  Download 18+ Videos in www.hentaivid.com*\n*╎*\n*╎🏷️Cᴍᴅ -  .blowjob*\n*╎🔖 Dᴇꜱᴄ-  Random Blowjob Pics.*\n*╎*\n*╎🏷️Cᴍᴅ -  .xneko*\n*╎🔖 Dᴇꜱᴄ-  Random xneko Pics.*\n*╎*\n*╎🏷️Cᴍᴅ -  .xgirl*\n*╎🔖 Dᴇꜱᴄ-  Random xgirl Pics.*\n*╎*\n*╎🏷️Cᴍᴅ -  .trap*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random trap Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .sexygirl*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random sexygirl Images.*\n*╎*\n*╰───────────────────◦•◦❥•*\n\n🎉Sᴜʜᴀꜱ Mᴅ Bᴏᴛ Dᴇᴘʟᴏʏ Vɪᴅᴇᴏ.\nhttps://youtu.be/k0Jwrx1j5v4?si=Yy74MV41TvXVErsz\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*");
            break;
          case '5':
            _0x1b2926("\n> 🧬𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗡𝗘𝗪𝗦 𝗠𝗘𝗡𝗨💗\n\n🧬◦ *ᴄʀᴇᴀᴛᴏʀ* : ꜱᴜʜᴀꜱ ᴘᴀᴛʜꜱɪɴᴅᴜ⚡\n🧬◦ *ᴠᴇʀsɪᴏɴs* : ᴠ.9.0.0⚡\n🧬◦ *ᴍᴇɴᴜ ᴄᴍᴅ* : ᴍᴇɴᴜ⚡\n🧬◦ *ꜱᴜʙꜱᴄʀɪʙᴇ ᴍʏ ʏᴛ ᴄʜᴀɴɴᴇʟ* :  https://youtube.com/@suhasbro\n🧬◦ *ᴊᴏɪɴ ᴍʏ ᴄʜᴀɴɴᴇʟ* :  https://whatsapp.com/channel/0029VagKNUe96H4IdMbr9f2o\n\n\n*╭─ 乂 📰 N E W S 📰 ── ◦•◦❥•*\n*╎*\n*╎🏷️Cᴍᴅ -  .news*\n*╎🔖 Dᴇꜱᴄ-  Get English News.*\n*╎*\n*╎🏷️Cᴍᴅ -  .tech/.technews*\n*╎🔖 Dᴇꜱᴄ-  Get Technology News.*\n*╎*\n*╎🏷️Cᴍᴅ -  .startnews*\n*╎🔖 Dᴇꜱᴄ-  Active 24/7 Sinhala News.*\n*╎*\n*╎🏷️Cᴍᴅ -  .stopnews*\n*╎🔖 Dᴇꜱᴄ-  Deactive 24/7 Sinhala News.*\n*╎*\n*╰───────────────────◦•◦❥•*\n\n🎉Sᴜʜᴀꜱ Mᴅ Bᴏᴛ Dᴇᴘʟᴏʏ Vɪᴅᴇᴏ.\nhttps://youtu.be/k0Jwrx1j5v4?si=Yy74MV41TvXVErsz\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*");
            break;
          case '6':
            _0x1b2926("\n> 🧬𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨💗\n\n🧬◦ *ᴄʀᴇᴀᴛᴏʀ* : ꜱᴜʜᴀꜱ ᴘᴀᴛʜꜱɪɴᴅᴜ⚡\n🧬◦ *ᴠᴇʀsɪᴏɴs* : ᴠ.9.0.0⚡\n🧬◦ *ᴍᴇɴᴜ ᴄᴍᴅ* : ᴍᴇɴᴜ⚡\n🧬◦ *ꜱᴜʙꜱᴄʀɪʙᴇ ᴍʏ ʏᴛ ᴄʜᴀɴɴᴇʟ* :  https://youtube.com/@suhasbro\n🧬◦ *ᴊᴏɪɴ ᴍʏ ᴄʜᴀɴɴᴇʟ* :  https://whatsapp.com/channel/0029VagKNUe96H4IdMbr9f2o\n\n\n*╭─ 乂 ♨️ O Ｔ H E Ｒ ♨️ ── ◦•◦❥•*\n*╎*\n*╎🏷️Cᴍᴅ -  .menu/.list/.help*\n*╎🔖 Dᴇꜱᴄ-  Get the Bot Main Menu.*\n*╎*\n*╎🏷️Cᴍᴅ -  .allmenu/.botmenu*\n*╎🔖 Dᴇꜱᴄ-  Get the Bot All Menu.*\n*╎*\n*╎🏷️Cᴍᴅ -  .alive*\n*╎🔖 Dᴇꜱᴄ-  Check Bot Online or Offline.*\n*╎*\n*╎🏷️Cᴍᴅ -  .about*\n*╎🔖 Dᴇꜱᴄ-  Get SUHAS-MD-V9 Owner Info.*\n*╎*\n*╎🏷️Cᴍᴅ -  .runtime/.uptime*\n*╎🔖 Dᴇꜱᴄ-  Get Bot Runing Time.*\n*╎*\n*╎🏷️Cᴍᴅ -  .owner*\n*╎🔖 Dᴇꜱᴄ-  Get SUHAS-MD-V9 Owner.*\n*╎*\n*╎🏷️Cᴍᴅ -  .ping*\n*╎🔖 Dᴇꜱᴄ-  Check Bot Speed.*\n*╎*\n*╎🏷️Cᴍᴅ -  .repo*\n*╎🔖 Dᴇꜱᴄ-  Get Bot Github Repository.*\n*╎*\n*╎🏷️Cᴍᴅ -  .suhasbro*\n*╎🔖 Dᴇꜱᴄ-  Get Suhas Bro Channel.*\n*╎*\n*╎🏷️Cᴍᴅ -  .support*\n*╎🔖 Dᴇꜱᴄ-  SUHAS-MD-V9 Support Group.*\n*╎*\n*╎🏷️Cᴍᴅ -  .system/.botinfo/.status*\n*╎🔖 Dᴇꜱᴄ-  Get the Bot System Details.*\n*╎*\n*╎🏷️Cᴍᴅ -  .gpass/.googlepw*\n*╎🔖 Dᴇꜱᴄ-  Generate a Strong Password.*\n*╎*\n*╎🏷️Cᴍᴅ -  .cal/.calculator*\n*╎🔖 Dᴇꜱᴄ-  Simple Math Tool.*\n*╎*\n*╎🏷️Cᴍᴅ -  .reverse*\n*╎🔖 Dᴇꜱᴄ-  Reversed the Text.*\n*╎*\n*╎🏷️Cᴍᴅ -  .tempmail*\n*╎🔖 Dᴇꜱᴄ-  Get the Temporary Mail.*\n*╎*\n*╎🏷️Cᴍᴅ -  .checkmail*\n*╎🔖 Dᴇꜱᴄ-  Check the Temporary Mail.*\n*╎*\n*╎🏷️Cᴍᴅ -  .delmail*\n*╎🔖 Dᴇꜱᴄ-  Delete the Temporary Mail.*\n*╎*\n*╎🏷️Cᴍᴅ -  .encode*\n*╎🔖 Dᴇꜱᴄ-  Encode the Text.*\n*╎*\n*╎🏷️Cᴍᴅ -  .decode*\n*╎🔖 Dᴇꜱᴄ-  Decode the Text.*\n*╎*\n*╰───────────────────◦•◦❥•*\n\n🎉Sᴜʜᴀꜱ Mᴅ Bᴏᴛ Dᴇᴘʟᴏʏ Vɪᴅᴇᴏ.\nhttps://youtu.be/k0Jwrx1j5v4?si=Yy74MV41TvXVErsz\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*");
            break;
          case '7':
            _0x1b2926("\n> 🧬𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨💗\n\n🧬◦ *ᴄʀᴇᴀᴛᴏʀ* : ꜱᴜʜᴀꜱ ᴘᴀᴛʜꜱɪɴᴅᴜ⚡\n🧬◦ *ᴠᴇʀsɪᴏɴs* : ᴠ.9.0.0⚡\n🧬◦ *ᴍᴇɴᴜ ᴄᴍᴅ* : ᴍᴇɴᴜ⚡\n🧬◦ *ꜱᴜʙꜱᴄʀɪʙᴇ ᴍʏ ʏᴛ ᴄʜᴀɴɴᴇʟ* :  https://youtube.com/@suhasbro\n🧬◦ *ᴊᴏɪɴ ᴍʏ ᴄʜᴀɴɴᴇʟ* :  https://whatsapp.com/channel/0029VagKNUe96H4IdMbr9f2o\n\n\n*╭─ 乂 👥 ＧＲＯＵＰ 👥 ── ◦•◦❥•*\n*╎*\n*╎🏷️Cᴍᴅ -  .remove*\n*╎🔖 Dᴇꜱᴄ-  Removed the Member.*\n*╎*\n*╎🏷️Cᴍᴅ -  .add*\n*╎🔖 Dᴇꜱᴄ-  Add the New Member*\n*╎*\n*╎🏷️Cᴍᴅ -  .del/.delete*\n*╎🔖 Dᴇꜱᴄ-  Deleted the Message.*\n*╎*\n*╎🏷️Cᴍᴅ -  .kick*\n*╎🔖 Dᴇꜱᴄ-  Kick the Member.*\n*╎*\n*╎🏷️Cᴍᴅ -  .setgoodbye*\n*╎🔖 Dᴇꜱᴄ-  Add Your Bye Message.*\n*╎*\n*╎🏷️Cᴍᴅ -  .setwelcome*\n*╎🔖 Dᴇꜱᴄ-  Add Your Welcome Message.*\n*╎*\n*╎🏷️Cᴍᴅ -  .promote*\n*╎🔖 Dᴇꜱᴄ-  Give the Addmin in Group*\n*╎*\n*╎🏷️Cᴍᴅ -  .demote*\n*╎🔖 Dᴇꜱᴄ-  Dismissed The Addmin.*\n*╎*\n*╎🏷️Cᴍᴅ -  .getpic*\n*╎🔖 Dᴇꜱᴄ-  Get the Group Image.*\n*╎*\n*╎🏷️Cᴍᴅ -  .link*\n*╎🔖 Dᴇꜱᴄ-  Get the Group Link.*\n*╎*\n*╎🏷️Cᴍᴅ -  .join*\n*╎🔖 Dᴇꜱᴄ-  Joined the Group.*\n*╎*\n*╎🏷️Cᴍᴅ -  .left*\n*╎🔖 Dᴇꜱᴄ-  Leaved the Group.*\n*╎*\n*╎🏷️Cᴍᴅ -  .kickall*\n*╎🔖 Dᴇꜱᴄ-  Kicked the Group Members.*\n*╎*\n*╎🏷️Cᴍᴅ -  .endgroup*\n*╎🔖 Dᴇꜱᴄ-  End the Group.*\n*╰───────────────────◦•◦❥•*\n\n🎉Sᴜʜᴀꜱ Mᴅ Bᴏᴛ Dᴇᴘʟᴏʏ Vɪᴅᴇᴏ.\nhttps://youtu.be/k0Jwrx1j5v4?si=Yy74MV41TvXVErsz\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*");
            break;
          case '8':
            _0x1b2926("\n> 🧬𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨💗\n\n🧬◦ *ᴄʀᴇᴀᴛᴏʀ* : ꜱᴜʜᴀꜱ ᴘᴀᴛʜꜱɪɴᴅᴜ⚡\n🧬◦ *ᴠᴇʀsɪᴏɴs* : ᴠ.9.0.0⚡\n🧬◦ *ᴍᴇɴᴜ ᴄᴍᴅ* : ᴍᴇɴᴜ⚡\n🧬◦ *ꜱᴜʙꜱᴄʀɪʙᴇ ᴍʏ ʏᴛ ᴄʜᴀɴɴᴇʟ* :  https://youtube.com/@suhasbro\n🧬◦ *ᴊᴏɪɴ ᴍʏ ᴄʜᴀɴɴᴇʟ* :  https://whatsapp.com/channel/0029VagKNUe96H4IdMbr9f2o\n\n\n*╭─ 乂 👨‍💻 ＯＷＮＥＲ 👨‍💻 ── ◦•◦❥•*\n*╎*\n*╎🏷️Cᴍᴅ -  .restart*\n*╎🔖 Dᴇꜱᴄ-  Restart the SUHAS-MD-V9.*\n*╎*\n*╎🏷️Cᴍᴅ -  .msginfo*\n*╎🔖 Dᴇꜱᴄ-  Get the Message Details.*\n*╎*\n*╎🏷️Cᴍᴅ -  .setautobio*\n*╎🔖 Dᴇꜱᴄ-  Update Your Bio.*\n*╎*\n*╎🏷️Cᴍᴅ -  .mute*\n*╎🔖 Dᴇꜱᴄ-  Mute the Group.*\n*╎*\n*╎🏷️Cᴍᴅ -  .unmute*\n*╎🔖 Dᴇꜱᴄ-  Unmute the Group.*\n*╎*\n*╎🏷️Cᴍᴅ -  .shutdown*\n*╎🔖 Dᴇꜱᴄ-  Shutdown the SUHAS-MD-V9.*\n*╎*\n*╎🏷️Cᴍᴅ -  .block*\n*╎🔖 Dᴇꜱᴄ-  Blocked the User.*\n*╎*\n*╎🏷️Cᴍᴅ -  .unblock*\n*╎🔖 Dᴇꜱᴄ-  Unblocked the User.*\n*╎*\n*╎🏷️Cᴍᴅ -  .clearchats*\n*╎🔖 Dᴇꜱᴄ-  Cleared the Chat.*\n*╎*\n*╎🏷️Cᴍᴅ -  .jid*\n*╎🔖 Dᴇꜱᴄ-  Get the User Jid.*\n*╎*\n*╎🏷️Cᴍᴅ -  .gjid*\n*╎🔖 Dᴇꜱᴄ-  Get the Group Jid.*\n*╎*\n*╎🏷️Cᴍᴅ -  .newjid/.sjid*\n*╎🔖 Dᴇꜱᴄ-  Shere the Message Using Jid.*\n*╎*\n*╰───────────────────◦•◦❥•*\n\n🎉Sᴜʜᴀꜱ Mᴅ Bᴏᴛ Dᴇᴘʟᴏʏ Vɪᴅᴇᴏ.\nhttps://youtu.be/k0Jwrx1j5v4?si=Yy74MV41TvXVErsz\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*");
            break;
          case '9':
            _0x1b2926("\n> 🧬𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨💗\n\n🧬◦ *ᴄʀᴇᴀᴛᴏʀ* : ꜱᴜʜᴀꜱ ᴘᴀᴛʜꜱɪɴᴅᴜ⚡\n🧬◦ *ᴠᴇʀsɪᴏɴs* : ᴠ.9.0.0⚡\n🧬◦ *ᴍᴇɴᴜ ᴄᴍᴅ* : ᴍᴇɴᴜ⚡\n🧬◦ *ꜱᴜʙꜱᴄʀɪʙᴇ ᴍʏ ʏᴛ ᴄʜᴀɴɴᴇʟ* :  https://youtube.com/@suhasbro\n🧬◦ *ᴊᴏɪɴ ᴍʏ ᴄʜᴀɴɴᴇʟ* :  https://whatsapp.com/channel/0029VagKNUe96H4IdMbr9f2o\n\n\n*╭─ 乂 🔎 S E A R C H 🔍 ── ◦•◦❥•*\n*╎*\n*╎🏷️Cᴍᴅ -  .yts/.ytserach*\n*╎🔖 Dᴇꜱᴄ-  Searched the YouTube List.*\n*╎*\n*╎🏷️Cᴍᴅ -  .lyric/.lyrics*\n*╎🔖 Dᴇꜱᴄ-  Searched the Song Lyrics.*\n*╎*\n*╎🏷️Cᴍᴅ -  .ttinfo/.tiktokinfo*\n*╎🔖 Dᴇꜱᴄ-  Searched the TikTok User Info.*\n*╎*\n*╎🏷️Cᴍᴅ -  .img/.image*\n*╎🔖 Dᴇꜱᴄ-  Searched the Google Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .xvideos*\n*╎🔖 Dᴇꜱᴄ-  Search the Link in www.xvideos.com*\n*╎*\n*╎🏷️Cᴍᴅ -  .xnxxs*\n*╎🔖 Dᴇꜱᴄ-  Searched the Link in www.xnxx.com*\n*╎*\n*╎🏷️Cᴍᴅ -  .define*\n*╎🔖 Dᴇꜱᴄ-  Searched the Random Define.*\n*╎*\n*╎🏷️Cᴍᴅ -  .githubstalk*\n*╎🔖 Dᴇꜱᴄ-  Searched the Github User Info.*\n*╎*\n*╎🏷️Cᴍᴅ -  .npmstalk/.npm*\n*╎🔖 Dᴇꜱᴄ-  Searched the Npm Info.*\n*╎*\n*╎🏷️Cᴍᴅ -  .instastalk*\n*╎🔖 Dᴇꜱᴄ-  Searched the Insta User Info.*\n*╎*\n*╎🏷️Cᴍᴅ -  .iplookup/.ipinfo*\n*╎🔖 Dᴇꜱᴄ-  Searched the IP Info.*\n*╎*\n*╎🏷️Cᴍᴅ -  .wallpaper*\n*╎🔖 Dᴇꜱᴄ-  Searched the Random Wallpapers*\n*╎*\n*╰───────────────────◦•◦❥•*\n\n🎉Sᴜʜᴀꜱ Mᴅ Bᴏᴛ Dᴇᴘʟᴏʏ Vɪᴅᴇᴏ.\nhttps://youtu.be/k0Jwrx1j5v4?si=Yy74MV41TvXVErsz\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*");
            break;
          case '10':
            _0x1b2926("\n> 🧬𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗥𝗔𝗡𝗗𝗢𝗠 𝗠𝗘𝗡𝗨💗\n\n🧬◦ *ᴄʀᴇᴀᴛᴏʀ* : ꜱᴜʜᴀꜱ ᴘᴀᴛʜꜱɪɴᴅᴜ⚡\n🧬◦ *ᴠᴇʀsɪᴏɴs* : ᴠ.9.0.0⚡\n🧬◦ *ᴍᴇɴᴜ ᴄᴍᴅ* : ᴍᴇɴᴜ⚡\n🧬◦ *ꜱᴜʙꜱᴄʀɪʙᴇ ᴍʏ ʏᴛ ᴄʜᴀɴɴᴇʟ* :  https://youtube.com/@suhasbro\n🧬◦ *ᴊᴏɪɴ ᴍʏ ᴄʜᴀɴɴᴇʟ* :  https://whatsapp.com/channel/0029VagKNUe96H4IdMbr9f2o\n\n\n*╭─ 乂 🧚‍♂️ R A N D O M 🧚‍♂️ ── ◦•◦❥•*\n*╎*\n*╎🏷️Cᴍᴅ -  .dog/.puppy*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random Dog Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .suhas*\n*╎🔖 Dᴇꜱᴄ-  Fetch 05 Suhas Md Images.*\n*╎*\n*╎*\n*╎🏷️Cᴍᴅ -  .anime*\n*╎🔖 Dᴇꜱᴄ-  Fetch 05 Aime Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .loli*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random Loli Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .neko*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random Neko Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .maid*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random Maid Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .cringe*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random cringe Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .smug*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random smug Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .dance*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random dance Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .poke*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random poke Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .wink*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random wink Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .happy*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random happy Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .kick*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random kick Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .kill*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random kill Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .glomp*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random glomp Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .slap*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random slap Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .bite*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random bite Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .nom*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random nom Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .wave*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random wave Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .smile*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random smile Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .yeet*\n*╎🔖 Dᴇꜱᴄ-  Fetch yeet dance Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .bonk*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random bonk Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .pat*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random pat Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .lick*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random lick Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .kiss*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random kiss Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .hug*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random hug Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .cry*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random cry Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .cuddle*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random cuddle Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .bully*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random dance Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .megumin*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random megumin Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .shinobu*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random shinobu Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .animegirl/.animegirl1*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random Girl Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .animegirl2/.animegirl3*\n*╎🔖 Dᴇꜱᴄ-  Fetch Random Grirl Images.*\n*╎*\n*╰───────────────────◦•◦❥•*\n\n🎉Sᴜʜᴀꜱ Mᴅ Bᴏᴛ Dᴇᴘʟᴏʏ Vɪᴅᴇᴏ.\nhttps://youtu.be/k0Jwrx1j5v4?si=Yy74MV41TvXVErsz\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*");
            break;
          case '11':
            _0x1b2926("\n> 🧬𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨💗\n\n🧬◦ *ᴄʀᴇᴀᴛᴏʀ* : ꜱᴜʜᴀꜱ ᴘᴀᴛʜꜱɪɴᴅᴜ⚡\n🧬◦ *ᴠᴇʀsɪᴏɴs* : ᴠ.9.0.0⚡\n🧬◦ *ᴍᴇɴᴜ ᴄᴍᴅ* : ᴍᴇɴᴜ⚡\n🧬◦ *ꜱᴜʙꜱᴄʀɪʙᴇ ᴍʏ ʏᴛ ᴄʜᴀɴɴᴇʟ* :  https://youtube.com/@suhasbro\n🧬◦ *ᴊᴏɪɴ ᴍʏ ᴄʜᴀɴɴᴇʟ* :  https://whatsapp.com/channel/0029VagKNUe96H4IdMbr9f2o\n\n\n*╭─ 乂 🎡ＣＯＮＶＥＲＴＥＲ 🎡 ── ◦•◦❥•*\n*╎*\n*╎🏷️Cᴍᴅ -  .s/.stic/.sticker*\n*╎🔖 Dᴇꜱᴄ-  Convert a Image the Sticker.*\n*╎*\n*╎🏷️Cᴍᴅ -  .tts/.texttovoice*\n*╎🔖 Dᴇꜱᴄ-  Convert a Text To Ai Sound.*\n*╎*\n*╎🏷️Cᴍᴅ -  .textstyle*\n*╎🔖 Dᴇꜱᴄ-  Create a Fancy Texts.*\n*╎*\n*╎🏷️Cᴍᴅ -  .fancy/.fancytext*\n*╎🔖 Dᴇꜱᴄ-  Create a Fancy Texts.*\n*╎*\n*╎🏷️Cᴍᴅ -  .ss/.screenshot*\n*╎🔖 Dᴇꜱᴄ-  Get the ScreenShots in Web.*\n*╎*\n*╎🏷️Cᴍᴅ -  .img2url/.imgtourl*\n*╎🔖 Dᴇꜱᴄ-  Convert Image to Link.*\n*╎*\n*╎🏷️Cᴍᴅ -  .trt*\n*╎🔖 Dᴇꜱᴄ-  Translate Text Any Language.*\n*╎*\n*╎🏷️Cᴍᴅ -  .convert*\n*╎🔖 Dᴇꜱᴄ-  Covert Tool.*\n*╎*\n*╎🏷️Cᴍᴅ -  .currency*\n*╎🔖 Dᴇꜱᴄ-  Covert Currency to Amount.*\n*╎*\n*╎🏷️Cᴍᴅ -  .img2url/.imgtourl*\n*╎🔖 Dᴇꜱᴄ-  Convert Image to Link.*\n*╎*\n*╎🏷️Cᴍᴅ -  .qcode/.qrcode*\n*╎🔖 Dᴇꜱᴄ-  Convert Text to Qrcode.*\n*╎*\n*╎🏷️Cᴍᴅ -  .bcode/.barcode*\n*╎🔖 Dᴇꜱᴄ-  Convert Text to Barcode.*\n*╎*\n*╰───────────────────◦•◦❥•*\n\n🎉Sᴜʜᴀꜱ Mᴅ Bᴏᴛ Dᴇᴘʟᴏʏ Vɪᴅᴇᴏ.\nhttps://youtu.be/k0Jwrx1j5v4?si=Yy74MV41TvXVErsz\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*");
            break;
          case '12':
            _0x1b2926("\n> 🧬𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨💗\n\n🧬◦ *ᴄʀᴇᴀᴛᴏʀ* : ꜱᴜʜᴀꜱ ᴘᴀᴛʜꜱɪɴᴅᴜ⚡\n🧬◦ *ᴠᴇʀsɪᴏɴs* : ᴠ.9.0.0⚡\n🧬◦ *ᴍᴇɴᴜ ᴄᴍᴅ* : ᴍᴇɴᴜ⚡\n🧬◦ *ꜱᴜʙꜱᴄʀɪʙᴇ ᴍʏ ʏᴛ ᴄʜᴀɴɴᴇʟ* :  https://youtube.com/@suhasbro\n🧬◦ *ᴊᴏɪɴ ᴍʏ ᴄʜᴀɴɴᴇʟ* :  https://whatsapp.com/channel/0029VagKNUe96H4IdMbr9f2o\n\n\n*╭─ 乂 📥 D O W N L O A D 📥 ── ◦•◦❥•*\n*╎*\n*╎🏷️Cᴍᴅ -  .song/.play*\n*╎🔖 Dᴇꜱᴄ-  Download Any Song.*\n*╎*\n*╎🏷️Cᴍᴅ -  .video/.ytmp4*\n*╎🔖 Dᴇꜱᴄ-  Download Any Videos.*\n*╎*\n*╎🏷️Cᴍᴅ -  .fb/.facebook*\n*╎🔖 Dᴇꜱᴄ-  Download FaceBook Videos.*\n*╎*\n*╎🏷️Cᴍᴅ -  .tt/.tiktok*\n*╎🔖 Dᴇꜱᴄ-  Download TikTok Videos.*\n*╎*\n*╎🏷️Cᴍᴅ -  .img/.image*\n*╎🔖 Dᴇꜱᴄ-  Download Google Images.*\n*╎*\n*╎🏷️Cᴍᴅ -  .apk/.dlapk/.apkdl*\n*╎🔖 Dᴇꜱᴄ-  Download Any Apk.*\n*╎*\n*╎🏷️Cᴍᴅ -  .xvideosdown*\n*╎🔖 Dᴇꜱᴄ-  Download Xvideos in www.xvideos.com.*\n*╎*\n*╎🏷️Cᴍᴅ -  .dlxvideos/.xvideosdl*\n*╎🔖 Dᴇꜱᴄ-  Download Xvideos in www.xvideos2.com.*\n*╎*\n*╎🏷️Cᴍᴅ -  .xnxxdown*\n*╎🔖 Dᴇꜱᴄ-  Download Xnxx Videos in www.xnxx.com.*\n*╎*\n*╎🏷️Cᴍᴅ -  .dlxnxx/.xnxxdl*\n*╎🔖 Dᴇꜱᴄ-  Download Xnxx Videos in www.xnxx2.com.*\n*╎*\n*╎🏷️Cᴍᴅ -  .mediafire*\n*╎🔖 Dᴇꜱᴄ-  Download Mediafire Files.*\n*╎*\n*╎🏷️Cᴍᴅ -  .gdrive*\n*╎🔖 Dᴇꜱᴄ-  Download Gdrive Files.*\n*╎*\n*╎🏷️Cᴍᴅ -  .twitter/.x*\n*╎🔖 Dᴇꜱᴄ-  Download Twitter/X Videos*\n*╎*\n*╰───────────────────◦•◦❥•*\n\n🎉Sᴜʜᴀꜱ Mᴅ Bᴏᴛ Dᴇᴘʟᴏʏ Vɪᴅᴇᴏ.\nhttps://youtu.be/k0Jwrx1j5v4?si=Yy74MV41TvXVErsz\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*");
            break;
          case '13':
            _0x1b2926("\n> 🧬𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗠𝗢𝗩𝗜𝗘 𝗠𝗘𝗡𝗨💗\n\n🧬◦ *ᴄʀᴇᴀᴛᴏʀ* : ꜱᴜʜᴀꜱ ᴘᴀᴛʜꜱɪɴᴅᴜ⚡\n🧬◦ *ᴠᴇʀsɪᴏɴs* : ᴠ.9.0.0⚡\n🧬◦ *ᴍᴇɴᴜ ᴄᴍᴅ* : ᴍᴇɴᴜ⚡\n🧬◦ *ꜱᴜʙꜱᴄʀɪʙᴇ ᴍʏ ʏᴛ ᴄʜᴀɴɴᴇʟ* :  https://youtube.com/@suhasbro\n🧬◦ *ᴊᴏɪɴ ᴍʏ ᴄʜᴀɴɴᴇʟ* :  https://whatsapp.com/channel/0029VagKNUe96H4IdMbr9f2o\n\n\n*╭─ 乂 🍿 M O V I E S 🍿 ── ◦•◦❥•*\n*╎*\n*╎🏷️Cᴍᴅ -  .movie*\n*╎🔖 Dᴇꜱᴄ-  Get Any Movie Details.*\n*╎*\n*╎🏷️Cᴍᴅ -  .sinhalasublk*\n*╎🔖 Dᴇꜱᴄ-  Get SinhalaSub Movie Details in www.sinhalasub.lk.*\n*╎*\n*╎🏷️Cᴍᴅ -  .sinhalasubdl*\n*╎🔖 Dᴇꜱᴄ-  Download Movies in www.sinhalasub.lk.*\n*╎*\n*╎🏷️Cᴍᴅ -  .cineinfo*\n*╎🔖 Dᴇꜱᴄ-  Download Movies in www.cinesub.lk.*\n*╎*\n*╎🏷️Cᴍᴅ -  .Ginisisila*\n*╎🔖 Dᴇꜱᴄ-  Download Movies in www.ginisisila.lk.*\n*╎*\n*╎🏷️Cᴍᴅ -  .ytxms*\n*╎🔖 Dᴇꜱᴄ-  Download Ytmxs Movies.*\n*╎*\n*╎🏷️Cᴍᴅ -  .sinhalasubshere*\n*╎🔖 Dᴇꜱᴄ-  Shere Sinhalasub Movies Using Jid.*\n*╎*\n*╎🏷️Cᴍᴅ -  .cineshere*\n*╎🔖 Dᴇꜱᴄ-  Shere CineSubz Movies Using Jid.*\n*╎*\n*╎🏷️Cᴍᴅ -  .baiscope*\n*╎🔖 Dᴇꜱᴄ-  Download Movies in www.baiscope.com.*\n*╎*\n*╰───────────────────◦•◦❥•*\n\n🎉Sᴜʜᴀꜱ Mᴅ Bᴏᴛ Dᴇᴘʟᴏʏ Vɪᴅᴇᴏ.\nhttps://youtu.be/k0Jwrx1j5v4?si=Yy74MV41TvXVErsz\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*");
            break;
          case '3':
            _0x1b2926("\n> 🧬𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗟𝗢𝗚𝗢 𝗠𝗘𝗡𝗨💗\n\n🧬◦ *ᴄʀᴇᴀᴛᴏʀ* : ꜱᴜʜᴀꜱ ᴘᴀᴛʜꜱɪɴᴅᴜ⚡\n🧬◦ *ᴠᴇʀsɪᴏɴs* : ᴠ.9.0.0⚡\n🧬◦ *ᴍᴇɴᴜ ᴄᴍᴅ* : ᴍᴇɴᴜ⚡\n🧬◦ *ꜱᴜʙꜱᴄʀɪʙᴇ ᴍʏ ʏᴛ ᴄʜᴀɴɴᴇʟ* :  https://youtube.com/@suhasbro\n🧬◦ *ᴊᴏɪɴ ᴍʏ ᴄʜᴀɴɴᴇʟ* :  https://whatsapp.com/channel/0029VagKNUe96H4IdMbr9f2o\n\n\n*╭─ 乂 ⛱️ L O G O S ⛱️ ── ◦•◦❥•*\n*╎*\n*╎🏷️Cᴍᴅ -  .logo*\n*╎🔖 Dᴇꜱᴄ-  Get 10 Logo Commands.*\n*╎*\n*╎ 📌;Some Example.*\n*╎*\n*╎💫 SUHAS-MD LOGO MAKER 💫*\n*╎*\n*╎╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼➻*\n*╎◈ᴛᴇxᴛ : hi*\n*╎╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼➻*\n*╎*\n*╎🔢 Rᴇᴘʟʏ Tʜᴇ Nᴜᴍʙᴇʀ Yᴏᴜ Wᴀɴᴛ ➠*\n*╎*\n*╎  1 ➠ Bʟᴀᴄᴋ Pɪɴᴋ*\n*╎  2 ➠ Bʟᴀᴄᴋ Pɪɴᴋ 2*\n*╎  3 ➠ Sɪʟᴠᴇʀ 3ᴅ*\n*╎  4 ➠ Nᴀʀᴜᴛᴏ*\n*╎  5 ➠ Dɪɢɪᴛᴀʟ Gʟɪᴛᴄʜ*\n*╎  6 ➠ Pɪxᴇʟ Gʟɪᴛᴄʜ*\n*╎  7 ➠ Cᴏᴍɪᴄ Sᴛʏʟᴇ*\n*╎  8 ➠ Nᴇᴏɴ Lɪɢʜᴛ*\n*╎  9 ➠ Fʀᴇᴇ Bᴇᴀʀ*\n*╎ 10 ➠ Dᴇᴠɪʟ Wɪɴɢꜱ*\n*╎*\n*╰───────────────────◦•◦❥•*\n\n🎉Sᴜʜᴀꜱ Mᴅ Bᴏᴛ Dᴇᴘʟᴏʏ Vɪᴅᴇᴏ.\nhttps://youtu.be/k0Jwrx1j5v4?si=Yy74MV41TvXVErsz\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*");
            break;
          default:
            _0x1b2926("*🧚‍♂️Invalid Reply Number.🤔 Please Reply a Valid Number🙃*\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*");
        }
      }
    });
  } catch (_0x2756ca) {
    console.error(_0x2756ca);
    await _0x3522ce.sendMessage(_0x514ee8, {
      'react': {
        'text': '❌',
        'key': _0x19de2d.key
      }
    });
    _0x1b2926("An error occurred while processing your request.");
  }
});
