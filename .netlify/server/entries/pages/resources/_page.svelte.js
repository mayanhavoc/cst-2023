import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-nli4ao_START -->${$$result.title = `<title>Recursos - Cardano Sin Tecnicismos 2023</title>`, ""}<!-- HEAD_svelte-nli4ao_END -->`, ""}
<h1>Recursos</h1>
<ul>${each(data.posts, (post) => {
    return `<li><h2><a${add_attribute("href", post.path, 0)}>${escape(post.meta.title)}</a></h2>
            <p>Publicado en ${escape(post.meta.date)}</p>
        </li>`;
  })}</ul>`;
});
export {
  Page as default
};
