export const load = async ({ fetch }) => {
    const response = await fetch(`/api/resources/posts`);
    const posts = await response.json()

    return {
        posts
    }
}