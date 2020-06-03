const Discord = require("discord.js");

exports.run = async (client, message, args) => {
if (!message.member.roles.find(r => r.name === "Rolün Adı",))//Yetki verebilecek rolün adı
    return message.reply(`❌ Bu Komutu Kullanabilmek için Yetkili Olmalısın!`);
  let isim = args.slice(1).join(' ');
  let kullanici = message.mentions.users.first();
  if(!kullanici) return message.reply(`Lütfen Komutu Düzgün Kullanın!\n Doğru Kullanım; **h.kız @Etiket İsim**`)
  if(!isim) return message.reply(`Lütfen Komutu Düzgün Kullanın! \n Doğru Kullanım; **h.kız @Etiket İsim**`)
  if(isim.length > 32) return message.reply(` Lütfen \`32\` karakteri geçmeyecek şekilde bir isim giriniz!`)
  message.guild.members.get(kullanici.id).setNickname(`Tag ${isim}`)//Tag yazan yere tag gelicek
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!user) return message.reply("**Etiket Atmayı Unuttun**");

  let member = message.mentions.members.first();
  member.removeRole('')//Kaldırılıcak rol
  member.addRole('')//Eklenicek Rol
  member.addRole('')//Eklenicek Rol
const embed = new Discord.RichEmbed()
        .setColor("PURPLE")
        .addField('Kayıt Eden Yetkili;', `<@${message.author.id}>`,true)
        .addField('Kayıt Edilen Kişi;', `${member}`,true)
        .addField(' Verilen Rol;', `<@&Verilen Rolün IDsi>`,true)//Verilen Rolün IDsi

    .setThumbnail("")//Sunucu gif yada resim.

        .addField('Kayıt tamamlandı', `\`\`\`Sunucumuza Hoşgeldin! İyi vakit geçirmen dileğiyle.\`\`\``,true)
        .setTimestamp()
        .setFooter(`Kayıt Saati:`, client.user.avatarURL)
  return message.channel.send(embed);
  message.channel.bulkDelete(1);

};          
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "kız",

};
