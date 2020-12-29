import SuperCommand from './superCommand';
import Command from './command';
import Search from './search';

class Stonk extends SuperCommand {
  public triggered: string;
  public cList: string[];

  public subcommands: Array<Command> = [];

  Stonk(triggered: string) {
    this.triggered = triggered;
    const search = new Search();
    search.Search("search");
    this.subcommands.push(search);
  }

  runnable(msg: any): void {
    for (let i = 0; i < this.subcommands.length; i++){
      if (this.subcommands[i].Trigger(this.cList[1])) {
        this.subcommands[i].runnable(msg);
        return;
      }
    }
    
  }
}

export default Stonk;