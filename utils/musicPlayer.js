const { DisTube } = require('distube');
const { SpotifyPlugin } = require('@distube/spotify');
const { YtDlpPlugin } = require('@distube/yt-dlp');

function setupDistube(client) {
  client.distube = new DisTube(client, {
    leaveOnStop: false,
    emitNewSongOnly: true,
    emitAddSongWhenCreatingQueue: false,
    plugins: [new SpotifyPlugin(), new YtDlpPlugin()],
  });

  client.distube
    .on('playSong', (queue, song) =>
      queue.textChannel.send(`Now playing: \\`${song.name}\\` - \\`${song.formattedDuration}\\``))
    .on('addSong', (queue, song) =>
      queue.textChannel.send(`Added to queue: \\`${song.name}\\``))
    .on('error', (channel, error) => {
      console.error(error);
      channel.send('An error occurred while playing music.');
    });
}

module.exports = setupDistube;