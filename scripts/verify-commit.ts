import { readFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const msgPath = path.resolve('.git/COMMIT_EDITMSG');
const msg = readFileSync(msgPath, 'utf-8').trim();

const types = ['feat', 'fix', 'docs', 'dx', 'style', 'refactor', 'perf', 'test', 'workflow', 'build', 'ci', 'chore', 'types', 'wip', 'release'];

const commitRE = new RegExp(`^(revert: )?(${types.join('|')})(\\(.+\\))?: .{1,50}`);

if (!commitRE.test(msg)) {
  console.error(`
  ERROR: invalid commit message format.

  Proper commit message format (<type>[optional scope]: <description>) is required for automated changelog generation.
  And type is equal to ${types.join(' ,')}
  
  Examples:

    feat(compiler): add 'comments' option
    fix(v-model): handle events on blur (close #28)

  See https://www.conventionalcommits.org for more details.`);

  process.exit(1);
}
