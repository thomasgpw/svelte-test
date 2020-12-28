<script lang="ts">
  import Konva from "konva";
  import { onMount, setContext } from "svelte";

  setContext("konva", {
    getStage: () => stage,
  });

  export let minInnerLength: number;
  let container: HTMLDivElement;
  let stage;

  onMount(() => {
    stage = new Konva.Stage({
      container: container,
      width: minInnerLength,
      height: minInnerLength,
    });
    return () => stage.destroy();
  });

  $: fitStageToParent(minInnerLength);
  function fitStageToParent(newLength) {
    // only run after onMount
    if (container) {
      stage.width(newLength);
      stage.height(newLength);
      stage.draw();
    }
  }
</script>

<style>
  .stage {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

<div class:stage={true} bind:this={container}>
  {#if container}
    <slot />
  {/if}
</div>
