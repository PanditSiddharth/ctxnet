
const btn = require('./buttons.js');

const getData = async (bot, message) =>{
    try {
        await btn.clbk(bot, pd)
        await bot.use(async (ctxx) => {  
    //   let  nm = parseInt(msg.text)
    if(ctxx.message)
        var k = await pd(ctxx.message)
        // await fr(bot, chatId, msg, k);  
        btn.buttons(bot, ctxx, message, pd)
    })
    } catch (error) {
      console.log(error);
    }
  }

  const pd =async (ctxx, ind = -1) => {
    // if(ctx.message)
    // var msg = ctx.message;
    // else
    try {
    var msg = ctxx;
    console.log(msg)
    const url = 'https://api.postalpincode.in/pincode/' + parseInt(msg.text);
    const response = await fetch(url);
    const data = await response.json();
    if(ind == -1)
    var k = data[0].PostOffice;
    else 
    var k = data[0].PostOffice[ind];

    if (data[0].Status != 'Success' && msg.chat.type == 'private')
    await ctxx.reply("Please Write correct pincode");
    return k;
} catch (error) {
   console.log('some error', error.message)     
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