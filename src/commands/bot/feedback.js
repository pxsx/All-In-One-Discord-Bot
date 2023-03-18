const Discord = require('discord.js');

const webhookClient = new Discord.WebhookClient({
    id: "IEIzEj97vrCVO6iVOQ32I9YBh2ajSART2VczQjkt1crcxfteXbX0gS8ROkNkOQ1En_tA",
    token: "IEIzEj97vrCVO6iVOQ32I9YBh2ajSART2VczQjkt1crcxfteXbX0gS8ROkNkOQ1En_tA",
});

module.exports = async (client, interaction, args) => {
    const feedback = interaction.options.getString('feedback');

    const embed = new Discord.EmbedBuilder()
        .setTitle(`📝・New feedback!`)
        .addFields(
            { name: "User", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
        )
        .setDescription(`${feedback}`)
        .setColor(client.config.colors.normal)
    webhookClient.send({
        username: 'Bot Feedback',
        embeds: [embed],
    });

    client.succNormal({ 
        text: `Feedback successfully sent to the developers`,
        type: 'editreply'
    }, interaction);
}

 