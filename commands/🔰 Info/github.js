const {
	MessageEmbed
} = require("discord.js")
const config = require("../../botconfig/config.json")
const ee = require("../../botconfig/embed.json")
const emoji = require(`../../botconfig/emojis.json`);
module.exports = {
	name: "github",
	category: "🔰 Info",
	aliases: ["git"],
	cooldown: 2,
	usage: "github",
	description: "Shows you the Github and Source Code Information about this Bot",
	run: async (client, message, args, user, text, prefix) => {
		try {
			message.channel.send(new MessageEmbed()
				.setTitle(`This Bot is made by \`Prasid#6644\` and **this** is the Source Code link to this Bot`)
				.setURL("")
				.addField("Discord.js: ", "[\`v12.5.1\`](https://discord.js.org)", true)
				.addField("Node.js: ", "[\`v15.3.4\`](https://nodejs.org/en/)", true)
				.addField("Lavalink: ", "[\`v3.3.2.3\`](https://github.com/Frederikam/Lavalink/releases/tag/3.3.2.3)")
				.addField("Source Code. ", "Don't just use the source for yourself,... please [invite](https://discord.com/api/oauth2/authorize?client_id=873229695926304768&permissions=8&scope=bot)")
				.setColor(ee.color)
				.setFooter(ee.footertext, ee.footericon)
			);
		} catch (e) {
			console.log(String(e.stack).bgRed)
			return message.channel.send(new MessageEmbed()
				.setColor(ee.wrongcolor)
				.setFooter(ee.footertext, ee.footericon)
				.setTitle(`${emoji.msg.ERROR} ERROR | An error occurred`)
				.setDescription(`\`\`\`${e.message}\`\`\``)
			);
		}
	}
}
//