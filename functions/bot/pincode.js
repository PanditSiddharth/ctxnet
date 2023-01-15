const { message } = require('telegraf/filters');
const btn = require('./buttons.js');

const getData = async (bot) =>{
    try {
        
        await btn.clbk(bot)
        
        // console.log(bot.options)
     
            // ctxx.reply(hs=> hs.reply(bot))
            bot.on(message('text'),async ctxx =>{ 
        if (!isNaN(parseInt(ctxx.message.text))) {
            console.log('yes')
            await btn.buttons(bot, ctxx)
        }
        else if(ctxx.chat.type == 'private')
        ctxx.reply('Please enter any pincode to see details\nExample: send 226101')
    })

    } catch (error) {
      console.log(error);
    }
  }


//   let fr = async (bot, chatId, msg, k) => {

//     await bot.sendMessage(chatId, 'Here is your pincode :')
//     for (let i = 0; i < k.length; i++) {
//      await bot.sendMessage(chatId, k[i].Name + '\n' + k[i].District + '\n' + k[i].Pincode);

//       if (i == k.length - 1) {
//        await bot.sendMessage(chatId, 'All PostOffice related to ' + msg.text + ' is listed')
//       }
//     }
//   }

  module.exports = { getData }