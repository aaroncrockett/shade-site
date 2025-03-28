// ===============================
// 🟢 Auth
// ===============================

import { SupabaseClient } from '@supabase/supabase-js';

export async function logout(supabase: SupabaseClient) {
	const { error } = await supabase.auth.signOut();
	if (error) {
		console.error('Logout error:', error);
		return;
	}

	// Redirect on client
	window.location.href = '/';
}
