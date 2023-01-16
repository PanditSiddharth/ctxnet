async function strt(bot) {

  const pn = require('./pincode.js')

  bot.help(ctx => {
    ctx.reply('Please enter any pincode to see details\nExample: send 226101')
  })

  try {
    bot.command('btn', async (ctx) => {

      const keyboar = [
        [{ text: 'Option 1', callback_data: '1' }, { text: 'Option 2', callback_data: '2' }],
        [{ text: 'Option 3', callback_data: '3' }, { text: 'Option 4', callback_data: '4' }]
      ];
      const reply_markup = {
        inline_keyboard: keyboar
      };

      await ctx.telegram.sendMessage(ctx.message.chat.id, 'Like?', { reply_markup })
    }
    )

    bot.action('1', (ctx) => ctx.editMessageText('🎉 Awesome! 🎉'))
    bot.action('2', (ctx) => ctx.editMessageText('you pressed 2'))
    bot.action('3', (ctx) => ctx.editMessageText('you pressed 3'))
    bot.action('4', (ctx) => ctx.editMessageText('you pressed 4'))

    bot.on('chat_member', async ctx => {
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
        ctx.reply('unable')
      }
    });

    pn.getData(bot)

  } catch (e) {
    console.log('buttons error')
  }

}

module.exports = { strt }