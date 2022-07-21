var __create = Object.create;
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols = Object.getOwnPropertySymbols, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
}, __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b)), __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/home/santhosh/Desktop/Projects/JavaScript/2022/13_SNUXplore/frontend/app/root.jsx
var root_exports = {};
__export(root_exports, {
  ThemeScript: () => ThemeScript,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/root/reset.css
var reset_default = "/build/_assets/reset-FZH4QENV.css";

// app/styles/root/global.css
var global_default = "/build/_assets/global-IGP3VYBJ.css";

// app/styles/root/components.css
var components_default = "/build/_assets/components-QN4KFVFD.css";

// app/Assets/Img/xploreLogo.svg
var xploreLogo_default = "/build/_assets/xploreLogo-PUZHES4Z.svg";

// route:/home/santhosh/Desktop/Projects/JavaScript/2022/13_SNUXplore/frontend/app/root.jsx
function links() {
  return [
    { rel: "stylesheet", href: reset_default },
    { rel: "stylesheet", href: global_default },
    { rel: "stylesheet", href: components_default },
    {
      rel: "icon",
      href: xploreLogo_default,
      type: "image/png"
    }
  ];
}
var meta = () => ({
  charset: "utf-8",
  title: "SnuXplore",
  viewport: "width=device-width,initial-scale=1"
}), ThemeScript = () => /* @__PURE__ */ React.createElement("script", {
  dangerouslySetInnerHTML: { __html: `
  const theme = localStorage.getItem("theme");
  console.log(theme);
  if (theme) {
    document.getElementsByTagName("html").item(0).classList.add(theme);
  } else {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.getElementsByTagName("html").item(0).classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }` }
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "light"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(ThemeScript, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/home/santhosh/Desktop/Projects/JavaScript/2022/13_SNUXplore/frontend/app/routes/Events/index.js
var Events_exports = {};
__export(Events_exports, {
  default: () => Index,
  links: () => links2
});

// app/Components/MockNavigator/MockNavigator.js
var import_react3 = __toESM(require("react"));
function MockNavigator({ title, children }) {
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "MockNavigatorWrapper"
  }, /* @__PURE__ */ import_react3.default.createElement("h1", null, title), children);
}
var MockNavigator_default = MockNavigator;

// app/styles/routes/Events/Events.css
var Events_default = "/build/_assets/Events-L3UGGY6C.css";

// route:/home/santhosh/Desktop/Projects/JavaScript/2022/13_SNUXplore/frontend/app/routes/Events/index.js
function links2() {
  return [{ rel: "stylesheet", href: Events_default }];
}
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "EventsPage"
  }, /* @__PURE__ */ React.createElement(MockNavigator_default, {
    title: "Events"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/"
  }, "Home"), /* @__PURE__ */ React.createElement("a", {
    href: "/admin"
  }, "Admin"), /* @__PURE__ */ React.createElement("a", {
    href: "/navigate"
  }, "Navigation"), /* @__PURE__ */ React.createElement("a", {
    href: "/faqs"
  }, "FAQs")));
}

// route:/home/santhosh/Desktop/Projects/JavaScript/2022/13_SNUXplore/frontend/app/routes/Admin/index.js
var Admin_exports = {};
__export(Admin_exports, {
  default: () => Index2,
  links: () => links3
});

// app/styles/routes/Admin/Admin.css
var Admin_default = "/build/_assets/Admin-STGVLCI3.css";

// route:/home/santhosh/Desktop/Projects/JavaScript/2022/13_SNUXplore/frontend/app/routes/Admin/index.js
function links3() {
  return [{ rel: "stylesheet", href: Admin_default }];
}
function Index2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "AdminPage"
  }, /* @__PURE__ */ React.createElement(MockNavigator_default, {
    title: "Admin"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/"
  }, "Home"), /* @__PURE__ */ React.createElement("a", {
    href: "/navigate"
  }, "Navigation"), /* @__PURE__ */ React.createElement("a", {
    href: "/events"
  }, "Events"), /* @__PURE__ */ React.createElement("a", {
    href: "/faqs"
  }, "FAQs")));
}

// route:/home/santhosh/Desktop/Projects/JavaScript/2022/13_SNUXplore/frontend/app/routes/Navigate.js
var Navigate_exports = {};
__export(Navigate_exports, {
  default: () => Navigate,
  links: () => links4,
  loader: () => loader
});
var import_react6 = __toESM(require("react"));

// app/styles/routes/Navigate/Navigate.css
var Navigate_default = "/build/_assets/Navigate-NWCXQOOS.css";

// app/Components/Header/Header.js
var import_react4 = __toESM(require("react"));

// app/Assets/Img/instagramLogo.svg
var instagramLogo_default = "/build/_assets/instagramLogo-M7FKMNAC.svg";

// app/Assets/Img/facebookLogo.svg
var facebookLogo_default = "/build/_assets/facebookLogo-2VR7NSK2.svg";

// app/Assets/Img/twitterLogo.svg
var twitterLogo_default = "/build/_assets/twitterLogo-YP6JWEWE.svg";

// app/Assets/Img/locationIcon.svg
var locationIcon_default = "/build/_assets/locationIcon-D7GG3TIT.svg";

// app/Assets/Img/fireIcon.svg
var fireIcon_default = "/build/_assets/fireIcon-W3IDVW52.svg";

// app/Assets/Img/infoIcon.svg
var infoIcon_default = "/build/_assets/infoIcon-NBE4YKBI.svg";

// app/Assets/Img/questionIcon.svg
var questionIcon_default = "/build/_assets/questionIcon-DT3JFY3M.svg";

// app/Assets/Img/usersIcon.svg
var usersIcon_default = "/build/_assets/usersIcon-XP5ZGJFT.svg";

// app/Assets/Img/lightModeIcon.svg
var lightModeIcon_default = "/build/_assets/lightModeIcon-4JRBPMDF.svg";

// app/Assets/Img/darkModeIcon.svg
var darkModeIcon_default = "/build/_assets/darkModeIcon-QQCLGGMK.svg";

// app/Assets/Img/darkModeOneTheme.svg
var darkModeOneTheme_default = "/build/_assets/darkModeOneTheme-ERMVH5PK.svg";

// app/Assets/Img/darkModeTwoTheme.svg
var darkModeTwoTheme_default = "/build/_assets/darkModeTwoTheme-HZHHXJ4B.svg";

