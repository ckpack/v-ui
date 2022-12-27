import fs from 'node:fs';

const DEMOBLOCKTAG = '--demo'; // 识别的标记
export const DEMO_COMPOENT_PREFIX = 'DemoBlock'; // 组件前缀避免名称冲突

export const mdPlugin = (md: any) => {
  let compoentIndex = 0;
  // 设置fence代码块的解析规则
  const defaultFenceRender = md.renderer.rules.fence;
  md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    const token = tokens[idx];
    const nextToken = tokens[idx + 2];
    if (token.type !== 'fence' || !token.src || !nextToken || !nextToken.content.startsWith(DEMOBLOCKTAG)) { return defaultFenceRender(tokens, idx, options, env, self); }
    const src = token.src.replace(/\\/g, '/');
    nextToken.hidden = true;
    nextToken.children = [];

    const description = nextToken.content.slice(DEMOBLOCKTAG.length);
    const code = fs.readFileSync(src).toString();
    const encodeDescription = encodeURIComponent(description);
    const encodeCode = encodeURIComponent(code);
    const compoentName = `${DEMO_COMPOENT_PREFIX}${compoentIndex += 1}`;

    const scriptSetup = env.sfcBlocks.scriptSetup || {
      content: '<script setup>\n</script>',
      tagOpen: '<script setup>',
      type: 'script',
      contentStripped: '',
      tagClose: '</script>',
    };
    scriptSetup.contentStripped += `import ${compoentName} from '${src}';\n`;
    scriptSetup.content = `${scriptSetup.tagOpen}${scriptSetup.contentStripped}${scriptSetup.tagClose}`;
    env.sfcBlocks.scriptSetup = scriptSetup;
    env.sfcBlocks.scripts = [scriptSetup];

    return `<${DEMO_COMPOENT_PREFIX} description="${encodeDescription}" code="${encodeCode}" :compoent="${compoentName}">
      <template #description>
        ${md.render(description)}
      </template>
      <template #code>
        ${defaultFenceRender(tokens, idx, options, env, self)}
      </template>
    </${DEMO_COMPOENT_PREFIX}>`;
  };
};
