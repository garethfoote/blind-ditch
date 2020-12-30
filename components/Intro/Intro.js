import Link from "next/link";
import Nav from "../Nav/Nav";

import styles from "./Intro.module.css";

export const Intro = () => {
  return (
    <section className="">
      <Nav />
      <div className="flex items-center justify-center h-24">
        <Link href="/">
          <a className="h-10 sm:h-14">
            <img
              alt="Blind Ditch logo in black"
              className="h-full w-auto"
              src="/logo-black.png"
            />
            <span className="visually-hidden">Blind Ditch</span>
          </a>
        </Link>
      </div>
    </section>
  );
};
