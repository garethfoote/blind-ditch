import Link from "next/link";
import { SITE_TITLE } from "../../lib/constants";

import styles from "./Intro.module.css";

export const Intro = () => {
  return (
    <section className="">
      <div className="flex items-center justify-center h-24">
        <Link href="/">
          <a className="h-14">
            <img className="h-full w-auto" src="/logo-black.png" />
            <span className="visually-hidden">Blind Ditch</span>
          </a>
        </Link>
      </div>
    </section>
  );
};
