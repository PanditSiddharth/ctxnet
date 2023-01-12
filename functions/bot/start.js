function strt(bot){

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
    r(bot)

    // bot.on('new_chat_members', (ctx)=>{ctx.sendMessage('welcome')});
}catch(e){
    console.log('buttons error')
}

}

const r = async (bot) => {
    try {
        await bot.on('new_chat_members', (ctx) => { ctx.reply('welcome') 
        console.log('no error')
    }
    )
} catch (error) {
    console.log(error)
}}

module.exports = { strt }
   

// const welcomeMessage = (ctx) => {
//     const { new_chat_members } = ctx.message;
//     const newMembers = new_chat_members.filter( member => member.is_bot === false)
//     var membersName = newMembers.map( usr =>{ 
//       let fullname = [usr.first_name,usr.last_name].join(" ");
//       return fullname;
//     });
//     ctx.replyWithMarkdown(`Welcom ${membersName.join(', ')}`);
//   }