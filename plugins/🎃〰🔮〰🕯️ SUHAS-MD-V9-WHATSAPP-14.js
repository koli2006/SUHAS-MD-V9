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
const {
  SinhalaSub
} = require("@sl-code-lords/movie-api");
const {
  PixaldrainDL
} = require("pixaldrain-sinhalasub");
cmd({
  'pattern': "sinhalasubdl",
  'desc': "Search for a movie and get details and download options.",
  'category': "movie",
  'react': "🧚‍♂️",
  'filename': __filename
}, async (_0xc4cb6f, _0x55c77c, _0xad9cb7, {
  from: _0x4fe176,
  q: _0x34013f,
  reply: _0x57bb14
}) => {
  try {
    const _0x167fae = _0x34013f.trim();
    if (!_0x167fae) {
      return _0x57bb14("Please provide a movie or TV show name to search.");
    }
    const _0x402819 = await SinhalaSub.get_list.by_search(_0x167fae);
    if (!_0x402819.status || _0x402819.results.length === 0x0) {
      return _0x57bb14("No results found.");
    }
    let _0x45b392 = "*Search Results:*\n\n";
    _0x402819.results.forEach((_0x685d7f, _0x37e1bc) => {
      _0x45b392 += _0x37e1bc + 0x1 + ". " + _0x685d7f.title + "\nType: " + _0x685d7f.type + "\nLink: " + _0x685d7f.link + "\n\n";
    });
    const _0x4cb155 = async _0x205dd0 => {
      const _0x28390d = _0x205dd0.messages[0x0];
      if (!_0x28390d.message || !_0x28390d.message.extendedTextMessage) {
        return;
      }
      const _0x34e7f8 = _0x28390d.message.extendedTextMessage.text.trim();
      const _0x212463 = parseInt(_0x34e7f8) - 0x1;
      if (_0x212463 < 0x0 || _0x212463 >= _0x402819.results.length) {
        await _0xc4cb6f.sendMessage(_0x4fe176, {
          'react': {
            'text': '❌',
            'key': _0x55c77c.key
          }
        });
        return _0x57bb14("❗ Invalid selection. Please choose a valid number from the search results.");
      }
      const _0x10c917 = _0x402819.results[_0x212463];
      const _0x3d984e = _0x10c917.link;
      const _0x26bff4 = await SinhalaSub.movie(_0x3d984e);
      if (!_0x26bff4 || !_0x26bff4.status || !_0x26bff4.result) {
        return _0x57bb14("❗ Movie details not found.");
      }
      const _0x4e73a9 = _0x26bff4.result;
      let _0x14f6cf = '*' + _0x4e73a9.title + "*\n\n";
      _0x14f6cf += "📅 Rᴇʟᴇᴀꜱᴇ ᴅᴀᴛᴇ: " + _0x4e73a9.release_date + "\n";
      _0x14f6cf += "🗺 Cᴏᴜɴᴛʀʏ: " + _0x4e73a9.country + "\n";
      _0x14f6cf += "⏰ Dᴜʀᴀᴛɪᴏɴ: " + _0x4e73a9.duration + "\n";
      const _0x184ac2 = Array.isArray(_0x4e73a9.genres) ? _0x4e73a9.genres.join(", ") : _0x4e73a9.genres;
      _0x14f6cf += "🎭 Gᴇɴʀᴇꜱ: " + _0x184ac2 + "\n";
      _0x14f6cf += "⭐ Iᴍᴅʙ Rᴀᴛɪɴɢ: " + _0x4e73a9.IMDb_Rating + "\n";
      _0x14f6cf += "🎬 Dɪʀᴇᴄᴛᴏʀ: " + _0x4e73a9.director.name + "\n\n";
      _0x14f6cf += "🔢 𝗥𝗘𝗣𝗟𝗬 𝗧𝗛𝗘 𝗤𝗨𝗔𝗟𝗜𝗧𝗬 𝗕𝗘𝗟𝗢𝗪\n\n";
      _0x14f6cf += "*1 | SD 480p*\n";
      _0x14f6cf += "*2 | HD 720p*\n";
      _0x14f6cf += "*3 | HHD 1080p*\n\n";
      _0x14f6cf += "> *✨ Powered By SUHAS-MD-V9 💞*";
      const _0x3cccde = _0x4e73a9.images && _0x4e73a9.images.length > 0x0 ? _0x4e73a9.images[0x0] : null;
      const _0x165203 = await _0xc4cb6f.sendMessage(_0x4fe176, {
        'image': {
          'url': _0x3cccde
        },
        'caption': _0x14f6cf,
        'contextInfo': {
          'forwardingScore': 0x3e7,
          'isForwarded': true
        }
      }, {
        'quoted': _0x55c77c
      });
      const _0x3a52dd = async _0x155aa8 => {
        const _0x21d2e7 = _0x155aa8.messages[0x0];
        if (!_0x21d2e7.message || !_0x21d2e7.message.extendedTextMessage) {
          return;
        }
        const _0x45fc55 = _0x21d2e7.message.extendedTextMessage.text.trim();
        if (_0x21d2e7.message.extendedTextMessage.contextInfo.stanzaId === _0x165203.key.id) {
          let _0x4198b0;
          switch (_0x45fc55) {
            case '1':
              _0x4198b0 = "SD 480p";
              break;
            case '2':
              _0x4198b0 = "HD 720p";
              break;
            case '3':
              _0x4198b0 = "FHD 1080p";
              break;
            default:
              await _0xc4cb6f.sendMessage(_0x4fe176, {
                'react': {
                  'text': '❌',
                  'key': _0x55c77c.key
                }
              });
              return _0x57bb14("❗ Invalid option. Please select from 1, 2, or 3.");
          }
          try {
            const _0x296e84 = await PixaldrainDL(_0x3d984e, _0x4198b0, "direct");
            if (_0x296e84) {
              await _0xc4cb6f.sendMessage(_0x4fe176, {
                'document': {
                  'url': _0x296e84
                },
                'mimetype': "video/mp4",
                'fileName': _0x4e73a9.title + ".mp4",
                'caption': _0x4e73a9.title + "\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
              }, {
                'quoted': _0x55c77c
              });
              await _0xc4cb6f.sendMessage(_0x4fe176, {
                'react': {
                  'text': '✅',
                  'key': _0x55c77c.key
                }
              });
            } else {
              await _0xc4cb6f.sendMessage(_0x4fe176, {
                'react': {
                  'text': '❌',
                  'key': _0x55c77c.key
                }
              });
              return _0x57bb14("❗ Could not find the " + _0x4198b0 + " download link. Please check the URL or try another quality.");
            }
          } catch (_0x1168f9) {
            console.error("Error in PixaldrainDL function:", _0x1168f9);
            await _0xc4cb6f.sendMessage(_0x4fe176, {
              'react': {
                'text': '❌',
                'key': _0x55c77c.key
              }
            });
            return _0x57bb14("❗ An error occurred while processing your download request.");
          }
        }
      };
      _0xc4cb6f.ev.on("messages.upsert", _0x3a52dd);
      setTimeout(() => {
        _0xc4cb6f.ev.off("messages.upsert", _0x3a52dd);
      }, 0xea60);
    };
    _0xc4cb6f.ev.on("messages.upsert", _0x4cb155);
    setTimeout(() => {
      _0xc4cb6f.ev.off("messages.upsert", _0x4cb155);
    }, 0xea60);
  } catch (_0x23b412) {
    console.log(_0x23b412);
    await _0xc4cb6f.sendMessage(_0x4fe176, {
      'react': {
        'text': '❌',
        'key': _0x55c77c.key
      }
    });
    return _0x57bb14("❗ Error: " + _0x23b412.message);
  }
});
