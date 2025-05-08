<script>
	import { followers, following } from './data.js';

	function normalize(str) {
		return str.trim().toLowerCase();
	}

	// Create a Set of followers for fast normalized comparison
	const followerSet = new Set(followers.map(normalize));

	// People you follow (following) who do NOT follow you back
	const notFollowingMeBack = following.filter((person) => !followerSet.has(normalize(person)));
</script>

<h2>People you follow who don’t follow you back:</h2>
{#if notFollowingMeBack.length > 0}
	<ul>
		{#each notFollowingMeBack as person}
			<li>{person}</li>
		{/each}
	</ul>
{:else}
	<p>You follow only people who follow you back 🎉</p>
{/if}
