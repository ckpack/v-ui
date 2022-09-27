import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DEMOBLOCKTAG = '--demo'; // 识别的标记
const COMPOENT_PREFIX = 'demo'; // 组件前缀避免名称冲突

function importCompoent(compoent: string, md: any) {
  const data = md.__data;
  data.hoistedTags = data.hoistedTags || [];
  const tags = data.hoistedTags;
  const existingScriptIndex = tags.findIndex((tag: string) => tag.includes('setup'));
  if (existingScriptIndex > -1) {
    const compoents = tags[existingScriptIndex].split('\n').slice(1, -1);
    tags[existingScriptIndex] = `<script setup>\n${[...compoents, compoent].join('\n')}\n</script>`;
  }
  else {
    tags.push(`<script setup>\nimport ${COMPOENT_PREFIX} from '${path.dirname(fileURLToPath(import.meta.url))}/compoents/DemoBlock.vue';\n${compoent}\n</script>`);
  }
}

export const mdPlugin = (md: any) => {
  let compoentIndex = 0;
  // 设置fence代码块的解析规则
  const defaultFenceRender = md.renderer.rules.fence;
  md.renderer.rules.fence = function (...args: any[]) {
    const [tokens, idx] = args;

    const token = tokens[idx];
    const nextToken = tokens[idx + 2];
    if (token.type !== 'fence' || !token.src || !nextToken || !nextToken.content.includes(DEMOBLOCKTAG))
      return defaultFenceRender(...args);
    const src = token.src.replace(/\\/g, '/');
    nextToken.hidden = true;
    nextToken.children = [];
    const description = encodeURIComponent(nextToken.content.split(' ').slice(1).join(' '));
    const code = encodeURIComponent(fs.readFileSync(src).toString());
    const compoentName = `${COMPOENT_PREFIX}${compoentIndex += 1}`;
    importCompoent(`import ${compoentName} from '${src}';`, md);
    return `<${COMPOENT_PREFIX} description="${description}" code="${code}" :compoent="${compoentName}">
      <template #code>
        ${defaultFenceRender(...args)}
      </template>
    </${COMPOENT_PREFIX}>`;
  };
};
