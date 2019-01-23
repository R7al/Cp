const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

const fs = require("fs"); //npm i fs

  

bot.on('ready',  () => {
    console.log(`Logged in as ${bot.user.tag}!`);
  });

  bot.on("message",  message =>{


 // const millis = new Date().getTime() - message.user.createdAt.getTime();
    const now = new Date();
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



 if(!warns[wUser.id]) warns[wUser.id] = {
      warns: 0
    };
  
    warns[wUser.id].warns++;
  
    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
      if (err) console.log(err)
    });



message.channel.send("تم ارسال الشكوى للادارة العليا")

    let reportEmbed = new Discord.RichEmbed()
 

 .setDescription("الشكاوى")
    .setColor("#15f153")
    .addField("✎الشخص المشتكى عليه", `${wUser} with ID: ${wUser.id}`)
    .addField("✐تم الاشتكاء بواسطة", `${message.author} with ID: ${message.author.id}`)
    .addField("™الروم", message.channel)
        .addField("⚔ رقم الشكوة", warns[wUser.id].warns)
    .addField("⌚️ الوقت", message.createdAt)
    .addField("✉️ السبب", rreason)




    let reportschannel = message.guild.channels.find(`name`, "report-channel");
    if(!reportschannel) return message.channel.send("Couldn't find report-channel channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;
  }

      
      
      
      
      
  })








































bot.login(process.env.BOT_TOKEN);