// app/Components/Header/Header.js
var import_react_responsive = require("react-responsive");
function Header() {
  let [navState, setNavState] = import_react4.default.useState(!1), dropdown = (0, import_react_responsive.useMediaQuery)({
    query: "(max-width: 1530px)"
  });
  return /* @__PURE__ */ import_react4.default.createElement("nav", {
    className: "HeaderWrapper"
  }, dropdown && /* @__PURE__ */ import_react4.default.createElement("a", {
    href: "/"
  }, /* @__PURE__ */ import_react4.default.createElement("img", {
    className: `
              HeaderWrapper__left--logo 
              ${navState ? "HeaderWrapper__left--logo--blur" : ""}`,
    src: xploreLogo_default,
    alt: "snu explore Logo"
  })), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: `HeaderWrapper__menu ${navState ? "HeaderWrapper__menu--open" : ""}`
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "HeaderWrapper__left"
  }, !dropdown && /* @__PURE__ */ import_react4.default.createElement("a", {
    href: "/"
  }, /* @__PURE__ */ import_react4.default.createElement("img", {
    className: "HeaderWrapper__left--logo",
    src: xploreLogo_default,
    alt: "snu explore Logo"
  }))), /* @__PURE__ */ import_react4.default.createElement("ul", {
    className: "HeaderWrapper__middle"
  }, dropdown && /* @__PURE__ */ import_react4.default.createElement("div", {
    style: { width: "100%" }
  }, /* @__PURE__ */ import_react4.default.createElement("li", {
    className: "HeaderWrapper__middle--option"
  }, /* @__PURE__ */ import_react4.default.createElement("p", null, "Features")), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "HeaderWrapper__middle--lineSep"
  })), /* @__PURE__ */ import_react4.default.createElement("li", {
    className: "HeaderWrapper__middle--option"
  }, /* @__PURE__ */ import_react4.default.createElement("a", {
    href: "/navigate"
  }, dropdown && /* @__PURE__ */ import_react4.default.createElement("img", {
    className: "HeaderWrapper__middle--option",
    src: locationIcon_default,
    alt: "snu explore Logo"
  }), "Navigate Campus")), /* @__PURE__ */ import_react4.default.createElement("li", {
    className: "HeaderWrapper__middle--option"
  }, /* @__PURE__ */ import_react4.default.createElement("a", {
    href: "/events"
  }, dropdown && /* @__PURE__ */ import_react4.default.createElement("img", {
    className: "HeaderWrapper__middle--option fire",
    src: fireIcon_default,
    alt: "snu explore Logo"
  }), "Happening@SNU")), dropdown && /* @__PURE__ */ import_react4.default.createElement("div", {
    style: { marginTop: "17px", width: "100%" }
  }, /* @__PURE__ */ import_react4.default.createElement("li", {
    className: "HeaderWrapper__middle--option"
  }, /* @__PURE__ */ import_react4.default.createElement("p", null, "Help and more")), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "HeaderWrapper__middle--lineSep"
  })), /* @__PURE__ */ import_react4.default.createElement("li", {
    className: "HeaderWrapper__middle--option"
  }, /* @__PURE__ */ import_react4.default.createElement("a", {
    href: "/admin"
  }, dropdown && /* @__PURE__ */ import_react4.default.createElement("img", {
    className: "HeaderWrapper__middle--option fire",
    src: infoIcon_default,
    alt: "snu explore Logo"
  }), "Admins & Contact")), /* @__PURE__ */ import_react4.default.createElement("li", {
    className: "HeaderWrapper__middle--option"
  }, /* @__PURE__ */ import_react4.default.createElement("a", {
    href: "/faqs"
  }, dropdown && /* @__PURE__ */ import_react4.default.createElement("img", {
    className: "HeaderWrapper__middle--option fire",
    src: questionIcon_default,
    alt: "snu explore Logo"
  }), "FAQs")), /* @__PURE__ */ import_react4.default.createElement("li", {
    className: "HeaderWrapper__middle--option"
  }, /* @__PURE__ */ import_react4.default.createElement("a", {
    href: "/about"
  }, dropdown && /* @__PURE__ */ import_react4.default.createElement("img", {
    className: "HeaderWrapper__middle--option fire",
    src: usersIcon_default,
    alt: "snu explore Logo"
  }), "About Us")), dropdown && /* @__PURE__ */ import_react4.default.createElement("div", {
    style: { marginTop: "17px", width: "100%" }
  }, /* @__PURE__ */ import_react4.default.createElement("li", {
    className: "HeaderWrapper__middle--option"
  }, /* @__PURE__ */ import_react4.default.createElement("p", null, "Themes")), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "HeaderWrapper__middle--lineSep"
  })), dropdown && /* @__PURE__ */ import_react4.default.createElement("li", {
    className: "HeaderWrapper__middle--option"
  }, /* @__PURE__ */ import_react4.default.createElement("button", {
    onClick: () => {
      document.body.classList.add("light"), document.body.classList.remove("dark"), document.body.classList.remove("pink"), localStorage.setItem("theme", "light");
    }
  }, /* @__PURE__ */ import_react4.default.createElement("img", {
    className: "HeaderWrapper__middle--option fire",
    src: lightModeIcon_default,
    alt: "snu explore Logo"
  }), "Light Mode")), dropdown && /* @__PURE__ */ import_react4.default.createElement("li", {
    className: "HeaderWrapper__middle--option"
  }, /* @__PURE__ */ import_react4.default.createElement("button", {
    onClick: () => {
      document.body.classList.add("dark"), document.body.classList.remove("light"), document.body.classList.remove("pink"), localStorage.setItem("theme", "dark");
    }
  }, /* @__PURE__ */ import_react4.default.createElement("img", {
    className: "HeaderWrapper__middle--option fire",
    src: darkModeIcon_default,
    alt: "snu explore Logo"
  }), "Dark Mode #1", /* @__PURE__ */ import_react4.default.createElement("img", {
    className: "HeaderWrapper__middle--option fire",
    src: darkModeOneTheme_default,
    style: { marginLeft: "15px" },
    alt: "snu explore Logo"
  }))), dropdown && /* @__PURE__ */ import_react4.default.createElement("li", {
    className: "HeaderWrapper__middle--option"
  }, /* @__PURE__ */ import_react4.default.createElement("button", {
    onClick: () => {
      document.body.classList.add("dark"), document.body.classList.remove("light"), document.body.classList.add("pink"), localStorage.setItem("theme", "dark");
    }
  }, /* @__PURE__ */ import_react4.default.createElement("img", {
    className: "HeaderWrapper__middle--option fire",
    src: darkModeIcon_default,
    alt: "snu explore Logo"
  }), "Dark Mode #2", /* @__PURE__ */ import_react4.default.createElement("img", {
    className: "HeaderWrapper__middle--option fire",
    src: darkModeTwoTheme_default,
    style: { marginLeft: "15px", filter: "none" },
    alt: "snu explore Logo"
  })))), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "HeaderWrapper__right"
  }, dropdown && /* @__PURE__ */ import_react4.default.createElement("div", {
    style: { width: "100%" }
  }, /* @__PURE__ */ import_react4.default.createElement("p", {
    className: "HeaderWrapper__right--paragraph"
  }, "Social Medias"), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "HeaderWrapper__right--lineSep"
  })), /* @__PURE__ */ import_react4.default.createElement("a", {
    href: "https://www.instagram.com/snu.xplore/"
  }, /* @__PURE__ */ import_react4.default.createElement("img", {
    className: "HeaderWrapper__right--logo",
    src: instagramLogo_default,
    alt: "snu explore Logo"
  })), /* @__PURE__ */ import_react4.default.createElement("a", {
    href: "https://www.facebook.com/snu.explore/"
  }, /* @__PURE__ */ import_react4.default.createElement("img", {
    className: "HeaderWrapper__right--logo",
    src: facebookLogo_default,
    alt: "snu explore Logo"
  })), /* @__PURE__ */ import_react4.default.createElement("a", {
    href: "https://twitter.com/snu_explore"
  }, /* @__PURE__ */ import_react4.default.createElement("img", {
    className: "HeaderWrapper__right--logo",
    src: twitterLogo_default,
    alt: "snu explore Logo"
  }))), dropdown && /* @__PURE__ */ import_react4.default.createElement("div", {
    style: { position: "relative", width: "100%", height: "1000px" }
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "HeaderWrapper__dots"
  }, /* @__PURE__ */ import_react4.default.createElement("span", {
    className: "HeaderWrapper__dots--dot"
  }), /* @__PURE__ */ import_react4.default.createElement("span", {
    className: "HeaderWrapper__dots--dot"
  }), /* @__PURE__ */ import_react4.default.createElement("span", {
    className: "HeaderWrapper__dots--dot"
  })))), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "HeaderWrapper__Hamburger",
    style: {
      position: navState ? "fixed" : "",
      top: "41px",
      right: "30px"
    }
  }, /* @__PURE__ */ import_react4.default.createElement("input", {
    type: "checkbox",
    id: "NavBarInput",
    onChange: () => {
      setNavState(!navState), document.querySelector("nav ~ div").style.filter = `${navState ? "none" : "blur(3.5px)"}`, document.querySelector("nav ~ main").style.filter = `${navState ? "none" : "blur(3.5px)"}`, console.log(navState);
    }
  }), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "hamButton"
  }, /* @__PURE__ */ import_react4.default.createElement("label", {
    className: "HamMenu",
    htmlFor: "NavBarInput"
  }, /* @__PURE__ */ import_react4.default.createElement("span", {
    className: "span HL1"
  }), /* @__PURE__ */ import_react4.default.createElement("span", {
    className: "span HL2"
  }), /* @__PURE__ */ import_react4.default.createElement("span", {
    className: "span HL3"
  })))));
}
var Header_default = Header;

// app/Components/SearchBar/SearchBar.js
var import_react5 = __toESM(require("react"));

// app/Assets/Img/SearchIcon.svg
var SearchIcon_default = "/build/_assets/SearchIcon-2627MFXZ.svg";

// app/Components/SearchBar/SearchBar.js
var import_fuse = __toESM(require("fuse.js"));

