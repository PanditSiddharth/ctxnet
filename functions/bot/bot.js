const { Telegraf } = require("telegraf")
const bot = new Telegraf(process.env.MY_BOT_TOKEN, { telegram: { webhookReply: false } } )

const st = require('./start.js')
const { message } = require('telegraf/filters');

    bot.start(async (ctx) => {
      try {
           await ctx.reply('Please enter any pincode to see details\nExample: send 226101')
      } catch (e) {
        ctx.reply("Error occured")
      }
    })

    bot.command('st', async (ctx) => {
      try {

const sleep = t => new Promise(r => setTimeout(r, t));
const msg = await ctx.reply("Bot starting");
await sleep(2000);
await bot.telegram.editMessageText(ctx.chat.id, msg.message_id, undefined, 'yo');

             // let y = await ctx.reply('Bot starting..',).then((msg)=>{ 
             //   setTimeout(() => {  
             //   bot.telegram.editMessageText(ctx.chat.id, msg.message_id, undefined, 'yo')
            //  }, 2000)})
             
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
