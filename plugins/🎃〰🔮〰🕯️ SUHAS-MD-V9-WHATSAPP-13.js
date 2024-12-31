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
async function xvideos(_0x5bec50) {
  return new Promise((_0x3c711d, _0x256674) => {
    fetch("https://www.xvideos.com/search/" + _0x5bec50 + '/' + (Math.floor(Math.random() * 0x3) + 0x1), {
      'method': "get"
    }).then(_0x4c1fde => _0x4c1fde.text()).then(_0x367ff5 => {
      const _0x1e82fe = cheerio.load(_0x367ff5, {
        'xmlMode': false
      });
      const _0x5edd9c = [];
      const _0x16a913 = [];
      const _0x34ad62 = [];
      const _0x3a587a = [];
      _0x1e82fe('div.mozaique').each(function (_0x1d82d1, _0x142418) {
        _0x1e82fe(_0x142418).find("div.thumb").each(function (_0x5742b8, _0x5ae9d4) {
          _0x16a913.push("https://www.xvideos.com" + _0x1e82fe(_0x5ae9d4).find('a').attr("href").replace("/THUMBNUM/", '/'));
        });
      });
      _0x1e82fe("div.mozaique").each(function (_0x12d786, _0x4a23f1) {
        _0x1e82fe(_0x4a23f1).find("div.thumb-under").each(function (_0x25ffc1, _0x57865e) {
          _0x34ad62.push(_0x1e82fe(_0x57865e).find("p.metadata").text());
          _0x1e82fe(_0x57865e).find('a').each(function (_0x1d0c22, _0x828970) {
            _0x5edd9c.push(_0x1e82fe(_0x828970).attr("title"));
          });
        });
      });
      for (let _0x1b7fb5 = 0x0; _0x1b7fb5 < _0x5edd9c.length; _0x1b7fb5++) {
        _0x3a587a.push({
          'title': _0x5edd9c[_0x1b7fb5],
          'info': _0x34ad62[_0x1b7fb5],
          'link': _0x16a913[_0x1b7fb5]
        });
      }
      _0x3c711d({
        'status': true,
        'result': _0x3a587a
      });
    })["catch"](_0xddc2a4 => _0x256674({
      'status': false,
      'result': _0xddc2a4
    }));
  });
}
cmd({
  'pattern': "xvideo",
  'alias': ["xvideos"],
  'use': ".xvideo <query>",
  'react': '🤫',
  'desc': "Search and DOWNLOAD VIDEOS from xvideos.",
  'category': "search",
  'filename': __filename
}, async (_0xc8f1f0, _0x2fc327, _0x21bf05, {
  from: _0x2978ac,
  l: _0x4e6596,
  quoted: _0x2d4e36,
  body: _0x3a39b6,
  isCmd: _0x151e77,
  command: _0x3dc1cf,
  args: _0x2975db,
  q: _0x43506e,
  isGroup: _0x151a56,
  sender: _0x1f2e22,
  senderNumber: _0x536cbf,
  botNumber2: _0x272d91,
  botNumber: _0x1a8b26,
  pushname: _0x48126b,
  isMe: _0x2a78ec,
  isOwner: _0x5a9873,
  groupMetadata: _0x16034e,
  groupName: _0x2ff27e,
  participants: _0x108259,
  groupAdmins: _0x45b116,
  isBotAdmins: _0x2b1644,
  isAdmins: _0x4a9e64,
  reply: _0x25eb2b
}) => {
  try {
    if (!_0x43506e) {
      return _0x25eb2b("🚩 *Please give me words to search*");
    }
    let _0x2c41cf = await xvideo(_0x43506e);
    const _0x292627 = _0x2c41cf.result;
    if (_0x292627.length < 0x1) {
      return await _0xc8f1f0.sendMessage(_0x2978ac, {
        'text': "🚩 *I couldn't find anything :(*"
      }, {
        'quoted': _0x2fc327
      });
    }
    var _0x222232 = [];
    _0x2c41cf.result.map(_0x47a53d => {
      _0x222232.push({
        'rows': [{
          'title': '' + _0x47a53d.title,
          'description': "Info : " + _0x47a53d.info,
          'id': ".xvideosdl " + _0x47a53d.link
        }]
      });
    });
    const _0x147ce3 = [{
      'name': 'single_select',
      'buttonParamsJson': JSON.stringify({
        'title': "Tap Here!",
        'sections': _0x222232
      })
    }];
    let _0x48d0ac = {
      'image': "https://thumbs.dreamstime.com/z/ny-usa-february-homepage-xvideos-website-display-pc-url-xvideos-com-homepage-xvideos-website-display-pc-url-xvideos-174442028.jpg",
      'header': '',
      'footer': "> *✨ Powered By SUHAS-MD-V9 💞*",
      'body': "🤫 𝗫𝗩𝗜𝗗𝗘𝗢𝗦 𝗦𝗘𝗔𝗥𝗖𝗛 🤫"
    };
    return _0xc8f1f0.sendButtonMessage(_0x2978ac, _0x147ce3, _0x21bf05, _0x48d0ac);
  } catch (_0x268395) {
    console.log(_0x268395);
    await _0xc8f1f0.sendMessage(_0x2978ac, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x2fc327
    });
  }
});
async function xdl(_0x27c85e) {
  return new Promise((_0x472ad1, _0x4bf189) => {
    fetch('' + _0x27c85e, {
      'method': "get"
    }).then(_0xc94c1c => _0xc94c1c.text()).then(_0x5e8ad3 => {
      const _0x134120 = cheerio.load(_0x5e8ad3, {
        'xmlMode': false
      });
      const _0x346ac8 = _0x134120("meta[property=\"og:title\"]").attr('content');
      const _0x21b24d = _0x134120("meta[property=\"og:duration\"]").attr("content");
      const _0x51d317 = _0x134120("meta[property=\"og:image\"]").attr("content");
      const _0x3dc8d8 = _0x134120("meta[property=\"og:video:type\"]").attr("content");
      const _0x1017ff = _0x134120("meta[property=\"og:video:width\"]").attr("content");
      const _0x428b61 = _0x134120("meta[property=\"og:video:height\"]").attr('content');
      const _0x1f791a = _0x134120("span.metadata").text();
      const _0x3a6462 = _0x134120("#video-player-bg > script:nth-child(6)").html();
      const _0x53089d = {
        'low': (_0x3a6462.match("html5player.setVideoUrlLow\\('(.*?)'\\);") || [])[0x1],
        'high': _0x3a6462.match("html5player.setVideoUrlHigh\\('(.*?)'\\);" || [])[0x1],
        'HLS': _0x3a6462.match("html5player.setVideoHLS\\('(.*?)'\\);" || [])[0x1],
        'thumb': _0x3a6462.match("html5player.setThumbUrl\\('(.*?)'\\);" || [])[0x1],
        'thumb69': _0x3a6462.match("html5player.setThumbUrl169\\('(.*?)'\\);" || [])[0x1],
        'thumbSlide': _0x3a6462.match("html5player.setThumbSlide\\('(.*?)'\\);" || [])[0x1],
        'thumbSlideBig': _0x3a6462.match("html5player.setThumbSlideBig\\('(.*?)'\\);" || [])[0x1]
      };
      _0x472ad1({
        'status': true,
        'result': {
          'title': _0x346ac8,
          'URL': _0x27c85e,
          'duration': _0x21b24d,
          'image': _0x51d317,
          'videoType': _0x3dc8d8,
          'videoWidth': _0x1017ff,
          'videoHeight': _0x428b61,
          'info': _0x1f791a,
          'files': _0x53089d
        }
      });
    })["catch"](_0x577d39 => _0x4bf189({
      'status': false,
      'result': _0x577d39
    }));
  });
}
cmd({
  'pattern': "xvideosdown",
  'alias': ["dlxvideos", "xvideosdl", "xvid"],
  'react': '🤫',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x1faef3, _0x4f2f47, _0x160ceb, {
  from: _0x15cd8d,
  l: _0x150082,
  quoted: _0x906cfc,
  body: _0x28e8a2,
  isCmd: _0x27eb55,
  command: _0xdef3bd,
  args: _0x5a9b5,
  q: _0x36be72,
  isGroup: _0x283ca5,
  sender: _0x16516b,
  senderNumber: _0x240d3e,
  botNumber2: _0x3dc4f4,
  botNumber: _0x24458d,
  pushname: _0x5b5be4,
  isMe: _0x3909ce,
  isOwner: _0x3dcd7a,
  groupMetadata: _0x513799,
  groupName: _0x27fca7,
  participants: _0x17f479,
  groupAdmins: _0x37fbe6,
  isBotAdmins: _0x2c13d2,
  isAdmins: _0x2f940f,
  reply: _0x53858d
}) => {
  try {
    if (!_0x36be72) {
      return _0x53858d("*Please give me xvideos url !!*");
    }
    let _0x2fe8da = await xdl(_0x36be72);
    let _0x20e49d = "🤫 𝗫𝗩𝗜𝗗𝗘𝗢𝗦 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🤫\n\n";
    _0x20e49d += "*🚩 Title* : " + _0x2fe8da.result.title + "\n\n";
    _0x20e49d += "*ℹ️ Info* : " + _0x2fe8da.result.info + "\n\n";
    _0x20e49d += "*⏰ Duration* : " + _0x2fe8da.result.duration + "\n\n";
    _0x20e49d += "> *✨ Powered By SUHAS-MD-V9 💞*";
    let _0x13fb94 = _0x2fe8da.result.title;
    await _0x1faef3.sendMessage(_0x15cd8d, {
      'document': {
        'url': _0x2fe8da.result.files.high
      },
      'mimetype': "video/mp4",
      'fileName': _0x13fb94 + ".mp4",
      'jpegThumbnail': await (await fetch(_0x2fe8da.result.image)).buffer(),
      'caption': _0x20e49d
    }, {
      'quoted': _0x4f2f47
    });
  } catch (_0x501825) {
    _0x53858d("*Error !!*");
    console.log(_0x501825);
  }
});
