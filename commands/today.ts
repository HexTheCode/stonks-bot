import Command from './command';

export default class Today extends Command{
  public triggered: string;
  Today(triggered: string) {
    this.triggered = triggered;
  }

  runnable(msg: any): void {
    msg.channel.send(`Today is ${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`);
  }
}