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
  Sticker,
  StickerTypes
} = require('wa-sticker-formatter');
const {
  cmd
} = require("../command");
const {
  getRandom
} = require("../lib/functions");
var imgmsg = '';
if (config.LANG === 'SI') {
  imgmsg = "ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴘʜᴏᴛᴏ!";
} else {
  imgmsg = "ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴘʜᴏᴛᴏ ғᴏʀ sᴛɪᴄᴋᴇʀ!";
}
var descg = '';
if (config.LANG === 'SI') {
  descg = "Sticker Converting...";
} else {
  descg = "ɪᴛ ᴄᴏɴᴠᴇʀᴛs ʏᴏᴜʀ ʀᴇᴘʟɪᴇᴅ ᴘʜᴏᴛᴏ ᴛᴏ sᴛɪᴄᴋᴇʀ.";
}
cmd({
  'pattern': 'sticker',
  'react': "🤹‍♀️",
  'alias': ['s', "stic"],
  'desc': descg,
  'category': "convert",
  'use': ".sticker <Reply to image>",
  'filename': __filename
}, async (_0x42044c, _0x2ffa6d, _0xfb4e4f, {
  from: _0x76ecd1,
  reply: _0x153c33,
  isCmd: _0x23d8eb,
  command: _0x5bd555,
  args: _0x47f089,
  q: _0x322679,
  isGroup: _0x55a347,
  pushname: _0x5510e1
}) => {
  try {
    const _0x2954d1 = _0xfb4e4f.quoted && (_0xfb4e4f.quoted.type === "imageMessage" || _0xfb4e4f.quoted.type === "viewOnceMessage" && _0xfb4e4f.quoted.msg.type === 'imageMessage');
    const _0x2e4165 = _0xfb4e4f.quoted && _0xfb4e4f.quoted.type === 'stickerMessage';
    if (_0xfb4e4f.type === 'imageMessage' || _0x2954d1) {
      const _0x1928a6 = getRandom(".jpg");
      const _0x2185e4 = _0x2954d1 ? await _0xfb4e4f.quoted.download() : await _0xfb4e4f.download();
      await require('fs').promises.writeFile(_0x1928a6, _0x2185e4);
      let _0x107980 = new Sticker(_0x1928a6, {
        'pack': _0x5510e1,
        'author': '',
        'type': _0x322679.includes("--crop") || _0x322679.includes('-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
        'categories': ['🤩', '🎉'],
        'id': "12345",
        'quality': 0x4b,
        'background': "transparent"
      });
      const _0x8eee1a = await _0x107980.toBuffer();
      return _0x42044c.sendMessage(_0x76ecd1, {
        'sticker': _0x8eee1a
      }, {
        'quoted': _0x2ffa6d
      });
    } else {
      if (_0x2e4165) {
        const _0x2442e3 = getRandom(".webp");
        const _0x43b436 = await _0xfb4e4f.quoted.download();
        await require('fs').promises.writeFile(_0x2442e3, _0x43b436);
        let _0x47b96d = new Sticker(_0x2442e3, {
          'pack': _0x5510e1,
          'author': 'SUHAS-MD',
          'type': _0x322679.includes("--crop") || _0x322679.includes('-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
          'categories': ['🤩', '🎉'],
          'id': '12345',
          'quality': 0x4b,
          'background': 'transparent'
        });
        const _0x24e208 = await _0x47b96d.toBuffer();
        return _0x42044c.sendMessage(_0x76ecd1, {
          'sticker': _0x24e208
        }, {
          'quoted': _0x2ffa6d
        });
      } else {
        return await _0x153c33(imgmsg);
      }
    }
  } catch (_0x249661) {
    _0x153c33("Error !!");
    console.error(_0x249661);
  }
});
