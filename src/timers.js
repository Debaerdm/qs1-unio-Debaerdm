const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
const say = hero => sentence => console.log(`${hero} says : ${sentence}`);
const johnSay = say(john);
const aryaSay = say(arya);

setTimeout(() => {
  johnSay('hello Ladies Stark');
  setImmediate(aryaSay, 'thank you for needle');
}, 2000);

const sensaSay = say(sensa);
const interval = setInterval(() => {
  sensaSay('For the north');
}, 1000);

setTimeout(() => clearInterval(interval), 10000);