// app/Assets/Data/data.json
var Residential = [
  {
    name: "Hostel 1-A",
    location: "https://www.google.co.uk/maps/place/SNU+Hostel+1A/@28.5244496,77.573215,19.42z/data=!4m5!3m4!1s0x390c94d7553aabc9:0xd09ad60822f3d32e!8m2!3d28.5249758!4d77.5730025",
    mailWarden: "ameetava.mukherjee@snu.edu.in",
    callWarden: "+918017979461",
    description: "Known as Sunderbans.",
    image: "https://cdn.discordapp.com/attachments/846575266545664014/998965749764849764/sundarbhands.jpeg"
  },
  {
    name: "Hostel 1-B",
    location: "https://www.google.co.uk/maps/place/SNU+Hostel+1B/@28.5244561,77.5732564,19.27z/data=!4m5!3m4!1s0x390c94d7510ccbdd:0xb8501af71093e4e9!8m2!3d28.5241895!4d77.573125",
    mailWarden: "ASHOK.BHARADWAJ@snu.edu.in",
    callWarden: "++918130282925",
    description: "Known as Chilika .",
    image: "https://cdn.discordapp.com/attachments/846575266545664014/998965753086738542/chilika.jpeg"
  },
  {
    name: "Hostel 1-C",
    location: "https://www.google.co.uk/maps/place/Hostel-1c,+NH+91,+Greater+Noida,+Uttar+Pradesh+203207/@28.5244585,77.5732597,19.26z/data=!4m5!3m4!1s0x390c94d74c29a3db:0xf9b01ab14fada71d!8m2!3d28.5242294!4d77.5724645",
    description: "Known as Eagles Nest .",
    image: ""
  },
  {
    name: "Hostel 2-A",
    location: "https://https://www.google.co.uk/maps/place/SNU+Hostel+2A/@28.5229857,77.573385,19.92z/data=!4m5!3m4!1s0x390c94d76091882f:0x2d3451c0025004f8!8m2!3d28.5232855!4d77.5731731",
    mailWarden: "neelam.chaudhary@snu.edu.in",
    callWarden: "+919811322767",
    description: "Known as Hemis .",
    image: ""
  },
  {
    name: "Hostel 2-B",
    location: "https://www.google.co.uk/maps/place/Hostel+2B,+SHIV+NADAR+UNIVERSITY,+Greater+Noida,+Uttar+Pradesh+203207/@28.5229857,77.573385,19.92z/data=!4m5!3m4!1s0x390c94d9d9ca2edf:0xa70cb6b29bf4b59a!8m2!3d28.5228032!4d77.5735391",
    mailWarden: "preeti.jain@snu.edu.in",
    callWarden: "+917665690118",
    description: "Known as Kaziranga .",
    image: ""
  },
  {
    name: "Hostel 2-C",
    location: "https://www.google.co.uk/maps/place/Hostel+2C,+SHIV+NADAR+UNIVERSITY,+Greater+Noida,+Uttar+Pradesh+203207/@28.5228782,77.5731148,19.92z/data=!4m5!3m4!1s0x390c94d76f41d0ff:0x35d6c2f2e72e5873!8m2!3d28.5227347!4d77.5727335",
    mailWarden: "balbeer.singh@snu.edu.in",
    callWarden: "+919454825920",
    description: "Known as Periyar .",
    image: ""
  },
  {
    name: "Hostel 3-A",
    location: "https://www.google.co.uk/maps/place/SNU+Hostel+3A/@28.5249242,77.5711652,19.47z/data=!4m5!3m4!1s0x390c94d0d0db9ac9:0x49344fa730ed5728!8m2!3d28.5252778!4d77.5711111",
    mailWarden: "vishveer.signh@snu.edu.in",
    callWarden: "+917042469292",
    description: "Known as Gir .",
    image: ""
  },
  {
    name: "Hostel 3-B",
    location: "https://www.google.co.uk/maps/place/SNU+Hostel+3B/@28.5249242,77.5711652,19.47z/data=!4m5!3m4!1s0x390c94d0d48a020b:0x3c320d6380dd4ae3!8m2!3d28.5247002!4d77.5707631",
    mailWarden: "vishveer.signh@snu.edu.in",
    callWarden: "+917042469292",
    description: "Known as Dibang .",
    image: ""
  },
  {
    name: "Hostel 3-C",
    location: "https://www.google.co.uk/maps/place/Hostel+3C/@28.5249242,77.5711652,19.47z/data=!4m5!3m4!1s0x390c94d0cc8985a1:0xe865a4f5fe19f188!8m2!3d28.524809!4d77.5715487",
    mailWarden: "balbeer.singh@snu.edu.in",
    callWarden: "+919454825920",
    description: "Known as Kanha.",
    image: ""
  },
  {
    name: "Tower 1",
    location: "https://www.google.co.uk/maps/place/28%C2%B031'42.4%22N+77%C2%B034'39.3%22E/@28.528446,77.575398,964m/data=!3m2!1e3!4b1!4m6!3m5!1s0x0:0x71207da3ce6e22bf!7e2!8m2!3d28.5284459!4d77.5775925",
    description: "Known as Tower 1.",
    image: ""
  },
  {
    name: "Tower 2",
    location: "https://https://www.google.co.uk/maps/place/28%C2%B031'43.9%22N+77%C2%B034'38.6%22E/@28.528854,77.5768375,241m/data=!3m2!1e3!4b1!4m6!3m5!1s0x0:0xa440adf9aaf37508!7e2!8m2!3d28.528854!4d77.5773858",
    mailWarden: "anuradha.sharma@snu.edu.in",
    callWarden: "+919773673822",
    description: "Known as Tower 2.",
    image: ""
  },
  {
    name: "Tower 3",
    location: "https://www.google.co.uk/maps/place/28%C2%B031'44.7%22N+77%C2%B034'39.7%22E/@28.529094,77.5771375,241m/data=!3m2!1e3!4b1!4m6!3m5!1s0x0:0xe84c8859a6ff5831!7e2!8m2!3d28.5290944!4d77.5776864",
    description: "Known as Tower 3.",
    image: ""
  },
  {
    name: "Tower 4",
    location: "https://www.google.co.uk/maps/place/28%C2%B031'47.5%22N+77%C2%B034'41.3%22E/@28.5297118,77.5780086,187m/data=!3m1!1e3!4m6!3m5!1s0x0:0xb2c3e90521a161eb!7e2!8m2!3d28.5298653!4d77.5781407",
    description: "Known as Tower 4.",
    image: ""
  },
  {
    name: "Tower 5",
    location: "https://www.google.co.uk/maps/place/28%C2%B031'48.5%22N+77%C2%B034'42.4%22E/@28.529865,77.5775925,241m/data=!3m1!1e3!4m6!3m5!1s0x0:0x4af5e3cb4fb6cc98!7e2!8m2!3d28.530136!4d77.5784495",
    mailWarden: "Gaurav.bharadwaj@snu.edu.in",
    callWarden: "+919599500662",
    description: "Known as Tower 5.",
    image: ""
  },
  {
    name: "Tower 6",
    location: "https://www.google.co.uk/maps/place/28%C2%B031'48.0%22N+77%C2%B034'44.1%22E/@28.530136,77.5779005,241m/data=!3m1!1e3!4m6!3m5!1s0x0:0x838eef09b068ea54!7e2!8m2!3d28.529997!4d77.5789211",
    description: "Known as Tower 6.",
    image: ""
  },
  {
    name: "Tower 7",
    location: "https://www.google.co.uk/maps/place/28%C2%B031'45.7%22N+77%C2%B034'43.9%22E/@28.529367,77.5783155,241m/data=!3m2!1e3!4b1!4m6!3m5!1s0x0:0x350e81c47562ca83!7e2!8m2!3d28.5293669!4d77.5788644",
    description: "Known as Tower 7.",
    image: ""
  },
  {
    name: "Tower 8",
    location: "https://www.google.co.uk/maps/place/28%C2%B031'43.9%22N+77%C2%B034'42.0%22E/@28.5287309,77.5777427,192m/data=!3m1!1e3!4m6!3m5!1s0x0:0xcb8ea05e7187d1d0!7e2!8m2!3d28.5288569!4d77.5783433",
    description: "Known as Tower 8.",
    image: ""
  },
  {
    name: "Tower 9",
    location: "https://www.google.co.uk/maps/place/28%C2%B031'42.7%22N+77%C2%B034'41.8%22E/@28.528857,77.5777945,241m/data=!3m1!1e3!4m6!3m5!1s0x0:0x5d12cf897801af83!7e2!8m2!3d28.5285342!4d77.5782652",
    mailWarden: "anuradha.sharma@snu.edu.in",
    callWarden: "+919773673822",
    description: "Known as Tower 9.",
    image: ""
  },
  {
    name: "Tower 10",
    location: "https://www.google.co.uk/maps/place/28%C2%B031'41.8%22N+77%C2%B034'40.6%22E/@28.528534,77.5777165,241m/data=!3m1!1e3!4m6!3m5!1s0x0:0x68ca9250c3fd28f2!7e2!8m2!3d28.5282795!4d77.5779324",
    description: "Known as Tower 10.",
    image: ""
  }
], Academics = [
  {
    name: "A Block",
    location: "https://www.google.co.in/maps/place/Block+A/@28.5260029,77.5754549,280m/data=!3m1!1e3!4m5!3m4!1s0x390c94dbb996cad7:0xcf41dec069c94390!8m2!3d28.5268793!4d77.5771049",
    description: "It's the engineers' go-to place. Walking through the corridors of this building feels the same as walking through a hall of fame",
    image: ""
  },
  {
    name: "B Block",
    location: "https://www.google.co.in/maps/place/Block+B/@28.5260029,77.5754549,280m/data=!3m1!1e3!4m5!3m4!1s0x390c94dbb547af09:0xaf25bf592e0dc2ba!8m2!3d28.5265965!4d77.5763243",
    description: "Head here when you feel like you've lost your way. Our admin and academic staff will guide you on the right path.",
    image: ""
  },
  {
    name: "C Block",
    location: "https://www.google.co.in/maps/place/Block+C/@28.5260029,77.5754549,280m/data=!3m1!1e3!4m5!3m4!1s0x390c94da30d5b68f:0xa4ddf8463e540ca!8m2!3d28.5260851!4d77.5757235",
    description: "You might find yourself here attending some meetings or classes. But the best part is, you've got CnD and Naveen to your rescue right outside this building.",
    image: ""
  },
  {
    name: "D Block",
    location: "https://www.google.co.in/maps/place/Shiv+Nadar+University+D+Block/@28.5258866,77.5755546,416m/data=!3m1!1e3!4m9!1m2!2m1!1sd+block+snu!3m5!1s0x390c95f0d5fe444f:0x12b25feb5759ec79!8m2!3d28.52542!4d77.5759093!15sCgtkIGJsb2NrIHNudZIBCnVuaXZlcnNpdHk",
    description: "Don't you dare to go there after 2 AM.",
    image: ""
  },
  {
    name: "F Block",
    location: "https://www.google.com/maps/dir//SHIV+NADAR+UNIVERSITY,+Uttar+Pradesh+203207/@28.527013,77.5727915,166m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x390c94da30cdfd65:0xed41640f299a6664!2m2!1d77.5748376!2d28.5263782!3e0",
    description: "Visit to witness the glories of our campus infrastructure, where only guards are allowed.",
    image: "https://cdn.discordapp.com/attachments/846575266545664014/998965753699111073/f_blovk.jpeg"
  },
  {
    name: "Management Block (G Block)",
    location: "https://www.google.co.in/maps/@28.5276954,77.5737169,262m/data=!3m1!1e3",
    description: "Not a place to explore in your PJ\u2019s, its auditorium bears some of the most prestigious events on campus!",
    image: "https://cdn.discordapp.com/attachments/846575266545664014/998965749370589254/mgmt_block.jpeg"
  },
  {
    name: "Research Annexe",
    location: "https://www.google.co.in/maps/place/Shiv+Nadar+University+Research+Annexe/@28.5274007,77.5784083,207m/data=!3m1!1e3!4m5!3m4!1s0x390c94db9a81fb91:0xf5f4d7686cc71561!8m2!3d28.5274142!4d77.5782609",
    description: "The go to place for research enthusiasts .",
    image: ""
  },
  {
    name: "Library",
    location: "https://www.google.co.in/maps/place/Shiv+Nadar+University+Library/@28.5266032,77.5741098,17z/data=!4m12!1m6!3m5!1s0x390ceb4eaaaaaaab:0x321412756718874c!2sShiv+Nadar+University!8m2!3d28.5267298!4d77.575363!3m4!1s0x390c94da1feea4cf:0x4788fa1f42f859a1!8m2!3d28.5248591!4d77.5740441",
    description: "The best place for socializing, Wi-Fi, AC, books and donuts on campus.",
    image: "https://cdn.discordapp.com/attachments/846575266545664014/998965754881917088/library.jpeg"
  }
], Food = [
  {
    name: "Dining Hall 1",
    location: "https://www.google.co.in/maps/place/SNU+Dining+Hall+1+(DH1)/@28.524562,77.5723814,444m/data=!3m1!1e3!4m5!3m4!1s0x390c94d9e224f1c3:0xdb96d458307d547c!8m2!3d28.5237624!4d77.573465",
    contact: "messcommittee@snu.edu.in",
    menu: "https://messmenu.snu.in/",
    description: "The dining hall with the most number of attractions for a foodie with evening snacks to midnight snacks.",
    image: ""
  },
  {
    name: "Dining Hall 2",
    location: "https://www.google.co.in/maps/place/SNU+Dining+Hall+2+(DH2)/@28.524562,77.5723814,444m/data=!3m1!1e3!4m5!3m4!1s0x390c94d6d4d1d383:0x1fc8dccb532d3714!8m2!3d28.5244157!4d77.5704472",
    contact: "messcommittee@snu.edu.in",
    menu: "https://messmenu.snu.in/",
    description: "Order food, collect food, eat food.Waiting in long lines to ponder if the food's worth it.",
    image: "https://cdn.discordapp.com/attachments/846575266545664014/998965754084990986/IMG_20211206_194753.jpeg"
  },
  {
    name: "Dining Hall 3",
    location: "https://www.google.co.in/maps/place/Dining+hall+3+,SNU%2FMamagoto/@28.5293395,77.5798353,194m/data=!3m1!1e3!4m5!3m4!1s0x390c95e8c6b6de07:0x31a68a7b713f0922!8m2!3d28.5295844!4d77.5802806",
    contact: "messcommittee@snu.edu.in",
    menu: "https://messmenu.snu.in/",
    description: "This Dining hall is the most peaceful and calm place to have food but it's located in a totally different corner of SNU.",
    image: ""
  },
  {
    name: "Nescafe",
    location: "https://www.google.co.in/maps/place/SNU+Volleyball+Court/@28.5251485,77.5728984,18.7z/data=!4m5!3m4!1s0x390c94d0b999ead5:0x29e1febf964a8f9a!8m2!3d28.5244324!4d77.5717481",
    description: "The best and only place for donuts on campus. Your go to place for espresso shots in those late nights.",
    image: ""
  },
  {
    name: "Naveen Tea House",
    location: "https://www.google.co.in/maps/place/Navin+Tea+House/@28.5254585,77.5763157,70m/data=!3m1!1e3!4m5!3m4!1s0x390c9563f5498a6b:0x3357f27f6229a41d!8m2!3d28.5252787!4d77.57628",
    menu: "https://cdn.discordapp.com/attachments/913460367844323378/930904931345498202/IMG_20220110_170729.jpg",
    description: "",
    image: ""
  },
  {
    name: "Surya Food and beverages",
    location: "https://www.google.co.in/maps/place/Navin+Tea+House/@28.5254585,77.5763157,70m/data=!3m1!1e3!4m5!3m4!1s0x390c9563f5498a6b:0x3357f27f6229a41d!8m2!3d28.5252787!4d77.57628",
    menu: "https://cdn.discordapp.com/attachments/913460367844323378/930904930385010778/IMG_20220110_170703.jpg",
    description: "",
    image: ""
  },
  {
    name: "Swad Kathi roll",
    location: "https://www.google.co.in/maps/place/Navin+Tea+House/@28.5254585,77.5763157,70m/data=!3m1!1e3!4m5!3m4!1s0x390c9563f5498a6b:0x3357f27f6229a41d!8m2!3d28.5252787!4d77.57628",
    menu: "https://cdn.discordapp.com/attachments/913460367844323378/930904930842193980/IMG_20220110_170715.jpg",
    description: "",
    image: ""
  },
  {
    name: "Rama Enterprise (Shakes)",
    location: "https://www.google.co.in/maps/place/28%C2%B031'31.3%22N+77%C2%B034'34.6%22E/@28.5253552,77.5757365,208m/data=!3m2!1e3!4b1!4m6!3m5!1s0x0:0xd11d0f650a287a87!7e2!8m2!3d28.5253544!4d77.576285",
    description: "",
    image: ""
  },
  {
    name: "The Adda",
    location: "https://www.google.co.in/maps/place/The+Adda/@28.5260824,77.5770077,70m/data=!3m1!1e3!4m5!3m4!1s0x390c95bad744401f:0x4372c08299fe4057!8m2!3d28.5261641!4d77.5769734",
    description: "",
    image: ""
  },
  {
    name: "The Anna Cafe",
    location: "https://www.google.co.in/maps/place/The+Adda/@28.5260824,77.5770077,70m/data=!3m1!1e3!4m5!3m4!1s0x390c95bad744401f:0x4372c08299fe4057!8m2!3d28.5261641!4d77.5769734",
    description: "",
    image: ""
  },
  {
    name: "19th Hole",
    location: "https://www.google.co.in/maps/place/Temporary+Helipad/@28.5298671,77.5740388,208m/data=!3m2!1e3!4b1!4m8!1m2!2m1!1s19th+hole+snu+!3m4!1s0x390c94dab9c0d8b1:0xdf6c67cc91dbab15!8m2!3d28.5298659!4d77.5745873",
    description: "Love chaat? Then this is the place for you. With its pleasant    ambience and \u201Cdelicious\u201D food it is a must visit for SNU students.",
    image: ""
  }
], POI = [
  {
    name: "Horse Stables",
    location: "https://www.google.com/maps/place/Greater+Noida,+Uttar+Pradesh+203207/@28.518782,77.57357,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0x390ceb4eaaaaaaab:0x321412756718874c!2sShiv+Nadar+University!8m2!3d28.5267298!4d77.575363!3m4!1s0x390c94d8756793eb:0xc605950461bcc5ed!8m2!3d28.5192457!4d77.574931",
    description: "There are horse crazy people and then there are crazy people with horses. Know the difference!",
    image: ""
  },
  {
    name: "Dargah",
    location: "https://www.google.com/maps/place/28%C2%B031'14.8%22N+77%C2%B034'22.8%22E/@28.5207852,77.5724398,19z/data=!3m1!4b1!4m6!3m5!1s0x0:0xc04f34ec3b287c1d!7e2!8m2!3d28.5207835!4d77.572987",
    description: "",
    image: ""
  },
  {
    name: "SNU Lake",
    location: "https://www.google.com/maps/place/SNU+Lake/@28.5252438,77.5756142,17z/data=!3m1!4b1!4m5!3m4!1s0x390c94dbe0222a6f:0x96c4e051b8e0fe5d!8m2!3d28.5252391!4d77.5778029",
    description: "",
    image: "https://cdn.discordapp.com/attachments/846575266545664014/998965754483453982/lake.jpeg"
  },
  {
    name: "C&D",
    location: "https://www.google.com/maps/place/28%C2%B031'32.0%22N+77%C2%B034'33.5%22E/@28.5255898,77.5759435,20.12z/data=!4m6!3m5!1s0x0:0x5845f81796d75ab8!7e2!8m2!3d28.5255601!4d77.5759632",
    description: "",
    image: "https://cdn.discordapp.com/attachments/846575266545664014/998965752289820722/CD.jpeg"
  },
  {
    name: "A&B",
    location: "https://www.google.co.in/maps/place//@28.526087,77.5764172,19.09z/data=!4m5!3m4!1s0x390c95bad744401f:0x4372c08299fe4057!8m2!3d28.5261641!4d77.5769734",
    description: "",
    image: ""
  },
  {
    name: "Lonely Tree",
    location: "https://www.google.co.in/maps/@28.5251392,77.5768623,17.38z",
    description: "The Rainbow tree which symbolizes support and solidarity for the LGBTQ+ community.",
    image: ""
  },
  {
    name: "BioDiversity Park",
    location: "https://www.google.co.in/maps/place/SNU,+Biodiversity+Park/@28.5223428,77.5744256,17z/data=!4m5!3m4!1s0x390c94d9023cde43:0x4d5dddd561a62ff!8m2!3d28.5223428!4d77.5766784",
    description: "The favorite haunt of the birds and bees in the campus A must visit for a nature lover to see the various biodiversity maintained in campus.",
    image: ""
  },
  {
    name: "Canopies",
    location: "https://www.google.co.in/maps/@28.5264947,77.5747881,18.65z",
    description: "A good place to bring your friends and get to know them better.",
    image: "https://cdn.discordapp.com/attachments/846575266545664014/998965752633770004/canospus.jpeg"
  },
  {
    name: "Chess Garden",
    location: "https://www.google.com/maps/place/Chess+Garden/@28.5238702,77.5710467,216m/data=!3m2!1e3!4b1!4m12!1m6!3m5!1s0x390ceb4eaaaaaaab:0x321412756718874c!2sShiv+Nadar+University!8m2!3d28.5267298!4d77.575363!3m4!1s0x390c94d745d9c23f:0xc75002c8ac2cb152!8m2!3d28.523869!4d77.5721022",
    description: "Literal heaven for a chess fanatic with life size board and pieces ,with a view of the isc.",
    image: ""
  }
], Essentials = [
  {
    name: "Parking 1",
    location: "https://www.google.co.in/maps/place/Parking+One/@28.5252819,77.573448,17.76z/data=!4m12!1m6!3m5!1s0x390ceb4eaaaaaaab:0x321412756718874c!2sShiv+Nadar+University!8m2!3d28.5267298!4d77.575363!3m4!1s0x390c94d9f0d15827:0xdcf98ff998034426!8m2!3d28.5245085!4d77.5742751",
    description: "",
    image: ""
  },
  {
    name: "Parking 2",
    location: "https://www.google.co.in/maps/place/Parking+2/@28.5257937,77.5737519,17.76z/data=!4m12!1m6!3m5!1s0x390ceb4eaaaaaaab:0x321412756718874c!2sShiv+Nadar+University!8m2!3d28.5267298!4d77.575363!3m4!1s0x390c95b1b47102cb:0x678ce2039d824146!8m2!3d28.52728!4d77.577825",
    description: "",
    image: ""
  },
  {
    name: "Mini Mart",
    location: "https://www.google.com/maps/place/Mini+Mart/@28.5249342,77.5714668,20.58z/data=!4m5!3m4!1s0x390c94d0cb66bbdb:0x16da5713b73668b4!8m2!3d28.5247548!4d77.5716399",
    description: "The only shop that will fulfill your hunger needs at 4am on those Saturday night outs. It includes a hair saloon for all your styling needs.",
    image: ""
  },
  {
    name: "Cycle Repair",
    location: "https://www.google.co.in/maps/@28.5274325,77.5728886,19.78z",
    description: "",
    image: ""
  },
  {
    name: "Happy Green",
    location: "https://www.google.co.in/maps/place/Happy+Green/@28.5289344,77.5744123,18.69z/data=!4m5!3m4!1s0x390c95cf5ce47985:0x72cfd999606e295d!8m2!3d28.528464!4d77.577451",
    description: "",
    image: ""
  },
  {
    name: "Adidas",
    location: "https://www.google.co.in/maps/place/Adidas/@28.5274375,77.5726823,19.89z/data=!4m5!3m4!1s0x390c95dc6bb8e8b9:0x7371b099414e028!8m2!3d28.5273995!4d77.5726357",
    description: "",
    image: ""
  },
  {
    name: "Supermarket",
    location: "https://www.google.co.in/maps/place/Auctus+Supermarket/@28.5274311,77.5728078,20.97z/data=!4m5!3m4!1s0x390c95e190bfb82b:0x52f71b28cb50094d!8m2!3d28.5272852!4d77.5728349",
    description: "",
    image: ""
  },
  {
    name: "HDFC Bank",
    location: "https://www.google.com/maps/place/Mini+Mart/@28.5247548,77.5715031,21z/data=!4m5!3m4!1s0x390c94d0cb66bbdb:0x16da5713b73668b4!8m2!3d28.5247548!4d77.5716399",
    description: "My bank has a new service where they text you your balance. It's cool I just don't think they should add \u2018LOL\u2019 at the end.",
    image: ""
  },
  {
    name: "Blue Circle",
    location: "https://www.google.com/maps/place/Health+and+wellnes+centre,SNU/@28.5265408,77.5722039,19.15z/data=!4m5!3m4!1s0x390c95fa1e9bb289:0xd4f01b5fb4ad62f9!8m2!3d28.5271032!4d77.5727221",
    description: "",
    image: ""
  },
  {
    name: "Unisex Salon",
    location: "https://www.google.co.in/maps/place/Mini+Mart/@28.5247548,77.57146,20z/data=!4m5!3m4!1s0x390c94d0cb66bbdb:0x16da5713b73668b4!8m2!3d28.5247548!4d77.5716399",
    description: "",
    image: ""
  },
  {
    name: "India Post",
    location: "https://www.google.co.in/maps/place/India+Post-+Shiv+Nadar+University/@28.5275579,77.5772969,15.89z/data=!4m5!3m4!1s0x390c94c51d18e2db:0xc8fdbcea44daf68c!8m2!3d28.5328773!4d77.5760378",
    description: "",
    image: ""
  },
  {
    name: "Medical Store",
    location: "https://www.google.co.in/maps/@28.5276063,77.5726312,19.31z",
    description: "need medication or band aids?Located in the arcade, this is the go to place for every SNU student.",
    image: ""
  },
  {
    name: "Books and Stationary",
    location: "https://www.google.co.in/maps/place/NH+91,+Greater+Noida,+Uttar+Pradesh+203207/@28.5276063,77.5726312,19.31z/data=!4m5!3m4!1s0x390c94d07df591cf:0x9597e95fec617bcc!8m2!3d28.5276157!4d77.5729347",
    description: "",
    image: ""
  }
], Sports = [
  {
    name: "Badminton Court (Outdoor)",
    location: "https://www.google.com/maps/place/SNU+Badminton+Court/@28.5249742,77.5718354,19.12z/data=!4m5!3m4!1s0x390c94d0b0dcecb5:0x8817703b05e2769b!8m2!3d28.5251713!4d77.5722183",
    description: "",
    image: ""
  },
  {
    name: "Badminton Court (Indoor)",
    location: "https://www.google.co.in/maps/place/SNU+Indoor+Sports+Complex/@28.5255896,77.5759983,16.02z/data=!4m5!3m4!1s0x390c94d7a94b99e3:0x43336882518f9b3c!8m2!3d28.5214868!4d77.5710233",
    description: "",
    image: ""
  },
  {
    name: "Basketball Court-1",
    location: "https://www.google.com/maps/place/SNU+Badminton+Court/@28.5249742,77.5718354,19.12z/data=!4m5!3m4!1s0x390c94d0b0dcecb5:0x8817703b05e2769b!8m2!3d28.5251713!4d77.5722183",
    description: "",
    image: ""
  },
  {
    name: "Basketball Court-2",
    location: "https://www.google.co.in/maps/@28.524264,77.5714902,19.72z",
    description: "",
    image: "https://cdn.discordapp.com/attachments/846575266545664014/998965751723593809/basketball_courts.jpeg"
  },
  {
    name: "Football Field",
    location: "https://www.google.com/maps/place/SNU+Football+Field/@28.5233855,77.5713738,18z/data=!3m1!4b1!4m5!3m4!1s0x390c94d74065430d:0x5c06333745fb65c7!8m2!3d28.5233841!4d77.5720214",
    description: "",
    image: ""
  },
  {
    name: "Tennis Court",
    location: "https://www.google.com/maps/place/Tennis+Court/@28.5237367,77.5692795,17.72z/data=!4m9!1m2!2m1!1ssnu+tennis+court!3m5!1s0x390c94d7304dbfc1:0x20c793f34b3b9e8f!8m2!3d28.5240682!4d77.571384!15sChBzbnUgdGVubmlzIGNvdXJ0kgEMdGVubmlzX2NvdXJ0",
    description: "",
    image: ""
  },
  {
    name: "Volleyball Court",
    location: "https://www.google.com/maps/place/SNU+Volleyball+Court/@28.5244348,77.5706511,18z/data=!3m1!4b1!4m5!3m4!1s0x390c94d0b999ead5:0x29e1febf964a8f9a!8m2!3d28.5244324!4d77.5717481",
    description: "",
    image: ""
  },
  {
    name: "Cricket Ground",
    location: "https://www.google.com/maps/place/SNU+Cricket+Ground,+Gautam+Buddha+Nagar,+Uttar+Pradesh+203207/@28.526007,77.5709629,17z/data=!3m1!4b1!4m5!3m4!1s0x390c94d0a17353b3:0x1bb8938d69c0a718!8m2!3d28.5260497!4d77.5732257",
    description: "",
    image: ""
  },
  {
    name: "Squash Court",
    location: "https://www.google.co.in/maps/place/SNU+Indoor+Sports+Complex/@28.5255896,77.5759983,16.02z/data=!4m5!3m4!1s0x390c94d7a94b99e3:0x43336882518f9b3c!8m2!3d28.5214868!4d77.5710233",
    description: "",
    image: ""
  },
  {
    name: "Table Tennis Court",
    location: "https://www.google.co.in/maps/place/SNU+Indoor+Sports+Complex/@28.5255896,77.5759983,16.02z/data=!4m5!3m4!1s0x390c94d7a94b99e3:0x43336882518f9b3c!8m2!3d28.5214868!4d77.5710233",
    description: "",
    image: ""
  },
  {
    name: "Horseback Riding",
    location: "https://www.google.com/maps/place/Greater+Noida,+Uttar+Pradesh+203207/@28.518782,77.57357,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0x390ceb4eaaaaaaab:0x321412756718874c!2sShiv+Nadar+University!8m2!3d28.5267298!4d77.575363!3m4!1s0x390c94d8756793eb:0xc605950461bcc5ed!8m2!3d28.5192457!4d77.574931",
    description: "",
    image: ""
  },
  {
    name: "Golf Course",
    location: "https://www.google.co.in/maps/@28.5282225,77.572396,18.02z",
    description: "Hit \u2018Em Long And Straight.",
    image: ""
  },
  {
    name: "Indoor Sports Complex",
    location: "https://www.google.co.in/maps/place/SNU+Indoor+Sports+Complex/@28.5255896,77.5759983,16.02z/data=!4m5!3m4!1s0x390c94d7a94b99e3:0x43336882518f9b3c!8m2!3d28.5214868!4d77.5710233",
    description: "",
    image: ""
  }
], data_default = {
  Residential,
  Academics,
  Food,
  POI,
  Essentials,
  Sports
};

