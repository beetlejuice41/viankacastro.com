const CMS_ID = 'jMmoH9s9ukJ6nur3oW2fMo';
const CMS_PUBLIC_TOKEN = 'WXD929YxRmrzQCMabuhPQZjKzlrBjztawq6Ic6dcNA93sSQqqO0WjmVS1gxZz9ybUUfMyG7MH9tTWRLx9sKg';

export const load = async ({ fetch, params }) => {
	const res = await fetch(`https://data.plasmic.app/api/v1/cms/databases/jMmoH9s9ukJ6nur3oW2fMo/tables/categories/query`, {
        headers : {
            'x-plasmic-api-cms-tokens': `${CMS_ID}:${CMS_PUBLIC_TOKEN}`
        }
    });
	const categories = await res.json();

    const res2 = await fetch(`https://data.plasmic.app/api/v1/cms/databases/jMmoH9s9ukJ6nur3oW2fMo/tables/posts/query`, {
        headers : {
            'x-plasmic-api-cms-tokens': `${CMS_ID}:${CMS_PUBLIC_TOKEN}`
        }
    });
	const posts = await res2.json();

	return { categories, posts };

};