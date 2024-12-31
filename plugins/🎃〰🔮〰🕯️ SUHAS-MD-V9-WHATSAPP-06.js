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
  cmd
} = require("../command");
const axios = require('axios');
const {
  Buffer
} = require("buffer");
cmd({
  'pattern': "img",
  'alias': ['image', "wallpaper"],
  'desc': "Search and send images from Google.",
  'react': "🏞️",
  'category': "media",
  'filename': __filename
}, async (_0x4212f9, _0x3eb85a, _0x2ac99c, {
  from: _0x406ac1,
  quoted: _0x55248e,
  body: _0x2627e1,
  isCmd: _0x5d0c19,
  command: _0x33c823,
  args: _0x1bcf4c,
  q: _0x3844e0,
  isGroup: _0x5d44f3,
  sender: _0x1f7dd9,
  senderNumber: _0x1c1280,
  botNumber2: _0x49bad8,
  botNumber: _0xc4a8d,
  pushname: _0x3c3774,
  isMe: _0x588b3d,
  isOwner: _0x17492a,
  groupMetadata: _0xbeab6e,
  groupName: _0x489964,
  participants: _0x3d5e14,
  groupAdmins: _0x591108,
  isBotAdmins: _0xfe89cf,
  isAdmins: _0x508f15,
  reply: _0x340e35
}) => {
  try {
    if (!_0x3844e0) {
      return _0x340e35("Please provide a search query for the image.");
    }
    const _0x127c8b = encodeURIComponent(_0x3844e0);
    const _0x36ba8f = "https://www.googleapis.com/customsearch/v1?q=" + _0x127c8b + "&cx=" + '45b94c5cef39940d1' + "&key=" + "AIzaSyDebFT-uY_f82_An6bnE9WvVcgVbzwDKgU" + "&searchType=image&num=5";
    const _0x3c8318 = await axios.get(_0x36ba8f);
    const _0x2cfbaa = _0x3c8318.data;
    if (!_0x2cfbaa.items || _0x2cfbaa.items.length === 0x0) {
      return _0x340e35("No images found for your query.");
    }
    for (let _0x24edb8 = 0x0; _0x24edb8 < _0x2cfbaa.items.length; _0x24edb8++) {
      const _0x1ba530 = _0x2cfbaa.items[_0x24edb8].link;
      const _0x4c3df5 = await axios.get(_0x1ba530, {
        'responseType': "arraybuffer"
      });
      const _0x1b79b3 = Buffer.from(_0x4c3df5.data, "binary");
      await _0x4212f9.sendMessage(_0x406ac1, {
        'image': _0x1b79b3,
        'caption': "\n*Image " + (_0x24edb8 + 0x1) + " from your search!💗*\n\n *🏞️ SUHAS-MD Enjoy these images..!*\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
      }, {
        'quoted': _0x3eb85a
      });
    }
    await _0x2ac99c.react('✅');
  } catch (_0x485fdb) {
    console.error(_0x485fdb);
    _0x340e35("Error: " + _0x485fdb.message);
  }
});
