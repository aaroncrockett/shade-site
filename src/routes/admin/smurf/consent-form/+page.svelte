<script lang="ts">
	const { data } = $props();

	import { CLIENT_DATA_FIELDS } from '$lib/config';
	import InputField from '$lib/components/ui/input/index.svelte';
	import SelectField from '$lib/components/ui/select/index.svelte';
	import { MEDICAL_CONDITIONS, ACKNOWLEDGEMENTS } from '$lib/config';

	let selectedMedicalConditions = $state<string[]>([]);
	let selectedAcknowledgements = $state<string[]>([]);

	const isFormValid = $derived.by(() => {
		return ACKNOWLEDGEMENTS.every((ack) => selectedAcknowledgements.includes(ack));
	});
</script>

<!-- <h1 class="mb-4 text-2xl font-bold text-white">Edit Client</h1> -->

<div class="bg-surface-900/60 mb-4 grid rounded-sm p-4 md:grid-cols-2 md:gap-2">
	<h3 class="text-3xl">{data.client.first_name} {data.client.last_name}</h3>
	<p></p>
	<p>phone: {data.client.phone}</p>
	<p>instagram: {data.client.instagram}</p>
	<p>email: {data.client.email}</p>
	<p>preferred contact: {data.client.preferred_contact}</p>
	<p>Edit</p>
</div>

{#snippet medicalConditionsCheckboxes()}
	{#each MEDICAL_CONDITIONS as condition}
		<label class="flex items-center gap-2">
			<input
				type="checkbox"
				name="medical_conditions"
				value={condition}
				bind:group={selectedMedicalConditions}
			/>
			<span>{condition}</span>
		</label>
	{/each}
{/snippet}

{#snippet acknowledgementsCheckboxes()}
	{#each acknowledgements as ack}
		<label class="flex items-center gap-2">
			<input
				type="checkbox"
				name="acknowledgements"
				value={ack}
				bind:group={selectedAcknowledgements}
			/>
			<span>{ack}</span>
		</label>
	{/each}
{/snippet}

{#snippet textareaField(id: string, label: string, required = false)}
	<div class="md:flex md:gap-4">
		<label for={id} class="block whitespace-nowrap md:w-1/2 lg:w-1/3">
			{label}{#if required}
				<span class="text-white">*</span>{/if}
		</label>
		<textarea {id} name={id} rows="2" {required} class="input w-full"></textarea>
	</div>
{/snippet}

<div class="bg-surface-900/60 rounded-sm p-4">
	<form method="POST" class="space-y-4">
		<span class=" block !text-xs !text-white">* indicates required fields</span>

		<div class="grid gap-2 md:grid-cols-2 md:gap-4">
			{#each CLIENT_DATA_FIELDS.filter((field: any) => !field.init) as field}
				{#if field.type === 'select' && field.options}
					<SelectField
						{...field}
						options={field.options.map((opt: any) =>
							typeof opt === 'string' ? { value: opt, label: opt } : opt
						)}
						placeholder="Select one..."
					/>
				{:else}
					<InputField {...field} />
				{/if}
			{/each}
		</div>

		<p class="mb-2 block font-semibold whitespace-nowrap">medical conditions</p>
		<div class="grid gap-2 md:grid-cols-2">
			{@render medicalConditionsCheckboxes()}
		</div>

		{@render textareaField('medications', 'List any medications you are currently taking')}

		<p class="mb-2 block font-semibold whitespace-nowrap">medical conditions</p>
		<div class="grid gap-2">
			{@render acknowledgementsCheckboxes()}
		</div>

		<button type="submit" class="btn bg-primary-500" disabled={!isFormValid}>Submit</button>
	</form>
</div>
