const { Telegraf } = require("telegraf")
const bot = new Telegraf(process.env.MY_BOT_TOKEN)
const st = require('./start.js')
const { message } = require('telegraf/filters');

    bot.start(async ctx => {
      try {
         let arr = [
           'Welcome ' + ctx.message.from.first_name,
           'bot is starting for you..',
           'Please wait...',
           'Only 3 seconds...',
           'Only 2 seconds...',
           'Only 1 seconds...',
           'Bot Started..  :)',
           'Please enter any pincode to see details\nExample: send 226101'
         ]
    
          let i = 0;
          let i_d = await setInterval(async () => {
    
            if (i > 7)
              clearInterval(i_d);
             try {
            await bot.telegram.editMessageText('@shabdt', y.message_id, undefined, arr[i++]);
          } catch (error) {}
              }, 1000)
            
      } catch (e) {
        ctx.reply("Error occured")
      }
    })

exports.handler = async (event, context, callback) => {
  try {
    await bot.handleUpdate(JSON.parse(event.body))
    try {
      st.strt(bot);
    } catch (error) {
      bot.telegram.sendMessage('@shabdt', 'Some error : ' + error.message)
    }
    return { statusCode: 200, body: "" }
  } catch (e) {
    console.error("error in handler:", e)
    return { statusCode: 400, body: "This endpoint is meant for bot and telegram communication" }
  }
}
