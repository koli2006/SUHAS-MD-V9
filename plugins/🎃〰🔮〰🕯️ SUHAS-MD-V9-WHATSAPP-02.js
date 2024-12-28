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
const axios = require("axios");
const cheerio = require('cheerio');
cmd({
  'pattern': "cineinfo",
  'desc': "cinesubz.co info",
  'category': "search",
  'filename': __filename
}, async (_0x4b868b, _0x27181f, _0x3d2b26, {
  from: _0x30cfa2,
  quoted: _0x291386,
  body: _0x4a0a1,
  isCmd: _0x14e44a,
  command: _0x348bb9,
  args: _0x1f5bb3,
  q: _0xbe85b9,
  isGroup: _0x11e20b,
  sender: _0x577c3d,
  senderNumber: _0x55eee4,
  botNumber2: _0x202ce5,
  botNumber: _0x378d91,
  pushname: _0x2db482,
  isMe: _0x1e9e0e,
  isOwner: _0x1185e1,
  groupMetadata: _0x339a00,
  groupName: _0x4241ee,
  participants: _0x415914,
  groupAdmins: _0x1992ad,
  isBotAdmins: _0x5dfa80,
  isAdmins: _0x547368,
  reply: _0x2d01f2
}) => {
  try {
    if (!_0xbe85b9) {
      return _0x2d01f2("*Please give me a movie name.‼*");
    }
    let _0x58d0cb = await axios.get("https://cinesubz.co/?s=" + _0xbe85b9);
    let _0x46ed5b = cheerio.load(_0x58d0cb.data);
    let _0x381e26 = _0x46ed5b("#contenedor > div.module > div.content.rigth.csearch > div > div:nth-child(2) > article > div.details > div.title > a").attr("href");
    if (!_0x381e26) {
      let _0x2983f2 = _0x46ed5b("#contenedor > div.module > div.content.rigth.csearch > div > div.no-result.animation-2 > h2 > span").text();
      return _0x2d01f2("No results to show with *" + _0x2983f2 + '*');
    }
    let _0x2be399 = await axios.get('' + _0x381e26);
    _0x46ed5b = cheerio.load(_0x2be399.data);
    const _0x53e791 = _0x46ed5b("#single > div.content.right > div.sheader > div.data > h1").text();
    const _0x4059b4 = _0x46ed5b("#single > div.content.right > div.sheader > div.data > div.extra > span.date").text();
    const _0x565f1e = _0x46ed5b("#single > div.content.right > div.sheader > div.data > div.extra > span.country").text();
    const _0x3f9ec6 = _0x46ed5b("#single > div.content.right > div.sheader > div.data > div.extra > span.runtime").text();
    const _0x5da131 = _0x46ed5b("#repimdb > strong").text();
    const _0x1ff39 = _0x46ed5b("#cast > div:nth-child(2) > div > div.data > div.name > a").text();
    const _0x2a9b6e = _0x46ed5b("#single > div.content.right > div.sheader > div.poster > img").attr("src");
    let _0x4b39b2 = "🍟 *" + _0x53e791 + "*\n\n🧿 *Rᴇʟᴇᴀꜱᴇ Dᴀᴛᴇ :* " + _0x4059b4 + "\n\n🌍 *Cᴏᴜɴᴛʀʏ :* " + _0x565f1e + "\n\n⏱ *Dᴜʀᴀᴛɪᴏɴ :* " + _0x3f9ec6 + "\n\n⭐ *IMDB Rᴀᴛᴇ :* " + _0x5da131 + "\n\n🤵‍♂ *Dɪʀᴇᴄᴛᴏʀ:* " + _0x1ff39 + "\n\n🖇 *Lɪɴᴋ :* " + _0x381e26 + "\n\n> *✨ Powered By SUHAS-MD-V9 💞*";
    await _0x4b868b.sendMessage(_0x30cfa2, {
      'image': {
        'url': _0x2a9b6e
      },
      'caption': _0x4b39b2
    }, {
      'quoted': _0x27181f
    });
  } catch (_0x401b65) {
    console.log(_0x401b65);
    _0x2d01f2('' + _0x401b65);
  }
});
cmd({
  'pattern': "sinhalasublk",
  'alias': ["cineinfo"],
  'desc': "Search movies in sinhalasub.lk.",
  'category': 'search',
  'filename': __filename
}, async (_0x1e4285, _0x59764, _0x3d0715, {
  from: _0x490774,
  quoted: _0x24942a,
  body: _0x3a0b67,
  isCmd: _0x373899,
  command: _0x272331,
  args: _0x116239,
  q: _0x40aea5,
  isGroup: _0x5567ef,
  sender: _0x43728b,
  senderNumber: _0x3a2f92,
  botNumber2: _0x4a93b5,
  botNumber: _0x5381ce,
  pushname: _0x599c57,
  isMe: _0x1c7961,
  isOwner: _0x39356b,
  groupMetadata: _0x1eb995,
  groupName: _0x684a6d,
  participants: _0x275be9,
  groupAdmins: _0x48a970,
  isBotAdmins: _0x5287e6,
  isAdmins: _0x2b0af0,
  reply: _0x5968f1
}) => {
  try {
    const _0x3ad581 = 'https://sinhalasub.lk/?s=' + _0x40aea5;
    const _0x2b0db0 = await axios.get(_0x3ad581);
    const _0x1462ac = cheerio.load(_0x2b0db0.data);
    const _0x4b42b6 = _0x1462ac("#contenedor > div.module > div.content.rigth.csearch > div > div.no-result.animation-2 > h2").text();
    if (_0x4b42b6 == "No results to show with " + _0x40aea5) {
      await _0x3d0715.react('❌');
      return _0x5968f1("*❗️ Mᴏᴠɪᴇ Nᴏᴛ Fᴏᴜɴᴅ. ❗️*");
    }
    await _0x3d0715.react('🎬');
    const _0x5378f0 = [];
    const _0x47c8d4 = _0x1462ac("article");
    _0x47c8d4.each(function () {
      const _0x35d9d3 = _0x1462ac(this).find(".title a").text();
      const _0x5c5726 = _0x1462ac(this).find('.rating').text();
      const _0x2b88df = _0x1462ac(this).find(".year").text();
      const _0x7fe78d = _0x1462ac(this).find(".title a").attr("href");
      _0x5378f0.push({
        'title': _0x35d9d3,
        'rating': _0x5c5726,
        'year': _0x2b88df,
        'link': _0x7fe78d
      });
    });
    const _0x47c74b = _0x5378f0[0x0].link;
    const _0x5468d6 = await axios.get(_0x47c74b);
    const _0x5ed00f = cheerio.load(_0x5468d6.data);
    const _0x269df9 = _0x5ed00f("tr:nth-child(1) > td:nth-child(1) > a").attr('href');
    const _0x5bc606 = _0x5ed00f("tr:nth-child(1) > td:nth-child(3)").text();
    const _0x11a967 = _0x5bc606.split(" ")[0x0];
    const _0x3a8d5f = _0x5bc606.search('MB');
    const _0x343e78 = _0x5ed00f("tr:nth-child(2) > td:nth-child(1) > a").attr("href");
    const _0x47dd11 = _0x5ed00f("tr:nth-child(2) > td:nth-child(3)").text();
    const _0xcb2c73 = _0x47dd11.split(" ")[0x0];
    const _0x5694ce = _0x47dd11.search('MB');
    const _0x84a4d4 = _0x5ed00f("tr:nth-child(3) > td:nth-child(1) > a").attr("href");
    const _0xb675bd = _0x5ed00f("tr:nth-child(3) > td:nth-child(3)").text();
    const _0xaf6037 = _0xb675bd.split(" ")[0x0];
    const _0x1b4d77 = _0xb675bd.search('MB');
    const _0x2fa577 = _0x5ed00f("#single > div.content.right > div.sheader > div.poster > img").attr("src");
    let _0x18b33c = 'MB';
    let _0x3e8459 = 'MB';
    let _0x30d3f2 = 'MB';
    if (_0x3a8d5f == -0x1) {
      _0x18b33c = 'GB';
    }
    if (_0x5694ce == -0x1) {
      _0x3e8459 = 'GB';
    }
    if (_0x1b4d77 == -0x1) {
      _0x30d3f2 = 'GB';
    }
    let _0x5b883a = "\n*📝 Tɪᴛʟᴇ :* " + _0x5378f0[0x0].title + "\n*⭐️ Rᴀᴛɪɴɢ :* " + _0x5378f0[0x0].rating + "\n*📆 Yᴇᴀʀ :* " + _0x5378f0[0x0].year + "\n*🔗 Uʀʟ :* " + _0x5378f0[0x0].link + "\n\n*📥 Download Links 📥*\n*1️⃣ 1080P(" + _0x11a967 + _0x18b33c + ") :*\n" + _0x269df9 + "\n\n*2️⃣ 720P(" + _0xcb2c73 + _0x3e8459 + ") :*\n" + _0x343e78 + "\n\n*3️⃣ 480P(" + _0xaf6037 + _0x30d3f2 + ") :*\n" + _0x84a4d4 + "\n\n*4️⃣ Sɪɴʜᴀʟᴀ Sᴜʙᴛɪᴛʟᴇᴀ :*\n\n> *✨ Powered By SUHAS-MD-V9 💞*";
    await _0x1e4285.sendMessage(_0x490774, {
      'image': {
        'url': _0x2fa577
      },
      'caption': _0x5b883a
    }, {
      'quoted': _0x59764
    });
  } catch (_0x508e90) {
    console.log(_0x508e90);
    _0x5968f1('' + _0x508e90);
  }
});
