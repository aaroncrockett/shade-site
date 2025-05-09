<script lang="ts">
	import type { PageProps } from './$types';
	import InputField from '$lib/components/ui/input/index.svelte';
	import SelectField from '$lib/components/ui/select/index.svelte';
	import { clientDataFields } from './data.ts';
	let { form }: PageProps = $props();
	import Logo from '$lib/components/ui/logo.svelte';
	// const uid = $props.id();
</script>

<div class="bg-surface-900/60 rounded-sm p-4">
	{#if form?.error}
		<p class="!text-error-500">{form.error}</p>
	{/if}

	{#if form?.success}
		<p class="font-medium text-green-600">Thanks! Your information has been submitted.</p>
	{:else}
		<form method="POST" class="space-y-4">
			<span class=" block !text-xs !text-white">* indicates required fields</span>

			<div class="grid gap-4 md:grid-cols-2 md:gap-5">
				{#each clientDataFields.filter((field) => field.init) as field}
					{#if field.type === 'select' && field.options}
						<SelectField
							{...field}
							options={field.options.map((opt) =>
								typeof opt === 'string' ? { value: opt, label: opt } : opt
							)}
							placeholder="Select one..."
						/>
					{:else}
						<InputField {...field} />
					{/if}
				{/each}
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
				<!-- <SelectField
				id="preferred_contact"
				label="Preferred Contact Method"
				required={true}
				placeholder="Choose one..."
				options={[
					{ value: 'email', label: 'Email' },
					{ value: 'instagram', label: 'Instagram DM' },
					{ value: 'either', label: 'Either' }
				]}
			/> -->
			</div>

			<button type="submit" class="btn bg-primary-500 rounded-full">Submit</button>

			<!-- <button type="submit" class="btn bg-primary-500" disabled={!isFormValid}>Submit</button> -->
		</form>
	{/if}
</div>
