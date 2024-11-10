<script lang="ts">
  import type { BaseComponentProps } from "../component.js";

  interface ImageProps extends BaseComponentProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }

  let { src, alt, width, height, ...restProps }: ImageProps = $props();
</script>

<img
  {src}
  {alt}
  width={width ? `${width}px` : null}
  height={height ? `${height}px` : null}
  {...restProps}
/>
