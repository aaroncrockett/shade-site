<script lang="ts">
	let { questions, page, hasMore, score: startingScore, quizDataLength } = data;

	let selectedAnswers: (number | null)[] = Array(questions.length).fill(null);
	let feedback: ('correct' | 'incorrect' | null)[] = Array(questions.length).fill(null);
	let score = startingScore;

	$: answeredCount = selectedAnswers.filter((a) => a !== null).length;

	$: percentage = quizDataLength > 0 ? Math.round((score / quizDataLength) * 100) : 0;

	function selectAnswer(qIndex: number, choiceIndex: number) {
		if (selectedAnswers[qIndex] !== null) return;

		selectedAnswers[qIndex] = choiceIndex;
		if (choiceIndex === questions[qIndex].correctAnswer) {
			feedback[qIndex] = 'correct';
			score++;
		} else {
			feedback[qIndex] = 'incorrect';
		}
	}

	$: correctAnswers = questions
		.map((q, i) => (feedback[i] === 'correct' ? q.question : null))
		.filter(Boolean);

	$: incorrectAnswers = questions
		.map((q, i) => (feedback[i] === 'incorrect' ? q.question : null))
		.filter(Boolean);
</script>

<div class="relative">
	<div class="bg-success-500 fixed top-0 left-0 z-10 mb-4 w-full p-4 text-lg font-bold text-white">
		Score: {score} / {quizDataLength} ({percentage}%)
	</div>
	{#each questions as q, i}
		<div class="mb-6">
			<p class="font-semibold">{i + 1 + (page - 1) * 10}. {q.question}</p>

			<div class="mt-2 flex flex-col gap-2">
				{#each q.answers as ans, j}
					<button
						on:click={() => selectAnswer(i, j)}
						class="rounded border px-4 py-2 text-left text-white
						{selectedAnswers[i] === j
							? feedback[i] === 'correct'
								? 'border-green-500 bg-green-200 !text-black'
								: 'border-red-500 bg-red-200 !text-black'
							: 'border-gray-300'}
						{selectedAnswers[i] !== null && j === q.correctAnswer && selectedAnswers[i] !== j
							? 'border-green-400 bg-green-100 !text-black'
							: ''}"
						disabled={selectedAnswers[i] !== null}
					>
						{String.fromCharCode(65 + j)}. {ans}
					</button>
				{/each}
			</div>
		</div>
	{/each}

	{#if hasMore}
		<a
			class="mt-4 inline-block rounded bg-green-600 px-4 py-2 text-white"
			href={`?page=${page + 1}&score=${score}`}
		>
			Next 10 Questions →
		</a>
	{/if}
</div>

{#if correctAnswers.length > 0}
	<div class="mt-10">
		<h2 class="mb-2 font-semibold text-green-500">Correct Answers:</h2>
		<ul class="list-inside list-disc text-green-300">
			{#each correctAnswers as question}
				<li>{question}</li>
			{/each}
		</ul>
	</div>
{/if}

{#if incorrectAnswers.length > 0}
	<div class="mt-10">
		<h2 class="mb-2 font-semibold text-red-500">Incorrect Answers:</h2>
		<ul class="list-inside list-disc text-red-300">
			{#each incorrectAnswers as question}
				<li>{question}</li>
			{/each}
		</ul>
	</div>
{/if}
