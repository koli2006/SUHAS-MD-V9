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
  fetchJson
} = require("../lib/functions");
cmd({
  'pattern': "lyrics",
  'alias': ['lyric'],
  'react': '🪇',
  'desc': "get lyrics",
  'category': "other",
  'filename': __filename
}, async (_0x296ad5, _0x4ed8f2, _0x35f726, {
  from: _0x1e0f20,
  quoted: _0x30a698,
  body: _0x2b750e,
  isCmd: _0x3e4b48,
  command: _0x42a1b9,
  args: _0x4e9982,
  q: _0x87806e,
  isGroup: _0x47ab2f,
  sender: _0x461ff5,
  senderNumber: _0x3bb79a,
  botNumber2: _0x1b49bf,
  botNumber: _0x4a56e5,
  pushname: _0x492457,
  isMe: _0x32e85c,
  isOwner: _0x2881dd,
  groupMetadata: _0xd0e24d,
  groupName: _0x591ea0,
  participants: _0x1b8fff,
  groupAdmins: _0x183c89,
  isBotAdmins: _0x567e75,
  isAdmins: _0x523e4b,
  reply: _0x361c49
}) => {
  try {
    if (!_0x4e9982[0x0]) {
      return _0x361c49("*Please give me a song name*");
    }
    const _0x4b53ca = await fetchJson("https://www.dark-yasiya-api.site/other/lyrics?text=" + _0x87806e);
    const _0x156801 = "*🪇 SUHAS-Md SONG LYRICS 🪇*\n\n*Song :* " + _0x4b53ca.result.album + "\n\n*Artist :* " + _0x4b53ca.result.artists + "\n\n" + _0x4b53ca.result.lyric + "\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*";
    const _0x426038 = {
      'mentionedJid': [_0x35f726.sender],
      'forwardingScore': 0x3e7,
      'isForwarded': true
    };
    const _0x402bcf = {
      'text': _0x156801,
      'contextInfo': _0x426038
    };
    await _0x296ad5.sendMessage(_0x1e0f20, _0x402bcf, {
      'quoted': _0x4ed8f2
    });
  } catch (_0x504564) {
    console.log(_0x504564);
    _0x361c49('' + _0x504564);
  }
});
cmd({
  'pattern': 'textstyle',
  'alias': ["fancytext", 'fancy'],
  'react': '🪄',
  'desc': "get fancy text",
  'category': 'other',
  'filename': __filename
}, async (_0x5f24da, _0x3c20b7, _0x27531c, {
  from: _0x581acb,
  quoted: _0x3e6680,
  body: _0x186e4c,
  isCmd: _0x4ac845,
  command: _0x165018,
  args: _0x24d1a0,
  q: _0xe4a473,
  isGroup: _0x3fa5a9,
  sender: _0x2c0507,
  senderNumber: _0x361d74,
  botNumber2: _0x3fb0ad,
  botNumber: _0x3691c0,
  pushname: _0x5f037a,
  isMe: _0x222d61,
  isOwner: _0x4ab6f2,
  groupMetadata: _0x3fadf2,
  groupName: _0x1c0d91,
  participants: _0xd98acd,
  groupAdmins: _0x4c0c71,
  isBotAdmins: _0x21e5b8,
  isAdmins: _0x1cf88f,
  reply: _0x24dd70
}) => {
  try {
    if (!_0x24d1a0[0x0]) {
      return _0x24dd70("*_Please give me a text._*");
    }
    const _0x55034c = await fetchJson("https://www.dark-yasiya-api.site/other/font?text=" + _0xe4a473);
    const _0x442ee1 = _0x55034c.result;
    const _0x35ea43 = _0x442ee1.map((_0x37f132, _0x4515d6) => {
      return _0x4515d6 + 0x1 + " ➠ " + _0x442ee1[_0x4515d6].result;
    }).join("\n\n");
    let _0x28ab77 = "*🪄 SUHAS-MD TEXT STYLES 🪄*\n\n*Text :* " + _0xe4a473 + "\n\n" + _0x35ea43 + "\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*";
    const _0x4ec0a9 = {
      'newsletterJid': '120363302882996948@newsletter',
      'newsletterName': "✨ 𝚂𝚄𝙷𝙰𝚂 𝙼𝙳 𝚅9 💕",
      'serverMessageId': 0x3e7
    };
    const _0x3429ca = {
      'mentionedJid': [_0x27531c.sender],
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': _0x4ec0a9
    };
    const _0x56f03b = {
      'text': _0x28ab77,
      'contextInfo': _0x3429ca
    };
    let _0x5e358f = await _0x5f24da.sendMessage(_0x581acb, _0x56f03b, {
      'quoted': _0x3c20b7
    });
    _0x5f24da.ev.on("messages.upsert", async _0x3025d2 => {
      let _0x31e733 = _0x3025d2.messages[0x0];
      if (!_0x31e733.message || !_0x31e733.message.extendedTextMessage) {
        return;
      }
      let _0x5241a3 = _0x31e733.message.extendedTextMessage.text.trim();
      if (_0x31e733.message.extendedTextMessage.contextInfo && _0x31e733.message.extendedTextMessage.contextInfo.stanzaId === _0x5e358f.key.id) {
        let _0x3e8586 = parseInt(_0x5241a3);
        _0x24dd70('' + _0x442ee1[_0x3e8586 - 0x1].result);
      }
    });
  } catch (_0x557f89) {
    console.log(_0x557f89);
    _0x24dd70('' + _0x557f89);
  }
});
cmd({
  'pattern': 'fb',
  'alias': ['facebook'],
  'react': '📥',
  'desc': "download fb videos",
  'category': "download",
  'filename': __filename
}, async (_0x16857b, _0x189536, _0x37c9c9, {
  from: _0x1806a3,
  quoted: _0x922e8f,
  body: _0x713e1c,
  isCmd: _0x5b294b,
  command: _0x49af5b,
  args: _0x1682d3,
  q: _0x2a86d5,
  isGroup: _0x12f0f2,
  sender: _0xa7e426,
  senderNumber: _0x3d06d3,
  botNumber2: _0x297eff,
  botNumber: _0x558013,
  pushname: _0xac7664,
  isMe: _0x28b28e,
  isOwner: _0x214cd3,
  groupMetadata: _0x5e3c34,
  groupName: _0x30f550,
  participants: _0x34be8f,
  groupAdmins: _0xd7b2a0,
  isBotAdmins: _0x34b8a7,
  isAdmins: _0x519475,
  reply: _0x54edc9
}) => {
  try {
    if (!_0x2a86d5 && !_0x2a86d5.startsWith("https://")) {
      return _0x54edc9("*Please Give Me a FaceBook Url.‼️*");
    }
    let _0x5d0c15 = await fetchJson("https://www.dark-yasiya-api.site/download/fbdl1?url=" + _0x2a86d5);
    if (!_0x5d0c15.result) {
      return _0x54edc9("*Can't Download Your FacebBook Video.‼️*");
    }
    const _0x55fcdb = await _0x16857b.sendMessage(_0x1806a3, {
      'text': "*Your FaceBook Video is Downloading... 📥*"
    }, {
      'quoted': _0x189536
    });
    const _0xddfdf = _0xf6dd87 => new Promise(_0x172a1d => setTimeout(_0x172a1d, _0xf6dd87));
    await _0xddfdf(0x3e8);
    await _0x16857b.sendMessage(_0x1806a3, {
      'text': "*Your FaceBook Video is Uploading... 📤*",
      'edit': _0x55fcdb.key
    });
    await _0xddfdf(0x3e8);
    await _0x16857b.sendMessage(_0x1806a3, {
      'delete': _0x55fcdb.key
    });
    await _0x16857b.sendMessage(_0x1806a3, {
      'video': {
        'url': _0x5d0c15.result.hd
      },
      'mimetype': "video/mp4",
      'caption': "*HD Quality*\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x189536
    });
    await _0x16857b.sendMessage(_0x1806a3, {
      'video': {
        'url': _0x5d0c15.result.sd
      },
      'mimetype': "video/mp4",
      'caption': "*SD Quality*\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x189536
    });
  } catch (_0x32f739) {
    console.log(_0x32f739);
    _0x54edc9('' + _0x32f739);
  }
});
cmd({
  'pattern': 'tt',
  'alias': ["tiktok"],
  'react': '📥',
  'desc': "download tiktok videos",
  'category': "download",
  'filename': __filename
}, async (_0x224a5c, _0x324172, _0x2ef050, {
  from: _0x40880c,
  quoted: _0x3a19a1,
  body: _0x36d5fe,
  isCmd: _0x422102,
  command: _0x4ee7c5,
  args: _0x304084,
  q: _0x5a5540,
  isGroup: _0x3cb8ad,
  sender: _0x3b6bed,
  senderNumber: _0x56dd44,
  botNumber2: _0x1931a7,
  botNumber: _0x3edc34,
  pushname: _0x505f47,
  isMe: _0x261cd4,
  isOwner: _0x14cb19,
  groupMetadata: _0x3bf50b,
  groupName: _0x2964f1,
  participants: _0x4e2a31,
  groupAdmins: _0x5a36da,
  isBotAdmins: _0x3ee594,
  isAdmins: _0x38c882,
  reply: _0x78dede
}) => {
  try {
    if (!_0x5a5540 && !_0x5a5540.startsWith('https://')) {
      return _0x78dede("*Please Give Me a TikTok Url.‼️*");
    }
    let _0x579a16 = await fetchJson("https://www.dark-yasiya-api.site/download/tiktok?url=" + _0x5a5540);
    if (!_0x579a16.result) {
      return _0x78dede("*Can't Download Your TikTok Video.‼️*");
    }
    const _0x22c312 = await _0x224a5c.sendMessage(_0x40880c, {
      'text': "*Your TikTok Video is Downloading... 📥*"
    }, {
      'quoted': _0x324172
    });
    const _0x4f667f = _0x1fbf3b => new Promise(_0x2cb536 => setTimeout(_0x2cb536, _0x1fbf3b));
    await _0x4f667f(0x3e8);
    await _0x224a5c.sendMessage(_0x40880c, {
      'text': "*Your TiktTok Video is Uploading... 📤*",
      'edit': _0x22c312.key
    });
    await _0x4f667f(0x3e8);
    await _0x224a5c.sendMessage(_0x40880c, {
      'delete': _0x22c312.key
    });
    await _0x224a5c.sendMessage(_0x40880c, {
      'video': {
        'url': _0x579a16.result.hdVideo
      },
      'mimetype': "video/mp4",
      'caption': "*Without WaterMark*\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x324172
    });
    await _0x224a5c.sendMessage(_0x40880c, {
      'video': {
        'url': _0x579a16.result.wmVideo
      },
      'mimetype': "video/mp4",
      'caption': "*With WaterMark*\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x324172
    });
  } catch (_0x318aa6) {
    console.log(_0x318aa6);
    _0x78dede('' + _0x318aa6);
  }
});
cmd({
  'pattern': "shutdown",
  'desc': "Shutdown the bot.",
  'category': "owner",
  'react': '🛑',
  'filename': __filename
}, async (_0x2d752d, _0x492b9e, _0x5219cf, {
  from: _0x349fd2,
  isOwner: _0x5caf99,
  reply: _0x2db760
}) => {
  if (!_0x5caf99) {
    return _0x2db760("❌ You are not the owner the SUHAS-MD...!");
  }
  _0x2db760("🛑 SUHAS-MD-V9 Shutting down...").then(() => process.exit());
});
cmd({
  'pattern': "block",
  'desc': "Block a user.",
  'category': "owner",
  'react': '🚫',
  'filename': __filename
}, async (_0x2765fa, _0x35c15b, _0x10fc8a, {
  from: _0x140083,
  isOwner: _0x2e6a45,
  quoted: _0xbc4572,
  reply: _0xeda45b
}) => {
  if (!_0x2e6a45) {
    return _0xeda45b("❌ You Are Not The SUHAS-MD Main Owner..!");
  }
  if (!_0xbc4572) {
    return _0xeda45b("❌ Please Reply The User Do You Want To Block..!");
  }
  const _0x10c3f6 = _0xbc4572.sender;
  try {
    await _0x2765fa.updateBlockStatus(_0x10c3f6, 'block');
    _0xeda45b("🚫 User " + _0x10c3f6 + " Blocked Successful.");
  } catch (_0x316aba) {
    _0xeda45b("❌ Error Blocking User: " + _0x316aba.message);
  }
});
cmd({
  'pattern': "unblock",
  'desc': "Unblock a user.",
  'category': "owner",
  'react': '✅',
  'filename': __filename
}, async (_0x43b697, _0x318c42, _0x3149d5, {
  from: _0x13f526,
  isOwner: _0x450bb6,
  quoted: _0x5185d5,
  reply: _0x285b20
}) => {
  if (!_0x450bb6) {
    return _0x285b20("❌ You Are Not The SUHAS-MD Main Owner !");
  }
  if (!_0x5185d5) {
    return _0x285b20("❌ Please Reply The User Do You Want To Block !");
  }
  const _0x4fe48b = _0x5185d5.sender;
  try {
    await _0x43b697.updateBlockStatus(_0x4fe48b, "unblock");
    _0x285b20("✅ User " + _0x4fe48b + " Unblocked Successful.");
  } catch (_0x3710b3) {
    _0x285b20("❌ Error Unblocking User: " + _0x3710b3.message);
  }
});
cmd({
  'pattern': "clearchats",
  'desc': "Clear all chats from the bot.",
  'category': "owner",
  'react': '🧹',
  'filename': __filename
}, async (_0x2c1d5f, _0x518042, _0x470e0b, {
  from: _0x2d3395,
  isOwner: _0x1b1457,
  reply: _0x1df25c
}) => {
  if (!_0x1b1457) {
    return _0x1df25c("❌ You Are Not The SUHAS-MD Main Owner !");
  }
  try {
    const _0x11e3bb = _0x2c1d5f.chats.all();
    for (const _0x21c4a2 of _0x11e3bb) {
      await _0x2c1d5f.modifyChat(_0x21c4a2.jid, 'delete');
    }
    _0x1df25c("🧹 All Chats Clear Successful.");
  } catch (_0x2e40c9) {
    _0x1df25c("❌ Error Cleaning Chat: " + _0x2e40c9.message);
  }
});
cmd({
  'pattern': 'jid',
  'desc': "Get the bot's JID.",
  'category': 'owner',
  'react': '🤖',
  'filename': __filename
}, async (_0x81e177, _0x582a0b, _0x1e6baa, {
  from: _0x122a88,
  isOwner: _0xd0f3c3,
  reply: _0x5b82b3
}) => {
  if (!_0xd0f3c3) {
    return _0x5b82b3("❌ You are not the owner!");
  }
  const _0x176398 = _0x81e177.user ? _0x81e177.user.id : _0x81e177.info.wid;
  _0x5b82b3("🤖 *Bot JID:* " + _0x176398);
});
cmd({
  'pattern': "gjid",
  'desc': "Get the list of JIDs for all groups the bot is part of.",
  'category': "owner",
  'react': '📝',
  'filename': __filename
}, async (_0x5e96d5, _0x506b38, _0x1a5b13, {
  from: _0x4d5bfd,
  isOwner: _0x5090da,
  reply: _0x506165
}) => {
  if (!_0x5090da) {
    return _0x506165("❌ You Are Not The SUHAS-MD Main Owner !");
  }
  const _0x17d629 = await _0x5e96d5.groupFetchAllParticipating();
  const _0x210450 = Object.keys(_0x17d629).join("\n");
  _0x506165("📝 *Group JIDs:*\n\n" + _0x210450);
});
cmd({
  'pattern': "pair",
  'desc': "Get pair code",
  'category': "other",
  'filename': __filename
}, async (_0x5a884d, _0x12339c, _0x53b3b4, {
  from: _0x5817a5,
  quoted: _0x4b0513,
  body: _0x2ce5f3,
  isCmd: _0x523e1f,
  command: _0x3482a9,
  args: _0x11fa82,
  q: _0x2588b8,
  isGroup: _0x355d44,
  sender: _0x5541ba,
  senderNumber: _0x3ad372,
  botNumber2: _0x1167bd,
  botNumber: _0x48db3e,
  pushname: _0x1a0898,
  isMe: _0x36a65b,
  isOwner: _0x17cada,
  groupMetadata: _0x15936c,
  groupName: _0x99d6c2,
  participants: _0x1fa8e0,
  groupAdmins: _0x161673,
  isBotAdmins: _0xedb054,
  isAdmins: _0x29327a,
  reply: _0x292293
}) => {
  try {
    if (!_0x2588b8) {
      return _0x292293("*_Please give me a number to get pair code._* *Ex :-* .pair 9477413xxxx");
    }
    let _0xaac006 = await fetchJson("https://pair-code-production.up.railway.app/code?number=");
    let _0x421296 = await _0x5a884d.sendMessage(_0x5817a5, {
      'text': _0xaac006.code
    }, {
      'quoted': _0x12339c
    });
    await _0x5a884d.sendMessage(_0x5817a5, {
      'text': "*_This is your pair code.Please link it your whatsapp within 30 second._*\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
    }, {
      'quoted': _0x421296
    });
  } catch (_0x493ad5) {
    console.log(_0x493ad5);
    _0x292293('' + _0x493ad5);
  }
});
cmd({
  'pattern': "calc",
  'alias': ["calculator"],
  'desc': "Calculate a mathematical expression.",
  'use': ".calc <expression>",
  'react': "🛠️",
  'category': "tools",
  'filename': __filename
}, async (_0xe9e2b6, _0x2d5ed0, _0x9238e7, {
  from: _0x1110ce,
  args: _0x449405,
  quoted: _0x550477,
  body: _0x1553e0,
  isCmd: _0x9747f2,
  command: _0x375d89,
  q: _0x3f7898,
  isGroup: _0x46df90,
  sender: _0x5afeb5,
  senderNumber: _0x30da2c,
  botNumber2: _0x39b10d,
  botNumber: _0x5cadf0,
  pushname: _0xedd111,
  isMe: _0x4c0394,
  isOwner: _0x26ff22,
  groupMetadata: _0x1ce0a5,
  groupName: _0x3cb6ac,
  participants: _0x4a0859,
  groupAdmins: _0x50cf7c,
  isBotAdmins: _0xc5ebe3,
  isAdmins: _0x57b886,
  reply: _0x2f4cfe
}) => {
  try {
    if (_0x449405.length === 0x0) {
      return _0x2f4cfe("Please provide a mathematical expression.");
    }
    const _0x4f0ea2 = _0x449405.join(" ");
    let _0x52f5ce;
    try {
      _0x52f5ce = new Function("return " + _0x4f0ea2)();
    } catch (_0x70dc7e) {
      return _0x2f4cfe("Invalid mathematical expression.");
    }
    return await _0xe9e2b6.sendMessage(_0x1110ce, {
      'text': "Result: " + _0x52f5ce
    }, {
      'quoted': _0x2d5ed0
    });
    await _0x9238e7.react('✅');
  } catch (_0x25b7bc) {
    console.log(_0x25b7bc);
    await _0xe9e2b6.sendMessage(_0x1110ce, {
      'react': {
        'text': '❌',
        'key': _0x2d5ed0.key
      }
    });
    _0x2f4cfe("Error: " + _0x25b7bc.message);
  }
});
cmd({
  'pattern': "reverse",
  'desc': "Reverse the provided text.",
  'react': "🛠️",
  'use': ".reverse <text>",
  'category': "tools",
  'filename': __filename
}, async (_0xf7d5f1, _0x9bd8a2, _0x26287e, {
  from: _0x4d4cfe,
  args: _0x186242,
  reply: _0xb48d6a
}) => {
  try {
    if (_0x186242.length === 0x0) {
      return _0xb48d6a("Please provide the text to reverse.");
    }
    const _0x53092d = _0x186242.join(" ");
    const _0x25c919 = _0x53092d.split('').reverse().join('');
    return await _0xf7d5f1.sendMessage(_0x4d4cfe, {
      'text': _0x25c919
    }, {
      'quoted': _0x9bd8a2
    });
    await _0x26287e.react('✅');
  } catch (_0x55f8b5) {
    console.log(_0x55f8b5);
    await _0xf7d5f1.sendMessage(_0x4d4cfe, {
      'react': {
        'text': '❌',
        'key': _0x9bd8a2.key
      }
    });
    return _0xb48d6a("Error: " + _0x55f8b5.message);
  }
});
cmd({
  'pattern': "tempmail",
  'desc': "Create temporary email address and use it as needed.",
  'react': '📧',
  'use': ".tempmail",
  'category': "tools",
  'filename': __filename
}, async (_0x5abeb7, _0x2af1c1, _0x1a8880, {
  from: _0x196dc0,
  sender: _0x198e0d,
  reply: _0x52e6d9
}) => {
  try {
    if (!emailDataStore[_0x198e0d]) {
      const _0x457824 = await tempmail.create();
      if (!_0x457824 || !_0x457824[0x0]) {
        return await _0x52e6d9("Request Denied!");
      }
      const [_0xf2e250, _0x1902a9] = _0x457824[0x0].split('@');
      emailDataStore[_0x198e0d] = {
        'email': _0x457824[0x0],
        'login': _0xf2e250,
        'domain': _0x1902a9
      };
    }
    const _0x5677d0 = emailDataStore[_0x198e0d];
    await _0x5abeb7.sendMessage(_0x196dc0, {
      'text': "NEW MAIL\n\nEMAIL: " + _0x5677d0.email + "\nLOGIN: " + _0x5677d0.login + "\nADDRESS: " + _0x5677d0.domain + "\n"
    }, {
      'quoted': _0x2af1c1
    });
    await _0x1a8880.react('✅');
  } catch (_0x230779) {
    console.log(_0x230779);
    await _0x5abeb7.sendMessage(_0x196dc0, {
      'react': {
        'text': '❌',
        'key': _0x2af1c1.key
      }
    });
    return _0x52e6d9("Request Denied!");
  }
});
cmd({
  'pattern': 'checkmail',
  'desc': "Check mails in your temporary email address.",
  'react': '📧',
  'use': ".checkmail",
  'category': "tools",
  'filename': __filename
}, async (_0x1dba1a, _0x3b1322, _0x2f0069, {
  from: _0x31d5f4,
  sender: _0x51d327,
  reply: _0x472693
}) => {
  try {
    const _0xb00877 = emailDataStore[_0x51d327];
    if (!_0xb00877 || !_0xb00877.email) {
      return await _0x1dba1a.sendMessage(_0x31d5f4, {
        'text': "_You Didn't Create Any Mail_"
      }, {
        'quoted': _0x3b1322
      });
    }
    const _0x49e4fd = await tempmail.mails(_0xb00877.login, _0xb00877.domain);
    if (!_0x49e4fd || _0x49e4fd.length === 0x0) {
      return await _0x1dba1a.sendMessage(_0x31d5f4, {
        'text': "_EMPTY ➪ No Mails Here_"
      }, {
        'quoted': _0x3b1322
      });
    }
    for (const _0x361afd of _0x49e4fd) {
      const _0xcc9f4e = await tempmail.emailContent(_0xb00877.login, _0xb00877.domain, _0x361afd.id);
      if (_0xcc9f4e) {
        const _0x59b471 = "From ➪ " + _0x361afd.from + "\nDate ➪ " + _0x361afd.date + "\nEMAIL ID ➪ [" + _0x361afd.id + "]\nSubject ➪ " + _0x361afd.subject + "\nContent ➪ " + _0xcc9f4e;
        await _0x1dba1a.sendMessage(_0x31d5f4, {
          'text': _0x59b471
        }, {
          'quoted': _0x3b1322
        });
      }
    }
  } catch (_0x2a9c0f) {
    console.log(_0x2a9c0f);
    await _0x1dba1a.sendMessage(_0x31d5f4, {
      'react': {
        'text': '❌',
        'key': _0x3b1322.key
      }
    });
    return _0x472693("Request Denied!");
  }
});
cmd({
  'pattern': 'delmail',
  'desc': "Delete temporary email address.",
  'react': '❌',
  'use': ".delmail",
  'category': 'tools',
  'filename': __filename
}, async (_0x1c3c72, _0x21389e, _0x4426c8, {
  from: _0x23e565,
  sender: _0x991a9a,
  reply: _0x25c2ee
}) => {
  try {
    return emailDataStore[_0x991a9a] ? (delete emailDataStore[_0x991a9a], await _0x1c3c72.sendMessage(_0x23e565, {
      'text': "Deleted the email address."
    }, {
      'quoted': _0x21389e
    })) : await _0x1c3c72.sendMessage(_0x23e565, {
      'text': "No email address to delete."
    }, {
      'quoted': _0x21389e
    });
  } catch (_0x5e6d74) {
    console.log(_0x5e6d74);
    await _0x1c3c72.sendMessage(_0x23e565, {
      'react': {
        'text': '❌',
        'key': _0x21389e.key
      }
    });
    return _0x25c2ee("Request Denied!");
  }
});
const tempmail = {
  'create': async () => {
    try {
      const _0x15a1f9 = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1");
      return _0x15a1f9.data;
    } catch (_0x1d25dc) {
      console.log(_0x1d25dc);
      return null;
    }
  },
  'mails': async (_0x442178, _0x17a806) => {
    const _0x29ccec = "https://www.1secmail.com/api/v1/?action=getMessages&login=" + _0x442178 + '&domain=' + _0x17a806;
    try {
      const _0x2e1156 = await axios.get(_0x29ccec);
      return _0x2e1156.data;
    } catch (_0x4e1221) {
      console.log(_0x4e1221);
      return null;
    }
  },
  'emailContent': async (_0x2ed299, _0x183b70, _0x590ba2) => {
    const _0x43d8a1 = "https://www.1secmail.com/api/v1/?action=readMessage&login=" + _0x2ed299 + "&domain=" + _0x183b70 + '&id=' + _0x590ba2;
    try {
      const _0x497b8d = await axios.get(_0x43d8a1);
      const _0x54165a = _0x497b8d.data;
      const _0x4461bd = _0x54165a.htmlBody;
      const _0x59e4c0 = cheerio.load(_0x4461bd);
      const _0x276169 = _0x59e4c0.text();
      return _0x276169;
    } catch (_0x3ead38) {
      console.log(_0x3ead38);
      return null;
    }
  }
};
cmd({
  'pattern': "url",
  'alias': ['tourl'],
  'desc': "Shortens a provided URL.",
  'react': '🔗',
  'use': ".url <link>",
  'category': "convert",
  'filename': __filename
}, async (_0x5da1b6, _0xe2513, _0x19b064, {
  from: _0x3e66f9,
  args: _0x4f0010,
  reply: _0x23a933
}) => {
  try {
    const _0x54f399 = _0x4f0010.join(" ");
    if (!_0x54f399) {
      return await _0x23a933("_Please provide a URL to shorten_");
    }
    await _0x23a933("_Shortening the link..._");
    const _0x13e920 = await scraper.shortenUrl(_0x54f399);
    if (_0x13e920) {
      const _0x5c810e = "_Here's your shortened link: *" + _0x13e920 + "*_\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*";
      return await _0x5da1b6.sendMessage(_0x3e66f9, {
        'text': _0x5c810e
      }, {
        'quoted': _0xe2513
      });
    } else {
      return await _0x23a933("Failed to shorten the URL.");
    }
  } catch (_0x1c43a8) {
    console.log(_0x1c43a8);
    await _0x5da1b6.sendMessage(_0x3e66f9, {
      'react': {
        'text': '❌',
        'key': _0xe2513.key
      }
    });
    return _0x23a933("Error: " + _0x1c43a8.message);
  }
});
cmd({
  'pattern': 'encode',
  'desc': "Encode text to Base64",
  'react': '🔤',
  'category': "tools",
  'filename': __filename
}, async (_0x1af816, _0x1a58b6, _0x4dff1c, {
  from: _0x16be02,
  quoted: _0x1e1232,
  body: _0x3d34f5,
  isCmd: _0x428dac,
  command: _0xa4f9d5,
  args: _0x176644,
  q: _0x3746f9,
  isGroup: _0xdc4d4,
  sender: _0x442cf8,
  senderNumber: _0x2afe49,
  botNumber2: _0x4612d3,
  botNumber: _0x26cf62,
  pushname: _0x3791ee,
  isMe: _0x525767,
  isOwner: _0x410b6c,
  groupMetadata: _0xed3ca8,
  groupName: _0x17b480,
  participants: _0x312921,
  groupAdmins: _0x36a1ba,
  isBotAdmins: _0x14ad83,
  isAdmins: _0x105fad,
  reply: _0x3fca76
}) => {
  try {
    if (!_0x3746f9) {
      return _0x3fca76("_Please provide text to encode._");
    }
    await _0x3fca76("_Encoding..._");
    let _0x2aebde = await fetch('https://pure-badlands-26930-091903776676.herokuapp.com/misc/base64/encode?text=' + encodeURIComponent(_0x3746f9));
    let _0x40d72b = await _0x2aebde.json();
    if (_0x40d72b && _0x40d72b.result) {
      await _0x3fca76('' + _0x40d72b.result);
    } else {
      await _0x3fca76("Failed to encode the text.");
      await _0x1af816.sendMessage(_0x16be02, {
        'react': {
          'text': '❌',
          'key': _0x1a58b6.key
        }
      });
    }
  } catch (_0x3d3f38) {
    console.log(_0x3d3f38);
    await _0x1af816.sendMessage(_0x16be02, {
      'react': {
        'text': '❌',
        'key': _0x1a58b6.key
      }
    });
    _0x3fca76('' + _0x3d3f38);
  }
});
cmd({
  'pattern': "decode",
  'desc': "Decode Base64 text",
  'react': '🔡',
  'category': "tools",
  'filename': __filename
}, async (_0x4a6c81, _0x3ef781, _0x15107d, {
  from: _0x2a54c6,
  quoted: _0x25b83e,
  body: _0xa0eb23,
  isCmd: _0x24bbb1,
  command: _0x5d5764,
  args: _0x16ba70,
  q: _0x59f765,
  isGroup: _0x5683cc,
  sender: _0x52be02,
  senderNumber: _0x2bcaf7,
  botNumber2: _0x256ccd,
  botNumber: _0x5cf5c9,
  pushname: _0x3de41a,
  isMe: _0x35aeae,
  isOwner: _0x46ed68,
  groupMetadata: _0x22d667,
  groupName: _0x595f5c,
  participants: _0x57c667,
  groupAdmins: _0x36accf,
  isBotAdmins: _0x2f44fa,
  isAdmins: _0x3cb8fc,
  reply: _0x2b93a
}) => {
  try {
    if (!_0x59f765) {
      return _0x2b93a("_Please provide Base64 text to decode._");
    }
    await _0x2b93a('Decoding...');
    let _0xaad944 = await fetch('https://pure-badlands-26930-091903776676.herokuapp.com/misc/base64/decode?text=' + encodeURIComponent(_0x59f765));
    let _0x7ff241 = await _0xaad944.json();
    if (_0x7ff241 && _0x7ff241.result) {
      await _0x2b93a('' + _0x7ff241.result);
    } else {
      await _0x2b93a("Failed to decode the text.");
      await _0x4a6c81.sendMessage(_0x2a54c6, {
        'react': {
          'text': '❌',
          'key': _0x3ef781.key
        }
      });
    }
  } catch (_0x2817ba) {
    console.log(_0x2817ba);
    await _0x4a6c81.sendMessage(_0x2a54c6, {
      'react': {
        'text': '❌',
        'key': _0x3ef781.key
      }
    });
    _0x2b93a('' + _0x2817ba);
  }
});
cmd({
  'pattern': "instastalk",
  'desc': "Fetch Instagram user details",
  'react': '🌂',
  'category': "tools",
  'filename': __filename
}, async (_0x1a9b4f, _0xd109b1, _0x181b68, {
  from: _0x2700dc,
  quoted: _0x1837ed,
  body: _0x271025,
  isCmd: _0x1b76c9,
  command: _0x1a54a1,
  args: _0x45216d,
  q: _0x358554,
  isGroup: _0x3e8c18,
  sender: _0x2b911c,
  senderNumber: _0x17191d,
  botNumber2: _0x5f27ce,
  botNumber: _0x3abe22,
  pushname: _0x17da03,
  isMe: _0x436375,
  isOwner: _0x45c904,
  groupMetadata: _0x19341e,
  groupName: _0x5b20f0,
  participants: _0xc3d8e4,
  groupAdmins: _0x128a71,
  isBotAdmins: _0x492e85,
  isAdmins: _0x538aac,
  reply: _0x299668
}) => {
  try {
    if (!_0x358554) {
      return _0x299668("Please provide an Instagram username.");
    }
    await _0x299668("Fetching Instagram user details...");
    let _0x8f79cc = await fetch("https://pure-badlands-26930-091903776676.herokuapp.com/stalker/instauser?username=" + encodeURIComponent(_0x358554));
    let _0x58d918 = await _0x8f79cc.json();
    if (_0x58d918 && _0x58d918.status === '200' && _0x58d918.data) {
      let _0x503eed = _0x58d918.data;
      let _0x2b8275 = "🌂 𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗜𝗡𝗦𝗧𝗔 𝗜𝗡𝗙𝗢 🌂\n\n*Username:* " + _0x503eed.username + "\n" + ("*Name:* " + _0x503eed.name + "\n") + ("*Biography:* " + _0x503eed.biography + "\n") + ("*Posts:* " + _0x503eed.posts + "\n") + ("*Followers:* " + _0x503eed.followers + "\n") + ("*Following:* " + _0x503eed.following + "\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*");
      await _0x1a9b4f.sendMessage(_0x2700dc, {
        'image': {
          'url': _0x503eed.profile_picture
        },
        'caption': _0x2b8275
      }, {
        'quoted': _0xd109b1
      });
    } else {
      await _0x1a9b4f.sendMessage(_0x2700dc, {
        'react': {
          'text': '❌',
          'key': _0xd109b1.key
        }
      });
      await _0x299668("Failed to fetch Instagram user details. Please check the username.");
    }
  } catch (_0x579450) {
    console.log(_0x579450);
    await _0x1a9b4f.sendMessage(_0x2700dc, {
      'react': {
        'text': '❌',
        'key': _0xd109b1.key
      }
    });
    _0x299668('' + _0x579450);
  }
});
