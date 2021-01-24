import Link from "next/link";

import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <>
      <div className="flex justify-center relative h-10 z-10">
        <Link href="/">
          <a className="inline-block h-10 mx-auto mt-4">
            <img
              alt="Blind Ditch logo in black"
              className="h-full w-auto"
              src="/logo-black.png"
            />
            <span className="visually-hidden">Blind Ditch</span>
          </a>
        </Link>
      </div>
    </>
  );
};
