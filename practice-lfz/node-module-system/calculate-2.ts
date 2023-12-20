// notes: for TS files in Node, using the 'node' command in the terminal will not work. Must start with: 'npx ts-node --esm {TS file name}'

import add2 from './add-2';
import subtract2 from './subtract-2';
import multiply2 from './multiply-2';
import divide2 from './divide-2';

const mathCalculation: string = process.argv[3];

if (mathCalculation === 'plus') {
  console.log('yay!', add2, subtract2, multiply2, divide2);
}
