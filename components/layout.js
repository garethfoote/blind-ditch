import { Footer } from "./Footer";
import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <main>{children}</main>
      <Footer />
    </>
  );
}
