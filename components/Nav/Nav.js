import { CSSTransition } from "react-transition-group";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Nav.module.css";
import classnames from "classnames";

export default function Nav() {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  return (
    <div>
      <CSSTransition
        classNames={{
          appearActive: styles["nav-appear-active"],
          appearDone: styles["nav-appear-done"],

          enterActive: styles["nav-enter-active"],
          enterDone: styles["nav-enter-done"],

          exitActive: styles["nav-exit-active"],
          exitDone: styles["nav-exit-done"],
        }}
        in={isOpen}
        timeout={1000}
        // appear={true}
      >
        {(state) => {
          return (
            <div className={classnames(styles.nav, "pl-2 z-20")}>
              <ul className="font-main font-normal uppercase text-xs leading-2 pt-2">
                <li
                  className={classnames(styles.linkItem, {
                    [styles.active]: router.pathname == "/",
                  })}
                >
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li
                  className={classnames(styles.linkItem, {
                    [styles.active]: router.pathname.includes("/projects"),
                  })}
                >
                  <Link href="/projects">
                    <a>Work</a>
                  </Link>
                </li>
                <li
                  className={classnames(styles.linkItem, {
                    [styles.active]: router.pathname == "/about",
                  })}
                >
                  <Link href="/">
                    <a>About</a>
                  </Link>
                </li>
                <li
                  className={classnames(styles.linkItem, {
                    [styles.active]: router.pathname == "/documents",
                  })}
                >
                  <Link href="/documents">
                    <a>Documents</a>
                  </Link>
                </li>
                <li
                  className={classnames(styles.linkItem, {
                    [styles.active]: router.pathname == "/contact",
                  })}
                >
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          );
        }}
      </CSSTransition>
      <button
        className={classnames(
          styles.arrowHitArea,
          "md:hidden z-40 w-3 left-0 ml-2 mt-2 absolute outline-none"
        )}
        onClick={() => setOpen(!isOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 39 34">
          <path fill="#1F1F1F" d="M19.5 0l19.486 33.75H.014L19.5 0z" />
        </svg>
      </button>
    </div>
  );
}
