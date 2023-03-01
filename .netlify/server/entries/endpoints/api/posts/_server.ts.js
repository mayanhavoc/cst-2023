import { j as json } from "../../../../chunks/index.js";
const fetchMarkdownPosts = async () => {
  try {
    const allPostFiles = /* @__PURE__ */ Object.assign({ "/src/routes/resources/0001.md": () => import("../../../../chunks/0001.js"), "/src/routes/resources/0002.md": () => import("../../../../chunks/0002.js"), "/src/routes/resources/0003.md": () => import("../../../../chunks/0003.js"), "/src/routes/resources/0004.md": () => import("../../../../chunks/0004.js"), "/src/routes/resources/0005.md": () => import("../../../../chunks/0005.js"), "/src/routes/resources/0006.md": () => import("../../../../chunks/0006.js"), "/src/routes/resources/0007.md": () => import("../../../../chunks/0007.js") });
    const iterablePostFiles = Object.entries(allPostFiles);
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        try {
          const { metadata } = await resolver();
          const postPath = path.slice(11, -3);
          return {
            meta: metadata,
            path: postPath
          };
        } catch (error) {
          console.error(error);
          throw error;
        }
      })
    );
    return allPosts;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const GET = async () => {
  try {
    const allPosts = await fetchMarkdownPosts();
    const sortedPosts = allPosts.sort((a, b) => {
      return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
    });
    return json(sortedPosts);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export {
  GET
};
