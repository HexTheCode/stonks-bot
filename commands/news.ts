import Command from './command';
import { news } from '../utils/helpers';
import * as Discord from 'discord.js';

class News extends Command{
  public triggered;
  private Embed: Discord.MessageEmbed;

  News(triggered: string) {
    this.triggered = triggered;
    this.setEmbed();
  }

  async runnable(msg: any): Promise<void> {
    let term = msg.content.split(" ")[2];
    let results = await news(term);
    this.Embed
      .setTitle(results["title"])
      .setURL(results["url"])
      .setDescription(results["summary"])
      .setThumbnail(results["image"])
      .setTimestamp(results["timestamp"])
      .setFooter("With ❤️ by HexTheCode");
    await msg.channel.send(this.Embed); 
    this.setEmbed();
  }

  private setEmbed(): void {
    this.Embed = new Discord.MessageEmbed().setColor("#232cdb");
  }
}

export default News;