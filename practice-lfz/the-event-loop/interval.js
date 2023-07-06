let count = 3;
const practiceInt = setInterval(() => {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(practiceInt);
  } else {
    console.log(count);
    count--;
  }
}, 1000);
