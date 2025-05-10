<script lang="ts">
	import type { PageProps } from './$types';
	import InputField from '$lib/components/ui/input/index.svelte';
	import SelectField from '$lib/components/ui/select/index.svelte';
	import { CLIENT_DATA_FIELDS, MEDICAL_CONDITIONS, ACKNOWLEDGEMENTS } from '$lib/config';

	let { form }: PageProps = $props();
	import Logo from '$lib/components/ui/logo.svelte';
	let selectedMedicalConditions = $state<string[]>([]);
	let selectedAcknowledgements = $state<string[]>([]);

	const isFormValid = $derived.by(() => {
		return ACKNOWLEDGEMENTS.every((ack) => selectedAcknowledgements.includes(ack));
	});
</script>

<div class="bg-surface-900/60 rounded-sm pt-4">
	{#if form?.error}
		<p class="!text-error-500">{form.error}</p>
	{/if}

	{#if form?.success}
		<p class="font-medium text-green-600">Thanks! Your information has been submitted.</p>
	{:else}
		<div class="px-4 md:px-6">
			<span class="block !text-xs !text-white">* indicates required fields</span>
		</div>

		<form method="POST">
			<div class="grid gap-4 p-4 md:grid-cols-2 md:gap-5 md:p-6">
				{#each CLIENT_DATA_FIELDS.filter((field) => field.init) as field}
					{#if field.type === 'select' && field.options}
						<SelectField
							{...field}
							options={field.options.map((opt) =>
								typeof opt === 'string' ? { value: opt, label: opt } : opt
							)}
							placeholder="Select one..."
						/>
					{:else if field.type === 'checkbox'}
						<div class="flex-row gap-4 text-white md:flex">
							<label for={field.id} class="block whitespace-nowrap md:w-1/2 lg:w-1/3">
								Pronouns
							</label>
							<div class="flex w-full flex-row items-center justify-start gap-2">
								{#each field.options ?? [] as option, i}
									<input
										id="{field.id}-{i}"
										type="checkbox"
										name={field.id}
										value={option}
										class="accent-primary-500 inline-block"
									/>
									<span class="inline-block text-white">{option}</span>
								{/each}
							</div>
						</div>
					{:else}
						<InputField {...field} />
					{/if}
				{/each}
			</div>

			<div class=" bg-neutral-700/50 p-4">
				<div class="grid gap-2 sm:grid-cols-2 md:p-6">
					<div class="flex flex-col gap-2 md:gap-4">
						<label for="medical-conditions" class="">Medical conditions</label>
						<div class="grid gap-2 md:grid-cols-2">
							{#each MEDICAL_CONDITIONS as condition}
								<div class="flex items-center gap-2">
									<input
										id="medical-conditions"
										type="checkbox"
										name="medical_conditions"
										value={condition}
										class="text-white"
										bind:group={selectedMedicalConditions}
									/>
									<span class="text-white">{condition}</span>
								</div>
							{/each}
						</div>
					</div>
					<div class="flex flex-col gap-2 md:gap-4">
						<label for="medications" class="flex items-center gap-2">Medications</label>
						<div class="md:flex md:gap-4">
							<textarea name="medicationss" rows="2" required class="input w-full"></textarea>
						</div>
					</div>
				</div>
			</div>
			<div class="flex w-1/2 flex-col gap-2 p-4 md:p-6">
				<div class="w-full pb-4"><Logo /></div>

				<InputField
					id="logo_answer"
					label="Bot Detection"
					type="text"
					placeholder="What shape is in my logo?"
					required
				/>
				<button type="submit" class="btn bg-primary-500 rounded-full">Submit</button>
			</div>
		</form>
	{/if}
</div>
