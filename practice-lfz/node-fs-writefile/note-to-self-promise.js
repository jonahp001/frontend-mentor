import { writeFile } from 'node:fs/promises';

let data = '';
for (let i = 2; i < process.argv.length; i++) {
  if (i === process.argv.length - 1) {
    data += `${process.argv[i]} \n`;
  } else {
    data += `${process.argv[i]} `;
  }
}

try {
  const promise = writeFile('note-promise.txt', data);
  await promise;
  console.log(process.argv[0]);
  console.log(process.argv[1]);
  console.log(process.argv[2]);
} catch (err) {
  console.error(err);
}
