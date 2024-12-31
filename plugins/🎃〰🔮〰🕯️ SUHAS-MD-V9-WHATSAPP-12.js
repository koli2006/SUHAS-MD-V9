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
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("../lib/functions");
const cheerio = require("cheerio");
const fetch = require("node-fetch");
async function xnxxs(_0x10f672) {
  return new Promise((_0x25a6a8, _0x1869fe) => {
    fetch("https://www.xnxx.com/search/" + _0x10f672 + '/' + (Math.floor(Math.random() * 0x3) + 0x1), {
      'method': 'get'
    }).then(_0x44393d => _0x44393d.text()).then(_0x1ffc54 => {
      const _0x43efcc = cheerio.load(_0x1ffc54, {
        'xmlMode': false
      });
      const _0x398775 = [];
      const _0x18c45b = [];
      const _0x333f31 = [];
      const _0x23b448 = [];
      _0x43efcc("div.mozaique").each(function (_0x2eeec1, _0x4805d9) {
        _0x43efcc(_0x4805d9).find('div.thumb').each(function (_0x43d9db, _0x2f6aa6) {
          _0x18c45b.push("https://www.xnxx.com" + _0x43efcc(_0x2f6aa6).find('a').attr('href').replace('/THUMBNUM/', '/'));
        });
      });
      _0x43efcc("div.mozaique").each(function (_0x4b34ae, _0x36167a) {
        _0x43efcc(_0x36167a).find("div.thumb-under").each(function (_0x1fc1c3, _0x6ff785) {
          _0x333f31.push(_0x43efcc(_0x6ff785).find("p.metadata").text());
          _0x43efcc(_0x6ff785).find('a').each(function (_0x542347, _0x12f19a) {
            _0x398775.push(_0x43efcc(_0x12f19a).attr("title"));
          });
        });
      });
      for (let _0x1b26ab = 0x0; _0x1b26ab < _0x398775.length; _0x1b26ab++) {
        _0x23b448.push({
          'title': _0x398775[_0x1b26ab],
          'info': _0x333f31[_0x1b26ab],
          'link': _0x18c45b[_0x1b26ab]
        });
      }
      _0x25a6a8({
        'status': true,
        'result': _0x23b448
      });
    })["catch"](_0x1131c9 => _0x1869fe({
      'status': false,
      'result': _0x1131c9
    }));
  });
}
cmd({
  'pattern': "xnxx",
  'alias': ["xnxxs"],
  'use': ".xnxx <query>",
  'react': '🤫',
  'desc': "Search and DOWNLOAD VIDEOS from xnxx.",
  'category': "search",
  'filename': __filename
}, async (_0x2cb2ee, _0x2e26f3, _0x32f95c, {
  from: _0x42e423,
  l: _0x24f6c1,
  quoted: _0xdc5aad,
  body: _0x2dcaea,
  isCmd: _0x3800b7,
  command: _0x1a253a,
  args: _0x16381b,
  q: _0x2f6100,
  isGroup: _0x1d7fd6,
  sender: _0x125567,
  senderNumber: _0x3a0e39,
  botNumber2: _0x4192cd,
  botNumber: _0x4fcb52,
  pushname: _0x5f2309,
  isMe: _0x3a8ffe,
  isOwner: _0x50def1,
  groupMetadata: _0x1414e5,
  groupName: _0x544c3e,
  participants: _0x951bef,
  groupAdmins: _0x4a486e,
  isBotAdmins: _0xf01936,
  isAdmins: _0x11e6c1,
  reply: _0x568cd2
}) => {
  try {
    if (!_0x2f6100) {
      return _0x568cd2("🚩 *Please give me words to search*");
    }
    let _0x2db853 = await xnxx(_0x2f6100);
    const _0x95f766 = _0x2db853.result;
    if (_0x95f766.length < 0x1) {
      return await _0x2cb2ee.sendMessage(_0x42e423, {
        'text': "🚩 *I couldn't find anything :(*"
      }, {
        'quoted': _0x2e26f3
      });
    }
    var _0x21a2f6 = [];
    _0x2db853.result.map(_0x1f0678 => {
      _0x21a2f6.push({
        'rows': [{
          'title': '' + _0x1f0678.title,
          'description': "Info : " + _0x1f0678.info,
          'id': ".xnxxdl " + _0x1f0678.link
        }]
      });
    });
    const _0x24a16f = [{
      'name': "single_select",
      'buttonParamsJson': JSON.stringify({
        'title': "Tap Here!",
        'sections': _0x21a2f6
      })
    }];
    let _0x2a249c = {
      'image': "https://thumbs.dreamstime.com/z/ny-usa-february-homepage-xnxx-website-display-pc-url-xnxx-com-homepage-xnxx-website-display-pc-url-xnxx-174442028.jpg",
      'header': '',
      'footer': "> *✨ Powered By SUHAS-MD-V9 💞*",
      'body': "🤫 𝗫𝗡𝗫𝗫 𝗦𝗘𝗔𝗥𝗖𝗛 🤫"
    };
    return _0x2cb2ee.sendButtonMessage(_0x42e423, _0x24a16f, _0x32f95c, _0x2a249c);
  } catch (_0x9cfb41) {
    console.log(_0x9cfb41);
    await _0x2cb2ee.sendMessage(_0x42e423, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x2e26f3
    });
  }
});
async function xdl(_0x3a7d7d) {
  return new Promise((_0xd9a09f, _0x58b70a) => {
    fetch('' + _0x3a7d7d, {
      'method': 'get'
    }).then(_0x366030 => _0x366030.text()).then(_0x1b8c99 => {
      const _0x478188 = cheerio.load(_0x1b8c99, {
        'xmlMode': false
      });
      const _0x173146 = _0x478188("meta[property=\"og:title\"]").attr("content");
      const _0x3614bc = _0x478188("meta[property=\"og:duration\"]").attr('content');
      const _0x4d64ed = _0x478188("meta[property=\"og:image\"]").attr("content");
      const _0x2836c1 = _0x478188("meta[property=\"og:video:type\"]").attr('content');
      const _0x4b9b02 = _0x478188("meta[property=\"og:video:width\"]").attr("content");
      const _0x3dc547 = _0x478188("meta[property=\"og:video:height\"]").attr('content');
      const _0xfb05a5 = _0x478188("span.metadata").text();
      const _0x2f07cc = _0x478188("#video-player-bg > script:nth-child(6)").html();
      const _0x20c2a3 = {
        'low': (_0x2f07cc.match("html5player.setVideoUrlLow\\('(.*?)'\\);") || [])[0x1],
        'high': _0x2f07cc.match("html5player.setVideoUrlHigh\\('(.*?)'\\);" || [])[0x1],
        'HLS': _0x2f07cc.match("html5player.setVideoHLS\\('(.*?)'\\);" || [])[0x1],
        'thumb': _0x2f07cc.match("html5player.setThumbUrl\\('(.*?)'\\);" || [])[0x1],
        'thumb69': _0x2f07cc.match("html5player.setThumbUrl169\\('(.*?)'\\);" || [])[0x1],
        'thumbSlide': _0x2f07cc.match("html5player.setThumbSlide\\('(.*?)'\\);" || [])[0x1],
        'thumbSlideBig': _0x2f07cc.match("html5player.setThumbSlideBig\\('(.*?)'\\);" || [])[0x1]
      };
      _0xd9a09f({
        'status': true,
        'result': {
          'title': _0x173146,
          'URL': _0x3a7d7d,
          'duration': _0x3614bc,
          'image': _0x4d64ed,
          'videoType': _0x2836c1,
          'videoWidth': _0x4b9b02,
          'videoHeight': _0x3dc547,
          'info': _0xfb05a5,
          'files': _0x20c2a3
        }
      });
    })["catch"](_0x483853 => _0x58b70a({
      'status': false,
      'result': _0x483853
    }));
  });
}
cmd({
  'pattern': "xnxxdown",
  'alias': ["dlxnxx", "xnxxdl"],
  'react': '🤫',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x4e2314, _0x331798, _0x48c92a, {
  from: _0x3d487c,
  l: _0x10b25f,
  quoted: _0x3098e3,
  body: _0x246803,
  isCmd: _0xd3f727,
  command: _0x6e1d08,
  args: _0x33c977,
  q: _0x2298fd,
  isGroup: _0x144b14,
  sender: _0x296902,
  senderNumber: _0x1eb973,
  botNumber2: _0x4c0931,
  botNumber: _0x50ca31,
  pushname: _0x1e457c,
  isMe: _0x5a985a,
  isOwner: _0x5243b0,
  groupMetadata: _0x551333,
  groupName: _0x2e4137,
  participants: _0x1223b1,
  groupAdmins: _0x3eeba8,
  isBotAdmins: _0x488917,
  isAdmins: _0x503977,
  reply: _0x54337d
}) => {
  try {
    if (!_0x2298fd) {
      return _0x54337d("*Please give me xnxx url !!*");
    }
    let _0x2bf205 = await xdl(_0x2298fd);
    let _0xe74c7a = "🤫 𝗫𝗡𝗫𝗫 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🤫\n\n";
    _0xe74c7a += "*🚩 Title* : " + _0x2bf205.result.title + "\n\n";
    _0xe74c7a += "*ℹ️ Info* : " + _0x2bf205.result.info + "\n\n";
    _0xe74c7a += "*⏰ Duration* : " + _0x2bf205.result.duration + "\n\n";
    _0xe74c7a += "> *✨ Powered By SUHAS-MD-V9 💞*";
    let _0x25003b = _0x2bf205.result.title;
    await _0x4e2314.sendMessage(_0x3d487c, {
      'document': {
        'url': _0x2bf205.result.files.high
      },
      'mimetype': 'video/mp4',
      'fileName': _0x25003b + ".mp4",
      'jpegThumbnail': await (await fetch(_0x2bf205.result.image)).buffer(),
      'caption': _0xe74c7a
    }, {
      'quoted': _0x331798
    });
  } catch (_0x2540b4) {
    _0x54337d("*Error !!*");
    console.log(_0x2540b4);
  }
});
