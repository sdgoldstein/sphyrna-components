<script lang="ts">
  import type { ImageProps } from "./image.js";

  let { src, alt, width, height, ...restProps }: ImageProps = $props();
</script>

<img
  {src}
  {alt}
  width={width ? `${width}px` : null}
  height={height ? `${height}px` : null}
  {...restProps}
/>
