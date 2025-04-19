<script lang="ts">
	import s2sImg from '$lib/images/shade-to-shade-heart-text.png?enhanced';
	import h1ImgBg from '$lib/images/heart-bg-sm.png';
	import BgImgWrapper from '$lib/components/site-ui/background-image-wrapper.svelte';
</script>

<svelte:head>
	<title>Get a Tattoo!</title>
	<meta name="description" content="Info on getting a Tattoo" />
</svelte:head>

<section class="page-section">
	<BgImgWrapper bgImg={h1ImgBg}>
		<h1 class="text-center">Steps for getting a tattoo.</h1>
	</BgImgWrapper>

	<div class="order-1 flex flex-col gap-4 lg:flex-row lg:gap-6">
		<div>
			<enhanced:img
				src={s2sImg}
				alt="Heart graphic."
				class="mx-auto h-auto w-full max-w-[250px] rounded-sm lg:w-[400px]"
			/>
		</div>

		<div class="order-3 flex flex-col gap-4 rounded-sm bg-neutral-700 p-4 lg:order-2">
			<h2>Instructions for getting a tattoo.</h2>

			<p>
				If interested in getting a tattoo, or if you have any questions, DM on Instagram or send me
				an email.
			</p>

			<div class="ml-4 rounded-md bg-neutral-900/80 p-4">
				<p>@shade-to-shade-art</p>
				<p>email: shade.to.shade.art@proton.me</p>
			</div>

			<ul class="list-disc pl-4">
				<li>Flash: $25 deposit, to book.</li>
				<li>
					Supplied designs: $25 deposit, to book. Some designs I may suggest a free in-person
					placement session to ensure the design flows correctly.
				</li>
				<li>
					I won't copy another tattoo artist's original work! If the design is super common, then I
					don't have a problem using it as is. Otherwise I will have to redesign the piece with my
					own spin.
				</li>
			</ul>
			<p>Deposits will be applied to the final cost.</p>
			<p>
				Final payment is due in cash at your appointment before tattooing. Tips are always
				appreciated and can be given at the end of the session.
			</p>

			<div class="flex flex-col gap-8">
				<div>
					<h2>Custom Tattoo</h2>

					<ol class="list-decimal space-y-2 pt-2 pl-4">
						<li>
							Schedule a free phone session where we talk about the design, size, placement, and any
							other details. I’ll give you a price range — usually between $100–$200. (IE: "Your
							tattoo will cost between $300 and $400.")
						</li>

						<li>
							A $75 deposit is required before I start designing. This goes toward your final total.
						</li>
						<li>
							Once the first drawing is ready, we’ll schedule a free in-person placement session to
							see how it flows and make any adjustments.
						</li>
						<li>
							If revisions are needed, I’ll send the updated version before we book. Once we
							finalize the design, I’ll confirm your price and we’ll book your tattoo.
						</li>
					</ol>
				</div>
			</div>
		</div>

		<div
			class="order-2 flex flex-col gap-2 rounded-sm bg-neutral-800/80 p-4 lg:order-3 lg:min-w-[170px] xl:min-w-[220px]"
		>
			<h4 class="mb-2 font-bold">Helpful Links</h4>

			<p>
				<a href="/flash">Flash.</a>
			</p>
			<!-- <p><a href="">Prep instructions.</a></p>
			<p><a href="">Aftercare instructions.</a></p> -->
		</div>
	</div>
</section>
