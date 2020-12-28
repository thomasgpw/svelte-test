<script lang="ts">
    import {onMount} from 'svelte';
    import Konva from 'konva';
    import type { Theme } from "./consts";
    export let theme:Theme;
    export let minInnerLength:number;
    export let marginLength:number;
    let container:HTMLDivElement;
    $: spinnerRadius = (minInnerLength/2)-marginLength
    $: spinnerSegment = spinnerRadius / 14;
    $: noteRadii = Array.from({length: 14}, (v, i) => (1 - ((i + 1) * spinnerSegment)));
    $: console.log(noteRadii)
    onMount(()=>{
        const stage = new Konva.Stage({
            container: container,
            width: minInnerLength,
            height: minInnerLength
        })
        const underLayer = new Konva.Layer();
        const mainLayer = new Konva.Layer();
        const overLayer = new Konva.Layer();

        const spinnerBase = new Konva.Circle({
            x: minInnerLength/2,
            y: minInnerLength/2,
            radius: spinnerRadius,
            fill: theme.basePrimary,
            stroke: theme.baseSecondary,
            strokeWidth: marginLength * 2
        })
        underLayer.add(spinnerBase)
        noteRadii.forEach(radius => {
            console.log(radius)
        });

        stage.add(underLayer)
        stage.add(mainLayer)
        stage.add(overLayer)
    })
</script>

<div bind:this={container}/>

<style>
    div {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%)
    }
</style>