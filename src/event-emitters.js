const EventEmitter = require('events');
const myEmitter = new EventEmitter();

const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
const say = hero => sentence => console.log(`${hero} says : ${sentence}`);
const johnSay = say(john);
const aryaSay = say(arya);
const sensaSay = say(sensa);

const intervalObj = setInterval(() => {
  sensaSay('For the North');
  myEmitter.emit('john');
  myEmitter.emit('arya');
}, 1000);

myEmitter.on('north', () => intervalObj);
myEmitter.once('john', () => johnSay('Winter is coming'));
myEmitter.on('arya', () => aryaSay('The king in the North'));
myEmitter.emit('north');

setTimeout(() => clearInterval(intervalObj), 5000);