// app/Components/SearchBar/SearchBar.js
function activeClassName(className, isActive) {
  return `${className} ${isActive ? className + "--active" : ""}`;
}
function SearchBar() {
  let [search, setSearch] = import_react5.default.useState(""), [isFocused, setIsFocused] = import_react5.default.useState(!1), [results, setResults] = import_react5.default.useState([]), testData = (0, import_react5.useMemo)(() => {
    let t = [];
    return Object.keys(data_default).forEach((key) => {
      let temp = data_default[key].map((obj) => __spreadProps(__spreadValues({}, obj), {
        category: key
      }));
      t = t.concat(temp);
    }), t;
  }, []), fuseOptions = {
    shouldSort: !0,
    keys: ["name"]
  }, fuse = new import_fuse.default(testData, fuseOptions);
  return (0, import_react5.useEffect)(() => {
    setResults(fuse.search(search));
  }, [search]), (0, import_react5.useEffect)(() => {
    isFocused ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
  }, [isFocused]), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: activeClassName("SearchBarWrapper", isFocused),
    onClick: () => {
      setIsFocused(!1);
    }
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: activeClassName("SearchBarWrapper__modal", isFocused)
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: activeClassName("SearchBarWrapper__searchBox", isFocused)
  }, /* @__PURE__ */ import_react5.default.createElement("input", {
    className: "SearchBarWrapper__input",
    type: "text",
    placeholder: "Search",
    value: search,
    onChange: (e) => {
      setSearch(e.target.value);
    },
    onClick: (e) => {
      e.stopPropagation(), setIsFocused(!0);
    }
  }), /* @__PURE__ */ import_react5.default.createElement("button", {
    type: "button",
    className: activeClassName("SearchBarWrapper__submit", isFocused)
  }, /* @__PURE__ */ import_react5.default.createElement("img", {
    src: SearchIcon_default,
    alt: "Search Icon"
  }))), results.length > 0 && /* @__PURE__ */ import_react5.default.createElement("div", {
    className: activeClassName("SearchBarWrapper__searchResults", isFocused)
  }, results.map((result) => /* @__PURE__ */ import_react5.default.createElement("a", {
    className: "SearchBarWrapper__searchResult",
    href: "/navigate/" + result.item.category + "?name=" + result.item.name,
    key: result.refIndex
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "SearchBarWrapper__resultCategory"
  }, result.item.category), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "SearchBarWrapper__resultName"
  }, result.item.name))))));
}
var SearchBar_default = SearchBar;

