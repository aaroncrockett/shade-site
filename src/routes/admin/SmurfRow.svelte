<script lang="ts">
	let { smurf } = $props();

	let editing = $state(false);
	let edited = $state({
		first_name: smurf.first_name,
		last_name: smurf.last_name,
		email: smurf.email
	});

	function toggleEdit() {
		editing = !editing;
	}

	function slugFromEmail(email: string): string {
		return email.replace('@', '-').replace(/\.com$/, '');
	}
</script>

<div class="flex gap-2 rounded p-3">
	{#if editing}
		<form method="POST" action="?/edit" class="flex items-center gap-2">
			<input class="input" type="text" name="first_name" bind:value={edited.first_name} />
			<input class="input" type="text" name="last_name" bind:value={edited.last_name} />
			<input class="input" type="email" name="email" bind:value={edited.email} />

			<div class="flex gap-2">
				<button type="submit" class="btn preset-outlined-success-500 text-success-100">Save</button>
				<button
					type="button"
					class="btn text-error-100 preset-outlined-error-500"
					onclick={toggleEdit}>Cancel</button
				>
			</div>
		</form>
	{:else}
		<div class="flex w-full flex-row items-center gap-4">
			{#if !smurf.locked_after || new Date(smurf.locked_after) < new Date()}
				<form method="POST" action="?/unlock">
					<button type="submit" class="btn preset-outlined-success-500 text-success-100"
						>Unlock</button
					>
				</form>
			{:else}
				<form method="POST" action="?/lock">
					<button type="submit" class="btn preset-outlined-success-500 text-success-100"
						>Lock</button
					>
				</form>
			{/if}

			<p class="whitespace-nowrap">{smurf.first_name} {smurf.last_name}</p>
			<p>{smurf.email}</p>
			<div class="flex w-full flex-row justify-end gap-4">
				<button
					type="button"
					class="btn preset-outlined-secondary-500 text-secondary-200"
					onclick={toggleEdit}>Inline Edit</button
				>
				<a
					class="btn preset-outlined-secondary-500 !text-secondary-200 !font-normal"
					href={`admin/smurf/${slugFromEmail(smurf.email)}`}>Edit With Tattoos</a
				>
			</div>
		</div>
	{/if}
</div>
