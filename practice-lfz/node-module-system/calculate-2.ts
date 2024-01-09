// notes: for TS files in Node, using the 'node' command in the terminal will not work. Must start with: 'npx ts-node --esm {TS file name}'
// for future reference, may or may not need to make adjustments for each project using TypeScript. Google and research are good tools for this.

import add2 from './add-2.ts';
import subtract2 from './subtract-2.ts';
import multiply2 from './multiply-2.ts';
import divide2 from './divide-2.ts';

const mathCalculation: string = process.argv[3];

if (mathCalculation === 'plus') {
  const num1: number = parseInt(process.argv[2]);
  const num2: number = parseInt(process.argv[4]);
  console.log(add2(num1, num2));
}

if (mathCalculation === 'minus') {
  const num1: number = parseInt(process.argv[2]);
  const num2: number = parseInt(process.argv[4]);
  console.log(subtract2(num1, num2));
}

if (mathCalculation === 'times') {
  const num1: number = parseInt(process.argv[2]);
  const num2: number = parseInt(process.argv[4]);
  console.log(multiply2(num1, num2));
}

if (mathCalculation === 'over') {
  const num1: number = parseInt(process.argv[2]);
  const num2: number = parseInt(process.argv[4]);
  console.log(divide2(num1, num2));
}
