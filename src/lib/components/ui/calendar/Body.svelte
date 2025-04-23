<script lang="ts">
	export let days: Array<{ date: any; isToday: boolean }>;
</script>

<div class="grid grid-cols-7 gap-2">
	{#each days as { date, isToday }}
		<div class="text-center">
			<span>{date.date()}</span>
			{#if isToday}
				<span class="text-sm text-gray-500">(Today)</span>
			{/if}
		</div>
	{/each}
</div>
