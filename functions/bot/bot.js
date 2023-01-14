const { Telegraf } = require("telegraf")
const bot = new Telegraf(process.env.MY_BOT_TOKEN)
const st = require('./start.js')
const { message } = require('telegraf/filters');

// bot.telegram.setWebhook('https://ctxnet.netlify.app/api/bot')

bot.start(ctx => {
  console.log("Received /start command")
  try {
    ctx.reply("Hi")
  } catch (e) {
    console.error("error in start action:", e)
    ctx.reply("Error occured")
  }
})

try{
st.strt(bot, message);
} catch (error) {
  bot.telegram.sendMessage('@shabdt', 'Some error : ' + error.message)
  console.log(error.message)
}

exports.handler = async (event, context, callback) => {
    try {
      await bot.handleUpdate(JSON.parse(event.body))
      return { statusCode: 200, body: "" }
    } catch (e) {
      console.error("error in handler:", e)
      return { statusCode: 400, body: "This endpoint is meant for bot and telegram communication" }
    }
  }
