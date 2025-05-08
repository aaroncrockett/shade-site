<script lang="ts">
	import type { PageProps } from './$types';
	let { form }: PageProps = $props();

	const medicalConditions = [
		'Diabetes',
		'Heart condition',
		'Hepatitis',
		'HIV/AIDS',
		'Pregnant or nursing',
		'Skin condition (e.g. eczema, psoriasis)',
		'Seizure disorder',
		'Bleeding disorder',
		'Other'
	];
	const acknowledgements = ['Are you drunk?', 'Do you really want this tattoo?'];

	// Track selected medical conditions and acknowledgements
	let selectedMedicalConditions = $state<string[]>([]);
	let selectedAcknowledgements = $state<string[]>([]);

	// Derived state to check if all acknowledgements are checked
	const allAcknowledgementsChecked = $derived.by(() => {
		return acknowledgements.every((acknowledgement) =>
			selectedAcknowledgements.includes(acknowledgement)
		);
	});

	// Derived state to check if no medical conditions are selected
	const noMedicalConditionsSelected = $derived.by(() => {
		return medicalConditions.every((condition) => !selectedMedicalConditions.includes(condition));
	});

	// Final form validity based on conditions
	const isFormValid = $derived.by(() => {
		return allAcknowledgementsChecked && noMedicalConditionsSelected;
	});
</script>

{#if form?.error}
	<p class="!text-error-500">{form.error}</p>
{/if}

{#if form?.success}
	<p class="font-medium text-green-600">Thanks! Your information has been submitted.</p>
{:else}
	{#snippet inputField(id, label, type = 'text', required = false)}
		<div class="md:flex md:gap-4">
			<label for={id} class="block font-semibold whitespace-nowrap md:w-1/2 lg:w-1/3">
				{label}{#if required}
					<span class="text-white">*</span>{/if}
			</label>
			<input {id} name={id} {type} {required} class="input w-full" />
		</div>
	{/snippet}

	{#snippet medicalConditionsCheckboxes()}
		{#each medicalConditions as condition}
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

	{#snippet textareaField(id, label, required = false)}
		<div class="md:flex md:gap-4">
			<label for={id} class="block font-semibold whitespace-nowrap md:w-1/2 lg:w-1/3">
				{label}{#if required}
					<span class="text-white">*</span>{/if}
			</label>
			<textarea {id} name={id} rows="2" {required} class="input w-full"></textarea>
		</div>
	{/snippet}
	<form method="POST" class="space-y-4">
		<span class=" block !text-xs !text-white">* indicates required fields</span>
		<span class="block !text-xs !text-white">
			<em>However</em> I recommend filling everything applicable out now instead of during the tattoo
			session.
		</span>
		<div class="grid gap-2 md:grid-cols-2 md:gap-4">
			{@render inputField('first_name', 'First Name', 'text', true)}
			{@render inputField('last_name', 'Last Name', 'text', true)}
			{@render inputField('email', 'Email', 'email', true)}
			{@render inputField('instagram', 'Instagram Handle', 'text')}
			{@render inputField('telephone', 'Phone', 'tel', true)}
			{@render inputField('address', 'Street Address')}
			{@render inputField('city', 'City')}
			{@render inputField('state', 'State')}
			{@render inputField('zip', 'ZIP Code')}
			{@render inputField('dob', 'Date of Birth', 'date')}
			{@render inputField('dl_or_id_number', 'DL/ID #')}
			{@render inputField('dl_or_id_exp', 'DL/ID Expiration', 'date')}
			{@render inputField('preferred_name', 'Preferred Name')}
			{@render inputField('pronouns', 'Pronouns')}
		</div>
		<p class="mb-2 block font-semibold whitespace-nowrap">medical conditions</p>
		<div class="grid gap-2 md:grid-cols-2">
			<!-- {@render checkboxGroup('medical_conditions', medicalConditions, selectedMedicalConditions)} -->
			{@render medicalConditionsCheckboxes()}
		</div>

		{@render textareaField('medications', 'List any medications you are currently taking')}

		<p class="mb-2 block font-semibold whitespace-nowrap">medical conditions</p>
		<div class="grid gap-2">
			<!-- {@render checkboxGroup('acknowledgements', acknowledgements)} -->
			{@render acknowledgementsCheckboxes()}
		</div>

		<button type="submit" class="btn bg-primary-500" disabled={!isFormValid}>Submit</button>
	</form>
{/if}
