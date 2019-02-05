const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

//let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

const fs = require("fs"); //npm i fs

  
const prefix ="!"
bot.on('ready',  () => {
    console.log(`Logged in as ${bot.user.tag}!`);
  });

  bot.on("message",  message =>{


 // const millis = new Date().getTime() - message.user.createdAt.getTime();
   
   // const createdAt = millis / 1000 / 60 / 60 / 24;





    if(message.author.bot) return;
    if(message.channel.type ==="dm") return;

    //let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  

 if(cmd === `${prefix}report`){

    //!report @ned this is the reason
    
   
    let wUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!wUser) return message.channel.send("Couldn't find user.");
    let rreason = args.join(" ").slice(22);
if (!rreason) return message.channel.send(" rreason can't find!")



 



message.channel.send("تم ارسال الشكوى للادارة العليا")

    let reportEmbed = new Discord.RichEmbed()
 

 .setDescription("الشكاوى")
    .setColor("#15f153")
    .addField("✎الشخص المشتكى عليه", `${wUser} with ID: ${wUser.id}`)
    .addField("✐تم الاشتكاء بواسطة", `${message.author} with ID: ${message.author.id}`)
    .addField("™الروم", message.channel)
    .addField("⌚️ الوقت", message.createdAt)
    .addField("✉️ السبب", rreason)




    let reportschannel = message.guild.channels.find(`name`, "report-channel");
    if(!reportschannel) return message.channel.send("Couldn't find report-channel channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;
  }

      
      
    



var guilds = {};
bot.on('message', message => {
 var prefix2 = '#';//البرفكس
  if(message.content.startsWith(prefix + "تقديم")) {

if(!message.channel.guild) return message.reply(' ');


  let submite = message.guild.channels.find(`name`, "members1");

  if(!submite) return message.channel.send("❌لم اجد الروم الخاص بالتقديمات");

    let filter = m => m.author.id === message.author.id;

    let thisMessage;

    let thisFalse;

    message.channel.send('📝 **| من فضلك اكتب اسمك الأن... ✏ **').then(msg => {



    message.channel.awaitMessages(filter, {

      max: 1,

      time: 90000,

      errors: ['time']

    })

    .then(collected => {

      collected.first().delete();

      thisMessage = collected.first().content;

      let boi;

      msg.edit('📜 **| مدة لعبك لللعبة     ... ✏ **').then(msg => {



          message.channel.awaitMessages(filter, {

            max: 1,

            time: 90000,

            errors: ['time']

          })

          .then(collected => {

            collected.first().delete();

            boi = collected.first().content;

            let boi2;

            msg.edit('🤵 **| الكلانات الي دخلتها   ... ✏ **').then(msg => {



              message.channel.awaitMessages(filter, {

                max: 1,

                time: 90000,

                errors: ['time']

              })

              .then(collected => {

                collected.first().delete();

              boi2 = collected.first().content;

      msg.edit('🛡 **| [ هل انت متأكد من تقديمك؟ | [ نعم ] او [ لا**');

 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{

        max: 1,

        time: 90000,

        errors: ['time']

      })

      .then(collected => {

        if(collected.first().content === 'لا') {

          msg.delete();

          message.delete();

          thisFalse = false;

        }

        if(collected.first().content === 'نعم') {

          if(thisFalse === false) return;

          msg.edit('🕊 **| Done ✅, تم بنجاح نشر تقديم في روم التقديمات**');

          collected.first().delete();

          submite.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**[ ${message.guild.name}:arrow_down: ] Submite⬇**

[**اسم المقدم**]: 
${thisMessage}

[**خبرته**]: 
${boi}

[**كلانات سابقة **]: 
${boi2}

[**تم التقديم بواسطة**]: 
${message.author}

[**ايدي المقدم**]: 
${message.author.id}`);



message.channel.send("هل تم قبول العضو [نعم [لا]]")

        }

      }

  );

});

    });

  }

    );

  });

}

);

    })}});










    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
      
      
      
  })








































bot.login(process.env.BOT_TOKEN);
