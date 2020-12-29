var greeting_1 = require("./greeting");
var today_1 = require("./today");
var stonk_1 = require("./stonk");

var GreetingCommand = new greeting_1["default"]();
GreetingCommand.Greeting("!hi");

var TodayCommand = new today_1["default"]();
TodayCommand.Today("!today");

var StonkCommand = new stonk_1["default"]();
StonkCommand.Stonk("!stonk");

var commands = [GreetingCommand, TodayCommand, StonkCommand];

module.exports = commands;
