/*
        __       __        __
  ___ _/ /  ___ / /  ___  / /_
 / _ `/ _ \/ -_) _ \/ _ \/ __/
 \_, /_//_/\__/_.__/\___/\__/
/___/  GitHub Enterprise Bot

*/

import dotenv from 'dotenv';
import { Bot, listen } from './bot.js';

dotenv.config();

const token = process.env.SLACK_API_TOKEN || '';
const prefix = process.env.BOT_PREFIX || null;

class GHEBot extends Bot {
  constructor(token) {
    super(token);

    this.prefix = prefix;
  }

  @listen
  hello(args, from, channel) {
    return `Hello to you too, ${from.real_name}!`;
  }

  @listen
  help(args, from) {
    console.log(from);
    //return args.join(',');
  }
}

var bot = new GHEBot(token);
