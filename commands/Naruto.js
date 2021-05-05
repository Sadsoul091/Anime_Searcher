/*CMD
  command: Naruto
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var msg =
  "TO WATCH THE ANIME NARUTO CLICK THE BUTTON GIVEN BELOW AND ENJOY (WI-FI PREFERRED"

var button = [
  {
    title: "NARUTO",
    url:
      "https://com-tvypeliculas-naruto.en.aptoide.com/?store_name=apps&app_id=32367349"
  }
]
Bot.sendInlineKeyboard(button, msg)

