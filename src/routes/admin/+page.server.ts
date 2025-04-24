import { fail } from '@sveltejs/kit';
import { v4 as uuidv4 } from 'uuid';
import type { Actions } from './$types';
import { PUBLIC_APP_DOMAIN_LOCAL, PUBLIC_APP_DOMAIN_PROD } from '$env/static/public';

export const actions = {
	default: async (event) => {
		const access_key = uuidv4().replace(/-/g, '').slice(0, 5);

		const expires_on = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString();

		const origin = event.url.origin;
		const isLocal = origin.includes('localhost');
		const baseUrl = isLocal ? PUBLIC_APP_DOMAIN_LOCAL : PUBLIC_APP_DOMAIN_PROD;

		const { error } = await event.locals.supabase.from('temp_user_form').insert([
			{
				access_key,
				expires_on
			}
		]);

		if (error) {
			console.log('Insert Error:', error.message);
			return fail(500, { error: error.message });
		}

		return {
			success: true,
			access_key,
			link: `${baseUrl}/new-client?key=${access_key}`
		};
	}
} satisfies Actions;
