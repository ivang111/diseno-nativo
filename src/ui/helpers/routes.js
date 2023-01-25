const routes = {
  home: {
    path: "/",
    name: "home",
  },
  contact: {
    path: "/contact",
    name: "contact",
  },
  catalogue: {
    path: "/catalogue",
    name: "catalogue",
  },
  aboutus: {
    path: "/about-us",
    name: "about-us",
  },
  ourProjects: {
    path: "/our-projects",
    name: "our-projects",
  },
  discounts: {
    path: "/discounts",
    name: "discounts",
  },
  howDoWeDoIt: {
    path: "/how-do-we-do-it",
    name: "how-do-we-do-it",
  },
};
const routesArray = [];
Object.keys(routes).forEach((key) => {
  routesArray.push(routes[key]);
});

export { routes, routesArray };
