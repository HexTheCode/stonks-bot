import Command from './command';
import { detail } from '../utils/helpers';
import * as Discord from 'discord.js';


class Detail extends Command {

  public triggered: string;
  private Embed: Discord.MessageEmbed;
  Detail(triggered: string) {
    this.triggered = triggered;
    this.setEmbed();
  }

  async runnable(msg: any): Promise<void> {
    let term = msg.content.split(" ")[2];
    let results = await detail(term);
    this.Embed.setDescription(results["description"])
      .setThumbnail(results["logo"])
      .setURL(results["url"])
      .setTitle(results["name"])
      .addFields(
        { name: '\u200B', value: '\u200B' },
        { name: "Ceo", value: results["ceo"], inline: true },
        { name: "Employees", value: results["employees"], inline: true },
        { name: "Industry", value: results["industry"], inline: true },
        { name: "Sector", value: results["sector"], inline: true },
        { name: "Country", value: results["hq_country"], inline: true },
        { name: "Symbol", value: results["symbol"], inline: true },
        { name: "Address", value: results["hq_address"], inline: false },
        { name: '\u200B', value: '\u200B' },
      ).setFooter("With ❤️ by HexTheCode");
    await msg.channel.send(this.Embed);
    this.setEmbed();
  }

  private setEmbed(): void {
    this.Embed = new Discord.MessageEmbed().setColor("#232cdb");
  }

}

export default Detail;