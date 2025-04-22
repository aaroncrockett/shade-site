<script lang="ts">
	import { Accordion } from '@skeletonlabs/skeleton-svelte';

	import s2sImg from '$lib/images/shade-to-shade-heart-text.png?enhanced';
	import h1ImgBg from '$lib/images/heart-bg-sm.png';
	import BgImgWrapper from '$lib/components/site-ui/background-image-wrapper.svelte';

	let accordionValue = $state(['general-info']);
</script>

<svelte:head>
	<title>Get a Tattoo!</title>
	<meta name="description" content="Info on getting a Tattoo" />
</svelte:head>

<section class="page-section">
	<BgImgWrapper bgImg={h1ImgBg}>
		<h1 class="text-center">Steps for getting a tattoo.</h1>
	</BgImgWrapper>

	<div class="flex flex-col gap-4 xl:flex-row xl:gap-6">
		<div>
			<enhanced:img
				src={s2sImg}
				alt="Heart graphic."
				class="mx-auto h-auto w-full max-w-[250px] rounded-sm lg:w-[400px]"
			/>
		</div>

		<div>
			<div class="mb-3 flex flex-col space-y-2">
				<h2>General Info.</h2>

				<div class="flex flex-col space-y-2">
					<p>
						If interested in getting a tattoo, or if you have any questions, DM on Instagram or send
						me an email.
					</p>

					<div class="my-3 rounded-md bg-neutral-900/80 p-4">
						<p>@shade-to-shade-art</p>
						<p>email: shade.to.shade.art@proton.me</p>
					</div>

					<ul class="list-disc pl-8">
						<li>
							<a href="/flash">Flash:</a> $25 deposit, to book the appointment. <span>*</span>
						</li>
						<li>
							Customer Supplied designs: $25 deposit to book the appointment. <span>*</span>

							<ul class="list-disc pl-4">
								<li>
									I won't copy another tattoo artist's original work! If the design is super common,
									then I don't have a problem using it as is. Otherwise I will have to redesign the
									piece with my own spin, and we will have to do a custom tattoo.
								</li>
							</ul>
						</li>
					</ul>
					<p>Deposits will be applied to the final cost.</p>
					<p>
						Final payment is due in cash at your appointment before tattooing. Tips are always
						appreciated and can be given at the end of the session.
					</p>
				</div>
			</div>

			<Accordion spaceY="2" value={accordionValue} onValueChange={(e) => (value = e.value)}>
				<div class="">
					<h2>Custom Tattoo</h2>

					<ol class="list-decimal space-y-2 pt-2 pl-8">
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
							finalize the design, I’ll give you a fixed price and we’ll book your tattoo. After
							this point, if anymore revisions are requested, I will do so with prepaid $25 an hour
							increments.
						</li>
					</ol>
				</div>

				<div class="mb-3 flex flex-col space-y-2">
					<h2>Tattoo Prep.</h2>

					<p>
						<span class="mr-1">☀️</span> Don’t tan or get sunburned on or near the area being tattooed
						in the days leading up to your appointment. If you have a rash, breakout, or cut on the area,
						let me know and will likely have to reschedule.
					</p>
					<p>
						<span class="mr-1"> 💧</span> Drink plenty of water in the days before your appointment.
					</p>
					<p>
						<span class="mr-1"> 🍽️ </span> I recommend not coming in on an empty stomach to keep your
						blood sugar stable.
					</p>
					<p>
						<span class="mr-1"> 🪪 </span> You’ll need a valid government-issued photo ID and need to
						be at least 18 years of age.
					</p>
					<p>
						<span class="mr-1"> 🍺 </span>
						Per OR law -- be sober for your tattoo. You cannot "shows signs of being inebriated or appears
						to be incapacitated by the use of alcohol or drugs".
					</p>
					<p>
						<span class="mr-1"> 🧘 </span>
						During the early — and often middle — stages of your tattoo, I tend to be quiet and focused.
						I may not always be able to answer or hold a conversation — I need to give the tattoo my
						full attention at this stage. That said, as we get further along, I usually become more talkative
						and would genuinely enjoy getting to know you if you’re up for it! Of course, you’re just
						as welcome to stay quiet, relax, listen to headphones, etc. My priority is making sure you're
						as comfortable as possible, as long as it doesn’t interfere with the tattoo process. Also,
						though I may not be able to converse initially, talking around me doesn't distract me. You
						are welcome to bring a friend, or talk to others in the studio.
					</p>
				</div>
			</Accordion>

			<div
				class="order-2 flex flex-col gap-2 rounded-sm bg-neutral-800/80 p-4 lg:order-3 lg:min-w-[170px] xl:min-w-[220px]"
			>
				<h4 class="mb-2 font-bold">Helpful Links</h4>

				<div class="flex flex-col gap-2">
					<a href="/flash">Flash Gallery.</a>
					<a href="/bio">Bio.</a>
				</div>
				<!-- <p><a href="">Prep instructions.</a></p>
			<p><a href="">Aftercare instructions.</a></p> -->
			</div>
		</div>
	</div>
</section>
