const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
async function load({ params }) {
  try {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../0001.md": () => import("../../../../chunks/0001.js"), "../0002.md": () => import("../../../../chunks/0002.js"), "../0003.md": () => import("../../../../chunks/0003.js"), "../0004.md": () => import("../../../../chunks/0004.js"), "../0005.md": () => import("../../../../chunks/0005.js"), "../0006.md": () => import("../../../../chunks/0006.js"), "../0007.md": () => import("../../../../chunks/0007.js") }), `../${params.slug}.md`);
    const { title, date, categories } = post.metadata;
    const content = post.default;
    return {
      content,
      title,
      date,
      categories
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export {
  load
};
