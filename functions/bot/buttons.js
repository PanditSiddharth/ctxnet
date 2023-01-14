const buttons = async (bot, ctxx, message, pd) => {
    try {
        var msg = ctxx.message;
            //   let  nm = parseInt(msg.text)

    if(msg.text != undefined){
        console.log('runs')
 
    var keyboard = [];
    var k = await pd(ctxx.message)

    for (var i = 0; i < k.length; i++) {
        await keyboard.push([{ "text": k[i].Name, "callback_data": JSON.stringify({'v': i, 'text': msg.text}) }]);
    }

    // bot.sendMessage(msg.chat.id, JSON.stringify(keyboard))
    let options = {
        reply_markup: JSON.stringify({
            inline_keyboard: keyboard
        })
    }

    await bot.telegram.sendMessage('@IGNOU_BCA_Group', "Select your Post name these all are listed in pincode " + msg.text, options);

}

    } catch (error) {
        await bot.telegram.sendMessage('@IGNOU_BCA_Group', 'Buttons Error: y'  + error.message)
    }
}


async function clbk(bot, pd) {
    try {
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
    await bot.telegram.sendMessage('@IGNOU_BCA_Group', JSON.stringify(teext));
        
        //    await ctxx.reply('You clicked on button 1');
           console.log(bot)
           
        });
    } catch (error) {
        
    }
}

module.exports = { buttons, clbk }