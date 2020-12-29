abstract class Command{
  
  abstract triggered: string;
  
  abstract runnable(msg: any): void;

  public Trigger(ComprovationStr: string): boolean{
    if (ComprovationStr === this.triggered) {
      return true;  
    } else {
      return false;
    }
  }
}

export default Command;
