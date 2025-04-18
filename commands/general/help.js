const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('help').setDescription('Show help info'),
  async execute(interaction) {
    await interaction.reply('Neophyte bot commands:\n/ping\n/help\n/play [url or search]\n/pause\n/resume\n/skip\n/stop\n/rpg');
  },
};