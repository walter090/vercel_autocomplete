import * as fs from 'fs';

export function parseTextFile(): string[] {
  const content = fs.readFileSync("src/static/wordlist.txt", 'utf-8');
  return content.split(/\r?\n/);
}