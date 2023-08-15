import { writeFile } from 'node:fs/promises';

try {
  const data = Math.floor(Math.random() * 1000).toString();
  const promise = writeFile('random-promise.txt', data);
  await promise;
} catch (err) {
  console.error(err);
}
