import { redirect } from '@sveltejs/kit';
import { ADMIN_SEG } from '$lib/config';

import type { RequestEvent } from '@sveltejs/kit';

export const GET = async (event: RequestEvent) => {
	const {
		url,
		locals: { db }
	} = event;
	const code = url.searchParams.get('code') as string;
	const next = url.searchParams.get('next') ?? ADMIN_SEG;

	if (code) {
		const { error } = await db.auth.exchangeCodeForSession(code);
		if (!error) {
			throw redirect(303, `/${next.slice(1)}`);
		}
	}

	// return the user to an error page with instructions
	throw redirect(303, '/auth/auth-code-error');
};
