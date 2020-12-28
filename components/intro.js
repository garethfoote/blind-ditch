import Link from "next/link";
import { SITE_TITLE } from "../lib/constants";

export default function Intro() {
  return (
    <section className="">
      <Link href="/">
        <a>{SITE_TITLE}</a>
      </Link>
    </section>
  );
}
