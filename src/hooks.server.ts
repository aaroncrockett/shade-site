import { createServerClient } from '@supabase/ssr';
import { type Handle, redirect } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

const db: Handle = async ({ event, resolve }) => {
	/**
	 * Creates a DB client specific to this server request.
	 *
	 * The DB client gets the Auth token from the request cookies.
	 */
	event.locals.db = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
		cookies: {
			getAll: () => event.cookies.getAll(),
			/**
			 * SvelteKit's cookies API requires `path` to be explicitly set in
			 * the cookie options. Setting `path` to `/` replicates previous/
			 * standard behavior.
			 */
			setAll: (cookiesToSet) => {
				cookiesToSet.forEach(({ name, value, options }) => {
					event.cookies.set(name, value, { ...options, path: '/' });
				});
			}
		}
	});

	/**
	 * Calls `getUser()` to validate the JWT and safely get the authenticated user.
	 */
	event.locals.safeGetSession = async () => {
		const {
			data: { session }
		} = await event.locals.db.auth.getSession();
		if (!session) {
			return { session: null, user: null };
		}
		const {
			data: { user },
			error
		} = await event.locals.db.auth.getUser();
		if (error) {
			// JWT validation has failed
			return { session: null, user: null };
		}
		return { session, user };
	};

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			/**
			 * Supabase libraries use the `content-range` and `x-supabase-api-version`
			 * headers, so we need to tell SvelteKit to pass it through.
			 */
			return name === 'content-range' || name === 'x-supabase-api-version';
		}
	});
};

const authGuard: Handle = async ({ event, resolve }) => {
	const { session, user } = await event.locals.safeGetSession();
	event.locals.session = session;
	event.locals.user = user;

	// don't allow anyone to go to admin or auth until this is ready

	if (!event.locals.session && event.url.pathname.startsWith('/admin')) {
		redirect(303, '/');
	}

	if (event.locals.session && event.url.pathname === '/auth') {
		redirect(303, '/admin');
	}

	return resolve(event);
};

export const handle: Handle = sequence(db, authGuard);
