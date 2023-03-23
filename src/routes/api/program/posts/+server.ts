import { fetchProgramPosts } from "$lib/utils/program";
import { json } from '@sveltejs/kit';

export const GET = async () => {
    try {
        const allPosts = await fetchProgramPosts();
        const sortedPosts = allPosts.sort((a,b) => {
            return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
        })
        return json(sortedPosts);
    } catch (error) { 
        console.error(error); throw error 
    }
}