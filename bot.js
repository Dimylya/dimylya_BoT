const { Bot } = require("grammy");
const { userInfo } = require("os");


const bot = new Bot("");  

bot.command('start', (ctx)=>{
    console.log(ctx);
    ctx.reply(`Добрый день ${ctx.from.first_name}, я ничего не умею`);
})

bot.command('help', (ctx)=>{
    console.log(ctx);
    ctx.reply(`Вот список доступных команд: \n/start: Выводит информацию о боте\n/help: выводит список доступных команд\n/image: отправляет случайную картинку`);
})

bot.command('image', (ctx)=>{
    console.log(ctx);
    let images = [
        'https://www.meme-arsenal.com/memes/807556176616a9f84af95233121a8bcc.jpg',
        'https://i.pinimg.com/736x/5d/a3/60/5da360c98b9af0ad709fe18606992229.jpg',
        'https://i.pinimg.com/474x/66/83/47/668347dcba27889941695a3c9253f8de.jpg?nii=t'
    ]
    let randNumber = Math.floor(Math.random()*images.length);
    ctx.replyWithPhoto(images[randNumber]);
})

bot.on('message', (context)=> {
    console.log(context.message);
    if(context.message.text[0]==='/'){
        context.react('👎')
        context.reply(`Вы ввели неизвестную команду, используйте /help для списка доступных команд!!`)
    }else{
        context.reply(context.message.text.split('').reverse().join(''));
    }
})

bot.start();
