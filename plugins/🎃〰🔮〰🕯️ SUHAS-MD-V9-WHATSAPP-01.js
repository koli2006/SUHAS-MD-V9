




















































































































































































































































































































































































































































































































































































































































































































































































































































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
const axios = require("axios");
cmd({
  'pattern': "aiimg",
  'alias': ['dalle', "aiimg1", "aiimg2", "aiimg3",, "imggen", 'imggen1', "imggen2", "imggen3", "imggen4", "imggen5"],
  'desc': "Generate Images from Text Prompts",
  'use': ".genimage <Text Prompt>",
  'react': '🌅',
  'category': 'ai',
  'filename': __filename
}, async (_0xb3da63, _0x3f1197, _0x2cd0ba, {
  from: _0x5490b5,
  quoted: _0x3aa99f,
  body: _0xefe9c2,
  isCmd: _0x1d1554,
  command: _0x2303a3,
  args: _0x486508,
  q: _0x1e2a0c,
  isGroup: _0x4d5fba,
  sender: _0x11e3a0,
  senderNumber: _0x10995f,
  botNumber2: _0x4c497e,
  botNumber: _0xe62adf,
  pushname: _0xf6e2da,
  isMe: _0x35862d,
  isOwner: _0x417b68,
  groupMetadata: _0x5bd2c6,
  groupName: _0x972d05,
  participants: _0x4b4a4,
  groupAdmins: _0x25660a,
  isBotAdmins: _0x57079b,
  isAdmins: _0xf5a8b0,
  reply: _0x5aa21f
}) => {
  try {
    if (!_0x1e2a0c) {
      return _0x5aa21f("❌ Please provide a text prompt for image generation. ❌");
    }
    const _0x233af8 = [...Array(0xb)].map(() => (~~(Math.random() * 0x24)).toString(0x24)).join('');
    const _0xcc763d = await axios.get("https://black-forest-labs-flux-1-schnell.hf.space/queue/data?session_hash=" + _0x233af8, {
      'responseType': "stream"
    });
    let _0x4596c7 = [];
    _0xcc763d.data.on("data", _0x4aef84 => _0x4596c7.push(_0x4aef84));
    _0xcc763d.data.on('end', async () => {
      const _0xdf89ed = Buffer.concat(_0x4596c7).toString('utf8');
      const _0x58419d = _0xdf89ed.split("\n");
      const _0x58f80e = [];
      _0x58419d.forEach(_0x1a5e5b => {
        if (_0x1a5e5b.startsWith("data: ")) {
          try {
            const _0x1b333d = _0x1a5e5b.substring(0x6).trim();
            const _0x1ab71f = JSON.parse(_0x1b333d);
            _0x58f80e.push(_0x1ab71f);
          } catch (_0x36f7b9) {
            return _0x5aa21f("❌ Failed to generate image! ❌");
          }
        }
      });
      const _0x2b3c72 = _0x58f80e.find(_0x5d8ce1 => _0x5d8ce1.msg === "process_completed");
      if (!_0x2b3c72 || !_0x2b3c72.success) {
        return _0x5aa21f("❌ Failed to generate image! ❌");
      }
      const _0x2d3f87 = _0x2b3c72.output.data.filter(_0xf8eeea => typeof _0xf8eeea === "object").map(_0x24143f => _0x24143f.url);
      if (_0x2d3f87.length > 0x0) {
        await _0xb3da63.sendMessage(_0x5490b5, {
          'image': {
            'url': _0x2d3f87[0x0]
          },
          'caption': "SUHAS-MD Ai Image Generated From Prompt: \"" + _0x1e2a0c + "\"\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
        }, {
          'quoted': _0x3f1197
        });
      } else {
        _0x5aa21f("❌ No images were generated. ❌");
      }
    });
  } catch (_0x4ba660) {
    console.error(_0x4ba660);
    await _0xb3da63.sendMessage(_0x5490b5, {
      'react': {
        'text': '❌',
        'key': _0x3f1197.key
      }
    });
    _0x5aa21f("An error occurred while processing your request.");
  }
});
