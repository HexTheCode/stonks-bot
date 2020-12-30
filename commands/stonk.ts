import SuperCommand from './superCommand';
import Command from './command';
import Search from './search';
import Detail from './detail';

class Stonk extends SuperCommand {
  public triggered: string;
  public cList: string[];

  public subcommands: Array<Command> = [];

  Stonk(triggered: string) {
    this.triggered = triggered;
    const search = new Search();
    search.Search("search");
    const detail = new Detail();
    detail.Detail("detail");
    this.subcommands.push(search);
    this.subcommands.push(detail);
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