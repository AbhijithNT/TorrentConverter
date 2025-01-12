// Commands => start, help, about.

startMsg = async (ctx) =>
{
    ctx.reply(`👋 Hey ${ctx.from.first_name} ..\n\n<b>Send me a TORRENT file I will give u the Magnetic Link</b> & <strike>vice versa</strike>.\nCommands: /help /about\n👉 <code>Magnet to Torrent isn't stable.</code>. \n`,
    {
        parse_mode: "HTML",
        reply_to_message_id: ctx.message.message_id,
        reply_markup:{
            inline_keyboard: [
                [
                    {text: '🧑‍💻 Dev', url:'https://t.me/WideWine'},
                    {text: '🌟 Source Code 🌟', url:'https://github.com/JinsoRaj/TorrentConverter'}
                ]
            ]
        } 
    })
};

helpMsg = async (ctx) =>
{
    ctx.reply(`I can convert magnetic links to torrent files and vice versa.\nI can manage your torrent / leech groups also. <a href="https://t.me/TorrentToMagnetRobot?startgroup=start">Add me to your groups.</a>`,
    {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        reply_to_message_id: ctx.message.message_id 
    })
};

aboutMsg = async (ctx) =>
{
    ctx.reply(`Developer: @WideWine\nFramework: <a href="https://grammy.dev">grammY</a> 💙\nSource Code: https://github.com/JinsoRaj/TorrentConverter`,
    {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        reply_to_message_id: ctx.message.message_id,
        reply_markup:{
            inline_keyboard: [
                [
                    {text: '🌟 Rate Me 🌟', url:'https://t.me/tlgrmcbot?start=torrenttomagnetrobot-review'}
                ]
            ]
        } 
    })
};

module.exports = { startMsg, helpMsg, aboutMsg }