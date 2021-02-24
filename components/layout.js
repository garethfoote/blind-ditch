import { Footer } from "./Footer";
import Meta from "../components/meta";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Layout({ preview, children }) {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname.indexOf("document") >= 0) {
      document.querySelector("body").classList.add("document");
    } else {
      document.querySelector("body").classList.remove("document");
    }
  });
  return (
    <>
      <Meta />
      <main>{children}</main>
      <Footer />
    </>
  );
}
