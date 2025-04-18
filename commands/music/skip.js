const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('skip').setDescription('Skip the current song'),
  async execute(interaction) {
    const queue = interaction.client.distube.getQueue(interaction.guild);
    if (!queue) return interaction.reply('No music to skip!');
    queue.skip();
    await interaction.reply('Skipped the song.');
  },
};