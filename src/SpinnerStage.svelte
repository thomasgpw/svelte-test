<script lang="ts">
    import Layer from "./KonvaWraps/Layer.svelte";
    import Stage from "./KonvaWraps/Stage.svelte";
    import UnderLayer from "./UnderLayer.svelte";
    import OverLayer from "./OverLayer.svelte";
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

    //     const mainLayer = new Konva.Layer();


</script>

<Stage {minInnerLength}>
    <UnderLayer {minInnerLength} {marginLength} {theme} {noteRadii} />
    <Layer />
    <OverLayer {minInnerLength} {marginLength} {theme} />
</Stage>
