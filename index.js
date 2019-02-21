const telegramBot = require('node-telegram-bot-api')

const bot = TelegramBot('739870884:AAFjsDMRlLgZSYAbrZWbBcCwjwQHAtSXzUw',{polling: true})
bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, 'Hello from ubuntu,bot says hi to "${msg.from.first_name}"' )
})