// app/Assets/Img/Mail.svg
var Mail_default = "/build/_assets/Mail-LJXXPCRU.svg";

// app/Assets/Img/Call.svg
var Call_default = "/build/_assets/Call-QIT6KBRT.svg";

// app/Assets/Img/facebookLogoWhite.svg
var facebookLogoWhite_default = "/build/_assets/facebookLogoWhite-X5ZUAZY5.svg";

// app/Assets/Img/instagramLogoWhite.svg
var instagramLogoWhite_default = "/build/_assets/instagramLogoWhite-4MNQON4N.svg";

// app/Assets/Img/linkedInLogo.svg
var linkedInLogo_default = "/build/_assets/linkedInLogo-CJAV2Y4O.svg";

// app/Components/Footer/Footer.js
function Footer() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "FooterWrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "FooterWrapper__container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "FooterWrapper__left"
  }, /* @__PURE__ */ React.createElement("img", {
    src: xploreLogo_default,
    alt: "xplore Logo",
    className: "FooterWrapper__left--logo"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "FooterWrapper__left--Copyright"
  }, "\xA9 2022 SnuExplore, All Rights Reserved")), /* @__PURE__ */ React.createElement("div", {
    className: "FooterWrapper__right"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "FooterWrapper__right--Service"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "FooterWrapper__right--rowHeading"
  }, "Services"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "/about"
  }, "About us")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "/navigate"
  }, "Navigate Campus")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "/events"
  }, "Happening @SNU")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "/events"
  }, "Events"))), /* @__PURE__ */ React.createElement("ul", {
    className: "FooterWrapper__right--Service"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "FooterWrapper__right--rowHeading"
  }, "Resources"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "/faq"
  }, "FAQ")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "/admin"
  }, "Admin")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "/club"
  }, "Club login"))), /* @__PURE__ */ React.createElement("ul", {
    className: "FooterWrapper__right--Service"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "FooterWrapper__right--rowHeading"
  }, "Contacts"), /* @__PURE__ */ React.createElement("li", {
    className: "mailIcon"
  }, /* @__PURE__ */ React.createElement("img", {
    src: Mail_default,
    alt: "Mail Icon"
  }), /* @__PURE__ */ React.createElement("a", {
    href: "mailto:"
  }, " Xplore@snu.edu.in")), /* @__PURE__ */ React.createElement("li", {
    className: "callIcon"
  }, /* @__PURE__ */ React.createElement("img", {
    src: Call_default,
    alt: "Call"
  }), /* @__PURE__ */ React.createElement("a", {
    href: "tel:"
  }, "+91 9838834210")), /* @__PURE__ */ React.createElement("li", {
    className: "SocialMediaHandles"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.facebook.com/snu.explore/"
  }, /* @__PURE__ */ React.createElement("img", {
    src: facebookLogoWhite_default,
    alt: "Facebook logo",
    className: "SocialMediaIcons"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://www.linkedin.com/snu.xplore/"
  }, /* @__PURE__ */ React.createElement("img", {
    src: linkedInLogo_default,
    alt: "LinkedIn logo",
    className: "SocialMediaIcons LinkedIn"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://www.instagram.com/snu.xplore/"
  }, /* @__PURE__ */ React.createElement("img", {
    src: instagramLogoWhite_default,
    alt: "Instagram logo",
    className: "SocialMediaIcons"
  })))))));
}
var Footer_default = Footer;

// route:/home/santhosh/Desktop/Projects/JavaScript/2022/13_SNUXplore/frontend/app/routes/Navigate.js
var import_react7 = require("@remix-run/react");
var import_react8 = require("@remix-run/react");
function links4() {
  return [{ rel: "stylesheet", href: Navigate_default }];
}
var loader = async ({ request }) => request.url;
function Navigate() {
  let url = (0, import_react7.useLoaderData)(), path = new URL(url).pathname.replace("/navigate/", ""), [currentOption, setCurrentOption] = import_react6.default.useState(path || Object.keys(data_default)[0]);
  return import_react6.default.useEffect(() => {
    let changeHeight = () => {
      let height = document.querySelector(".NavigatePage__content--right").getBoundingClientRect().height;
      document.querySelector(".NavigatePage__content--left").style.height = height + "px";
    }, resize_ob = new ResizeObserver(function(entries) {
      let height = entries[0].contentRect.height;
      document.querySelector(".NavigatePage__content--left").style.height = height + "px";
    });
    window.onload = changeHeight, window.onresize = changeHeight, resize_ob.observe(document.querySelector(".NavigatePage__content--right"));
  }), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "NavigatePage"
  }, /* @__PURE__ */ import_react6.default.createElement(Header_default, null), /* @__PURE__ */ import_react6.default.createElement("main", {
    className: "NavigatePage__main"
  }, /* @__PURE__ */ import_react6.default.createElement("section", {
    className: "NavigatePage__main--hero"
  }, /* @__PURE__ */ import_react6.default.createElement("h1", null, "Navigate ", /* @__PURE__ */ import_react6.default.createElement("span", null, "Campus")), /* @__PURE__ */ import_react6.default.createElement("p", null, "We get it, navigating the university can be challenging! But have no worries, We can connect you to resources that will unlock all that Shiv Nadar University has to offer."), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "NavigatePage__main--searchContainer"
  }, /* @__PURE__ */ import_react6.default.createElement(SearchBar_default, null))), /* @__PURE__ */ import_react6.default.createElement("section", {
    className: "NavigatePage__main--content"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "NavigatePage__content--left"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "NavigatePage__content--panel"
  }, Object.keys(data_default).map((key, index) => /* @__PURE__ */ import_react6.default.createElement(import_react8.Link, {
    replace: !0,
    className: `${currentOption === key ? "activeTab" : ""}`,
    key: index,
    to: `/navigate/${key}`,
    onClick: () => setCurrentOption(key)
  }, key)))), /* @__PURE__ */ import_react6.default.createElement(import_react7.Outlet, {
    context: data_default
  }))), /* @__PURE__ */ import_react6.default.createElement(Footer_default, null));
}

