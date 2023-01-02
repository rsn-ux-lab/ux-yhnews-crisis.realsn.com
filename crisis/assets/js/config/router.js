/* JS loader */
const routes = [
  {
    path: "/crisis",
    script: `${SERVER.assets}/js/pages/crisis.js`,
  },
];

const url = location.pathname.match(/(?<=\/\s*).*?(?=\s*\/)/gs);
const hasPath = routes.find((_route) => _route.path.replace(/\//g, "") === url[url.length - 1]);

if (hasPath) window.loadScript({ src: hasPath.script });
