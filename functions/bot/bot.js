const { Telegraf } = require("telegraf")
const bot = new Telegraf('5914579167:AAHBhbD4JY3IhOPdk-bncrKQHzv3BEUYdmc')

    bot.on("chat_member", async ctx => {
      try {
        var new_chat_member = ctx.update.chat_member.new_chat_member;
        let chat = ctx.update.chat_member.chat;

        if (new_chat_member.status == 'left') {
          await ctx.reply('Sed, ' + new_chat_member.user.first_name + '!! has left this group')

        }
        else if (new_chat_member.status == 'member' && !new_chat_member.user.is_bot) {
          await ctx.reply('Hi, ' + new_chat_member.user.first_name + '!! Welcome in group')
          console.log(new_chat_member)
        }
      } catch (error) {
        console.error('too many requests', error);
      }
    });

const st = require('./start.js')

bot.start(ctx => {
  console.log("Received /start command")
  try {
    ctx.reply("Hi")
  } catch (e) {
    console.error("error in start action:", e)
    ctx.reply("Error occured")
  }
})

PORT = process.env.PORT

st.strt(bot);

bot.launch({
  webhook: {
    domain: 'https://ctxnet.netlify.app',
    PORT,
    path: '/api/bot'
  },
  allowedUpdates: [
    'update_id',
    'message',
    'edited_message',
    'channel_post',
    'edited_channel_post',
    'inline_query',
    'chosen_inline_result',
    'callback_query',
    'shipping_query',
    'pre_checkout_query',
    'poll',
    'poll_answer',
    'my_chat_member',
    'chat_member',
    'chat_join_request'
],
dropPendingUpdates: false, // Don't activate this
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