// route:/home/santhosh/Desktop/Projects/JavaScript/2022/13_SNUXplore/frontend/app/routes/Navigate/$option.js
var option_exports = {};
__export(option_exports, {
  default: () => NavOption,
  loader: () => loader2
});
var import_react11 = require("@remix-run/react"), import_react12 = __toESM(require("react"));

// app/Components/PlaceCard/PlaceCard.js
var import_react10 = __toESM(require("react"));

// app/Assets/Img/PlaceCard.png
var PlaceCard_default = "/build/_assets/PlaceCard-2VQPBE35.png";

// app/Components/ButtonLink/ButtonLink.js
var import_react9 = __toESM(require("react"));
function ButtonLink({ className, href, content, fill, fill2 }) {
  return /* @__PURE__ */ import_react9.default.createElement("a", {
    href,
    className: `ButtonLinkWrapper ${fill ? "ButtonLinkWrapper--fill" : ""} `
  }, /* @__PURE__ */ import_react9.default.createElement("p", null, content));
}
var ButtonLink_default = ButtonLink;

// app/Assets/Img/mapIcon2.svg
var mapIcon2_default = "/build/_assets/mapIcon2-KVRVS4YL.svg";

// app/Components/PlaceCard/PlaceCard.js
function PlaceCard({
  name,
  actionLists,
  desc,
  src,
  highlighted
}) {
  return /* @__PURE__ */ import_react10.default.createElement("div", {
    id: name,
    className: `
			PlaceCardWrapper
			${highlighted ? "PlaceCardWrapper--highlighted" : ""}
			`
  }, /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "PlaceCardWrapper__content"
  }, /* @__PURE__ */ import_react10.default.createElement("img", {
    className: "PlaceCardWrapper--image",
    src: src != "" ? src : PlaceCard_default,
    alt: "Placeholder"
  }), /* @__PURE__ */ import_react10.default.createElement("h2", {
    className: "PlaceCardWrapper__content--title"
  }, name), /* @__PURE__ */ import_react10.default.createElement("p", {
    className: "PlaceCardWrapper__content--desc"
  }, desc)), /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "PlaceCardWrapper__actions"
  }, actionLists.map((action, index) => /* @__PURE__ */ import_react10.default.createElement("a", {
    key: index,
    className: "PlaceCardWrapper__actions--link",
    href: action.href,
    target: "_blank"
  }, action.title == "Map" && /* @__PURE__ */ import_react10.default.createElement("img", {
    className: "PlaceCardWrapper__actions--icon",
    src: mapIcon2_default,
    alt: "map"
  }), action.title))));
}
var PlaceCard_default2 = PlaceCard;

// route:/home/santhosh/Desktop/Projects/JavaScript/2022/13_SNUXplore/frontend/app/routes/Navigate/$option.js
var loader2 = async ({ request }) => {
  let url = new URL(request.url), paramJson = {};
  return url.searchParams.forEach((value, key) => {
    paramJson[key] = value;
  }), paramJson;
  return url;
};
function NavOption() {
  let urlParams = (0, import_react11.useLoaderData)(), contextData = (0, import_react11.useOutletContext)(), { option } = (0, import_react11.useParams)(), [highlighted, setHighlighted] = import_react12.default.useState(!1);
  import_react12.default.useEffect(() => {
    highlighted && setTimeout(() => {
      setHighlighted(!1);
    }, 1500);
  }, [highlighted]), import_react12.default.useEffect(() => {
    let scrollToElement;
    urlParams.name ? (scrollToElement = document.getElementById(urlParams.name), setHighlighted(!0)) : urlParams.redirect || (scrollToElement = document.querySelector("body > div > main > section.NavigatePage__main--content")), scrollToElement && (window.innerWidth >= 590 ? window.scrollTo({
      top: scrollToElement.offsetTop - 220,
      behavior: "smooth"
    }) : window.scrollTo({
      top: scrollToElement.offsetTop,
      behavior: "smooth"
    }));
  }, [option, urlParams]);
  function generateActionLinks(entry2) {
    let actionLinks = [];
    return entry2.callWarden && actionLinks.push({
      title: "Call",
      href: `tel:${entry2.callWarden}`
    }), entry2.mailWarden && actionLinks.push({
      title: "Mail",
      href: `mailto:${entry2.mailWarden}`
    }), entry2.location && actionLinks.push({
      title: "Map",
      href: entry2.location
    }), entry2.menu && actionLinks.push({
      title: "Menu",
      href: entry2.menu
    }), actionLinks;
  }
  return /* @__PURE__ */ import_react12.default.createElement("div", {
    className: "NavigatePage__content--right"
  }, contextData[option].map((i, index) => /* @__PURE__ */ import_react12.default.createElement(PlaceCard_default2, {
    key: index,
    name: i.name,
    highlighted: urlParams.name == i.name && highlighted,
    actionLists: generateActionLinks(contextData[option][index]),
    desc: i.description,
    src: i.image
  })));
}

// route:/home/santhosh/Desktop/Projects/JavaScript/2022/13_SNUXplore/frontend/app/routes/Navigate/index.js
var Navigate_exports2 = {};
__export(Navigate_exports2, {
  loader: () => loader3
});
var import_node = require("@remix-run/node"), loader3 = () => (0, import_node.redirect)("/navigate/Residential?redirect=true");

// route:/home/santhosh/Desktop/Projects/JavaScript/2022/13_SNUXplore/frontend/app/routes/index.js
var routes_exports = {};
__export(routes_exports, {
  default: () => LandingPage,
  links: () => links5
});
var import_react17 = __toESM(require("react"));

// app/Components/InfoComponent__Desktop/InfoComponent__Desktop.js
var import_react13 = __toESM(require("react"));

// app/Assets/Img/Feature-1.svg
var Feature_1_default = "/build/_assets/Feature-1-6XETUC4A.svg";

// app/Assets/Img/Feature-2.svg
var Feature_2_default = "/build/_assets/Feature-2-EDX5ZMSA.svg";

// app/Assets/Img/Feature-3.svg
var Feature_3_default = "/build/_assets/Feature-3-VIABIJYO.svg";

// app/Components/InfoComponent__Desktop/InfoComponent__Desktop.js
function InfoComponent({ indicatorState = 1 }) {
  return /* @__PURE__ */ import_react13.default.createElement("div", {
    className: "InfoComponent__Container"
  }, /* @__PURE__ */ import_react13.default.createElement("div", {
    className: "InfoComponent__content--container"
  }, /* @__PURE__ */ import_react13.default.createElement("div", {
    className: "InfoComponent__content--container__indicator--container"
  }, /* @__PURE__ */ import_react13.default.createElement("div", {
    className: indicatorState === 1 ? "InfoComponent__content--container__indicator--container__indicator active" : "InfoComponent__content--container__indicator--container__indicator"
  }), /* @__PURE__ */ import_react13.default.createElement("div", {
    className: indicatorState === 2 ? "InfoComponent__content--container__indicator--container__indicator active" : "InfoComponent__content--container__indicator--container__indicator"
  }), /* @__PURE__ */ import_react13.default.createElement("div", {
    className: indicatorState === 3 ? "InfoComponent__content--container__indicator--container__indicator active" : "InfoComponent__content--container__indicator--container__indicator"
  })), /* @__PURE__ */ import_react13.default.createElement("div", {
    className: "InfoComponent__content--container__content"
  }, /* @__PURE__ */ import_react13.default.createElement("h1", {
    className: "InfoComponent__content--container__content__title"
  }, indicatorState === 1 ? "Navigate" : indicatorState === 2 ? "Happening" : "Admin &", " ", /* @__PURE__ */ import_react13.default.createElement("span", null, indicatorState === 1 ? "Campus" : indicatorState === 2 ? "@SNU" : "Info")), /* @__PURE__ */ import_react13.default.createElement("p", {
    className: "InfoComponent__content--container__content__para"
  }, "Nibh turpis porta integer diam. Quis id adipiscing aliquam ut pretium suspendisse eget."), /* @__PURE__ */ import_react13.default.createElement(ButtonLink_default, {
    fill: !1,
    content: indicatorState === 1 ? "Explore now" : indicatorState === 2 ? "Find an Event" : "Admin & Info"
  }))), /* @__PURE__ */ import_react13.default.createElement("div", {
    className: "InfoComponent__image--container"
  }, /* @__PURE__ */ import_react13.default.createElement("img", {
    className: "InfoComponent__image--container__image",
    src: indicatorState === 1 ? Feature_1_default : indicatorState === 2 ? Feature_2_default : Feature_3_default,
    alt: "feature-1Img"
  })));
}
var InfoComponent_Desktop_default = InfoComponent;

// app/Assets/Img/arrowLeft.svg
var arrowLeft_default = "/build/_assets/arrowLeft-LTBDEQQN.svg";

// app/Assets/Img/arrowRight.svg
var arrowRight_default = "/build/_assets/arrowRight-WX5VWZJW.svg";

