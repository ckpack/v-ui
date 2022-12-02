import fs from 'node:fs';

const DEMOBLOCKTAG = '--demo'; // 识别的标记
export const DEMO_COMPOENT_PREFIX = 'Demo__'; // 组件前缀避免名称冲突

export const mdPlugin = (md: any) => {
  let compoentIndex = 0;
  // 设置fence代码块的解析规则
  const defaultFenceRender = md.renderer.rules.fence;
  md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    const token = tokens[idx];
    const nextToken = tokens[idx + 2];
    if (token.type !== 'fence' || !token.src || !nextToken || !nextToken.content.includes(DEMOBLOCKTAG)) { return defaultFenceRender(tokens, idx, options, env, self); }
    const src = token.src.replace(/\\/g, '/');
    nextToken.hidden = true;
    nextToken.children = [];
    const description = encodeURIComponent(nextToken.content.split(' ').slice(1).join(' '));
    const code = encodeURIComponent(fs.readFileSync(src).toString());
    const compoentName = `${DEMO_COMPOENT_PREFIX}${compoentIndex += 1}`;

    const scriptSetup = env.sfcBlocks.scriptSetup || {
      content: '<script setup lang="ts">\n</script>',
      tagOpen: '<script setup lang="ts">',
      type: 'script',
      contentStripped: '',
      tagClose: '</script>',
    };
    scriptSetup.contentStripped += `import ${compoentName} from '${src}';\n`;
    scriptSetup.content = `${scriptSetup.tagOpen}${scriptSetup.contentStripped}${scriptSetup.tagClose}`;
    env.sfcBlocks.scriptSetup = scriptSetup;
    env.sfcBlocks.scripts = [scriptSetup];
    return `<${DEMO_COMPOENT_PREFIX} description="${description}" code="${code}" :compoent="${compoentName}">
      <template #code>
        ${defaultFenceRender(tokens, idx, options, env, self)}
      </template>
    </${DEMO_COMPOENT_PREFIX}>`;
  };
};
