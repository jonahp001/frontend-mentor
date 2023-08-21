import { readFile, writeFile } from 'node:fs/promises';

if (process.argv[2] === 'read') {
  try {
    const filepath = new URL('data.json', import.meta.url);
    const content = await readFile(filepath, { encoding: 'utf8' });
    const parsedContent = JSON.parse(content);
    const elements = parsedContent.notes;
    const dataString = JSON.stringify(elements, null, 2);
    const woFirst = dataString.slice(2);
    const woLast = woFirst.slice(0, -2);
    const finalData = woLast.replaceAll('"', '');
    console.log(finalData, typeof parsedContent.nextId);
  } catch (err) {
    console.error(err);
  }
}

if (process.argv[2] === 'create') {
  let data = '';
  for (let i = 3; i < process.argv.length; i++) {
    data += `${process.argv[i]} `;
  }
  try {
    const filepath = new URL('data.json', import.meta.url);
    const content = await readFile(filepath, { encoding: 'utf8' });
    const parsedContent = JSON.parse(content);
    parsedContent.notes[parsedContent.nextId.toString()] = data;
    parsedContent.nextId += 1;
    const promise = writeFile(
      'data.json',
      JSON.stringify(parsedContent, null, 2)
    );
    await promise;
  } catch (err) {
    console.error(err);
  }
}

if (process.argv[2] === 'delete') {
  try {
    const filepath = new URL('data.json', import.meta.url);
    const content = await readFile(filepath, { encoding: 'utf8' });
    const parsedContent = JSON.parse(content);
    if (parsedContent.notes[process.argv[3]]) {
      delete parsedContent.notes[process.argv[3]];
    }
    const promise = writeFile(
      'data.json',
      JSON.stringify(parsedContent, null, 2)
    );
    await promise;
  } catch (err) {
    console.error(err);
  }
}

if (process.argv[2] === 'update') {
  let data = '';
  for (let i = 4; i < process.argv.length; i++) {
    data += `${process.argv[i]} `;
  }
  try {
    const filepath = new URL('data.json', import.meta.url);
    const content = await readFile(filepath, { encoding: 'utf8' });
    const parsedContent = JSON.parse(content);
    if (parsedContent.notes[process.argv[3]]) {
      parsedContent.notes[process.argv[3]] = data;
    }
    const promise = writeFile(
      'data.json',
      JSON.stringify(parsedContent, null, 2)
    );
    await promise;
  } catch (err) {
    console.error(err);
  }
}
