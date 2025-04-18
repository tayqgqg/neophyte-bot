const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rpg')
    .setDescription('Lawan monster dalam pertarungan singkat!'),

  async execute(interaction) {
    const monsters = ['Goblin', 'Skeleton', 'Orc', 'Slime'];
    const monster = monsters[Math.floor(Math.random() * monsters.length)];

    const playerHP = Math.floor(Math.random() * 50) + 50;
    const monsterHP = Math.floor(Math.random() * 30) + 20;

    const playerDamage = Math.floor(Math.random() * 20) + 10;
    const monsterDamage = Math.floor(Math.random() * 15) + 5;

    let result;
    if (playerDamage >= monsterHP) {
      result = `Kamu mengalahkan ${monster} dengan serangan ${playerDamage} damage!`;
    } else if (monsterDamage >= playerHP) {
      result = `${monster} menyerang balik dan mengalahkanmu dengan ${monsterDamage} damage...`;
    } else {
      result = `Pertarungan berakhir imbang! Kamu melukai ${monster} (${playerDamage} dmg) tapi juga kena ${monsterDamage} dmg.`;
    }

    await interaction.reply(`**Pertarungan dimulai!**\n\nMusuh: ${monster}\nHP Kamu: ${playerHP}\nHP Musuh: ${monsterHP}\n\n${result}`);
  },
};