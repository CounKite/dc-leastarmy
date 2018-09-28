const Discord = require("discord.js");
const moment = require('moment');
require('moment-duration-format');

module.exports.run = async (bot, message, args) => {
    const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  
    message.channel.sendCode("Least Black Bot Komutları", `
lb!atatürk : Atamızın resimlerini sergiler.

lb!avatar : Profil resminizi büyük halde gösterir.

lb!döviz : Döviz kurunu gösterir.

lb!duyuru : Sadece yetkililerin kullanabileceği duyuru komududur.

lb!hava-durumu : Bulunduğunuz bölgenin ismini girerek hava durumuna bakmanızı sağlar.

lb!hesapla : Matematik işlemlerini otomatik olarak yapar.

lb!istatisik : Sunucu bilgisini verir.

lb!kanalbilgi : Kanalın bilgisini verir.

lb!sigara-iç : Sizin için bir sigara yakar.

lb!sil : Chat silme komududur.

lb!stres-çarkı : Sizin için bir stres çarkı çevirir.

lb!sunucuresmi : Sunucu resmini gösterir.

lb!şifre : İstediğiniz uzunlukta random bir şifre yaratır.

lb!temizle : Chat silmenin 2. komududur.

lb!triggered : Henüz çalışmamaktadır.

lb!wasted : İstediğiniz kişinin fotoğrafına GTA V wasted efekti ekler.

lb!yardım : Komutları gösterir.

lb!yazdır : Bot'a istediğiniz kelimeyi yazdırır.

lb!yazıtura : Kesinlikle şans işi ile yazı tura atar.

lb!yenile : Botu yeniden başlatır. 

lb!yumruh-at : Muhteşem bir yumruk atar.

*Açıklama: Bu Bot CounKite tarafından geliştirilmektedir.
`);
};

module.exports.help = {
  name: "yardım"
}