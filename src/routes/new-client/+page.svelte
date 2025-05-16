<script lang="ts">
	import type { PageProps } from './$types';
	import InputField from '$lib/components/ui/input/index.svelte';
	import SelectField from '$lib/components/ui/select/index.svelte';
	import CheckboxGroup from '$lib/components/ui/checkbox/index.svelte';
	import TattooPrep from '$lib/components/ui/tattoo-prep.svelte';
	import Aftercare from '$lib/components/ui/aftercare.svelte';
	import { CLIENT_DATA_FIELDS, MEDICAL_CONDITIONS, ACKNOWLEDGEMENTS } from '$lib/config';

	import { Accordion } from '@skeletonlabs/skeleton-svelte';

	let { form }: PageProps = $props();
	import Logo from '$lib/components/ui/logo.svelte';

	let accordionValue: string[] = $state(['optional']);

	function toggleAccordion(item: string) {
		if (accordionValue.includes(item)) {
			accordionValue = accordionValue.filter((v) => v !== item);
		} else {
			accordionValue = [...accordionValue, item];
		}
	}

	let medicationInput = $state('');
	let medications = $state<string[]>([]);
	let medicationsString = $derived(medications.join(','));

	function preventEnter(fn: () => void) {
		return (e: KeyboardEvent) => {
			if (e.key === 'Enter') {
				e.preventDefault();
				fn();
			}
		};
	}

	function addMedication() {
		const value = medicationInput.trim();
		if (value && !medications.includes(value)) {
			medications = [...medications, value];
			medicationInput = '';
		}
	}

	function removeMedication(item: string) {
		medications = medications.filter((med) => med !== item);
	}

	const gridWrapperRowCls = 'grid gap-4 p-4 md:grid-cols-2 md:p-6';

	const gridWrapperColsCls = 'grid gap-2 sm:grid-cols-2 md:p-6';
	const gridColCls = 'flex flex-col gap-2 md:gap-4';
</script>

<div class="bg-surface-900/60 rounded-sm pt-4">
	{#if form?.error}
		<p class="!text-error-500">{form.error}</p>
	{/if}

	{#if form?.success}
		<p class="text-success-500 font-medium">Thanks! Your information has been submitted.</p>
	{:else}
		<div class="px-4 md:px-6">
			<span class="block text-xs text-white">* indicates required fields</span>
		</div>

		<form method="POST">
			{#snippet extraFields()}
				<div class="bg-primary-900 flex flex-col gap-4 rounded-sm p-4">
					<div class={gridWrapperRowCls}>
						{#each CLIENT_DATA_FIELDS.filter((field) => !field.init && field.type !== 'multi-input') as field}
							{#if field.type === 'select' && field.options}
								<SelectField
									{...field}
									options={field.options.map((opt) =>
										typeof opt === 'string' ? { value: opt, label: opt } : opt
									)}
									placeholder="Select one..."
								/>
							{:else if field.type === 'checkbox'}
								<CheckboxGroup {...field} />
							{:else}
								<InputField {...field} />
							{/if}
						{/each}
					</div>

					<div class="bg-neutral-700/50 p-2">
						<div class={gridWrapperColsCls}>
							<CheckboxGroup
								id="medical_conditions"
								label="Medical Conditions"
								options={MEDICAL_CONDITIONS}
								layout="grid"
								base={gridColCls}
							/>

							<div class={gridColCls}>
								<InputField
									id="medication-pre"
									label="Medicadtions"
									type="text"
									placeholder="Enter a medication"
									onkeydown={preventEnter(addMedication)}
									bind:value={medicationInput}
								/>
								<button
									type="button"
									onclick={addMedication}
									class="btn bg-success-500 w-1/4 md:ml-[40%] lg:ml-[33%]">+</button
								>
								{#if medications.length}
									<ul class="flex flex-wrap gap-2 pt-2">
										{#each medications as med}
											<li
												class="flex items-center gap-2 rounded-full bg-neutral-800 px-3 py-1 text-white"
											>
												<span>{med}</span>
												<button
													type="button"
													onclick={() => removeMedication(med)}
													class="text-red-500">×</button
												>
											</li>
										{/each}
									</ul>
								{/if}
								<input name="medications" value={medicationsString} />
							</div>
						</div>
					</div>
				</div>
			{/snippet}

			<div class={gridWrapperRowCls}>
				{#each CLIENT_DATA_FIELDS.filter((field) => field.init && field.type) as field}
					{#if field.type === 'select' && field.options}
						<SelectField
							{...field}
							options={field.options.map((opt) =>
								typeof opt === 'string' ? { value: opt, label: opt } : opt
							)}
							placeholder="Select one..."
						/>
					{:else if field.type === 'checkbox'}
						<CheckboxGroup {...field} />
					{:else}
						<InputField {...field} />
					{/if}
				{/each}
			</div>

			<div>
				<Accordion
					classes=""
					spaceY="2"
					value={accordionValue}
					onValueChange={(e) => (value = e.value)}
				>
					<Accordion.Item
						value="optional"
						controlBase="accordion-control-base !bg-primary-900"
						controlHover="accordion-control-hover"
						controlRounded="rounded-sm"
						controlClasses="accordion-control-classes"
						indicatorBase="text-3xl"
					>
						{#snippet control()}
							<button
								type="button"
								onclick={() => toggleAccordion('optional')}
								aria-expanded={accordionValue.includes('optional')}
								class="acumin w-full text-left text-2xl md:text-3xl"
							>
								<div class="text-warning-500 flex items-center gap-4">
									Extra <p class="!text-base">
										Filling this out will save time during the tattoo session, but is not required
										at this time. All information is confidential.
									</p>
								</div>
							</button>
						{/snippet}

						{#snippet panel()}
							{@render extraFields()}
						{/snippet}
					</Accordion.Item>
				</Accordion>
			</div>

			<div class={gridWrapperRowCls}>
				<div>
					<div class="w-full pb-4"><Logo /></div>

					<InputField
						id="logo_answer"
						label="Bot Detection"
						type="text"
						placeholder="What shape is in my logo?"
						required
					/>
				</div>
			</div>

			<div class="flex flex-col gap-3 bg-neutral-800 p-4">
				<h2>Aftercare for pre-review</h2>
				<p class="text-xl">
					I will go over the aftercare instructions in the session with you again!
				</p>
				<Aftercare />
			</div>

			<div class="flex flex-col gap-3 bg-neutral-800 p-4">
				<h2>Tattoo Prep</h2>
				<p class="text-xl">Please keep theese in mind before coming to your tattoo session!</p>
				<TattooPrep />
			</div>
			<div class="p-4">
				<button type="submit" class="btn bg-primary-500 rounded-full">Submit</button>
			</div>
		</form>
	{/if}
</div>
