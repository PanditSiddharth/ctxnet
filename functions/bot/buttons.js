const { message } = require('telegraf/filters');
const axios = require('axios');

const buttons = async (bot, ctxx) => {
    var msg = ctxx.message;
    try {
        var keyboard = [];
        let k = await pd(ctxx.message)

        for (let i = 0; i < k.length; i++) {
            keyboard.push([{ "text": k[i].Name, "callback_data": JSON.stringify({ 'v': i, 'text': msg.text }) }]);
        }

        // bot.sendMessage(msg.chat.id, JSON.stringify(keyboard))
        const reply_markup = {
            inline_keyboard: keyboard
        };

        try {
            await bot.telegram.sendMessage('@shabdt', "Select your Post name these all are listed in pincode " + msg.text, { reply_markup });
        } catch (error) {
            ctxx.reply('error: ' + error.message)
        }


    } catch (error) {
        await bot.telegram.sendMessage('@shabdt', 'Buttons Error: ' + error.message)
    }
}



async function clbk(bot) {
    try {
        let we = 1;
        await bot.on('callback_query', async function onCallbackQuery(cb) {
            // let action = await callbackQuery.data;
            const data = await cb.update.callback_query.data;
            const msg = await cb.update.callback_query.message;
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

            console.log(bot)

        });
        // await bot.telegram.sendMessage('@shabdt', 'callback querry ');


    } catch (error) {
        await bot.telegram.sendMessage('@shabdt', 'callback querry error ');

    }
}

const pd = async (ctxx, ind = -1) => {

    try {
        var msg = ctxx;
        console.log(msg)
        const url = 'https://api.postalpincode.in/pincode/' + parseInt(msg.text);
        const response = await axios.get(url);
        const data = await response.data;
        if (ind == -1)
            var k = data[0].PostOffice;
        else
            var k = data[0].PostOffice[ind];

        // if (data[0].Status != 'Success' && msg.chat.type == 'private')
        // await ctxx.reply("Please Write correct pincode");
        return k;
    } catch (error) {
        console.log('some error', error.message)
    }
}

module.exports = { buttons, clbk }