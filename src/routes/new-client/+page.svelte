<script lang="ts">
	import type { PageProps } from './$types';
	let { form }: PageProps = $props();
</script>

{#if form?.error}
	<p class="text-red-600">{form.error}</p>
{/if}

{#if form?.success}
	<p class="font-medium text-green-600">Thanks! Your information has been submitted.</p>
{:else}
	<form method="POST" class="space-y-4">
		<div>
			<label for="first_name" class="block font-semibold">First Name</label>
			<input id="first_name" name="first_name" type="text" required class="input w-full" />
		</div>

		<div>
			<label for="last_name" class="block font-semibold">Last Name</label>
			<input id="last_name" name="last_name" type="text" required class="input w-full" />
		</div>

		<div>
			<label for="email" class="block font-semibold">Email</label>
			<input id="email" name="email" type="email" required class="input w-full" />
		</div>

		<div>
			<label for="phone" class="block font-semibold">Phone</label>
			<input id="phone" name="phone" type="tel" required class="input w-full" />
		</div>

		<div>
			<label for="instagram" class="block font-semibold">Instagram Handle (optional)</label>
			<input
				id="instagram"
				name="instagram"
				type="text"
				placeholder="@yourhandle"
				class="input w-full"
			/>
		</div>

		<button type="submit" class="btn bg-primary-500">Submit</button>
	</form>
{/if}
