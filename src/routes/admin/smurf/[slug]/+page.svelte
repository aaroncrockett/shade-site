<script lang="ts">
	import type { PageProps } from './$types';
	import { generateTimeSlots } from '$lib/utils';
	let { data, form }: PageProps = $props();
	let { smurf } = $derived(data);
	console.log('smurf', form);
	let showAddAppointment = $state(false);

	let tattooId = $derived(data.tattooId);
	let timeSlots = generateTimeSlots(9, 18);
</script>

<h1 class="mb-4 text-2xl font-bold">{smurf.first_name} {smurf.last_name}</h1>
<p><strong>Email:</strong> {smurf.email}</p>

<!-- Tattoo Creation Form -->
<form method="POST" action="?/createTattoo" class="mb-8 space-y-4">
	<input type="hidden" name="client_id" value={smurf.id} />

	<label for="name" class="block">Tattoo Name</label>
	<input
		class="input text-white"
		id="name"
		name="name"
		type="text"
		placeholder="Tattoo Name"
		required
	/>

	<label for="collection" class="block">Collection</label>
	<input
		class="input text-white"
		id="collection"
		name="collection"
		type="text"
		placeholder="Collection"
		required
	/>

	<button type="submit" class="btn preset-outlined-success-500 text-success-100">
		Create Tattoo
	</button>
</form>
{#if form && form.tattooId && !showAddAppointment}
	<button
		class="btn preset-outlined-primary-500 text-primary-100"
		onclick={() => {
			showAddAppointment = true;
		}}>Add Appointment</button
	>
{/if}

{#if showAddAppointment}
	<form
		onsubmit={() => {
			showAddAppointment = false;
		}}
		method="POST"
		action="?/createAppointment"
		class="space-y-4"
	>
		<input type="hidden" name="tattoo_id" value={tattooId} />

		<label for="date" class="block">Appointment Date</label>
		<input class="input text-white" id="date" name="date" type="date" required />

		<!-- Start Time Dropdown -->
		<label for="start_time" class="block">Start Time</label>
		<select class="input text-white" id="start_time" name="start_time" required>
			{#each timeSlots as time}
				<option value={time}>{time}</option>
			{/each}
		</select>

		<!-- Fill Time Dropdown -->
		<label for="fill_time" class="block">Fill Time (End Time)</label>
		<select class="input text-white" id="fill_time" name="fill_time" required>
			{#each timeSlots as time}
				<option value={time}>{time}</option>
			{/each}
		</select>
		<label for="appointment_type" class="block">Appointment Type</label>
		<input
			class="input text-white"
			id="appointment_type"
			name="appointment_type"
			type="text"
			placeholder="Type (e.g. consult, tattoo)"
			required
		/>

		<label for="status" class="block">Appointment Status</label>
		<select name="status" id="status" class="input text-white" required>
			<option value="" disabled hidden>Select status</option>
			<option value="scheduled" selected>Scheduled</option>
			<option value="missed">Missed</option>
			<option value="completed">Completed</option>
			<option value="canceled">Canceled</option>
		</select>

		<button type="submit" class="btn preset-outlined-primary-500 text-primary-100">
			Add Appointment
		</button>
	</form>
{/if}
