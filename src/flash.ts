import moth from '$lib/images/flash/moth-flash.png?enhanced';
import skullBatWizard from '$lib/images/flash/skull-bat-wizard-flash.png?enhanced';
import knife from '$lib/images/flash/knife-flash.png?enhanced';

import type { ImageData } from '$lib/types';

export const flashImgData: ImageData[] = [
	{
		collections: ['linocut/woodcut'],
		Date: '2025-04',
		description: 'Moth in a linocut style with limited gray.',
		full: moth,
		id: 0,
		price: 375,
		styles: ['linocut/woodcut', 'blackwork', 'black-and-grey'],
		subjects: ['insects', 'skulls', 'symbols'],
		techniques: ['illustrative-line'],
		thumbnail: moth,
		title: 'Linocut Moth'
	},
	{
		collections: ['illustrative color'],
		Date: '2025-04',
		description: 'Skull bat wizarddd. Dope.',
		full: skullBatWizard,
		id: 1,
		price: 300,
		styles: ['cartoon', 'color', 'illustrative'],
		subjects: ['skulls', 'fantasy'],
		techniques: ['illustrative-line'],
		thumbnail: skullBatWizard,
		title: 'Skull Bat Wizard'
	},
	{
		collections: ['linocut/woodcut'],
		Date: '2025-04',
		description: 'Linocut style knife.',
		full: knife,
		id: 2,
		price: 400,
		styles: ['blackwork', 'linocut/woodcut'],
		subjects: ['weapons', 'fantasy'],
		techniques: ['illustrative-line'],
		thumbnail: knife,
		title: 'Linocut Knife'
	}
];
