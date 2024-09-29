import { getPosts } from '$lib/functions/functions.posts';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	return {
		...(await getPosts(fetch, null, params.slug))
	};
}
