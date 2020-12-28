<script>
  import Layer from './KonvaWraps/Layer.svelte'
  import Line from './KonvaWraps/Line.svelte'
  export let minInnerLength;
  export let marginLength;
  export let theme;
  $: centerLength = minInnerLength / 2;
</script>
<Layer>
  <Line
    points={[
      centerLength,
      centerLength,
      minInnerLength - marginLength * 2,
      centerLength
    ]}
    strokeWidth={3}
  />
</Layer>