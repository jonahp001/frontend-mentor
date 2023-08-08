import takeAChance from './take-a-chance.js';

const promise1 = takeAChance('jonah');

promise1
  .then((name) => {
    console.log(name);
  })
  .catch((error) => {
    console.error(error.message);
  });
