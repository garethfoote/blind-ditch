import Link from "next/link";

import styles from "./Intro.module.css";

export const Intro = () => {
  return (
    <section>
      <div className="flex items-center justify-center relative z-10 h-16">
        <Link href="/">
          <a className="h-10">
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
