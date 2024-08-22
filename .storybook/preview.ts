import type { Preview } from "@storybook/svelte";
import '../src/storybook/app.css'; // replace with the name of your tailwind css file

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    docs: {
      toc: { title: 'Table of Contents', disbale:false }
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
