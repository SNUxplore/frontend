import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import resetStyle from "./styles/root/reset.css";
import globalStyle from "./styles/root/global.css";
import componentStyle from "./styles/root/components.css";

import favIcon from "app/Assets/Img/xploreLogo.svg";


export function links() {
  return [
    { rel: "stylesheet", href: resetStyle },
    { rel: "stylesheet", href: globalStyle },
    { rel: "stylesheet", href: componentStyle },
    {
      rel: "icon",
      href: favIcon,
      type: "image/png",
    },
  ];
}

export const meta = () => ({
  charset: "utf-8",
  title: "SNUxplore",
  viewport: "width=device-width,initial-scale=1",
});

export const ThemeScript = () => {
  const clientCode = `
  if (
    !location.pathname.includes("club") &&
    !location.pathname.includes("login")
  ) {
    // if (localStorage.getItem("clubTempTheme")) {
    //   localStorage.setItem("theme", localStorage.getItem("clubTempTheme")?localStorage.getItem("clubTempTheme") : "light");
    //   localStorage.removeItem("clubTempTheme");
    // }
    // const theme = localStorage.getItem("theme");

    // if (theme) {
    //   document.getElementsByTagName("html").item(0).classList.add(theme);
    // } else {
    //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //     document.getElementsByTagName("html").item(0).classList.add("dark");
    //     localStorage.setItem("theme", "dark");
    //   } else {
    //     document.getElementsByTagName("html").item(0).classList.add("light");
    //   }
    // }
    document.getElementsByTagName('html').item(0).classList.add('light');
    localStorage.setItem('theme', 'light');
  } else {
    document.getElementsByTagName("html").item(0).classList.add("light");
    localStorage.setItem('theme', 'light');
    // document.getElementsByTagName("html").item(0).classList.remove("dark");
    // document.getElementsByTagName("html").item(0).classList.remove("pink");

    // localStorage.setItem("clubTempTheme", localStorage.getItem("theme"));
    // localStorage.setItem("theme", "light");
  }

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-320PBWTY9Q');

  (function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:3098232,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

  `;
  return <script dangerouslySetInnerHTML={{ __html: clientCode }} />;
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <ThemeScript />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-320PBWTY9Q"></script>
        <Links /> 
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
