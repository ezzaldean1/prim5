const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {

  console.log('---------------');

  console.log(' Mob Bot Is Online')

  console.log('---------------')

  client.user.setStatus("Online")

    client.user.setActivity(" United Server",{type: 'PLAYING'})

  

});

const adminprefix = "3t";//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

const devs = ['470500980342128650'];//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

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

  

  client.on("message",  message => {

         let args = message.content.split(' ').slice(1);

    if(message.content.startsWith('3tnickname')) {

        if (!message.member.hasPermission("MANAGE_NICKNAMES")) {

            message.channel.send("حط الاسم")

        } else {

            if (!message.guild.member(client.user).hasPermission('MANAGE_NICKNAMES')) return message.reply(' ❌البوت ما عنده خاصية MANAGE_NICKNAMES.').catch(console.error);

            let changenick = message.mentions.users.first();

            let username = args.slice(1).join(' ')

            if (username.length < 1) return message.reply('حط الاسم').catch(console.error);

            if (message.mentions.users.size < 1) return message.author.send('You must mention a user to change their nickname. ❌').catch(console.error);

            message.guild.member(changenick.id).setNickname(username);

            message.channel.send("تم تغيير الاسم الى: " + changenick + "")

        }

    }});

  

  

  

  

 

const jackeo = ['380069712224190467' , 'هنا ايدي الاونر' , '470500980342128650' , '']; //Jackeo  حقوقي

client.on('message', message => { //Jackeo  حقوقي

var prefix = "3t"; //Jackeo  حقوقي

  if (message.author.bot) return; //Jackeo  حقوقي

  if (!message.content.startsWith(prefix)) return; //Jackeo  حقوقي

    var argresult = message.content.split(` `).slice(1).join(' '); //Jackeo  حقوقي

      if (!jackeo.includes(message.author.id)) return; //Jackeo  حقوقي

  let command = message.content.split(" ")[0]; //Jackeo  حقوقي

  command = command.slice(prefix.length); //Jackeo  حقوقي

 //Jackeo  حقوقي  //Jackeo  حقوقي  //Jackeo  حقوقي  //Jackeo  حقوقي

  let args = message.content.split(" ").slice(1);  //Jackeo  حقوقي

 //Jackeo  حقوقي  //Jackeo  حقوقي  //Jackeo  حقوقي  //Jackeo  حقوقي

  if (command === "say")  { //Jackeo  حقوقي

  if(!message.channel.guild) return message.reply('** __This command only for servers⛔__  **'); //Jackeo  حقوقي

          message.delete() //Jackeo  حقوقي

    message.channel.sendMessage(args.join(" ")).catch(console.error); //Jackeo  حقوقي

  } //Jackeo  حقوقي  //Jackeo  حقوقي  //Jackeo  حقوقي  //Jackeo  حقوقي  //Jackeo  حقوقي

   //Jackeo  حقوقي  //Jackeo

if (command == "emb")    { //Jackeo  حقوقي

  if(!message.channel.guild) return message.reply('** __This command only for servers⛔__  **'); //Jackeo  حقوقي

    let say = new Discord.RichEmbed() //Jackeo  حقوقي

    .setDescription(args.join("  ")) //Jackeo  حقوقي

    .setColor("RANDOM") //Jackeo  حقوقي

    message.channel.sendEmbed(say); //Jackeo  حقوقي

    message.delete(); //Jackeo  حقوقي

  } //Jackeo  حقوقي 

});

const lol =

[

'**Welcome To United 🎀**',

'**Welcome To United **',

'**Welcome To United ✨**',

'**Welcome To United🕊️✨**',

]

client.on('guildMemberAdd', member => {

const codes = member.guild.channels.get("485527500957548554");//ايدي الشات

if(!codes) return;

if(codes) {

codes.send(  `${lol[Math.floor(Math.random() * lol.length)]}`);          

}

});

 

   

client.login(process.env.BOT_TOKEN);
