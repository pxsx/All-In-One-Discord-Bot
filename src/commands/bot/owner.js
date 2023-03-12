const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Pasi`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `!Pasi#0069`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `Pasi Development`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[https://pasi-dev.xyz](https://pasi-dev.xyz)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 