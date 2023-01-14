const { message } = require('telegraf/filters');


const buttons = async (bot, ctxx) => {
    try {
        var msg = ctxx.message;

            const pd =async (ctxx, ind = -1) => {

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
 
    var keyboard = [];
    let k = await pd(ctxx.message)

    for (let i = 0; i < 5; i++) {
        await keyboard.push([{ "text": k[i].Name, "callback_data": JSON.stringify({'v': i, 'text': msg.text}) }]);
    }

    // bot.sendMessage(msg.chat.id, JSON.stringify(keyboard))
    let options = {
        reply_markup: JSON.stringify({
            inline_keyboard: keyboard
        })
    }

    await bot.telegram.sendMessage('@shabdt', "Select your Post name these all are listed in pincode " + msg.text, options);



    } catch (error) {
        await bot.telegram.sendMessage('@shabdt', 'Buttons Error: '  + error.message)
    }
}


async function clbk(bot) {
    try {
const pd =async (ctxx, ind = -1) => {

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
      
  await bot.on('callback_query',async function onCallbackQuery(callbackQuery) {
            // let action = await callbackQuery.data;
            const data = await callbackQuery.update.callback_query.data;
            const msg = await callbackQuery.update.callback_query.message;
            const opts = {
                chat_id: msg.chat.id,
                message_id: msg.message_id,
            };
        
                 var jd = await JSON.parse(data)
                 let v = jd.v;
                console.log(jd.v)
                console.log(jd.text);
        
                 var teext = await pd(jd, v)
                 console.log(teext)
    await bot.telegram.sendMessage('@shabdt', JSON.stringify(teext));
        
        //    await ctxx.reply('You clicked on button 1');
           console.log(bot)
           
        });
    } catch (error) {
        
    }
}


module.exports = { buttons, clbk }