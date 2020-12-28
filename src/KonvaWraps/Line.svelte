<script>
  import Konva from "konva";
  import { getContext, onDestroy } from "svelte";

  export let points = [];
  export let stroke = '#000';
  export let strokeWidth = 1;
  export let lineJoin = 'round';
  export let lineCap = 'round';
  console.log(points)
  $: redrawLine(points, stroke, strokeWidth, lineJoin, lineCap);
  const { getLayer } = getContext("konva_layer");
  const layer = getLayer();
  let line;
  function redrawLine (points, stroke, strokeWidth, lineJoin, lineCap) {
    if(line) {line.destroy()}
    line = new Konva.Line({
      points,
      stroke, strokeWidth,
      lineJoin, lineCap
    });
    layer.add(line);
    layer.draw();
  }
  onDestroy(() => line.destroy());
</script>
