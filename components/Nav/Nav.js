import { CSSTransition } from "react-transition-group";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Nav.module.css";
import classnames from "classnames";

export default function Nav() {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();

  return (
    <nav aria-label="Main Navigation">
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
        timeout={500}
      >
        {(state) => {
          return (
            <div
              id="global-navigation-menu"
              className={classnames(
                styles.nav,
                "hidden lg:block h-0 pl-4 z-20 overflow-hidden"
              )}
            >
              <ul tabIndex="-1" className="mt-4 font-main font-bold ">
                <li
                  className={classnames(styles.linkItem, {
                    [styles.active]: router.asPath == "/",
                  })}
                >
                  <Link href="/">
                    <a aria-current={router.asPath == "/" ? "page" : false}>
                      Home
                    </a>
                  </Link>
                </li>
                <li
                  className={classnames(styles.linkItem, {
                    [styles.active]: router.asPath == "/projects",
                  })}
                >
                  <Link href="/projects">
                    <a
                      aria-current={
                        router.asPath == "/projects" ? "page" : false
                      }
                    >
                      Work
                    </a>
                  </Link>
                </li>
                <li
                  className={classnames(styles.linkItem, {
                    [styles.active]: router.asPath == "/page/about",
                  })}
                >
                  <Link href="/page/about">
                    <a
                      aria-current={
                        router.asPath == "/page/about" ? "page" : false
                      }
                    >
                      About
                    </a>
                  </Link>
                </li>
                <li
                  className={classnames(styles.linkItem, {
                    [styles.active]: router.asPath == "/page/about#contact",
                  })}
                >
                  <Link href="/page/about#contact">
                    <a
                      aria-current={
                        router.asPath == "/page/about#contact" ? "page" : false
                      }
                    >
                      Contact
                    </a>
                  </Link>
                </li>
                <li
                  className={classnames(styles.linkItem, {
                    [styles.active]: router.asPath == "/page/about#people",
                  })}
                >
                  <Link href="/page/about#people">
                    <a
                      aria-current={
                        router.asPath == "/page/about#people" ? "page" : false
                      }
                    >
                      People
                    </a>
                  </Link>
                </li>
                <li
                  className={classnames(styles.linkItem, styles.linkItemDoc, {
                    [styles.active]: router.asPath == "/documents",
                    [styles.activeDoc]: router.asPath == "/documents",
                  })}
                >
                  <Link href="/documents">
                    <a
                      aria-current={
                        (router.asPath = "/documents" ? "page" : false)
                      }
                    >
                      Documents
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          );
        }}
      </CSSTransition>
      <a
        href="#"
        aria-label="More menu"
        aria-expanded={isOpen.toString()}
        aria-controls="global-navigation-menu"
        role="button"
        className={classnames(
          styles.arrow,
          "lg:hidden z-40 w-3 h-3 left-0 m-2 ml-4 mt-3 absolute"
        )}
        onClick={(e) => {
          e.preventDefault();
          setOpen(!isOpen);
        }}
      >
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 39 34"
        >
          <path fill="#1F1F1F" d="M19.5 0l19.486 33.75H.014L19.5 0z" />
        </svg>{" "}
        <span
          aria-hidden="true"
          className="title-underline-after absolute -top-1 left-4 text-xs"
        >
          Nav
        </span>
        <span className="sr-only">
          {isOpen ? "Open Main Navigation" : "Close Main Navigation"}
        </span>
      </a>
    </nav>
  );
}
