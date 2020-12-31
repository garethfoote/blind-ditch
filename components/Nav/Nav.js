import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Nav.module.css";
import classnames from "classnames";

export default function Nav() {
  const router = useRouter();
  return (
    <div className="absolute sm:visible top-2 left-2">
      <ul className="font-accent uppercase text-xs leading-2">
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
}
