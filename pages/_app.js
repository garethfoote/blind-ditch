import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

import "slick-carousel/slick/slick.css";
import "nprogress/nprogress.css";
import "../styles/index.css";

Router.events.on("routeChangeStart", (url) => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
