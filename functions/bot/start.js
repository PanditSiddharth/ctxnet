async function strt(bot) {

  bot.help(ctx => {
    console.log("Received /help command")
    try {
      ctx.reply("help command")
    } catch (e) {
      console.error("error in start action:", e)
      ctx.reply("Error occured")
    }
  })

  try {

    const keyboard = [
      [{ text: 'Option 1', callback_data: '1' }, { text: 'Option 2', callback_data: '2' }],
      [{ text: 'Option 3', callback_data: '3' }, { text: 'Option 4', callback_data: '4' }]
    ];
    const reply_markup = {
      inline_keyboard: keyboard
    };

    bot.command('btn', async (ctx) => await ctx.telegram.sendMessage(
      ctx.message.chat.id,
      'Like?',
      { reply_markup })
    )

    bot.action('1', (ctx) => ctx.editMessageText('🎉 Awesome! 🎉'))
    bot.action('2', (ctx) => ctx.editMessageText('okey2'))
    bot.action('3', (ctx) => ctx.editMessageText('okey3'))
    bot.action('4', (ctx) => ctx.editMessageText('okey4'))

  //   bot.on("chat_member", async ctx => {
  //     try {
  //       var new_chat_member = ctx.update.chat_member.new_chat_member;
  //       let chat = ctx.update.chat_member.chat;

  //       if (new_chat_member.status == 'left') {
  //         await ctx.reply('Sed, ' + new_chat_member.user.first_name + '!! has left this group')

  //       }
  //       else if (new_chat_member.status == 'member' && !new_chat_member.user.is_bot) {
  //         await ctx.reply('Hi, ' + new_chat_member.user.first_name + '!! Welcome in group')
  //         console.log(new_chat_member)
  //       }
  //     } catch (error) {
  //       console.error('too many requests', error);
  //     }
  //   });

  } catch (e) {
    console.log('buttons error')
  }

}

module.exports = { strt }