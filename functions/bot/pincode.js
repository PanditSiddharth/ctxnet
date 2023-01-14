
const btn = require('./buttons.js');

const getData = async (bot) =>{
    try {
        
        await btn.clbk(bot)
        
        // console.log(bot.options)
        await bot.use(async (ctxx) => {  
            // ctxx.reply(hs=> hs.reply(bot))

        if (!isNaN(parseInt(ctxx.message.text))) {
            console.log('yes')
            await btn.buttons(bot, ctxx)
        }
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