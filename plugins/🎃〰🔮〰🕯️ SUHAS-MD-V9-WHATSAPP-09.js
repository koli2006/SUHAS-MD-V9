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
const Hiru = require("hirunews-scrap");
const Esana = require("@sl-code-lords/esana-news");
let activeGroups = {};
let lastNewsTitles = {};
async function getLatestNews() {
  let _0x27e2fa = [];
  try {
    const _0x5f5163 = new Hiru();
    const _0x6258af = await _0x5f5163.BreakingNews();
    _0x27e2fa.push({
      'title': _0x6258af.results.title,
      'content': _0x6258af.results.news,
      'date': _0x6258af.results.date
    });
  } catch (_0x371661) {
    console.error("Error fetching Hiru News: " + _0x371661.message);
  }
  try {
    const _0x46f4bc = new Esana();
    const _0x1803ae = await _0x46f4bc.getLatestNews();
    if (_0x1803ae && _0x1803ae.title && _0x1803ae.description && _0x1803ae.publishedAt) {
      _0x27e2fa.push({
        'title': _0x1803ae.title,
        'content': _0x1803ae.description,
        'date': _0x1803ae.publishedAt
      });
    } else {
      console.error("Error: Esana News returned invalid data.");
    }
  } catch (_0x144520) {
    console.error("Error fetching Esana News: " + _0x144520.message);
  }
  return _0x27e2fa;
}
async function checkAndPostNews(_0x483b, _0x307896) {
  const _0x37bace = await getLatestNews();
  _0x37bace.forEach(async _0x5b5df1 => {
    if (!lastNewsTitles[_0x307896]) {
      lastNewsTitles[_0x307896] = [];
    }
    if (!lastNewsTitles[_0x307896].includes(_0x5b5df1.title)) {
      await _0x483b.sendMessage(_0x307896, {
        'text': "*📰 SUHAS-MD NEWS UPDATE 📰*\n\n*◈ᴛɪᴛʟᴇ :- " + _0x5b5df1.title + "*\n\n *◈ᴄᴏɴᴛᴇɴᴛ :- " + _0x5b5df1.content + "*\n\n *◈ᴛɪᴍᴇ:- " + _0x5b5df1.date + "*\n\n\n> *✨ Powered By SUHAS-MD-V9 💞*"
      });
      lastNewsTitles[_0x307896].push(_0x5b5df1.title);
      if (lastNewsTitles[_0x307896].length > 0x64) {
        lastNewsTitles[_0x307896].shift();
      }
    }
  });
}
cmd({
  'pattern': "startnews",
  'desc': "Enable Sri Lankan news updates in this group",
  'isGroup': true,
  'react': '📰',
  'filename': __filename
}, async (_0x287361, _0x5e1986, _0x10ea22, {
  from: _0x1750d9,
  isGroup: _0x1ba692,
  participants: _0x2d0431
}) => {
  try {
    if (_0x1ba692) {
      const _0x5f4934 = _0x2d0431.some(_0x497b96 => _0x497b96.id === _0x5e1986.sender && _0x497b96.admin);
      const _0x27ec1b = _0x5e1986.sender === _0x287361.user.jid;
      if (_0x5f4934 || _0x27ec1b) {
        if (!activeGroups[_0x1750d9]) {
          activeGroups[_0x1750d9] = true;
          await _0x287361.sendMessage(_0x1750d9, {
            'text': "📰 SUHAS-MD 24/7 News Activated."
          });
          if (!activeGroups.interval) {
            activeGroups.interval = setInterval(async () => {
              for (const _0x24c92b in activeGroups) {
                if (activeGroups[_0x24c92b] && _0x24c92b !== 'interval') {
                  await checkAndPostNews(_0x287361, _0x24c92b);
                }
              }
            }, 0xea60);
          }
        } else {
          await _0x287361.sendMessage(_0x1750d9, {
            'text': "📰 24/7 News Already Activated."
          });
        }
      } else {
        await _0x287361.sendMessage(_0x1750d9, {
          'text': "🚫 This command can only be used by group admins or the bot owner."
        });
      }
    } else {
      await _0x287361.sendMessage(_0x1750d9, {
        'text': "This command can only be used in groups."
      });
    }
  } catch (_0x4a5070) {
    console.error("Error in news command: " + _0x4a5070.message);
    await _0x287361.sendMessage(_0x1750d9, {
      'text': "Failed to activate the news service."
    });
  }
});
cmd({
  'pattern': "stopnews",
  'desc': "Disable Sri Lankan news updates in this group",
  'isGroup': true,
  'react': '🚫',
  'filename': __filename
}, async (_0x43de69, _0x4894ba, _0x412f2f, {
  from: _0xac2df0,
  isGroup: _0x1db5c0,
  participants: _0x1ae3df
}) => {
  try {
    if (_0x1db5c0) {
      const _0x1d125c = _0x1ae3df.some(_0x4e32eb => _0x4e32eb.id === _0x4894ba.sender && _0x4e32eb.admin);
      const _0x3574c0 = _0x4894ba.sender === _0x43de69.user.jid;
      if (_0x1d125c || _0x3574c0) {
        if (activeGroups[_0xac2df0]) {
          delete activeGroups[_0xac2df0];
          await _0x43de69.sendMessage(_0xac2df0, {
            'text': "🛑 SUHAS-MD 24/7 News Deactivated."
          });
          if (Object.keys(activeGroups).length === 0x1 && activeGroups.interval) {
            clearInterval(activeGroups.interval);
            delete activeGroups.interval;
          }
        } else {
          await _0x43de69.sendMessage(_0xac2df0, {
            'text': "🛑 24/7 News is not active in this group."
          });
        }
      } else {
        await _0x43de69.sendMessage(_0xac2df0, {
          'text': "🚫 This command can only be used by group admins or the bot owner."
        });
      }
    } else {
      await _0x43de69.sendMessage(_0xac2df0, {
        'text': "This command can only be used in groups."
      });
    }
  } catch (_0x300570) {
    console.error("Error in news command: " + _0x300570.message);
    await _0x43de69.sendMessage(_0xac2df0, {
      'text': "Failed to deactivate the news service."
    });
  }
});
