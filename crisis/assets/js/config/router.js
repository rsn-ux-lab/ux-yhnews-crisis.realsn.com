/* JS loader */
const routes = [
  {
    path: "/overview",
    script: `${SERVER.assets}/js/pages/overview.js`,
  },
  {
    path: "/404",
    script: `${SERVER.assets}/js/pages/404.js`,
  },
];

const url = location.pathname.match(/(?<=\/\s*).*?(?=\s*\/)/gs);
const hasPath = routes.find((_route) => _route.path.replace(/\//g, "") === url[url.length - 1]);

if (hasPath) window.loadScript({ src: hasPath.script });
