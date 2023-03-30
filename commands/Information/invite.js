const { Command } = require("reconlx");
const ee = require("../../settings/embed.json");
const config = require("../../settings/config.json");
const { MessageEmbed } = require("discord.js");
const emoji = require('../../settings/emoji.json')

module.exports = new Command({
  // options
  name: "invite",
  description: `invite link`,
  userPermissions: ['SEND_MESSAGES'],
  botPermissions: ['SEND_MESSAGES'],
  category: "Information",
  cooldown: 10,
  // command start
  run: async ({ client, interaction, args, prefix }) => {
    // Code
    interaction.followUp({embeds : [
        new MessageEmbed()
        .setColor(ee.color)
        .setTitle(` 💌 ขอบคุณที่เชิญผม`)
        .setDescription(`>>> ** [กดตรงนี้](https://discord.com/oauth2/authorize?client_id=&scope=bot%20applications.commands&permissions=2146958847) **`)
        .setImage(`https://media.discordapp.net/attachments/1046801686225760339/1046990155887693824/20221117_150639.jpg`)
        .setFooter({text : ee.footertext , iconURL : ee.footericon})
    ]})
  },
});
