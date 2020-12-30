import Command from './command';
import { search } from '../utils/helpers';
import * as Discord from 'discord.js';

class Search extends Command{
  public triggered: string;
  private Embed: Discord.MessageEmbed;

  Search(triggered: string) {
    this.triggered = triggered;
    this.setEmbed();
  }

  async runnable(msg: any): Promise<void> {
    let term = msg.content.split(" ")[2];
    let results = await search(term);
    await msg.channel.send("Searching 🔍 ...");
    for (let i = 0; i < results.length; i++){
      await this.Embed.addField(results[i]["name"], `Symbol: ${results[i]["ticker"]} \nMarket: ${results[i]["market"]}`, false);
    }
    await msg.channel.send(this.Embed);
    this.setEmbed();
  }

  private setEmbed(): void {
    this.Embed = new Discord.MessageEmbed().setColor("#232cdb").setTitle("Results");
  }
}

export default Search;