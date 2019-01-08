const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
const say = hero => sentence => Promise.resolve(`${hero} says : ${sentence}`);
const johnSay = say(john);
const aryaSay = say(arya);
const sensaSay = say(sensa);

const interval = new Promise((resolve, reject) => {
    const intervalObj = setInterval(() => {
        resolve(sensaSay('For the North'));
    }, 1000);

    setTimeout(() => clearInterval(intervalObj), 10000);
}).then(value => {
  return Promise.all([
    value,
    Promise.resolve(johnSay('Winter is coming')),
    new Promise(resolve => {
      setImmediate(() => {
        resolve(aryaSay('The king in the North'));
      });
    }),
  ]);
}).then(result => {
    console.log(result);
});

console.log(interval);

