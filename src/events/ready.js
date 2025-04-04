const { ActivityType } = require('discord.js')

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('Ready!');

        client.user.setActivity({
          name: 'youtube',
          type: ActivityType.Streaming,
          url: 'https://www.youtube.com/watch?v=OqxHy8sCtvA',
        })
        
            }
        }