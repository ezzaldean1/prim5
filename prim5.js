const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {

  console.log('---------------');

  console.log(' Mob2 Bot Is Online')

  console.log('---------------')

  client.user.setStatus("Online")

    client.user.setActivity(" Crystal Server",{type: 'WATCHING'})

	});

            var prefix = "#" ;

            

client.on('message' , message => {

  if(message.author.bot) return;

  if(message.content.startsWith(prefix + "role-bc")) {

        if (!message.member.hasPermission('ADMINSTRATOR')) return message.reply(`**You Don't Have**  *ADMINSTRATOR*  **Permission **`).catch(console.error);

    let args = message.content.split(" ").slice(1);

    if(!args[0]) {

      message.channel.send("قم بمنشنه رتبه معينه");

        return;

    }

      if(args[0] == "@everyone") {

        message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.memberCount} اعضاء`);

        message.guild.members.forEach(mi => {

          mi.send(

          "الرسالة :" + "\n" +

         "**" + `${args[1]}` + "**"

          );

        });

        return;

      }

          var role = message.mentions.roles.first();

            if(!role) {

              message.reply("يرجا كتابه اسم رتبه موجوده");

                return;

            }

        message.guild.members.filter(m => m.roles.get(role.id)).forEach(sa => {

        sa.send(

          "الرساله :" + "\n" +

        "**" + `${args[1]}` + "**"

          );

        });

      message.channel.send(`**لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عظو**`);

    }

});

               

            

           const adminprefix = "#";//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

const devs = ['477591209943105538'];//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

client.on('message', message => {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

  var argresult = message.content.split(` `).slice(1).join(' ');//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

    if (!devs.includes(message.author.id)) return;//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

    

if (message.content.startsWith(adminprefix + 'setgame')) {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

  client.user.setGame(argresult);

    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)

} else 

  if (message.content.startsWith(adminprefix + 'setname')) {

client.user.setUsername(argresult).then

    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)

return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");

} else

  if (message.content.startsWith(adminprefix + 'setavatar')) {

client.user.setAvatar(argresult);

  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);

      } else     

if (message.content.startsWith(adminprefix + 'setT')) {

  client.user.setGame(argresult, "https://www.twitch.tv/idk");

    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)

}

});

   

client.on('message', message => {

   if(!message.channel.guild) return;

if(message.content.startsWith(prefix + 'bc')) {

if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));

if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );

let args = message.content.split(" ").join(" ").slice(2 + prefix.length);

let BcList = new Discord.RichEmbed()

.setThumbnail(message.author.avatarURL)

.setAuthor(`محتوى الرساله ${args}`)

.setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست\nيمكنك اضافة اسم السيرفر في البرودكاست عن طريق كتابة <server>\nيمكنك اضافة اسم المرسل في البرودكاست عن طريق كتاية <by>\nيمكنك منشنة العضو في الرساله عن طريق كتابة <user>`)

if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {

msg.react('📝')

.then(() => msg.react('✏'))

.then(() =>msg.react('📝'))

 

let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;

let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;

 

let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });

let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });

 

 

EmbedBc.on("collect", r => {

 

message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));

message.guild.members.forEach(m => {

let EmbedRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)

var bc = new

Discord.RichEmbed()

.setColor('RANDOM')

.setDescription(EmbedRep)

.setThumbnail(message.author.avatarURL)

m.send({ embed: bc })

msg.delete();

})

})

NormalBc.on("collect", r => {

  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));

message.guild.members.forEach(m => {

let NormalRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)

m.send(NormalRep);

msg.delete();

})

})

})

}

});

   

                        

client.on("message", (message) => {

if (message.content === ".help") {

    const embed = new Discord.RichEmbed()

      .setColor("RANDOM")

      .addField(`${prefix}bc`, `لارسال راسألة جماعية لجميع اعضاء السيرفر`)

      .addField(`${prefix}obc`, `لارسال رسالة جماعية للاون لاين فقط`)

      .addField(`${prefix}invite`, `لدعوة البوت الي سيرفرك`)

      .addField(`${prefix}bot`, `لروياة معلومات البوت`)

      .addField(`${prefix}support`, `لسيرفر الدعم الفني حق البوت`)

    

  message.author.send({embed});

}

});

      

client.on("message", message => {

            if (message.content.startsWith(prefix + "obc")) {

                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;

  let args = message.content.split(" ").slice(1);

  var argresult = args.join(' '); 

  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {

 m.send(`${argresult}\n ${m}`);

})

 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 

 message.delete(); 

};     

});

   

   client.on('message', message => {

       if(message.content.startsWith(`${prefix}invite`)){

           if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")

           var embed = new Discord.RichEmbed()

           .setTitle("Invite Broadcast Bot")

           .setURL("https://discordapp.com/oauth2/authorize?client_id=484664339085787136&permissions=8&scope=bot")

           .setTimestamp()

           .setColor("RANDOM")

           message.channel.send({embed})

       }

   });

   

   

    client.on('message', message => {

       if(message.content.startsWith(`${prefix}support`)){

           if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")

           var embed = new Discord.RichEmbed()

           .setTitle("Support Server")

           .setURL("https://discord.gg/v84KKjD")

           .setTimestamp()

           .setColor("RANDOM")

           message.channel.send({embed})

       }

   });
   
   const misaka = new Set();

    client.on('message', async msg => {

  if(msg.content.startsWith("رابط")) {

  if (misaka.has(msg.author.id)) {

    let misakaemb = new Discord.RichEmbed()

    .setDescription(`يجب عليك الانتظار 24 ساعه!`)

    .setColor(`RED`)

    return msg.channel.send(misakaemb).then(message => {

     message.delete(10000) 

    })

    

    }

    misaka.add(msg.author.id);

  

   msg.channel.createInvite({

        thing: true,

        maxUses: 5,

        maxAge: 86400,

  }).then(invite =>

   msg.author.sendMessage(`

         <@${msg.author.id}> 

         **maxUses: 5 **

         ${invite.url}`)

  )

    msg.channel.send(`**:link: Invite Linke Sent In DM Successfully**`)

  }

    setTimeout(() => {

    },86400000);

    })          

            

client.login(process.env.BOT_TOKEN); 
