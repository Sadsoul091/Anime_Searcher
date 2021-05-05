/*CMD
  command: Demon slayer
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var msg =
  "TO WATCH THE ANIME DEMIN SLAYER AND THE MOVIE RELATED TO TO IT CLICK ON THE LINKS GIVEN BELOW OPEN THE URL AND ENJOY (WI-FI PREFERRED)"

var button = [
  {
    title: "DEMON SLAYER ANIME",
    url: "https://hindisub.com/demon-slayer-hindi-sub-00-00/"
  }
]
Bot.sendInlineKeyboard(button, msg)

var button = [
  {
    title: "DEMON SLAYER MOVIE",
    url:
      "https://hindisub.com/demon-slayer-movie-infinity-train-movie-in-hindi-sub/"
  }
]
Bot.sendInlineKeyboard(button, msg)

