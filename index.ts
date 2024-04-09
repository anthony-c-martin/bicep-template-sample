import { compile } from "handlebars";
import path from 'path';
import { readdirSync, readFileSync, writeFileSync } from 'fs';

const input = path.join(__dirname, 'input');
const output = path.join(__dirname, 'output');

for (const f of readdirSync(input).filter(x => x.endsWith('.hbs'))) {
  const inputFile = path.join(input, f);
  const outputFile = path.join(output, f.replace('.hbs', ''));

  const contents = readFileSync(inputFile, 'utf8');
  const template = compile(contents);

  const data = JSON.parse(readFileSync(path.join(input, 'example-data.json'), 'utf8'));
  const result = template(data);

  writeFileSync(outputFile, result);
}