<script>
  import Konva from "konva";
  import { getContext, onDestroy } from "svelte";

  export let x = 0;
  export let y = 0;
  export let r = 0;
  export let fill = '#0000';
  export let stroke = '#0000';
  export let strokeWidth = 1;
  $: redrawCircle(x, y, r, fill, stroke, strokeWidth);
  const { getLayer } = getContext("konva_layer");
  const layer = getLayer();
  let circle;
  function redrawCircle (x, y, r, fill, stroke, strokeWidth) {
    if(circle) {circle.destroy()}
    circle = new Konva.Circle({
      x: x,
      y: y,
      radius: r,
      fill: fill,
      stroke: stroke,
      strokeWidth: strokeWidth,
    });
    layer.add(circle);
    layer.draw();
  }
  onDestroy(() => circle.destroy());
</script>
