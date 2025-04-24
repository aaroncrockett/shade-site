/* eslint-disable @typescript-eslint/no-explicit-any */
// ===============================
// 🟢 Auth
// ===============================

export async function logout(db: any) {
	const { error } = await db.auth.signOut();
	if (error) {
		console.error('Logout error:', error);
		return;
	}

	// Redirect on client
	window.location.href = '/';
}
