// import { createBrowserClient, createServerClient, isBrowser } from '@supabase/ssr';
// import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
// import type { LayoutLoad } from './$types';

// export const load: LayoutLoad = async ({ data, depends, fetch }) => {
// 	/**
// 	 * Declare a dependency so the layout can be invalidated, for example, on
// 	 * session refresh.
// 	 */
// 	depends('db:auth');

// 	const db = isBrowser()
// 		? createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
// 				global: {
// 					fetch
// 				}
// 			})
// 		: createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
// 				global: {
// 					fetch
// 				},
// 				cookies: {
// 					getAll() {
// 						return data.cookies;
// 					}
// 				}
// 			});

// 	/**
// 	 * It's fine to use `getSession` here, because on the client, `getSession` is
// 	 * safe, and on the server, it reads `session` from the `LayoutData`, which
// 	 * safely checked the session using `safeGetSession`.
// 	 */
// 	const {
// 		data: { session }
// 	} = await db.auth.getSession();

// 	const {
// 		data: { user }
// 	} = await db.auth.getUser();

// 	return { session, db, user };
// };
