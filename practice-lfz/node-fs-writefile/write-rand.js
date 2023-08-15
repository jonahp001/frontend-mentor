import { writeFile } from 'node:fs';

const data = Math.floor(Math.random() * 1000).toString();

writeFile('random.txt', data, (err) => {
  if (err) throw err;
});
