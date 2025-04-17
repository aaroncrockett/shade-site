<script lang="ts">
	const {
		elementAs = 'div',
		bgImg,
		bgSize = '75px 75px',
		bgRepeat = 'repeat',
		bgPosition = 'center',
		baseCls = 'p-4 rounded-sm',
		children
	} = $props();
</script>

<svelte:element
	this={elementAs}
	class={`${baseCls}`}
	style={`
		background-image: url(${bgImg});
		background-repeat: ${bgRepeat};
		background-position: ${bgPosition};
		background-size: ${bgSize};
	`}
>
	{@render children?.()}
</svelte:element>
