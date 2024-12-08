const fs = require("fs");
module.exports.config = {
  name: "arif",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "ARIF BABU", 
  description: "Just Respond",
  usePrefix: true,
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("shan") ||
     react.includes("Shaan") || react.includes("ARIF") || react.includes("@𓏵𓋠𒅓𓏪𓉚𝐒𝐇𝐀𝐀𝐍𒀭𝐊𝐇𝐀𝐍𓉛𓏪𒅓𓋠𓏵 𒆜𒋟❮𝗨𝗣𒀭𝗞𝗔𒀭𝗕𝗔𝗗𝗦𝗛𝗔𝗛❯𒋟𒆜 𒀭𒀮𓁫𓂔𓏵𓏜𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞𓏜𓏵𓂔𓁬𒀮𒀭 𓃉𓃊𓃑𓄋𝐈𝐓𝐒𓇻︎𓇻𝐁𝐑𝐀𝐍𝐃𓄋𓃑𓃊𓃉 𓆈 y -  【‿】") ||
react.includes(" shaan") ||
react.includes("SHAAN KHAN")) {
    var msg = {
        body: `𝐃𝐄𝐊𝐇𝐎 𝐌𝐄 𝐀 𝐆𝐀𝐘𝐀 𝐀𝐀𝐏𝐊𝐀 𝐒𝐇𝐀𝐀𝐍-𝐊𝐇𝐀𝐍 🙈 🤣 𓆩♡𓆪`,attachment: fs.createReadStream(__dirname + `/ARIF-BABU/ARIF-DPZ.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
