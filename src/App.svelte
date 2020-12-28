<script lang="ts">
	import {THEMES, DEFAULT_CONFIG} from './consts';
	import Canvas from './Canvas.svelte';
	let innerWidth: number = window.innerWidth;
	let innerHeight: number = window.innerHeight;
	$: minInnerLength = Math.min(innerWidth, innerHeight);
	$: console.log(minInnerLength)
	const marginLength: number = 8;
	let theme = THEMES[DEFAULT_CONFIG.theme]
	
	$: styles = {
		'marginLength': marginLength + 'px',
		...theme
	};
	$: cssVarStyles = Object.entries(styles)
		.map(
			([key, value]) =>
			`--${key
				.replace(/([A-Z])/g, function (g) { return '-' + g[0].toLowerCase() })
			}:${value}`
		)
		.join(';');

</script>

<svelte:window bind:innerHeight bind:innerWidth/>

<main style="{cssVarStyles}">
	<div class='fullscreen bg-gradient'
		role='presentation' aria-hidden={true}
	/>
	<Canvas {theme} {minInnerLength} {marginLength} />
	<div id='noise' class='fullscreen noise'
		role='presentation' aria-hidden={true}
	/>
</main>

<style>
	main {
		width: 100%;
		height: 100%;
		background: var(--background);
		overflow: hidden;
	}
	.fullscreen {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}
	.bg-gradient {
		width: calc(100% - (var(--margin-length) * 2));
		height: calc(100% - (var(--margin-length) * 2));
		margin: var(--margin-length);
		background: linear-gradient(157.14deg,
			var(--background) 12.58%,
			var(--accent-secondary) 39.1%,
			var(--accent-primary) 86.88%)
	}
	.noise {
		background-image: url('/noise.png');
		background-size: 100px;
		background-repeat: repeat;
		mix-blend-mode: hue;
		pointer-events: none;
	}
</style>