<script lang="ts">
	export let currentMonth: any;
	export let onPrevMonth: () => void;
	export let onNextMonth: () => void;
</script>

<div class="mb-4 flex items-center justify-between">
	<button class="btn preset-filled-secondary-500" onclick={onPrevMonth}>Previous</button>
	<span>{currentMonth.format('MMMM YYYY')}</span>
	<button class="btn preset-filled-secondary-500" onclick={onNextMonth}>Next</button>
</div>
