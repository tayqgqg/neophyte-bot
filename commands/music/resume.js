const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('resume').setDescription('Resume the music'),
  async execute(interaction) {
    const queue = interaction.client.distube.getQueue(interaction.guild);
    if (!queue) return interaction.reply('No music is playing!');
    queue.resume();
    await interaction.reply('Resumed the music.');
  },
};