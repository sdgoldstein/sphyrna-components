import type { StorybookConfig } from "@storybook/sveltekit";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|ts|svelte)"],
  addons: [
    "@storybook/addon-svelte-csf",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/sveltekit",
    options: {},
  },
  async viteFinal(config, options) {
        // Merge custom configuration into the default config
        const { mergeConfig, searchForWorkspaceRoot } = await import('vite');

        const workspaceRoot = searchForWorkspaceRoot(process.cwd());
        return mergeConfig(config, {
            server: {
              fs: {
                allow: [workspaceRoot, `{workspaceRoot}/build/dist/`]
              }
            }        
        });
  }
};
export default config;
