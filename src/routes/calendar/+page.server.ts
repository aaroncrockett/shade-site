import { dev } from '$app/environment';

export const csr = dev;
export const prerender = false;

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {};
};
