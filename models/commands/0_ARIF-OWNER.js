const fs = require("fs");
module.exports.config = {
  name: "OWNER",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "Candy", 
  description: "no prefix",
  commandCategory: "No command marks needed",
  usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("owner") ||
     react.includes("Owner") || 
react.includes("OWNER")) {
    var msg = {
  body: "┏━━━━━┓\n     ★𝐒𝐇𝐀𝐀𝐍-𝐊𝐇𝐀𝐍 𝐊★              ✧═•❁𝗪𝗘𝗟𝗖𝗢𝗠𝗘❁•═✧\n┗━━━━━┛\n\n\n ★𝐒𝐇𝐀𝐀𝐍-𝐊𝐇𝐀𝐍★",
        attachment: fs.createReadStream(__dirname + `/ARIF-BABU/Screenshot_2024-12-06-10-28-48-49_8110815a90a63ac3d3d945cf32a1cf14.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
