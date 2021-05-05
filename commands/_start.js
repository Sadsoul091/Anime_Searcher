/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var msg =
  "HEY THERE! I AM AN ANIME SEARCHER BOT MADE BY https://t.me/The_Sadsoul_X_Sadangle CLICK ON THE BELOW PROVIDED BUTTON TO JOIN HIS SUPPORT GROUP"
if (chat.chat_type != "private") {
  return
} else
  var button = [
    { title: "CLICK HERE", url: "https://t.me/bot_store_by_the_sadsoul" }
  ]
Bot.sendInlineKeyboard(button, msg)

