const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require("axios");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('this is a test command'),
    async execute(interaction) {
        await interaction.reply({ content: "Db testing", ephemeral: true});

        axios.post(process.env.DB, {
            data: {
                name: `${name}`,
                level: `${level}`,
                time: `${time}`,
                link: `${link}`
            }
        })
        }
}