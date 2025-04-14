<script lang="ts">
	import imgMe from '$lib/images/aaron.png?enhanced';
	import h1ImgBg from '$lib/images/heart-bg-sm.png';
</script>

<svelte:head>
	<title>Bio</title>
	<meta name="description" content="Artists Bio" />
</svelte:head>

<div class="text-column flex flex-col gap-4">
	<div
		class=" p-4"
		style={`background-image: url(${h1ImgBg}); background-repeat: repeat; background-position: center; background-size: 150px 150px;`}
	>
		<h1 class="text-4xl">My Bio, yo.</h1>
	</div>

	<div class="flex flex-col gap-4 md:flex-row md:gap-6">
		<div>
			<enhanced:img
				src={imgMe}
				alt="Image of the artist"
				class="mx-auto h-auto w-full max-w-[250px] md:w-[400px]"
			/>
		</div>
		<div class="repeated-heart-bg flex flex-col gap-4">
			<p>
				Aaron (ShadeToShade) has been interested in art and drawing since childhood and loves
				tattooing. He attended college for Graphic Design and Drawing. Then, an MFA in Painting.
				Over the years, he has worked as a web designer and developer, and taught 2D design at
				SIU-Edwardsville as a graduate student.
			</p>
			<p>
				Aaron welcomes everyone, with a special shoutout to the queer and neurodivergent communities
				(he is queer and has ADHD himself). He loves hiking, jogging, being outdoors, and exploring
				all the food and food carts around Portland. He has variety of interest that include
				TV/film, music, Buddhism, and video games when he has the time.
			</p>
			<p>
				During the early portion of a session, Aaron tends to stay quiet in order to focus. He’s
				often able to chat more as the tattoo progresses (if you prefer), but he never minds others
				talking. Clients are also welcome to bring a friend.
			</p>
		</div>
	</div>
</div>
