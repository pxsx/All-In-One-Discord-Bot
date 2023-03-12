const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: "📃・Changelogs",
        desc: `_____`,
        thumbnail: client.user.avatarURL({ size: 1024 }),
        fields: [{
            name: "📃┆Changelogs",
                value: '21/12/2022 - Started to Code the Bot',
                inline: false,
            },
        ],
        type: 'editreply'
    }, interaction)
}

 