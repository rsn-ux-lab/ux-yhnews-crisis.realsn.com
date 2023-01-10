/* JS loader */
const routes = [
  {
    path: "/crisis/",
    script: `${SERVER.assets}/js/pages/crisis.js`,
  },
];
const url = location.pathname;
const hasPath = routes.filter((_route) => {
  return Array.isArray(_route.path) ? _route.path.find((_path) => _path === url) : _route.path === url;
});

if (hasPath[0]) window.loadScript({ src: hasPath[0].script });
