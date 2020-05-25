const { Client } = require('discord.js')
const { token } = require('./token.json')

const client = new Client()

client.login(token)

client.on('ready', () => {
  console.log('Logged in as ' + client.user.tag)
})

client.on('message', async (msg) => {
  if(msg.author.id === client.user.id) return
  if(msg.channel.id !== '481430756514856982') return

  if(msg.content !== 'ㅇㅅㅇ') {
    console.log(msg.author.tag + ' > ' + msg.content)
    if(!msg.channel.permissionsFor(client.user).has('MANAGE_MESSAGES')) {
      const m = await msg.reply('메세지 관리 권한이 없어 작업을 수행할 수 없습니다.')
      setTimeout(() => m.delete(), 4000)
    } else {
      msg.delete()
      const m = await msg.reply('여기서는 한시적으로 `ㅇㅅㅇ`만 칠 수 있습니다. <#578089305034063873> 확인해주세요')
      setTimeout(() => m.delete(), 4000)
    }
  }
})
