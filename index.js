const {
    Client,
    GatewayIntentBits,
    EmbedBuilder
} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Bot Ready
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// Commands
client.on('messageCreate', async (message) => {

    // Ignore bots
    if (message.author.bot) return;

    // Ping Command
    if (message.content === '!ping') {
        message.reply('Pong!');
    }

    // Prices Command
    if (message.content === '!prices') {

        const pricesEmbed = new EmbedBuilder()
            .setTitle('💖 Made By Suki Prices')
            .setDescription('Custom FiveM Content Pricing')
            .addFields(
                { name: 'Clothing', value: '$5', inline: true },
                { name: 'Custom Tattoos', value: '$20+', inline: true },
                { name: 'Premade Tattoos', value: '$15+', inline: true },
                { name: 'Custom Skins', value: '$20+', inline: true },
                { name: 'Premade Skins', value: '$15+', inline: true },
                { name: 'Buy Out Premades', value: '$20+', inline: true },
                { name: 'Addons', value: '$5+', inline: true },
                { name: 'Membership', value: '$25+', inline: true },
                { name: 'Stables', value: '$10+', inline: true },
                { name: 'Ramps', value: '$10+', inline: true }
            )
            .setColor('#ff69b4')
            .setFooter({ text: 'Made By Suki 💕' })
            .setTimestamp();

        message.channel.send({
            embeds: [pricesEmbed]
        });
    }
});

// Login
client.login(process.env.TOKEN);