/* eslint-disable @typescript-eslint/no-explicit-any */
// ===============================
// 🟢 Auth
// ===============================

export async function logout(supabase: any) {
	const { error } = await supabase.auth.signOut();
	if (error) {
		console.error('Logout error:', error);
		return;
	}

	// Redirect on client
	window.location.href = '/';
}
