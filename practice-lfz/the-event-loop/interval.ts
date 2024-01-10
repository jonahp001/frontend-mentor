let count: number = 3;
const interval = setInterval(() => {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(interval);
    return;
  }
  console.log(count);
  count--;
}, 1000);
