const Discord = require('discord.js');


exports.run = function(client, message, args) {
 const sayi = args.slice(0).join(' ');
 
 if(sayi.lenght < 1) {
	return 	message.reply ("Silmem için bir miktar belirt") 
 } else {	
	 message.channel.bulkDelete(sayi + 1);
	message.channel.send("**" + sayi + "adet mesaj sildim**").then(msg => {
		msg.delete("1000")
	});
	}

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [''], 
  permLevel: 0 
};

exports.help = {
  name: 'temizle', 
  description: 'Belirtilen miktarda mesaj siler.', 
  usage: 'temizle (miktar)' 
};
