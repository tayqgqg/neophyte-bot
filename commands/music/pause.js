const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('pause').setDescription('Pause the music'),
  async execute(interaction) {
    const queue = interaction.client.distube.getQueue(interaction.guild);
    if (!queue) return interaction.reply('No music is playing!');
    queue.pause();
    await interaction.reply('Paused the music.');
  },
};