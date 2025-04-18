const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('stop').setDescription('Stop the music and clear the queue'),
  async execute(interaction) {
    const queue = interaction.client.distube.getQueue(interaction.guild);
    if (!queue) return interaction.reply('No music is playing!');
    queue.stop();
    await interaction.reply('Stopped the music and cleared the queue.');
  },
};