<script lang="ts">
	import s2sImg from '$lib/images/shade-to-shade-heart-text.png?enhanced';
	import h1ImgBg from '$lib/images/heart-bg-sm.png';
</script>

<svelte:head>
	<title>Get a Tattoo!</title>
	<meta name="description" content="Info on getting a Tattoo" />
</svelte:head>

<div class="text-column md: flex flex-col gap-4 md:gap-8">
	<div
		class=" p-4"
		style={`background-image: url(${h1ImgBg}); background-repeat: repeat; background-position: center; background-size: 150px 150px;`}
	>
		<h1 class="text-4xl">Steps for getting a tattoo with me.</h1>
	</div>

	<div class="flex flex-col gap-4 md:flex-row md:gap-6">
		<div>
			<enhanced:img
				src={s2sImg}
				alt="Heart graphic."
				class="mx-auto h-auto w-full max-w-[250px] md:w-[400px]"
			/>
		</div>
		<div class="flex flex-col gap-4">
			<div>
				<h2>Appointment</h2>
				<p>If you'd like to book one of my flash pieces, here's what to do:</p>

				<ol class="ml-4 list-decimal space-y-2 pt-2 pl-4">
					<li>
						Pick a piece from my <a href="/flash">FLASH</a> collection.
					</li>
					<li>
						DM on Instagram @shade-to-shade-art or send me am email @ shade.to.shade.art@proton.me.
					</li>
					<li>We’ll pick a time that works for your session.</li>
					<li>
						A $25 deposit is required to book your appointment.
						<ul class="list-disc pl-4">
							<li>This goes toward the final cost of the tattoo.</li>
						</ul>
					</li>
					<li>Final payment is due in cash at the beginning of your session.</li>
				</ol>
			</div>

			<div>
				<h2>Custom Tattoo</h2>
				<p>If you're interested in a custom piece, here’s how the process works:</p>

				<ol class="list-decimal space-y-2 pt-2 pl-4">
					<li>
						Send me a DM on Instagram @shade-to-shade-art or email me @
						shade.to.shade.art@proton.me.
					</li>
					<li>
						We’ll schedule a free phone consultation.
						<ul class="list-disc pl-4">
							<li>I may ask you to send reference images or other resources.</li>
						</ul>
					</li>
					<li>
						We will discuss the tattoo design, size, placement, and any other details.
						<ul class="list-disc pl-4">
							<li>I’ll give you a price range based on our conversation.</li>
							<li>Pricing usually ranges within $100–$200 depending on size.</li>
							<li>Final price depends on complexity and placement.</li>
							<li><b>Example:</b> “The tattoo will be between $300 and $400.”</li>
							<li>
								Pricing is fixed — not hourly — but it often averages around $100–$125 per hour of
								tattoo time.
							</li>
						</ul>
					</li>
					<li>
						A $75 deposit is required before I begin designing or conceptualizing the piece.
						<ul class="list-disc pl-4">
							<li>This deposit goes toward the final cost.</li>
						</ul>
					</li>
					<li>
						I recommend a free in-person placement session. This gives us a chance to see how the
						tattoo looks on your body and make any needed adjustments.
					</li>
					<li>At this point, I’ll confirm the total price within the original quoted range.</li>
					<li>
						Once the design is finalized, we’ll schedule your tattoo session(s).
						<ul class="list-disc pl-4">
							<li>If you’d like to request additional revisions, a rate of $25/hr may apply.</li>
						</ul>
					</li>
					<li>Final payment is due in cash at the start of the session.</li>
				</ol>
			</div>
		</div>
	</div>
</div>
