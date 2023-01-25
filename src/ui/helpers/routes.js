const routes = {
  home: {
    path: "/",
    name: "home",
  },
  contact: {
    path: "/contact",
    name: "contact",
  },
};
const routesArray = [];
Object.keys(routes).forEach((key) => {
  routesArray.push(routes[key]);
});

export { routes, routesArray };
