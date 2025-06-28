import { flashImgData } from '../../flash';

import type { Tag } from '$lib/types';

const rotationClasses = ['-rotate-5', '-rotate-2', 'rotate-0', 'rotate-0', 'rotate-2', 'rotate-5'];

const customLbStyles = {
	lightboxContentProps: {
		style: 'display: flex; align-items: center; justify-content: center;'
	},
	lightboxProps: {
		style: 'max-width: 75vw; max-height: 75vh;',
		closeButton: {
			style: 'color: #666666;'
		}
	}
};

const images = $state(
	flashImgData.map((img) => ({
		...img,
		rotation: getRandomRotationClass()
	}))
);

function getRandomRotationClass() {
	return rotationClasses[Math.floor(Math.random() * rotationClasses.length)];
}

const localState = $state<{
	tags: Tag[];
}>({
	tags: []
});

export const localVars = {
	images,
	customLbStyles,
	localState
};
