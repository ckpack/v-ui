import fs from 'node:fs';
import path from 'node:path';

export const mdDemoPlugin = (options?: { demoBlockTag?: string; demoCompoentPrefix?: string }) => {
  const { demoBlockTag = '--demo', demoCompoentPrefix = 'DemoBlock' } = options || {};
  const DEMOBLOCKTAG = demoBlockTag; // 识别的标记
  const DEMO_COMPOENT_PREFIX = demoCompoentPrefix; // 组件前缀避免名称冲突
  return (md: any) => {
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
      const encodeCode = encodeURIComponent(code);
      const compoentName = `${DEMO_COMPOENT_PREFIX}${compoentIndex += 1}`;

      const scriptSetup = env.sfcBlocks.scriptSetup || {
        content: '<script setup>\n</script>',
        tagOpen: '<script setup>',
        type: 'script',
        contentStripped: '',
        tagClose: '</script>',
      };
      if (!`${scriptSetup.contentStripped}`.includes(DEMO_COMPOENT_PREFIX)) {
        scriptSetup.contentStripped += `import ${DEMO_COMPOENT_PREFIX} from '${path.resolve('docs/.vitepress/plugins/demo-block.vue')}';\n`;
      }
      scriptSetup.contentStripped += `import ${compoentName} from '${src}';\n`;
      scriptSetup.content = `${scriptSetup.tagOpen}${scriptSetup.contentStripped}${scriptSetup.tagClose}`;
      env.sfcBlocks.scriptSetup = scriptSetup;
      env.sfcBlocks.scripts = [scriptSetup];

      return `${md.render(description)}
      <${DEMO_COMPOENT_PREFIX} code="${encodeCode}" :demo="${compoentName}">
        <template #code>
          ${defaultFenceRender(tokens, idx, options, env, self)}
        </template>
      </${DEMO_COMPOENT_PREFIX}>`;
    };
  };
};
