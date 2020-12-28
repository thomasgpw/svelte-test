<script>
  import Circle from './KonvaWraps/Circle.svelte';
  import Layer from './KonvaWraps/Layer.svelte'
  export let minInnerLength;
  export let marginLength;
  export let theme;
  export let noteRadii;
</script>

<Layer>
  <Circle
    x={minInnerLength/2}
    y={minInnerLength/2}
    r={minInnerLength / 2 - marginLength}
    fill={theme.basePrimary}
    stroke={theme.baseSecondary}
    strokeWidth={marginLength * 2}
  />
  {#each noteRadii as r}
    <Circle
      x={minInnerLength/2}
      y={minInnerLength/2}
      r={r}
      stroke={theme.baseSecondary}
      strokeWidth={2}
    />
  {/each}
</Layer>