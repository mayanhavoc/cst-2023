import { c as create_ssr_component, e as escape, f as add_attribute, v as validate_component, m as missing_component, d as each } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1ao4g48_START -->${$$result.title = `<title>Recursos - ${escape(data.title)}</title>`, ""}<meta property="${"og:title"}"${add_attribute("content", data.title, 0)}><!-- HEAD_svelte-1ao4g48_END -->`, ""}
<article><h1>${escape(data.title)}</h1>
    <p>Published: ${escape(data.date)}</p>
    ${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</article>
${data.categories.length ? `<aside><h2>Posted in:</h2>
    <ul>${each(data.categories, (category) => {
    return `<li><a href="${"/resources/category/" + escape(category, true)}">${escape(category)}</a>
            </li>`;
  })}</ul></aside>` : ``}`;
});
export {
  Page as default
};
