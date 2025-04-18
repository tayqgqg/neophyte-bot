const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('play')
    .setDescription('Play music from YouTube/Spotify')
    .addStringOption(option =>
      option.setName('query').setDescription('The song name or URL').setRequired(true)),
  async execute(interaction) {
    const query = interaction.options.getString('query');
    const voiceChannel = interaction.member.voice.channel;
    if (!voiceChannel) return interaction.reply('Join a voice channel first!');
    await interaction.reply(`Searching for \\`${query}\\`...`);
    interaction.client.distube.play(voiceChannel, query, { textChannel: interaction.channel, member: interaction.member });
  },
};