import { rm } from 'fs/promises';
import { resolve } from 'path';

const dir = resolve(process.cwd(), 'node_modules', '.cache', 'gh-pages');

try {
  await rm(dir, { recursive: true, force: true });
  console.log(`Removed gh-pages cache at: ${dir}`);
} catch (err) {
  // don't fail the deploy if the folder doesn't exist or removal fails
  console.log(`No gh-pages cache to remove at: ${dir}`);
}
