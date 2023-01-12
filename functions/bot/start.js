function strt(bot){
    
bot.help(ctx => {
    console.log("Received /start command")
    try {
      ctx.reply("help command")
    } catch (e) {
      console.error("error in start action:", e)
      ctx.reply("Error occured")
    }
  })

}