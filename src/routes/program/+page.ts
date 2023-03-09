export const load = async ({ fetch }) => {
    const response = await fetch (`/api/program/posts`);
    const posts = await response.json()

    return {
        posts
    }
}