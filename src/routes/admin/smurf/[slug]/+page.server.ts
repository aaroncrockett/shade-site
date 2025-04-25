import type { PageServerLoad, Actions } from './$types';
import { error, fail } from '@sveltejs/kit';
import { extractFormData } from '$lib/utils/server';

function emailFromSlug(slug: string): string {
	return slug.replace('-', '@') + '.com';
}

export const load: PageServerLoad = async ({ params, locals }) => {
	const email = emailFromSlug(params.slug);

	const { data: smurf, error: dbError } = await locals.db
		.from('smurfs')
		.select('*')
		.eq('email', email)
		.single();

	if (dbError || !smurf) {
		console.error('Error', dbError?.message);
		throw error(404, 'Error');
	}

	return { smurf };
};

export const actions: Actions = {
	createTattoo: async ({ request, locals }) => {
		const formData = await request.formData();
		const fields = ['name', 'collection', 'client_id'];
		const values = extractFormData(formData, fields);

		if (!values.name || !values.collection || !values.client_id) {
			return fail(400, { error: 'Missing required tattoo fields' });
		}

		const { data, error } = await locals.db
			.from('tattoos')
			.insert({
				name: values.name,
				collection: values.collection,
				client_id: values.client_id
			})
			.select('id, name, collection, client_id') // Select the fields you want to return
			.single(); // Ensures only one record is returned
		console.log('Data:', data);

		if (error) {
			console.error('Failed to create tattoo:', error.message);
			return fail(500, { error: 'Failed to create tattoo' });
		}
		return { success: true, tattooId: data?.id };
	},

	createAppointment: async ({ request, locals }) => {
		const formData = await request.formData();
		const fields = ['tattoo_id', 'fill_time', 'date', 'start_time', 'appointment_type', 'status'];
		const values = extractFormData(formData, fields);

		if (
			!values.tattoo_id ||
			!values.date ||
			!values.start_time ||
			!values.appointment_type ||
			!values.status
		) {
			return fail(400, { error: 'Missing required appointment fields' });
		}

		const start_time = `${values.date}T${values.start_time}`;

		const { error } = await locals.db.from('appointments').insert({
			tattoo_id: values.tattoo_id,
			start_time,
			type: values.appointment_type,
			status: values.status
		});

		if (error) {
			console.error('Failed to create appointment:', error.message);
			return fail(500, { error: 'Failed to create appointment' });
		}

		return { success: true };
	}
};
