import { readFile, writeFile } from 'node:fs/promises';

try {
  const filePath = new URL(process.argv[2], import.meta.url);
  const contents = await readFile(filePath, { encoding: 'utf-8' });
  const promise = writeFile(process.argv[3], contents);
  await promise;
} catch (err) {
  console.error(err.message);
}
