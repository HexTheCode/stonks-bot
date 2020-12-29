import Command from './command';
import { search } from '../utils/helpers';

class Search extends Command{
  public triggered: string;
  public cList: string[];

  Search(triggered: string) {
    this.triggered = triggered;
  }

  async runnable(msg: any): Promise<void> {
    let term = msg.content.split(" ")[2];
    let results = await search(term);
    await msg.channel.send("Searching 🔍 ...");
    for (let i = 0; i < results.length; i++){
      await msg.channel.send("  -Name: "+results[i]["name"]+" / Symbol: "+results[i]["ticker"]+" / Market: "+results[i]["market"]);
    }
  }
}

export default Search;