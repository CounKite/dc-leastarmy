const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const client = new Discord.Client();
bot.commands = new Discord.Collection();

fs.readdir("./komutlar/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Hiçbir komut bulunamadı!");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./komutlar/${f}`);
    console.log(`${f} yüklendi!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} ${bot.guilds.size} sunucuda aktif!`);

  bot.user.setActivity("lb!yardım", {type: "WATCHING"});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "lb!";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
});

bot.on("message", msg => {
  if (msg.content.toLowerCase().match(/(discord\.gg\/)|(discordapp\.com\/invite\/)/g) && !msg.author.bot && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(bot.user)).has("MANAGE_MESSAGES")) {
    msg.delete(500).then(deletedMsg => {
      deletedMsg.reply("Discord davet linki paylaştığını algıladık. Bu sunucu **LeastBlack Anti Reklam** ile korunmakta.").catch(e => {
        console.error(e);
      });
    }).catch(e => {
      console.error(e);
    });
  }
});

bot.on("message", msg => {
  if (msg.content.toLowerCase().match(/(.co|.ne|.org)|.cf|.ml|.tk|.c o m|.n e t|.o r g|.m l|.t k/g) && !msg.author.bot && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(bot.user)).has("MANAGE_MESSAGES")) {
    if(msg.channel.permissionsFor(msg.guild.member(msg.author)).has("MANAGE_MESSAGES")) return;
    msg.delete(500).then(deletedMsg => {
      deletedMsg.reply("Website linki paylaştığını algıladık. Bu sunucuda **LeastBlack Anti Reklam** tarafından website linkleri engellenmektedir.").catch(e => {
        console.error(e);
      });
    }).catch(e => {
      console.error(e);
    });
  }
});

bot.on("message", msg => {
  if (msg.content.toLowerCase().match(/(oç|piç|siktir)|aq|orospu|fuck|amk/g) && !msg.author.bot && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(bot.user)).has("MANAGE_MESSAGES")) {
    msg.delete(500).then(deletedMsg => {
      deletedMsg.reply("Küfür ettiğini algıladık. Bu sunucuda **LeastBlack Anti Küfür** tarafından küfürler engellenmektedir.").catch(e => {
        console.error(e);
      });
    }).catch(e => {
      console.error(e);
    });
  }
});

client.on('guildCreate', guild => {
    let channel = client.channels.get("kanal-id")//botun girdiyi sunucuyu kanala gönderelim
    const embed = new Discord.RichEmbed()
        .setColor("GREEN")
        .setAuthor(`Giriş ${guild.name}`)
        .setThumbnail(guild.iconURL)
        .addField("Kurucu ", guild.owner.user.tag)
        .addField("Sunucu ID", guild.id, true)
        .addField("Toplam Kullanıcı", guild.memberCount, true)
        .addField("Toplam Kanal", guild.channels.size, true)
    channel.send(embed);
});
client.on('guildDelete', guild => { 
    let channel = client.channels.get("kanal-id")//botun çıktıgı sunucuyu kanala gönderelim

    const embed = new Discord.RichEmbed()
        .setColor("RED")
        .setAuthor(`Çıkış ${guild.name}`)
        .setThumbnail(guild.iconURL)
        .addField("Kurucu", guild.owner.user.tag)
        .addField("Sunucu ID", guild.id, true)
        .addField("Toplam Kullanıcı", guild.memberCount, true)
        .addField("Toplam Kanal", guild.channels.size, true)
    channel.send(embed);
});

bot.login('nahfind')