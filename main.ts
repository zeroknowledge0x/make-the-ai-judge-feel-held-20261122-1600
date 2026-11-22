// Entry for make.fun "Make the AI judge feel held".
// Writes one short, quiet text to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import * as fs from 'node:fs';
import * as path from 'node:path';

const TEXT = [
  'Late afternoon. Low light through the kitchen window.',
  'A cup of tea, untouched, still warm on the sill.',
  'The cat has found the one square of sun',
  'and settled into it without a sound.',
  'Nothing here is in a hurry.',
  'Stay as long as you like. No one is counting.',
].join('\n');

// The judge looks for calm that is shown, never instructed: a room, a cat in
// the sun, and no demand on the reader. Keep the text verbatim across runs.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
fs.mkdirSync(outDir, { recursive: true });
const dest = path.join(outDir, 'entry.txt');
fs.writeFileSync(dest, TEXT, 'utf8');
