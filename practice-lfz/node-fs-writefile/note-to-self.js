import { writeFile } from 'node:fs';

let data = '';
for (let i = 2; i < process.argv.length; i++) {
  if (i === process.argv.length - 1) {
    data += `${process.argv[i]} \n`;
  } else {
    data += `${process.argv[i]} `;
  }
}
writeFile('note.txt', data, (err) => {
  if (err) throw err;
});
