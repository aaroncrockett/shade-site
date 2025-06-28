import moth from '$lib/images/flash/moth-flash.png?enhanced';
import knife from '$lib/images/flash/knife-flash.png?enhanced';

// Math.floor(1_000_000 + Math.random() * 9_000_000)

import type { ImageData } from '$lib/types';

export const flashImgData: ImageData[] = [
	{
		collections: ['linocut/woodcut-collection'],
		Date: '2025-04',
		description: 'Moth in a linocut style with limited gray.',
		full: moth,
		id: 6664479,
		price: 375,
		styles: ['linocut/woodcut-style', 'blackwork-style', 'black-and-grey-style'],
		subjects: ['insects-subject', 'skulls-subject', 'symbols-subject'],
		techniques: ['illustrative-line-technique'],
		thumbnail: moth,
		title: 'Linocut Moth'
	},
	{
		collections: ['linocut/woodcut-collection'],
		Date: '2025-04',
		description: 'Linocut style knife.',
		full: knife,
		id: 6788676,
		price: 400,
		styles: ['blackwork-style', 'linocut/woodcut-style'],
		subjects: ['fantasy-subject'],
		techniques: ['illustrative-line-technique'],
		thumbnail: knife,
		title: 'Linocut Knife'
	}
];
