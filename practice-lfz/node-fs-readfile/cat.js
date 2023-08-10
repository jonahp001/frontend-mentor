import { readFile } from 'node:fs/promises';

try {
  for (let i = 2; i < process.argv.length; i++) {
    const filePath = new URL(process.argv[i], import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf-8' });
    console.log(contents);
  }
} catch (err) {
  console.error(err.message);
}
