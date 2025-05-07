import type { ServerLoad } from '@sveltejs/kit';
import { quizData } from './data';

const QUESTIONS_PER_PAGE = 10;

function shuffleIndexes(length: number): number[] {
	const arr = Array.from({ length }, (_, i) => i);
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}

export const load: ServerLoad = async ({ url }) => {
	const page = parseInt(url.searchParams.get('page') ?? '1', 10);
	const score = parseInt(url.searchParams.get('score') ?? '0', 10);
	let orderParam = url.searchParams.get('order');

	let order: number[];

	if (!orderParam && page === 1) {
		// Shuffle ONCE on first load
		order = shuffleIndexes(quizData.length);
		orderParam = order.join(',');
	} else if (orderParam) {
		order = orderParam.split(',').map(Number);
	} else {
		order = Array.from({ length: quizData.length }, (_, i) => i);
		orderParam = order.join(',');
	}

	const start = (page - 1) * QUESTIONS_PER_PAGE;
	const end = start + QUESTIONS_PER_PAGE;

	return {
		questions: order.slice(start, end).map((i) => quizData[i]),
		page,
		score,
		order: orderParam,
		hasMore: end < quizData.length,
		quizDataLength: quizData.length
	};
};
