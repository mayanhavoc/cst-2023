export const fetchProgramPosts = async () => {
    try {
        const allPostFiles = import.meta.glob('/src/routes/program/*.md');
        delete allPostFiles['/src/routes/program/cst-logo.png.md'];
        const iterablePostFiles = Object.entries(allPostFiles);

        const allPosts = await Promise.all(
            iterablePostFiles.map(async ([ path,resolver ]) => {
                try {
                    const { metadata } = await resolver();
                    const postPath = path.slice(11,-3);

                    return {
                        meta: metadata,
                        path: postPath,
                    }
                } catch (error) {
                    console.error(error);
                    throw error;
                }
            })
        )
        return allPosts;
    } catch (error) {
        console.error(error);
        throw error;
    }
}