// app/Components/InfoComponent__Mobile/InfoComponent__Mobile.js
var import_react14 = __toESM(require("react"));
function InfoComponent__Mobile() {
  let [infoIndex, setInfoIndex] = import_react14.default.useState(0), indicatorScrollRight = () => {
    infoIndex < 2 && setInfoIndex(infoIndex + 1), console.log(infoIndex);
  }, indicatorScrollLeft = () => {
    infoIndex > 0 && setInfoIndex(infoIndex - 1);
  };
  return /* @__PURE__ */ import_react14.default.createElement("div", {
    className: "MobileContainer"
  }, /* @__PURE__ */ import_react14.default.createElement("h1", {
    className: "MobileContainer__title"
  }, infoIndex === 0 ? "Navigate" : infoIndex === 1 ? "Happening" : "Admin &", " ", /* @__PURE__ */ import_react14.default.createElement("span", null, infoIndex === 0 ? "Campus" : infoIndex === 1 ? "@SNU" : "Info")), /* @__PURE__ */ import_react14.default.createElement("p", {
    className: "MobileContainer__desc"
  }, "We get it, navigating the university can be challenging! But have no worries, We can connect you to resourses that will unlock all that Shiv Nadar University has to offer."), /* @__PURE__ */ import_react14.default.createElement(ButtonLink_default, {
    content: infoIndex === 0 ? "Explore now" : infoIndex === 1 ? "Find an Event" : "Admin & Info"
  }), /* @__PURE__ */ import_react14.default.createElement("div", {
    className: "MobileContainer__ImageContainer"
  }, /* @__PURE__ */ import_react14.default.createElement("img", {
    className: "MobileContainer__ImageContainer__image",
    src: infoIndex === 0 ? Feature_1_default : infoIndex === 1 ? Feature_2_default : Feature_3_default
  })), /* @__PURE__ */ import_react14.default.createElement("div", {
    className: "MobileContainer__scrollerContainer"
  }, /* @__PURE__ */ import_react14.default.createElement("img", {
    className: "MobileContainer__scrollerContainer__arrow",
    src: arrowLeft_default,
    onClick: () => indicatorScrollLeft()
  }), /* @__PURE__ */ import_react14.default.createElement("div", {
    className: "MobileContainer__scrollerContainer__indicators"
  }, /* @__PURE__ */ import_react14.default.createElement("div", {
    className: infoIndex === 0 ? "circle active" : "circle"
  }), /* @__PURE__ */ import_react14.default.createElement("div", {
    className: infoIndex === 1 ? "circle active" : "circle"
  }), /* @__PURE__ */ import_react14.default.createElement("div", {
    className: infoIndex === 2 ? "circle active" : "circle"
  })), /* @__PURE__ */ import_react14.default.createElement("img", {
    className: "MobileContainer__scrollerContainer__arrow",
    src: arrowRight_default,
    onClick: () => indicatorScrollRight()
  })));
}

// app/Components/StillGotQuestions/StillGotQuestions.js
var import_react15 = __toESM(require("react"));
function StillGotQuestions() {
  return /* @__PURE__ */ import_react15.default.createElement("div", {
    className: "FaqRedirect"
  }, /* @__PURE__ */ import_react15.default.createElement("div", {
    className: "FaqRedirect__left"
  }, /* @__PURE__ */ import_react15.default.createElement("h1", {
    className: "FaqRedirect__title--white"
  }, "Still have"), /* @__PURE__ */ import_react15.default.createElement("h1", {
    className: "FaqRedirect__title--primaryTextColor"
  }, "Questions?")), /* @__PURE__ */ import_react15.default.createElement("div", {
    className: "FaqRedirect__right"
  }, /* @__PURE__ */ import_react15.default.createElement("div", {
    className: "FaqRedirect__right--container"
  }, /* @__PURE__ */ import_react15.default.createElement("p", {
    className: "FaqRedirect--desc"
  }, "Dignissim morbi scelerisque a mauris nec tellus orci, fringilla. Leo lorem arcu donec lectus netus eros. Massa sit magna lacus lorem eu metus sem."), /* @__PURE__ */ import_react15.default.createElement(ButtonLink_default, {
    className: "FaqRedirect--button",
    href: "/faq",
    content: "Checkout the FAQ",
    fill2: !0
  }))));
}
var StillGotQuestions_default = StillGotQuestions;

// app/styles/routes/LandingPage.css
var LandingPage_default = "/build/_assets/LandingPage-3HOSBEPY.css";

// app/Assets/Img/Arrow.svg
var Arrow_default = "/build/_assets/Arrow-4GQEQLUV.svg";

// route:/home/santhosh/Desktop/Projects/JavaScript/2022/13_SNUXplore/frontend/app/routes/index.js
var import_react_responsive2 = require("react-responsive");

// app/Hooks/Observer.js
var import_react16 = __toESM(require("react")), useScrollEffect = (defaultState, refArray) => {
  let [view, setView] = import_react16.default.useState(defaultState);
  return import_react16.default.useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry2) => {
        !entry2.isIntersecting || setView(entry2.target.classList[0].toString());
      });
    }, {
      root: null,
      threshold: 0.35
    });
    refArray.forEach((ref) => {
      observer.observe(ref);
    });
  }), { view };
}, Observer_default = useScrollEffect;

// route:/home/santhosh/Desktop/Projects/JavaScript/2022/13_SNUXplore/frontend/app/routes/index.js
var Sections = [
  {
    className: "aboutSection__View1"
  },
  {
    className: "aboutSection__View2"
  },
  {
    className: "aboutSection__View3"
  }
];
function links5() {
  return [{ rel: "stylesheet", href: LandingPage_default }];
}
function LandingPage() {
  let [theme, setTheme] = (0, import_react17.useState)("light"), toggleTheme = (value) => {
    setTheme(value);
  }, callToAction = (0, import_react_responsive2.useMediaQuery)({
    query: "(max-width: 1095px)"
  }), references = import_react17.default.useRef([]);
  references.current = [];
  let { view } = Observer_default(Sections[0].className, references.current), addRef = (element) => {
    element && !references.current.includes(element) && references.current.push(element);
  };
  return /* @__PURE__ */ import_react17.default.createElement("div", {
    className: "LandingPage"
  }, /* @__PURE__ */ import_react17.default.createElement(Header_default, null), /* @__PURE__ */ import_react17.default.createElement("main", {
    className: "LandingPage__mainContainer"
  }, /* @__PURE__ */ import_react17.default.createElement("section", {
    className: "heroSection"
  }, /* @__PURE__ */ import_react17.default.createElement("div", {
    className: "heroSection__top"
  }, /* @__PURE__ */ import_react17.default.createElement("div", {
    className: "heroSection__top--left"
  }, /* @__PURE__ */ import_react17.default.createElement("img", {
    className: "heroSection__arrow",
    src: Arrow_default,
    alt: "Arrow"
  }), /* @__PURE__ */ import_react17.default.createElement("div", {
    className: "heroSection__title"
  }, /* @__PURE__ */ import_react17.default.createElement("h1", null, "Your ", /* @__PURE__ */ import_react17.default.createElement("b", null, "guide"), ","), /* @__PURE__ */ import_react17.default.createElement("h1", null, "To all ", /* @__PURE__ */ import_react17.default.createElement("b", null, "things SNU"))), /* @__PURE__ */ import_react17.default.createElement("div", {
    className: "heroSection__desc"
  }, /* @__PURE__ */ import_react17.default.createElement("p", null, "We get it, navigating the university can be challenging! But have no worries, We can connect you to resourses that will unlock all that Shiv Nadar University has to offer.")), !callToAction && /* @__PURE__ */ import_react17.default.createElement("div", {
    className: "heroSection__callToAction"
  }, /* @__PURE__ */ import_react17.default.createElement(ButtonLink_default, {
    href: "/#learn-more",
    content: "Learn More"
  }), /* @__PURE__ */ import_react17.default.createElement(ButtonLink_default, {
    href: "/about",
    content: "Contact Us",
    fill: !0
  }))), /* @__PURE__ */ import_react17.default.createElement("div", {
    className: "heroSection__top--right"
  }, /* @__PURE__ */ import_react17.default.createElement("div", {
    className: "heroSection__funFact"
  }, /* @__PURE__ */ import_react17.default.createElement("span", null, "Fun Fact:\xA0"), /* @__PURE__ */ import_react17.default.createElement("p", null, "Absolutely fixed relatively broken coordinates")), /* @__PURE__ */ import_react17.default.createElement(SearchBar_default, null))), /* @__PURE__ */ import_react17.default.createElement("div", {
    className: "heroSection__bottom"
  }, /* @__PURE__ */ import_react17.default.createElement("div", {
    className: "heroSection__stats"
  }, /* @__PURE__ */ import_react17.default.createElement("p", {
    className: "heroSection__stats--title"
  }, "Faculty on Board"), /* @__PURE__ */ import_react17.default.createElement("p", {
    className: "heroSection__stats--stat"
  }, "1,500 +")), /* @__PURE__ */ import_react17.default.createElement("div", {
    className: "heroSection__stats"
  }, /* @__PURE__ */ import_react17.default.createElement("p", {
    className: "heroSection__stats--title"
  }, "Students enrolled '22"), /* @__PURE__ */ import_react17.default.createElement("p", {
    className: "heroSection__stats--stat"
  }, "29,000 +")), /* @__PURE__ */ import_react17.default.createElement("div", {
    className: "heroSection__stats"
  }, /* @__PURE__ */ import_react17.default.createElement("p", {
    className: "heroSection__stats--title"
  }, "Events held '22"), /* @__PURE__ */ import_react17.default.createElement("p", {
    className: "heroSection__stats--stat"
  }, "143 +")))), /* @__PURE__ */ import_react17.default.createElement("section", {
    className: "aboutSection"
  }, /* @__PURE__ */ import_react17.default.createElement(InfoComponent_Desktop_default, {
    indicatorState: view === Sections[0].className ? 1 : view === Sections[1].className ? 2 : 3
  }), /* @__PURE__ */ import_react17.default.createElement(InfoComponent__Mobile, null), Sections.map((section, index) => /* @__PURE__ */ import_react17.default.createElement("section", {
    key: index,
    className: section.className,
    ref: addRef
  }))), /* @__PURE__ */ import_react17.default.createElement(StillGotQuestions_default, null)), /* @__PURE__ */ import_react17.default.createElement(Footer_default, null));
}

// route:/home/santhosh/Desktop/Projects/JavaScript/2022/13_SNUXplore/frontend/app/routes/Faqs.js
var Faqs_exports = {};
__export(Faqs_exports, {
  default: () => Index3,
  links: () => links6
});

// app/styles/routes/Faqs/Faqs.css
var Faqs_default = "/build/_assets/Faqs-J3QQPXQO.css";

// route:/home/santhosh/Desktop/Projects/JavaScript/2022/13_SNUXplore/frontend/app/routes/Faqs.js
var import_react18 = __toESM(require("react")), import_react19 = require("@remix-run/react");
function links6() {
  return [{ rel: "stylesheet", href: Faqs_default }];
}
function Index3() {
  let [faqIndex, setFaqIndex] = import_react18.default.useState(0), testFAQs = [
    {
      id: 1,
      name: "Category 1",
      questions: [
        {
          id: 1,
          question: "How big is the Campus?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in vestibulum odio, nec tristique eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in vestibulum odio, nec tristique eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in vestibulum odio, nec tristique eros."
        },
        {
          id: 2,
          question: "How many Academic blocks?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in vestibulum odio, nec tristique eros."
        },
        {
          id: 3,
          question: "How many professors reside within?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in vestibulum odio, nec tristique eros."
        }
      ]
    },
    {
      id: 2,
      name: "Category 2",
      questions: [
        {
          id: 1,
          question: "Question 1",
          answer: "Answer 1"
        },
        {
          id: 2,
          question: "Question 2",
          answer: "Answer 2"
        }
      ]
    }
  ];
  return /* @__PURE__ */ import_react18.default.createElement("div", {
    className: "FaqsPage"
  }, /* @__PURE__ */ import_react18.default.createElement(Header_default, null), /* @__PURE__ */ import_react18.default.createElement("div", {
    className: "FaqsPage__mainContainer"
  }, /* @__PURE__ */ import_react18.default.createElement("section", {
    className: "mainSection"
  }, /* @__PURE__ */ import_react18.default.createElement("div", {
    className: "mainSection__top"
  }, /* @__PURE__ */ import_react18.default.createElement("h1", {
    className: "mainSection__title"
  }, "Frequently Asked Questions"), /* @__PURE__ */ import_react18.default.createElement("p", {
    className: "mainSection__desc"
  }, "Nibh turpis porta integer diam. Quis id adipiscing aliquam ut pretium suspendisse eget.")), /* @__PURE__ */ import_react18.default.createElement("div", {
    className: "mainSection__bottom"
  }, /* @__PURE__ */ import_react18.default.createElement("div", {
    className: "mainSection__categories"
  }, testFAQs.map((category2, index) => /* @__PURE__ */ import_react18.default.createElement(import_react19.Link, {
    to: `/faqs/${index + 1}`,
    style: { width: `calc(100% / ${testFAQs.length})` },
    className: "mainSection__categoryName " + (index === faqIndex ? "mainSection__categoryName--active" : ""),
    key: category2.id,
    onClick: () => {
      setFaqIndex(index);
    }
  }, category2.name))), /* @__PURE__ */ import_react18.default.createElement(import_react19.Outlet, {
    context: [testFAQs]
  })))), /* @__PURE__ */ import_react18.default.createElement(Footer_default, null));
}

