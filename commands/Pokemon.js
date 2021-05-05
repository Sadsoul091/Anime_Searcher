/*CMD
  command: Pokemon
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var msg =
  " TO WATCH THE ANIME POKEMON CLICK ON THE BUTTON GIVEN BELOW OPEN THE URL AND ENJOY (WI-FI PREFERRED). "

var button = [
  {
    title: "POKEMON",
    url:
      "https://com-tvypeliculas-pokemon.en.aptoide.com/?store_name=pokemonyo&app_id=49509530"
  }
]
Bot.sendInlineKeyboard(button, msg)

