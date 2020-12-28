<script lang="ts">
    import Konva from "konva";
    import Layer from "./KonvaWraps/Layer.svelte";
    import Stage from "./KonvaWraps/Stage.svelte";
    import UnderLayer from "./UnderLayer.svelte";
    import type { Theme } from "./consts";

    export let theme: Theme;
    export let minInnerLength: number;
    export let marginLength: number;

    $: spinnerRadius = minInnerLength / 2 - marginLength;
    $: spinnerSegment = spinnerRadius / 14;
    $: noteRadii = Array.from(
        { length: 14 },
        (v, i) => spinnerRadius - (i + 1) * spinnerSegment
    );

    //     const underLayer = new Konva.Layer();
    //     const mainLayer = new Konva.Layer();
    //     const overLayer = new Konva.Layer();


</script>

<Stage {minInnerLength}>
    <UnderLayer {minInnerLength} {marginLength} {theme} {noteRadii} />
    <Layer />
    <Layer />
</Stage>
