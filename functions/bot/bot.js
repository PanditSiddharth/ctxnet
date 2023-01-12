const { Telegraf } = require("telegraf")
const bot = new Telegraf('5914579167:AAHBhbD4JY3IhOPdk-bncrKQHzv3BEUYdmc')

bot.start(ctx => {
  console.log("Received /start command")
  try {
    ctx.reply("Hi")
  } catch (e) {
    console.error("error in start action:", e)
    ctx.reply("Error occured")
  }
})

exports.handler = async event => {
    try {
      await bot.handleUpdate(JSON.parse(event.body))
      return { statusCode: 200, body: "" }
    } catch (e) {
      console.error("error in handler:", e)
      return { statusCode: 400, body: "This endpoint is meant for bot and telegram communication" }
    }
  }