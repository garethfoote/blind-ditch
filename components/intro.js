import Link from "next/link";
import { SITE_TITLE } from "../lib/constants";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href="/">
          <a>{SITE_TITLE}</a>
        </Link>
      </h1>
    </section>
  );
}
