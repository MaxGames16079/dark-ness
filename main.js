const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("your bot is online!");
});
 
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});
client.on("message", (message) => {
  if (message.content.startsWith("max")) {
    message.channel.send("wapo");
  }
});
client.on("message", (message) => {
  if (message.content.startsWith("salas")) {
    message.channel.send("feo");
  }
});
client.login("ODMzODA3NjU5MjczOTQ1MTM5.YH3t5Q.CHif-1JSD7vVdcq9YCaWlhbK6fo");