// route:/home/santhosh/Desktop/Projects/JavaScript/2022/13_SNUXplore/frontend/app/routes/Faqs/$categoryId.js
var categoryId_exports = {};
__export(categoryId_exports, {
  default: () => category
});
var import_react21 = require("@remix-run/react"), import_react22 = require("@remix-run/react");

// app/Components/FaqDropdown/FaqDropdown.js
var import_react20 = __toESM(require("react"));
function FaqDropdown({ question, answer, isExpanded, onClick }) {
  let dropDownRef = import_react20.default.useRef(), [scrollHeight, setScrollHeight] = import_react20.default.useState(0), [style, setStyle] = import_react20.default.useState({
    transitionDuration: "500ms",
    transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    transitionProperty: "height",
    height: "0px",
    overflow: "hidden"
  });
  return import_react20.default.useEffect(() => {
    dropDownRef.current.scrollHeight != 0 && setScrollHeight(dropDownRef.current.scrollHeight);
  }), import_react20.default.useEffect(() => {
    isExpanded ? (setStyle({
      transitionDuration: "300ms",
      transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      transitionProperty: "height",
      overflow: "hidden",
      height: "0"
    }), setTimeout(() => {
      setStyle({
        transitionDuration: "500ms",
        transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transitionProperty: "height",
        overflow: "hidden",
        height: `${scrollHeight}px`
      });
    }, 50)) : (setStyle({
      transitionDuration: "300ms",
      transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      transitionProperty: "height",
      overflow: "hidden",
      height: "0"
    }), setTimeout(() => {
      setStyle({
        transitionDuration: "500ms",
        transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transitionProperty: "height",
        overflow: "hidden",
        display: "none"
      });
    }, 290));
  }, [isExpanded]), /* @__PURE__ */ import_react20.default.createElement("div", {
    className: `dropDown ${isExpanded ? "dropDown--active" : ""} `
  }, /* @__PURE__ */ import_react20.default.createElement("button", {
    className: `dropDown__question ${isExpanded ? "dropDown__question--active" : ""} `,
    onClick
  }, /* @__PURE__ */ import_react20.default.createElement("p", null, question), /* @__PURE__ */ import_react20.default.createElement("div", {
    className: `dropDown__questionExpanded ${isExpanded ? "dropDown__questionExpanded--active" : ""}`
  }, /* @__PURE__ */ import_react20.default.createElement("p", null, "+"))), /* @__PURE__ */ import_react20.default.createElement("div", {
    className: `dropDown__answer ${isExpanded ? "dropDown__answer--active" : ""} `,
    style
  }, /* @__PURE__ */ import_react20.default.createElement("p", {
    ref: dropDownRef
  }, answer)), /* @__PURE__ */ import_react20.default.createElement("div", {
    className: "dropDown__borderLine"
  }));
}
var FaqDropdown_default = FaqDropdown;

// route:/home/santhosh/Desktop/Projects/JavaScript/2022/13_SNUXplore/frontend/app/routes/Faqs/$categoryId.js
function category() {
  let { categoryId } = (0, import_react21.useParams)(), [questionIndex, setQuestionIndex] = React.useState(-1), [testFAQs] = (0, import_react22.useOutletContext)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "mainSection__questions"
  }, testFAQs[parseInt(categoryId) - 1].questions.map((question, index) => /* @__PURE__ */ React.createElement(FaqDropdown_default, {
    key: question.id,
    question: question.question,
    answer: question.answer,
    isExpanded: index === questionIndex,
    onClick: () => {
      setQuestionIndex(questionIndex === index ? -1 : index);
    }
  }))));
}

// route:/home/santhosh/Desktop/Projects/JavaScript/2022/13_SNUXplore/frontend/app/routes/Faqs/index.js
var Faqs_exports2 = {};
__export(Faqs_exports2, {
  loader: () => loader4
});
var import_node2 = require("@remix-run/node"), loader4 = () => (0, import_node2.redirect)("/faqs/1");

// route:/home/santhosh/Desktop/Projects/JavaScript/2022/13_SNUXplore/frontend/app/routes/demo.js
var demo_exports = {};
__export(demo_exports, {
  default: () => DemoPage,
  links: () => links7
});

// app/styles/routes/demo.css
var demo_default = "/build/_assets/demo-7ZW2IQKT.css";

// app/Components/EventCard/EventCard.js
function EventCard() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "EventCardWrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "EventCardWrapper__card"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "EventCardWrapper__card__left"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "EventCardWrapper__card__left__club"
  }, /* @__PURE__ */ React.createElement("img", {
    src: twitterLogo_default
  }), /* @__PURE__ */ React.createElement("h4", null, "Club Name")), /* @__PURE__ */ React.createElement("h2", null, "Event Name"), /* @__PURE__ */ React.createElement("p", null, "A&B Atrium")), /* @__PURE__ */ React.createElement("div", {
    className: "EventCardWrapper__right"
  }, /* @__PURE__ */ React.createElement("p", null, "20th July, 7:00 - 10:00 pm"), /* @__PURE__ */ React.createElement("button", null, "Read More \u2192"))));
}
var EventCard_default = EventCard;

// route:/home/santhosh/Desktop/Projects/JavaScript/2022/13_SNUXplore/frontend/app/routes/demo.js
function links7() {
  return [{ rel: "stylesheet", href: demo_default }];
}
var colors = ["#EBFFF2", "#F6EBFF", "#FFEFAF"];
function DemoPage() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "DemoPage"
  }, "This is a demo page template.", /* @__PURE__ */ React.createElement(Footer_default, null), colors.map((element) => /* @__PURE__ */ React.createElement(EventCard_default, null)));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "fbf2ac03", entry: { module: "/build/entry.client-24MH5JWU.js", imports: ["/build/_shared/chunk-EXCS4ZO3.js", "/build/_shared/chunk-DNEVBLEG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-5X6YDAMK.js", imports: ["/build/_shared/chunk-453L7CWL.js", "/build/_shared/chunk-M4OQM6OJ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Admin/index": { id: "routes/Admin/index", parentId: "root", path: "Admin", index: !0, caseSensitive: void 0, module: "/build/routes/Admin/index-PPAECMCP.js", imports: ["/build/_shared/chunk-WSF44BFQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Events/index": { id: "routes/Events/index", parentId: "root", path: "Events", index: !0, caseSensitive: void 0, module: "/build/routes/Events/index-ABWUM64X.js", imports: ["/build/_shared/chunk-WSF44BFQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Faqs": { id: "routes/Faqs", parentId: "root", path: "Faqs", index: void 0, caseSensitive: void 0, module: "/build/routes/Faqs-ODL2FWDH.js", imports: ["/build/_shared/chunk-SPAXNW4B.js", "/build/_shared/chunk-Q4BXO7MR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Faqs/$categoryId": { id: "routes/Faqs/$categoryId", parentId: "routes/Faqs", path: ":categoryId", index: void 0, caseSensitive: void 0, module: "/build/routes/Faqs/$categoryId-L2W27VTP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Faqs/index": { id: "routes/Faqs/index", parentId: "routes/Faqs", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/Faqs/index-HJOO2V5X.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Navigate": { id: "routes/Navigate", parentId: "root", path: "Navigate", index: void 0, caseSensitive: void 0, module: "/build/routes/Navigate-IPK7ZRVZ.js", imports: ["/build/_shared/chunk-JBYYKFGX.js", "/build/_shared/chunk-SPAXNW4B.js", "/build/_shared/chunk-Q4BXO7MR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Navigate/$option": { id: "routes/Navigate/$option", parentId: "routes/Navigate", path: ":option", index: void 0, caseSensitive: void 0, module: "/build/routes/Navigate/$option-XYDHUOHR.js", imports: ["/build/_shared/chunk-I36HFGPI.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Navigate/index": { id: "routes/Navigate/index", parentId: "routes/Navigate", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/Navigate/index-4TKPQX27.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demo": { id: "routes/demo", parentId: "root", path: "demo", index: void 0, caseSensitive: void 0, module: "/build/routes/demo-NFSI5ARE.js", imports: ["/build/_shared/chunk-Q4BXO7MR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-M4WHTJ4X.js", imports: ["/build/_shared/chunk-JBYYKFGX.js", "/build/_shared/chunk-SPAXNW4B.js", "/build/_shared/chunk-Q4BXO7MR.js", "/build/_shared/chunk-I36HFGPI.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-FBF2AC03.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/Events/index": {
    id: "routes/Events/index",
    parentId: "root",
    path: "Events",
    index: !0,
    caseSensitive: void 0,
    module: Events_exports
  },
  "routes/Admin/index": {
    id: "routes/Admin/index",
    parentId: "root",
    path: "Admin",
    index: !0,
    caseSensitive: void 0,
    module: Admin_exports
  },
  "routes/Navigate": {
    id: "routes/Navigate",
    parentId: "root",
    path: "Navigate",
    index: void 0,
    caseSensitive: void 0,
    module: Navigate_exports
  },
  "routes/Navigate/$option": {
    id: "routes/Navigate/$option",
    parentId: "routes/Navigate",
    path: ":option",
    index: void 0,
    caseSensitive: void 0,
    module: option_exports
  },
  "routes/Navigate/index": {
    id: "routes/Navigate/index",
    parentId: "routes/Navigate",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: Navigate_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/Faqs": {
    id: "routes/Faqs",
    parentId: "root",
    path: "Faqs",
    index: void 0,
    caseSensitive: void 0,
    module: Faqs_exports
  },
  "routes/Faqs/$categoryId": {
    id: "routes/Faqs/$categoryId",
    parentId: "routes/Faqs",
    path: ":categoryId",
    index: void 0,
    caseSensitive: void 0,
    module: categoryId_exports
  },
  "routes/Faqs/index": {
    id: "routes/Faqs/index",
    parentId: "routes/Faqs",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: Faqs_exports2
  },
  "routes/demo": {
    id: "routes/demo",
    parentId: "root",
    path: "demo",
    index: void 0,
    caseSensitive: void 0,
    module: demo_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
