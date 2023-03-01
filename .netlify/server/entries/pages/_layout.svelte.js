import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-7yiflr{padding:1rem;display:flex;flex-wrap:wrap;justify-content:space-between}ul.svelte-7yiflr{margin:0;list-style-type:none;display:flex;gap:1rem}a.svelte-7yiflr{text-decoration:none;color:inherit}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="${"svelte-7yiflr"}"><a href="${"/"}" class="${"svelte-7yiflr"}">Home</a>
    <nav><ul class="${"svelte-7yiflr"}"><li><a href="${"/about"}" class="${"svelte-7yiflr"}">About</a></li>
            <li><a href="${"/resources"}" class="${"svelte-7yiflr"}">Resources</a></li>
            <li><a href="${"/contact"}" class="${"svelte-7yiflr"}">Contact</a></li></ul></nav></header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-146ar1l{padding:1rem;display:flex;flex-wrap:wrap;justify-content:space-between}ul.svelte-146ar1l{margin:0;list-style-type:none;display:flex;gap:1rem}a.svelte-146ar1l{text-decoration:none;color:inherit}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="${"svelte-146ar1l"}"><a href="${"/"}" class="${"svelte-146ar1l"}">Inicio</a>
    <nav><ul class="${"svelte-146ar1l"}"><li><a href="${"/about"}" class="${"svelte-146ar1l"}">Acerca de</a></li>
            <li><a href="${"/resources"}" class="${"svelte-146ar1l"}">Recursos</a></li>
            <li><a href="${"/contact"}" class="${"svelte-146ar1l"}">Contacto</a></li></ul></nav></footer>`;
});
const style = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<main>${slots.default ? slots.default({}) : ``}</main>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
