import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export function mdDemoPlugin(options?: {
  demoBlockTag?: string;
  demoCompoentPrefix?: string;
  compoentPath?: string;
  base?: string;
  editLink?: string;
}) {
  const {
    demoBlockTag = '--demo',
    demoCompoentPrefix = 'DemoBlock',
    compoentPath = path.resolve(dirname, 'demo-block.vue'),
    base = path.resolve(),
    editLink = '',
  } = options || {};
  return (md: any) => {
    let compoentIndex = 0;
    // 设置fence代码块的解析规则
    const defaultFenceRender = md.renderer.rules.fence;
    md.renderer.rules.fence = function (tokens, idx, options, env, self) {
      const token = tokens[idx];
      const nextToken = tokens[idx + 2];

      if (token.type !== 'fence' || !token.src || !nextToken || !nextToken.content.startsWith(demoBlockTag)) {
        return defaultFenceRender(tokens, idx, options, env, self);
      }

      const [tokenSrc] = token.src;

      // 隐藏 nextToken
      nextToken.hidden = true;
      nextToken.children = [];

      const description = nextToken.content.slice(demoBlockTag.length);
      const code = fs.readFileSync(tokenSrc).toString();
      const encodeCode = encodeURIComponent(code);
      const encodeEditLint = editLink && encodeURIComponent(tokenSrc.replace(base, editLink));
      const compoentName = `${demoCompoentPrefix}_${compoentIndex += 1}`;

      const scriptSetup = env.sfcBlocks.scriptSetup || {
        content: '<script setup>\n</script>',
        tagOpen: '<script setup>',
        type: 'script',
        contentStripped: '',
        tagClose: '</script>',
      };
      if (!`${scriptSetup.contentStripped}`.includes(demoCompoentPrefix)) {
        scriptSetup.contentStripped += `import ${demoCompoentPrefix} from '${compoentPath}';\n`;
      }
      scriptSetup.contentStripped += `import ${compoentName} from '${tokenSrc}';\n`;
      scriptSetup.content = `${scriptSetup.tagOpen}${scriptSetup.contentStripped}${scriptSetup.tagClose}`;
      env.sfcBlocks.scriptSetup = scriptSetup;
      env.sfcBlocks.scripts = [scriptSetup];

      // return `${md.render(description)}
      // <${demoCompoentPrefix} code="${encodeCode}" demo="${compoentName}" edit-link="${encodeEditLint}" />`;

      return `${md.render(description)}
      <${demoCompoentPrefix} code="${encodeCode}" :demo="${compoentName}" edit-link="${encodeEditLint}">
        <template #code>
          ${defaultFenceRender(tokens, idx, options, env, self)}
        </template>
      </${demoCompoentPrefix}>`;
    };
  };
}
