<script lang="ts">
	import Calendar from '$lib/components/ui/calendar/Calendar.svelte';
	export let data: { accessKey: string };
</script>

<h1>Calendar Page</h1>
<p>Access granted with key: <strong>{data.accessKey}</strong></p>

<Calendar />
