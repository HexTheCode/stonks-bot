import Command from './command';

class Greeting extends Command{
  
  public triggered: string;
  private greetingReplies = ["Whats up", "All my hommies say Ey", "Hi", "Hello"];
  Greeting(triggered: string) {
    this.triggered = triggered;
  }

  runnable(msg: any): void {
    let index = Math.floor(Math.random() * this.greetingReplies.length);
    let str = this.greetingReplies[index];
    msg.channel.send(`${str} ${msg.author.username} 🤖`);
  }
}

export default Greeting;