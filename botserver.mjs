import { Bot, InlineKeyboard } from "grammy";
import dotenv from "dotenv";

dotenv.config();

const bot = new Bot(process.env.TELEGRAM_BOT_API_KEY);

bot.on("message:text", async (ctx) => {
  const messageText = ctx.message.text;
  // Regular expression to match /start command with an optional parameter
  const startCommandRegex = /^\/start(?:\s+(.+))?$/;
  const match = messageText.match(startCommandRegex);

  if (match) {
    const referrer_userId = match[1];

    if (referrer_userId) {
      const username = ctx.from.username;
      const userId = ctx.from.id;
      const first_name = ctx.from.first_name;
      const last_name = ctx.from.last_name;
      const is_premium = ctx.from.is_premium;

      try {
        const welcomeMessage = username
          ? `Hi @${username}! Welcome our Robert Gamba! 🎉`
          : `Hi! Welcome our Robert Gamba! 🎉`;

        ctx.reply(welcomeMessage, {
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Open App",
                  web_app: { url: "https://carsino-mini-app.vercel.app/" },
                },
              ],
            ],
          },
        });
      } catch (error) {
        console.error("Database error:", error);
        ctx.reply("An error occurred while processing your request.");
      }
    } else {
      const username = ctx.from.username;
      const userId = ctx.from.id;
      const first_name = ctx.from.first_name;
      const last_name = ctx.from.last_name;
      const is_premium = ctx.from.is_premium;
      let photoUrl = "";
      const photos = await bot.api.getUserProfilePhotos(ctx.from.id);

      try {
        const welcomeMessage = username
          ? `Hi @${username}! Welcome our Robert Gamba! 🎉`
          : `Hi! Welcome our Robert Gamba! 🎉`;

        ctx.reply(welcomeMessage, {
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Open App",
                  web_app: { url: "https://carsino-mini-app.vercel.app/" },
                },
              ],
            ],
          },
        });
      } catch (error) {
        console.error("Database error:", error);
        ctx.reply("An error occurred while processing your request.");
      }
    }
  }
});

bot.start();

console.log("Bot server started in the polling mode...");
