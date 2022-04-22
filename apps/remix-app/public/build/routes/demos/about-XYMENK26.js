import {
  Outlet
} from "/build/_shared/chunk-3KKSSUTW.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-5QWXRFDY.js";

// browser-route-module:/Users/igorsrdoc/Documents/Code/Next/nx-nest-next/apps/remix-app/app/routes/demos/about.tsx?browser
init_react();

// app/routes/demos/about.tsx
init_react();
var meta = () => {
  return {
    title: "About Remix"
  };
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "about"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "about__intro"
  }, /* @__PURE__ */ React.createElement("h2", null, "About Us"), /* @__PURE__ */ React.createElement("p", null, "Ok, so this page isn't really ", /* @__PURE__ */ React.createElement("em", null, "about us"), ", but we did want to show you a few more things Remix can do."), /* @__PURE__ */ React.createElement("p", null, "Did you notice that things look a little different on this page? The CSS that we import in the route file and include in its", " ", /* @__PURE__ */ React.createElement("code", null, "links"), " export is only included on this route and its children."), /* @__PURE__ */ React.createElement("p", null, "Wait a sec...", /* @__PURE__ */ React.createElement("em", null, "its children"), "? To understand what we mean by this,", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/tutorial/4-nested-routes-params"
  }, "read all about nested routes in the docs"), "."), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(Outlet, null)));
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/demos/about-XYMENK26.js.map
