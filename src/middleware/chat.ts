import { Middleware } from 'grammy';
import { getConfig } from '../config';

export const isMinerBotsChannel: Middleware = async (ctx, next) => {
  const config = getConfig();

  if (ctx.chat?.id === config.telegram.minerBotsChatId) {
    await next();
  }
};

export const isControlChat: Middleware = async (ctx, next) => {
  const config = getConfig();

  if (ctx.chat?.id === config.telegram.controlChatId) {
    await next();
  }
};
