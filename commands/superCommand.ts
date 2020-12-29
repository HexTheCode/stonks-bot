import Command from "./command";

abstract class SuperCommand{
  
  abstract triggered: string;
  abstract cList: string[];
  abstract subcommands: Array<Command>;
  
  abstract runnable(msg: any): void;

  public Trigger(ComprovationStr: any): boolean{

    let cList = ComprovationStr.split(" ");
    this.cList = cList;
    let prefix = cList[0];

    if (prefix === this.triggered) {
      return true;  
    } else {
      return false;
    }
  }
}

export default SuperCommand;